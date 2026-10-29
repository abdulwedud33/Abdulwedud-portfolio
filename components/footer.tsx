"use client"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { icon: Github, href: "https://github.com/abdulwedud33", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/abdulwedud3", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/abdulwedud33", label: "Twitter" },
  { icon: Mail, href: "mailto:abdulwedudyassin2@gmail.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Button key={link.label} variant="ghost" size="icon" className="rounded-full" asChild>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.label}</span>
                </a>
              </Button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Abdulwedud Yassin. Built with care.
          </p>
        </div>
      </div>
    </footer>
  )
}
