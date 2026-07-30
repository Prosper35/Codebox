import Image from 'next/image'

const milestones = [
  { year: '2018', label: 'A group of gamers begins creating together at Obafemi Awolowo University.' },
  { year: '2021', label: 'Codebox Games is formally established as an independent Nigerian studio.' },
  { year: 'Now', label: 'The team is building Hell Bleeds for players around the world.' },
]

export function Story() {
  return (
    <section className="surface-grid bg-background py-24 text-foreground md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-brand">
              Our story
            </p>
            <h2 className="mt-5 font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-balance sm:text-7xl">
              Stories with the power to travel.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-base leading-8 text-muted-foreground">
              Our mission is to build memorable worlds that combine authentic
              cultural inspiration with innovative gameplay, striking visuals,
              and meaningful narratives. Whether exploring ancient myths,
              forgotten kingdoms, or original fantasy worlds, we are committed
              to creating games that leave a lasting impression on players.
            </p>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              Our debut title, <em>Hell Bleeds</em>, marks the beginning of this
              journey, showcasing our passion for cinematic world-building,
              immersive gameplay, and storytelling rooted in African heritage.
            </p>
          </div>
        </div>

        <div className="mt-16 grid border-y border-border md:grid-cols-3">
          {milestones.map((milestone) => (
            <div
              key={milestone.year}
              className="border-b border-border py-7 last:border-b-0 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0"
            >
              <p className="font-display text-4xl font-bold text-brand">
                {milestone.year}
              </p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
                {milestone.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-l-4 border-brand pl-6 sm:pl-10">
          <p className="max-w-5xl font-display text-4xl font-semibold uppercase leading-[0.98] tracking-tight text-balance sm:text-6xl">
            At Codebox Games, we&apos;re building more than games. We&apos;re
            creating worlds where African stories inspire unforgettable
            adventures for a global audience.
          </p>
        </div>

        <div className="relative mt-16 aspect-[16/7] min-h-[22rem] overflow-hidden bg-black">
          <Image
            src="/5.jpg"
            alt="A village burning at night in Hell Bleeds"
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
          <p className="absolute bottom-6 left-6 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-white/65">
            Hell Bleeds / Development image
          </p>
        </div>
      </div>
    </section>
  )
}
