import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Values } from '@/components/about/values'
import { Story } from '@/components/about/story'
import { Diversity } from '@/components/about/diversity'
import { Team } from '@/components/about/team'

export const metadata: Metadata = {
  title: 'Studio | Codebox Games',
  description:
    'Meet Codebox Games, an independent Nigerian studio building original games inspired by African stories, history, and mythology.',
}

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <Values />
      <Story />
      <Team />
      <Diversity />
      <SiteFooter />
    </main>
  )
}
