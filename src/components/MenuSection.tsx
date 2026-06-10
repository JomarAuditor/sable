import type { MenuCategory } from '../data/menu'
import MenuCard from './MenuCard'

interface MenuSectionProps {
  category: MenuCategory
}

export default function MenuSection({ category }: MenuSectionProps) {
  return (
    <section
      id={`section-${category.id}`}
      className="mb-14 reveal"
      aria-labelledby={`heading-${category.id}`}
    >
      <div className="flex items-center gap-4 mb-6">
        <h2
          id={`heading-${category.id}`}
          className="font-display italic text-forest text-2xl md:text-3xl whitespace-nowrap"
        >
          {category.heading}
        </h2>
        <div className="flex-1 hairline" />
      </div>

      <div className="bg-warm-white border border-forest/6 p-6 md:p-8">
        {category.items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}