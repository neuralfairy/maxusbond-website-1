import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, User, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - Email Verification & Contact Validation Insights",
  description:
    "Expert insights on contact hygiene, email bounce rates, verification APIs, and B2B outbound best practices.",
}

const blogPosts = [
  {
    title: "The Complete Guide to Email Bounce Rates",
    excerpt:
      "Learn how to identify, reduce, and prevent email bounces to improve your sender reputation and deliverability.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "Email Verification",
    slug: "complete-guide-email-bounce-rates",
  },
  {
    title: "Contact Hygiene Best Practices for B2B Sales",
    excerpt:
      "Discover proven strategies to maintain clean contact lists and improve your outbound campaign performance.",
    author: "Michael Chen",
    date: "2024-01-10",
    category: "Contact Hygiene",
    slug: "contact-hygiene-best-practices",
  },
  {
    title: "API Integration Guide: Real-time Email Verification",
    excerpt:
      "Step-by-step tutorial on integrating our verification API into your existing sales and marketing workflows.",
    author: "Emily Rodriguez",
    date: "2024-01-05",
    category: "API Documentation",
    slug: "api-integration-guide",
  },
  {
    title: "GDPR Compliance in Email Verification",
    excerpt:
      "Understanding data protection requirements and how to maintain compliance while validating contact information.",
    author: "David Kim",
    date: "2023-12-28",
    category: "Compliance",
    slug: "gdpr-compliance-email-verification",
  },
  {
    title: "ROI Calculator: Measuring Email Validation Impact",
    excerpt: "How to calculate the return on investment of email validation and justify the cost to stakeholders.",
    author: "Lisa Wang",
    date: "2023-12-20",
    category: "ROI Analysis",
    slug: "roi-calculator-email-validation",
  },
  {
    title: "Bulk Email Validation: Processing Large Lists Efficiently",
    excerpt: "Best practices for validating large contact databases while maintaining speed and accuracy.",
    author: "Alex Thompson",
    date: "2023-12-15",
    category: "Bulk Processing",
    slug: "bulk-email-validation-guide",
  },
]

export default function BlogPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Email Verification Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights on contact hygiene, email bounce rates, verification APIs, and B2B outbound best practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="card-flip shadow-lg hover:shadow-xl">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-purple-600 font-medium">{post.category}</span>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl hover:text-purple-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Resources</CardTitle>
                <CardDescription>Additional resources to help you succeed</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button variant="outline" asChild className="w-full justify-start bg-transparent">
                    <a href="https://salescentri.com/resources/whitepapers-ebooks">Download Guides</a>
                  </Button>
                  <Button variant="outline" asChild className="w-full justify-start bg-transparent">
                    <a href="https://salescentri.com/resources/case-studies">Case Studies</a>
                  </Button>
                  <Button variant="outline" asChild className="w-full justify-start bg-transparent">
                    <a href="https://salescentri.com/blog/product-updates">Product Updates</a>
                  </Button>
                  <Button variant="outline" asChild className="w-full justify-start bg-transparent">
                    <a href="https://salescentri.com/resources/tutorials-webinars">Tutorials & Webinars</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
              <CardHeader>
                <CardTitle>Stay Updated</CardTitle>
                <CardDescription className="text-purple-100">
                  Get the latest insights delivered to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-purple-100">
                    Subscribe to our newsletter for weekly tips on email verification, contact hygiene, and B2B outbound
                    best practices.
                  </p>
                  <Button className="w-full bg-white text-purple-600 hover:bg-gray-50">Subscribe Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
