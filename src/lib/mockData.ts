import { Shift, Booking, Instructor, Client, EmailLog, StudioSettings, Plan, Discipline } from "@/types";

export const initialStudioSettings: StudioSettings = {
  studioName: "Demo Pilates",
  tagline: "",
  address: "Av. Corrientes 1111, CABA",
  phone: "",
  instagram: "@rodriguezjuliaan",
  cancellationWindowHours: 3,
  allowWaitlist: true,
  currency: "ARS",
};

export const initialInstructors: Instructor[] = [];
export const initialShifts: Shift[] = [];
export const initialBookings: Booking[] = [];
export const initialClients: Client[] = [];
export const initialEmailLogs: EmailLog[] = [];

export const initialDisciplines: Discipline[] = [];
export const initialPlans: Plan[] = [];
