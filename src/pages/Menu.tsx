import { useState, useRef } from 'react'
import SEOHead from '../components/SEOHead'
import MenuSection from '../components/MenuSection'
import { menuCategories } from '../data/menu'
import { useScrollReveal } from '../hooks/useScrollReveal'

// Hero images per category
const MENU_HERO   = 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1600&q=80&auto=format&fit=crop'
const FOOD_IMG    = 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=700&q=80&auto=format&fit=crop'
const DRINKS_IMG  = 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700&q=80&auto=format&fit=crop'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const sectionRef = useScrollReveal() as React.RefObject<HTMLDivElement>
  const topRef = useRef<HTMLDivElement>(null)

  const scrollToCategory = (id: string) => {
    setActiveCategory(id)
    const el = document.getElementById(`section-${id}`)
    if (el) {
      const offset = 96
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <SEOHead
        title="Menu | Sable Cafe — Coffee, Brunch & Specialty Drinks"
        description="Browse Sable's full menu: specialty espresso drinks, signature lattes, brunch plates, burgers, and fresh bakes. Prices in Philippine Peso."
        path="/menu"
      />

      {/* ── HERO — full bleed with two-tone overlay ──────────── */}
      <div ref={topRef} className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <img
          src={MENU_HERO}
          alt="Coffee being prepared at Sable Cafe — specialty beans, careful craft"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-forest/60 to-deep-forest/90" />

        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-14 pb-12 md:pb-16">
          <div className="max-w-8xl mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="label-caps text-sage mb-4">What We Serve</p>
              <h1
                id="menu-page-heading"
                className="font-display italic text-cream text-5xl md:text-7xl leading-tight"
              >
                The Menu
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-8 pb-1">
              <div>
                <p className="label-caps text-sage/50 mb-1">Cuisine</p>
                <p className="text-cream text-sm font-body">Brunch · Coffee · Fusion</p>
              </div>
              <div>
                <p className="label-caps text-sage/50 mb-1">Price Range</p>
                <p className="text-cream text-sm font-body">₱125 – ₱625</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PHOTO TEASE — two editorial images ──────────────── */}
      <div className="grid grid-cols-2 h-40 md:h-52">
        <div className="relative overflow-hidden">
          <img
            src={FOOD_IMG}
            alt="Fresh brunch plate — crafted daily at Sable"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-deep-forest/30" />
          <p className="absolute bottom-4 left-4 label-caps text-cream/80 text-[0.6rem]">Plates &amp; Mains</p>
        </div>
        <div className="relative overflow-hidden">
          <img
            src={DRINKS_IMG}
            alt="Signature latte — specialty coffee at Sable"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-deep-forest/30" />
          <p className="absolute bottom-4 left-4 label-caps text-cream/80 text-[0.6rem]">Coffee &amp; Drinks</p>
        </div>
      </div>

      {/* ── STICKY TABS ──────────────────────────────────────── */}
      <div className="sticky top-20 z-30 bg-cream/95 backdrop-blur-md border-b border-forest/8">
        <div className="max-w-8xl mx-auto px-6 md:px-14">
          <nav
            className="flex gap-0 overflow-x-auto scrollbar-hide"
            aria-label="Menu categories"
          >
            {menuCategories.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToCategory(id)}
                className={`
                  flex-shrink-0 px-5 py-4 label-caps
                  border-b-2 transition-colors duration-200
                  ${activeCategory === id
                    ? 'border-forest text-forest'
                    : 'border-transparent text-slate hover:text-forest'
                  }
                `}
                aria-current={activeCategory === id ? 'true' : undefined}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ── MENU CONTENT ─────────────────────────────────────── */}
      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className="max-w-8xl mx-auto px-6 md:px-14 py-14 md:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main menu list */}
          <div className="lg:col-span-8">
            {menuCategories.map((category) => (
              <MenuSection key={category.id} category={category} />
            ))}

            <div className="mt-10 pt-10 border-t border-forest/8">
              <p className="label-caps text-sage mb-3">Good to Know</p>
              <p className="text-slate text-sm font-body leading-relaxed max-w-lg">
                Prices are in Philippine Peso (₱). Menu items and prices may change without prior notice.
                Please inform our staff of any food allergies or dietary requirements.
              </p>
            </div>
          </div>

          {/* Sticky sidebar — editorial */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-40 space-y-6">
              {/* Coffee image */}
              <div className="overflow-hidden aspect-square">
                <img
                  src={DRINKS_IMG}
                  alt="Sable signature coffee drinks"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              {/* Note card */}
              <div className="bg-deep-forest p-6">
                <p className="label-caps text-sage mb-3">Chef's Note</p>
                <p className="text-cream/60 text-xs leading-relaxed font-body">
                  Everything is made with intention. Coffee pulled fresh, food prepared daily.
                  When the bakes are gone, they're gone.
                </p>
              </div>
              {/* Hours card */}
              <div className="border border-forest/10 p-6">
                <p className="label-caps text-sage mb-4">Today's Hours</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-body">
                    <span className="text-slate">Mon – Fri</span>
                    <span className="text-forest font-medium">7:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between text-xs font-body">
                    <span className="text-slate">Sat – Sun</span>
                    <span className="text-forest font-medium">8:00 – 16:00</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
