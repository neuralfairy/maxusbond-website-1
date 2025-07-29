"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-black/95 border-b border-purple-500/30">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 animate-glow"></div>
            <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400 animate-pulse" />
          </div>
          <span className="text-2xl font-bold text-white">Maxusbond</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white hover:text-purple-400 bg-transparent">
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 bg-gray-900 border border-purple-500/30 rounded-lg">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/features"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-500/20 focus:bg-purple-500/20 text-white"
                    >
                      <div className="text-sm font-medium leading-none">Contact Validator</div>
                      <p className="line-clamp-2 text-sm leading-snug text-gray-300">
                        AI-powered real-time email verification and bulk validation
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a
                      href="https://salescentri.com/services/data-enrichment"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-500/20 focus:bg-purple-500/20 text-white"
                    >
                      <div className="text-sm font-medium leading-none">Data Enrichment</div>
                      <p className="line-clamp-2 text-sm leading-snug text-gray-300">
                        Enhance your contact data with AI-powered insights
                      </p>
                    </a>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/pricing"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-purple-400 text-white"
              >
                Pricing
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="/about"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-purple-400 text-white"
              >
                About
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="/blog"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-purple-400 text-white"
              >
                Blog
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-3">
            <div className="gradient-border">
              <div className="gradient-border-inner">
                <Button variant="ghost" asChild className="text-purple-600 font-semibold hover:bg-purple-50">
                  <a href="https://salescentri.com/get-started/book-demo">Book Demo</a>
                </Button>
              </div>
            </div>
            <Button asChild className="glow-button text-white font-semibold">
              <a href="https://salescentri.com/get-started/free-trial">Start Free Trial</a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-white hover:text-purple-400">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-900 border-l border-purple-500/30">
              <nav className="flex flex-col space-y-4 text-white">
                <Link
                  href="/features"
                  className="text-lg font-medium hover:text-purple-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="text-lg font-medium hover:text-purple-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium hover:text-purple-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="text-lg font-medium hover:text-purple-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium hover:text-purple-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <div className="flex flex-col space-y-3 pt-4">
                  <div className="gradient-border">
                    <div className="gradient-border-inner">
                      <Button
                        variant="ghost"
                        asChild
                        className="w-full text-purple-600 font-semibold hover:bg-purple-50"
                      >
                        <a href="https://salescentri.com/get-started/book-demo">Book Demo</a>
                      </Button>
                    </div>
                  </div>
                  <Button asChild className="glow-button text-white font-semibold">
                    <a href="https://salescentri.com/get-started/free-trial">Start Free Trial</a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
