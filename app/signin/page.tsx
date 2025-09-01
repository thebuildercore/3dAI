import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SignInPage() {
  return (
    <main className="min-h-dvh bg-[rgb(10,12,18)] text-slate-100">
      <SiteHeader />
      <section className="mx-auto max-w-md px-6 py-10">
        <h1 className="mb-6 text-2xl font-semibold text-pretty">Sign In</h1>
        <form className="space-y-4">
          <Input placeholder="Email" className="border-slate-700 bg-slate-950/60 text-slate-100" />
          <Input placeholder="Password" type="password" className="border-slate-700 bg-slate-950/60 text-slate-100" />
          <Button className="w-full bg-cyan-500 text-slate-900 hover:bg-cyan-400">Continue</Button>
        </form>
      </section>
    </main>
  )
}
