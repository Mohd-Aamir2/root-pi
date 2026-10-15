import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@/data/projects';
import PortfolioList from '@/components/PortfolioList';

export const metadata: Metadata = { title: 'Portfolio | Ai Angel' };

export default function PortfolioPage() {
  return (
    <>
      <section className="hero-bg">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="text-sm text-ink/70">
            <Link href="/" className="hover:text-iris">Home</Link>
            {' / '}
            <span aria-current="page">Portfolio</span>
          </nav>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">Our work</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/75">Projects we have built, and what they changed for the people who use them.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <PortfolioList projects={projects} />
      </section>
    </>
  );
}