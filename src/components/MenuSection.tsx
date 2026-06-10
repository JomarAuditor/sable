import type { MenuCategory } from '../data/menu'
import MenuCard from './MenuCard'

interface MenuSectionProps {
  category: MenuCategory
}

export default function MenuSection({ category }: MenuSectionProps) {
  return (
    /*
     * The `reveal` class must be on a CHILD of the useScrollReveal container,
     * not on the container itself. The section wrapper is plain — the inner
     * content card carries `reveal` so IntersectionObserver can trigger it.
     */
    <section
      id={`section-${category.id}`}
      className="mb-12 md:mb-16"
      aria-labelledby={`heading-${category.id}`}
    >
      {/* Section heading + hairline */}
      <div className="flex items-center gap-4 mb-5 reveal">
        <h2
          id={`heading-${category.id}`}
          className="font-display italic text-forest text-xl md:text-2xl lg:text-3xl leading-none whitespace-nowrap flex-shrink-0"
        >
          {category.heading}
        </h2>
        <div className="flex-1 hairline" />
      </div>

      {/* Menu items card */}
      <div className="bg-warm-white border border-forest/6 px-5 sm:px-6 md:px-8 reveal">
        {category.items.map((item, index) => (
          <MenuCard
            key={item.id}
            item={item}
            isLast={index === category.items.length - 1}
          />
        ))}
      </div>
    </section>
  )
}
