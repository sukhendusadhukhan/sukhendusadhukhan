import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'About' },
  { to: '/resume', label: 'Experience' },
  { to: '/publications', label: 'Publications' },
  { to: '/skills', label: 'Skills' },
  { to: '/awards', label: 'Awards' },
  { to: '/conferences', label: 'Conferences' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex flex-col leading-tight">
            <span className="font-bold text-gray-900 text-sm sm:text-base">Dr. Sukhendu Sadhukhan</span>
            <span className="text-xs text-blue-600 hidden sm:block">Post-Doctoral Researcher | ENS Paris Saclay</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
                activeProps={{ className: 'px-3 py-2 text-sm font-medium text-blue-700 bg-blue-50 rounded-md' }}
                activeOptions={{ exact: link.to === '/' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
              activeProps={{ className: 'block px-3 py-2 text-sm font-medium text-blue-700 bg-blue-50 rounded-md' }}
              activeOptions={{ exact: link.to === '/' }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
