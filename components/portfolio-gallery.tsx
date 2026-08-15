"use client"

import { useCallback, useEffect, useState } from "react"

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
  {
    image: "/images/portrait-b.png",
    alt: "Red-haired woman with her eyes closed and hands clasped under her chin in a black top",
    category: "Portrait",
  },
  {
    image: "/images/portrait-c.png",
    alt: "Woman with blonde-balayage waves in an oversized black blazer over a white top",
    category: "Portrait",
  },
  {
    image: "/images/portrait-d.png",
    alt: "Beauty portrait with coral-pink eyeshadow, long white nails and a black fur wrap",
    category: "Portrait",
  },
  {
    image: "/images/portrait-e.png",
    alt: "Low-angle portrait of a curly-haired woman with hoop earrings and a burgundy halter top",
    category: "Portrait",
  },
  {
    image: "/images/portrait-f.png",
    alt: "Woman with slicked-back hair and amber gemstone earrings in a brown pinstripe jacket",
    category: "Portrait",
  },
  {
    image: "/images/portrait-g.png",
    alt: "Symmetrical beauty portrait with pink eye makeup framed by a black fur collar",
    category: "Portrait",
  },
  {
    image: "/images/brand-a.png",
    alt: "Model with a dark bob in a black-and-white outfit printed with stylized faces and a matching headband",
    category: "Brand",
  },
]

function GalleryItem({ shot, onOpen }: { shot: Shot; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group mb-6 block w-full cursor-pointer overflow-hidden break-inside-avoid"
      aria-label={`View ${shot.alt}`}
    >
      <img
        src={shot.image || "/placeholder.svg"}
        alt={shot.alt}
        className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </button>
  )
}

function Lightbox({
  shots,
  index,
  onClose,
  onNext,
  onPrev,
}: {
  shots: Shot[]
  index: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}) {
  const shot = shots[index]

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose()
      else if (event.key === "ArrowRight") onNext()
      else if (event.key === "ArrowLeft") onPrev()
    }
    document.addEventListener("keydown", handleKey)
    // Lock body scroll while the lightbox is open
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleKey)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose, onNext, onPrev])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio image viewer"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-md md:p-10"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close viewer"
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full text-background/80 transition-colors hover:text-gold md:right-6 md:top-6"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        </svg>
      </button>

      {/* Previous arrow */}
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          onPrev()
        }}
        aria-label="Previous image"
        className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full text-background/80 transition-colors hover:text-gold md:left-6"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="15 5 8 12 15 19" />
        </svg>
      </button>

      {/* Image */}
      <figure onClick={(event) => event.stopPropagation()} className="flex max-h-full max-w-full flex-col items-center">
        <img
          src={shot.image || "/placeholder.svg"}
          alt={shot.alt}
          className="max-h-[82vh] w-auto max-w-full object-contain shadow-2xl"
        />
        <figcaption className="mt-4 max-w-xl text-center text-xs tracking-[0.15em] text-background/60">
          {`${index + 1} / ${shots.length}`}
        </figcaption>
      </figure>

      {/* Next arrow */}
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          onNext()
        }}
        aria-label="Next image"
        className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full text-background/80 transition-colors hover:text-gold md:right-6"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="9 5 16 12 9 19" />
        </svg>
      </button>
    </div>
  )
}

export function PortfolioGallery() {
  const [active, setActive] = useState<Category>("All")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const visibleShots = active === "All" ? shots : shots.filter((shot) => shot.category === active)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const showNext = useCallback(
    () => setLightboxIndex((current) => (current === null ? current : (current + 1) % visibleShots.length)),
    [visibleShots.length],
  )
  const showPrev = useCallback(
    () =>
      setLightboxIndex((current) =>
        current === null ? current : (current - 1 + visibleShots.length) % visibleShots.length,
      ),
    [visibleShots.length],
  )

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
                onClick={() => {
                  setActive(category)
                  setLightboxIndex(null)
                }}
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
        {visibleShots.map((shot, index) => (
          <GalleryItem key={shot.image} shot={shot} onOpen={() => setLightboxIndex(index)} />
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          shots={visibleShots}
          index={lightboxIndex}
          onClose={closeLightbox}
          onNext={showNext}
          onPrev={showPrev}
        />
      )}
    </section>
  )
}
