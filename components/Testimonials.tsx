// IMPORTANT: these quotes are placeholders so you can see the layout.
// Publish only real quotes from real clients, with their permission. Delete this section until you have them.
const quotes = [
  { text: 'Replace this with a real client quote about the result they got.', name: 'Client name', role: 'Role, Company' },
  { text: 'Replace this with a second real quote, ideally with a number or a specific outcome.', name: 'Client name', role: 'Role, Company' },
  { text: 'Replace this with a third real quote about working with your team.', name: 'Client name', role: 'Role, Company' },
];

export default function Testimonials() {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl">What clients say about working with us</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <figure key={i} className="flex flex-col rounded-3xl border border-line bg-white p-7">
              <blockquote className="text-lg leading-relaxed">{q.text}</blockquote>
              <figcaption className="mt-auto pt-6">
                <p className="font-extrabold">{q.name}</p>
                <p className="text-sm text-ink/70">{q.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}