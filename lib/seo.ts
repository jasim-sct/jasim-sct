import { Metadata } from 'next'

const siteConfig = {
  name: 'Muhammed Jasim M C',
  title: 'Muhammed Jasim M C — TypeScript MERN Stack Developer | Full Stack Developer Portfolio',
  description: 'Portfolio of Muhammed Jasim M C, a TypeScript-focused Full Stack Developer specializing in MERN stack, React, Node.js, and scalable cloud deployments. Software Developer at SolutionsChamps Technologies, Coimbatore, India.',
  url: 'https://jasim-sct.vercel.app',
  ogImage: 'https://jasim-sct.vercel.app/og-image.png',
  keywords: [
    'TypeScript Developer',
    'MERN Developer',
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'Express.js Developer',
    'MongoDB Developer',
    'PostgreSQL Developer',
    'Software Developer Coimbatore',
    'Software Developer Kerala',
    'Full Stack Engineer Portfolio',
    'JavaScript Developer Portfolio',
    'TypeScript MERN Stack',
    'Cloud Deployment Expert',
    'Nginx Configuration',
    'DevOps Engineer',
  ],
  author: 'Muhammed Jasim M C',
  location: 'Coimbatore, Tamil Nadu, India',
  currentRole: 'Software Developer at SolutionsChamps Technologies',
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  path = '',
  type = 'website',
}: {
  title?: string
  description?: string
  keywords?: string[]
  path?: string
  type?: 'website' | 'profile' | 'article'
}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title
  const pageDescription = description || siteConfig.description
  const pageKeywords = [...siteConfig.keywords, ...keywords].join(', ')

  // Normalize path and build absolute page URL
  const normalizedPath = path ? (path.startsWith('/') ? path : `/${path}`) : '/'
  const pageUrl = new URL(normalizedPath, siteConfig.url).toString()

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type,
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      locale: 'en_US',
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [siteConfig.ogImage],
      creator: '@mjasimmc',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
  }
}

export const seoConfig = siteConfig

