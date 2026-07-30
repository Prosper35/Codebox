'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { ThemeToggle } from '@/components/theme-toggle'

const navLinks = [
  { label: 'Hell Bleeds', href: '/games' },
  { label: 'Studio', href: '/about' },
  { label: 'Latest News', href: '/news' },
  { label: 'Contact', href: '/contact-us' },
  { label: 'Careers', href: '/join-us' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/30 backdrop-blur-xl backdrop-brightness-125 transition-colors dark:border-white/10 dark:bg-black/20 dark:backdrop-brightness-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" aria-label="Codebox Games home">
          <Logo />
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-current={pathname === link.href ? 'page' : undefined}
                className="group relative py-2 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:text-brand dark:text-white/90"
              >
                {link.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-brand transition-transform ${
                    pathname === link.href
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                  aria-hidden="true"
                />
              </Link>
            ))}
          </nav>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center text-foreground lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/98 px-6 py-6 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block font-display text-2xl font-semibold uppercase tracking-wide text-foreground transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
