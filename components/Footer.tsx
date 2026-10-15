import Link from 'next/link';
import { services, industries } from '@/data/nav';

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const company = [
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Resources', href: '/resources' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

// Replace with Ai Angel's real profiles. Remove any you don't have.
const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'X', href: 'https://x.com/' },
];

const linkClass = 'text-white/75 hover:text-halo';

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
              <span aria-hidden className="grid h-9 w-9 place-items-center rounded-full border-2 border-halo text-halo">A</span>
              Ai Angel
            </Link>
            <p className="mt-4 max-w-xs text-white/75">
              We build AI agents, apps and platforms that take work off your team.
            </p>
            {/* Replace with the real contact details */}
            <p className="mt-6 text-white/75">
              <a href="mailto:hello@aiangel.example" className="hover:text-halo">hello@aiangel.example</a>
            </p>
          </div>

          <nav aria-label="Services">
            <h2 className="font-extrabold">Services</h2>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s.title}>
                  <Link href={`/services/${slug(s.title)}`} className={linkClass}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Industries">
            <h2 className="font-extrabold">Industries</h2>
            <ul className="mt-4 space-y-2">
              {industries.map((i) => (
                <li key={i.title}>
                  <Link href={`/industries/${slug(i.title)}`} className={linkClass}>{i.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="font-extrabold">Company</h2>
            <ul className="mt-4 space-y-2">
              {company.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className={linkClass}>{c.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 text-sm text-white/65">
          <p>&copy; {new Date().getFullYear()} Ai Angel. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link href="/privacy" className="hover:text-halo">Privacy policy</Link></li>
            <li><Link href="/terms" className="hover:text-halo">Terms of service</Link></li>
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-halo">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}