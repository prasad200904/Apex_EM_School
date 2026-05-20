import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, GraduationCap } from '../icons'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/academics', label: 'Academics' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-glass
      ${scrolled ? 'bg-[#1E3A8A]/95 shadow-2xl py-2' : 'bg-[#1E3A8A] py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#F97316] flex items-center justify-center shadow-lg
            group-hover:scale-110 transition-transform">
            <GraduationCap size={22} className="text-white" />
          </div>
          <div>
            <p className="font-display text-white font-bold text-lg leading-tight">Apex School</p>
            <p className="text-orange-300 text-xs font-body tracking-wide">TM & EM · Vijayawada</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium font-body transition-all duration-200
                ${pathname === l.to
                  ? 'bg-[#F97316] text-white shadow-md'
                  : 'text-blue-100 hover:bg-white/10 hover:text-white'}`}>
              {l.label}
            </Link>
          ))}
          <Link to="/admissions"
            className="ml-3 px-5 py-2 rounded-xl bg-[#F97316] text-white font-semibold text-sm
              shadow-lg hover:bg-orange-400 transition-all hover:scale-105 font-body">
            Apply Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(v => !v)}
          className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1E3A8A] border-t border-blue-700 px-4 py-4 space-y-1">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className={`block px-4 py-3 rounded-xl text-sm font-medium font-body transition-colors
                ${pathname === l.to
                  ? 'bg-[#F97316] text-white'
                  : 'text-blue-100 hover:bg-white/10 hover:text-white'}`}>
              {l.label}
            </Link>
          ))}
          <Link to="/admissions"
            className="block mt-2 px-4 py-3 rounded-xl bg-[#F97316] text-white font-semibold text-sm text-center font-body">
            Apply Now →
          </Link>
        </div>
      )}
    </header>
  )
}
