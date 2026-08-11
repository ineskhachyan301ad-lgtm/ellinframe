import { SiteHeader } from "@/components/site-header"
import { StudioContent } from "@/components/studio-content"
import { MainFooter } from "@/components/main-footer"

export default function TheStudioPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <StudioContent />
      <MainFooter />
    </main>
  )
}
