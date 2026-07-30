import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GamesHero } from "@/components/games/games-hero"
import { GameCards } from "@/components/games/game-cards"
import { JoinCta } from "@/components/contact/join-cta"

export const metadata: Metadata = {
  title: "Our Games | Dimension11",
  description:
    "Dimension11 is building Legends of Orisha: Blood and Water, a cross-platform action-adventure set in the world of African Fantasy, powered by Unreal Engine 5.",
}

export default function GamesPage() {
  return (
    <main className="bg-background">
      <SiteHeader />
      <GamesHero />
      <GameCards />
      <JoinCta />
      <SiteFooter />
    </main>
  )
}
