# Elishandre Conexión Almica

> «No es la planta, es la intención con la que es orada»

Página de inicio de **Elishandre**, emprendimiento de Medellín con dos líneas:

- **Elishandre Botánica Sagrada**: herbolaria y kits rituales.
- **Elishandre Geometría Sagrada**: talleres, círculos y rituales.

Esta landing es la primera fase de una plataforma que más adelante tendrá tienda, pagos con Wompi y cursos con acceso por usuaria. Por ahora, los botones de compra y reserva abren WhatsApp.

---

## Cambiar el contenido sin saber programar

Todo el contenido está en la carpeta **`data/`**. No hace falta tocar nada más.

Puedes editar los archivos directamente en GitHub: abre el archivo, pulsa el lápiz (✏️ *Edit this file*), cambia el texto y pulsa **Commit changes**. Si el sitio está conectado a Vercel o Netlify, se publica solo en uno o dos minutos.

### Reglas para no romper nada

1. Cambia **solo lo que está entre comillas** `"así"` y los números.
2. No borres comas `,`, llaves `{ }` ni corchetes `[ ]`.
3. Los precios van **sin puntos ni signo**: `45000`, no `$45.000`.
4. Si algo sale mal, GitHub guarda el historial y la versión anterior se puede recuperar.

| Quiero cambiar…                                   | Archivo                |
| ------------------------------------------------- | ---------------------- |
| Kits (nombre, ingredientes, precio, foto)         | `data/products.ts`     |
| Encuentros, talleres y círculos                   | `data/events.ts`       |
| Texto «Quién es Elishandre», frase, Instagram, WhatsApp | `data/site.ts`   |
| Las dos líneas (Botánica y Geometría)             | `data/lines.ts`        |
| Testimonios                                       | `data/testimonials.ts` |
| Políticas (privacidad, términos, envíos)          | `data/policies.ts`     |

### Kits (`data/products.ts`)

Cada kit tiene este aspecto:

```ts
{
  id: "prod-agua",                 // identificador interno, no lo cambies
  slug: "fluye-como-el-agua",      // para la dirección web futura: minúsculas y guiones
  name: "Fluye como el Agua",
  line: "botanica-sagrada",
  element: "agua",                 // agua, aire, tierra, fuego o siete-elementos
  tagline: "Para soltar, limpiar y dejar que la vida corra",
  description: "…",
  ingredients: ["Manzanilla", "Eucalipto", "Citronela"],
  priceCOP: 45000,
  images: [{ src: "/images/kit-agua.jpg", alt: "Descripción de la foto" }],
  active: true,                    // false = ocultar el kit sin borrarlo
},
```

- **Cambiar el precio:** edita `priceCOP`.
- **Agregar un ingrediente:** añade un texto entre comillas a la lista, separado por coma: `["Romero", "Lavanda", "Menta"]`.
- **Ocultar un kit:** cambia `active: true` por `active: false`.
- **Agregar un kit:** copia un bloque completo `{ … },`, pégalo debajo del último y cambia `id`, `slug` y los textos. El `id` no se puede repetir.

> ⚠️ **Pendiente:** confirmar los ingredientes del kit **Fuego** (hoy dice canela, clavo y naranja como ejemplo) y todos los **precios**, que son de ejemplo.

### Encuentros (`data/events.ts`)

```ts
{
  id: "evt-2026-11-flor-de-la-vida",
  slug: "taller-flor-de-la-vida",
  name: "Taller Flor de la Vida: geometría que se ora",
  line: "geometria-sagrada",        // o "botanica-sagrada"
  modality: "presencial",           // "presencial" o "en-vivo"
  startsAt: "2026-11-21T15:00:00-05:00",
  endsAt: "2026-11-21T18:30:00-05:00",
  location: { name: "Casa Almica", address: "Barrio Laureles", city: "Medellín" },
  capacity: 12,                      // cupos
  priceCOP: 120000,                  // aporte
  facilitators: ["Elishandre", "Facilitadora invitada"],
  description: "…",
  image: { src: "/images/encuentro-flor-de-la-vida.jpg", alt: "…" },
  active: true,
},
```

**Cómo escribir la fecha:** `AÑO-MES-DÍA` + `T` + `HORA:MINUTOS:00` (en formato 24 horas) + `-05:00`.

| Quiero decir                    | Escribo                       |
| ------------------------------- | ----------------------------- |
| 21 de noviembre de 2026, 3 p. m. | `2026-11-21T15:00:00-05:00`  |
| 5 de diciembre de 2026, 9:30 a. m. | `2026-12-05T09:30:00-05:00` |

El sitio **destaca solo** el encuentro activo más cercano que todavía no ha pasado, y muestra los dos siguientes en «También se viene». Cuando pasa la fecha, cambia al siguiente sin que tengas que hacer nada (la página se actualiza cada hora). Puedes dejar los encuentros pasados en la lista; no se muestran.

### WhatsApp (`data/site.ts`)

Los botones abren WhatsApp al **317 402 7300** con un mensaje ya escrito que nombra el kit o el encuentro. El número está en `whatsapp.number`, solo dígitos y con el 57 adelante. Si lo dejas vacío, los botones usan el enlace corto `https://wa.link/py66dc`, que no permite mensaje prellenado.

```ts
whatsapp: {
  number: "573174027300",
  fallbackUrl: "https://wa.link/py66dc",
},
```

Los mensajes se ven así:

- *Hola, Elishandre. Quiero el kit «Fluye como el Agua». ¿Me cuentas cómo hacer el pedido?*
- *Hola, Elishandre. Quiero reservar mi cupo en «Taller Flor de la Vida…» (sábado 21 de noviembre, 3:00 p. m.).*

### Imágenes (`public/images/`)

Las imágenes actuales son de ejemplo. La forma más fácil de cambiarlas es **subir tu foto con el mismo nombre de archivo** y reemplazar la anterior.

| Archivo                           | Dónde aparece                   | Tamaño sugerido     |
| --------------------------------- | ------------------------------- | ------------------- |
| `logo-elishandre.svg`             | Logo del inicio                 | Cuadrado            |
| `og-elishandre.jpg`               | Vista previa al compartir el enlace | 1200 × 630 px   |
| `retrato-elishandre.jpg`          | Quién es Elishandre             | Vertical, 1000 × 1250 px |
| `linea-botanica-sagrada.jpg`      | Tarjeta de Botánica Sagrada     | Horizontal, 1350 × 900 px |
| `linea-geometria-sagrada.jpg`     | Tarjeta de Geometría Sagrada    | Horizontal, 1350 × 900 px |
| `kit-agua.jpg`, `kit-aire.jpg`, `kit-tierra.jpg`, `kit-fuego.jpg`, `kit-7-elementos.jpg` | Fotos de los kits | Cuadrada, 1200 × 1200 px |
| `encuentro-flor-de-la-vida.jpg`, `encuentro-circulo.jpg`, `encuentro-solsticio.jpg` | Fotos de los encuentros | Cuadrada, 1200 × 1200 px |

Consejos:

- Usa fotos **JPG de menos de 500 KB**. El sitio las optimiza solo, pero entre más livianas, más rápido carga en el celular.
- Si la foto tiene otro nombre (por ejemplo `kit-agua-2.jpg` o un logo en `.png`), súbela a `public/images/` y cambia la ruta en el archivo de `data/` correspondiente: `src: "/images/kit-agua-2.jpg"`.
- Escribe en `alt` una descripción corta de lo que se ve en la foto. La leen las personas ciegas con lector de pantalla y también Google.

---

## Para quien desarrolla

### Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- Tailwind CSS 4 (paleta y tipografías en `app/globals.css`)
- Fuentes con `next/font`: Cormorant Garamond (títulos) y Nunito Sans (texto)
- Todo se renderiza en el servidor; la página no tiene componentes de cliente

### Comandos

```bash
npm install
```

```bash
npm run dev        # http://localhost:3000
```

```bash
npm run build && npm run start
```

```bash
npm run typecheck
```

Copia `.env.example` a `.env.local` y define `NEXT_PUBLIC_SITE_URL` con el dominio final (se usa en Open Graph, el sitemap y los datos estructurados). Configura la misma variable en Vercel o Netlify.

### Estructura

```
app/
  layout.tsx            ← <html lang="es">, fuentes, metadatos SEO/Open Graph, header y footer
  page.tsx              ← inicio: compone las secciones + JSON-LD (Organization, Event)
  politicas/[slug]/     ← páginas de políticas generadas desde data/policies.ts
  sitemap.ts, robots.ts, icon.svg, not-found.tsx
components/
  sections/             ← una sección de la página por archivo (Hero, About, Lines, FeaturedEvent, Kits, …)
  cards/                ← tarjetas reutilizables (KitCard, LineCard) para la futura tienda
  ui/                   ← piezas base: ButtonLink, SectionHeading, Spiral, ElementGlyph, JsonLd
data/                   ← contenido editable (ver arriba)
lib/
  types.ts              ← tipos del dominio (Product, SacredEvent, Line…), listos para mapear a tablas
  cta.ts                ← getCtaHref(): hoy WhatsApp, mañana checkout de Wompi
  format.ts             ← formato de precios COP y fechas en America/Bogota
public/images/          ← imágenes reemplazables
```

### Hacia la plataforma

- **Base de datos:** los tipos de `lib/types.ts` ya tienen `id`, `slug`, `active`, precios enteros en COP y fechas ISO. Para migrar, reemplaza las funciones `getActiveProducts()`, `getUpcomingEvents()` y `getFeaturedEvent()` por consultas; los componentes no cambian.
- **Pagos (Wompi):** todos los botones de compra y reserva pasan por `getCtaHref({ kind, item })` en `lib/cta.ts`. Cambia su cuerpo para devolver la ruta del checkout (por ejemplo `/checkout/${item.slug}`); `ButtonLink` abre en la misma pestaña los enlaces internos.
- **Tienda y cursos:** `KitCard` y los slugs permiten crear `app/tienda/[slug]` y `app/encuentros/[slug]`. El acceso por usuaria irá en un segmento protegido (por ejemplo `app/(cuenta)/`).

### Despliegue

- **Vercel:** *Add New → Project* y elige este repositorio. Framework: Next.js (se detecta solo).
- **Netlify:** *Add new site → Import an existing project* y elige este repositorio. `netlify.toml` ya trae el comando de build.

En ambos casos agrega la variable `NEXT_PUBLIC_SITE_URL`.

### Calidad

- Lighthouse móvil sobre el build de producción: rendimiento 92–98, accesibilidad 100, buenas prácticas 100, SEO 100.
- Contraste AA en todos los textos; foco visible en lavanda; enlace «Saltar al contenido»; textos `alt` en todas las imágenes; los enlaces externos avisan que abren otra pestaña.
- Las espirales son SVG decorativos ocultos a lectores de pantalla.
