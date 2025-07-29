import Link from "next/link"
import { MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-gradient-to-r from-purple-600 to-blue-600"></div>
              <span className="text-xl font-bold">Maxusbond</span>
            </div>
            <p className="text-gray-400">Contact validation platform improving B2B outbound success.</p>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="h-4 w-4" />
              <span>New York, NY</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  Contact Validator
                </Link>
              </li>
              <li>
                <a
                  href="https://salescentri.com/services/data-enrichment"
                  className="hover:text-white transition-colors"
                >
                  Data Enrichment
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/solutions/psa-suite/integrations"
                  className="hover:text-white transition-colors"
                >
                  CRM Integration
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/services/sdr-service/pricing"
                  className="hover:text-white transition-colors"
                >
                  SDR Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="https://salescentri.com/company/about-us" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/company/about-us/leadership-team"
                  className="hover:text-white transition-colors"
                >
                  Leadership
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/company/team-advisors/career-openings"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="https://salescentri.com/resources/case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/resources/whitepapers-ebooks"
                  className="hover:text-white transition-colors"
                >
                  Whitepapers
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/docs/api-reference" className="hover:text-white transition-colors">
                  API Docs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 text-gray-400 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            <a
              href="https://salescentri.com?utm_source=maxusbond.com&utm_medium=footer&utm_campaign=partner_network"
              className="hover:text-white transition-colors"
            >
              Powered by Sales Intelligence Platform
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
