import Link from "next/link"

const amenities = ["Studio access", "Basic lighting kit", "All paper backdrops", "Changing room", "Refreshments"]

const packages = [
  { title: "Standard Session", price: "25.000 AMD", detail: "(10 edited Photos)" },
  { title: "Baby Photography", price: "25.000 AMD", detail: "(10 edited Photos)" },
  { title: "Couple / Family Session", price: "30.000 AMD", detail: "(10 edited Photos)" },
  { title: "Pet Session", price: "20.000 AMD", detail: "(10 edited Photos)" },
  { title: "Pre-Wedding Session", price: "30.000 AMD", detail: "(10 edited Photos)" },
  { title: "Wedding Photography", price: "50.000 AMD", detail: "(10 edited Photos)" },
  { title: "Event Photography", price: "30.000 AMD", detail: "(10 edited Photos)" },
]

const equipment = [
  "(Godox SK 400 lll V)x2",
  "Octobox Godox SB-FW95",
  "(Softbox Godox SB-FW80120)x2",
  "Godox Beauty Dish",
]

export function StudioContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[340px] w-full overflow-hidden md:h-[440px]">
          <img
            src="/images/studio-hero.png"
            alt="White cyclorama studio corner with a curved seamless wall and a large window looking onto the street"
            className="h-full w-full object-cover object-[50%_80%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto flex w-full max-w-6xl justify-end px-6">
              <h1 className="max-w-sm text-right font-serif text-4xl leading-tight text-foreground text-balance md:text-5xl">
                EllinFrame Studio &amp; Rental
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="bg-[#f0ebe1]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-[11px] font-medium tracking-[0.35em] text-gold">OFFERINGS</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
            Studio Rental &amp; Photography Packages
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-[1fr_1.6fr]">
            {/* Hourly rate card */}
            <div className="border border-foreground/10 bg-card p-8">
              <p className="font-serif text-3xl text-foreground">
                8,000 AMD
                <span className="align-top text-xs text-foreground/50"> /hour</span>
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {amenities.map((a) => (
                  <li key={a} className="flex items-center gap-3 text-sm text-foreground/70">
                    <span className="h-px w-3 bg-gold" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* Packages */}
            <div className="flex flex-col border border-foreground/10 bg-card p-8">
              <ul className="flex flex-col gap-6">
                {packages.map((p) => (
                  <li key={p.title} className="border-b border-foreground/10 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-serif text-xl text-foreground">{p.title}</h3>
                      <span className="text-sm italic text-foreground/70">{p.price}</span>
                    </div>
                    <p className="mt-1 text-xs tracking-[0.1em] text-foreground/50">{p.detail}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center justify-between border-t border-foreground/10 pt-5 text-[11px] tracking-[0.2em] text-foreground/60">
                <span>PRICE FOR 1 HOUR</span>
                <span>10 EDITED PHOTOS</span>
              </div>
            </div>
          </div>
          <div className="mt-12 flex justify-center w-full">
            <Link
              href="/#booking"
              className="inline-block border border-foreground/30 bg-transparent px-10 py-3.5 text-[11px] font-medium text-foreground tracking-[0.25em] uppercase transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Available Equipment */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-[11px] font-medium tracking-[0.35em] text-gold">AVAILABLE EQUIPMENT</p>
        <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground text-balance md:text-4xl">
          Professional lighting &amp; grip — included.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <p className="max-w-md text-sm leading-relaxed text-foreground/70">
              All packages include access to our full equipment inventory. No rental surcharges, no hidden fees. What
              you see is what you get.
            </p>
            <div className="group mt-10 h-[260px] w-full max-w-sm overflow-hidden">
              <img
                src="/images/studio-setup.png"
                alt="Studio lighting setup with a Godox octabox, gridded softbox and a Canon camera on a pedestal"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          </div>

          <ul className="flex flex-col justify-center gap-5">
            {equipment.map((item) => (
              <li key={item} className="flex items-center gap-4 border-b border-foreground/10 pb-4 last:border-b-0">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="text-sm text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
      </section>
    </>
  )
}
