const items = ["STUDIO RENTAL", "WEDDINGS", "COMMERCIAL", "PORTRAITS", "EST. 2026", "SOS MANUKYAN 11/1"]

function MarqueeGroup({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center">
          <span className="px-6 text-[12px] font-medium tracking-[0.35em] text-foreground/80">{item}</span>
          <span className="text-gold" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </div>
  )
}

export function Marquee() {
  return (
    <div className="w-full overflow-hidden border-y border-foreground/10 bg-background py-4">
      <div className="flex w-max animate-marquee">
        <MarqueeGroup />
        <MarqueeGroup ariaHidden />
      </div>
    </div>
  )
}
