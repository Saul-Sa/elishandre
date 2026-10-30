import type { Policy } from "@/lib/types";

/**
 * Textos legales. Son borradores para completar; revísalos con una persona
 * asesora antes de vender en línea.
 */
export const policies: Policy[] = [
  {
    slug: "privacidad",
    title: "Política de privacidad",
    updatedAt: "2026-10-30",
    body: [
      "Elishandre Conexión Almica trata los datos personales que compartes (nombre, teléfono, correo) solo para responder tus mensajes, gestionar reservas y enviar tus pedidos, de acuerdo con la Ley 1581 de 2012 de Colombia.",
      "Puedes conocer, actualizar o pedir que eliminemos tus datos escribiéndonos por WhatsApp o Instagram.",
      "Texto pendiente: completar con responsable del tratamiento, datos de contacto y finalidades detalladas.",
    ],
  },
  {
    slug: "terminos",
    title: "Términos y condiciones",
    updatedAt: "2026-10-30",
    body: [
      "Las reservas de encuentros se confirman con el pago del aporte. Los cupos son limitados.",
      "Los kits rituales son productos de acompañamiento espiritual y no reemplazan un tratamiento médico.",
      "Texto pendiente: completar condiciones de reserva, reprogramación y uso del sitio.",
    ],
  },
  {
    slug: "envios-y-devoluciones",
    title: "Envíos, cambios y devoluciones",
    updatedAt: "2026-10-30",
    body: [
      "Hacemos envíos dentro de Medellín y a otras ciudades de Colombia. El costo y el tiempo de entrega se confirman por WhatsApp.",
      "Por tratarse de plantas preparadas a mano, los cambios aplican solo si el kit llega en mal estado.",
      "Texto pendiente: completar plazos, transportadoras y proceso de reclamo.",
    ],
  },
];

export function getPolicy(slug: string): Policy | undefined {
  return policies.find((policy) => policy.slug === slug);
}
