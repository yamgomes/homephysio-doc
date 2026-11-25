import {
  Injectable,
  computed,
  effect,
  inject,
  signal,
  untracked,
} from "@angular/core";
import type { Patient, Therapy } from "@homephysio/contracts";
import { AuthState } from "../auth-state";
import { PatientApi } from "./patient-api";

function errorMessage(error: unknown): string {
  if ((error as { code?: string })?.code === "permission-denied")
    return "Acesso negado. Confirme seu e-mail e tente novamente.";
  return error instanceof Error
    ? error.message
    : "Não foi possível concluir. Tente novamente.";
}

@Injectable({ providedIn: "root" })
export class PatientStore {
  private readonly auth = inject(AuthState);
  private readonly api = inject(PatientApi);
  private readonly detail = signal<Patient | null>(null);
  private readonly selectedId = signal<string | null>(null);
  private generation = 0;
  private detailGeneration = 0;

  readonly patients = signal<Patient[]>([]);
  readonly selected = computed(() => {
    const id = this.selectedId();
    const detail = this.detail();
    return (
      this.patients().find((patient) => patient.id === id) ??
      (detail?.id === id ? detail : null)
    );
  });
  readonly busy = signal(false);
  readonly message = signal("");
  readonly listLoaded = signal(false);
  readonly detailLoading = signal(false);
  readonly detailError = signal("");

  constructor() {
    effect(() => {
      const uid = this.auth.uid();
      const verified = this.auth.emailVerified();
      this.generation++;
      this.detailGeneration++;
      this.patients.set([]);
      this.selectedId.set(null);
      this.detail.set(null);
      this.detailLoading.set(false);
      this.detailError.set("");
      this.listLoaded.set(false);
      this.message.set("");
      this.busy.set(false);
      if (uid && verified) untracked(() => void this.refresh());
    });
  }

  private async run<T>(
    action: (current: () => boolean) => Promise<T>,
  ): Promise<T | undefined> {
    const uid = this.auth.uid();
    if (this.busy() || !uid || !this.auth.emailVerified()) return;
    const generation = this.generation;
    const current = () =>
      generation === this.generation && uid === this.auth.uid();
    this.busy.set(true);
    this.message.set("");
    try {
      return await action(current);
    } catch (error) {
      if (current()) this.message.set(errorMessage(error));
      return undefined;
    } finally {
      if (current()) this.busy.set(false);
    }
  }

  refresh() {
    return this.run(async (current) => {
      const list = await this.api.list();
      if (!current()) return;
      this.patients.set(list);
      this.listLoaded.set(true);
    });
  }

  async select(id: string) {
    const uid = this.auth.uid();
    const generation = ++this.detailGeneration;
    this.selectedId.set(id);
    this.detail.set(null);
    this.detailError.set("");
    this.detailLoading.set(false);
    if (this.selected() || !uid || !this.auth.emailVerified()) return;
    const current = () =>
      generation === this.detailGeneration && uid === this.auth.uid();
    this.detailLoading.set(true);
    try {
      const patient = await this.api.get(id);
      if (current()) this.detail.set(patient);
    } catch (error) {
      if (current()) this.detailError.set(errorMessage(error));
    } finally {
      if (current()) this.detailLoading.set(false);
    }
  }

  create(name: string) {
    return this.run(async (current) => {
      const patient = await this.api.create(name);
      if (!current()) return;
      this.patients.update((list) => [patient, ...list]);
      this.message.set(
        "Paciente cadastrado. Salve a terapia para gerar o código.",
      );
      return patient;
    });
  }

  save(therapy: Therapy) {
    const patient = this.selected();
    if (patient)
      return this.update(
        patient,
        () => this.api.prescribe(patient.id, therapy, patient.revision),
        "Terapia salva.",
      );
    return Promise.resolve();
  }

  rotate() {
    const patient = this.selected();
    if (patient)
      return this.update(
        patient,
        () => this.api.rotate(patient),
        "Novo código gerado. O código anterior foi invalidado.",
      );
    return Promise.resolve();
  }

  private update(
    patient: Patient,
    action: () => Promise<Patient>,
    message: string,
  ) {
    return this.run(async (current) => {
      const next = await action();
      if (!current()) return;
      this.patients.update((list) =>
        list.map((item) => (item.id === patient.id ? next : item)),
      );
      if (this.selectedId() === patient.id) {
        this.detail.set(next);
        this.message.set(message);
      }
      return next;
    });
  }
}
