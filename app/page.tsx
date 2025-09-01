import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { AvatarGrid } from "@/components/avatars/avatar-grid"
import { HeroParallax } from "@/components/hero-parallax"
import { MonkeyStage } from "@/components/three/monkey-stage"

export default function Page() {
  return (
    <main className="min-h-dvh bg-[rgb(10,12,18)] text-slate-100">
      <SiteHeader />

      {/* Hero: cinematic, immersive with parallax */}
      <HeroParallax />

      {/* Avatar grid */}
      <section className="relative mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured Avatars</h2>
          <Button asChild variant="ghost">
            <Link href="/avatars">View all</Link>
          </Button>
        </div>
        <AvatarGrid limit={6} />
      </section>
    </main>
  )
}
