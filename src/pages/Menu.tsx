import { useState, useRef, useEffect } from 'react'
import SEOHead from '../components/SEOHead'
import MenuSection from '../components/MenuSection'
import { menuCategories } from '../data/menu'
import { useScrollReveal } from '../hooks/useScrollReveal'

/**
 * Hero uses curated Unsplash food/drink shots — real café plating photography.
 * Editorial strip uses Sable's own Instagram photos (food + coffee).
 * Sidebar uses Sable's own coffee photo.
 */
const IMG = {
  // Hero: beautiful overhead latte art — immediately signals "menu page"
  heroLeft:   'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=85&auto=format&fit=crop',
  heroMiddle: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&q=85&auto=format&fit=crop',
  heroRight:  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=85&auto=format&fit=crop',
  // Editorial strip — Sable's own photos
  food:    '/622613243_17939322804126663_377302319621215862_n.jpg',
  coffee:  '/coffe1.jpeg',
  pastry:  '/670266295_18568403404048197_1719556723520523527_n.jpg',
  // Sidebar
  sidebar: '/670284721_18568403440048197_5978667719147001314_n.jpg',
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const sectionRef = useScrollReveal() as React.RefObject<HTMLDivElement>
  const tabsRef    = useRef<HTMLDivElement>(null)

  // ── Active category highlight on scroll ─────────────────
  useEffect(() => {
    const onScroll = () => {
      const OFFSET = 130
      let current: string | null = null
      menuCategories.forEach(({ id }) => {
        const el = document.getElementById(`section-${id}`)
        if (!el) return
        const top = el.getBoundingClientRect().top
        if (top <= OFFSET) current = id
      })
      setActiveCategory(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToCategory = (id: string) => {
    setActiveCategory(id)
    const el = document.getElementById(`section-${id}`)
    if (!el) return
    const tabsHeight = tabsRef.current?.offsetHeight ?? 48
    const navHeight  = window.innerWidth >= 768 ? 80 : 70
    const offset     = navHeight + tabsHeight + 8
    const top        = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <>
      <SEOHead
        title="Menu — Sable Cafe | Brunch, Specialty Coffee & Drinks, New Manila QC"
        description="Explore Sable's full menu: specialty espresso, signature lattes, all-day brunch plates, sandwiches, and fresh bakes. Prices in Philippine Peso. 66B Broadway Ave, New Manila."
        path="/menu"
      />

      {/* ── HERO — three food/drink panels ──────────────── */}
      <div className="relative min-h-[52vh] md:min-h-[58vh] overflow-hidden">

        {/* Three-panel photo collage */}
        <div className="absolute inset-0 grid grid-cols-3">
          <div className="relative overflow-hidden">
            <img
              src={IMG.heroLeft}
              alt="Sable specialty latte — smooth, carefully pulled espresso"
              className="w-full h-full object-cover scale-[1.03]"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="relative overflow-hidden">
            <img
              src={IMG.heroMiddle}
              alt="Sable kitchen — fresh brunch plates made daily"
              className="w-full h-full object-cover scale-[1.03]"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="relative overflow-hidden">
            <img
              src={IMG.heroRight}
              alt="Sable coffee — signature filter and espresso drinks"
              className="w-full h-full object-cover scale-[1.03]"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-forest/60 via-deep-forest/45 to-deep-forest/90" />

        {/* Hero copy */}
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-14 pb-10 md:pb-14 pt-16">
          <div className="max-w-8xl mx-auto w-full">
            <p className="label-caps text-sage mb-3 text-[0.55rem] tracking-[0.3em]">
              What We Serve
            </p>
            <h1 className="font-display italic text-cream text-[clamp(2.8rem,8vw,5.5rem)] leading-[1.05] mb-3">
              The Menu
            </h1>
            <p className="text-cream/45 text-xs font-body">
              Brunch &middot; Specialty Coffee &middot; Signature Drinks &middot; ₱125–₱625
            </p>
          </div>
        </div>
      </div>

      {/* ── EDITORIAL STRIP — 3 Sable photos ────────────── */}
      <div className="grid grid-cols-3 h-28 sm:h-36 md:h-52">
        {[
          { src: IMG.food,   alt: 'Sable plates — fresh food made daily',               label: 'Plates & Mains' },
          { src: IMG.coffee, alt: 'Sable barista — handcrafted espresso pulled fresh',   label: 'Coffee & Drinks' },
          { src: IMG.pastry, alt: 'Sable café — bakes and pastries fresh from the oven', label: 'Bakes & Sides' },
        ].map(({ src, alt, label }) => (
          <div key={label} className="relative overflow-hidden">
            <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-deep-forest/40" />
            <p className="absolute bottom-2.5 left-3 label-caps text-cream/80 text-[0.45rem] sm:text-[0.5rem] tracking-[0.18em]">
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* ── STICKY CATEGORY TABS ─────────────────────────── */}
      <div
        ref={tabsRef}
        className="sticky top-[70px] md:top-20 z-30 bg-cream/97 backdrop-blur-md border-b border-forest/10 shadow-sm"
      >
        <div className="max-w-8xl mx-auto">
          <nav
            className="flex overflow-x-auto scrollbar-hide px-4 md:px-14"
            aria-label="Menu categories"
          >
            {menuCategories.map(({ id, label }) => {
              const isActive = activeCategory === id
              return (
                <button
                  key={id}
                  onClick={() => scrollToCategory(id)}
                  className={`
                    relative flex-shrink-0 px-3 sm:px-4 md:px-5 py-3.5
                    label-caps text-[0.58rem] sm:text-[0.62rem] whitespace-nowrap
                    transition-colors duration-200 outline-none
                    focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-inset
                    ${isActive ? 'text-forest' : 'text-slate/60 hover:text-forest'}
                  `}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {label}
                  <span
                    className={`
                      absolute bottom-0 left-0 right-0 h-[2px] bg-forest
                      transition-opacity duration-200
                      ${isActive ? 'opacity-100' : 'opacity-0'}
                    `}
                  />
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* ── MENU CONTENT ─────────────────────────────────── */}
      <div
        ref={sectionRef}
        className="max-w-8xl mx-auto px-4 sm:px-6 md:px-14 py-10 md:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Main menu list */}
          <div className="lg:col-span-8">
            {menuCategories.map((category) => (
              <MenuSection key={category.id} category={category} />
            ))}

            {/* Disclaimer */}
            <div className="mt-8 pt-7 border-t border-forest/8">
              <p className="label-caps text-sage mb-2 text-[0.55rem]">Good to Know</p>
              <p className="text-slate/60 text-xs font-body leading-[1.85] max-w-sm">
                All prices in Philippine Peso (₱). Menu and pricing may change without notice.
                Please inform our staff of any allergies or dietary requirements.
              </p>
            </div>
          </div>

          {/* Sticky sidebar — desktop only */}
          <aside className="lg:col-span-4 hidden lg:block" aria-label="Menu sidebar">
            <div className="sticky top-36 space-y-4">

              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={IMG.sidebar}
                  alt="Sable Cafe — warmly lit interior, New Manila"
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              <div className="bg-deep-forest p-5">
                <p className="label-caps text-sage mb-2 text-[0.55rem]">From the Kitchen</p>
                <p className="text-cream/55 text-xs leading-[1.85] font-body">
                  Food is prepared fresh daily. Bakes come out of the oven early —
                  once they're gone, they're gone.
                </p>
              </div>

              <div className="border border-forest/10 p-5">
                <p className="label-caps text-sage mb-3 text-[0.55rem]">Hours</p>
                <div className="space-y-2.5">
                  {[
                    { d: 'Mon – Fri', t: '7:00 – 18:00' },
                    { d: 'Sat – Sun', t: '8:00 – 16:00' },
                  ].map(({ d, t }) => (
                    <div key={d} className="flex justify-between items-baseline">
                      <span className="text-slate text-xs font-body">{d}</span>
                      <span className="font-display italic text-forest text-sm">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
