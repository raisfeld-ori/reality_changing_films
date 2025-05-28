"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between h-20">
          <div className="flex items-center space-x-8 space-x-reverse">
            <Link href={'/'} className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600 cursor-pointer">קולנוע משנה מציאות</span>
            </Link>
            <div className="hidden md:flex sm:space-x-8 sm:space-x-reverse">
              <Link
                href="/about"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-20"
              >
                לגבינו
              </Link>
              <Link
                href="/workshops"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-20"
              >
                סדנאות משחק
              </Link>
              <Link
                href={"/movies"}
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-20"
              >
                כל הסרטים
              </Link>
                <Link
                href={"/reccomended"}
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-20"
              >
                המלצות
              </Link>
              <Link
                href="/contact"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-20"
              >
                דברו איתנו
              </Link>
            </div>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">פתח תפריט</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      >
        <div
          className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl overflow-y-auto transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-4 py-6">
            <div className="flex items-center justify-around">
              <span className="text-2xl font-bold text-blue-600">קולנוע משנה מציאות</span>
              <button
                onClick={closeMobileMenu}
                className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">סגור תפריט</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6">
              <Link
                href="/"
                className="block py-4 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-blue-600"
                onClick={closeMobileMenu}
              >
                דף הבית
              </Link>
              <Link
                href="/about"
                className="block py-4 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-blue-600"
                onClick={closeMobileMenu}
              >
                אודות
              </Link>
              <Link
                href="/workshops"
                className="block py-4 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-blue-600"
                onClick={closeMobileMenu}
              >
                סדנאות משחק
              </Link>
              <Link
                href="/contact"
                className="block py-4 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-blue-600"
                onClick={closeMobileMenu}
              >
                דברו איתנו
              </Link>
              <Link
                href="/reccomended"
                className="block py-4 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-blue-600"
                onClick={closeMobileMenu}
              >
                המלצות
              </Link>
              <Link
              href={"/movies"}
              className="block py-4 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-blue-600"
              onClick={closeMobileMenu}>סרטים
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}