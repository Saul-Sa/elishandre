import Image from "next/image";
import { site } from "@/data/site";
import { Spiral } from "@/components/ui/Spiral";

export function About() {
  const { about } = site;
  return (
    <section id="quien-es" aria-labelledby="quien-es-title" className="overflow-x-clip bg-cream-deep py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 md:grid-cols-[5fr_6fr] md:gap-16">
        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <Spiral
            className="absolute -right-6 -top-6 h-32 w-32 text-gold sm:-right-10 sm:-top-10 sm:h-44 sm:w-44"
            strokeWidth={1.2}
          />
          <div className="relative overflow-hidden rounded-t-full border border-sand bg-cream">
            <Image
              src={about.image.src}
              alt={about.image.alt}
              width={800}
              height={1000}
              sizes="(min-width: 768px) 40vw, 90vw"
              className="aspect-[4/5] h-auto w-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 id="quien-es-title" className="mt-3 text-4xl text-ink sm:text-5xl">
            {about.title}
          </h2>
          <div className="mt-6 space-y-4 text-lg text-ink-soft">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
