import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const contactPaths = [
  {
    label: 'General enquiries',
    copy: 'Questions about the studio, our work, or Hell Bleeds.',
    href: 'mailto:hello@codeboxgames.com?subject=General%20enquiry',
  },
  {
    label: 'Partnerships',
    copy: 'Publishing, investment, technology, and creative collaboration.',
    href: 'mailto:hello@codeboxgames.com?subject=Partnership%20enquiry',
  },
]

export function MeetTeam() {
  return (
    <section className="surface-grid bg-background py-24 text-foreground md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-brand">
            Contact
          </p>
          <h2 className="mt-5 font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-7xl">
            We&apos;d like to hear from you.
          </h2>
          <p className="mt-7 max-w-md text-sm leading-7 text-muted-foreground">
            Tell us what you have in mind and we&apos;ll make sure it reaches
            the right people on the team.
          </p>
        </div>

        <div className="divide-y divide-border border-y border-border lg:col-span-6 lg:col-start-7">
          {contactPaths.map((path) => (
            <a
              key={path.label}
              href={path.href}
              className="group grid gap-4 py-7 sm:grid-cols-[1fr_1.3fr_auto] sm:items-center"
            >
              <h3 className="font-display text-2xl font-semibold uppercase transition-colors group-hover:text-brand">
                {path.label}
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {path.copy}
              </p>
              <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          ))}
          <Link
            href="/join-us"
            className="group grid gap-4 py-7 sm:grid-cols-[1fr_1.3fr_auto] sm:items-center"
          >
            <h3 className="font-display text-2xl font-semibold uppercase transition-colors group-hover:text-brand">
              Careers
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              Bring your craft and perspective to the worlds we are building.
            </p>
            <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
