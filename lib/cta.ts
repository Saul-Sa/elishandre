import { site } from "@/data/site";
import type { Product, SacredEvent } from "@/lib/types";
import { formatEventDate, formatEventTime } from "@/lib/format";

/**
 * Lo que se quiere comprar o reservar. Cuando llegue el checkout de Wompi,
 * solo hay que cambiar el cuerpo de getCtaHref(): los componentes ya pasan
 * el producto o el encuentro completo.
 */
export type CtaTarget =
  | { kind: "product"; item: Product }
  | { kind: "event"; item: SacredEvent }
  | { kind: "general" };

export function getCtaMessage(target: CtaTarget): string {
  switch (target.kind) {
    case "product":
      return `Hola, Elishandre. Quiero el kit «${target.item.name}». ¿Me cuentas cómo hacer el pedido?`;
    case "event":
      return `Hola, Elishandre. Quiero reservar mi cupo en «${target.item.name}» (${formatEventDate(
        target.item.startsAt,
      )}, ${formatEventTime(target.item.startsAt)}).`;
    case "general":
      return "Hola, Elishandre. Quiero saber más sobre tus kits y encuentros.";
  }
}

/** Enlace del botón de compra o reserva. Hoy abre WhatsApp; luego será el checkout. */
export function getCtaHref(target: CtaTarget): string {
  const number = site.whatsapp.number.replace(/\D/g, "");
  if (!number) return site.whatsapp.fallbackUrl;
  return `https://wa.me/${number}?text=${encodeURIComponent(getCtaMessage(target))}`;
}

/** Los enlaces externos se abren en otra pestaña; los del checkout propio, no. */
export function isExternalHref(href: string): boolean {
  return /^https?:\/\//.test(href);
}
