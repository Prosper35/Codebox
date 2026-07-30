import Link from 'next/link'

const cards = [
  {
    id: 'about',
    label: 'About us',
    href: '#about',
    image: '/images/about-chalkboard.png',
    alt: 'A chalkboard with a checked box reading About Us',
  },
  {
    id: 'games',
    label: 'Our Games',
    href: '#games',
    image: '/images/our-games.png',
    alt: 'Key art of a Yoruba warrior from the game Legend of Orisha',
  },
  {
    id: 'contact',
    label: 'Contact Us',
    href: '#contact',
    image: '/images/contact-bridge.png',
    alt: 'The Lekki-Ikoyi cable bridge in Lagos, Nigeria',
  },
]

export function NavCards() {
  return (
    <section id="games" className="bg-background py-20">
      <div className="mx-auto grid max-w-5xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.id}
            href={card.href}
            className="group block overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={card.image || '/placeholder.svg'}
                alt={card.alt}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="bg-brand py-3 text-center">
              <span className="text-sm font-medium text-brand-foreground">
                {card.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
