import { lines } from "@/data/lines";
import { LineCard } from "@/components/cards/LineCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Lines() {
  return (
    <section id="lineas" aria-labelledby="lineas-title" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading id="lineas-title" eyebrow="Dos caminos, una intención" title="Las líneas de Elishandre">
          <p>La planta y la forma: dos lenguajes para acompañar tu proceso.</p>
        </SectionHeading>
        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {lines.map((line) => (
            <LineCard key={line.id} line={line} />
          ))}
        </div>
      </div>
    </section>
  );
}
