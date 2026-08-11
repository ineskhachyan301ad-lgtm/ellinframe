import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { Marquee } from "@/components/marquee"
import { ServicesSection } from "@/components/services-section"
import { BookingSection } from "@/components/booking-section"
import { MainFooter } from "@/components/main-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <Marquee />
      <ServicesSection />
      <BookingSection />
      <MainFooter />
    </main>
  )
}
