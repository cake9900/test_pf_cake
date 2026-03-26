/**
 * ДАННЫЕ ПОРТФОЛИО
 * Замените значения на свои данные
 */

export const personalInfo = {
  name: 'Евгений',
  role: 'Fullstack Разработчик',
  tagline: 'Создаю  веб-приложения с фокусом на UX и производительность',
  bio: `Привет! Я новичек в создании веб-приложений. 
    Специализируюсь на React, Next.js и Node.js. Люблю решать сложные задачи 
    и создавать продукты, которые приносят пользу пользователям.
    !ВНИМАНИЕ!
    [Этот профиль для учебы(Колледжа). Все проекты которые упоминаю от других 
    разработчиков я не делал. Я их не присваиваю себе. Посетите их и посмотрите какие они крутые.
    В [] написан автор проекта по ссылке. Описание ложное.
    Спасибо за понимание]`,
  
  // Контакты
  email: 'kholodok06@bk.ru',
  location: 'Сочи, Россия',
  availability: 'Открыт к предложениям',
  
  // Соцсети
  social: {
    github: 'https://github.com/cake9900',
    telegram: 'https://t.me/bot_callsilence',
    gitlab: '',
    twitter: 'https://x.com/zheka9900',
  },
}

export const skills = [
  // Frontend
  { name: 'React', level: 5, category: 'frontend' },
  { name: 'Next.js', level: 5, category: 'frontend' },
  { name: 'TypeScript', level: 5, category: 'frontend' },
  { name: 'JavaScript (ES6+)', level: 5, category: 'frontend' },
  { name: 'HTML5/CSS3', level: 5, category: 'frontend' },
  { name: 'Tailwind CSS', level: 5, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 5, category: 'backend' },
  { name: 'Express.js', level: 5, category: 'backend' },
  { name: 'Python', level: 15, category: 'backend' },
  { name: 'PostgreSQL', level: 5, category: 'backend' },
  { name: 'MongoDB', level: 5, category: 'backend' },
  
  // Tools & DevOps
  { name: 'Git', level: 5, category: 'tools' },
  { name: 'Docker', level: 5, category: 'tools' },
  { name: 'AWS', level: 5, category: 'tools' },
  { name: 'CI/CD', level: 5, category: 'tools' },
]

export const experiences = [
  {
    id: 1,
    company: 'Tech Company',
    role: 'Junior Frontend Developer',
    period: '2023 — Настоящее время',
    description: [
      'Разработка архитектуры и развитие крупного e-commerce проекта',
      'Менторство junior-разработчиков, код-ревью',
      'Оптимизация производительности (Lighthouse 95+)',
      'Внедрение TypeScript и современных практик разработки',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'GraphQL'],
  },
  {
    id: 2,
    company: 'Web Studio',
    role: 'Fullstack Developer',
    period: '2021 — 2023',
    description: [
      'Разработка сайтов и веб-приложений для клиентов',
    ],
    technologies: ['Node.js', 'Express', 'React', 'MongoDB'],
  },
]

export const projects = [
  {
    id: 1,
    title: 'E-commerce Платформа',
    description: 'Полнофункциональный интернет-магазин с корзиной, оплатой и админ-панелью',
    longDescription: `Масштабный проект интернет-магазина с каталогом товаров, 
      умным поиском, системой отзывов, без интеграции платёжных систем. 
      Реализована админ-панель для управления товарами и заказами. [MariaSutyagina]`,
    
    image: '/images/project-1.jpg', // Замените на своё изображение
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma'],
    features: [
      'Каталог с фильтрами и поиском',
      'Корзина и оформление заказа',
      'Интеграция Stripe для оплаты',
      'Личный кабинет пользователя',
      'Админ-панель',
    ],
    
    links: {
      demo: '',
      github: 'https://github.com/PraktikaCore/e-commerce-app',
    },
    
    featured: true,
  },
  {
    id: 2,
    title: 'Task Manager',
    description: 'Приложение для управления задачами с drag-and-drop и командной работой',
    longDescription: `Веб-приложение для управления проектами по методологии Kanban. 
      Поддерживает создание команд, назначение задач, отслеживание прогресса 
      и уведомления в реальном времени. [CrazyJson]`,
    
    image: '/images/project-2.jpg',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    features: [
      'Drag-and-drop доски задач',
      'Командная работа',
      'Real-time обновления',
      'Уведомления',
      'История активности',
    ],
    
    links: {
      demo: '',
      github: 'https://github.com/CrazyJson/TaskManager',
    },
    
    featured: true,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Дашборд погоды с прогнозом и интерактивными картами',
    longDescription: `Приложение показывает текущую погоду и прогноз на 7 дней 
      для любого города мира. Интеграция с OpenWeatherMap API, 
      интерактивные карты и красивые визуализации данных. [matopeto]`,
    
    image: '/images/project-3.jpg',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS Modules'],
    features: [
      'Прогноз на 7 дней',
      'Интерактивные карты',
      'Визуализация данных',
      'Сохранение избранных городов',
      'Тёмная/светлая тема',
    ],
    
    links: {
      demo: '',
      github: 'https://github.com/matopeto/kindle-weather-dashboard',
    },
    
    featured: false,
  },
]

export const navLinks = [
  { href: '#about', label: 'Обо мне' },
  { href: '#skills', label: 'Навыки' },
  { href: '#projects', label: 'Проекты' },
  { href: '#experience', label: 'Опыт' },
  { href: '#contact', label: 'Контакты' },
]

export const footerLinks = {
  social: [
    { name: 'GitHub', url: personalInfo.social.github, icon: 'github' },
    { name: 'Telegram', url: personalInfo.social.telegram, icon: 'telegram' },
  ],
  navigation: navLinks,
}
