import { metadata, metadataBase } from './metadata'
import { structuredData } from './metadata'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

import './globals.css'

// Экспортируем метаданные для Next.js
export { metadata, metadataBase }

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        {/* JSON-LD структурированные данные */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
      </head>
      <body>
        <div className="app">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
