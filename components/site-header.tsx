"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "THE STUDIO", href: "/the-studio" },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
          className={`nav-link font-serif text-xl font-semibold tracking-wide ${
            pathname === "/" ? "is-active" : ""
          }`}
        >
          EllinFrame
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const basePath = item.href.split("#")[0]
              const isActive = basePath !== "/" && pathname === basePath
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`nav-link text-[11px] font-medium tracking-[0.18em] ${
                      isActive ? "is-active" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
