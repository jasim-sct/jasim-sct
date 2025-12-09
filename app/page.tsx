import { Hero } from '@/components/sections/Hero'
import { HomeHighlights } from '@/components/sections/HomeHighlights'
import { generateMetadata } from '@/lib/seo'
import { StructuredData } from '@/components/SEO/StructuredData'
import type { Metadata } from 'next'

export const metadata: Metadata = generateMetadata({
  title: 'Home — TypeScript MERN Stack Developer Portfolio',
  description:
    'Portfolio of Muhammed Jasim M C, a TypeScript-focused Full Stack Developer specializing in MERN stack, React, Node.js, Express, MongoDB, PostgreSQL, and cloud deployments. Currently working as Software Developer at SolutionsChamps Technologies, Coimbatore.',
  keywords: [
    'TypeScript Developer',
    'MERN Stack Developer',
    'Full Stack Developer Portfolio',
    'React Developer',
    'Node.js Developer',
    'Software Developer Coimbatore',
    'Software Developer Kerala',
    'Full Stack Engineer',
  ],
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <StructuredData type="website" />
      <Hero />
      <HomeHighlights />
    </>
  )
}
