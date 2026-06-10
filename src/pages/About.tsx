import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { useScrollReveal } from '../hooks/useScrollReveal'

const IMG = {
  hero:      '/720417232_17890662507550537_4600229101300576405_n.jpg',
  interior1: '/721387579_17890662453550537_6470382880018086177_n.jpg',
  interior2: '/622290320_17939322795126663_8863688168724775314_n.jpg',
  coffee1:   '/622224497_17939322777126663_3451149241024676410_n.jpg',
  food:      '/622613243_17939322804126663_377302319621215862_n.jpg',
}

const spaceDetails = [
  { num: '01', heading: 'Tactile Surfaces',  body: 'From fluted plaster to open-pore oak — every surface is chosen to ground the senses and make you want to stay.' },
  { num: '02', heading: 'Living Light',      body: 'Natural light shapes the mood throughout the day. Mornings are bright and energising. Afternoons soften into amber.' },
  { num: '03', heading: 'Intentional Quiet', body: 'Music is curated, volume is low. The ambient sound of a good café should never compete with a good conversation.' },
  { num: '04', heading: 'Two Floors',        body: 'Ground floor buzz or second-floor calm — pick your pace. Both floors have power sockets and fast Wi-Fi.' },
]

export default function About() {
  const revealA = useScrollReveal() as React.RefObject<HTMLDivElement>
  const revealB = useScrollReveal() as React.RefObject<HTMLDivElement>

  return (
    <>
      <SEOHead
        title="About Sable | New Manila's Architectural Café — Broadway Ave, QC"
        description="Sable is a specialty café on Broadway Ave, New Manila, designed for the conscious lingerer. Direct-trade coffee, fresh daily food, two floors of thoughtfully designed space."
        path="/about"
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="grid grid-cols-1 md:grid-cols-2 min-h-[82vh] md:min-h-[88vh]"
        aria-labelledby="about-heading"
      >
        <div className="relative h-64 sm:h-80 md:h-auto overflow-hidden">
          <img
            src={IMG.hero}
            alt="Sable Cafe — warm architectural interior, Broadway Ave New Manila"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          {/* Top vignette keeps transparent navbar text legible */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-deep-forest/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep-forest/25 md:bg-gradient-to-r md:from-transparent md:to-deep-forest/15" />
        </div>
        <div className="bg-deep-forest flex flex-col justify-center px-8 md:px-10 lg:px-14 py-12 md:py-0">
          <p className="label-caps text-sage mb-4 tracking-[0.22em] text-[0.55rem]">
            New Manila, QC · Est. 2025
          </p>
          <h1
            id="about-heading"
            className="font-display italic text-cream text-[clamp(2.4rem,4.5vw,4rem)] leading-[1.05] mb-6"
          >
            The quiet<br />art of<br />
            <span className="text-sage">lingering.</span>
          </h1>
          <p className="text-cream/50 text-sm leading-[1.9] font-body max-w-[280px]">
            Sable opened in 2025 with one idea — a café should earn the extra hour.
            Not with loyalty points or loud playlists, but with a space so thoughtfully
            made you simply don't want to leave.
          </p>
        </div>
      </section>

      {/* ── STRIP STATS ──────────────────────────────────── */}
      <div className="bg-forest border-y border-sage/10">
        <div className="max-w-5xl mx-auto px-6 md:px-14 py-7 md:py-9">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-0 md:divide-x divide-sage/10">
            {[
              { label: 'Address', value: '66B Broadway Ave' },
              { label: 'Founded', value: '2025' },
              { label: 'Rating',  value: '4.6 ★ Google' },
              { label: 'Parking', value: 'Free, across street' },
            ].map(({ label, value }) => (
              <div key={label} className="md:px-8 first:md:pl-0 last:md:pr-0">
                <p className="label-caps text-sage/40 mb-1 text-[0.5rem]">{label}</p>
                <p className="font-display italic text-cream text-base leading-tight">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SPACE DETAILS ────────────────────────────────── */}
      <section
        ref={revealA}
        className="py-16 md:py-24 px-6 md:px-14"
        aria-labelledby="space-heading"
      >
        <div className="max-w-5xl mx-auto">

          <div className="mb-10 md:mb-14 reveal">
            <p className="label-caps text-sage mb-2.5 text-[0.55rem]">How the Space Works</p>
            <h2
              id="space-heading"
              className="font-display italic text-forest text-[clamp(1.6rem,3.5vw,2.6rem)] leading-tight"
            >
              Every detail<br />is deliberate.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">

            {/* Detail cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7">
              {spaceDetails.map(({ num, heading, body }, i) => (
                <article
                  key={num}
                  className="reveal border-t border-forest/10 pt-5"
                  style={{ transitionDelay: `${i * 65}ms` }}
                >
                  <span className="label-caps text-sage/35 block mb-2.5 text-[0.5rem]">{num}</span>
                  <h3 className="font-display italic text-forest text-base md:text-lg mb-2">{heading}</h3>
                  <p className="text-slate text-sm leading-[1.8] font-body">{body}</p>
                </article>
              ))}
            </div>

            {/* Two interior photos */}
            <div className="lg:col-span-5 flex flex-col gap-2.5 reveal">
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={IMG.interior1}
                  alt="Sable Cafe second floor — calm seating with architectural windows"
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={IMG.interior2}
                  alt="Sable Cafe ground floor — warm light and tactile surfaces"
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ───────────────────────────────────── */}
      <div className="bg-cream-dark border-y border-forest/8 py-14 md:py-20 px-6 md:px-14">
        <div className="max-w-2xl mx-auto text-center">
          <div className="font-display text-5xl text-sage/15 leading-none mb-4 select-none" aria-hidden>
            &ldquo;
          </div>
          <blockquote>
            <p className="font-display italic text-forest text-[clamp(1.2rem,2.5vw,2rem)] leading-snug mb-5">
              Luxury is found in the absence of noise<br className="hidden md:block" />
              and the presence of intention.
            </p>
            <cite className="label-caps text-slate/55 not-italic text-[0.55rem]">
              — Sable Foundation Principle
            </cite>
          </blockquote>
        </div>
      </div>

      {/* ── PILLARS ──────────────────────────────────────── */}
      <section
        ref={revealB}
        className="py-16 md:py-24 px-6 md:px-14 bg-deep-forest text-cream"
        aria-label="Our commitments"
      >
        <div className="max-w-5xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center mb-12 md:mb-16">
            <div className="reveal">
              <p className="label-caps text-sage mb-4 text-[0.55rem]">What We Don't Compromise On</p>
              <h2 className="font-display italic text-cream text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.1] mb-5">
                Coffee. Food.<br />Space. In that order.
              </h2>
              <p className="text-cream/45 text-sm leading-[1.85] font-body max-w-[280px]">
                Get all three right and you don't need a gimmick.
                Every decision at Sable starts from that principle.
              </p>
            </div>

            {/* Offset photo pair */}
            <div className="grid grid-cols-2 gap-2.5 reveal">
              <div className="overflow-hidden aspect-[3/4]">
                <img
                  src={IMG.coffee1}
                  alt="Sable specialty coffee — carefully crafted espresso drink"
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden aspect-[3/4] mt-6 md:mt-10">
                <img
                  src={IMG.food}
                  alt="Sable kitchen — fresh brunch plate prepared daily"
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Three pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-sage/10">
            {[
              { label: 'Coffee', heading: 'Specialty, always.', body: 'Direct-trade beans, fruity or chocolatey roast — your call. Pulled to order, every single time. No shortcuts.' },
              { label: 'Food',   heading: 'Made daily.',        body: "Brunch plates prepared fresh each morning. Bakes from the oven early. When they're gone, they're gone." },
              { label: 'Space',  heading: 'Designed to stay.',  body: 'Fast Wi-Fi, power sockets at every seat, two floors of seating. The table is yours for as long as you need.' },
            ].map(({ label, heading, body }, i) => (
              <article
                key={label}
                className="reveal p-6 md:p-8 border-b md:border-b-0 md:border-r border-sage/10 last:border-0"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="label-caps text-sage mb-3 text-[0.5rem]">{label}</p>
                <h3 className="font-display italic text-cream text-lg md:text-xl mb-2.5">{heading}</h3>
                <p className="text-cream/45 text-xs md:text-sm leading-[1.8] font-body">{body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-2.5 reveal">
            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-2 label-caps bg-sage text-forest px-6 py-3.5 hover:bg-sage-light transition-colors duration-300"
            >
              View Full Menu <ArrowRight size={12} strokeWidth={1.5} />
            </Link>
            <Link
              to="/visit"
              className="inline-flex items-center justify-center gap-2 label-caps text-cream border border-cream/15 px-6 py-3.5 hover:border-cream/40 transition-colors duration-300"
            >
              Plan Your Visit <ArrowRight size={12} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
