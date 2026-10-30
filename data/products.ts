import type { ElementId, Product } from "@/lib/types";

/**
 * Kits rituales. Para ocultar un kit sin borrarlo, cambia `active` a false.
 * Los precios son de ejemplo: ajústalos antes de publicar.
 */
export const products: Product[] = [
  {
    id: "prod-agua",
    slug: "fluye-como-el-agua",
    name: "Fluye como el Agua",
    line: "botanica-sagrada",
    element: "agua",
    tagline: "Para soltar, limpiar y dejar que la vida corra",
    description:
      "Un kit para baños y sahumos que acompañan los procesos de soltar lo que ya cumplió su ciclo.",
    ingredients: ["Manzanilla", "Eucalipto", "Citronela"],
    priceCOP: 45000,
    images: [{ src: "/images/kit-agua.jpg", alt: "Kit Fluye como el Agua con manzanilla, eucalipto y citronela" }],
    active: true,
  },
  {
    id: "prod-aire",
    slug: "aperturate-como-el-aire",
    name: "Apertúrate como el Aire",
    line: "botanica-sagrada",
    element: "aire",
    tagline: "Para abrir caminos y aclarar la mente",
    description:
      "Plantas aromáticas para despejar la casa y la mente antes de iniciar algo nuevo.",
    ingredients: ["Romero", "Lavanda"],
    priceCOP: 45000,
    images: [{ src: "/images/kit-aire.jpg", alt: "Kit Apertúrate como el Aire con romero y lavanda" }],
    active: true,
  },
  {
    id: "prod-tierra",
    slug: "potenciate-como-la-tierra",
    name: "Poténciate como la Tierra",
    line: "botanica-sagrada",
    element: "tierra",
    tagline: "Para enraizar, proteger y sostener",
    description:
      "Un kit de protección y arraigo para volver al cuerpo y a lo esencial.",
    ingredients: ["Ruda", "Pino"],
    priceCOP: 45000,
    images: [{ src: "/images/kit-tierra.jpg", alt: "Kit Poténciate como la Tierra con ruda y pino" }],
    active: true,
  },
  {
    id: "prod-fuego",
    slug: "enciendete-como-el-fuego",
    name: "Enciéndete como el Fuego",
    line: "botanica-sagrada",
    element: "fuego",
    tagline: "Para la voluntad, la pasión y la transformación",
    description:
      "Plantas de fuego para activar la energía y acompañar los nuevos comienzos.",
    // PENDIENTE: confirmar ingredientes del kit Fuego.
    ingredients: ["Canela", "Clavo de olor", "Cáscara de naranja"],
    priceCOP: 45000,
    images: [{ src: "/images/kit-fuego.jpg", alt: "Kit Enciéndete como el Fuego con canela, clavo y naranja" }],
    active: true,
  },
  {
    id: "prod-siete-elementos",
    slug: "kit-7-elementos",
    name: "Kit 7 Elementos",
    line: "botanica-sagrada",
    element: "siete-elementos",
    tagline: "El ciclo completo, en un solo ritual",
    description:
      "Reúne las plantas de todos los elementos con una guía para vivir el ritual paso a paso.",
    ingredients: [
      "Manzanilla",
      "Eucalipto",
      "Citronela",
      "Romero",
      "Lavanda",
      "Ruda",
      "Pino",
    ],
    priceCOP: 150000,
    images: [{ src: "/images/kit-7-elementos.jpg", alt: "Kit 7 Elementos con plantas de todos los elementos" }],
    active: true,
  },
];

export const elementLabels: Record<ElementId, string> = {
  agua: "Agua",
  aire: "Aire",
  tierra: "Tierra",
  fuego: "Fuego",
  "siete-elementos": "7 Elementos",
};

export function getActiveProducts(): Product[] {
  return products.filter((product) => product.active);
}
