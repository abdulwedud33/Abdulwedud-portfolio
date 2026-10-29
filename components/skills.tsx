"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux", "shadcn-ui"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "Python"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker", "MySQL", "Postman", "render", "Vercel", "Figma", "GitHub"],
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="border-y border-border bg-muted/35 py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-14 grid gap-6 text-left sm:grid-cols-[0.3fr_1fr]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">02 / Toolkit</p>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">The tools behind the work.</h2>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">A focused stack for shipping polished interfaces and reliable full-stack products.</p>
          </div>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="glass h-full border-border p-6">
                <h3 className="mb-6 text-xl font-semibold">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="cursor-default rounded-full border border-border bg-background/50 px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
