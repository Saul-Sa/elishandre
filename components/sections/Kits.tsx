import { getActiveProducts } from "@/data/products";
import { KitCard } from "@/components/cards/KitCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Kits() {
  const products = getActiveProducts();
  return (
    <section id="kits" aria-labelledby="kits-title" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading id="kits-title" eyebrow="Botánica Sagrada" title="Kits por elemento">
          <p>Cada kit se prepara a mano y se ora antes de llegar a ti. Elige el elemento que hoy te llama.</p>
        </SectionHeading>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <KitCard key={product.id} product={product} featured={product.element === "siete-elementos"} />
          ))}
        </div>
      </div>
    </section>
  );
}
