import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: '01 // Home',  path: '/'      },
  { label: '02 // Menu',  path: '/menu'  },
  { label: '03 // About', path: '/about' },
  { label: '04 // Visit', path: '/visit' },
]

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex flex-col justify-center items-center w-5 h-5" aria-hidden>
      <span className={`
        absolute block h-[1.5px] w-5 bg-current rounded-full
        transition-all duration-300 origin-center
        ${open ? 'rotate-45' : '-translate-y-[5px]'}
      `} />
      <span className={`
        absolute block h-[1.5px] w-5 bg-current rounded-full
        transition-all duration-200
        ${open ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}
      `} />
      <span className={`
        absolute block h-[1.5px] w-5 bg-current rounded-full
        transition-all duration-300 origin-center
        ${open ? '-rotate-45' : 'translate-y-[5px]'}
      `} />
    </span>
  )
}

export default function Navbar() {
  const [open,     setOpen]    = useState(false)
  const [mounted,  setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location               = useLocation()
  const closeRef               = useRef<HTMLButtonElement>(null)

  // Frosted glass on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Drawer side-effects
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      const t = setTimeout(() => setMounted(true), 60)
      setTimeout(() => closeRef.current?.focus(), 120)
      return () => clearTimeout(t)
    } else {
      document.body.style.overflow = ''
      setMounted(false)
    }
  }, [open])

  // Close on route change
  useEffect(() => { setOpen(false) }, [location.pathname])

  // Close on Escape
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', fn)
    return () => document.removeEventListener('keydown', fn)
  }, [])

  return (
    <>
      {/* ── HEADER ──────────────────────────────────────── */}
      <header
        role="banner"
        className={`
          sticky top-0 z-50 w-full h-[70px] md:h-[76px]
          flex items-center
          transition-all duration-300
          ${scrolled
            ? 'bg-cream/96 backdrop-blur-xl border-b border-forest/10 shadow-sm shadow-forest/5'
            : 'bg-cream border-b border-forest/8'
          }
        `}
      >
        <div className="w-full max-w-8xl mx-auto px-5 md:px-12 flex items-center justify-between gap-8">

          {/* Wordmark */}
          <Link
            to="/"
            aria-label="Sable Cafe — home"
            className="font-display italic font-bold text-forest text-[1.75rem] md:text-[2rem] leading-none flex-shrink-0 hover:opacity-70 transition-opacity duration-200"
          >
            Sable
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map(({ label, path }) => {
              const active = location.pathname === path
              const name   = label.split('// ')[1]
              return (
                <Link
                  key={path}
                  to={path}
                  aria-current={active ? 'page' : undefined}
                  className={`
                    group label-caps relative py-1.5 transition-colors duration-200
                    ${active ? 'text-forest' : 'text-slate/60 hover:text-forest'}
                  `}
                >
                  {name}
                  {/* Underline — full width when active, animates in on hover */}
                  <span className={`
                    absolute left-0 -bottom-0.5 h-px bg-forest
                    transition-all duration-300
                    ${active ? 'w-full' : 'w-0 group-hover:w-full'}
                  `} />
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <Link
              to="/visit"
              className="label-caps bg-forest text-cream px-5 py-2.5 hover:bg-mid-forest transition-colors duration-300 whitespace-nowrap"
            >
              Reserve a Table
            </Link>
          </div>

          {/* Mobile hamburger — always forest coloured, never invisible */}
          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden flex items-center justify-center w-10 h-10 text-forest"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-drawer"
          >
            <HamburgerIcon open={open} />
          </button>
        </div>
      </header>

      {/* ── MOBILE BACKDROP ─────────────────────────────── */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={`
          fixed inset-0 z-40 bg-deep-forest/50 backdrop-blur-sm
          transition-opacity duration-300 md:hidden
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      />

      {/* ── MOBILE DRAWER ───────────────────────────────── */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!open}
        className={`
          fixed top-0 right-0 bottom-0 z-50
          w-[min(78vw,300px)]
          bg-deep-forest flex flex-col
          shadow-[-20px_0_60px_rgba(0,20,12,0.6)]
          transition-transform duration-[380ms] ease-[cubic-bezier(0.16,1,0.3,1)]
          md:hidden
          ${open ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Drawer header */}
        <div className="h-[70px] flex items-center justify-between px-6 border-b border-white/[0.07] flex-shrink-0">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="font-display italic font-bold text-cream text-xl leading-none"
          >
            Sable
          </Link>
          <button
            ref={closeRef}
            onClick={() => setOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full text-cream/50 hover:text-cream hover:bg-white/5 transition-all duration-200"
            aria-label="Close menu"
          >
            <HamburgerIcon open={true} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-6 pt-2 pb-2" aria-label="Mobile navigation">
          {navLinks.map(({ label, path }, i) => {
            const active = location.pathname === path
            const name   = label.split('// ')[1]
            const num    = label.split(' //')[0]
            return (
              <Link
                key={path}
                to={path}
                aria-current={active ? 'page' : undefined}
                onClick={() => setOpen(false)}
                className={`
                  group flex items-center justify-between
                  py-4 border-b border-white/[0.06] last:border-0
                  transition-all duration-500
                  ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}
                  ${active ? 'text-cream' : 'text-cream/45 hover:text-cream'}
                `}
                style={{ transitionDelay: mounted ? `${i * 50}ms` : '0ms' }}
              >
                <div className="flex items-center gap-4">
                  <span className="label-caps text-sage/35 text-[0.4rem] tabular-nums leading-none w-4 flex-shrink-0">
                    {num}
                  </span>
                  <div className="flex flex-col gap-[4px]">
                    <span className="font-display italic text-[1.5rem] font-light leading-none tracking-[-0.01em]">
                      {name}
                    </span>
                    <span className={`
                      h-px bg-sage transition-all duration-300
                      ${active ? 'w-5' : 'w-0 group-hover:w-3'}
                    `} />
                  </div>
                </div>
                <svg
                  width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden
                  className={`
                    flex-shrink-0 text-sage/40
                    transition-all duration-300
                    ${active
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-1 group-hover:opacity-50 group-hover:translate-x-0'
                    }
                  `}
                >
                  <path d="M1.5 6.5h10M7.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            )
          })}
        </nav>

        <div className="flex-1" />

        {/* Drawer footer */}
        <div
          className={`
            px-6 pb-8 pt-4 flex-shrink-0 space-y-3
            transition-all duration-500
            ${mounted ? 'opacity-100 translate-y-0 delay-[240ms]' : 'opacity-0 translate-y-3'}
          `}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Quick info strip */}
          <div className="flex items-center justify-between py-2">
            <div className="flex flex-col gap-0.5">
              <span className="label-caps text-sage/40 text-[0.4rem]">Hours today</span>
              <span className="font-display italic text-cream/70 text-sm">7 AM – 6 PM</span>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <div className="flex flex-col gap-0.5 text-right">
              <span className="label-caps text-sage/40 text-[0.4rem]">Google</span>
              <span className="font-display italic text-cream/70 text-sm">4.6 ★</span>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <div className="flex flex-col gap-0.5 text-right">
              <span className="label-caps text-sage/40 text-[0.4rem]">Parking</span>
              <span className="font-display italic text-cream/70 text-sm">Free</span>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* CTA */}
          <Link
            to="/visit"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full label-caps bg-sage text-forest py-3.5 hover:bg-sage-light transition-colors duration-300 tracking-widest text-[0.55rem]"
          >
            Reserve a Table
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
              <path d="M1 5h8M5.5 1.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <p className="text-center label-caps text-cream/20 text-[0.4rem] tracking-[0.15em] pt-0.5">
            66B Broadway Ave, New Manila, QC
          </p>
        </div>
      </div>
    </>
  )
}
