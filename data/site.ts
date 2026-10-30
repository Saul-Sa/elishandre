/**
 * Datos generales de la marca. Cambia aquí los textos, el contacto y las redes.
 */
export const site = {
  name: "Elishandre Conexión Almica",
  shortName: "Elishandre",
  motto: "No es la planta, es la intención con la que es orada",
  description:
    "Herbolaria, kits rituales por elemento, talleres y círculos de geometría sagrada en Medellín. No es la planta, es la intención con la que es orada.",
  city: "Medellín, Colombia",

  logo: {
    src: "/images/logo-elishandre.svg",
    alt: "Logo de Elishandre Conexión Almica",
  },
  /** Imagen que aparece al compartir el enlace en WhatsApp, Instagram o Facebook (1200 × 630 px). */
  shareImage: "/images/og-elishandre.jpg",

  instagram: {
    handle: "@elishandre_conexion_almica",
    url: "https://www.instagram.com/elishandre_conexion_almica/",
  },

  whatsapp: {
    /**
     * Número con indicativo de país, solo dígitos (ejemplo: "573001234567").
     * Con el número, los botones abren WhatsApp con un mensaje ya escrito que
     * nombra el kit o el encuentro. Si queda vacío, se usa el enlace corto.
     */
    number: "573174027300",
    /** Enlace corto de respaldo (no permite mensaje prellenado). */
    fallbackUrl: "https://wa.link/py66dc",
  },

  about: {
    eyebrow: "Quién es Elishandre",
    title: "Un camino de regreso a lo que el alma ya sabe",
    /** Cada elemento es un párrafo. */
    paragraphs: [
      "Elishandre nace en Medellín como un espacio para recordar que las plantas, los símbolos y los ritos son puentes. Lo que transforma es la intención con la que los acompañamos.",
      "Aquí escribirás tu historia: cómo llegaste a la herbolaria, qué te enseñó la geometría sagrada y por qué decidiste abrir este camino para otras personas.",
      "Cada kit se prepara a mano y se ora antes de llegar a tus manos. Cada encuentro se sostiene en círculo, con respeto por el proceso de cada quien.",
    ],
    image: {
      src: "/images/retrato-elishandre.jpg",
      alt: "Retrato de Elishandre entre plantas medicinales",
    },
  },

  /** Enlaces del pie de página hacia las políticas (ver data/policies.ts). */
  footerLinks: [
    { label: "Política de privacidad", href: "/politicas/privacidad" },
    { label: "Términos y condiciones", href: "/politicas/terminos" },
    { label: "Envíos, cambios y devoluciones", href: "/politicas/envios-y-devoluciones" },
  ],
} as const;

export type Site = typeof site;
