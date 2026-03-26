'use client'

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Код ошибки */}
        <h1 className={styles.code}>404</h1>
        
        {/* Иконка/иллюстрация */}
        <div className={styles.icon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
        </div>

        {/* Текст ошибки */}
        <h2 className={styles.title}>Страница не найдена</h2>
        <p className={styles.description}>
          Страница, которую вы ищете, не существует или была перемещена.
        </p>

        {/* Кнопки навигации */}
        <div className={styles.actions}>
          <Link href="/" className={styles.buttonPrimary}>
            <Home size={20} />
            На главную
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className={styles.buttonSecondary}
          >
            <ArrowLeft size={20} />
            Назад
          </button>
        </div>
      </div>
    </div>
  )
}
