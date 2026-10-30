import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="container-page flex flex-col items-center py-24 text-center">
      <p className="eyebrow">Página no encontrada</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Este camino no lleva a ningún lugar</h1>
      <div className="mt-8">
        <ButtonLink href="/">Volver al inicio</ButtonLink>
      </div>
    </section>
  );
}
