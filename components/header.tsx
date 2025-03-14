"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Program Structure", path: "/program-structure" },
    { name: "Impact", path: "/impact" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
        <img src="/iu_logo.png" alt="Logo" className="h-8 w-8"/>
          <span className="text-xl font-bold text-[#990000]">Experience to Impact</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#990000]",
                pathname === item.path ? "text-[#990000] font-bold" : "text-[#333333]",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link href="/contact">
            <Button className="bg-[#990000] hover:bg-[#7A0000] text-white">Get Involved</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-white">
          <nav className="container flex flex-col gap-4 p-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "py-2 text-lg font-medium transition-colors hover:text-[#990000]",
                  pathname === item.path ? "text-[#990000] font-bold" : "text-[#333333]",
                )}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4">
              <Link href="/contact" onClick={closeMenu}>
                <Button className="w-full bg-[#990000] hover:bg-[#7A0000] text-white">Get Involved</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

