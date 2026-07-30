import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function StudioStatement() {
  return (
    <section className="relative overflow-hidden bg-brand text-brand-foreground">
      <div className="absolute -right-20 -top-32 font-display text-[24rem] font-extrabold leading-none text-black/[0.045]">
        C
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em]">
            Codebox Games / Nigeria
          </p>
        </div>
        <div className="lg:col-span-8">
          <h2 className="max-w-4xl font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-balance sm:text-7xl lg:text-8xl">
            African stories. World-class ambition.
          </h2>
          <div className="mt-10 grid gap-8 border-t border-black/20 pt-8 md:grid-cols-2">
            <p className="text-sm leading-7 text-black/70">
              We are an independent game studio focused on building immersive
              worlds inspired by African history, mythology, and imagination.
            </p>
            <div>
              <p className="text-sm leading-7 text-black/70">
                Our mission is to create original games that can stand alongside
                the best in the industry while showing what African developers
                can bring to the medium.
              </p>
              <div className="mt-7 flex flex-wrap gap-5">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em]"
                >
                  Our studio
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/join-us"
                  className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em]"
                >
                  Join the team
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
