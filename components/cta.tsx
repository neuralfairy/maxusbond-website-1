import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Sparkles, Rocket } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-purple-900 to-blue-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="particle" style={{ top: "10%", left: "10%", animationDelay: "0s" }}></div>
        <div className="particle" style={{ top: "20%", left: "80%", animationDelay: "1s" }}></div>
        <div className="particle" style={{ top: "60%", left: "20%", animationDelay: "2s" }}></div>
        <div className="particle" style={{ top: "80%", left: "70%", animationDelay: "3s" }}></div>
        <div className="particle" style={{ top: "40%", left: "90%", animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="animate-scale-in">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Rocket className="h-20 w-20 text-purple-400 animate-float" />
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
                </div>
              </div>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Ready to <span className="gradient-text">Supercharge</span>
              <br />
              Your Outbound Performance?
            </h2>

            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Join thousands of sales teams who trust Maxusbond's
              <span className="text-yellow-400 font-semibold"> AI-powered validation platform </span>
              to validate their contact data and improve their conversion rates.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button size="lg" className="glow-button text-white font-semibold py-4 px-8 rounded-lg text-lg" asChild>
              <a href="https://salescentri.com/get-started/free-trial" className="flex items-center space-x-3">
                <span>Start Free Trial</span>
                <ArrowRight className="h-6 w-6 animate-pulse" />
              </a>
            </Button>

            <div className="gradient-border">
              <div className="gradient-border-inner">
                <Button
                  size="lg"
                  variant="ghost"
                  className="w-full h-full text-purple-600 hover:bg-purple-50 font-semibold py-4 px-8 text-lg"
                  asChild
                >
                  <a href="https://salescentri.com/get-started/book-demo" className="flex items-center space-x-3">
                    <span>Book Demo</span>
                    <Zap className="h-6 w-6" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
              <div className="text-center p-6 bg-white/10 rounded-xl border border-purple-500/30">
                <div className="text-3xl font-bold text-green-400 mb-2">14-Day</div>
                <div className="text-purple-200">Free Trial</div>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-xl border border-purple-500/30">
                <div className="text-3xl font-bold text-blue-400 mb-2">No</div>
                <div className="text-purple-200">Credit Card Required</div>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-xl border border-purple-500/30">
                <div className="text-3xl font-bold text-yellow-400 mb-2">Cancel</div>
                <div className="text-purple-200">Anytime</div>
              </div>
            </div>

            <p className="text-sm text-purple-300 animate-pulse">
              🚀 Join the future of contact validation • Powered by AI • Trusted by 10,000+ companies
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
