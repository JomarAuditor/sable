import { Link } from 'react-router-dom'
import { MapPin, Clock } from 'lucide-react'

function InstagramIcon({ size = 14, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

const navLinks = [
  { label: 'Menu',  path: '/menu'  },
  { label: 'About', path: '/about' },
  { label: 'Visit', path: '/visit' },
]

export default function Footer() {
  return (
    <footer className="bg-deep-forest text-cream" role="contentinfo">
      <div className="max-w-8xl mx-auto px-6 md:px-14 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-sage/10 pb-14">

          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/sable-logo.jpg"
                alt="Sable Cafe logo"
                className="h-12 w-12 object-cover rounded-sm flex-shrink-0"
              />
            </div>
            <p className="text-cream/60 text-sm leading-relaxed max-w-xs font-body mb-6">
              Specialty coffee, all-day brunch, and fresh bakes on Broadway Ave, New Manila.
              A space built for slow mornings and long afternoons.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/sable.mnl/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sage hover:text-cream transition-colors label-caps"
                aria-label="Sable on Instagram"
              >
                <InstagramIcon size={14} strokeWidth={1.5} />
                @sable.mnl
              </a>
              <span className="text-sage/20">·</span>
              <a
                href="https://maps.google.com/?q=Sable+Cafe+66B+Broadway+Ave+Quezon+City"
                target="_blank"
                rel="noopener noreferrer"
                className="label-caps text-sage/60 hover:text-sage transition-colors"
              >
                4.6 ★ Google
              </a>
            </div>
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
            <div className="flex items-start gap-3 mb-5">
              <MapPin size={14} className="text-sage mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <address className="not-italic text-cream/60 text-sm font-body leading-relaxed">
                66B Broadway Ave, Mariana<br />
                Quezon City, 1112<br />
                Metro Manila, Philippines
              </address>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={14} className="text-sage mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div className="text-cream/60 text-sm font-body space-y-1">
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
            Designed for Lingering — New Manila, QC
          </p>
        </div>
      </div>
    </footer>
  )
}
