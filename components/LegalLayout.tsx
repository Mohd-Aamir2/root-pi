import Link from 'next/link';

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="hero-bg">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="text-sm text-ink/70">
            <Link href="/" className="hover:text-iris">Home</Link>
            {' / '}
            <span aria-current="page">{title}</span>
          </nav>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
          <p className="mt-3 text-ink/70">Last updated: {updated}</p>
        </div>
      </section>
      <article className="mx-auto max-w-3xl space-y-10 px-5 py-16 text-lg leading-relaxed text-ink/80 md:py-20 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_a]:font-semibold [&_a]:text-iris [&_a]:underline">
        {children}
      </article>
    </>
  );
}