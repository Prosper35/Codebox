import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { MeetTeam } from "@/components/contact/meet-team"
import { JoinCta } from "@/components/contact/join-cta"

export const metadata: Metadata = {
  title: "Contact Us | Codebox Games",
  description:
    "Contact Codebox Games in Nigeria for studio, partnership, press, and career enquiries.",
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
