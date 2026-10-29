"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
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
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 sm:pt-32">
      <div className="absolute -right-32 top-24 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <motion.div
          className="grid items-end gap-12 lg:grid-cols-[1.25fr_0.75fr]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.p variants={itemVariants} className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Full stack developer · Adama, Ethiopia</motion.p>
            <motion.h1 variants={itemVariants} className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.06em] sm:text-7xl lg:text-[7.2rem]">
              Digital work with <span className="text-primary">purpose.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              I’m Abdulwedud, a developer who builds thoughtful, reliable web products with React, Next.js, and Node.js.
            </motion.p>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start gap-4 lg:items-end lg:pb-2"
          >
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">Available for freelance work and full-time opportunities.</p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="rounded-full bg-accent px-6 text-accent-foreground hover:bg-accent/90" asChild>
                <a href="#projects">See selected work <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-6" asChild>
                <a href="/Abdulwedud_cv.pdf" download><Download className="mr-2 h-4 w-4" /> CV</a>
              </Button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="col-span-full flex items-center justify-between border-t border-border pt-5">
            <div className="flex items-center gap-4">
              <a href="https://github.com/abdulwedud33" target="_blank" rel="noopener noreferrer" className="text-sm font-medium underline-offset-4 hover:underline">GitHub</a>
              <a href="https://linkedin.com/in/abdulwedud3" target="_blank" rel="noopener noreferrer" className="text-sm font-medium underline-offset-4 hover:underline">LinkedIn</a>
              <a href="mailto:abdulwedudyassin2@gmail.com" className="text-sm font-medium underline-offset-4 hover:underline">Email</a>
            </div>
            <a href="#about" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground">
              Scroll to explore <ArrowDown className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
