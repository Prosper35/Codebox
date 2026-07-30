import Link from 'next/link'

export function Values() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url(/images/hero-space.png)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-36 md:grid-cols-2 md:items-start md:gap-16">
        <div className="max-w-md">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Our values
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-white/70">
            At Codebox Games, our core values are creativity, authenticity, and
            entertainment for gamers in everything we do. In addition, we value
            diversity and equality at all levels of our organization to ensure
            every person has a voice when it comes to game design and
            development. Our teammates love the diverse views that contribute to
            the way our games are being created. As a team of creatives and
            developers, we encourage our staff and customers to escape from the
            limitations of the 3-dimensional world and launch into the limitless
            11th Dimension.
          </p>
          <Link
            href="/#join"
            className="mt-8 inline-flex h-12 w-44 items-center justify-center bg-brand font-medium text-brand-foreground transition-colors hover:bg-brand/90"
          >
            Join us
          </Link>
        </div>

        <div className="md:pt-2">
          <img
            src="/images/about-chalkboard.png"
            alt="Chalkboard with a checked box next to the words About Us"
            className="w-full border border-white/10 object-cover"
          />
        </div>
      </div>
    </section>
  )
}
