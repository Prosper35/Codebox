import Image from "next/image"

export function ContactHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <Image
        src="/images/contact-bridge.png"
        alt="Dimension hero background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="max-w-xl">
          <h1 className="font-display text-5xl font-bold uppercase tracking-tight text-white text-balance md:text-6xl">
            Contact Us
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-white/85 md:text-base">
            The Codebox Games team is united virtually between Nigeria and the United Arab Emirates. Our Nigeria team
            members are located in Lagos, the center of excellence that hosts our administrative offices, and Ile-Ife,
            the cradle of Yoruba civilization and is home to our creative studio. The team in Dubai, United Arab Emirates
            is our gateway to international business development and partnerships.
          </p>
        </div>
      </div>
    </section>
  )
}
