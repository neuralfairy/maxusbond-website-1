"use client"

import { useState } from "react"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, TrendingUp, Zap } from "lucide-react"

export function ROICalculator() {
  const [emails, setEmails] = useState(10000)
  const [bounceRate, setBounceRate] = useState(15)
  const [costPerEmail, setCostPerEmail] = useState(0.05)

  const validEmails = emails * (1 - bounceRate / 100)
  const currentCost = emails * costPerEmail
  const improvedCost = validEmails * costPerEmail
  const savings = currentCost - improvedCost
  const roiPercentage = ((savings / (emails * 0.001)) * 100).toFixed(0)

  return (
    <section className="py-20 bg-gradient-to-br from-black via-purple-900/30 to-blue-900/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="particle" style={{ top: "15%", left: "10%", animationDelay: "0s" }}></div>
        <div className="particle" style={{ top: "75%", left: "85%", animationDelay: "2s" }}></div>
        <div className="particle" style={{ top: "45%", left: "70%", animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="h-8 w-8 text-purple-400 animate-pulse" />
            <span className="text-purple-300 font-medium text-lg">AI-Powered ROI Analysis</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Calculate Your <span className="gradient-text">ROI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how much you can save by improving your contact data quality with our
            <span className="text-purple-400 font-semibold"> next-generation validation platform</span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="futuristic-card bg-gray-900/90 rounded-2xl border border-purple-500/30">
              <CardHeader className="text-white">
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 p-3 animate-glow">
                    <Calculator className="h-6 w-6 text-white" />
                  </div>
                  <span>ROI Calculator</span>
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Enter your current email marketing metrics
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-3">
                  <Label htmlFor="emails" className="text-white font-medium">
                    Monthly Email Volume
                  </Label>
                  <div className="gradient-border">
                    <div className="gradient-border-inner">
                      <Input
                        id="emails"
                        type="number"
                        value={emails}
                        onChange={(e) => setEmails(Number(e.target.value))}
                        className="text-lg bg-transparent border-0 text-gray-900 font-semibold"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="bounce-rate" className="text-white font-medium">
                    Current Bounce Rate (%)
                  </Label>
                  <div className="gradient-border">
                    <div className="gradient-border-inner">
                      <Input
                        id="bounce-rate"
                        type="number"
                        value={bounceRate}
                        onChange={(e) => setBounceRate(Number(e.target.value))}
                        className="text-lg bg-transparent border-0 text-gray-900 font-semibold"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="cost" className="text-white font-medium">
                    Cost per Email ($)
                  </Label>
                  <div className="gradient-border">
                    <div className="gradient-border-inner">
                      <Input
                        id="cost"
                        type="number"
                        step="0.01"
                        value={costPerEmail}
                        onChange={(e) => setCostPerEmail(Number(e.target.value))}
                        className="text-lg bg-transparent border-0 text-gray-900 font-semibold"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </div>

          <div className="space-y-8 animate-slide-in-right">
            <div className="futuristic-card bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-2xl border border-purple-400/50 animate-glow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <div className="w-12 h-12 rounded-xl bg-white/20 p-3 animate-float">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <span>Your Potential Savings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white/20 rounded-xl">
                    <p className="text-purple-200 mb-2">Monthly Savings</p>
                    <p className="text-3xl font-bold text-white font-bold">${savings.toFixed(0)}</p>
                  </div>
                  <div className="text-center p-4 bg-white/20 rounded-xl">
                    <p className="text-purple-200 mb-2">Annual Savings</p>
                    <p className="text-3xl font-bold text-white font-bold">${(savings * 12).toFixed(0)}</p>
                  </div>
                </div>

                <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                  <p className="text-purple-200 mb-2">ROI</p>
                  <p className="text-5xl font-bold text-white font-bold">{roiPercentage}%</p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  <div>
                    <div className="text-green-400 font-bold text-lg">{validEmails.toLocaleString()}</div>
                    <div className="text-purple-200">Valid Emails</div>
                  </div>
                  <div>
                    <div className="text-red-400 font-bold text-lg">{(emails - validEmails).toLocaleString()}</div>
                    <div className="text-purple-200">Bounces Avoided</div>
                  </div>
                  <div>
                    <div className="text-yellow-400 font-bold text-lg">{bounceRate}%</div>
                    <div className="text-purple-200">Reduction</div>
                  </div>
                </div>
              </CardContent>
            </div>

            <div className="text-center">
              <Button size="lg" asChild className="glow-button text-white font-semibold py-4 px-8 rounded-lg">
                <a href="https://salescentri.com/solutions/use-case-navigator/recommendations">
                  Get Detailed ROI Report
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
