"use client"

import { Card } from "@/components/ui/card"
import { Award, BookOpen, Heart } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const highlights = [
  {
    icon: Award,
    title: "Experience",
    description: "2+ years building web applications",
  },
  {
    icon: BookOpen,
    title: "Education",
    description: "Computer Science and Engineering at ASTU",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Creating delightful user experiences",
  },
]

const skills = [
  { category: "Frontend", tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", tech: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"] },
  { category: "Tools", tech: ["Git", "Docker", "VS Code", "Figma", "Vercel"] },
]

export function About() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden py-24 sm:py-32"
      aria-label="About section"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="mb-14 grid gap-6 border-t border-border pt-5 text-left sm:grid-cols-[0.3fr_1fr]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">01 / About</p>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            A practical builder with a soft spot for details.
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="mx-auto mb-14 max-w-6xl">
          {/* Image Section (reserved for future use) */}

          {/* Content Section */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-12 lg:grid-cols-[1fr_0.85fr]"
          >
            <div className="space-y-6">
            <p className="text-xl leading-relaxed text-foreground sm:text-2xl">
              I’m a Full Stack Web Developer with 2+ years of experience turning useful ideas into modern web applications.
            </p>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              My work sits between product thinking and implementation: clear interfaces, dependable systems, and an eye for the small choices that make software feel considered.
            </p>
            </div>

            {/* Highlights Grid */}
            <motion.div
              className="grid gap-4 sm:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <Card className="group cursor-default border-border bg-transparent p-5 transition-colors hover:border-primary/50">
                    <div className="flex justify-center mb-4">
                      <div className="rounded-full bg-accent p-3 text-accent-foreground transition-transform duration-300 group-hover:rotate-6">
                        <highlight.icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="font-semibold text-base mb-2">
                      {highlight.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
