import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Menu',  path: '/menu'  },
  { label: 'About', path: '/about' },
  { label: 'Visit', path: '/visit' },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location                = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <>
      <header
        className={`
          sticky top-0 z-50 w-full h-20 flex items-center
          transition-all duration-500
          ${scrolled
            ? 'bg-cream/90 backdrop-blur-md shadow-sm shadow-forest/5 border-b border-forest/8'
            : 'bg-transparent border-b border-transparent'
          }
        `}
        role="banner"
      >
        <div className="w-full max-w-8xl mx-auto px-6 md:px-14 flex items-center justify-between">

          {/* Wordmark — text fallback if logo missing */}
          <Link to="/" aria-label="Sable Cafe — home" className="flex items-center gap-3">
            <img
              src="/sable-logo.png"
              alt="Sable"
              className="h-9 w-auto"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
            <span className="font-display italic text-forest text-2xl leading-none">Sable</span>
          </Link>

          {/* Desktop nav — pill-style active */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map(({ label, path }) => {
              const active = location.pathname === path
              return (
                <Link
                  key={path}
                  to={path}
                  className={`
                    label-caps px-4 py-2 rounded-none transition-all duration-200
                    ${active
                      ? 'text-forest bg-forest/8'
                      : 'text-slate hover:text-forest hover:bg-forest/5'
                    }
                  `}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/visit"
              className="hidden md:inline-flex label-caps bg-forest text-cream px-5 py-2.5 hover:bg-mid-forest transition-colors duration-200"
            >
              Reserve
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-forest"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen drawer */}
      <div
        id="mobile-menu"
        className={`
          fixed inset-0 z-40 bg-deep-forest flex flex-col
          transition-transform duration-500
          ${open ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}
        aria-hidden={!open}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-sage/10">
          <span className="font-display italic text-cream text-2xl">Sable</span>
          <button onClick={() => setOpen(false)} className="p-2 text-cream" aria-label="Close menu">
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        <nav className="flex-1 flex flex-col justify-center px-8 gap-0" aria-label="Mobile navigation">
          {navLinks.map(({ label, path }, i) => (
            <Link
              key={path}
              to={path}
              className="group flex items-end justify-between py-8 border-b border-sage/10 last:border-b-0"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="font-display italic text-cream text-4xl font-light">{label}</span>
              <span className="label-caps text-sage/40 text-[0.6rem] pb-2">0{i + 1}</span>
            </Link>
          ))}
        </nav>

        <div className="px-8 pb-14">
          <Link
            to="/visit"
            className="block w-full text-center label-caps bg-sage text-forest py-4 hover:bg-sage-light transition-colors duration-300"
          >
            Reserve a Table
          </Link>
          <p className="label-caps text-sage/30 text-center mt-6 text-[0.6rem]">
            Sable Cafe — Designed for Lingering
          </p>
        </div>
      </div>
    </>
  )
}
