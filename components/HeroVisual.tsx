import Image from 'next/image';

// Robot with a neon halo floating above its head.
// To change the halo colour, edit the --neon value in globals.css.
export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-sm pt-14 lg:max-w-md">
      {/* soft background glow */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-4 top-10 -z-10 rounded-full bg-gradient-to-br from-iris/25 via-sky to-halo/40 blur-3xl"
      />

      {/* the robot (white GIF background is hidden with a multiply blend) */}
      <Image
        src="xyz"
        alt="Friendly AI assistant robot waving"
        width={420}
        height={526}
        priority
        unoptimized
        className="relative h-auto w-full mix-blend-multiply"
      />

      {/* neon halo above the head */}
      <div aria-hidden className="neon-halo absolute left-[43%] top-8 h-10 w-[40%] -translate-x-1/2" />

      {/* floor shadow under the robot */}
      <div aria-hidden className="mx-auto -mt-2 h-4 w-1/3 rounded-[50%] bg-ink/10 blur-md" />

      {/* floating chips */}
      <span
        aria-hidden
        className="float absolute right-0 top-28 rounded-full border border-line bg-white px-4 py-2 text-sm font-bold shadow-lg md:-right-4"
      >
        Task complete ✓
      </span>
      <span
        aria-hidden
        style={{ animationDelay: '1.6s' }}
        className="float absolute bottom-24 left-0 rounded-full border border-line bg-white px-4 py-2 text-sm font-bold shadow-lg md:-left-4"
      >
        Human review on
      </span>
    </div>
  );
}