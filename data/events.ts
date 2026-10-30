import type { EventModality, SacredEvent } from "@/lib/types";

/**
 * Encuentros, talleres y círculos. El sitio destaca automáticamente el
 * próximo encuentro activo cuya fecha aún no ha pasado.
 *
 * Fechas: "2026-11-21T15:00:00-05:00" = 21 de noviembre de 2026, 3:00 p. m.
 * hora de Colombia. Conserva siempre el "-05:00" del final.
 */
export const events: SacredEvent[] = [
  {
    id: "evt-2026-09-circulo-equinoccio",
    slug: "circulo-de-equinoccio",
    name: "Círculo de Equinoccio",
    line: "geometria-sagrada",
    modality: "presencial",
    startsAt: "2026-09-22T17:00:00-05:00",
    endsAt: "2026-09-22T20:00:00-05:00",
    location: { name: "Casa Almica", address: "Barrio Laureles", city: "Medellín" },
    capacity: 15,
    priceCOP: 80000,
    facilitators: ["Elishandre"],
    description: "Un círculo para honrar el equilibrio entre la luz y la sombra.",
    image: { src: "/images/encuentro-circulo.jpg", alt: "Círculo de mujeres alrededor de un altar con flores" },
    active: true,
  },
  {
    id: "evt-2026-11-flor-de-la-vida",
    slug: "taller-flor-de-la-vida",
    name: "Taller Flor de la Vida: geometría que se ora",
    line: "geometria-sagrada",
    modality: "presencial",
    startsAt: "2026-11-21T15:00:00-05:00",
    endsAt: "2026-11-21T18:30:00-05:00",
    location: { name: "Casa Almica", address: "Barrio Laureles", city: "Medellín" },
    capacity: 12,
    priceCOP: 120000,
    facilitators: ["Elishandre", "Facilitadora invitada"],
    description:
      "Trazaremos a mano la Flor de la Vida, abriremos círculo con plantas sagradas y sellaremos la intención en un ritual compartido. Incluye materiales y aromática de la casa.",
    image: { src: "/images/encuentro-flor-de-la-vida.jpg", alt: "Flor de la Vida trazada a mano sobre papel crema" },
    active: true,
  },
  {
    id: "evt-2026-12-ritual-solsticio",
    slug: "ritual-de-solsticio-en-vivo",
    name: "Ritual de Solsticio en vivo",
    line: "botanica-sagrada",
    modality: "en-vivo",
    startsAt: "2026-12-21T19:00:00-05:00",
    endsAt: "2026-12-21T20:30:00-05:00",
    location: { name: "Transmisión en vivo por Zoom", city: "Desde tu casa" },
    capacity: 40,
    priceCOP: 60000,
    facilitators: ["Elishandre"],
    description: "Un ritual guiado con el Kit 7 Elementos para cerrar el año con intención.",
    image: { src: "/images/encuentro-solsticio.jpg", alt: "Velas y plantas secas sobre un altar" },
    active: true,
  },
];

export const modalityLabels: Record<EventModality, string> = {
  presencial: "Presencial",
  "en-vivo": "En vivo",
};

/** Encuentros activos que aún no han empezado, del más cercano al más lejano. */
export function getUpcomingEvents(now: Date = new Date()): SacredEvent[] {
  return events
    .filter((event) => event.active && new Date(event.startsAt).getTime() > now.getTime())
    .sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime());
}

/** El próximo encuentro con fecha futura, o null si no hay ninguno programado. */
export function getFeaturedEvent(now: Date = new Date()): SacredEvent | null {
  return getUpcomingEvents(now)[0] ?? null;
}
