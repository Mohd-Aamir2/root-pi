import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { sections, isSection, slug, findGroup, type SectionKey } from '@/lib/catalog';
import { content, contentKey } from '@/data/content';

export const dynamicParams = false; // only the pages listed below exist; anything else is a 404

type Params = { section: string; slug?: string[] };

export function generateStaticParams() {
  const out: { section: string; slug: string[] }[] = [];
  (Object.keys(sections) as SectionKey[]).forEach((section) => {
    out.push({ section, slug: [] });
    sections[section].groups.forEach((g) => {
      out.push({ section, slug: [slug(g.title)] });
      g.items.forEach((i) => out.push({ section, slug: [slug(g.title), slug(i)] }));
    });
  });
  return out;
}

function resolve({ section, slug: parts = [] }: Params) {
  if (!isSection(section) || parts.length > 2) return null;
  const sec = sections[section];
  if (parts.length === 0) return { kind: 'index' as const, section, sec };
  const group = findGroup(section, parts[0]);
  if (!group) return null;
  if (parts.length === 1) return { kind: 'group' as const, section, sec, group };
  const item = group.items.find((i) => slug(i) === parts[1]);
  if (!item) return null;
  const custom = content[contentKey(section, parts[0], parts[1])];
  return { kind: 'item' as const, section, sec, group, item, custom };
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const r = resolve(params);
  if (!r) return {};
  if (r.kind === 'item') {
    return {
      title: `${r.item} | Ai Angel`,
      description: r.custom?.intro,
      // Pages with only the generic template are hidden from Google until they have real content
      robots: r.custom ? undefined : { index: false, follow: true },
    };
  }
  return { title: `${r.kind === 'group' ? r.group.title : r.sec.title} | Ai Angel` };
}

const card = 'rounded-3xl border border-line bg-mist p-7 transition-shadow hover:shadow-xl';

const defaultProcess: [string, string][] = [
  ['Understand', 'We learn your goal, your users and your constraints.'],
  ['Prototype', 'You see something working early and tell us what to change.'],
  ['Build and test', 'We build the full version and test it properly.'],
  ['Launch and support', 'We deploy it, watch how it performs and keep improving it.'],
];

export default function CatalogPage({ params }: { params: Params }) {
  const r = resolve(params);
  if (!r) notFound();

  const base = `/${r.section}`;
  const crumbs: { label: string; href?: string }[] = [{ label: r.sec.title, href: base }];
  if (r.kind !== 'index') crumbs.push({ label: r.group.title, href: `${base}/${slug(r.group.title)}` });
  if (r.kind === 'item') crumbs.push({ label: r.item });
  crumbs[crumbs.length - 1].href = undefined;

  const title = r.kind === 'item' ? r.item : r.kind === 'group' ? r.group.title : r.sec.title;
  const custom = r.kind === 'item' ? r.custom : undefined;
  const steps = custom?.process ?? defaultProcess;
  const image = custom?.image;

  const faqJsonLd =
    custom && custom.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: custom.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }
      : null;

  return (
    <>
      <section className="hero-bg">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
          {/* With an image: text on the left, picture on the right (stacked on mobile) */}
          <div className={image ? 'grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]' : ''}>
            <div>
              <nav aria-label="Breadcrumb" className="text-sm text-ink/70">
                <Link href="/" className="hover:text-iris">Home</Link>
                {crumbs.map((c) => (
                  <span key={c.label}>
                    {' / '}
                    {c.href ? <Link href={c.href} className="hover:text-iris">{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                  </span>
                ))}
              </nav>
              <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">{title}</h1>
              <p className="mt-5 max-w-2xl text-lg text-ink/75">
                {r.kind === 'index' && r.sec.intro}
                {r.kind === 'group' && `Everything we build under ${r.group.title}.`}
                {r.kind === 'item' &&
                  (custom?.intro ?? `${r.item} is part of our ${r.group.title} work. Tell us what you need and we will scope it with you.`)}
              </p>
            </div>

            {image && (
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={630}
                priority
                // SVG pictures are served as they are; real photos (webp/jpg/png) still get optimised
                unoptimized={image.src.endsWith('.svg')}
                className="h-auto w-full rounded-3xl border border-line shadow-2xl"
              />
            )}
          </div>
        </div>
      </section>

      {/* Stats strip (only if real numbers are provided) */}
      {custom?.stats && custom.stats.length > 0 && (
        <section className="border-b border-line bg-white">
          <dl className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4">
            {custom.stats.map((s) => (
              <div key={s.label}>
                <dd className="text-3xl font-extrabold text-iris">{s.value}</dd>
                <dt className="mt-1 text-sm text-ink/70">{s.label}</dt>
              </div>
            ))}
          </dl>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        {r.kind === 'index' && (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {r.sec.groups.map((g) => (
              <Link key={g.title} href={`${base}/${slug(g.title)}`} className={card}>
                <h2 className="text-xl font-extrabold">{g.title}</h2>
                <p className="mt-3 text-ink/70">{g.items.slice(0, 4).join(', ')}{g.items.length > 4 ? ' and more' : ''}</p>
              </Link>
            ))}
          </div>
        )}

        {r.kind === 'group' && (
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {r.group.items.map((i) => (
              <li key={i}>
                <Link href={`${base}/${slug(r.group.title)}/${slug(i)}`} className={`block ${card}`}>
                  <h2 className="text-xl font-extrabold">{i}</h2>
                  <p className="mt-2 text-sm font-semibold text-iris">Learn more</p>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {r.kind === 'item' && (
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-14">
              {custom?.overview && custom.overview.length > 0 && (
                <div className="space-y-4 text-lg text-ink/75">
                  {custom.overview.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              )}

              {custom && (
                <div>
                  <h2 className="text-2xl font-extrabold">What we build</h2>
                  <ul className="mt-5 list-disc space-y-3 pl-5 text-lg text-ink/75">
                    {custom.offers.map((o) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ul>
                </div>
              )}

              {custom?.benefits && custom.benefits.length > 0 && (
                <div>
                  <h2 className="text-2xl font-extrabold">Why it matters</h2>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {custom.benefits.map((b) => (
                      <div key={b.title} className="rounded-2xl border border-line bg-white p-5 transition-shadow hover:shadow-lg">
                        <h3 className="font-extrabold text-iris">{b.title}</h3>
                        <p className="mt-1 text-ink/70">{b.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {custom && (
                <div>
                  <h2 className="text-2xl font-extrabold">Where it helps</h2>
                  <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                    {custom.useCases.map((u) => (
                      <li key={u} className="rounded-2xl border border-line bg-mist p-5 text-ink/80">{u}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h2 className="text-2xl font-extrabold">How we work on this</h2>
                <ol className="mt-6 space-y-5">
                  {steps.map(([t, d], idx) => (
                    <li key={t} className="flex gap-4">
                      <span
                        aria-hidden
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-white"
                      >
                        {idx + 1}
                      </span>
                      <div>
                        <h3 className="font-extrabold">{t}</h3>
                        <p className="mt-1 max-w-lg text-ink/70">{d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {custom?.stack && custom.stack.length > 0 && (
                <div>
                  <h2 className="text-2xl font-extrabold">Technologies we use</h2>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {custom.stack.map((t) => (
                      <li key={t} className="rounded-full border border-line bg-white px-4 py-2 text-sm">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {custom && custom.faqs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-extrabold">Common questions</h2>
                  <div className="mt-5 divide-y divide-line border-y border-line">
                    {custom.faqs.map((f) => (
                      <details key={f.q} className="group py-4">
                        <summary className="cursor-pointer list-none font-extrabold marker:content-none">{f.q}</summary>
                        <p className="mt-3 max-w-2xl text-ink/75">{f.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="rounded-3xl bg-ink p-8 text-white lg:sticky lg:top-28 lg:self-start">
              <h2 className="text-2xl font-extrabold">Want to talk about {r.item}?</h2>
              <p className="mt-3 text-white/75">Share a few lines about your idea and we will reply within one working day.</p>
              <Link href="/#contact" className="mt-6 inline-block rounded-full bg-halo px-6 py-3 font-semibold text-ink hover:bg-white">
                Contact us
              </Link>
            </aside>
          </div>
        )}

        {r.kind === 'item' && r.group.items.length > 1 && (
          <div className="mt-16">
            <h2 className="text-2xl font-extrabold">More in {r.group.title}</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {r.group.items.filter((i) => i !== r.item).map((i) => (
                <li key={i}>
                  <Link href={`${base}/${slug(r.group.title)}/${slug(i)}`} className="rounded-full border border-line bg-white px-4 py-2 text-sm hover:border-iris hover:text-iris">
                    {i}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }}
        />
      )}
    </>
  );
}