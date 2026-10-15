import Link from 'next/link';
import Typewriter from './Typewriter';
import HeroVisual from './HeroVisual';

const words = ['AI agents', 'smart chatbots', 'mobile apps', 'web platforms', 'automations'];

export default function Hero() {
  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-14 md:py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
        <div>
          <p className="rise inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-4 py-2 text-sm font-bold shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-halo opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-halo" />
            </span>
            We build <span className="text-iris"><Typewriter words={words} /></span>
          </p>

          {/* No fade-in on the heading, so the page paints at full speed */}
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Software that thinks with you,
            <span className="grad-text grad-anim block pb-2 italic">built to make a real difference</span>
          </h1>

          <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-ink/75 md:text-xl [animation-delay:0.15s]">
            Ai Angel designs AI agents, apps, and platforms that take work off your team and get measurable results in
            weeks, not quarters.
          </p>

          <div className="rise mt-9 flex flex-wrap gap-3 [animation-delay:0.3s]">
            <Link href="/#contact" className="rounded-full border-2 border-ink px-6 py-3 font-semibold hover:bg-ink hover:text-white">
              Share your idea
            </Link>
            <Link
              href="/#contact"
              className="rounded-full bg-iris px-6 py-3 font-semibold text-white shadow-lg shadow-iris/30 hover:bg-ink"
            >
              Book a strategy call
            </Link>
          </div>
        </div>

        <div className="rise [animation-delay:0.2s]">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}