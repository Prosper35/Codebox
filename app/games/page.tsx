import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GamesHero } from "@/components/games/games-hero"
import { GameCards } from "@/components/games/game-cards"
import { JoinCta } from "@/components/contact/join-cta"

export const metadata: Metadata = {
  title: "Hell Bleeds | Codebox Games",
  description:
    "Explore Hell Bleeds, a dark fantasy action-adventure from Codebox Games inspired by African folklore.",
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
