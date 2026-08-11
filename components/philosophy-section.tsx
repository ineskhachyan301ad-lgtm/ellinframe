const lightLog = [
  { time: "06:42", text: "First light — cold, blue, unhurried." },
  { time: "12:15", text: "High noon, softened through the north glass." },
  { time: "17:58", text: "The golden ten minutes we never rush." },
  { time: "21:30", text: "Lamplight, long exposures, quiet." },
]

export function PhilosophySection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-12">
        {/* Left column */}
        <div>
          <p className="text-[11px] font-medium tracking-[0.35em] text-gold">FIELD NOTES</p>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground text-balance md:text-5xl">
            A day, measured in light.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-foreground/70">
            We keep a running journal of the studio&apos;s light — the hours worth waiting for, noted down like tide
            times.
          </p>

          <ul className="mt-10 flex flex-col gap-6">
            {lightLog.map((entry) => (
              <li key={entry.time} className="border-b border-foreground/15 pb-4">
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-xs tracking-[0.15em] text-gold tabular-nums">{entry.time}</span>
                  <span className="font-serif text-xl italic text-foreground/90">{entry.text}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <a href="#" className="nav-link text-[11px] font-medium tracking-[0.18em] text-foreground">
              About the Studio
            </a>
          </div>
        </div>

        {/* Right column */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm">
            <div className="group h-[420px] w-full overflow-hidden md:h-[480px]">
              <img
                src="/images/philosophy-portrait.png"
                alt="Fine-art portrait of a woman in an elaborate black feathered dress"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
            <div className="absolute -top-6 right-6 border border-foreground/15 bg-background px-5 py-3 text-center">
              <p className="font-serif text-lg text-foreground">2+</p>
              <p className="text-[10px] tracking-[0.15em] text-foreground/60">Years of Mastery</p>
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 border border-foreground/15 bg-background" />
          </div>
        </div>
      </div>
    </section>
  )
}
