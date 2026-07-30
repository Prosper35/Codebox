import Link from 'next/link'
import { Logo } from '@/components/logo'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function RedditIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm5.8 11.33a1.36 1.36 0 0 1 .02.25c0 2.28-2.66 4.13-5.93 4.13s-5.93-1.85-5.93-4.13a1.36 1.36 0 0 1 .02-.25 1.37 1.37 0 1 1 1.68-2.09 6.66 6.66 0 0 1 3.6-1.13l.68-3.2a.29.29 0 0 1 .34-.22l2.25.48a.95.95 0 1 1-.12.53l-2-.43-.6 2.85a6.65 6.65 0 0 1 3.55 1.14 1.37 1.37 0 1 1 1.67 2.09zM9.1 12.9a.9.9 0 1 0 .9-.9.9.9 0 0 0-.9.9zm5.62 2.3a.28.28 0 0 0-.4 0 2.6 2.6 0 0 1-1.87.6 2.6 2.6 0 0 1-1.87-.6.28.28 0 1 0-.4.4 3.13 3.13 0 0 0 2.27.77 3.13 3.13 0 0 0 2.27-.77.28.28 0 0 0 0-.4zm-.72-1.4a.9.9 0 1 0-.9-.9.9.9 0 0 0 .9.9z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
      <path d="M23 4.999a8.9 8.9 0 0 1-2.598.734 4.518 4.518 0 0 0 1.99-2.501 9.06 9.06 0 0 1-2.873 1.089 4.52 4.52 0 0 0-7.7 4.121A12.82 12.82 0 0 1 2.59 3.75a4.52 4.52 0 0 0 1.4 6.03 4.48 4.48 0 0 1-2.05-.566v.057a4.52 4.52 0 0 0 3.626 4.43 4.52 4.52 0 0 1-2.04.078 4.52 4.52 0 0 0 4.22 3.137A9.06 9.06 0 0 1 1 18.855 12.78 12.78 0 0 0 7.92 20.88c8.302 0 12.845-6.877 12.845-12.844 0-.196-.005-.39-.014-.583A9.18 9.18 0 0 0 23 4.999z" />
    </svg>
  )
}

const socials = [
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
  { label: 'Reddit', href: '#', Icon: RedditIcon },
  { label: 'LinkedIn', href: '#', Icon: LinkedinIcon },
  { label: 'Twitter', href: '#', Icon: TwitterIcon },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <Logo />
          <div className="flex items-center gap-4">
            {socials.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex size-10 items-center justify-center bg-foreground text-background transition-opacity hover:opacity-80"
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-right">
          <p className="text-xs text-foreground/60">© Codebox Games 2025</p>
        </div>
      </div>
    </footer>
  )
}
