import SEOHead from '../components/SEOHead'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { MapPin, Clock, Phone, ArrowUpRight } from 'lucide-react'

function InstagramIcon({ size = 14, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

const IMG = {
  hero:   '/670882235_18568403359048197_5067859567750118668_n.jpg',
  photo1: '/720417232_17890662507550537_4600229101300576405_n.jpg',
  photo2: '/721387579_17890662453550537_6470382880018086177_n.jpg',
}

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
        title="Visit Sable | 66B Broadway Ave, New Manila, Quezon City"
        description="Find Sable Cafe at 66B Broadway Ave, New Manila QC. Open Mon–Fri 7AM–6PM, Sat–Sun 8AM–4PM. Walk-ins welcome. Free parking across the street beside La Creperie."
        path="/visit"
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative h-[60vh] md:h-[65vh] min-h-[380px] overflow-hidden"
        aria-labelledby="visit-heading"
      >
        <img
          src={IMG.hero}
          alt="Sable Cafe — warm architectural interior, New Manila Quezon City"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-forest/90 via-deep-forest/60 to-deep-forest/15" />
        {/* Top vignette keeps transparent navbar text legible */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-deep-forest/50 to-transparent" />
        <div className="relative z-10 h-full flex items-end px-6 md:px-14 pb-12 md:pb-16">
          <div className="max-w-5xl mx-auto w-full">
            <p className="label-caps text-sage mb-3 text-[0.5rem] tracking-[0.28em]">Plan Your Visit</p>
            <h1
              id="visit-heading"
              className="font-display italic text-cream text-[clamp(2.6rem,7vw,4.5rem)] leading-none mb-3"
            >
              Find Us
            </h1>
            <p className="text-cream/55 text-sm font-body max-w-[260px] leading-[1.8]">
              Walk-ins always welcome. Free parking across the street, beside La Creperie.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────── */}
      <section
        ref={revealA}
        className="py-12 md:py-20 px-6 md:px-14"
        aria-label="Location and hours"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">

          {/* LEFT — info blocks */}
          <div className="lg:col-span-4 space-y-8">

            {/* Hours */}
            <article className="reveal">
              <div className="flex items-center gap-2.5 mb-4">
                <Clock size={13} strokeWidth={1.5} className="text-sage flex-shrink-0" />
                <h2 className="label-caps text-forest text-[0.58rem]">Hours</h2>
              </div>
              <ul className="divide-y divide-forest/8">
                {hours.map(({ days, time }) => (
                  <li key={days} className="flex items-baseline justify-between py-3">
                    <span className="text-slate text-sm font-body">{days}</span>
                    <span className="font-display italic text-forest text-[0.95rem] flex-shrink-0 ml-4">
                      {time}
                    </span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Address */}
            <article className="reveal">
              <div className="flex items-center gap-2.5 mb-4">
                <MapPin size={13} strokeWidth={1.5} className="text-sage flex-shrink-0" />
                <h2 className="label-caps text-forest text-[0.58rem]">Address</h2>
              </div>
              <address className="not-italic text-slate text-sm font-body leading-[1.85] mb-4">
                Sable Cafe<br />
                66B Broadway Ave, Mariana<br />
                Quezon City, 1112<br />
                Metro Manila, Philippines
              </address>
              <a
                href="https://maps.google.com/?q=Sable+Cafe+66B+Broadway+Ave+Quezon+City"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 label-caps text-forest border-b border-forest/20 pb-0.5 hover:border-forest transition-colors text-[0.57rem]"
              >
                Open in Google Maps
                <ArrowUpRight size={9} strokeWidth={2} />
              </a>
            </article>

            {/* Contact */}
            <article className="reveal">
              <div className="flex items-center gap-2.5 mb-4">
                <Phone size={13} strokeWidth={1.5} className="text-sage flex-shrink-0" />
                <h2 className="label-caps text-forest text-[0.58rem]">Get in Touch</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="label-caps text-sage/50 mb-1 text-[0.5rem]">Email</p>
                  <a
                    href="mailto:hello@sablecafe.ph"
                    className="text-forest text-sm font-body hover:underline"
                  >
                    hello@sablecafe.ph
                  </a>
                </div>
                <div>
                  <p className="label-caps text-sage/50 mb-1 text-[0.5rem]">Instagram</p>
                  <a
                    href="https://www.instagram.com/sable.mnl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-forest text-sm font-body hover:underline"
                  >
                    <InstagramIcon size={11} strokeWidth={1.5} />
                    @sable.mnl
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* RIGHT — map + photos */}
          <div className="lg:col-span-8 flex flex-col gap-3 reveal">

            {/* Google Maps embed */}
            <div className="overflow-hidden border border-forest/8 w-full flex-shrink-0" style={{ height: '320px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.59499143436!2d121.02419267434718!3d14.622132876550637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b79e00aa0881%3A0xb73d847fcb614982!2sSable!5e0!3m2!1sen!2sph!4v1781114578153!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sable Cafe on Google Maps — 66B Broadway Ave, New Manila, Quezon City"
              />
            </div>

            {/* Two photos — equal height, 4:3 */}
            <div className="grid grid-cols-2 gap-3">
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={IMG.photo1}
                  alt="Sable Cafe interior — warm architectural space in New Manila"
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={IMG.photo2}
                  alt="Sable Cafe — carefully designed seating with natural light"
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESERVATIONS ─────────────────────────────────── */}
      <section
        ref={revealB}
        className="bg-deep-forest py-14 md:py-20 px-6 md:px-14"
        aria-label="Reservations"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">

          <div className="reveal">
            <p className="label-caps text-sage mb-3 text-[0.5rem]">Reservations</p>
            <h2 className="font-display italic text-cream text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.1] mb-4">
              Planning something<br />special?
            </h2>
            <p className="text-cream/45 text-sm leading-[1.85] font-body max-w-[280px]">
              We don't take online bookings, but for parties of 6 or more, just message
              us on Instagram or send an email and we'll sort you out.
            </p>
          </div>

          <div className="reveal flex flex-col gap-2.5">
            <a
              href="https://www.instagram.com/sable.mnl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 label-caps bg-sage text-forest px-6 py-3.5 hover:bg-sage-light transition-colors duration-300"
            >
              <InstagramIcon size={13} strokeWidth={1.5} />
              Message on Instagram
            </a>
            <a
              href="mailto:hello@sablecafe.ph"
              className="inline-flex items-center justify-center label-caps text-cream border border-cream/15 px-6 py-3.5 hover:border-cream/35 transition-colors duration-300"
            >
              Send an Email
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
