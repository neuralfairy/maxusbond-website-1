import { Star, Quote, Sparkles } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "VP of Sales",
    company: "TechCorp",
    content:
      "Maxusbond reduced our email bounce rate from 18% to 2%. Our deliverability improved dramatically with their AI-powered validation.",
    rating: 5,
    delay: "0s",
  },
  {
    name: "Michael Chen",
    title: "Marketing Director",
    company: "GrowthLabs",
    content:
      "The ROI was immediate. We saved thousands in wasted email costs and improved our sender reputation significantly.",
    rating: 5,
    delay: "0.3s",
  },
  {
    name: "Emily Rodriguez",
    title: "Sales Operations",
    company: "ScaleUp Inc",
    content:
      "Easy integration with our CRM. The bulk validation feature saved us weeks of manual work with incredible accuracy.",
    rating: 5,
    delay: "0.6s",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="particle" style={{ top: "20%", left: "15%", animationDelay: "0s" }}></div>
        <div className="particle" style={{ top: "60%", left: "80%", animationDelay: "2s" }}></div>
        <div className="particle" style={{ top: "80%", left: "30%", animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6 text-purple-400 animate-pulse" />
            <span className="text-purple-300 font-medium">Customer Success Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Trusted by <span className="gradient-text">Sales Teams</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what our customers say about improving their outbound performance with our
            <span className="text-purple-400 font-semibold"> next-generation validation platform</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-scale-in" style={{ animationDelay: testimonial.delay }}>
              <div className="futuristic-card h-full bg-gray-900/90 rounded-2xl p-8 border border-purple-500/30">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Quote className="h-10 w-10 text-purple-400 animate-pulse" />
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400 animate-pulse"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-lg">"{testimonial.content}"</p>

                  <div className="pt-4 border-t border-purple-500/30">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center animate-glow">
                        <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-sm text-purple-300">{testimonial.title}</p>
                        <p className="text-sm text-gray-400">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center space-x-12 text-gray-400 mb-8">
            <div className="flex items-center space-x-3 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-pulse"></div>
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-3 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse"></div>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-3 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-pulse"></div>
              <span>SOC 2 Type II</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
