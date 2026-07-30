import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Logo } from '@/components/logo'

const footerLinks = [
  { label: 'Hell Bleeds', href: '/games' },
  { label: 'Studio', href: '/about' },
  { label: 'Latest News', href: '/news' },
  { label: 'Careers', href: '/join-us' },
  { label: 'Contact', href: '/contact-us' },
]

const socialLinks = [
  { label: 'X', href: 'https://x.com/CodeboxGames' },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/codeboxgames/?hl=en',
  },
  { label: 'Discord', href: 'https://discord.gg/YQuuD5XAN' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/87436060/' },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#080807] text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 border-b border-white/12 py-20 md:grid-cols-12 md:py-24">
          <div className="md:col-span-7">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-brand">
              Codebox Games
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-balance sm:text-7xl">
              Building worlds from the stories that made us.
            </h2>
            <a
              href="mailto:hello@codeboxgames.com"
              className="group mt-9 inline-flex items-center gap-3 border-b border-white/35 pb-2 text-sm font-semibold transition-colors hover:border-brand hover:text-brand"
            >
              hello@codeboxgames.com
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-5 md:col-start-8">
            <div>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-white/40">
                Explore
              </p>
              <nav className="mt-5 flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-white/40">
                Based in
              </p>
              <p className="mt-5 text-sm leading-6 text-white/70">
                Nigeria
                <br />
                Working globally
              </p>
            </div>
            <div>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-white/40">
                Follow
              </p>
              <nav className="mt-5 flex flex-col gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white/70 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 py-7 sm:flex-row sm:items-center sm:justify-between">
          <Logo className="brightness-0 invert" />
          <div className="flex flex-wrap gap-x-7 gap-y-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white/40">
            <span>Independent game studio</span>
            <span>© Codebox Games 2026</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
