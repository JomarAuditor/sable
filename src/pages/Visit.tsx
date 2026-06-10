import SEOHead from '../components/SEOHead'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { MapPin, Clock, Phone, ArrowUpRight } from 'lucide-react'

// Instagram icon (not available in this version of lucide-react)
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

// Curated photos for Visit page
const VISIT_HERO  = 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1800&q=80&auto=format&fit=crop'
const CAFE_OUT    = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop'
const TABLE_IMG   = 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&q=80&auto=format&fit=crop'

const hours = [
  { days: 'Monday – Friday', time: '7:00 AM – 6:00 PM' },
  { days: 'Saturday',        time: '8:00 AM – 4:00 PM' },
  { days: 'Sunday',          time: '8:00 AM – 4:00 PM' },
]

export default function Visit() {
  const revealA = useScrollReveal() as React.RefObject<HTMLDivElement>
  const revealB = useScrollReveal() as React.RefObject<HTMLDivElement>

  return (
    <>
      <SEOHead
        title="Visit Sable | Hours, Location & Reservations"
        description="Find Sable Cafe — our hours, address, and how to reserve a table. Walk-ins welcome. Designed for lingering."
        path="/visit"
      />

      {/* ── HERO — tall image with text over ─────────────────── */}
      <section className="relative h-[65vh] min-h-[480px] overflow-hidden" aria-labelledby="visit-page-heading">
        <img
          src={VISIT_HERO}
          alt="Sable Cafe — cozy cafe seating with warm light and architectural details"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-forest/85 via-deep-forest/50 to-transparent" />

        <div className="relative z-10 h-full flex items-end px-6 md:px-14 pb-14 md:pb-20">
          <div className="max-w-8xl mx-auto w-full">
            <p className="label-caps text-sage mb-4">Plan Your Visit</p>
            <h1
              id="visit-page-heading"
              className="font-display italic text-cream text-5xl md:text-7xl leading-tight mb-6"
            >
              Find Us
            </h1>
            <p className="text-cream/60 text-sm font-body max-w-xs leading-relaxed">
              Walk-ins are always welcome. For groups or special occasions, a reservation is recommended.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────── */}
      <section
        ref={revealA}
        className="py-20 md:py-32 px-6 md:px-14"
        aria-label="Location and contact information"
      >
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14">

          {/* LEFT — Info blocks */}
          <div className="lg:col-span-5 space-y-14">

            {/* Hours */}
            <article className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <Clock size={16} strokeWidth={1.5} className="text-sage" />
                <h2 className="label-caps text-forest">Hours</h2>
              </div>
              <ul className="space-y-0">
                {hours.map(({ days, time }, i) => (
                  <li
                    key={days}
                    className={`flex items-center justify-between py-4 ${i < hours.length - 1 ? 'border-b border-forest/8' : ''}`}
                  >
                    <span className="text-slate text-sm font-body">{days}</span>
                    <span className="font-display italic text-forest text-base">{time}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Address */}
            <article className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <MapPin size={16} strokeWidth={1.5} className="text-sage" />
                <h2 className="label-caps text-forest">Address</h2>
              </div>
              <address className="not-italic text-slate text-sm font-body leading-relaxed mb-6">
                Sable Cafe<br />
                Philippines
              </address>
              <a
                href="https://maps.google.com/?q=Sable+Cafe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 label-caps text-forest border-b border-forest/30 pb-0.5 hover:border-forest transition-colors"
                aria-label="Open Sable Cafe in Google Maps"
              >
                Open in Maps
                <ArrowUpRight size={12} strokeWidth={1.5} />
              </a>
            </article>

            {/* Contact */}
            <article className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <Phone size={16} strokeWidth={1.5} className="text-sage" />
                <h2 className="label-caps text-forest">Get in Touch</h2>
              </div>
              <div className="space-y-5">
                <div>
                  <p className="label-caps text-sage/60 mb-1">Email</p>
                  <a href="mailto:hello@sablecafe.ph" className="text-forest text-sm font-body hover:underline">
                    hello@sablecafe.ph
                  </a>
                </div>
                <div>
                  <p className="label-caps text-sage/60 mb-1">Instagram</p>
                  <a
                    href="https://instagram.com/sablecafe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-forest text-sm font-body hover:underline"
                  >
                    <InstagramIcon size={13} strokeWidth={1.5} />
                    @sablecafe
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* RIGHT — Map + photos stacked */}
          <div className="lg:col-span-7 flex flex-col gap-5 reveal">
            {/* Map placeholder */}
            <div className="relative bg-cream-dark border border-forest/8 overflow-hidden h-64 md:h-72 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={36} strokeWidth={1} className="text-forest/20 mx-auto mb-3" />
                <p className="label-caps text-forest/30 mb-1">Google Maps Embed</p>
                <p className="text-xs text-slate/40 font-body">
                  Replace with your iframe embed from Google Maps
                </p>
              </div>
              {/*
                To embed a real map:
                1. Go to maps.google.com and find your location
                2. Click Share → Embed a map → Copy HTML
                3. Replace this entire div with:
                   <iframe src="PASTE_URL" width="100%" height="100%"
                     style={{border:0}} allowFullScreen loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                     title="Sable Cafe on Google Maps" />
              */}
            </div>

            {/* Two photos side by side */}
            <div className="grid grid-cols-2 gap-5">
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={TABLE_IMG}
                  alt="Sable Cafe — beautifully set table ready for guests"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={CAFE_OUT}
                  alt="Sable Cafe — welcoming entrance and warm atmosphere"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESERVATIONS — dark full-width band ─────────────── */}
      <section
        ref={revealB}
        className="relative overflow-hidden"
        aria-label="Reservations"
      >
        <div className="bg-deep-forest py-20 md:py-28 px-6 md:px-14">
          <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <p className="label-caps text-sage mb-5">Reservations</p>
              <h2 className="font-display italic text-cream text-4xl md:text-5xl leading-tight mb-6">
                Planning something<br />special?
              </h2>
              <p className="text-cream/50 text-sm leading-relaxed font-body max-w-sm">
                We don't take online reservations, but for groups of 6 or more or for special
                occasions, reach out on Instagram or email and we'll do our best to accommodate you.
              </p>
            </div>

            <div className="reveal flex flex-col gap-4">
              <a
                href="https://instagram.com/sablecafe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 label-caps bg-sage text-forest px-8 py-5 hover:bg-sage-light transition-colors duration-300"
              >
                <InstagramIcon size={15} strokeWidth={1.5} />
                Message on Instagram
              </a>
              <a
                href="mailto:hello@sablecafe.ph"
                className="inline-flex items-center justify-center label-caps text-cream border border-cream/20 px-8 py-5 hover:border-cream transition-colors duration-300"
              >
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
