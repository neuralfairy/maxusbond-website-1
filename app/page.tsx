import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { ROICalculator } from "@/components/roi-calculator"
import { CTA } from "@/components/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <ROICalculator />
      <Testimonials />
      <CTA />
    </>
  )
}
