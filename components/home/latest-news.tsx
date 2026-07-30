import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const articles = [
  {
    title: 'Nigeria to bring first-ever developer delegation and booth to Gamescom 2026',
    source: 'PocketGamer.biz',
    date: '24 Jun 2026',
    href: 'https://www.pocketgamer.biz/nigeria-to-bring-first-ever-developer-delegation-and-booth-to-gamescom-2026/',
  },
  {
    title: 'CodeBox Games triumphs at Lagos Games Week Pitch Stage with Hell Bleeds',
    source: 'Comic Panel',
    date: '23 Jun 2026',
    href: 'https://www.comicpanelworld.com/codebox-games-triumphs-at-lagos-games-week-pitch-stage-with-hell-bleeds/',
  },
  {
    title: 'CodeBox Games wins Lagos Games Week Pitch Stage with Hell Bleeds',
    source: 'IsaKaba',
    date: '20 Jun 2026',
    href: 'https://www.isakaba.com/codebox-games-wins-lagos-games-week-pitch-stage-with-hell-bleeds/',
  },
  {
    title: 'Africa has the potential to become a major exporter of games',
    source: 'IsaKaba',
    date: '06 Apr 2026',
    href: 'https://www.isakaba.com/its-about-creating-authentic-african-stories-in-interactive-worlds/',
  },
  {
    title: 'Nigerian Studio Codebox Games Unveils African-Inspired Action Adventure Hell Bleeds',
    source: 'Comic Panel',
    date: '27 Mar 2026',
    href: 'https://www.comicpanelworld.com/nigerian-studio-codebox-games-unveils-african-inspired-action-adventure-hell-bleeds/',
  },
  {
    title: 'Codebox Games reveals African-inspired action adventure Hell Bleeds',
    source: 'IsaKaba',
    date: '23 Mar 2026',
    href: 'https://www.isakaba.com/codebox-games-reveals-african-inspired-action-adventure-hell-bleeds/',
  },
]

export function LatestNews() {
  const [featuredArticle, ...moreArticles] = articles

  return (
    <section id="news" className="surface-grid scroll-mt-20 bg-background py-24 text-foreground md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between border-b border-border pb-8">
          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-brand">
              Press and updates
            </p>
            <h2 className="mt-4 font-display text-5xl font-bold uppercase leading-none tracking-tight sm:text-7xl">
              Latest News
            </h2>
          </div>
          <span className="hidden text-[0.62rem] font-bold uppercase tracking-[0.2em] text-muted-foreground sm:block">
            2026
          </span>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <a
            href={featuredArticle.href}
            target="_blank"
            rel="noreferrer"
            className="group relative min-h-[32rem] overflow-hidden bg-black lg:col-span-7"
          >
            <Image
              src="/3.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9">
              <div className="flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/55">
                <span>{featuredArticle.source}</span>
                <span className="size-1 rounded-full bg-brand" />
                <time>{featuredArticle.date}</time>
              </div>
              <h3 className="mt-4 max-w-2xl font-display text-4xl font-semibold uppercase leading-[0.96] sm:text-5xl">
                {featuredArticle.title}
              </h3>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand">
                Read coverage
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </span>
            </div>
          </a>

          <div className="border-t border-border lg:col-span-5">
            {moreArticles.map((article, index) => (
              <a
                key={article.href}
                href={article.href}
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-[2rem_1fr_auto] gap-4 border-b border-border py-5"
              >
                <span className="font-display text-lg font-bold text-brand">
                  0{index + 2}
                </span>
                <div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-[0.58rem] font-bold uppercase tracking-[0.17em] text-muted-foreground">
                    <span>{article.source}</span>
                    <time>{article.date}</time>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-semibold uppercase leading-[1.02] transition-colors group-hover:text-brand">
                    {article.title}
                  </h3>
                </div>
                <ArrowUpRight className="mt-1 size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
