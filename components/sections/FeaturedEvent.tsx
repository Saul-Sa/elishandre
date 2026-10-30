import Image from "next/image";
import { getFeaturedEvent, getUpcomingEvents, modalityLabels } from "@/data/events";
import { getLine } from "@/data/lines";
import { getCtaHref, isExternalHref } from "@/lib/cta";
import { formatCOP, formatEventDate, formatEventTimeRange } from "@/lib/format";
import type { SacredEvent } from "@/lib/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Spiral } from "@/components/ui/Spiral";

export function FeaturedEvent({ now }: { now: Date }) {
  const featured = getFeaturedEvent(now);
  const others = getUpcomingEvents(now).slice(1, 3);

  return (
    <section
      id="encuentros"
      aria-labelledby="encuentros-title"
      className="relative isolate overflow-hidden bg-olive-night py-20 text-cream sm:py-28"
    >
      <Spiral
        withRings
        className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[34rem] w-[34rem] text-gold/25"
        strokeWidth={0.4}
      />
      <div className="container-page">
        <SectionHeading id="encuentros-title" eyebrow="Próximo encuentro" title="Nos vemos en círculo" tone="light" />

        {featured ? (
          <FeaturedCard event={featured} />
        ) : (
          <div className="mx-auto mt-10 max-w-xl text-center">
            <p className="text-lg text-cream/85">
              Muy pronto anunciaremos el próximo encuentro. Escríbenos y te avisamos primero.
            </p>
            <div className="mt-6">
              <ButtonLink href={getCtaHref({ kind: "general" })} variant="light">
                Quiero enterarme
              </ButtonLink>
            </div>
          </div>
        )}

        {others.length > 0 && (
          <div className="mx-auto mt-12 max-w-4xl">
            <h3 className="eyebrow text-gold-light!">También se viene</h3>
            <ul className="mt-4 divide-y divide-cream/15 border-y border-cream/15">
              {others.map((event) => {
                const href = getCtaHref({ kind: "event", item: event });
                return (
                  <li
                    key={event.id}
                    className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="text-sm text-cream/75">
                        <span className="inline-block first-letter:uppercase">{formatEventDate(event.startsAt)}</span> ·{" "}
                        {modalityLabels[event.modality]}
                      </p>
                      <p className="mt-1 font-serif text-2xl">{event.name}</p>
                    </div>
                    <a
                      href={href}
                      {...externalLinkProps(href)}
                      className="inline-flex min-h-11 items-center self-start font-semibold text-gold-light underline decoration-gold-light/50 underline-offset-4 hover:decoration-gold-light sm:self-auto"
                    >
                      Reservar<span className="sr-only"> en {event.name}</span>
                      {isExternalHref(href) && <span className="sr-only"> (abre en una pestaña nueva)</span>}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

function FeaturedCard({ event }: { event: SacredEvent }) {
  const line = getLine(event.line);
  const details: { label: string; value: string }[] = [
    { label: "Fecha", value: formatEventDate(event.startsAt) },
    { label: "Hora", value: formatEventTimeRange(event.startsAt, event.endsAt) },
    {
      label: "Lugar",
      value: [event.location.name, event.location.address, event.location.city].filter(Boolean).join(" · "),
    },
    { label: "Aporte", value: formatCOP(event.priceCOP) },
    { label: "Facilitan", value: event.facilitators.join(" y ") },
    { label: "Cupos", value: `${event.capacity} personas` },
  ];

  return (
    <article className="mx-auto mt-12 grid max-w-5xl overflow-hidden rounded-[2rem] bg-cream text-ink md:grid-cols-2">
      <Image
        src={event.image.src}
        alt={event.image.alt}
        width={900}
        height={900}
        sizes="(min-width: 768px) 40vw, 92vw"
        className="aspect-[4/3] h-full w-full object-cover md:aspect-auto"
      />
      <div className="p-6 sm:p-10">
        <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.14em]">
          <span className="rounded-full bg-lavender-light px-3 py-1 text-lavender-deep">
            {modalityLabels[event.modality]}
          </span>
          <span className="rounded-full bg-cream-deep px-3 py-1 text-gold-deep">
            {line.name.replace("Elishandre ", "")}
          </span>
        </div>
        <h3 className="mt-4 text-3xl sm:text-4xl">{event.name}</h3>
        <p className="mt-3 text-ink-soft">{event.description}</p>

        <dl className="mt-6 grid gap-x-6 gap-y-3 border-t border-sand pt-6 sm:grid-cols-[auto_1fr]">
          {details.map((detail) => (
            <div key={detail.label} className="contents">
              <dt className="eyebrow pt-[0.2rem]">{detail.label}</dt>
              <dd className="-mt-2 first-letter:uppercase sm:mt-0">{detail.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8">
          <ButtonLink
            href={getCtaHref({ kind: "event", item: event })}
            className="w-full sm:w-auto"
            srLabel={`en ${event.name}`}
          >
            Reservar mi cupo
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}

function externalLinkProps(href: string) {
  return isExternalHref(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
}
