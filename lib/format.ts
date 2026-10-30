const TIME_ZONE = "America/Bogota";

const copFormatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

/** 45000 → "$ 45.000" */
export function formatCOP(value: number): string {
  return copFormatter.format(value);
}

/** "2026-11-21T15:00:00-05:00" → "sábado 21 de noviembre" */
export function formatEventDate(iso: string): string {
  return new Intl.DateTimeFormat("es-CO", {
    timeZone: TIME_ZONE,
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date(iso));
}

/** "2026-11-21T15:00:00-05:00" → "3:00 p. m." */
export function formatEventTime(iso: string): string {
  return new Intl.DateTimeFormat("es-CO", {
    timeZone: TIME_ZONE,
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(iso));
}

export function formatEventTimeRange(startsAt: string, endsAt?: string): string {
  const start = formatEventTime(startsAt);
  return endsAt ? `${start} – ${formatEventTime(endsAt)}` : start;
}

export function getSiteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
}
