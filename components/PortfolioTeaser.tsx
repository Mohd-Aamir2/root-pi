import Link from 'next/link';
import { projects } from '@/data/projects';
import ProjectCover from './ProjectCover';

export default function PortfolioTeaser() {
  const shown = projects.slice(0, 3);

  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-5 pb-20 md:pb-28">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Work we are proud of</h2>
          <p className="mt-4 text-lg text-ink/70">A few recent projects and what they changed for the client.</p>
        </div>
        <Link href="/portfolio" className="rounded-full border-2 border-ink px-6 py-3 font-semibold hover:bg-ink hover:text-white">
          View all projects
        </Link>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {shown.map((p) => (
          <article
            key={p.slug}
            className={`group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white transition-shadow hover:shadow-xl ${
              p.featured ? 'lg:col-span-2' : ''
            }`}
          >
            <ProjectCover tone={p.tone} className={`h-48 ${p.featured ? 'md:h-72' : ''}`} />
            <div className="flex flex-1 flex-col p-7">
              <p className="text-sm font-semibold text-iris">{p.industry}</p>
              <h3 className="mt-1 text-2xl font-extrabold tracking-tight">
                <Link
                  href={`/portfolio/${p.slug}`}
                  className="after:absolute after:inset-0 focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-iris"
                >
                  {p.title}
                </Link>
              </h3>
              <p className="mt-2 text-ink/70">{p.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-full border border-line bg-mist px-3 py-1 text-sm text-ink/80">{t}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}