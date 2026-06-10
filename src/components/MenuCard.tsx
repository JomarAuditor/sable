import type { MenuItem } from '../data/menu'

interface MenuCardProps {
  item: MenuItem
  isLast?: boolean
  variant?: 'default' | 'featured'
}

export default function MenuCard({ item, isLast = false, variant = 'default' }: MenuCardProps) {
  if (variant === 'featured') {
    return (
      <article className="border border-forest/8 bg-warm-white hover:bg-cream-dark transition-colors duration-300 p-5 md:p-6">
        <div className="flex justify-between items-start gap-4 mb-2">
          <h3 className="font-display italic text-forest text-xl leading-snug">
            {item.name}
          </h3>
          <span className="label-caps text-forest whitespace-nowrap flex-shrink-0 pt-0.5">
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
    <article
      className={`
        flex items-start justify-between gap-4
        py-4 group
        ${isLast ? '' : 'border-b border-forest/[0.07]'}
      `}
    >
      <div className="flex-1 min-w-0">
        <h3 className="font-body font-medium text-forest text-sm leading-snug mb-1 group-hover:text-mid-forest transition-colors duration-200">
          {item.name}
        </h3>
        {item.description && (
          <p className="text-slate/75 text-xs leading-relaxed font-body line-clamp-2">
            {item.description}
          </p>
        )}
      </div>
      <span className="label-caps text-forest text-[0.6rem] whitespace-nowrap flex-shrink-0 pt-0.5">
        ₱{item.price.toLocaleString()}
      </span>
    </article>
  )
}
