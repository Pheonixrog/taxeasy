'use client'

import Link from "next/link"
import { Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed px-5 top-0 w-full z-50 bg-white/95 backdrop-blur  border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="TaxEasy" className="h-8" />
          {/* <span className="font-bold text-xl">TaxEasy</span> */}
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">HOME</Link>
          <Link href="/company" className="text-sm font-medium hover:text-primary">COMPANY/LLP</Link>
          <Link href="/itr" className="text-sm font-medium hover:text-primary">ITR FILING</Link>
          <Link href="/gst" className="text-sm font-medium hover:text-primary">GST</Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">ABOUT US</Link>
        </div>

        <Button variant="default" className="hidden md:flex items-center">
          <Phone className="mr-2 h-4 w-4" />
          <span>9936818000</span>
        </Button>
      </div>
    </nav>
  )
}

