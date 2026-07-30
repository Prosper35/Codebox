import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Barlow_Condensed, Manrope } from 'next/font/google'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
})

const themeScript = `
  (function () {
    try {
      var savedTheme = localStorage.getItem('codebox-theme');
      var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      var theme = savedTheme === 'light' || savedTheme === 'dark'
        ? savedTheme
        : systemTheme;

      document.documentElement.classList.add(theme);
    } catch (error) {}
  })();
`

export const metadata: Metadata = {
  title: 'Codebox Games',
  description:
    'Codebox Games is an independent Nigerian game studio creating Hell Bleeds, a dark fantasy action-adventure inspired by African folklore.',
  icons: {
    icon: [{ url: '/Codebox%20Games%20Logo.png', type: 'image/png' }],
    shortcut: ['/Codebox%20Games%20Logo.png'],
    apple: [{ url: '/Codebox%20Games%20Logo.png', type: 'image/png' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f4e8' },
    { media: '(prefers-color-scheme: dark)', color: '#171717' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${barlowCondensed.variable} ${manrope.variable} bg-background`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
