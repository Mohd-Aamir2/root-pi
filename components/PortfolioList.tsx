'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Project } from '@/data/projects';
import ProjectCover from './ProjectCover';

export default function PortfolioList({ projects }: { projects: Project[] }) {
  const industries = Array.from(new Set(projects.map((p) => p.industry)));
  const [active, setActive] = useState<string | null>(null);
  const shown = active ? projects.filter((p) => p.industry === active) : projects;

  const pill = (on: boolean) =>
    `rounded-full border px-4 py-2 text-sm font-semibold ${
      on ? 'border-ink bg-ink text-white' : 'border-line bg-white hover:border-iris hover:text-iris'
    }`;

  return (
    <>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by industry">
        <button type="button" onClick={() => setActive(null)} aria-pressed={active === null} className={pill(active === null)}>
          All
        </button>
        {industries.map((i) => (
          <button key={i} type="button" onClick={() => setActive(i)} aria-pressed={active === i} className={pill(active === i)}>
            {i}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <article key={p.slug} className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white transition-shadow hover:shadow-xl">
            <ProjectCover tone={p.tone} className="h-48" />
            <div className="flex flex-1 flex-col p-7">
              <p className="text-sm font-semibold text-iris">{p.industry}</p>
              <h2 className="mt-1 text-xl font-extrabold tracking-tight">
                <Link
                  href={`/portfolio/${p.slug}`}
                  className="after:absolute after:inset-0 focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-iris"
                >
                  {p.title}
                </Link>
              </h2>
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
    </>
  );
}