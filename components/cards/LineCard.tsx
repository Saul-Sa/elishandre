import Image from "next/image";
import type { Line } from "@/lib/types";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function LineCard({ line }: { line: Line }) {
  const isBotanica = line.id === "botanica-sagrada";
  return (
    <article className="flex flex-col overflow-hidden rounded-[2rem] border border-sand bg-cream">
      <Image
        src={line.image.src}
        alt={line.image.alt}
        width={900}
        height={600}
        sizes="(min-width: 768px) 45vw, 92vw"
        className="aspect-[3/2] h-auto w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className={`eyebrow ${isBotanica ? "" : "text-lavender-deep!"}`}>{line.offering}</p>
        <h3 className="mt-2 text-3xl text-ink sm:text-[2.1rem]">{line.name}</h3>
        <p className="mt-4 flex-1 text-ink-soft">{line.description}</p>
        <div className="mt-6">
          <ButtonLink href={line.cta.href} variant="secondary">
            {line.cta.label}
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
