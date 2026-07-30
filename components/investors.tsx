const partners = [
  'PRESSURE COOKER',
  'ID@XBOX',
  'DEVELOPER ACCELERATION',
  'AFRICOMICS',
  'ITIDA',
  'TIEC',
]

export function Investors() {
  return (
    <section className="bg-background pb-4">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          INVESTORS <span className="text-brand">AND</span> STRATEGIC PARTNERS
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm text-foreground/70">
          We are backed by angel investors and key strategic partners in the
          video games industry.
        </p>
      </div>

      <div className="mt-12 w-full bg-brand py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-6 px-6">
          {partners.map((partner) => (
            <span
              key={partner}
              className="font-display text-lg font-bold tracking-tight text-brand-foreground/85 sm:text-xl"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
