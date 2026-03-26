import { Code2 } from 'lucide-react'
import Section from '@/components/ui/Section'
import { skills } from '@/data/portfolio'
import styles from './Skills.module.css'

export default function Skills() {
  // Получаем уникальные категории
  const categories = [...new Set(skills.map(s => s.category))]

  const categoryIcons = {
    frontend: '🎨',
    backend: '⚙️',
    tools: '🛠️',
  }

  const categoryNames = {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Инструменты & DevOps',
  }

  return (
    <Section id="skills">
      <div className={styles.content}>
        {/* Заголовок */}
        <div className={styles.header}>
          <span className={styles.subtitle}>Навыки</span>
          <h2 className={styles.title}>
            Технологии, которые я <span className={styles.accent}>использую</span>
          </h2>
        </div>

        {/* Сетка навыков */}
        <div className={styles.grid}>
          {categories.map((category) => {
            const categorySkills = skills.filter(s => s.category === category)
            
            return (
              <div key={category} className={styles.categoryCard}>
                <div className={styles.categoryHeader}>
                  <span className={styles.categoryIcon}>{categoryIcons[category]}</span>
                  <h3 className={styles.categoryTitle}>{categoryNames[category]}</h3>
                </div>
                
                <div className={styles.skillsCloud}>
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className={styles.skillTag}
                      title={`${skill.name}: ${skill.level}%`}
                    >
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Дополнительная информация */}
        <div className={styles.footer}>
          <div className={styles.footerCard}>
            <Code2 size={32} className={styles.footerIcon} />
            <p className={styles.footerText}>
              Постоянно изучаю новые технологии и улучшаю свои навыки. 
              Открыт к работе с современными инструментами и фреймворками.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
