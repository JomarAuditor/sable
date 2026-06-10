import { Link } from 'react-router-dom'
import { ArrowRight, ArrowDown } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { featuredItems } from '../data/menu'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Reviews from '../components/Reviews'

// ── Sable's own photos ─────────────────────────────────────
const IMG = {
  hero:       '/sable-herosection.jpeg',
  coffee:     '/coffe1.jpeg',
  // food cards — Unsplash fallbacks that match the real dishes
  shawarma:   'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&q=80&auto=format&fit=crop',
  latte:      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80&auto=format&fit=crop',
  interior:   '/720552879_17890662486550537_9219130583994617631_n.jpg',
  // Instagram grid — 6 real photos from the folder
  ig1:        '/670879813_18568403458048197_639013006030162895_n.jpg',
  ig2:        '/670284721_18568403440048197_5978667719147001314_n.jpg',
  ig3:        '/670278566_18568403413048197_1321101747856156077_n.jpg',
  ig4:        '/622613243_17939322804126663_377302319621215862_n.jpg',
  ig5:        '/622290320_17939322795126663_8863688168724775314_n.jpg',
  ig6:        '/622224497_17939322777126663_3451149241024676410_n.jpg',
}

export default function Home() {
  const revealRef  = useScrollReveal() as React.RefObject<HTMLDivElement>
  const revealRef2 = useScrollReveal() as React.RefObject<HTMLDivElement>
  const revealRef3 = useScrollReveal() as React.RefObject<HTMLDivElement>

  return (
    <>
      <SEOHead
        title="Sable Cafe | Specialty Coffee & All-Day Brunch — New Manila, QC"
        description="Sable is an architectural café at 66B Broadway Ave, New Manila. Direct-trade espresso, signature lattes, all-day brunch plates, and fresh bakes. Walk-ins welcome. 4.6 ★ on Google."
        path="/"
      />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative h-[100svh] min-h-[600px] overflow-hidden" aria-label="Welcome to Sable">
        <img
          src={IMG.hero}
          alt="Sable Cafe — architectural interior with warm amber lighting, New Manila QC"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/95 via-deep-forest/40 to-deep-forest/10" />

        <div className="absolute inset-x-0 bottom-0 px-6 md:px-14 pb-14 md:pb-20">
          <div className="max-w-8xl mx-auto">
            <p className="label-caps text-sage mb-4 tracking-[0.25em]">
              New Manila, Quezon City — Est. 2025
            </p>
            <h1 className="font-display italic font-normal text-cream leading-[1.05] text-[clamp(2.8rem,8vw,5.5rem)] mb-6">
              Handcrafted <span className="text-sage">coffee</span><br />
              &amp; slow mornings.
            </h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <Link to="/menu" className="label-caps bg-sage text-forest px-7 py-3.5 hover:bg-sage-light transition-colors duration-300">
                View Menu
              </Link>
              <Link to="/about" className="label-caps text-cream/80 hover:text-cream flex items-center gap-2 group transition-colors duration-300">
                Our Story
                <ArrowRight size={13} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 md:right-14 flex flex-col items-center gap-1.5 text-cream/30" aria-hidden>
          <ArrowDown size={13} strokeWidth={1.5} className="animate-bounce" />
          <span className="label-caps text-[0.5rem] tracking-widest" style={{ writingMode: 'vertical-rl' }}>scroll</span>
        </div>
      </section>

      {/* ── MARQUEE ───────────────────────────────────────── */}
      <div className="bg-forest overflow-hidden py-3.5 border-y border-sage/10" aria-hidden>
        <div className="marquee-track flex whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="label-caps text-cream/40 px-6 flex-shrink-0 text-[0.55rem] tracking-[0.3em]">
              SPECIALTY COFFEE &nbsp;·&nbsp; ALL-DAY BRUNCH &nbsp;·&nbsp; FRESH BAKES &nbsp;·&nbsp; NEW MANILA &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── COFFEE EDITORIAL ──────────────────────────────── */}
      <section ref={revealRef} className="py-20 md:py-32 px-6 md:px-14 max-w-8xl mx-auto" aria-labelledby="coffee-heading">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-7 reveal">
            <div className="relative overflow-hidden aspect-[4/3] md:aspect-[16/11]">
              <img
                src={IMG.coffee}
                alt="Sable barista crafting a specialty pour — direct-trade coffee, pulled to order"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-deep-forest/50 to-transparent" />
              <span className="absolute bottom-5 left-5 label-caps text-cream/80 text-[0.55rem] tracking-widest bg-forest/60 backdrop-blur-sm px-3 py-1.5">
                Pulled to order — every time
              </span>
            </div>
          </div>

          <div className="md:col-span-5 md:pl-6 reveal">
            <p className="label-caps text-sage mb-5">The Coffee</p>
            <h2 id="coffee-heading" className="font-display italic text-forest text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] mb-6">
              Every cup<br />is a ritual.
            </h2>
            <p className="text-slate text-sm leading-[1.8] font-body mb-8 max-w-[340px]">
              Direct-trade beans — fruity or chocolatey, your call. Every shot pulled fresh,
              no pre-brewed carafe, no compromises.
            </p>
            <Link to="/menu" className="inline-flex items-center gap-3 label-caps text-forest group">
              Explore the drinks menu
              <ArrowRight size={13} strokeWidth={1.5} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED — bento grid ─────────────────────────── */}
      <section ref={revealRef2} className="bg-cream-dark py-14 md:py-20 px-6 md:px-14" aria-labelledby="featured-heading">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="flex items-end justify-between mb-7 md:mb-9 reveal">
            <div>
              <p className="label-caps text-sage mb-1.5">From the Kitchen</p>
              <h2 id="featured-heading" className="font-display italic text-forest text-[clamp(1.6rem,3vw,2.4rem)]">
                Worth Ordering
              </h2>
            </div>
            <Link to="/menu" className="hidden sm:inline-flex items-center gap-2 label-caps text-forest/70 hover:text-forest group transition-colors duration-200">
              Full Menu
              <ArrowRight size={11} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-2">

            {/* Large photo card — Short Rib Shawarma */}
            <div className="sm:col-span-1 lg:col-span-5 reveal">
              <div
                className="relative overflow-hidden bg-deep-forest w-full"
                style={{ aspectRatio: '3/4' }}
              >
                <img
                  src={IMG.shawarma}
                  alt="Short Rib Shawarma — Sable's signature plate"
                  className="w-full h-full object-cover opacity-80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/92 via-deep-forest/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="label-caps text-sage mb-1 text-[0.48rem]">Signature Plate</p>
                  <h3 className="font-display italic text-cream text-xl mb-1 leading-tight">
                    Short Rib Shawarma
                  </h3>
                  <p className="text-cream/50 text-[0.68rem] font-body mb-2 leading-relaxed">
                    Beef Short Ribs · Spiced Pilaf Rice · Grilled Tomatoes
                  </p>
                  <p className="label-caps text-sage text-[0.58rem]">₱625</p>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="sm:col-span-1 lg:col-span-7 grid grid-rows-2 gap-2">

              {/* Biscoff Latte — horizontal with image */}
              <div className="reveal">
                <div className="bg-warm-white border border-forest/6 flex flex-row h-full min-h-[130px]">
                  <div className="w-[36%] flex-shrink-0 overflow-hidden">
                    <img
                      src={IMG.latte}
                      alt="Biscoff Latte — Sable's most-ordered signature drink"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 px-4 py-4 flex flex-col justify-center gap-1">
                    <p className="label-caps text-sage text-[0.48rem]">Most Ordered</p>
                    <h3 className="font-display italic text-forest text-lg leading-tight">
                      Biscoff Latte
                    </h3>
                    <p className="text-slate text-[0.68rem] font-body leading-relaxed line-clamp-2">
                      Rich, spiced, and impossibly smooth — our regulars rarely order anything else first.
                    </p>
                    <p className="label-caps text-forest text-[0.58rem] mt-1">₱230</p>
                  </div>
                </div>
              </div>

              {/* Two small cards — side by side, no justify-between */}
              <div className="grid grid-cols-2 gap-2">
                {featuredItems.slice(1, 3).map((item, i) => (
                  <div
                    key={item.id}
                    className="reveal bg-warm-white border border-forest/6 p-4"
                    style={{ transitionDelay: `${(i + 1) * 80}ms` }}
                  >
                    <h3 className="font-display italic text-forest text-base leading-tight mb-1.5">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="text-slate/70 text-[0.67rem] font-body leading-relaxed line-clamp-3 mb-2">
                        {item.description}
                      </p>
                    )}
                    <p className="label-caps text-forest text-[0.58rem]">
                      ₱{item.price.toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile link */}
          <div className="sm:hidden mt-6 text-center reveal">
            <Link to="/menu" className="inline-flex items-center gap-2 label-caps text-forest group">
              See the full menu
              <ArrowRight size={11} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ATMOSPHERE ────────────────────────────────────── */}
      <section ref={revealRef3} className="relative" aria-labelledby="atmosphere-heading">
        <div className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden">
          <img
            src={IMG.interior}
            alt="Sable Cafe interior at night — warm amber glow through iron-frame windows"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-deep-forest/80" />
          <div className="relative z-10 h-full flex items-center px-6 md:px-14 py-20 md:py-28">
            <div className="max-w-8xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="reveal">
                <p className="label-caps text-sage mb-5">The Space</p>
                <h2 id="atmosphere-heading" className="font-display italic text-cream text-[clamp(2rem,5vw,4rem)] leading-[1.1] mb-7">
                  Stay for one.<br />
                  <span className="text-sage/80">Linger for four.</span>
                </h2>
                <p className="text-cream/50 text-sm leading-[1.8] font-body mb-8 max-w-sm">
                  Fast Wi-Fi, plentiful power sockets, no one rushing you out. Sable was built
                  for the conscious worker, the slow reader, the long conversation.
                </p>
                <Link to="/about" className="inline-flex items-center gap-3 label-caps text-sage border-b border-sage/30 pb-1 hover:text-cream hover:border-cream transition-colors duration-300 group">
                  About our space
                  <ArrowRight size={13} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="reveal grid grid-cols-2 gap-3">
                {[
                  { num: '4.6★', label: 'Google Rating' },
                  { num: '66+',  label: 'Happy guests reviewed' },
                  { num: 'Free', label: 'Parking across the street' },
                  { num: '2F',   label: 'Two floors of seating' },
                ].map(({ num, label }) => (
                  <div key={label} className="border border-sage/10 p-5 md:p-6">
                    <p className="font-display italic text-cream text-2xl md:text-3xl mb-1.5 leading-none">{num}</p>
                    <p className="label-caps text-sage/50 text-[0.55rem] leading-relaxed">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM GRID — 6 real photos ────────────────── */}
      <section className="py-16 md:py-20 px-6 md:px-14 bg-cream-dark" aria-label="Sable on Instagram">
        <div className="max-w-8xl mx-auto">
          <div className="flex items-end justify-between mb-6 md:mb-10">
            <div>
              <p className="label-caps text-sage mb-2">On Instagram</p>
              <h2 className="font-display italic text-forest text-2xl md:text-4xl">@sable.mnl</h2>
            </div>
            <a
              href="https://www.instagram.com/sable.mnl/"
              target="_blank"
              rel="noopener noreferrer"
              className="label-caps text-forest/60 hover:text-forest transition-colors text-[0.6rem] border-b border-forest/20 pb-0.5 hover:border-forest"
            >
              Follow us
            </a>
          </div>

          {/* Mobile: 2 cols with decent height. Desktop: 3+3 in two rows */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {[IMG.ig1, IMG.ig2, IMG.ig3, IMG.ig4, IMG.ig5, IMG.ig6].map((src, i) => (
              <a
                key={src}
                href="https://www.instagram.com/sable.mnl/"
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden bg-cream-dark"
                style={{ aspectRatio: '1/1' }}
                aria-label={`View Sable on Instagram — post ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`Sable Cafe — from our Instagram @sable.mnl`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────── */}
      <Reviews />

      {/* ── VISIT CTA ─────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6 md:px-14 border-t border-forest/8" aria-labelledby="cta-heading">
        <div className="max-w-8xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h2 id="cta-heading" className="font-display italic text-forest text-2xl md:text-4xl mb-2">
              Ready to linger?
            </h2>
            <p className="text-slate text-sm font-body">
              66B Broadway Ave, New Manila — walk in anytime.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link to="/visit" className="text-center label-caps bg-forest text-cream px-7 py-3.5 hover:bg-mid-forest transition-colors duration-300">
              Get Directions
            </Link>
            <Link to="/menu" className="text-center label-caps text-forest border border-forest/25 px-7 py-3.5 hover:border-forest transition-colors duration-300">
              Browse Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
