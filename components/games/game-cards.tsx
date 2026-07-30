import Image from "next/image"
import Link from "next/link"

const games = [
  {
    title: "Legend of orisha",
    href: "/games",
    image: "/images/game-orisha.png",
  },
  {
    title: "Covid Run",
    href: "/games",
    image: "/images/game-covidrun.png",
  },
]

export function GameCards() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 md:grid-cols-2">
        {games.map((game) => (
          <Link key={game.title} href={game.href} className="group block">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
              <Image
                src={game.image || "/placeholder.svg"}
                alt={game.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="bg-brand px-4 py-3 text-center text-sm font-medium text-brand-foreground">
              {game.title}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
