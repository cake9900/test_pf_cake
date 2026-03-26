'use client'

import styles from './Button.module.css'

/**
 * Кнопка с вариантами стилей
 * @param {Object} props
 * @param {string} props.variant - 'primary' | 'secondary' | 'outline' | 'ghost'
 * @param {string} props.size - 'sm' | 'md' | 'lg'
 * @param {string} props.children - Содержимое кнопки
 * @param {string} props.href - Если передан, рендерится как ссылка
 * @param {string} props.className - Дополнительные классы
 * @param {boolean} props.disabled - Состояние disabled
 * @param {React.ReactNode} props.icon - Иконка слева
 * @param {React.ReactNode} props.iconRight - Иконка справа
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  className = '',
  disabled = false,
  icon,
  iconRight,
  ...props
}) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const Component = href ? 'a' : 'button'

  return (
    <Component
      className={classes}
      href={href}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
      {iconRight && <span className={styles.icon}>{iconRight}</span>}
    </Component>
  )
}
