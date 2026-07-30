import Image from 'next/image'

const moments = [
  {
    image: '/5.jpg',
    eyebrow: 'The world',
    title: 'A land shaped by fire, memory, and myth.',
    className: 'lg:col-span-7 lg:row-span-2',
    sizes: '(min-width: 1024px) 58vw, 100vw',
  },
  {
    image: '/1.jpg',
    eyebrow: 'The enemy',
    title: 'Face what the old stories warned you about.',
    className: 'lg:col-span-5',
    sizes: '(min-width: 1024px) 42vw, 100vw',
  },
  {
    image: '/4.jpg',
    eyebrow: 'The fight',
    title: 'Stand your ground when the night closes in.',
    className: 'lg:col-span-5',
    sizes: '(min-width: 1024px) 42vw, 100vw',
  },
]

export function WorldShowcase() {
  return (
    <section className="bg-[#0a0908] py-24 text-white md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 border-b border-white/15 pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-brand">
              Inside Hell Bleeds
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-balance sm:text-7xl">
              Beauty, danger, and the supernatural.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/55">
            Every frame is designed to carry atmosphere, character, and a sense
            of place rooted in the stories that inspired us.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-[25rem] gap-4 lg:grid-cols-12">
          {moments.map((moment) => (
            <article
              key={moment.eyebrow}
              className={`group relative overflow-hidden bg-black ${moment.className}`}
            >
              <Image
                src={moment.image}
                alt={moment.title}
                fill
                sizes={moment.sizes}
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-brand">
                  {moment.eyebrow}
                </p>
                <h3 className="mt-2 max-w-md font-display text-3xl font-semibold uppercase leading-none sm:text-4xl">
                  {moment.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
