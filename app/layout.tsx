import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Yes - Full Stack Developer Portfolio",
  description:
    "Full Stack Developer specializing in React, Next.js, and Node.js. Building modern web applications with cutting-edge technologies.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "Web Development", "Portfolio"],
  authors: [{ name: "Yes" }],
  creator: "Yes",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Yes - Full Stack Developer",
    description: "Full Stack Developer building modern web applications",
    siteName: "Yes Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yes - Full Stack Developer",
    description: "Full Stack Developer building modern web applications",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
