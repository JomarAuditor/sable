import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { useScrollReveal } from '../hooks/useScrollReveal'

// Curated Unsplash images for the about page
const HERO_WIDE   = 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1800&q=80&auto=format&fit=crop'
const INTERIOR_1  = 'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=900&q=80&auto=format&fit=crop'
const INTERIOR_2  = 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=900&q=80&auto=format&fit=crop'
const BARISTA_IMG = 'https://images.unsplash.com/photo-1516664631854-53aa6a5fc6e2?w=800&q=80&auto=format&fit=crop'
const LATTE_IMG   = 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80&auto=format&fit=crop'

const spaceDetails = [
  {
    num: '01',
    heading: 'Tactile Surfaces',
    body: 'Every surface — from fluted plaster to open-pore oak — is chosen to ground the senses and invite the hands.',
  },
  {
    num: '02',
    heading: 'Living Light',
    body: 'Lighting follows the natural arc of the day, softening as the morning rush yields to afternoon reflection.',
  },
  {
    num: '03',
    heading: 'Intentional Quiet',
    body: 'Music is curated, volume kept low. The ambient sound of a good cafe should never compete with conversation.',
  },
  {
    num: '04',
    heading: 'The Long Table',
    body: 'Our communal table is an invitation. Solo workers, groups of friends, strangers sharing an afternoon — all welcome.',
  },
]

export default function About() {
  const revealA = useScrollReveal() as React.RefObject<HTMLDivElement>
  const revealB = useScrollReveal() as React.RefObject<HTMLDivElement>
  const revealC = useScrollReveal() as React.RefObject<HTMLDivElement>

  return (
    <>
      <SEOHead
        title="About Sable | Our Space & Philosophy"
        description="Sable is an architectural cafe designed as an urban oasis. Learn about our space, our philosophy of intentional lingering, and what makes Sable different."
        path="/about"
      />

      {/* ── HERO — horizontal split, image left ─────────────── */}
      <section
        className="min-h-[85vh] grid grid-cols-1 md:grid-cols-2"
        aria-labelledby="about-page-heading"
      >
        {/* Left — full image */}
        <div className="relative h-72 md:h-auto overflow-hidden">
          <img
            src={HERO_WIDE}
            alt="Sable Cafe interior — warm light through architectural windows"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-deep-forest/20" />
        </div>

        {/* Right — text on cream */}
        <div className="bg-deep-forest flex flex-col justify-center px-8 md:px-14 py-16 md:py-0">
          <p className="label-caps text-sage mb-6">The Spatial Narrative</p>
          <h1
            id="about-page-heading"
            className="font-display italic text-cream text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8"
          >
            The Quiet<br />
            Art of<br />
            <span className="text-sage">Lingering.</span>
          </h1>
          <p className="text-cream/60 text-sm leading-relaxed font-body max-w-sm">
            Sable opened in 2024 with a single idea: a cafe should be a place you want to
            <em className="text-cream/80 not-italic font-medium"> stay</em>, not just a place to grab coffee.
            We designed every detail of the space to earn that extra hour.
          </p>
        </div>
      </section>

      {/* ── STORY STRIP — thin editorial row ────────────────── */}
      <div className="bg-forest py-10 px-6 md:px-14">
        <div className="max-w-8xl mx-auto flex flex-col md:flex-row gap-8 md:gap-0 md:divide-x divide-sage/10">
          {[
            { label: 'Founded',  value: '2024' },
            { label: 'Location', value: 'Philippines' },
            { label: 'Hours',    value: '7AM – 6PM' },
            { label: 'Vibe',     value: 'Stay awhile' },
          ].map(({ label, value }) => (
            <div key={label} className="flex-1 md:px-10 first:pl-0 last:pr-0">
              <p className="label-caps text-sage/50 mb-1">{label}</p>
              <p className="font-display italic text-cream text-xl">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── SPACE DETAILS — image + copy alternating ─────────── */}
      <section
        ref={revealA}
        className="py-24 md:py-36 px-6 md:px-14"
        aria-labelledby="space-details-heading"
      >
        <div className="max-w-8xl mx-auto">
          {/* Section header */}
          <div className="mb-16 max-w-lg reveal">
            <p className="label-caps text-sage mb-4">How the Space Works</p>
            <h2
              id="space-details-heading"
              className="font-display italic text-forest text-4xl md:text-5xl leading-tight"
            >
              Every detail<br />is deliberate.
            </h2>
          </div>

          {/* Two-column detail grid beside a tall image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Details grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
              {spaceDetails.map(({ num, heading, body }, i) => (
                <article
                  key={num}
                  className="reveal border-t border-forest/10 pt-8"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="label-caps text-sage/40 block mb-4">{num}</span>
                  <h3 className="font-display italic text-forest text-xl mb-3">{heading}</h3>
                  <p className="text-slate text-sm leading-relaxed font-body">{body}</p>
                </article>
              ))}
            </div>

            {/* Tall stacked images */}
            <div className="lg:col-span-5 flex flex-col gap-4 reveal">
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={INTERIOR_1}
                  alt="Sable Cafe — warm interior light and wooden surfaces"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={INTERIOR_2}
                  alt="Sable Cafe — architectural window frames and ambient light"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE — full cream-dark band ───────────────── */}
      <div className="bg-cream-dark border-y border-forest/8 py-20 md:py-28 px-6 md:px-14">
        <div className="max-w-3xl mx-auto text-center">
          <div className="font-display text-6xl text-sage/20 leading-none mb-4 select-none" aria-hidden>&ldquo;</div>
          <blockquote>
            <p className="font-display italic text-forest text-2xl md:text-4xl leading-snug mb-8">
              Luxury is found in the absence of noise and the presence of intention.
            </p>
            <cite className="label-caps text-slate not-italic">— Sable Foundation Principle</cite>
          </blockquote>
        </div>
      </div>

      {/* ── PILLARS — barista + latte side by side + copy ────── */}
      <section
        ref={revealB}
        className="py-24 md:py-36 px-6 md:px-14 bg-deep-forest text-cream"
        aria-label="What we stand for"
      >
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
            {/* Text */}
            <div className="reveal">
              <p className="label-caps text-sage mb-5">What We Stand For</p>
              <h2 className="font-display italic text-cream text-4xl md:text-5xl leading-tight mb-6">
                Three things<br />we never<br />compromise on.
              </h2>
              <p className="text-cream/50 text-sm leading-relaxed font-body">
                Coffee, food, and space. Get all three right and you don't need a gimmick.
              </p>
            </div>

            {/* Side-by-side photos */}
            <div className="grid grid-cols-2 gap-4 reveal">
              <div className="overflow-hidden aspect-[3/4]">
                <img
                  src={BARISTA_IMG}
                  alt="Sable barista carefully preparing a pour-over coffee"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden aspect-[3/4] mt-8">
                <img
                  src={LATTE_IMG}
                  alt="Freshly made latte with latte art at Sable"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Three pillar cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-sage/10" ref={revealC}>
            {[
              {
                label: 'Coffee',
                heading: 'Specialty, always.',
                body: 'Direct-trade beans, pulled to order. Not pre-brewed, not sitting in a carafe. Just the ritual of a properly made cup.',
              },
              {
                label: 'Food',
                heading: 'Made daily.',
                body: 'Brunch plates prepared fresh each morning. Bakes come out of the oven early — and when they are gone, they are gone.',
              },
              {
                label: 'Space',
                heading: 'Designed to stay.',
                body: 'Good Wi-Fi, plentiful outlets, and no one rushing you out the door. The table is yours for as long as you need it.',
              },
            ].map(({ label, heading, body }, i) => (
              <article
                key={label}
                className="reveal p-8 md:p-10 border-b md:border-b-0 md:border-r border-sage/10 last:border-0"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="label-caps text-sage mb-5">{label}</p>
                <h3 className="font-display italic text-cream text-2xl mb-4">{heading}</h3>
                <p className="text-cream/50 text-sm leading-relaxed font-body">{body}</p>
              </article>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-14 flex flex-col sm:flex-row gap-4 reveal">
            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-2 label-caps bg-sage text-forest px-8 py-4 hover:bg-sage-light transition-colors duration-300"
            >
              View Full Menu
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
            <Link
              to="/visit"
              className="inline-flex items-center justify-center gap-2 label-caps text-cream border border-cream/20 px-8 py-4 hover:border-cream transition-colors duration-300"
            >
              Plan Your Visit
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
