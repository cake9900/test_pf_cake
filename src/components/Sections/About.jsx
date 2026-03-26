import { User } from 'lucide-react'
import Section from '@/components/ui/Section'
import { personalInfo, skills } from '@/data/portfolio'
import styles from './About.module.css'

export default function About() {
  // Группируем навыки по категориям
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {})

  const categoryNames = {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Инструменты',
  }

  return (
    <Section id="about" alternative>
      <div className={styles.content}>
        {/* Заголовок секции */}
        <div className={styles.header}>
          <span className={styles.subtitle}>Обо мне</span>
          <h2 className={styles.title}>
            Познакомимся <span className={styles.accent}>ближе</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Фото/Аватар */}
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <div className={styles.avatarPlaceholder}>
                <User size={64} />
              </div>
              {/* Декоративные элементы */}
              <div className={styles.decoration1} aria-hidden="true" />
              <div className={styles.decoration2} aria-hidden="true" />
            </div>
            
            {/* Карточка с информацией */}
            <div className={styles.infoCard}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Имя:</span>
                <span className={styles.infoValue}>{personalInfo.name}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email:</span>
                <a href={`mailto:${personalInfo.email}`} className={styles.infoValue}>
                  {personalInfo.email}
                </a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Локация:</span>
                <span className={styles.infoValue}>{personalInfo.location}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Статус:</span>
                <span className={styles.statusBadge}>{personalInfo.availability}</span>
              </div>
            </div>
          </div>

          {/* Описание и навыки */}
          <div className={styles.textSection}>
            {/* Биография */}
            <div className={styles.bio}>
              <p>{personalInfo.bio}</p>
            </div>

            {/* Навыки по категориям */}
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category} className={styles.skillsGroup}>
                <h3 className={styles.skillsGroupTitle}>{categoryNames[category]}</h3>
                <div className={styles.skillsList}>
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className={styles.skillItem}>
                      <div className={styles.skillHeader}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillLevel}>{skill.level}%</span>
                      </div>
                      <div className={styles.skillBar}>
                        <div
                          className={styles.skillProgress}
                          style={{ width: `${skill.level}%` }}
                          aria-label={`Уровень навыка ${skill.name}: ${skill.level}%`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
