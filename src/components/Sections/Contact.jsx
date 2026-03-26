'use client'

import { useState } from 'react'
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { personalInfo } from '@/data/portfolio'
import { isValidEmail } from '@/lib/utils'
import styles from './Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [errors, setErrors] = useState({})

  // Валидация формы
  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Введите имя'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Введите email'
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Введите корректный email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Введите сообщение'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Сообщение должно быть не менее 10 символов'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Обработка отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) return

    setStatus('loading')

    try {
      // Если настроен Formspree
      if (process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT) {
        const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })

        if (!response.ok) {
          throw new Error('Ошибка отправки')
        }
      } else {
        // Имитация отправки (для демонстрации)
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log('Форма отправлена:', formData)
      }

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })

      // Сброс статуса через 5 секунд
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('Ошибка:', error)
      setStatus('error')

      // Сброс статуса через 5 секунд
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  // Обработка изменений в полях
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Очищаем ошибку при вводе
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <Section id="contact" alternative>
      <div className={styles.content}>
        {/* Заголовок */}
        <div className={styles.header}>
          <span className={styles.subtitle}>Контакты</span>
          <h2 className={styles.title}>
            Давайте <span className={styles.accent}>свяжемся</span>
          </h2>
          <p className={styles.description}>
            Открыт для новых возможностей и интересных проектов. 
            Напишите мне, и я отвечу в ближайшее время!
          </p>
        </div>

        <div className={styles.grid}>
          {/* Контактная информация */}
          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Mail size={24} />
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>Email</h3>
                <a href={`mailto:${personalInfo.email}`} className={styles.infoLink}>
                  {personalInfo.email}
                </a>
                <p className={styles.infoText}>
                  Отвечаю в течение 24 часов
                </p>
              </div>
            </div>

            {/* Дополнительные способы связи */}
            <div className={styles.socialLinks}>
              <h3 className={styles.socialTitle}>Или найдите меня в соцсетях:</h3>
              <div className={styles.socialList}>
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  GitHub →
                </a>
                <a
                  href={personalInfo.social.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  Telegram →
                </a>
              </div>
            </div>

            {/* Декоративный элемент */}
            <div className={styles.decoration} aria-hidden="true" />
          </div>

          {/* Форма обратной связи */}
          <div className={styles.formSection}>
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              {/* Поле имени */}
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Имя <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.name ? styles.error : ''}`}
                  placeholder="Иван Иванов"
                  disabled={status === 'loading'}
                />
                {errors.name && (
                  <span className={styles.errorText}>{errors.name}</span>
                )}
              </div>

              {/* Поле email */}
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.email ? styles.error : ''}`}
                  placeholder="ivan@example.com"
                  disabled={status === 'loading'}
                />
                {errors.email && (
                  <span className={styles.errorText}>{errors.email}</span>
                )}
              </div>

              {/* Поле сообщения */}
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Сообщение <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
                  placeholder="Расскажите о вашем проекте..."
                  rows={5}
                  disabled={status === 'loading'}
                />
                {errors.message && (
                  <span className={styles.errorText}>{errors.message}</span>
                )}
              </div>

              {/* Кнопка отправки */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={status === 'loading'}
                icon={
                  status === 'loading' ? (
                    <span className={styles.spinner} />
                  ) : status === 'success' ? (
                    <CheckCircle size={20} />
                  ) : (
                    <Send size={20} />
                  )
                }
              >
                {status === 'loading' ? 'Отправка...' :
                 status === 'success' ? 'Отправлено!' :
                 status === 'error' ? 'Ошибка' :
                 'Отправить сообщение'}
              </Button>

              {/* Статус сообщения */}
              {status === 'success' && (
                <div className={`${styles.statusMessage} ${styles.success}`}>
                  <CheckCircle size={20} />
                  <span>Сообщение успешно отправлено! Я свяжусь с вами в ближайшее время.</span>
                </div>
              )}

              {status === 'error' && (
                <div className={`${styles.statusMessage} ${styles.error}`}>
                  <AlertCircle size={20} />
                  <span>Произошла ошибка при отправке. Пожалуйста, попробуйте позже или напишите напрямую на email.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </Section>
  )
}
