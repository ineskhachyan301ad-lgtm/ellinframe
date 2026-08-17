type Service = {
  num: string
  title: string
  description: string
  image: string
  alt: string
  height: string
}

const leftColumn: Service[] = [
  {
    num: "01",
    title: "Editorial",
    description: "High-fashion storytelling for magazines, agencies & brands.",
    image: "/images/new_editorial.JPG",
    alt: "Black and white editorial portrait of a woman curled up in black",
    height: "h-[360px] md:h-[420px]",
  },
  {
    num: "02",
    title: "Portraits",
    description: "Intimate, considered portraiture for individuals & creatives.",
    image: "/images/service-portraits.png",
    alt: "Close-up color portrait of a woman with her hand near her face",
    height: "h-[220px] md:h-[240px]",
  },
]

const rightColumn: Service[] = [
  {
    num: "03",
    title: "Commercial",
    description: "Campaign imagery that sells — precise, polished, on brand.",
    image: "/images/new1_commercial.JPG",
    alt: "Commercial fashion detail with graphic print trousers",
    height: "h-[220px] md:h-[240px]",
  },
  {
    num: "04",
    title: "Weddings",
    description: "Quiet documentary coverage of your most important day.",
    image: "/images/service-weddings.png",
    alt: "Black and white photograph of two hands clasped with a ring",
    height: "h-[360px] md:h-[420px]",
  },
]

function ServiceTile({ service }: { service: Service }) {
  return (
    <a href="#" className={`group relative block w-full overflow-hidden ${service.height}`}>
      <img
        src={service.image || "/placeholder.svg"}
        alt={service.alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <span className="text-[10px] font-medium tracking-[0.3em] text-gold">{service.num}</span>
        <h3 className="mt-2 font-serif text-2xl text-background">{service.title}</h3>
        <p className="mt-1 max-w-xs text-xs leading-relaxed text-background/75">{service.description}</p>
      </div>
    </a>
  )
}

export function ServicesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <h2 className="font-serif text-4xl leading-tight text-foreground md:text-5xl">Services</h2>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          {leftColumn.map((service) => (
            <ServiceTile key={service.title} service={service} />
          ))}
        </div>
        <div className="flex flex-col gap-6">
          {rightColumn.map((service) => (
            <ServiceTile key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
