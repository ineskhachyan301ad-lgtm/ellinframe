import Link from "next/link"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "The Studio", href: "/the-studio" },
]

const contacts = ["+374 43 090149", "Sos Manukyan 11/1"]

const socials = [
  { label: "@ellinframe_", href: "https://instagram.com/ellinframe_/tagged" },
  { label: "@ellmuradyan", href: "https://instagram.com/ellmuradyan" },
]

export function MainFooter() {
  return (
    <footer className="w-full bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand + description */}
          <div className="md:pr-8">
            <p className="font-serif text-2xl text-background">EllinFrame Studio</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/55">
              A photography studio built on quiet detail and honest storytelling. Editorial, portrait, commercial and
              wedding work — crafted frame by frame.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-[10px] font-medium tracking-[0.3em] text-background/45">NAVIGATE</p>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="nav-link text-sm text-background/80">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <p className="text-[10px] font-medium tracking-[0.3em] text-background/45">CONTACTS</p>
            <ul className="mt-5 flex flex-col gap-3">
              {contacts.map((contact) => (
                <li key={contact}>
                  <a
                    href={
                      contact.includes("@")
                        ? `mailto:${contact}`
                        : contact.startsWith("+")
                          ? `tel:${contact.replace(/\s/g, "")}`
                          : "#"
                    }
                    className="nav-link text-sm text-background/80"
                  >
                    {contact}
                  </a>
                </li>
              ))}
              {socials.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link inline-flex items-center gap-2 text-sm text-background/80"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-background/15 pt-6 text-[11px] tracking-wide text-background/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} EllinFrame Studio. All rights reserved.</p>
          <p>Est. 2026 — Vagharshapat</p>
        </div>
      </div>
    </footer>
  )
}
