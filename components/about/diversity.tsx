const principles = [
  {
    number: '01',
    title: 'Authenticity',
    copy: 'We approach culture as a foundation, not decoration, and build with respect for the stories that inspire us.',
  },
  {
    number: '02',
    title: 'Craft',
    copy: 'We hold our ideas, visuals, systems, and storytelling to the standard of the games we admire most.',
  },
  {
    number: '03',
    title: 'People',
    copy: 'Different backgrounds and perspectives make stronger teams, richer worlds, and more memorable games.',
  },
]

export function Diversity() {
  return (
    <section className="bg-[#0a0908] py-24 text-white md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 border-b border-white/15 pb-10 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-brand">
              What guides us
            </p>
            <h2 className="mt-5 font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-7xl">
              Build with purpose.
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-white/55 md:justify-self-end">
            We want the work to be ambitious, the process to be thoughtful, and
            every person on the team to have a meaningful voice.
          </p>
        </div>

        <div className="grid md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="border-b border-white/15 py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
            >
              <p className="font-display text-xl font-bold text-brand">
                {principle.number}
              </p>
              <h3 className="mt-12 font-display text-4xl font-semibold uppercase">
                {principle.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-white/55">
                {principle.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
