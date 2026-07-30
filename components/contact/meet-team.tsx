import Image from "next/image"

export function MeetTeam() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Meet the Team</h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-foreground">
            Interested in meeting the team in-person or visiting Ile-Ife? Send us an{" "}
            <a href="mailto:hello@codeboxgames.com" className="text-brand underline underline-offset-2">
              email
            </a>{" "}
            and we&apos;ll be in touch.
          </p>
        </div>
        <div className="relative aspect-[16/11] w-full overflow-hidden">
          <Image
            src="/images/contact-bridge.png"
            alt="Modern cable-stayed bridge in Lagos, Nigeria"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
