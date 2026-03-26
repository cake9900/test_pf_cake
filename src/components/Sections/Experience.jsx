import { Briefcase } from 'lucide-react'
import Section from '@/components/ui/Section'
import { experiences } from '@/data/portfolio'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <Section id="experience">
      <div className={styles.content}>
        {/* Заголовок */}
        <div className={styles.header}>
          <span className={styles.subtitle}>Опыт работы</span>
          <h2 className={styles.title}>
            Мой профессиональный <span className={styles.accent}>путь</span>
          </h2>
        </div>

        {/* Таймлайн опыта */}
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`${styles.timelineItem} ${index === experiences.length - 1 ? styles.last : ''}`}
            >
              {/* Линия таймлайна */}
              <div className={styles.timelineLine} aria-hidden="true" />
              
              {/* Точка таймлайна */}
              <div className={styles.timelineDot}>
                <Briefcase size={16} />
              </div>

              {/* Карточка опыта */}
              <div className={styles.timelineCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.headerLeft}>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                  <div className={styles.period}>{exp.period}</div>
                </div>

                {/* Описание обязанностей */}
                <ul className={styles.description}>
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {/* Технологии */}
                <div className={styles.technologies}>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
