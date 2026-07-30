const brandNames = [
  'CODEBOX GAMES',
  'HELL BLEEDS',
  'CODEBOX GAMES',
  'HELL BLEEDS',
  'CODEBOX GAMES',
  'HELL BLEEDS',
  'CODEBOX GAMES',
  'HELL BLEEDS',
  'CODEBOX GAMES',
  'HELL BLEEDS',
  'CODEBOX GAMES',
  'HELL BLEEDS',
]

export function Investors() {
  return (
    <section className="bg-background pb-4">
      <div className="w-full overflow-hidden bg-brand py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative h-8 overflow-hidden">
            <div className="animate-brand-pendulum absolute inset-y-0 left-0 flex w-max items-center gap-10 whitespace-nowrap font-display text-base font-bold tracking-[0.08em] text-brand-foreground sm:gap-16 sm:text-xl">
              {brandNames.map((brandName, index) => (
                <span key={`${brandName}-${index}`}>{brandName}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
