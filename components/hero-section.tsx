import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="relative h-[460px] w-full overflow-hidden md:h-[560px]">
        <img
          src="/images/hero-portrait.png"
          alt="Editorial portrait of a woman in a black beret gazing off camera"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/5 to-transparent" />

        <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-center px-6">
          <div className="max-w-md">
            <h1 className="font-serif text-4xl leading-tight text-background text-balance md:text-5xl">
              Visuals that speak louder.
            </h1>
            <div className="mt-6 flex items-center gap-6">
              <Link
                href="/portfolio"
                className="inline-flex items-center border border-background/70 px-6 py-3 text-[11px] font-medium tracking-[0.18em] text-background transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                EXPLORE PORTFOLIO
              </Link>
              <Link href="/the-studio" className="nav-link text-[11px] font-medium tracking-[0.18em] text-background">
                The Studio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
