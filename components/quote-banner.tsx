export function QuoteBanner() {
  return (
    <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden bg-foreground">
      <img
        src="/images/portfolio-quote-banner.png"
        alt="Figure reclining draped in flowing black fabric"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/70 to-foreground/20" />

      <div className="relative mx-auto flex min-h-[260px] max-w-6xl flex-col justify-center px-6 py-16 md:min-h-[300px]">
        <p className="text-[11px] font-medium tracking-[0.35em] text-gold">SOS MANUKYAN 11/1 &nbsp;·&nbsp; EST. 2016</p>
        <p className="mt-4 max-w-xl font-serif text-2xl leading-snug text-background md:text-3xl">
          Where light meets intention.
          <br />
          Where vision becomes image.
        </p>
      </div>
    </section>
  )
}
