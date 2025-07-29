import { Button } from "@/components/ui/button"
import { CheckCircle, Shield, Zap, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 holographic-bg"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="particle" style={{ top: "20%", left: "10%", animationDelay: "0s" }}></div>
        <div className="particle" style={{ top: "60%", left: "80%", animationDelay: "2s" }}></div>
        <div className="particle" style={{ top: "40%", left: "60%", animationDelay: "4s" }}></div>
        <div className="particle" style={{ top: "80%", left: "20%", animationDelay: "1s" }}></div>
        <div className="particle" style={{ top: "30%", left: "90%", animationDelay: "3s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-6 w-6 text-purple-400 animate-pulse" />
                <span className="text-purple-300 font-medium">Next-Gen Contact Validation</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
                Accurate Data.
                <span className="gradient-text block mt-2">Better Conversations.</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Maxusbond validates your contact info to supercharge your outbound performance. Reduce bounces, improve
                deliverability, and boost your conversion rates with
                <span className="text-purple-400 font-semibold"> AI-powered precision</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="glow-button text-white font-semibold py-4 px-8 rounded-lg">
                <a href="https://salescentri.com/get-started/free-trial">Start Free Trial</a>
              </Button>
              <div className="gradient-border">
                <div className="gradient-border-inner">
                  <Button
                    size="lg"
                    variant="ghost"
                    asChild
                    className="w-full h-full text-purple-600 font-semibold hover:bg-purple-50"
                  >
                    <a href="https://salescentri.com/get-started/book-demo">Book Demo</a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-2 text-green-400">
                <CheckCircle className="h-5 w-5 animate-pulse" />
                <span>99.9% Accuracy</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <Shield className="h-5 w-5 animate-pulse" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <Zap className="h-5 w-5 animate-pulse" />
                <span>Real-time API</span>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="floating-element">
              <div className="futuristic-card bg-gray-900/90 rounded-2xl p-8 border border-purple-500/30">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-xl text-white">Validation Results</h3>
                    <div className="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-full text-sm font-medium animate-glow">
                      98.7% Valid
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-lg border border-green-500/30 animate-scale-in"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <span className="text-sm text-white">john.doe@company.com</span>
                      <CheckCircle className="h-5 w-5 text-green-400 animate-pulse" />
                    </div>

                    <div
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-lg border border-green-500/30 animate-scale-in"
                      style={{ animationDelay: "0.4s" }}
                    >
                      <span className="text-sm text-white">sarah.smith@business.org</span>
                      <CheckCircle className="h-5 w-5 text-green-400 animate-pulse" />
                    </div>

                    <div
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-lg border border-red-500/30 animate-scale-in"
                      style={{ animationDelay: "0.6s" }}
                    >
                      <span className="text-sm text-white">invalid@fake-domain.xyz</span>
                      <div className="h-5 w-5 rounded-full bg-gradient-to-r from-red-500 to-red-600 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-purple-500/30">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-400">2,847</div>
                        <div className="text-xs text-gray-400">Valid</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-400">38</div>
                        <div className="text-xs text-gray-400">Invalid</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-yellow-400">15</div>
                        <div className="text-xs text-gray-400">Risky</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
