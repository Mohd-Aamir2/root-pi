import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import ProjectCover from '@/components/ProjectCover';

export const dynamicParams = false; // only listed projects exist; anything else is a 404

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = projects.find((x) => x.slug === params.slug);
  return p ? { title: `${p.title} | Ai Angel`, description: p.summary } : {};
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) notFound();

  const others = projects.filter((x) => x.slug !== p.slug).slice(0, 2);

  return (
    <>
      <section className="hero-bg">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="text-sm text-ink/70">
            <Link href="/" className="hover:text-iris">Home</Link>
            {' / '}
            <Link href="/portfolio" className="hover:text-iris">Portfolio</Link>
            {' / '}
            <span aria-current="page">{p.title}</span>
          </nav>
          <p className="mt-6 font-semibold text-iris">{p.industry}</p>
          <h1 className="mt-1 max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">{p.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/75">{p.summary}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <li key={t} className="rounded-full border border-line bg-white px-3 py-1 text-sm">{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <ProjectCover tone={p.tone} className="h-56 rounded-3xl border border-line md:h-96" />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-extrabold">The challenge</h2>
              <p className="mt-3 max-w-2xl text-lg text-ink/75">{p.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold">What we built</h2>
              <p className="mt-3 max-w-2xl text-lg text-ink/75">{p.solution}</p>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold">Results</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-lg text-ink/75">
                {p.results.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6 lg:self-start">
            <div className="rounded-3xl border border-line bg-mist p-7">
              <h2 className="font-extrabold">Built with</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li key={s} className="rounded-full border border-line bg-white px-3 py-1 text-sm">{s}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-ink p-8 text-white">
              <h2 className="text-2xl font-extrabold">Want something similar?</h2>
              <p className="mt-3 text-white/75">Tell us what you want to build and we will reply within one working day.</p>
              <Link href="/#contact" className="mt-6 inline-block rounded-full bg-halo px-6 py-3 font-semibold text-ink hover:bg-white">
                Contact us
              </Link>
            </div>
          </aside>
        </div>

        {others.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-extrabold">More projects</h2>
            <ul className="mt-5 grid gap-5 md:grid-cols-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/portfolio/${o.slug}`} className="block rounded-3xl border border-line bg-mist p-7 transition-shadow hover:shadow-xl">
                    <p className="text-sm font-semibold text-iris">{o.industry}</p>
                    <h3 className="mt-1 text-xl font-extrabold">{o.title}</h3>
                    <p className="mt-2 text-ink/70">{o.summary}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
}