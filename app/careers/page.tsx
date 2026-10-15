import type { Metadata } from 'next';
import Link from 'next/link';
import { roles } from '@/data/careers';
import { company } from '@/data/company';

export const metadata: Metadata = {
  title: 'Careers | Ai Angel',
  description: 'Open roles and internships at Ai Angel.',
};

export default function CareersPage() {
  const mail = (subject: string) => `mailto:${company.email}?subject=${encodeURIComponent(subject)}`;

  return (
    <>
      <section className="hero-bg">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="text-sm text-ink/70">
            <Link href="/" className="hover:text-iris">Home</Link>
            {' / '}
            <span aria-current="page">Careers</span>
          </nav>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">Build useful things with us</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/75">
            We are a small team, so everyone owns real work from day one.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:py-24">
        <h2 className="text-3xl font-extrabold tracking-tight">Open roles</h2>

        {roles.length > 0 ? (
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {roles.map((r) => (
              <li key={r.slug} className="flex flex-wrap items-center justify-between gap-4 py-6">
                <div>
                  <h3 className="text-xl font-extrabold">{r.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-iris">{r.type} · {r.location}</p>
                  <p className="mt-2 max-w-xl text-ink/70">{r.summary}</p>
                </div>
                <a
                  href={mail(`Application: ${r.title}`)}
                  className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-iris"
                >
                  Apply by email
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-8 rounded-3xl border border-line bg-mist p-8">
            <p className="text-xl font-extrabold">No open roles right now</p>
            <p className="mt-2 max-w-xl text-ink/70">
              We are always glad to hear from capable people. Send us your CV and a few lines about what you want to work on.
            </p>
            <a
              href={mail('Application: general')}
              className="mt-6 inline-block rounded-full bg-iris px-6 py-3 font-semibold text-white hover:bg-ink"
            >
              Email your CV
            </a>
          </div>
        )}

        <p className="mt-10 text-sm text-ink/70">
          By applying you agree to our <Link href="/privacy" className="font-semibold text-iris underline">privacy policy</Link>.
          We keep applications only as long as needed to consider you.
        </p>
      </section>
    </>
  );
}