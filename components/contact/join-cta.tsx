import Link from "next/link"

export function JoinCta() {
  return (
    <section className="bg-background pb-28 md:pb-36">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">
        <h4 className="font-display text-2xl font-bold leading-snug text-foreground text-balance md:text-3xl">
          Want to join our team?
          <br />
          Check out open roles
        </h4>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#join"
            className="bg-brand px-8 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
          >
            Careers
          </Link>
          <Link
            href="/about"
            className="border border-foreground px-8 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            About us
          </Link>
        </div>
      </div>
    </section>
  )
}
