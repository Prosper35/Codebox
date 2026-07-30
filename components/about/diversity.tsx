const team = [
  { src: '/images/team-1.png', alt: 'Team member portrait' },
  { src: '/images/team-2.png', alt: 'Team member portrait' },
  { src: '/images/team-3.png', alt: 'Team member portrait' },
  { src: '/images/team-4.png', alt: 'Team member portrait' },
]

export function Diversity() {
  return (
    <section className="bg-background text-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-16">
        <div className="mx-auto grid max-w-sm grid-cols-2 gap-6 sm:gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="aspect-square overflow-hidden rounded-full border-2 border-brand"
            >
              <img
                src={member.src || '/placeholder.svg'}
                alt={member.alt}
                className="size-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="max-w-md">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Diversity and Inclusion
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Our team values diversity and inclusion at every step of the game
            design and development process. Contributions from people from
            different backgrounds, gender identities, religious beliefs, country
            origins, and life experiences help to enhance the stories we tell
            through video games. We are committed to keeping our doors (and
            hearts) open to people who share our values, no matter who they are.
          </p>
        </div>
      </div>
    </section>
  )
}
