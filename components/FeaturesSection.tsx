"use client"

import { motion } from "framer-motion"
import { Gamepad2, Brain, Zap } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Gamepad2,
      title: "New Edge to Games & Animation",
      description:
        "Revolutionary AI-powered avatars that bring unprecedented realism and interactivity to gaming and animation experiences.",
      gradient: "from-cyan-500/20 to-blue-500/20",
      accentColor: "cyan",
    },
    {
      icon: Brain,
      title: "AI-Driven 3D Assets",
      description:
        "Non-scripted animations powered by advanced AI that creates natural, spontaneous movements and expressions in real-time.",
      gradient: "from-fuchsia-500/20 to-purple-500/20",
      accentColor: "fuchsia",
    },
    {
      icon: Zap,
      title: "Real-Time Animation",
      description:
        "Instant response and fluid motion capture that translates your expressions and movements into lifelike avatar animations.",
      gradient: "from-emerald-500/20 to-cyan-500/20",
      accentColor: "emerald",
    },
  ]

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent" />
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(34,211,238,0.03) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(217,70,239,0.03) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, rgba(16,185,129,0.03) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        className="absolute inset-0"
      />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent bg-[length:200%_auto]"
          >
            Revolutionary Features
          </motion.h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of digital interaction with cutting-edge AI technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}
              />
              <motion.div
                animate={{
                  opacity: [0, 0.3, 0],
                  scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 1.5,
                }}
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-2xl`}
              />

              <div className="relative bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 h-full hover:border-cyan-500/40 transition-all duration-300 hover:bg-slate-900/80">
                <div className="mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-br from-${feature.accentColor}-500 to-${feature.accentColor === "cyan" ? "fuchsia" : feature.accentColor === "fuchsia" ? "emerald" : "cyan"}-500 rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <motion.h3
                    whileHover={{ x: 5 }}
                    className={`text-2xl font-bold text-slate-100 mb-4 group-hover:text-${feature.accentColor}-400 transition-all duration-300`}
                  >
                    {feature.title}
                  </motion.h3>
                </div>

                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {feature.description}
                </p>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.div
                    animate={{
                      background: [
                        `linear-gradient(0deg, rgba(34,211,238,0.2), rgba(217,70,239,0.2))`,
                        `linear-gradient(90deg, rgba(217,70,239,0.2), rgba(16,185,129,0.2))`,
                        `linear-gradient(180deg, rgba(16,185,129,0.2), rgba(34,211,238,0.2))`,
                        `linear-gradient(270deg, rgba(34,211,238,0.2), rgba(217,70,239,0.2))`,
                      ],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute inset-0 rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-1/2 left-1/4 w-3 h-3 bg-cyan-400 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          className="absolute top-1/3 right-1/4 w-2 h-2 bg-fuchsia-400 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
          className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-emerald-400 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
          className="absolute top-1/4 right-1/3 w-1 h-8 bg-gradient-to-t from-violet-400/60 to-transparent rounded-full"
        />
      </div>
    </section>
  )
}
