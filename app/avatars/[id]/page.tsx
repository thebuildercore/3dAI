"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Mic, MicOff, Settings, X, Send, Video, VideoOff } from "lucide-react"
import { cn } from "@/lib/utils"
import { avatars } from "@/lib/avatars"

type Message = { id: string; author: "you" | "ai"; text: string }


export default function AvatarRoomPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const avatar = useMemo(() => avatars.find((a) => a.id === id) ?? avatars[0], [id])
  const [messages, setMessages] = useState<Message[]>([
    { id: "m1", author: "ai", text: `Welcome to ${avatar.name}'s room. Say hello!` },
  ])
  const [input, setInput] = useState("")
  const [micOn, setMicOn] = useState(true)
  const [camOn, setCamOn] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  useEffect(() => {
    async function startCam() {
      try {
        if (!camOn) return
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        streamRef.current = stream
        if (videoRef.current) {
          videoRef.current.srcObject = stream
          await videoRef.current.play()
        }
      } catch {
        // Suppress preview errors
      }
    }
    startCam()
    return () => {
      streamRef.current?.getTracks().forEach((t) => t.stop())
      streamRef.current = null
    }
  }, [camOn])

  function sendMessage() {
    const text = input.trim()
    if (!text) return
    const userMsg: Message = { id: crypto.randomUUID(), author: "you", text }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setTimeout(() => {
      const reply: Message = {
        id: crypto.randomUUID(),
        author: "ai",
        text: `(${avatar.name}) I hear you. Let’s explore that together — ask for a demo or switch my theme. (You said: "${text}")`,
      }
      setMessages((prev) => [...prev, reply])
    }, 600)
  }

  return (
    <main className="min-h-dvh bg-[rgb(10,12,18)] text-slate-100">
      {/* Top bar */}
      <div className="sticky top-0 z-20 border-b border-slate-800/70 bg-[rgb(12,14,20)]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-md bg-cyan-500/20 ring-1 ring-cyan-500/30" />
            <div>
              <div className="text-sm text-slate-400">Now chatting with</div>
              <div className="font-semibold">{avatar.name}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="border-slate-700 bg-slate-900/40 hover:bg-slate-900/70">
              <Settings className="mr-2 size-4" /> Settings
            </Button>
            <Button
              variant="outline"
              onClick={() => setMicOn((v) => !v)}
              className={cn(
                "border-slate-700 bg-slate-900/40 hover:bg-slate-900/70",
                micOn ? "text-slate-100" : "text-slate-400",
              )}
            >
              {micOn ? <Mic className="mr-2 size-4" /> : <MicOff className="mr-2 size-4" />} Voice
            </Button>
            <Button
              variant="ghost"
              className="text-slate-300 hover:bg-slate-900/60"
              onClick={() => router.push("/avatars")}
            >
              <X className="mr-2 size-4" /> Exit
            </Button>
          </div>
        </div>
      </div>

      {/* Main area */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-6 md:grid-cols-[360px_1fr]">
        {/* Left: Chat */}
        <aside className="relative flex h-[70dvh] flex-col overflow-hidden rounded-lg bg-[linear-gradient(135deg,#0b1220,#0e1526)] ring-1 ring-slate-800/70">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="text-sm font-medium text-slate-300">Session Chat</div>
          </div>
          <Separator className="bg-slate-800/70" />
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((m) => (
              <div key={m.id} className={cn("flex", m.author === "you" ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-[80%] rounded-lg px-3 py-2 text-sm",
                    m.author === "you"
                      ? "bg-cyan-500 text-slate-900 shadow-[0_0_24px_rgba(34,211,238,0.25)]"
                      : "bg-slate-900/60 text-slate-100 ring-1 ring-slate-800/70",
                  )}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-800/70 p-3">
            <form
              className="flex items-center gap-2"
              onSubmit={(e) => {
                e.preventDefault()
                sendMessage()
              }}
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Message ${avatar.name}...`}
                className="border-slate-700 bg-slate-950/60 text-slate-100 placeholder:text-slate-500"
              />
              <Button type="submit" className="bg-cyan-500 text-slate-900 hover:bg-cyan-400">
                <Send className="size-4" />
              </Button>
            </form>
          </div>
        </aside>

        {/* Center: 3D avatar stage */}
        <section className="relative min-h-[70dvh] overflow-hidden rounded-lg">
          {/* Futuristic background with holographic accents */}
          <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_30%_20%,rgba(34,211,238,0.18),transparent),radial-gradient(600px_300px_at_80%_0%,rgba(217,70,239,0.12),transparent),linear-gradient(135deg,#0b1220,#0f172a)]" />
          {/* Subtle moving scanline */}
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="h-full w-full animate-holo-scan bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.14),transparent)]" />
          </div>

          {/* Avatar focus frame */}
          <div className="relative z-10 flex h-full w-full items-center justify-center p-4">
            <div className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-xl ring-1 ring-slate-700/70 shadow-[0_0_40px_rgba(34,211,238,0.18)]">
              <img
                src={avatar.stageImage || "/placeholder.svg"}
                alt={`${avatar.name} 3D avatar view`}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cyan-500/20 to-transparent" />
            </div>
          </div>

          {/* Webcam tile bottom-right */}
          <div className="pointer-events-none absolute bottom-4 right-4 z-20 md:bottom-6 md:right-6">
            <div className="pointer-events-auto relative rounded-lg ring-1 ring-slate-700/70">
              <div className="absolute left-2 top-2 z-10 flex items-center gap-2">
                <Button
                  size="icon"
                  variant="secondary"
                  onClick={() => setCamOn((v) => !v)}
                  className="h-8 w-8 rounded bg-slate-900/70 text-slate-200 hover:bg-slate-900"
                  title={camOn ? "Turn camera off" : "Turn camera on"}
                >
                  {camOn ? <Video className="size-4" /> : <VideoOff className="size-4" />}
                </Button>
              </div>
              <video
                ref={videoRef}
                muted
                playsInline
                className={cn("h-28 w-44 rounded-lg bg-slate-900/60 object-cover", !camOn && "opacity-40")}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
