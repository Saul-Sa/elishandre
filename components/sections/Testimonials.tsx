import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section aria-labelledby="testimonios-title" className="bg-lavender-light/60 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading id="testimonios-title" eyebrow="Testimonios" title="Lo que se mueve en círculo" />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <figure className="flex h-full flex-col rounded-[2rem] bg-cream p-7">
                <span aria-hidden="true" className="font-serif text-6xl leading-none text-gold">
                  “
                </span>
                <blockquote className="-mt-3 flex-1 font-serif text-xl italic leading-snug text-ink">
                  <p>{testimonial.quote}</p>
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-bold text-ink">{testimonial.author}</span>
                  <span className="block text-ink-soft">{testimonial.context}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
