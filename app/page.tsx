import { getFeaturedEvent } from "@/data/events";
import { site } from "@/data/site";
import { getSiteUrl } from "@/lib/format";
import { About } from "@/components/sections/About";
import { FeaturedEvent } from "@/components/sections/FeaturedEvent";
import { Hero } from "@/components/sections/Hero";
import { Kits } from "@/components/sections/Kits";
import { Lines } from "@/components/sections/Lines";
import { Testimonials } from "@/components/sections/Testimonials";
import { JsonLd } from "@/components/ui/JsonLd";

/**
 * La página se regenera cada hora para que el "próximo encuentro" cambie solo
 * cuando pasa la fecha del actual, sin volver a publicar.
 */
export const revalidate = 3600;

export default function HomePage() {
  const now = new Date();
  return (
    <>
      <Hero />
      <About />
      <Lines />
      <FeaturedEvent now={now} />
      <Kits />
      <Testimonials />
      <StructuredData now={now} />
    </>
  );
}

function StructuredData({ now }: { now: Date }) {
  const url = getSiteUrl();
  const event = getFeaturedEvent(now);
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url,
    logo: `${url}${site.logo.src}`,
    slogan: site.motto,
    sameAs: [site.instagram.url],
    address: { "@type": "PostalAddress", addressLocality: "Medellín", addressCountry: "CO" },
  };
  return (
    <>
      <JsonLd data={organization} />
      {event && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Event",
            name: event.name,
            description: event.description,
            startDate: event.startsAt,
            endDate: event.endsAt,
            eventAttendanceMode:
              event.modality === "presencial"
                ? "https://schema.org/OfflineEventAttendanceMode"
                : "https://schema.org/OnlineEventAttendanceMode",
            location:
              event.modality === "presencial"
                ? {
                    "@type": "Place",
                    name: event.location.name,
                    address: [event.location.address, event.location.city].filter(Boolean).join(", "),
                  }
                : { "@type": "VirtualLocation", url },
            image: `${url}${event.image.src}`,
            organizer: { "@type": "Organization", name: site.name, url },
            offers: { "@type": "Offer", price: event.priceCOP, priceCurrency: "COP", url },
          }}
        />
      )}
    </>
  );
}
