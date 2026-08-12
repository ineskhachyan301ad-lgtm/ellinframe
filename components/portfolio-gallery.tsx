"use client"

import { useState } from "react"

const categories = ["All", "Portrait", "Family", "Brand", "Fashion"] as const

type Category = (typeof categories)[number]

type Shot = {
  image: string
  alt: string
  category: Exclude<Category, "All">
}

// Combined, ordered for an asymmetric masonry flow across 3 columns
const shots: Shot[] = [
  {
    image: "/images/portrait-a.png",
    alt: "Close-up of a woman with dark curly hair, chunky gold and silver hoop earrings and a burgundy halter top",
    category: "Portrait",
  },
  { image: "/images/portfolio-2.png", alt: "Woman on a stool in a black blazer and jeans", category: "Fashion" },
  {
    image: "/images/portrait-b.png",
    alt: "Red-haired woman with her eyes closed and hands clasped under her chin in a black top",
    category: "Portrait",
  },
  { image: "/images/portfolio-3.png", alt: "Woman in an oversized brown leather jacket", category: "Fashion" },
  {
    image: "/images/portrait-c.png",
    alt: "Woman with blonde-balayage waves in an oversized black blazer over a white top",
    category: "Portrait",
  },
  { image: "/images/portfolio-5.png", alt: "Person in a white graphic tee and red tights", category: "Brand" },
  {
    image: "/images/portrait-d.png",
    alt: "Beauty portrait with coral-pink eyeshadow, long white nails and a black fur wrap",
    category: "Portrait",
  },
  { image: "/images/portfolio-6.png", alt: "Woman in a white blazer on a city street", category: "Family" },
  {
    image: "/images/portrait-e.png",
    alt: "Low-angle portrait of a curly-haired woman with hoop earrings and a burgundy halter top",
    category: "Portrait",
  },
  { image: "/images/portfolio-1.png", alt: "Woman crouching in an all-black outfit and beret", category: "Portrait" },
  {
    image: "/images/portrait-f.png",
    alt: "Woman with slicked-back hair and amber gemstone earrings in a brown pinstripe jacket",
    category: "Portrait",
  },
  { image: "/images/portfolio-7.png", alt: "Woman in an oversized brown pinstripe blazer", category: "Brand" },
  {
    image: "/images/portrait-g.png",
    alt: "Symmetrical beauty portrait with pink eye makeup framed by a black fur collar",
    category: "Portrait",
  },
  { image: "/images/portfolio-4.png", alt: "Man lit in dramatic red and blue studio lighting", category: "Portrait" },
  { image: "/images/portfolio-10.png", alt: "Beauty portrait of a woman in a black plunging top", category: "Portrait" },
  { image: "/images/portfolio-8.png", alt: "Woman in a black blazer over a white top", category: "Family" },
  { image: "/images/portfolio-9.png", alt: "Woman crouching in a sheer brown outfit and heels", category: "Fashion" },
]

function GalleryItem({ shot }: { shot: Shot }) {
  return (
    <a href="#" className="group mb-6 block w-full overflow-hidden break-inside-avoid">
      <img
        src={shot.image || "/placeholder.svg"}
        alt={shot.alt}
        className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </a>
  )
}

export function PortfolioGallery() {
  const [active, setActive] = useState<Category>("All")

  const visibleShots = active === "All" ? shots : shots.filter((shot) => shot.category === active)

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      {/* Title with decorative lines */}
      <div className="flex items-center justify-center gap-6">
        <span className="h-px flex-1 bg-foreground/15" />
        <h1 className="text-center font-serif text-3xl tracking-wide text-foreground md:text-4xl">
          Portfolio Collections
        </h1>
        <span className="h-px flex-1 bg-foreground/15" />
      </div>

      {/* Category sub-navigation */}
      <nav aria-label="Portfolio categories" className="mt-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-3 font-serif text-lg text-foreground md:text-xl">
          {categories.map((category, index) => (
            <li key={category} className="flex items-center gap-x-3">
              <button
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={active === category}
                className={`nav-link py-1 ${active === category ? "is-active" : ""}`}
              >
                {category}
              </button>
              {index < categories.length - 1 && (
                <span aria-hidden="true" className="text-foreground/30">
                  |
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Masonry photo grid */}
      <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {visibleShots.map((shot) => (
          <GalleryItem key={shot.image} shot={shot} />
        ))}
      </div>
    </section>
  )
}
