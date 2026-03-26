import { personalInfo } from '@/data/portfolio'
import { generateMetadata, generateStructuredData } from '@/components/SEO/MetaTags'

/**
 * Метаданные для главной страницы портфолио
 * Next.js будет использовать этот объект для генерации <head>
 */
export const metadata = generateMetadata({
  title: `${personalInfo.name} - ${personalInfo.role}`,
  description: personalInfo.tagline,
  image: '/og-image.jpg', // Добавьте изображение в public/
  url: process.env.NEXT_PUBLIC_SITE_URL,
  type: 'website',
})

// Базовый URL для социальных изображений
export const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000')

/**
 * JSON-LD для структурированных данных
 * Вставляется в компонент страницы
 */
export const structuredData = generateStructuredData({
  name: personalInfo.name,
  jobTitle: personalInfo.role,
  email: personalInfo.email,
  url: process.env.NEXT_PUBLIC_SITE_URL,
  sameAs: [
    personalInfo.social.github,
    personalInfo.social.telegram,
  ].filter(Boolean),
  image: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`,
})
