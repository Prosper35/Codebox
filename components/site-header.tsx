'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { ThemeToggle } from '@/components/theme-toggle'

const navLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Games', href: '/games' },
  { label: 'Latest News', href: '/#news' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Join us', href: '/#join' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="#top" aria-label="Codebox Games home">
          <Logo />
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-foreground/90 transition-colors hover:text-brand"
              >
                {link.label}
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
        <nav className="border-t border-border bg-background/95 px-6 py-4 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground/90 transition-colors hover:text-brand"
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
