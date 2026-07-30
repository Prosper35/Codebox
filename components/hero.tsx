import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[115svh] flex-col items-center justify-center overflow-hidden bg-background text-foreground"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100 dark:opacity-90"
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
        className="absolute inset-0 size-full object-cover motion-reduce:hidden dark:opacity-90"
        aria-hidden="true"
      >
        <source src="/Short.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background dark:from-black/70 dark:via-transparent dark:to-[#050505]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center px-6 text-center">
        <h1 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-balance drop-shadow-[0_1px_8px_rgba(255,255,255,0.85)] dark:drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)] sm:text-5xl lg:text-6xl">
          <span>Creating Memorable </span>
          <span className="inline-block animate-hero-flicker text-foreground/90">
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
            className="inline-flex h-12 w-44 items-center justify-center border border-foreground/70 font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            About us
          </Link>
        </div>
      </div>
    </section>
  )
}
