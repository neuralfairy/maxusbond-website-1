import { Button } from "@/components/ui/button"
import { Mail, Upload, Shield, Zap, BarChart3, Settings } from "lucide-react"

const features = [
  {
    icon: Mail,
    title: "Real-time Email Verification",
    description: "Validate email addresses instantly with our advanced AI-powered verification algorithms.",
    color: "from-blue-500 to-cyan-500",
    delay: "0s",
  },
  {
    icon: Upload,
    title: "Bulk List Upload",
    description: "Process thousands of contacts at once with lightning-fast accuracy reports.",
    color: "from-purple-500 to-pink-500",
    delay: "0.2s",
  },
  {
    icon: Shield,
    title: "Bounce Reduction",
    description: "Eliminate hard bounces and protect your sender reputation with smart filtering.",
    color: "from-green-500 to-emerald-500",
    delay: "0.4s",
  },
  {
    icon: Zap,
    title: "API Integration",
    description: "Seamlessly integrate with your existing tools through our futuristic API.",
    color: "from-yellow-500 to-orange-500",
    delay: "0.6s",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description: "Get comprehensive insights with real-time dashboards and predictive analytics.",
    color: "from-red-500 to-rose-500",
    delay: "0.8s",
  },
  {
    icon: Settings,
    title: "Custom Filters",
    description: "Apply AI-driven compliance filters and custom validation rules.",
    color: "from-indigo-500 to-purple-500",
    delay: "1s",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="particle" style={{ top: "10%", left: "5%", animationDelay: "0s" }}></div>
        <div className="particle" style={{ top: "70%", left: "90%", animationDelay: "3s" }}></div>
        <div className="particle" style={{ top: "50%", left: "50%", animationDelay: "6s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Contact Validator <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive email verification and contact validation tools powered by
            <span className="text-purple-400 font-semibold"> next-generation AI technology</span>
            to improve your outbound success rates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="animate-scale-in" style={{ animationDelay: feature.delay }}>
              <div className="futuristic-card h-full bg-gray-900/90 rounded-2xl p-6 border border-purple-500/30">
                <div className="space-y-4">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-4 animate-float`}
                    style={{ animationDelay: feature.delay }}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>

                  <div className="pt-4">
                    <div className={`h-1 w-full bg-gradient-to-r ${feature.color} rounded-full opacity-30`}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="glow-button text-white font-semibold py-3 px-8 rounded-lg">
              <a href="https://salescentri.com/services/data-enrichment">Data Enrichment</a>
            </Button>

            <div className="gradient-border">
              <div className="gradient-border-inner">
                <Button
                  variant="ghost"
                  asChild
                  className="w-full h-full text-purple-600 font-semibold hover:bg-purple-50"
                >
                  <a href="https://salescentri.com/solutions/psa-suite/integrations">CRM Integration</a>
                </Button>
              </div>
            </div>

            <div className="gradient-border">
              <div className="gradient-border-inner">
                <Button
                  variant="ghost"
                  asChild
                  className="w-full h-full text-purple-600 font-semibold hover:bg-purple-50"
                >
                  <a href="https://salescentri.com/services/sdr-service/pricing">SDR Services</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
