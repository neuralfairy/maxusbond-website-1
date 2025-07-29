import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Maxusbond Solutions - Contact Validator | Email Verification Platform",
  description:
    "Maxusbond validates your contact info to supercharge your outbound performance. Accurate data for better B2B conversations.",
  keywords: "email verification, data validation, contact accuracy, contact validator, B2B sales tools",
  authors: [{ name: "Maxusbond Solutions" }],
  openGraph: {
    title: "Maxusbond Solutions - Contact Validator",
    description: "Accurate Data. Better Conversations. Validate your contact info to supercharge outbound performance.",
    url: "https://maxusbond.com",
    siteName: "Maxusbond Solutions",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Maxusbond Solutions",
              url: "https://maxusbond.com",
              logo: "https://maxusbond.com/logo.png",
              description: "Contact validation platform improving B2B outbound success",
              address: {
                "@type": "PostalAddress",
                addressLocality: "New York",
                addressRegion: "NY",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                url: "https://salescentri.com/contact/support-request/live-chat",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
