"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

export function HeroParallax() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const yBg = useTransform(scrollYProgress, [0, 1], [0, -120])
  const yGrid = useTransform(scrollYProgress, [0, 1], [0, -60])
  const yFg = useTransform(scrollYProgress, [0, 1], [0, -20])
  const scaleTitle = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.div aria-hidden="true" style={{ y: yBg }} className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/15 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl animate-bounce" />
        <div className="absolute bottom-1/4 left-1/3 h-24 w-24 rounded-full bg-violet-400/10 blur-xl animate-ping" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        style={{ y: yGrid }}
        className="absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
      >
        <div className="h-full w-full animate-pulse bg-[linear-gradient(to_right,rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(217,70,239,0.06)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-cyan-400/40 rotate-45"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/3 w-6 h-6 bg-fuchsia-400/30 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/6 w-4 h-12 bg-gradient-to-b from-emerald-400/40 to-transparent"
        />
        <motion.div
          animate={{
            rotate: [0, 180, 360],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/3 right-1/4 w-10 h-2 bg-violet-400/40 rounded-full"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pb-20 pt-24 text-center">
        <div className="relative">
          <motion.h1
            style={{ scale: scaleTitle }}
            className="text-pretty text-4xl font-semibold tracking-tight md:text-6xl relative z-10"
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 20px rgba(34,211,238,0.6), 0 0 40px rgba(34,211,238,0.3)",
                  "0 0 30px rgba(217,70,239,0.6), 0 0 50px rgba(217,70,239,0.3)",
                  "0 0 20px rgba(34,211,238,0.6), 0 0 40px rgba(34,211,238,0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="text-white font-bold"
            >
              Bored of repetitive lives?
            </motion.span>
          </motion.h1>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute -top-4 left-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <div className="absolute top-1/2 -right-4 w-1.5 h-1.5 bg-fuchsia-400 rounded-full animate-ping" />
            <div className="absolute -bottom-4 left-1/2 w-2 h-2 bg-emerald-400 rounded-full animate-bounce" />
            <div className="absolute top-1/2 -left-4 w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl text-balance text-slate-300 text-lg leading-relaxed"
        >
          Break free from the mundane. Step into Nova's world and experience life through the eyes of an AI companion
          who sees beyond the ordinary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-white font-semibold shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:shadow-[0_0_40px_rgba(34,211,238,0.7)] hover:scale-105 transition-all duration-300"
          >
            <Link href="/avatars/nova">Meet Nova</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-slate-600 bg-slate-800/50 text-slate-100 hover:bg-slate-700/70 hover:border-fuchsia-400/50 hover:text-fuchsia-200 transition-all duration-300"
          >
            <Link href="#nova-intro">Discover More</Link>
          </Button>
        </motion.div>

        <motion.div
          style={{ y: yFg }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="relative mt-6 w-full"
        >
          <div className="mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-xl bg-[linear-gradient(135deg,#0b1220,#0f172a)] ring-1 ring-slate-700/50 shadow-[0_0_50px_rgba(34,211,238,0.2)] hover:shadow-[0_0_70px_rgba(34,211,238,0.3)] transition-all duration-500">
            <div className="relative h-full w-full">
              <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_70%_at_50%_50%,black,transparent)]">
                <div className="h-full w-full animate-holo-scan bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.3),rgba(217,70,239,0.2),transparent)]" />
              </div>
              <div className="pointer-events-none absolute inset-0">
                <div className="h-full w-full animate-pulse bg-[radial-gradient(circle_at_30%_70%,rgba(16,185,129,0.1),transparent_50%)]" />
              </div>

              <img
                src="/3d-holographic-avatar-stage-with-neon-cyan-and-fuc.png"
                alt="Animated preview space for 3D avatars"
                className="h-full w-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
