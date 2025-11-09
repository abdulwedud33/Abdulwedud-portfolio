"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import { motion, Variants } from "framer-motion"

export function Hero() {

 const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" as const 
    },
  }
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-cyan-500/20 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-50/10 to-cyan-50/5 text-blue-300 backdrop-blur-sm hover:border-blue-500/50 transition-colors duration-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-medium text-sm">Available for Exciting Projects</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
              Hi, I'm{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
                  Abdulwedud Yassin
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 blur opacity-30"
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="mb-4 inline-block px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
              <p className="text-lg font-semibold text-blue-300">Full Stack Developer</p>
            </div>
            <p className="text-xl sm:text-2xl font-medium text-foreground mb-4 text-balance max-w-3xl mx-auto leading-relaxed">
              Building modern, scalable web applications with React, Next.js, and Node.js
            </p>
            <p className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
              I craft beautiful, performant, and accessible digital experiences. Passionate about clean code and
              user-centric design.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 group font-semibold px-8"
              asChild
            >
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full bg-transparent font-semibold px-8 hover:bg-blue-500/5"
              asChild
            >
              <a href="/cv.pdf" download className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center gap-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            <div className="flex items-center justify-center gap-4">
              <motion.div whileHover={{ y: -6, scale: 1.1 }} whileTap={{ y: -2 }}>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-500/20 h-12 w-12" asChild>
                  <a
                    href="https://github.com/abdulwedud33"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ y: -6, scale: 1.1 }} whileTap={{ y: -2 }}>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-500/20 h-12 w-12" asChild>
                  <a
                    href="https://linkedin.com/in/abdulwedud3"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ y: -6, scale: 1.1 }} whileTap={{ y: -2 }}>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-500/20 h-12 w-12" asChild>
                  <a href="mailto:abdulwedudyassin2@gmail.com" aria-label="Email">
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
