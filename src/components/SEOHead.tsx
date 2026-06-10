import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
  title: string
  description: string
  path?: string
}

export default function SEOHead({ title, description, path = '' }: SEOHeadProps) {
  const baseUrl = 'https://sablecafe.ph'
  const fullUrl = `${baseUrl}${path}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
    </Helmet>
  )
}