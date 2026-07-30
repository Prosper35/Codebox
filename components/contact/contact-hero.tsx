import Image from 'next/image'

export function ContactHero() {
  return (
    <section className="relative flex min-h-[66svh] items-end overflow-hidden bg-black text-white">
      <Image
        src="/5.jpg"
        alt="A burning village scene from Hell Bleeds"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.48)_50%,rgba(0,0,0,0.08)_82%),linear-gradient(180deg,transparent_35%,rgba(0,0,0,0.8)_100%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-32 md:pb-24">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-brand">
          Contact us
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-6xl font-bold uppercase leading-[0.86] tracking-tight text-balance sm:text-8xl lg:text-9xl">
          Connect With CodeBox Games
        </h1>
        <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70">
          CodeBox Games is an independent game studio creating original worlds
          inspired by African mythology and culture. If you&apos;re interested
          in our games, exploring partnership opportunities, or getting in
          touch with the team, we&apos;d be glad to hear from you.
        </p>
      </div>
    </section>
  )
}
