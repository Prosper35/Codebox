import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-[#050505] text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: 'url(/images/hero-space.png)' }}
        aria-hidden="true"
      />
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/images/hero-space.png"
        className="absolute inset-0 size-full object-cover opacity-90 motion-reduce:hidden"
        aria-hidden="true"
      >
        <source src="/Short.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-[#050505]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center px-6 text-center">
        <h1 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
          <span>Creating Memorable </span>
          <span className="inline-block animate-hero-flicker text-white/90">
            Experiences
          </span>
        </h1>

        <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="#join"
            className="inline-flex h-12 w-44 items-center justify-center bg-brand font-medium text-brand-foreground transition-colors hover:bg-brand/90"
          >
            Join us
          </Link>
          <Link
            href="#about"
            className="inline-flex h-12 w-44 items-center justify-center border border-white/70 font-medium text-white transition-colors hover:bg-white hover:text-black"
          >
            About us
          </Link>
        </div>
      </div>
    </section>
  )
}
