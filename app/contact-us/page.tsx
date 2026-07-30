import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { MeetTeam } from "@/components/contact/meet-team"
import { JoinCta } from "@/components/contact/join-cta"

export const metadata: Metadata = {
  title: "Contact Us | Dimension11",
  description:
    "The Dimension11 team is united virtually between Nigeria and the United Arab Emirates, with offices in Lagos, Ile-Ife, and Dubai. Get in touch or meet the team.",
}

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <ContactHero />
      <MeetTeam />
      <JoinCta />
      <SiteFooter />
    </main>
  )
}
