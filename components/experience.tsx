"use client"

import { Card } from "@/components/ui/card"
import { Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    company: "Impact Makers Foundation",
    role: "Full Stack Web Developer",
    period: "3 months",
    description:
      "Built a platform for students to find internships and for companies to find interns.",
  },
  {
    company: "Adama Science and Technology University",
    role: "Student",
    period: "2023 - Present",
    description:
      "Studying Computer Science and Engineering at ASTU.",
  }
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="border-y border-border bg-muted/35 py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-14 grid gap-6 text-left sm:grid-cols-[0.3fr_1fr]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">04 / Experience</p>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">Where I’ve been learning by doing.</h2>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">A short timeline of the environments shaping how I build.</p>
          </div>
        </motion.div>

        <div className="max-w-4xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute bottom-0 left-3 top-0 hidden w-px bg-border md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="flex items-start gap-6">
                    <div className="relative z-10 mt-6 hidden h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground md:flex">
                      <span className="h-2 w-2 rounded-full bg-current" />
                    </div>
                    <Card className="glass flex-1 border-border p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                      </div>
                      <p className="text-primary font-semibold mb-3">{exp.company}</p>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
