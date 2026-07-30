import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Welcome } from '@/components/welcome'
import { Investors } from '@/components/investors'
import { NavCards } from '@/components/nav-cards'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="relative">
      <SiteHeader />
      <Hero />
      <Welcome />
      <Investors />
      <NavCards />
      <SiteFooter />
    </main>
  )
}
