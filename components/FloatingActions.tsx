export default function FloatingActions() {
  return (
    <>
      <a href="/contact#callback" className="fixed left-0 top-1/2 z-30 hidden -translate-y-1/2 rounded-r-lg border border-line bg-white px-2 py-4 text-sm font-bold shadow-md [writing-mode:vertical-rl] rotate-180 md:block">
        Get a call back
      </a>
      {/* Replace the number below with Ai Angel's WhatsApp number (country code, no +) */}
      <a href="https://wa.me/910000000000" aria-label="Chat on WhatsApp" className="fixed bottom-5 left-5 z-30 grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-xl text-white shadow-lg">W</a>
    </>
  );
}
