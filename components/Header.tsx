import Link from "next/link";
import { Oleo_Script } from "next/font/google";
import { agents, industries, services, type Group } from "@/data/nav";
import NavItem from "./NavItem";

const logoFont = Oleo_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const company = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

// Top-level nav link: grows + turns iris, underline slides in, press effect on click
const navLink =
  "relative flex items-center gap-1 px-3 py-2 text-[15px] font-medium " +
  "transition-all duration-200 hover:scale-110 hover:text-iris active:scale-95 " +
  "after:absolute after:inset-x-3 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 " +
  "after:rounded-full after:bg-iris after:transition-transform after:duration-300 " +
  "hover:after:scale-x-100";

// Keeps the nav link highlighted while the pop-up is open
const navLinkActive =
  "group-hover/nav:scale-110 group-hover/nav:text-iris group-hover/nav:after:scale-x-100 " +
  "group-focus-within/nav:scale-110 group-focus-within/nav:text-iris group-focus-within/nav:after:scale-x-100";

// Pop-up panel: scales up from the top with a springy overshoot, fades in, de-blurs.
// The last line force-closes it after a link click (data-closed set by NavItem).
const popPanel =
  "invisible z-40 origin-top translate-y-3 scale-95 opacity-0 blur-sm " +
  "transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] " +
  "group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:scale-100 group-hover/nav:opacity-100 group-hover/nav:blur-0 " +
  "group-focus-within/nav:visible group-focus-within/nav:translate-y-0 group-focus-within/nav:scale-100 group-focus-within/nav:opacity-100 group-focus-within/nav:blur-0 " +
  "group-data-[closed=true]/nav:!invisible group-data-[closed=true]/nav:!opacity-0";

// Staggered entrance for each column (full class names so Tailwind keeps them)
const stagger = [
  "group-hover/nav:delay-100 group-focus-within/nav:delay-100",
  "group-hover/nav:delay-[170ms] group-focus-within/nav:delay-[170ms]",
  "group-hover/nav:delay-[240ms] group-focus-within/nav:delay-[240ms]",
  "group-hover/nav:delay-[310ms] group-focus-within/nav:delay-[310ms]",
  "group-hover/nav:delay-[380ms] group-focus-within/nav:delay-[380ms]",
  "group-hover/nav:delay-[450ms] group-focus-within/nav:delay-[450ms]",
  "group-hover/nav:delay-[520ms] group-focus-within/nav:delay-[520ms]",
  "group-hover/nav:delay-[590ms] group-focus-within/nav:delay-[590ms]",
];

const reveal =
  "translate-y-4 opacity-0 transition-all duration-500 ease-out " +
  "group-hover/nav:translate-y-0 group-hover/nav:opacity-100 " +
  "group-focus-within/nav:translate-y-0 group-focus-within/nav:opacity-100";

// A different hover color for each column
const hoverColors = [
  "hover:text-iris",
  "hover:text-rose-600",
  "hover:text-emerald-600",
  "hover:text-amber-600",
  "hover:text-sky-600",
];

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={`h-4 w-4 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={`h-3.5 w-3.5 transition-transform duration-300 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function Columns({
  groups,
  base,
  cols,
  animate = false,
}: {
  groups: Group[];
  base: string;
  cols: string;
  animate?: boolean; // true = staggered pop-up entrance (desktop only)
}) {
  return (
    <div className={`grid gap-x-8 gap-y-6 ${cols}`}>
      {groups.map((g, idx) => {
        const color = hoverColors[idx % hoverColors.length];
        return (
          <div
            key={g.title}
            className={animate ? `${reveal} ${stagger[idx % stagger.length]}` : ""}
          >
            <Link
              href={`/${base}/${slug(g.title)}`}
              className={`group/link flex items-center gap-1 font-bold transition-colors duration-200 ${color}`}
            >
              {g.title}
              <Arrow className="-translate-x-2 opacity-0 transition-all duration-200 group-hover/link:translate-x-0 group-hover/link:opacity-100" />
            </Link>
            <ul className="mt-2 space-y-1.5 text-sm font-medium text-ink">
              {g.items.map((i) => (
                <li key={i}>
                  <Link
                    href={`/${base}/${slug(g.title)}/${slug(i)}`}
                    className={`group/link flex items-center gap-1 transition-all duration-200 hover:translate-x-1 ${color}`}
                  >
                    {i}
                    <Arrow className="-translate-x-2 opacity-0 transition-all duration-200 group-hover/link:translate-x-0 group-hover/link:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

function Mega({
  label,
  href,
  base,
  groups,
  cols,
}: {
  label: string;
  href: string;
  base: string;
  groups: Group[];
  cols: string;
}) {
  return (
    <NavItem className="flex h-20 items-center">
      <Link href={href} className={`${navLink} ${navLinkActive}`}>
        {label}
        <Chevron className="group-hover/nav:rotate-180 group-focus-within/nav:rotate-180" />
      </Link>

      <div className={`absolute inset-x-0 top-full ${popPanel}`}>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-b-2xl border border-line bg-white p-8 shadow-2xl">
          {/* accent bar that sweeps across the top */}
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-ink via-iris to-rose-500 transition-transform duration-700 ease-out group-hover/nav:scale-x-100 group-focus-within/nav:scale-x-100"
          />
          <Columns groups={groups} base={base} cols={cols} animate />
          <Link
            href={href}
            className={`group/all mt-6 inline-flex items-center gap-2 rounded-full bg-iris px-5 py-2.5 text-sm font-semibold text-white hover:scale-105 hover:bg-ink ${reveal} group-hover/nav:delay-[500ms] group-focus-within/nav:delay-[500ms]`}
          >
            View all {label}
            <Arrow className="transition-transform duration-200 group-hover/all:translate-x-1" />
          </Link>
        </div>
      </div>
    </NavItem>
  );
}

// Small dropdown for simple link lists
function Dropdown({
  label,
  links,
}: {
  label: string;
  links: { label: string; href: string }[];
}) {
  return (
    <NavItem className="relative flex h-20 items-center">
      <button type="button" className={`${navLink} ${navLinkActive}`}>
        {label}
        <Chevron className="group-hover/nav:rotate-180 group-focus-within/nav:rotate-180" />
      </button>

      <div className={`absolute left-0 top-full min-w-52 ${popPanel}`}>
        <ul className="relative overflow-hidden rounded-b-2xl border border-line bg-white p-3 shadow-2xl">
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-ink via-iris to-rose-500 transition-transform duration-700 ease-out group-hover/nav:scale-x-100 group-focus-within/nav:scale-x-100"
          />
          {links.map((l, idx) => (
            <li
              key={l.href}
              className={`${reveal} ${stagger[idx % stagger.length]}`}
            >
              <Link
                href={l.href}
                className={`group/link flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-ink transition-all duration-200 hover:bg-mist hover:pl-4 ${hoverColors[idx % hoverColors.length]}`}
              >
                {l.label}
                <Arrow className="-translate-x-2 opacity-0 transition-all duration-200 group-hover/link:translate-x-0 group-hover/link:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </NavItem>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        {/* Logo */}
        <Link href="/" aria-label="RootPi" className="flex items-end gap-2">
          <svg
            aria-hidden
            viewBox="0 0 76 56"
            className="h-14 w-[76px]"
            fill="none"
          >
            <path
              d="M3 32 Q5 27 10 29 L19 50 L31 8 H72"
              transform="translate(2 2)"
              className="stroke-iris"
              strokeOpacity="0.3"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 32 Q5 27 10 29 L19 50 L31 8 H72"
              className="stroke-ink"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="72" cy="8" r="3.5" className="fill-iris" />
            <text
              x="54"
              y="48"
              textAnchor="middle"
              fontSize="55"
              fontWeight="700"
              fontStyle="italic"
              fontFamily="Georgia, 'Times New Roman', serif"
              className="fill-iris"
            >
              π
            </text>
          </svg>

          <span
            className={`${logoFont.className} mb-1 bg-gradient-to-r from-ink to-iris bg-clip-text text-4xl leading-none tracking-normal text-transparent`}
          >
            RootPi
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden h-20 lg:block">
          <ul className="flex h-full items-center">
            <li className="mr-3">
              <Link
                href="/agents"
                className="rounded-full border border-ink px-4 py-2 text-sm font-semibold transition-all duration-200 hover:scale-105 hover:bg-ink hover:text-white active:scale-95"
              >
                AgentStore
              </Link>
            </li>
            <li className="flex h-20 items-center">
              <Link href="/portfolio" className={navLink}>
                Portfolio
              </Link>
            </li>
            <Mega
              label="Services"
              href="/services"
              base="services"
              groups={services}
              cols="grid-cols-5"
            />
            <Mega
              label="Industries"
              href="/industries"
              base="industries"
              groups={industries}
              cols="grid-cols-3"
            />
            <Mega
              label="AI Agents"
              href="/agents"
              base="agents"
              groups={agents}
              cols="grid-cols-3"
            />
            <Dropdown label="Company" links={company} />
          </ul>
        </nav>

        <Link
          href="/#contact"
          className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-iris active:scale-95 lg:block"
        >
          Let&apos;s talk
        </Link>

        {/* Mobile menu: native <details>, no JavaScript needed */}
        <details className="group/m lg:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-line px-3 py-2 text-sm font-semibold">
            Menu
          </summary>
          <div className="absolute inset-x-0 top-full max-h-[80vh] overflow-y-auto border-t border-line bg-white p-5 shadow-xl">
            {[
              ["Services", services, "services"],
              ["Industries", industries, "industries"],
              ["AI Agents", agents, "agents"],
            ].map(([t, g, b]) => (
              <details key={t as string} className="border-b border-line py-3">
                <summary className="cursor-pointer font-bold">
                  {t as string}
                </summary>
                <div className="mt-3">
                  <Columns
                    groups={g as Group[]}
                    base={b as string}
                    cols="grid-cols-1"
                  />
                </div>
              </details>
            ))}
            <Link
              href="/portfolio"
              className="block border-b border-line py-3 font-bold"
            >
              Portfolio
            </Link>
            {company.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="block border-b border-line py-3 font-bold"
              >
                {c.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="mt-4 block rounded-full bg-ink py-3 text-center font-semibold text-white"
            >
              Let&apos;s talk
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}