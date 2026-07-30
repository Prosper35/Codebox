import Image from "next/image"

export function GamesHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <Image
        src="/images/games-hero.png"
        alt="Dimension hero background"
        fill
        priority
        className="object-cover opacity-70 dark:opacity-90"
      />
      <div className="absolute inset-0 bg-background/35 dark:bg-black/40" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-6xl px-6 pt-24 pb-20 md:pt-28 md:pb-28">
        <h1 className="text-center font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          Our Games
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-left leading-relaxed text-foreground/85 md:text-lg">
          Our team is currently working on our first cross-platform video game &quot;Legends of Orisha: Blood and
          Water&quot; where players are introduced to a magical action-packed adventure in the untapped world of African
          Fantasy. Legends of Orisha is currently in-development using Unreal Engine 5 to showcase the high fidelity and
          latest technology from Epic Games.
        </p>
      </div>
    </section>
  )
}
