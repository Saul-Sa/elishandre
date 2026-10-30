import Image from "next/image";
import { elementLabels } from "@/data/products";
import { getCtaHref } from "@/lib/cta";
import { formatCOP } from "@/lib/format";
import type { ElementId, Product } from "@/lib/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ElementGlyph } from "@/components/ui/ElementGlyph";

/** Acento de color de cada elemento (solo decorativo). */
const elementTone: Record<ElementId, string> = {
  agua: "text-lavender-deep",
  aire: "text-gold-deep",
  tierra: "text-olive-deep",
  fuego: "text-gold-deep",
  "siete-elementos": "text-lavender-deep",
};

export function KitCard({ product, featured = false }: { product: Product; featured?: boolean }) {
  const image = product.images[0];
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-[2rem] border border-sand bg-cream ${
        featured ? "md:col-span-2 md:flex-row lg:col-span-3" : ""
      }`}
    >
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          width={800}
          height={800}
          sizes={featured ? "(min-width: 768px) 45vw, 92vw" : "(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 92vw"}
          className={`aspect-square h-auto w-full object-cover ${featured ? "md:aspect-auto md:w-1/2" : ""}`}
        />
      )}
      <div className={`flex flex-1 flex-col p-6 ${featured ? "sm:p-10" : ""}`}>
        <p className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] ${elementTone[product.element]}`}>
          <ElementGlyph element={product.element} className="h-5 w-5" />
          {elementLabels[product.element]}
        </p>
        <h3 className={`mt-3 text-ink ${featured ? "text-4xl" : "text-3xl"}`}>{product.name}</h3>
        <p className="mt-2 text-ink-soft">{product.tagline}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Ingredientes de ${product.name}`}>
          {product.ingredients.map((ingredient) => (
            <li key={ingredient} className="rounded-full border border-sand px-3 py-1 text-sm text-ink-soft">
              {ingredient}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-7">
          <p className="font-serif text-3xl font-semibold text-ink">
            <span className="sr-only">Precio: </span>
            {formatCOP(product.priceCOP)}
          </p>
          <ButtonLink href={getCtaHref({ kind: "product", item: product })} srLabel={product.name}>
            Pedir este kit
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
