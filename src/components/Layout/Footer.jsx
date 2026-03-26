import { Github, Mail, Heart } from 'lucide-react'
import { personalInfo, footerLinks } from '@/data/portfolio'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Основная часть футера */}
        <div className={styles.main}>
          {/* Левая колонка - информация */}
          <div className={styles.col}>
            <h3 className={styles.brand}>
              <span className={styles.brandAccent}>{personalInfo.name}</span>
            </h3>
            <p className={styles.tagline}>{personalInfo.tagline}</p>
            
            {/* Соцсети */}
            <div className={styles.social}>
              {footerLinks.social.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  {getIcon(link.icon)}
                </a>
              ))}
              <a
                href={`mailto:${personalInfo.email}`}
                className={styles.socialLink}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Правая колонка - навигация */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Навигация</h4>
            <ul className={styles.navList}>
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.navLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Контакты</h4>
            <ul className={styles.contactList}>
              <li>
                <a href={`mailto:${personalInfo.email}`} className={styles.contactLink}>
                  {personalInfo.email}
                </a>
              </li>
              <li className={styles.contactItem}>{personalInfo.location}</li>
            </ul>
          </div>
        </div>

        {/* Разделитель */}
        <div className={styles.divider} />

        {/* Нижняя часть */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} {personalInfo.name}. Все права защищены.
          </p>
          <p className={styles.madeWith}>
            Сделано с <Heart size={14} className={styles.heart} /> и Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}

// Функция для получения иконок
function getIcon(name) {
  const icons = {
    github: <Github size={20} />,
    telegram: (
      <svg size={20} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  }

  return icons[name] || null
}
