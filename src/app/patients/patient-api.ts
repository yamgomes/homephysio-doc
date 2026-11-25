import { Injectable, inject } from "@angular/core";
import type { Patient, SessionReport, Therapy } from "@homephysio/contracts";
import { createCode, validCode, validTherapy } from "@homephysio/contracts";
import { AuthState } from "../auth-state";

@Injectable({ providedIn: "root" })
export class PatientApi {
  private readonly auth = inject(AuthState);

  private async context() {
    const { uid, app } = await this.auth.verifiedSession();
    const sdk = await import("firebase/firestore");
    return { uid, db: sdk.getFirestore(app), sdk };
  }
  async list(): Promise<Patient[]> {
    const { uid, db, sdk } = await this.context();
    const { getDocsFromServer, query, collection, orderBy, limit } = sdk;
    const snapshot = await getDocsFromServer(
      query(
        collection(db, "professionals", uid, "patients"),
        orderBy("createdAt", "desc"),
        limit(100),
      ),
    );
    return snapshot.docs.map((d) => ({ ...d.data(), id: d.id }) as Patient);
  }
  async get(id: string): Promise<Patient | null> {
    const { uid, db, sdk } = await this.context();
    const snapshot = await sdk.getDocFromServer(
      sdk.doc(db, "professionals", uid, "patients", id),
    );
    return snapshot.exists()
      ? ({ ...snapshot.data(), id: snapshot.id } as Patient)
      : null;
  }
  async listResults(
    patientId: string,
  ): Promise<(SessionReport & { id: string })[]> {
    const { uid, db, sdk } = await this.context();
    const { collection, query, orderBy, limit, getDocsFromServer } = sdk;
    const results = collection(
      db,
      "professionals",
      uid,
      "patients",
      patientId,
      "results",
    );
    const snapshot = await getDocsFromServer(
      query(results, orderBy("completedAtMs", "desc"), limit(100)),
    );
    return snapshot.docs.map((document) => {
      const { accessCode: _, ...report } = document.data();
      return { ...report, id: document.id } as SessionReport & { id: string };
    });
  }
  async create(name: string): Promise<Patient> {
    name = name.trim();
    if (!name || name.length > 120)
      throw Error("Informe um nome de até 120 caracteres.");
    const { uid, db, sdk } = await this.context();
    const { doc, collection, setDoc, serverTimestamp } = sdk;
    const reference = doc(collection(db, "professionals", uid, "patients"));
    const data = {
      name,
      code: "",
      therapy: null,
      revision: 0,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };
    await setDoc(reference, data);
    return { id: reference.id, name, code: "", therapy: null, revision: 0 };
  }
  async prescribe(
    patientId: string,
    therapy: Therapy,
    expectedRevision: number,
  ): Promise<Patient> {
    if (!validTherapy(therapy))
      throw Error(
        "Confira os parâmetros da terapia e selecione pelo menos uma métrica.",
      );
    return this.change(patientId, therapy, false, expectedRevision);
  }
  async rotate(patient: Patient): Promise<Patient> {
    return this.change(patient.id, null, true, patient.revision);
  }
  private async change(
    patientId: string,
    therapy: Therapy | null,
    rotate: boolean,
    expectedRevision: number,
  ): Promise<Patient> {
    const { uid, db, sdk } = await this.context();
    const { doc, runTransaction, serverTimestamp } = sdk;
    const reference = doc(db, "professionals", uid, "patients", patientId);
    for (let attempt = 0; attempt < 8; attempt++) {
      let issuing = false;
      try {
        return await runTransaction(db, async (tx) => {
          const snapshot = await tx.get(reference);
          if (!snapshot.exists()) throw Error("Paciente não encontrado.");
          const previous = snapshot.data() as Omit<Patient, "id">;
          if (previous.revision !== expectedRevision)
            throw Error(
              "Este paciente foi alterado em outra aba. Atualize a lista antes de salvar.",
            );
          const nextTherapy = rotate ? previous.therapy : therapy;
          if (!validTherapy(nextTherapy))
            throw Error("Configure a terapia antes de gerar o código.");

          issuing = rotate || !validCode(previous.code);
          let code = previous.code;
          if (issuing) {
            do {
              code = createCode();
            } while (code === previous.code);
            tx.set(doc(db, "issuedPatientCodes", code), {
              ownerId: uid,
              patientId,
            });
            if (previous.code)
              tx.set(doc(db, "patientAccess", previous.code), {
                revoked: true,
              });
          }
          const revision = previous.revision + 1;
          tx.set(doc(db, "patientAccess", code), {
            ownerId: uid,
            patientId,
            therapy: nextTherapy,
            revision,
          });
          tx.update(reference, {
            therapy: nextTherapy,
            code,
            revision,
            updatedAt: serverTimestamp(),
          });
          return {
            id: patientId,
            name: previous.name,
            code,
            therapy: nextTherapy,
            revision,
          };
        });
      } catch (error) {
        // Uma reserva existente só pode ser detectada pela recusa da transação.
        if (
          !issuing ||
          !(error instanceof Error) ||
          !("code" in error) ||
          error.code !== "permission-denied"
        )
          throw error;
      }
    }
    throw Error("Não foi possível gerar um código. Tente novamente.");
  }
}
