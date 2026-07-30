import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function JoinCta() {
  return (
    <section className="bg-brand text-brand-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1fr_auto] md:items-end md:py-24">
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em]">
            Careers
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-balance sm:text-7xl">
            Make your mark on the worlds we build.
          </h2>
        </div>
        <Link
          href="/join-us"
          className="group inline-flex h-12 items-center justify-center gap-3 bg-black px-6 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-black"
        >
          Join the team
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
