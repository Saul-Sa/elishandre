/**
 * Tipos del dominio. Están pensados para migrar luego a una base de datos:
 * cada campo corresponde a una columna y los arreglos a tablas relacionadas.
 */

/** Líneas de la marca. */
export type LineId = "botanica-sagrada" | "geometria-sagrada";

/** Elementos con los que se organizan los kits. */
export type ElementId = "agua" | "aire" | "tierra" | "fuego" | "siete-elementos";

export interface ImageAsset {
  /** Ruta dentro de /public, por ejemplo "/images/kit-agua.jpg". */
  src: string;
  /** Descripción de la imagen para personas que usan lector de pantalla. */
  alt: string;
}

export interface Product {
  id: string;
  /** Identificador para la URL, en minúsculas y con guiones. */
  slug: string;
  name: string;
  line: LineId;
  element: ElementId;
  /** Frase corta que acompaña al nombre. */
  tagline: string;
  description: string;
  ingredients: string[];
  /** Precio en pesos colombianos, sin puntos ni signos. */
  priceCOP: number;
  images: ImageAsset[];
  /** Si es false, el producto no se muestra en el sitio. */
  active: boolean;
}

export type EventModality = "presencial" | "en-vivo";

export interface EventLocation {
  /** Nombre del espacio o de la plataforma (por ejemplo, "Zoom"). */
  name: string;
  address?: string;
  city: string;
}

export interface SacredEvent {
  id: string;
  slug: string;
  name: string;
  line: LineId;
  modality: EventModality;
  /** Inicio en formato ISO 8601 con zona horaria de Colombia (-05:00). */
  startsAt: string;
  /** Fin en formato ISO 8601. Opcional. */
  endsAt?: string;
  location: EventLocation;
  /** Cupos disponibles en total. */
  capacity: number;
  /** Aporte en pesos colombianos. */
  priceCOP: number;
  facilitators: string[];
  description: string;
  image: ImageAsset;
  active: boolean;
}

export interface Line {
  id: LineId;
  name: string;
  /** Lo que ofrece la línea, en pocas palabras. */
  offering: string;
  description: string;
  image: ImageAsset;
  /** Hacia dónde lleva el botón de la tarjeta (un ancla de la página). */
  cta: { label: string; href: string };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  /** Contexto: encuentro o kit que vivió. */
  context: string;
}

export interface Policy {
  slug: string;
  title: string;
  /** Párrafos del texto. */
  body: string[];
  updatedAt: string;
}
