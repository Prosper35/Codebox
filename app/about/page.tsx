import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Values } from '@/components/about/values'
import { Story } from '@/components/about/story'
import { Diversity } from '@/components/about/diversity'

export const metadata: Metadata = {
  title: 'About Us | Codebox Games',
  description:
    'Codebox Games is a game studio accelerating 3D media and game development in Africa. Learn about our values, story, and commitment to diversity and inclusion.',
}

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <Values />
      <Story />
      <Diversity />
      <SiteFooter />
    </main>
  )
}
