import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing Plans - Maxusbond Solutions",
  description: "Choose the perfect plan for your contact validation needs. Transparent pricing with no hidden fees.",
}

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small teams getting started",
    features: [
      "5,000 validations/month",
      "Real-time API access",
      "Basic reporting",
      "Email support",
      "GDPR compliance",
    ],
    cta: "Start Free Trial",
    href: "https://salescentri.com/get-started/free-trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$99",
    period: "/month",
    description: "Best for growing sales teams",
    features: [
      "25,000 validations/month",
      "Real-time API access",
      "Advanced analytics",
      "Bulk upload (CSV)",
      "CRM integrations",
      "Priority support",
      "Custom filters",
    ],
    cta: "Start Free Trial",
    href: "https://salescentri.com/get-started/free-trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom needs",
    features: [
      "Unlimited validations",
      "Dedicated API endpoints",
      "Custom integrations",
      "Advanced security",
      "Dedicated support",
      "SLA guarantees",
      "Custom reporting",
    ],
    cta: "Contact Sales",
    href: "https://salescentri.com/pricing/enterprise-custom",
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include our core validation features with no hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-purple-500 shadow-xl scale-105" : "border-gray-200"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.popular ? "btn-primary" : "btn-secondary"}`} asChild>
                  <a href={plan.href}>{plan.cta}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <p className="text-gray-600">Need help choosing the right plan?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <a href="https://salescentri.com/pricing/plans-overview">View All Plans</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://salescentri.com/pricing">Get Pricing</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
