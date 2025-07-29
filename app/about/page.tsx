import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Users, Target, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About Maxusbond Solutions - Contact Validation Experts",
  description:
    "Learn about our New York-based team dedicated to improving data-driven outreach efficiency through accurate contact validation.",
}

const values = [
  {
    icon: Target,
    title: "Data Accuracy",
    description: "We believe accurate data is the foundation of successful outbound campaigns.",
  },
  {
    icon: Users,
    title: "Customer Success",
    description: "Your success is our success. We provide the tools and support you need to excel.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "Continuously improving our technology to stay ahead of industry challenges.",
  },
]

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Maxusbond Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a New York-based team dedicated to improving data-driven outreach efficiency through accurate contact
            validation and verification services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Maxusbond Solutions, we understand that successful B2B outreach starts with accurate data. Our mission
              is to empower sales and marketing teams with the most reliable contact validation platform, helping them
              achieve better conversation rates and improved ROI.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded by data scientists and sales professionals, we combine deep technical expertise with real-world
              understanding of outbound challenges to deliver solutions that truly make a difference.
            </p>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="h-5 w-5" />
              <span>Based in New York, NY</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                <div className="text-gray-600">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">10M+</div>
                <div className="text-gray-600">Emails Validated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <value.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold">Ready to Work Together?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of companies who trust Maxusbond to validate their contact data and improve their outbound
            performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="btn-primary">
              <a href="https://salescentri.com/company/about-us">Learn More About Us</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="btn-secondary bg-transparent">
              <a href="https://salescentri.com/company/about-us/leadership-team">Meet Our Team</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="btn-secondary bg-transparent">
              <a href="https://salescentri.com/company/team-advisors/career-openings">Join Our Team</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
