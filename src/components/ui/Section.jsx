import styles from './Section.module.css'

/**
 * Обёртка для секций с общим стилем
 * @param {Object} props
 * @param {string} props.id - ID секции для якорных ссылок
 * @param {string} props.className - Дополнительные классы
 * @param {React.ReactNode} props.children - Содержимое секции
 * @param {boolean} props.alternative - Альтернативный фон
 */
export default function Section({
  id,
  className = '',
  children,
  alternative = false,
  ...props
}) {
  return (
    <section
      id={id}
      className={`${styles.section} ${alternative ? styles.alternative : ''} ${className}`}
      {...props}
    >
      <div className={styles.container}>
        {children}
      </div>
    </section>
  )
}
