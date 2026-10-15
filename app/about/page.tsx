import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | Ai Angel',
  description: 'Who we are and how Ai Angel builds AI, web and mobile software.',
};

// Replace the text below with Ai Angel's real story, values and team.
const values = [
  { title: 'Useful before clever', text: 'We pick the simplest solution that solves the problem, then make it better.' },
  { title: 'Honest about what works', text: 'If AI is not the right tool for your problem, we say so.' },
  { title: 'Fast and clear', text: 'You see working software early and always know what happens next.' },
];

const team = [
  { name: 'Name', role: 'Founder' },
  { name: 'Name', role: 'Lead engineer' },
  { name: 'Name', role: 'Designer' },
];

export default function AboutPage() {
  return (
    <>
      <section className="hero-bg">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="text-sm text-ink/70">
            <Link href="/" className="hover:text-iris">Home</Link>
            {' / '}
            <span aria-current="page">About</span>
          </nav>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">
            A small team building software that earns its place
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/75">
            {/* TODO: one or two real sentences about why Ai Angel exists */}
            Ai Angel designs and builds AI agents, apps and platforms for businesses that want results, not demos.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Our story</h2>
          <div className="max-w-2xl space-y-4 text-lg text-ink/75">
            {/* TODO: replace with the real story: when you started, why, and what you have learned */}
            <p>Write how Ai Angel started, in a few plain sentences. Who started it, and what problem were you trying to solve?</p>
            <p>Write what you focus on today and what makes the way you work different from other agencies.</p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">How we work</h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((v) => (
              <li key={v.title} className="rounded-3xl border border-line bg-mist p-7">
                <h3 className="text-xl font-extrabold">{v.title}</h3>
                <p className="mt-3 text-ink/70">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">The team</h2>
          {/* TODO: replace with real people, with their permission. Remove this block if you prefer not to list names. */}
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <li key={i} className="rounded-3xl border border-line p-7">
                <div aria-hidden className="mb-5 grid h-16 w-16 place-items-center rounded-full border-2 border-halo text-xl font-extrabold text-iris">
                  {m.name.charAt(0)}
                </div>
                <p className="text-lg font-extrabold">{m.name}</p>
                <p className="text-ink/70">{m.role}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 rounded-3xl bg-ink p-8 text-white md:p-12">
          <h2 className="text-2xl font-extrabold md:text-3xl">Have a project in mind?</h2>
          <p className="mt-3 max-w-xl text-white/75">Tell us what you want to build and we will reply within one working day.</p>
          <Link href="/#contact" className="mt-6 inline-block rounded-full bg-halo px-6 py-3 font-semibold text-ink hover:bg-white">
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}