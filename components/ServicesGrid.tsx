import Link from 'next/link';
import { services } from '@/data/nav';

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Blurbs and card layout per service group (keys match titles in data/nav.ts)
const meta: Record<string, { blurb: string; span: string; dark?: boolean }> = {
  'AI Development': {
    blurb: 'Chatbots, voice agents and automation that handle real work: answering customers, processing orders, reviewing documents.',
    span: 'lg:col-span-2 lg:row-span-2',
    dark: true,
  },
  Blockchain: { blurb: 'Smart contracts, wallets and marketplaces built for security first.', span: '' },
  'Mobile App': { blurb: 'Fast, native-feeling apps for iPhone and Android from one team.', span: '' },
  'Web & Software': { blurb: 'MVPs, SaaS products and enterprise systems, from first prototype to scale.', span: 'lg:col-span-2' },
  'Analytics & CRM': { blurb: 'Dashboards and CRM setups that turn your data into decisions.', span: '' },
};

export default function ServicesGrid() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">What we build for you</h2>
        <p className="mt-4 text-lg text-ink/70">
          From a first AI prototype to a full product, one team covers the whole stack.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const m = meta[s.title] ?? { blurb: '', span: '' };
          const dark = m.dark;
          return (
            <article
              key={s.title}
              className={`group relative flex flex-col rounded-3xl border p-7 transition-shadow hover:shadow-xl ${m.span} ${
                dark ? 'border-ink bg-ink text-white md:col-span-2 lg:p-10' : 'border-line bg-mist'
              }`}
            >
              <h3 className={`font-extrabold tracking-tight ${dark ? 'text-3xl md:text-4xl' : 'text-xl'}`}>
                <Link
                  href={`/services/${slug(s.title)}`}
                  className="after:absolute after:inset-0 after:rounded-3xl focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-iris"
                >
                  {s.title}
                </Link>
              </h3>
              <p className={`mt-3 ${dark ? 'max-w-lg text-lg text-white/75' : 'text-ink/70'}`}>{m.blurb}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <li
                    key={i}
                    className={`rounded-full border px-3 py-1 text-sm ${
                      dark ? 'border-white/25 text-white/90' : 'border-line bg-white text-ink/80'
                    }`}
                  >
                    {i}
                  </li>
                ))}
              </ul>

              <span className={`mt-auto pt-8 text-sm font-bold ${dark ? 'text-halo' : 'text-iris'}`}>
                Explore {s.title.toLowerCase()}
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
}