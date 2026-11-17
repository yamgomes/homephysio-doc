import { Injectable } from '@angular/core';
import { createCode, validCode, validTherapy } from '@homephysio/contracts';
import type { Patient, Therapy } from '@homephysio/contracts';

@Injectable({ providedIn: 'root' })
export class PatientApi {
  private async context() {
    const { auth } = await import('../account');
    await auth.authStateReady();
    const user = auth.currentUser;
    if (!user) throw Error('Entre na sua conta.');
    await user.reload(); await user.getIdToken(true);
    if (!user.emailVerified) throw Error('Confirme seu e-mail antes de gerenciar pacientes.');
    const sdk = await import('firebase/firestore'); return { uid: user.uid, db: sdk.getFirestore(auth.app), sdk };
  }
  async list(): Promise<Patient[]> {
    const { uid, db, sdk } = await this.context();
    const { getDocsFromServer, query, collection, orderBy, limit } = sdk; const snapshot = await getDocsFromServer(query(collection(db, 'professionals', uid, 'patients'), orderBy('createdAt', 'desc'), limit(100)));
    return snapshot.docs.map(d => ({ ...d.data(), id: d.id }) as Patient);
  }
  async get(id: string): Promise<Patient | null> {
    const { uid, db, sdk } = await this.context();
    const snapshot = await sdk.getDocFromServer(sdk.doc(db, 'professionals', uid, 'patients', id));
    return snapshot.exists() ? { ...snapshot.data(), id: snapshot.id } as Patient : null;
  }
  async create(name: string): Promise<Patient> {
    name = name.trim();
    if (!name || name.length > 120) throw Error('Informe um nome de até 120 caracteres.');
    const { uid, db, sdk } = await this.context();
    const { doc, collection, setDoc, serverTimestamp } = sdk; const reference = doc(collection(db, 'professionals', uid, 'patients'));
    const data = { name, code: '', therapy: null, revision: 0, createdAt: serverTimestamp(), updatedAt: serverTimestamp() };
    await setDoc(reference, data);
    return { id: reference.id, name, code: '', therapy: null, revision: 0 };
  }
  async prescribe(patientId: string, therapy: Therapy, expectedRevision: number): Promise<Patient> {
    if (!validTherapy(therapy)) throw Error('Confira os parâmetros da terapia e selecione pelo menos uma métrica.');
    return this.change(patientId, therapy, false, expectedRevision);
  }
  async rotate(patient: Patient): Promise<Patient> { return this.change(patient.id, null, true, patient.revision); }
  private async change(patientId: string, therapy: Therapy | null, rotate: boolean, expectedRevision: number): Promise<Patient> {
    const { uid, db, sdk } = await this.context();
    const { doc, runTransaction, serverTimestamp } = sdk; const reference = doc(db, 'professionals', uid, 'patients', patientId);
    return runTransaction(db, async tx => {
      const snapshot = await tx.get(reference);
      if (!snapshot.exists()) throw Error('Paciente não encontrado.');
      const previous = snapshot.data() as Omit<Patient, 'id'>;
      if (previous.revision !== expectedRevision) throw Error('Este paciente foi alterado em outra aba. Atualize a lista antes de salvar.');
      const nextTherapy = rotate ? previous.therapy : therapy;
      if (!validTherapy(nextTherapy)) throw Error('Configure a terapia antes de gerar o código.');
      let code = previous.code;
      if (rotate || !validCode(code)) {
        for (let attempt = 0; attempt < 8; attempt++) {
          const candidate = createCode();
          if (candidate === previous.code) continue;
          if (!(await tx.get(doc(db, 'patientAccess', candidate))).exists()) {
            code = candidate;
            break;
          }
        }
        if (code === previous.code) throw Error('Não foi possível reservar um código. Tente novamente.');
      }
      const revision = previous.revision + 1;
      if (previous.code && previous.code !== code) tx.set(doc(db, 'patientAccess', previous.code), { revoked: true });
      tx.set(doc(db, 'patientAccess', code), { ownerId: uid, patientId, therapy: nextTherapy, revision });
      tx.update(reference, { therapy: nextTherapy, code, revision, updatedAt: serverTimestamp() });
      return { id: patientId, name: previous.name, code, therapy: nextTherapy, revision };
    });
  }
}



