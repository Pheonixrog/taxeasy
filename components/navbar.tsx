'use client'

import Link from "next/link"
import { Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur border-b">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="TaxEasy" className="h-8" />
        </Link>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">HOME</Link>
          <Link href="/company" className="text-sm font-medium hover:text-primary">COMPANY/LLP</Link>
          <Link href="/itr" className="text-sm font-medium hover:text-primary">ITR FILING</Link>
          <Link href="/gst" className="text-sm font-medium hover:text-primary">GST</Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">ABOUT US</Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center">
          <Button variant="default" onClick={toggleMenu} className="p-2">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Desktop Contact Button */}
        <Button variant="default" className="hidden md:flex items-center">
          <Phone className="mr-2 h-4 w-4" />
          <span>9936818000</span>
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 absolute top-16 left-0 w-full p-5 px-5 space-y-4">
          <Link href="/" className="block text-sm font-medium hover:text-primary">HOME</Link>
          <Link href="/company" className="block text-sm font-medium hover:text-primary">COMPANY/LLP</Link>
          <Link href="/itr" className="block text-sm font-medium hover:text-primary">ITR FILING</Link>
          <Link href="/gst" className="block text-sm font-medium hover:text-primary">GST</Link>
          <Link href="/about" className="block text-sm font-medium hover:text-primary">ABOUT US</Link>

          {/* Mobile Contact Button */}
          <Button variant="default" className="flex items-center mt-4">
            <Phone className="mr-2 h-4 w-4" />
            <span>9936818000</span>
          </Button>
        </div>
      )}
    </nav>
  )
}
