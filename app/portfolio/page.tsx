import { SiteHeader } from "@/components/site-header"
import { PortfolioGallery } from "@/components/portfolio-gallery"
import { QuoteBanner } from "@/components/quote-banner"
import { MainFooter } from "@/components/main-footer"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <PortfolioGallery />
      <QuoteBanner />
      <MainFooter />
    </main>
  )
}
