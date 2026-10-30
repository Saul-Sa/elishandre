import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPolicy, policies } from "@/data/policies";

export const dynamicParams = false;

export function generateStaticParams() {
  return policies.map((policy) => ({ slug: policy.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const policy = getPolicy((await params).slug);
  return policy ? { title: policy.title, alternates: { canonical: `/politicas/${policy.slug}` } } : {};
}

export default async function PolicyPage({ params }: Props) {
  const policy = getPolicy((await params).slug);
  if (!policy) notFound();

  return (
    <article className="container-page max-w-3xl py-16 sm:py-24">
      <p className="eyebrow">Políticas</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">{policy.title}</h1>
      <p className="mt-3 text-sm text-ink-soft">
        Última actualización: <time dateTime={policy.updatedAt}>{policy.updatedAt}</time>
      </p>
      <div className="mt-8 space-y-4 text-lg text-ink-soft">
        {policy.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <Link href="/" className="mt-10 inline-flex min-h-11 items-center font-semibold text-olive-deep underline underline-offset-4">
        Volver al inicio
      </Link>
    </article>
  );
}
