import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { LagosGamesWeek } from '@/components/home/lagos-games-week'
import { LatestNews } from '@/components/home/latest-news'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Latest News | Codebox Games',
  description:
    'Follow the latest Codebox Games news, press coverage, events, and updates from Hell Bleeds.',
}

export default function NewsPage() {
  return (
    <main>
      <SiteHeader />
      <LagosGamesWeek />
      <LatestNews />
      <SiteFooter />
    </main>
  )
}
