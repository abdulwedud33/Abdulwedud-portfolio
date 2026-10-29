"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "abdulwedudyassin2@gmail.com",
    href: "mailto:abdulwedudyassin2@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+251 901523366",
    href: "tel:+251 901523366",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ethiopia, Adama City",
    href: "https://maps.google.com/?q=Adama,Ethiopia",
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-14 grid gap-6 text-left sm:grid-cols-[0.3fr_1fr]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">05 / Contact</p>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">Have a good idea? Let’s make it real.</h2>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">The quickest way to reach me is email. I’m open to thoughtful collaborations, freelance work, and full-time opportunities.</p>
          </div>
        </motion.div>

        <div className="max-w-5xl">
          <div className="mb-10 grid gap-4 md:grid-cols-3">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="glass h-full border-border p-5 transition-colors hover:border-primary/50">
                  <div className="mb-8 flex items-center justify-between">
                    <info.icon className="h-5 w-5 text-primary" />
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <h3 className="mb-2 font-semibold">{info.label}</h3>
                  <p className="break-words text-sm text-muted-foreground">{info.value}</p>
                </Card>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="glass border-primary/30 bg-primary p-8 text-primary-foreground">
              <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                <p className="max-w-md text-xl font-medium leading-relaxed">
                  Let’s talk about what you’re building.
                </p>
                <Button size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                  <a href="mailto:abdulwedudyassin2@gmail.com">
                    <Mail className="mr-2 h-5 w-5" /> Send me an email
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
