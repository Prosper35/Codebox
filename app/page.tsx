import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { GameIntro } from '@/components/home/game-intro'
import { LagosGamesWeekTeaser } from '@/components/home/lagos-games-week'
import { StudioStatement } from '@/components/home/studio-statement'
import { WorldShowcase } from '@/components/home/world-showcase'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="relative">
      <SiteHeader />
      <Hero />
      <GameIntro />
      <WorldShowcase />
      <LagosGamesWeekTeaser />
      <StudioStatement />
      <SiteFooter />
    </main>
  )
}
