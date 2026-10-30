import type { Line } from "@/lib/types";

/** Las dos líneas de la marca. */
export const lines: Line[] = [
  {
    id: "botanica-sagrada",
    name: "Elishandre Botánica Sagrada",
    offering: "Herbolaria y kits rituales",
    description:
      "Plantas medicinales preparadas a mano y oradas una a una. Kits por elemento para baños, sahumos y altares, con una guía sencilla para acompañar tu intención.",
    image: { src: "/images/linea-botanica-sagrada.jpg", alt: "Plantas medicinales secas en frascos de vidrio" },
    cta: { label: "Conocer los kits", href: "#kits" },
  },
  {
    id: "geometria-sagrada",
    name: "Elishandre Geometría Sagrada",
    offering: "Talleres, círculos y rituales",
    description:
      "Encuentros para trazar, meditar y habitar las formas que ordenan la vida. Círculos presenciales en Medellín y rituales en vivo para conectar desde cualquier lugar.",
    image: { src: "/images/linea-geometria-sagrada.jpg", alt: "Mandala de geometría sagrada dibujado a mano" },
    cta: { label: "Ver próximos encuentros", href: "#encuentros" },
  },
];

export function getLine(id: Line["id"]): Line {
  const line = lines.find((item) => item.id === id);
  if (!line) throw new Error(`Línea desconocida: ${id}`);
  return line;
}
