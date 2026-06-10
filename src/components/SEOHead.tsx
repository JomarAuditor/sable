import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
  title: string
  description: string
  path?: string
  /** Absolute URL to an OG image. Falls back to the hero shot. */
  image?: string
  /** 'website' | 'article' — default is 'website' */
  type?: string
}

const BASE_URL  = 'https://sablecafe.ph'
const OG_IMAGE  = `${BASE_URL}/og-image.jpg`   // 1200×630 export — place in /public
const SITE_NAME = 'Sable Cafe'

export default function SEOHead({
  title,
  description,
  path = '',
  image = OG_IMAGE,
  type = 'website',
}: SEOHeadProps) {
  const fullUrl = `${BASE_URL}${path}`

  return (
    <Helmet>
      {/* ── Primary ── */}
      <title>{title}</title>
      <meta name="description"                 content={description} />
      <link rel="canonical"                    href={fullUrl} />
      <meta name="robots"                      content="index, follow, max-image-preview:large, max-snippet:-1" />

      {/* ── Open Graph ── */}
      <meta property="og:type"                 content={type} />
      <meta property="og:site_name"            content={SITE_NAME} />
      <meta property="og:locale"               content="en_PH" />
      <meta property="og:title"               content={title} />
      <meta property="og:description"          content={description} />
      <meta property="og:url"                  content={fullUrl} />
      <meta property="og:image"                content={image} />
      <meta property="og:image:width"          content="1200" />
      <meta property="og:image:height"         content="630" />
      <meta property="og:image:alt"            content="Sable Cafe — specialty coffee and brunch, New Manila QC" />

      {/* ── Twitter / X ── */}
      <meta name="twitter:card"               content="summary_large_image" />
      <meta name="twitter:site"               content="@sable.mnl" />
      <meta name="twitter:title"              content={title} />
      <meta name="twitter:description"        content={description} />
      <meta name="twitter:image"              content={image} />
      <meta name="twitter:image:alt"          content="Sable Cafe — specialty coffee and brunch, New Manila QC" />
    </Helmet>
  )
}
