import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { Providers } from './providers'
import { ClientLayout } from '@/components/layout/ClientLayout'
import { StructuredData } from '@/components/SEO/StructuredData'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'Muhammed Jasim M C — TypeScript MERN Stack Developer | Full Stack Developer Portfolio',
  description:
    'Portfolio of Muhammed Jasim M C, a TypeScript-focused Full Stack Developer specializing in MERN stack, React, Node.js, and scalable cloud deployments. Software Developer at SolutionsChamps Technologies, Coimbatore, India.',
  keywords: [
    'TypeScript Developer',
    'MERN Developer',
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'Software Developer Coimbatore',
    'Software Developer Kerala',
  ],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
      </head>
      <body className="min-h-screen bg-black dark:bg-black bg-white text-white dark:text-white text-gray-900 antialiased">
        <StructuredData type="website" />
        <StructuredData type="person" />
        <StructuredData type="organization" />
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  )
}
