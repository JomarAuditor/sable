import { Link } from 'react-router-dom'
import { MapPin, Clock } from 'lucide-react'

// Instagram icon (not available in this version of lucide-react)
function InstagramIcon({ size = 14, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

const navLinks = [
  { label: 'Menu',    path: '/menu'  },
  { label: 'About',   path: '/about' },
  { label: 'Visit',   path: '/visit' },
]

export default function Footer() {
  return (
    <footer className="bg-deep-forest text-cream" role="contentinfo">
      {/* Main grid */}
      <div className="max-w-8xl mx-auto px-5 md:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-sage/10 pb-14">

          {/* Brand column */}
          <div className="md:col-span-5">
            <img
              src="/sable-logo.png"
              alt="Sable"
              className="h-10 w-auto brightness-0 invert mb-6"
            />
            <p className="text-cream/60 text-sm leading-relaxed max-w-xs font-body">
              An architectural cafe designed for lingering. Handcrafted coffee, comforting meals,
              and fresh bakes served daily.
            </p>
            <a
              href="https://instagram.com/sablecafe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sage hover:text-cream transition-colors label-caps"
              aria-label="Sable on Instagram"
            >
              <InstagramIcon size={14} strokeWidth={1.5} />
              @sablecafe
            </a>
          </div>

          {/* Navigate */}
          <div className="md:col-span-3">
            <p className="label-caps text-sage mb-5">Navigate</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-cream/60 hover:text-cream text-sm font-body transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="md:col-span-4">
            <p className="label-caps text-sage mb-5">Location & Hours</p>
            <div className="flex items-start gap-3 mb-4">
              <MapPin size={14} className="text-sage mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <address className="not-italic text-cream/60 text-sm font-body leading-relaxed">
                {/* Update with real address */}
                Sable Cafe<br />
                Philippines
              </address>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={14} className="text-sage mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div className="text-cream/60 text-sm font-body">
                <p>Mon – Fri: 7:00 AM – 6:00 PM</p>
                <p>Sat – Sun: 8:00 AM – 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="label-caps text-cream/30">
            © {new Date().getFullYear()} Sable Cafe. All rights reserved.
          </p>
          <p className="label-caps text-cream/20">
            Designed for Lingering
          </p>
        </div>
      </div>
    </footer>
  )
}