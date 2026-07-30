import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Values() {
  return (
    <section className="relative flex min-h-[78svh] items-end overflow-hidden bg-black text-white">
      <Image
        src="/2.jpg"
        alt="Hell Bleeds warrior looking toward the camera"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.52)_48%,rgba(0,0,0,0.12)_78%),linear-gradient(180deg,rgba(0,0,0,0.05)_35%,rgba(0,0,0,0.82)_100%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-32 md:pb-24">
        <div className="max-w-3xl">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-brand">
            About
          </p>
          <h1 className="mt-5 font-display text-6xl font-bold uppercase leading-[0.86] tracking-tight text-balance sm:text-8xl lg:text-9xl">
            Building worlds inspired by
            <span className="block text-brand">African legends.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
            Codebox Games is an independent game development studio based in
            Nigeria, creating immersive and original gaming experiences inspired
            by African mythology, folklore, history, and culture. We believe the
            stories, traditions, and legends of Africa have the power to
            captivate players around the world when brought to life through
            exceptional game design and storytelling.
          </p>
          <Link
            href="/join-us"
            className="group mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:text-brand"
          >
            Work with us
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
