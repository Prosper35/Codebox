import Image from 'next/image'

const teamMembers = [
  {
    name: 'Peter Reezer',
    image: '/team%20Pictures/Peter%20Reezer.jpg',
  },
  {
    name: 'Kingsford Appiah',
    image: '/team%20Pictures/kingsford%20appiah.jpg',
  },
  {
    name: 'Olamide Famojuro',
    image: '/team%20Pictures/Olamide%20Famojuro.png',
  },
  {
    name: 'Bolaji Akinleye',
    image: '/team%20Pictures/bolaji%20akinleye%20%282%29.jpg',
  },
  {
    name: 'Segun Olayinka',
    image: '/team%20Pictures/Segun%20Olayinka.png',
  },
  {
    name: 'Prosper',
    image: '/team%20Pictures/DP.jpeg',
  },
  {
    name: 'Rume',
    image: '/team%20Pictures/Rume.png',
  },
]

export function Team() {
  return (
    <section className="surface-grid bg-background py-24 text-foreground md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 border-b border-border pb-10 md:grid-cols-2 md:items-end">
          <div>
            <p className="eyebrow">The team</p>
            <h2 className="mt-5 max-w-2xl font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
              Meet the people building the worlds.
            </h2>
          </div>
          <p className="max-w-lg text-base leading-8 text-muted-foreground md:justify-self-end">
            A multidisciplinary team bringing African-inspired stories to life
            through world-building, gameplay, art, and technology.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <article key={member.name}>
              <div className="group relative aspect-[4/5] overflow-hidden bg-secondary">
                <Image
                  src={member.image}
                  alt={`${member.name}, CodeBox Games team member`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover object-center transition duration-700 ease-out group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 font-mono text-[10px] tracking-[0.25em] text-white/80">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold uppercase tracking-wide sm:text-2xl">
                {member.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
