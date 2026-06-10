import type { MenuItem } from '../data/menu'

interface MenuCardProps {
  item: MenuItem
  variant?: 'default' | 'featured'
}

export default function MenuCard({ item, variant = 'default' }: MenuCardProps) {
  if (variant === 'featured') {
    return (
      <article className="group border border-forest/8 bg-warm-white hover:bg-cream-dark transition-colors duration-300 p-6">
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="font-display italic text-forest text-xl leading-snug">
            {item.name}
          </h3>
          <span className="label-caps text-forest whitespace-nowrap flex-shrink-0 pt-1">
            ₱{item.price.toLocaleString()}
          </span>
        </div>
        {item.description && (
          <p className="text-slate text-sm leading-relaxed font-body">
            {item.description}
          </p>
        )}
      </article>
    )
  }

  return (
    <article className="flex items-start justify-between gap-4 py-4 border-b border-forest/6 last:border-b-0 group">
      <div className="flex-1 min-w-0">
        <h3 className="font-body font-medium text-forest text-sm mb-1 group-hover:text-mid-forest transition-colors">
          {item.name}
        </h3>
        {item.description && (
          <p className="text-slate text-xs leading-relaxed font-body line-clamp-2">
            {item.description}
          </p>
        )}
      </div>
      <span className="label-caps text-forest whitespace-nowrap flex-shrink-0">
        ₱{item.price.toLocaleString()}
      </span>
    </article>
  )
}