import ContactForm from './ContactForm';

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:py-28 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">Tell us what you want to build</h2>
          <p className="mt-5 max-w-md text-lg text-white/75">
            Share your idea in a few lines. We will reply within one working day with questions or a first plan.
          </p>
          {/* Anchors used by the hero and the side tab */}
          <span id="strategy" />
          <span id="callback" />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}