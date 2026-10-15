// IMPORTANT: the numbers below are placeholders.
// Replace them with Ai Angel's real figures before launch, and remove any item you can't back up.
const stats = [
  { value: '50+', label: 'Projects delivered' },
  { value: '20+', label: 'Industries and use cases' },
  { value: '4 weeks', label: 'Typical time to a working prototype' },
  { value: '24/7', label: 'Support after launch' },
];

// How the work runs: each step is a real sequence, so the numbering means something.
const steps = [
  { title: 'Discover', text: 'We map your workflow and pick the one problem worth solving first.' },
  { title: 'Prototype', text: 'You see a working version in weeks and give feedback early.' },
  { title: 'Build', text: 'We develop, test and secure the full product.' },
  { title: 'Launch and improve', text: 'We deploy, monitor and keep improving it with your data.' },
];

export default function StatsStrip() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <dl className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-line">
        {stats.map((s) => (
          <div key={s.label} className="md:px-8 md:first:pl-0">
            <dt className="order-2 mt-2 text-ink/70">{s.label}</dt>
            <dd className="order-1 text-4xl font-extrabold tracking-tight text-ink md:text-5xl">{s.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          A simple process, so you always know what comes next
        </h2>
        <ol className="space-y-6">
          {steps.map((st, i) => (
            <li key={st.title} className="flex gap-5">
              <span
                aria-hidden
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-halo font-extrabold text-iris"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-extrabold">{st.title}</h3>
                <p className="mt-1 max-w-lg text-ink/70">{st.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}