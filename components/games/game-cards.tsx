import Image from 'next/image'

const overview = [
  { label: 'Genre', value: 'Dark Fantasy Action-Adventure' },
  { label: 'Platforms', value: 'PC • Consoles' },
  { label: 'Engine', value: 'Unreal Engine 5' },
  { label: 'Playtime', value: 'To be announced' },
]

export function GameCards() {
  return (
    <>
      <section className="surface-grid bg-background py-24 text-foreground md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-brand">
                The story
              </p>
              <h2 className="mt-5 font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-balance sm:text-7xl">
                The ancestors are no longer watching.
              </h2>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-base leading-8 text-muted-foreground">
                Once, the land flourished beneath the watchful gaze of the
                ancestors. Sacred shrines bound the living to the spirit world,
                preserving peace and balance across the kingdoms.
              </p>

              <p className="mt-9 border-l-4 border-brand pl-6 font-display text-4xl font-semibold uppercase leading-none sm:text-5xl">
                That balance has been shattered.
              </p>

              <p className="mt-9 text-base leading-8 text-muted-foreground">
                An extremist cult of voodoo worshippers has awakened an ancient
                evil, corrupting the sacred shrines and twisting ancestral
                spirits into terrifying creatures. As darkness spreads across
                the land, villages fall, hope fades, and an ancient curse
                threatens to consume everything.
              </p>

              <p className="mt-6 text-base leading-8 text-muted-foreground">
                You are <strong className="font-semibold text-foreground">Aghogho</strong>,
                a hunter whose village was destroyed, whose wife was murdered,
                and whose only daughter was taken for a ritual sacrifice.
              </p>

              <p className="mt-6 text-base leading-8 text-muted-foreground">
                Journey across a cursed land, cleanse the corrupted shrines,
                confront forgotten horrors inspired by African mythology, and
                save your daughter from a sacrificial fate before darkness
                consumes the world.
              </p>
            </div>
          </div>

          <div className="mt-20">
            <div className="flex items-end justify-between border-b border-border pb-5">
              <h3 className="font-display text-4xl font-bold uppercase">
                Game overview
              </h3>
              <span className="hidden text-[0.62rem] font-bold uppercase tracking-[0.2em] text-muted-foreground sm:block">
                Hell Bleeds
              </span>
            </div>
            <dl className="grid sm:grid-cols-2 lg:grid-cols-4">
              {overview.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-border py-6 sm:px-4 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0"
                >
                  <dt className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-brand">
                    {item.label}
                  </dt>
                  <dd className="mt-3 font-display text-2xl font-semibold uppercase">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0908] py-4">
        <div className="grid gap-4 px-4 md:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden bg-black">
            <Image
              src="/2.jpg"
              alt="Aghogho, the hunter at the center of Hell Bleeds"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-1000 hover:scale-[1.025]"
            />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden bg-black">
            <Image
              src="/4.jpg"
              alt="A corrupted ancestral spirit attacking in Hell Bleeds"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-1000 hover:scale-[1.025]"
            />
          </div>
        </div>
      </section>
    </>
  )
}
