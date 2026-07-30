export function Welcome() {
  return (
    <section id="about" className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-bold text-foreground sm:text-5xl">Welcome</h2>
        <p className="mx-auto mt-8 max-w-xl text-left text-base leading-relaxed text-foreground/80">
          CodeBox Games is an independent game development studio based in
          Nigeria, focused on creating immersive games inspired by African
          stories, history, and mythology. We are currently developing{' '}
          <em>Hell Bleeds</em>, a dark fantasy action-adventure game that blends
          African folklore with cinematic storytelling and engaging gameplay.
          Our mission is to build original games that can stand alongside the
          best in the industry while helping showcase the creativity and
          potential of African game developers.
        </p>
      </div>
    </section>
  )
}
