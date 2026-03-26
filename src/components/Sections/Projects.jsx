import { ExternalLink, Github, Star } from 'lucide-react'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { projects } from '@/data/portfolio'
import styles from './Projects.module.css'

export default function Projects() {
  // Фильтруем только избранные проекты для главной
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <Section id="projects" alternative>
      <div className={styles.content}>
        {/* Заголовок */}
        <div className={styles.header}>
          <span className={styles.subtitle}>Портфолио</span>
          <h2 className={styles.title}>
            Мои <span className={styles.accent}>проекты</span>
          </h2>
          <p className={styles.description}>
            Коллекция проектов, над которыми я работал. 
            Каждый из них демонстрирует определённые навыки и технологии.
          </p>
        </div>

        {/* Сетка проектов */}
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Изображение проекта */}
              <div className={styles.imageWrapper}>
                <div className={styles.imagePlaceholder}>
                  <span className={styles.placeholderText}>{project.title.charAt(0)}</span>
                </div>
                
                {/* Оверлей при наведении */}
                <div className={styles.overlay}>
                  <div className={styles.overlayLinks}>
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.overlayLink}
                        aria-label="Демо проекта"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.overlayLink}
                        aria-label="Исходный код"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Бейдж избранного */}
                {project.featured && (
                  <div className={styles.featuredBage}>
                    <Star size={14} />
                    <span>Избранное</span>
                  </div>
                )}
              </div>

              {/* Контент карточки */}
              <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>

                {/* Технологии */}
                <div className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Кнопки */}
                <div className={styles.cardActions}>
                  {project.links.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={<ExternalLink size={16} />}
                    >
                      Демо
                    </Button>
                  )}
                  {project.links.github && (
                    <Button
                      variant="ghost"
                      size="sm"
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={<Github size={16} />}
                    >
                      Код
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Призыв к действию */}
        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Хотите увидеть больше проектов? Посетите мой GitHub
          </p>
          <Button
            variant="primary"
            href={process.env.NEXT_PUBLIC_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            icon={<Github size={20} />}
          >
            Мой GitHub
          </Button>
        </div>
      </div>
    </Section>
  )
}
