import { Link } from 'react-router-dom'
import { ArrowRight, ArrowDown } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { featuredItems } from '../data/menu'
import { useScrollReveal } from '../hooks/useScrollReveal'

// High-quality Unsplash images — cafe, coffee, food
const HERO_IMG       = 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=80&auto=format&fit=crop'
const COFFEE_POUR    = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80&auto=format&fit=crop'
const BRUNCH_IMG     = 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=900&q=80&auto=format&fit=crop'
const INTERIOR_IMG   = 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1200&q=80&auto=format&fit=crop'
const ESPRESSO_IMG   = 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=700&q=80&auto=format&fit=crop'

export default function Home() {
  const revealRef   = useScrollReveal() as React.RefObject<HTMLDivElement>
  const revealRef2  = useScrollReveal() as React.RefObject<HTMLDivElement>
  const revealRef3  = useScrollReveal() as React.RefObject<HTMLDivElement>

  return (
    <>
      <SEOHead
        title="Sable Cafe | Specialty Coffee & Brunch in the Philippines"
        description="Sable is an architectural cafe serving handcrafted specialty coffee, brunch plates, and fresh bakes. Designed for lingering — come stay an afternoon."
        path="/"
      />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[680px] overflow-hidden" aria-label="Welcome to Sable">
        {/* Full-bleed hero image */}
        <img
          src={HERO_IMG}
          alt="Sable Cafe warm interior with wooden tables and soft lighting"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        {/* Deep gradient overlay — bottom-heavy for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/90 via-deep-forest/30 to-transparent" />

        {/* Hero content — anchored to bottom-left */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-16 md:pb-20">
          <div className="max-w-8xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="label-caps text-sage mb-5 tracking-widest">The Architectural Cafe — Est. 2024</p>
              <h1 className="font-display italic font-normal text-cream leading-[1.1] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                Handcrafted<br />
                <span className="text-sage">coffee</span> &amp; slow<br />
                mornings.
              </h1>
            </div>
            <div className="md:max-w-xs pb-2">
              <p className="text-cream/60 text-sm leading-relaxed font-body mb-6">
                A space designed for lingering — 1.5 to 4 hours of warm, unhurried comfort in the heart of the Philippines.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/menu"
                  className="label-caps bg-sage text-forest px-6 py-3 hover:bg-sage-light transition-colors duration-300"
                >
                  View Menu
                </Link>
                <Link
                  to="/about"
                  className="label-caps text-cream border border-cream/30 px-6 py-3 hover:border-cream transition-colors duration-300"
                >
                  Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 md:right-14 flex flex-col items-center gap-2 text-cream/40">
          <span className="label-caps text-[0.55rem] tracking-widest rotate-90 mb-1">scroll</span>
          <ArrowDown size={14} strokeWidth={1.5} className="animate-bounce" />
        </div>
      </section>

      {/* ── MARQUEE STRIP ────────────────────────────────────── */}
      <div className="bg-forest text-cream overflow-hidden py-4 border-y border-sage/10">
        <div className="marquee-track flex gap-0 whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="label-caps text-cream/50 px-8 flex-shrink-0">
              Specialty Coffee &nbsp;·&nbsp; All-Day Brunch &nbsp;·&nbsp; Fresh Bakes &nbsp;·&nbsp; Designed for Lingering &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── EDITORIAL SPLIT — Coffee story ──────────────────── */}
      <section
        ref={revealRef}
        className="py-24 md:py-36 px-6 md:px-14 max-w-8xl mx-auto"
        aria-labelledby="editorial-heading"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-center">
          {/* Large image — 7 cols */}
          <div className="md:col-span-7 reveal">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={COFFEE_POUR}
                alt="Barista pouring latte art — a slow, careful pour"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Caption badge */}
              <div className="absolute bottom-5 left-5 bg-cream px-4 py-2">
                <p className="label-caps text-forest text-[0.6rem]">Pulled to order — every time</p>
              </div>
            </div>
          </div>

          {/* Text — 5 cols, vertically centered */}
          <div className="md:col-span-5 md:pl-8 reveal">
            <p className="label-caps text-sage mb-6">The Coffee</p>
            <h2
              id="editorial-heading"
              className="font-display italic text-forest text-4xl md:text-5xl leading-tight mb-8"
            >
              Every cup<br />is a<br />slow pour.
            </h2>
            <p className="text-slate text-sm leading-relaxed font-body mb-8 max-w-sm">
              We work with direct-trade beans and pull every shot to order. No pre-brewed carafe, no shortcuts.
              Just the ritual of a properly made cup, every single time.
            </p>
            <Link
              to="/menu"
              className="inline-flex items-center gap-3 label-caps text-forest group"
            >
              See our coffee menu
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED MENU — asymmetric masonry ──────────────── */}
      <section
        ref={revealRef2}
        className="bg-cream-dark py-24 md:py-32 px-6 md:px-14"
        aria-labelledby="featured-heading"
      >
        <div className="max-w-8xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 reveal">
            <div>
              <p className="label-caps text-sage mb-3">From the Kitchen</p>
              <h2
                id="featured-heading"
                className="font-display italic text-forest text-4xl md:text-5xl"
              >
                Worth Ordering
              </h2>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 label-caps text-forest group self-start md:self-auto"
            >
              Full Menu
              <ArrowRight size={13} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Bento-style grid — intentionally uneven */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
            {/* Large feature card */}
            <div className="lg:col-span-5 reveal">
              <div className="relative overflow-hidden aspect-[3/4] bg-forest group">
                <img
                  src={BRUNCH_IMG}
                  alt="Sable brunch plate — beautifully plated food"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="label-caps text-sage mb-2">Signature Plate</p>
                  <h3 className="font-display italic text-cream text-2xl mb-1">Short Rib Shawarma</h3>
                  <p className="text-cream/60 text-xs font-body mb-4">Beef Short Ribs · Spiced Pilaf · Grilled Tomatoes</p>
                  <p className="label-caps text-sage text-sm">₱625</p>
                </div>
              </div>
            </div>

            {/* Right column — stacked smaller cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Top wide card with image */}
              <div className="sm:col-span-2 reveal">
                <div className="relative overflow-hidden bg-warm-white border border-forest/6 group flex flex-col sm:flex-row h-full min-h-[200px]">
                  <div className="sm:w-[45%] overflow-hidden flex-shrink-0">
                    <img
                      src={ESPRESSO_IMG}
                      alt="Biscoff latte — Sable signature drink"
                      className="w-full h-48 sm:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <p className="label-caps text-sage mb-2">Most Ordered</p>
                    <h3 className="font-display italic text-forest text-2xl mb-2">Biscoff Latte</h3>
                    <p className="text-slate text-xs font-body mb-4 leading-relaxed">Our most-ordered signature drink — rich, spiced, and impossibly smooth.</p>
                    <p className="label-caps text-forest">₱230</p>
                  </div>
                </div>
              </div>

              {/* Two small menu cards */}
              {featuredItems.slice(1, 3).map((item) => (
                <div key={item.id} className="reveal bg-warm-white border border-forest/6 p-6 hover:bg-cream-dark transition-colors duration-300">
                  <h3 className="font-display italic text-forest text-xl mb-2 leading-snug">{item.name}</h3>
                  {item.description && (
                    <p className="text-slate text-xs font-body leading-relaxed mb-4 line-clamp-2">{item.description}</p>
                  )}
                  <p className="label-caps text-forest">₱{item.price.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ATMOSPHERE — full-bleed dark section ─────────────── */}
      <section
        ref={revealRef3}
        className="relative overflow-hidden"
        aria-labelledby="atmosphere-heading"
      >
        {/* Full bleed image with overlay */}
        <div className="relative h-[70vh] min-h-[500px]">
          <img
            src={INTERIOR_IMG}
            alt="Sable Cafe interior — warm ambient lighting, architectural details"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-deep-forest/75" />

          <div className="relative z-10 h-full flex items-center px-6 md:px-14">
            <div className="max-w-8xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <p className="label-caps text-sage mb-5">The Spatial Narrative</p>
                <h2
                  id="atmosphere-heading"
                  className="font-display italic text-cream text-4xl md:text-6xl leading-tight mb-8"
                >
                  1.5 to 4 hours.<br />
                  <span className="text-sage/80">The intentional</span><br />
                  intermission.
                </h2>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 label-caps text-sage border-b border-sage/40 pb-1 hover:text-cream hover:border-cream transition-colors duration-300 group"
                >
                  Explore Our Space
                  <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Stats */}
              <div className="reveal grid grid-cols-2 gap-6">
                {[
                  { num: '100%', label: 'Direct-trade coffee' },
                  { num: 'Daily', label: 'Fresh bakes &amp; plates' },
                  { num: '4 hrs', label: 'Max intended stay' },
                  { num: '2024', label: 'Year we opened' },
                ].map(({ num, label }) => (
                  <div key={label} className="border border-sage/10 p-6">
                    <p
                      className="font-display italic text-cream text-3xl mb-2"
                      dangerouslySetInnerHTML={{ __html: num }}
                    />
                    <p
                      className="label-caps text-sage/60 text-[0.6rem]"
                      dangerouslySetInnerHTML={{ __html: label }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISIT CTA — light, minimal ───────────────────────── */}
      <section
        className="py-20 md:py-24 px-6 md:px-14"
        aria-labelledby="visit-cta-heading"
      >
        <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div>
            <h2
              id="visit-cta-heading"
              className="font-display italic text-forest text-3xl md:text-5xl mb-3"
            >
              Ready to linger?
            </h2>
            <p className="text-slate text-sm font-body max-w-sm">
              Walk in or plan ahead. We'd love to have you stay a while.
            </p>
          </div>

          {/* Hours preview */}
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-10 text-sm font-body">
            <div className="border-l-2 border-sage pl-4">
              <p className="label-caps text-sage mb-1">Weekdays</p>
              <p className="text-forest font-medium">7:00 AM – 6:00 PM</p>
            </div>
            <div className="border-l-2 border-sage pl-4">
              <p className="label-caps text-sage mb-1">Weekends</p>
              <p className="text-forest font-medium">8:00 AM – 4:00 PM</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              to="/visit"
              className="text-center label-caps bg-forest text-cream px-8 py-4 hover:bg-mid-forest transition-colors duration-300"
            >
              Get Directions
            </Link>
            <Link
              to="/menu"
              className="text-center label-caps text-forest border border-forest/30 px-8 py-4 hover:border-forest transition-colors duration-300"
            >
              Browse Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
