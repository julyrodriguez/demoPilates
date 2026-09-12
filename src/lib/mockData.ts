import { Shift, Booking, Instructor, Client, EmailLog, StudioSettings, Plan, Discipline } from "@/types";
import { generateBookingSearchKeywords } from "./searchKeywords";

export const initialStudioSettings: StudioSettings = {
  studioName: "Demo Pilates",
  tagline: "Equilibrio, Fuerza y Movimiento Consciente",
  address: "Av. Corrientes 1111, CABA",
  phone: "+54 9 11 1234-5678",
  instagram: "@rodriguezjuliaan",
  cancellationWindowHours: 3,
  allowWaitlist: true,
  currency: "ARS",
};

export const initialDisciplines: Discipline[] = [
  { id: "disc-reformer", name: "Reformer (Camas)", slug: "reformer", color: "indigo", description: "Clases en camas Reformer para tonificación y alineación" },
  { id: "disc-mat", name: "Mat Pilates (Suelo)", slug: "mat", color: "emerald", description: "Pilates en suelo con pelotas y bandas elásticas" },
  { id: "disc-cadillac", name: "Cadillac", slug: "cadillac", color: "violet", description: "Entrenamiento completo con resortes y trapecio" },
  { id: "disc-power", name: "Power Pilates HIIT", slug: "power", color: "rose", description: "Fusión de intensidad aeróbica y control postural" },
];

export const initialPlans: Plan[] = [
  {
    id: "plan-1x",
    name: "Plan 1 Clase x Semana",
    classesPerWeek: 1,
    classesPerMonth: 4,
    price: 32000,
    description: "Ideal para complementar con otra actividad deportiva",
    active: true,
  },
  {
    id: "plan-2x",
    name: "Plan 2 Clases x Semana",
    classesPerWeek: 2,
    classesPerMonth: 8,
    price: 52000,
    description: "El más elegido para tonificación continua y corrección postural",
    active: true,
  },
  {
    id: "plan-3x",
    name: "Plan 3 Clases x Semana",
    classesPerWeek: 3,
    classesPerMonth: 12,
    price: 68000,
    description: "Máxima frecuencia y avance intensivo en fuerza y flexibilidad",
    active: true,
  },
  {
    id: "plan-libre",
    name: "Pase Libre Pilates",
    classesPerWeek: 5,
    classesPerMonth: 20,
    price: 85000,
    description: "Acceso total sin límite de días para alumnas avanzadas",
    active: true,
  },
];

export const initialInstructors: Instructor[] = [
  {
    id: "inst-1",
    name: "Sofía Valenzuela",
    email: "sofia@demopilates.com",
    phone: "+54 9 11 5555-0101",
    specialties: ["reformer", "cadillac"],
    bio: "Instructora certificada con más de 6 años de experiencia en método clásico y contemporáneo.",
    colorTag: "indigo",
    active: true,
  },
  {
    id: "inst-2",
    name: "Mariana Costa",
    email: "mariana@demopilates.com",
    phone: "+54 9 11 5555-0102",
    specialties: ["mat", "reformer"],
    bio: "Kinesióloga y docente de Pilates especializada en cuidado articular y prenatal.",
    colorTag: "emerald",
    active: true,
  },
  {
    id: "inst-3",
    name: "Valentina López",
    email: "valentina@demopilates.com",
    phone: "+54 9 11 5555-0103",
    specialties: ["power", "reformer"],
    bio: "Especialista en entrenamiento funcional y alta exigencia neuromuscular.",
    colorTag: "purple",
    active: true,
  },
];

function getMonday(baseDate: Date): Date {
  const d = new Date(baseDate);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

function formatDateStr(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function generateDynamicDemoData() {
  const now = new Date();
  const thisMonday = getMonday(now);
  const monthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;

  const clients: Client[] = [
    {
      id: "cli-1",
      name: "Valentina Gómez",
      email: "valentina.gomez@gmail.com",
      phone: "1144445555",
      planId: "plan-2x",
      planName: "Plan 2 Clases x Semana",
      planClassesPerWeek: 2,
      customPrice: 52000,
      billingFrequency: "monthly",
      paymentStatus: "paid",
      lastPaymentDate: formatDateStr(now),
      totalBookings: 6,
      attendedBookings: 4,
      cancelledBookings: 0,
      lastBookingDate: formatDateStr(now),
      createdAt: new Date(Date.now() - 30 * 86400000).toISOString(),
      healthNotes: "Molestia lumbar leve, prefiere ejercicios sin hiperextensión.",
      monthlyPayments: { [monthKey]: true },
      monthlyUsageMap: { [monthKey]: 4 },
      fixedSubscriptions: [
        {
          id: "sub-1",
          dayOfWeek: 2,
          dayName: "Martes",
          time: "09:00",
          monthKey,
          dates: [],
          active: true,
          instructorName: "Sofía Valenzuela",
          discipline: "reformer",
          createdAt: new Date().toISOString(),
        },
      ],
    },
    {
      id: "cli-2",
      name: "Camila Fernández",
      email: "camila.fernandez@outlook.com",
      phone: "1166667777",
      planId: "plan-3x",
      planName: "Plan 3 Clases x Semana",
      planClassesPerWeek: 3,
      customPrice: 68000,
      billingFrequency: "monthly",
      paymentStatus: "paid",
      lastPaymentDate: formatDateStr(now),
      totalBookings: 10,
      attendedBookings: 7,
      cancelledBookings: 0,
      lastBookingDate: formatDateStr(now),
      createdAt: new Date(Date.now() - 60 * 86400000).toISOString(),
      healthNotes: "Excelente flexibilidad y resistencia.",
      monthlyPayments: { [monthKey]: true },
      monthlyUsageMap: { [monthKey]: 6 },
    },
    {
      id: "cli-3",
      name: "Lucía Benítez",
      email: "lucia.benitez@yahoo.com",
      phone: "1133334444",
      planId: "plan-1x",
      planName: "Plan 1 Clase x Semana",
      planClassesPerWeek: 1,
      customPrice: 32000,
      billingFrequency: "monthly",
      paymentStatus: "pending",
      totalBookings: 3,
      attendedBookings: 2,
      cancelledBookings: 0,
      lastBookingDate: formatDateStr(now),
      createdAt: new Date(Date.now() - 15 * 86400000).toISOString(),
      healthNotes: "Principiante absoluta.",
      monthlyPayments: { [monthKey]: false },
      monthlyUsageMap: { [monthKey]: 2 },
    },
    {
      id: "cli-4",
      name: "María Paz Díaz",
      email: "mpaz.diaz@gmail.com",
      phone: "1188889999",
      planId: "plan-2x",
      planName: "Plan 2 Clases x Semana",
      planClassesPerWeek: 2,
      customPrice: 52000,
      billingFrequency: "monthly",
      paymentStatus: "paid",
      lastPaymentDate: formatDateStr(now),
      totalBookings: 8,
      attendedBookings: 6,
      cancelledBookings: 0,
      lastBookingDate: formatDateStr(now),
      createdAt: new Date(Date.now() - 45 * 86400000).toISOString(),
      monthlyPayments: { [monthKey]: true },
      monthlyUsageMap: { [monthKey]: 5 },
    },
    {
      id: "cli-5",
      name: "Agustina Rossi",
      email: "agustina.rossi@hotmail.com",
      phone: "1122223333",
      planId: "plan-libre",
      planName: "Pase Libre Pilates",
      planClassesPerWeek: 5,
      customPrice: 85000,
      billingFrequency: "monthly",
      paymentStatus: "paid",
      lastPaymentDate: formatDateStr(now),
      totalBookings: 18,
      attendedBookings: 14,
      cancelledBookings: 0,
      lastBookingDate: formatDateStr(now),
      createdAt: new Date(Date.now() - 90 * 86400000).toISOString(),
      monthlyPayments: { [monthKey]: true },
      monthlyUsageMap: { [monthKey]: 12 },
    },
    {
      id: "cli-6",
      name: "Florencia Morales",
      email: "flor.morales@gmail.com",
      phone: "1177778888",
      planId: "plan-2x",
      planName: "Plan 2 Clases x Semana",
      planClassesPerWeek: 2,
      customPrice: 52000,
      billingFrequency: "monthly",
      paymentStatus: "paid",
      lastPaymentDate: formatDateStr(now),
      totalBookings: 7,
      attendedBookings: 5,
      cancelledBookings: 0,
      lastBookingDate: formatDateStr(now),
      createdAt: new Date(Date.now() - 20 * 86400000).toISOString(),
      monthlyPayments: { [monthKey]: true },
      monthlyUsageMap: { [monthKey]: 4 },
    },
  ];

  const scheduleTemplates = [
    { start: "08:00", end: "09:00", title: "Reformer Inicial / Postural", inst: initialInstructors[0], disc: "reformer" },
    { start: "09:00", end: "10:00", title: "Reformer Intermedio", inst: initialInstructors[0], disc: "reformer" },
    { start: "10:00", end: "11:00", title: "Reformer Dinámico", inst: initialInstructors[1], disc: "reformer" },
    { start: "11:00", end: "12:00", title: "Mat Pilates (Suelo)", inst: initialInstructors[1], disc: "mat" },
    { start: "15:00", end: "16:00", title: "Reformer Postural & Core", inst: initialInstructors[2], disc: "reformer" },
    { start: "16:00", end: "17:00", title: "Power Pilates HIIT", inst: initialInstructors[2], disc: "power" },
    { start: "17:00", end: "18:00", title: "Reformer Intermedio", inst: initialInstructors[0], disc: "reformer" },
    { start: "18:00", end: "19:00", title: "Reformer Avanzado", inst: initialInstructors[0], disc: "reformer" },
    { start: "19:00", end: "20:00", title: "Reformer Flex & Strech", inst: initialInstructors[1], disc: "reformer" },
  ];

  const shifts: Shift[] = [];
  const bookings: Booking[] = [];
  const emailLogs: EmailLog[] = [];

  const daysToGenerate = [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12];

  daysToGenerate.forEach((dayOffset) => {
    const d = new Date(thisMonday);
    d.setDate(d.getDate() + dayOffset);
    const dateStr = formatDateStr(d);
    const isSaturday = d.getDay() === 6;

    const templates = isSaturday ? scheduleTemplates.slice(0, 4) : scheduleTemplates;

    templates.forEach((tpl, idx) => {
      const shiftId = `shift-${dateStr}-${tpl.start.replace(":", "")}`;
      const capacity = 4;

      let attendeesForShift: Client[] = [];
      if (idx === 0) {
        attendeesForShift = [clients[0], clients[1]];
      } else if (idx === 1) {
        attendeesForShift = [clients[2], clients[3], clients[4]];
      } else if (idx === 2) {
        attendeesForShift = [clients[1], clients[5]];
      } else if (idx === 6) {
        attendeesForShift = [clients[0], clients[4], clients[5]];
      } else if (idx === 7) {
        attendeesForShift = [clients[2], clients[3]];
      }

      const bookedCount = attendeesForShift.length;
      const status = bookedCount >= capacity ? "full" : bookedCount >= 3 ? "almost_full" : "available";

      const shift: Shift = {
        id: shiftId,
        title: tpl.title,
        date: dateStr,
        startTime: tpl.start,
        endTime: tpl.end,
        instructorId: tpl.inst.id,
        instructorName: tpl.inst.name,
        room: "Sala Principal (Reformer)",
        discipline: tpl.disc,
        level: "Todos los niveles",
        capacity,
        bookedCount,
        status,
        price: 0,
        createdAt: new Date().toISOString(),
      };
      shifts.push(shift);

      attendeesForShift.forEach((client, bIdx) => {
        const cancellationCode = `DEMO${dateStr.replace(/-/g, "").slice(4)}${tpl.start.replace(":", "")}${bIdx + 1}`;
        const bookingId = `book-${shiftId}-${client.id}`;
        
        const isPast = dateStr < formatDateStr(now);
        const bookingStatus = isPast ? "attended" : "confirmed";

        const booking: Booking = {
          id: bookingId,
          shiftId: shift.id,
          shiftTitle: shift.title,
          shiftDate: shift.date,
          shiftTime: shift.startTime,
          discipline: tpl.disc,
          instructorName: shift.instructorName,
          room: shift.room,
          clientName: client.name,
          clientEmail: client.email,
          clientPhone: client.phone,
          status: bookingStatus,
          cancellationCode,
          createdAt: new Date(Date.now() - (14 - dayOffset) * 3600000).toISOString(),
          price: 0,
        };
        booking.searchKeywords = generateBookingSearchKeywords(booking);
        bookings.push(booking);

        emailLogs.push({
          id: `email-${bookingId}`,
          bookingId,
          recipientEmail: client.email,
          recipientName: client.name,
          subject: `Confirmación de Turno: ${shift.title} - ${shift.date}`,
          shiftTitle: shift.title,
          shiftDate: shift.date,
          shiftTime: shift.startTime,
          cancellationCode,
          cancellationUrl: `https://demopilates.jariel.com.ar/cancelar/${cancellationCode}`,
          sentAt: booking.createdAt,
          status: "sent",
          type: "confirmation",
        });
      });
    });
  });

  return {
    shifts,
    bookings,
    clients,
    instructors: initialInstructors,
    disciplines: initialDisciplines,
    plans: initialPlans,
    settings: initialStudioSettings,
    emailLogs,
  };
}

export const initialShifts: Shift[] = [];
export const initialBookings: Booking[] = [];
export const initialClients: Client[] = [];
export const initialEmailLogs: EmailLog[] = [];
