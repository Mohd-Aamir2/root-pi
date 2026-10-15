import Link from 'next/link';
import { industries } from '@/data/nav';

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// One-line description per industry (keys match titles in data/nav.ts)
const blurbs: Record<string, string> = {
  Healthcare: 'Tools that help clinicians and patients, from diagnosis support to medical imaging.',
  'Customer Support': 'Support that answers in seconds and hands off to people when it matters.',
  Insurance: 'Faster underwriting and claims, with fewer manual checks.',
  'Real Estate': 'Property insights and assistants that help agents close sooner.',
  'Banking & Lending': 'Smarter lending, mortgage and payment flows with risk built in.',
  Ecommerce: 'Shopping assistants and store chatbots that turn visitors into buyers.',
};

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-sky">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:py-28 lg:grid-cols-[1fr_1.6fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            AI that fits how your industry works
          </h2>
          <p className="mt-4 max-w-md text-lg text-ink/70">
            We start from your workflows and regulations, then build the AI around them.
          </p>
          <Link
            href="/industries"
            className="mt-8 inline-block rounded-full bg-ink px-6 py-3 font-semibold text-white hover:bg-iris"
          >
            View all industries
          </Link>
        </div>

        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {industries.map((ind) => (
            <li key={ind.title}>
              <Link
                href={`/industries/${slug(ind.title)}`}
                className="group block rounded-2xl px-4 py-6 transition-colors hover:bg-white focus-visible:bg-white md:px-6"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl font-extrabold tracking-tight group-hover:text-iris">{ind.title}</h3>
                  <span className="hidden shrink-0 text-sm font-semibold text-iris opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
                    See solutions
                  </span>
                </div>
                <p className="mt-2 max-w-xl text-ink/70">{blurbs[ind.title] ?? ''}</p>
                <p className="mt-3 text-sm font-semibold text-ink/80">{ind.items.join(', ')}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}