/**
 * SEO-компонент для генерации метатегов
 * Используется для расширения метаданных страниц
 */

/**
 * Генерирует полные метаданные для страницы
 * @param {Object} options - Опции для генерации метаданных
 * @returns {Object} Метаданные для Next.js
 */
export function generateMetadata({
  title,
  description,
  image,
  url,
  type = 'website',
}) {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Моё Портфолио'
  const author = process.env.NEXT_PUBLIC_AUTHOR_NAME || ''
  const defaultUrl = process.env.NEXT_PUBLIC_SITE_URL || ''

  return {
    title: {
      default: siteName,
      template: `%s | ${siteName}`,
    },
    description: description || `Портфолио разработчика - ${author}`,
    
    // Open Graph
    openGraph: {
      title: title || siteName,
      description: description,
      type,
      url: url || defaultUrl,
      siteName,
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title || siteName,
            },
          ]
        : [],
      locale: 'ru_RU',
    },

    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: title || siteName,
      description,
      images: image ? [image] : [],
      creator: author,
    },

    // Robots
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

    // Верификация
    verification: {
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
    },
  }
}

/**
 * Генерирует JSON-LD структурированные данные
 * @param {Object} options - Данные для структурированных данных
 * @returns {string} JSON-LD строка
 */
export function generateStructuredData({
  name,
  jobTitle,
  email,
  url,
  sameAs,
  image,
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    email,
    url,
    image,
    sameAs,
    knowsAbout: [
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Node.js',
      'Frontend Development',
      'Web Development',
    ],
  }

  return JSON.stringify(data)
}
