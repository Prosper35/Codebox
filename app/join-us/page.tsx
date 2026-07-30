import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Join Us | Codebox Games',
  description:
    'Join Codebox Games and help create original games inspired by African stories, history, and mythology.',
}

const disciplines = ['Engineering', 'Art and animation', 'Game design', 'Production', 'Writing and narrative']

export default function JoinUsPage() {
  return (
    <main className="bg-background">
      <SiteHeader />
      <section className="relative flex min-h-[76svh] items-end overflow-hidden bg-black text-white">
        <Image
          src="/4.jpg"
          alt="A supernatural encounter from Hell Bleeds"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.52)_50%,rgba(0,0,0,0.08)_82%),linear-gradient(180deg,transparent_30%,rgba(0,0,0,0.84)_100%)]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-32 md:pb-24">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-brand">
            Join our team
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-7xl font-bold uppercase leading-[0.82] tracking-tight text-balance sm:text-9xl">
            Shape the Future of Codebox Games
          </h1>
          <div className="mt-7 max-w-2xl space-y-3 text-sm leading-7 text-white/70">
            <p>
              We&apos;re building original games rooted in African mythology,
              culture, and storytelling &mdash; stories that haven&apos;t been
              told this way before.
            </p>
            <p>
              Our team is artists, designers, programmers, and creatives who
              care about the craft, not just shipping something.
            </p>
            <p>
              If you want to work on ambitious projects with a small, hands-on
              team, we&apos;d like to hear from you.
            </p>
            <p className="font-semibold text-white">Browse open roles below.</p>
          </div>
        </div>
      </section>

      <section className="surface-grid bg-background py-24 text-foreground md:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-brand">
              Open introductions
            </p>
            <h2 className="mt-5 font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-7xl">
              Your perspective belongs in the work.
            </h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-muted-foreground">
              Even when a specific role is not listed, we welcome portfolios
              from people whose craft and values align with ours.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="divide-y divide-border border-y border-border">
              {disciplines.map((discipline, index) => (
                <div key={discipline} className="flex items-center gap-5 py-5">
                  <span className="font-display text-lg font-bold text-brand">
                    0{index + 1}
                  </span>
                  <span className="font-display text-2xl font-semibold uppercase">
                    {discipline}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:hello@codeboxgames.com?subject=Joining%20Codebox%20Games"
                className="group inline-flex h-12 items-center justify-center gap-3 bg-brand px-6 text-xs font-bold uppercase tracking-[0.14em] text-brand-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Send your portfolio
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/about"
                className="inline-flex h-12 items-center justify-center border border-foreground px-6 text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:bg-foreground hover:text-background"
              >
                Meet the studio
              </Link>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
