import Image from "next/image";
import { site } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Spiral } from "@/components/ui/Spiral";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      {/* Fondo: halo lavanda y espiral dorada muy sutil */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_45%_at_50%_30%,var(--color-lavender-light)_0%,transparent_70%)]"
      />
      <Spiral
        withRings
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[150vw] max-h-[56rem] w-[150vw] max-w-[56rem] -translate-x-1/2 -translate-y-1/2 text-gold/40"
        strokeWidth={0.35}
      />

      <div className="container-page flex flex-col items-center pb-20 pt-12 text-center sm:pb-28 sm:pt-20">
        <Image
          src={site.logo.src}
          alt={site.logo.alt}
          width={160}
          height={160}
          priority
          unoptimized={site.logo.src.endsWith(".svg")}
          className="h-28 w-28 sm:h-36 sm:w-36"
        />

        <h1 id="hero-title" className="eyebrow mt-6 text-sm! tracking-[0.28em]!">
          {site.name}
        </h1>

        <p className="mt-6 max-w-3xl font-serif text-[2.4rem] italic leading-[1.08] text-ink sm:text-6xl md:text-7xl">
          «{site.motto}»
        </p>

        <p className="mt-6 max-w-xl text-lg text-ink-soft">
          Botánica y geometría sagrada en {site.city.split(",")[0]}: kits rituales preparados a mano y encuentros
          para volver a tu centro.
        </p>

        <div className="mt-9 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <ButtonLink href="#encuentros">Ver próximos encuentros</ButtonLink>
          <ButtonLink href="#kits" variant="secondary">
            Conocer los kits
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
