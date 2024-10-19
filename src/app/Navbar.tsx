"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

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
    setIsDropdownOpen(false)
  }

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between h-20">
          <div className="flex items-center space-x-8 space-x-reverse">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600 cursor-default">קולנוע משנה מציאות</span>
            </div>
            <div className="hidden sm:flex sm:space-x-8 sm:space-x-reverse">
              <Link
                href="/"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-20"
              >
                דף הבית
              </Link>
              <Link
                href="/about"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-20"
              >
                אודות
              </Link>
              <div className="relative h-20 flex items-center">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium focus:outline-none h-full"
                >
                  סרטים
                  <ChevronDown className="mr-1 h-4 w-4" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 top-full mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 cursor-pointer">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <a href="/movies/first" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">פנתר לבן</a>
                      <a href="/movies/second" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">אל תחכי לי</a>
                      <a href="/movies/third" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">אמצע החיים</a>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/workshops"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-20"
              >
                סדנאות משחק
              </Link>
              <Link
                href="/contact"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-20"
              >
                דברו איתנו
              </Link>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
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
            <div className="flex items-center justify-between">
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
                className="block py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-blue-600"
                onClick={closeMobileMenu}
              >
                דף הבית
              </Link>
              <Link
                href="/about"
                className="block py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-blue-600"
                onClick={closeMobileMenu}
              >
                אודות
              </Link>
              <div>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-between w-full py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-blue-600"
                >
                  סרטים
                  <ChevronDown className={`h-5 w-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isDropdownOpen && (
                  <div className="pr-4">
                    <Link
                      href="/movies/first"
                      className="block py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-blue-600"
                      onClick={closeMobileMenu}
                    >
                      פנתר לבן
                    </Link>
                    <Link
                      href="/movies/second"
                      className="block py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-blue-600"
                      onClick={closeMobileMenu}
                    >
                      אל תחכי לי
                    </Link>
                    <Link
                      href="/movies/third"
                      className="block py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-blue-600"
                      onClick={closeMobileMenu}
                    >
                      אמצע החיים
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/workshops"
                className="block py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-blue-600"
                onClick={closeMobileMenu}
              >
                סדנאות משחק
              </Link>
              <Link
                href="/contact"
                className="block py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-blue-600"
                onClick={closeMobileMenu}
              >
                דברו איתנו
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}