// Star rating SVG
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" aria-hidden>
          <polygon
            points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
            fill={i < rating ? '#fabc4c' : 'none'}
            stroke={i < rating ? '#fabc4c' : '#c8ccc8'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  )
}

interface Review {
  name: string
  isLocalGuide: boolean
  rating: number
  timeAgo: string
  meal?: string
  priceRange?: string
  text: string
  tags?: { label: string; value: string }[]
}

const reviews: Review[] = [
  {
    name: 'Tohgy',
    isLocalGuide: true,
    rating: 5,
    timeAgo: '3 months ago',
    meal: 'Lunch',
    priceRange: '₱1,000–1,500',
    text: 'The Chopped Cheese was excellent. Top 10 for me. The brioche bun soft and properly buttered. The burger soft and tender like eating a rare burger but was cooked well done. Juicy juicy juicy. Servers were friendly, attentive and fast. Overall score of 8 for me.',
    tags: [
      { label: 'Food', value: '4/5' },
      { label: 'Service', value: '5/5' },
      { label: 'Atmosphere', value: '5/5' },
    ],
  },
  {
    name: 'Faith Dumalig an',
    isLocalGuide: true,
    rating: 5,
    timeAgo: '6 months ago',
    meal: 'Lunch',
    priceRange: '₱1–500',
    text: 'A cozy café that\'s great for catching up with a friend or getting a bit of work done. The coffee was good, and the food was enjoyable — especially the gochujang pasta, which I really loved. The second-floor interior has a calming vibe.',
  },
  {
    name: 'Chris Espinosa',
    isLocalGuide: true,
    rating: 5,
    timeAgo: '4 months ago',
    priceRange: '₱1,000–1,500',
    text: 'Located along a quiet stretch of New Manila, Sable is a sophisticated addition to the neighborhood\'s burgeoning café scene. While Broadway Avenue is known for its old-world charm, this spot brings a refreshing modern energy without losing warmth.',
  },
  {
    name: 'lindsay dy bravo',
    isLocalGuide: true,
    rating: 4,
    timeAgo: '3 months ago',
    meal: 'Dine in',
    priceRange: '₱1,000–1,500',
    text: 'Great new place for coffee lovers! Cozy ambience with modern interiors, convenient parking, staff are helpful and attentive. Coffee is strong and smooth, food is also good. I will definitely come back.',
    tags: [
      { label: 'Food', value: '4/5' },
      { label: 'Service', value: '4/5' },
      { label: 'Atmosphere', value: '4/5' },
    ],
  },
  {
    name: 'Dennis O',
    isLocalGuide: true,
    rating: 5,
    timeAgo: '5 months ago',
    meal: 'Brunch',
    priceRange: '₱1–500',
    text: 'Cozy cafe with great food and coffee. I love the artsy interior. For the food I like the Avo Croissant and for their coffee the dirty black sesame latte is a must try. Overall one of the better cafes in the area.',
  },
  {
    name: 'renee',
    isLocalGuide: true,
    rating: 5,
    timeAgo: '7 months ago',
    priceRange: '₱1,000–1,500',
    text: "I've eaten here a lot in the past 2 months and of course for a good reason 🤩 I recommend everything on their menu especially the sea salt cream latte, salmon aburi, and sisig rice bowl!!! The staff is very nice and friendly!",
  },
  {
    name: 'Bobbi Herrera',
    isLocalGuide: true,
    rating: 5,
    timeAgo: '7 months ago',
    text: 'Great coffee place but was pleasantly surprised with the good food too. The fried chicken and French toast felt like a warm hug from your Lola. Lots of parking across the restaurant so no worries about that. Must try in QC.',
  },
  {
    name: 'Aldrin Solco',
    isLocalGuide: true,
    rating: 4,
    timeAgo: '3 months ago',
    meal: 'Dinner',
    priceRange: '₱500–1,000',
    text: 'The food here is surprisingly good. The kale caesar salad was really yummy. The Shawarma was good — the meat was tender and not dry. The place is very relaxing for casual gathering with friends.',
    tags: [
      { label: 'Food', value: '4/5' },
      { label: 'Service', value: '5/5' },
      { label: 'Atmosphere', value: '5/5' },
    ],
  },
  {
    name: 'Lia',
    isLocalGuide: true,
    rating: 5,
    timeAgo: '11 months ago',
    meal: 'Dine in',
    priceRange: '₱600–800',
    text: 'Cozy cafe with amazing food and coffee. Great spot to work — fast WiFi, plenty of sockets, and a calm vibe. Perfect for both relaxing and getting things done. Highly recommend!',
  },
  {
    name: 'Lorena Deleon',
    isLocalGuide: false,
    rating: 5,
    timeAgo: '9 months ago',
    meal: 'Dinner',
    priceRange: '₱600–800',
    text: 'Rarely do reviews but this cafe stood out to me :) Loved their porchetta and salt cream latte. The ambiance is perfect for work since it\'s quiet and the place has sockets.',
  },
  {
    name: 'Angel',
    isLocalGuide: true,
    rating: 5,
    timeAgo: '9 months ago',
    meal: 'Brunch',
    priceRange: '₱200–400',
    text: 'Flat white got me alert and awake the whole day. Croissant is so crisp and buttery, better than famous bakeshops!',
  },
  {
    name: 'Mari Racelis',
    isLocalGuide: true,
    rating: 4,
    timeAgo: '3 months ago',
    priceRange: '₱500–1,000',
    text: 'Drinks are good option. Place is okay for studying, they have sockets for chargers. Food has a lot of variety. Food taste is good. Service is great — Kuya Niel is a good waiter, thanks po!',
  },
]

export default function Reviews() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-14 bg-cream-dark" aria-labelledby="reviews-heading">
      <div className="max-w-8xl mx-auto">

        {/* Header — rating summary */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="label-caps text-sage mb-4">What Guests Say</p>
            <h2
              id="reviews-heading"
              className="font-display italic text-forest text-4xl md:text-5xl leading-tight"
            >
              Google Reviews
            </h2>
          </div>

          {/* Aggregate score block */}
          <div className="flex items-center gap-6 bg-warm-white border border-forest/8 px-8 py-5">
            <div className="text-center">
              <p className="font-display italic text-forest text-5xl leading-none mb-1">4.6</p>
              <Stars rating={5} />
              <p className="label-caps text-slate/50 mt-2 text-[0.55rem]">66 reviews</p>
            </div>
            <div className="h-14 w-px bg-forest/10" />
            <div className="text-left space-y-1.5">
              {[
                { label: '5 ★', pct: 75 },
                { label: '4 ★', pct: 17 },
                { label: '3 ★', pct: 5  },
                { label: '2 ★', pct: 2  },
                { label: '1 ★', pct: 1  },
              ].map(({ label, pct }) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="label-caps text-slate text-[0.55rem] w-6">{label}</span>
                  <div className="w-24 h-1.5 bg-forest/8 overflow-hidden">
                    <div className="h-full bg-gold" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews grid — masonry-style 3 cols on desktop */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="break-inside-avoid bg-warm-white border border-forest/6 p-6 mb-5"
            >
              {/* Reviewer row */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  {/* Avatar initial */}
                  <div className="w-9 h-9 rounded-full bg-forest flex items-center justify-center flex-shrink-0">
                    <span className="label-caps text-cream text-[0.65rem]">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-body font-semibold text-forest text-sm leading-tight">{review.name}</p>
                    {review.isLocalGuide && (
                      <p className="label-caps text-sage/60 text-[0.55rem] mt-0.5">Local Guide</p>
                    )}
                  </div>
                </div>
                <span className="label-caps text-slate/40 text-[0.55rem] whitespace-nowrap mt-0.5 flex-shrink-0">
                  {review.timeAgo}
                </span>
              </div>

              {/* Stars + meal type */}
              <div className="flex items-center gap-3 mb-3">
                <Stars rating={review.rating} />
                {review.meal && (
                  <span className="label-caps text-slate/50 text-[0.55rem]">{review.meal}</span>
                )}
                {review.priceRange && (
                  <span className="label-caps text-sage/70 text-[0.55rem]">{review.priceRange}</span>
                )}
              </div>

              {/* Review text */}
              <p className="text-slate text-xs leading-relaxed font-body">{review.text}</p>

              {/* Rating tags */}
              {review.tags && (
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-forest/6">
                  {review.tags.map(({ label, value }) => (
                    <div key={label} className="flex items-center gap-1">
                      <span className="label-caps text-slate/50 text-[0.5rem]">{label}</span>
                      <span className="label-caps text-forest text-[0.5rem]">{value}</span>
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Link to Google */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.google.com/?q=Sable+Cafe+66B+Broadway+Ave+Quezon+City"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 label-caps text-forest border-b border-forest/30 pb-0.5 hover:border-forest transition-colors"
          >
            Read all 66 reviews on Google
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
