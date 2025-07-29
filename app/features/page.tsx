import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Upload, Shield, Zap, BarChart3, Settings, Globe, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Validator Features - Maxusbond Solutions",
  description:
    "Comprehensive email verification and contact validation capabilities. Real-time API, bulk processing, and advanced analytics.",
}

const features = [
  {
    icon: Mail,
    title: "Real-time Email Verification",
    description:
      "Validate email addresses instantly with our advanced verification algorithms that check syntax, domain validity, and mailbox existence.",
    benefits: ["99.9% accuracy rate", "Sub-second response time", "Comprehensive validation checks"],
  },
  {
    icon: Upload,
    title: "Bulk List Processing",
    description:
      "Upload and process thousands of contacts simultaneously with detailed accuracy reports and downloadable results.",
    benefits: ["Process up to 100K emails at once", "Detailed validation reports", "CSV/Excel export"],
  },
  {
    icon: Shield,
    title: "Bounce Reduction & Compliance",
    description:
      "Eliminate hard bounces and maintain compliance with anti-spam regulations to protect your sender reputation.",
    benefits: ["Reduce bounce rates by 95%", "GDPR & CAN-SPAM compliant", "Sender reputation protection"],
  },
  {
    icon: Zap,
    title: "API Integration",
    description:
      "Seamlessly integrate with your existing tools and workflows using our robust RESTful API with comprehensive documentation.",
    benefits: ["RESTful API design", "Multiple programming languages", "Webhook support"],
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get comprehensive insights into your contact data quality with detailed reports and trend analysis.",
    benefits: ["Real-time dashboards", "Historical trend analysis", "Custom reporting"],
  },
  {
    icon: Settings,
    title: "Custom Validation Rules",
    description:
      "Apply custom filters and validation rules based on your specific business requirements and compliance needs.",
    benefits: ["Role-based filtering", "Domain blacklisting", "Custom validation logic"],
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description:
      "Validate email addresses from any country with support for international domains and regional compliance requirements.",
    benefits: ["200+ country support", "International domain validation", "Regional compliance"],
  },
  {
    icon: Clock,
    title: "Real-time Monitoring",
    description:
      "Monitor your validation usage, API performance, and data quality metrics in real-time with automated alerts.",
    benefits: ["Usage monitoring", "Performance metrics", "Automated alerts"],
  },
]

export default function FeaturesPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Contact Validator Capabilities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive email verification and contact validation tools designed to improve your outbound success
            rates and protect your sender reputation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="card-flip border-0 shadow-lg hover:shadow-xl">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                      <div className="h-2 w-2 bg-purple-600 rounded-full"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Try our contact validator with a free trial and see the difference accurate data can make for your outbound
            campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-50" asChild>
              <a href="https://salescentri.com/get-started/free-trial">Start Free Trial</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
              asChild
            >
              <a href="https://salescentri.com/get-started/book-demo">Book Demo</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
