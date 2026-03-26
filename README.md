# 🚀 Портфолио разработчика на Next.js

Современное статическое портфолио, разработанное на **Next.js 14+** с **App Router**, оптимизированное для деплоя на **GitHub Pages**.

## 📋 Оглавление

- [Демо](#-демо)
- [Технологии](#-технологии)
- [Быстрый старт](#-быстрый-старт)
- [Настройка](#-настройка)
- [Структура проекта](#-структура-проекта)
- [Доступные команды](#-доступные-команды)
- [Деплой на GitHub Pages](#-деплой-на-github-pages)
- [Кастомизация](#-кастомизация)
- [SEO оптимизация](#-seo-оптимизация)
- [Частые проблемы](#-частые-проблемы)

---

## 🌐 Демо

[**Посмотреть демо**](https://your-username.github.io/portfolio)

---

## 🛠 Технологии

| Категория | Технология |
|-----------|------------|
| **Фреймворк** | Next.js 14+ (App Router) |
| **Язык** | JavaScript (ES6+) |
| **Стилизация** | CSS Modules + CSS Variables |
| **Иконки** | Lucide React |
| **Хостинг** | GitHub Pages |
| **CI/CD** | GitHub Actions |

---

## 🚀 Быстрый старт

### Требования

- Node.js 18+ ([скачать](https://nodejs.org/))
- npm или yarn

### Установка

```bash
# Клонируйте репозиторий
git clone https://github.com/your-username/portfolio.git

# Перейдите в директорию проекта
cd portfolio

# Установите зависимости
npm install

# Запустите режим разработки
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

---

## ⚙️ Настройка

### 1. Создайте файл `.env.local`

Скопируйте `.env.example` в `.env.local` и заполните своими данными:

```bash
cp .env.example .env.local
```

### 2. Заполните переменные окружения

```env
# GitHub Pages настройки
# Для деплоя укажите: /имя-репозитория
NEXT_PUBLIC_BASE_PATH=/portfolio
NEXT_PUBLIC_ASSET_PREFIX=/portfolio/

# URL сайта для SEO
NEXT_PUBLIC_SITE_URL=https://your-username.github.io
NEXT_PUBLIC_SITE_NAME="Моё Портфолио"
NEXT_PUBLIC_AUTHOR_NAME="Иван Иванов"
NEXT_PUBLIC_AUTHOR_EMAIL="ivan@example.com"

# Соцсети
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-username
NEXT_PUBLIC_TELEGRAM_URL=https://t.me/your-username
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/your-username

# Форма обратной связи (Formspree)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

---

## 📁 Структура проекта

```
portfolio/
├── .github/workflows/
│   └── nextjs.yml          # GitHub Actions для деплоя
├── public/
│   ├── images/             # Изображения проектов
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── globals.css     # Глобальные стили
│   │   ├── layout.js       # Корневой layout
│   │   ├── page.js         # Главная страница
│   │   ├── metadata.js     # SEO метаданные
│   │   └── not-found.js    # 404 страница
│   ├── components/
│   │   ├── Layout/         # Header, Footer
│   │   ├── Sections/       # Hero, About, Projects...
│   │   ├── ui/             # Button, Section
│   │   └── SEO/            # MetaTags компонент
│   ├── data/
│   │   └── portfolio.js    # Данные портфолио
│   └── lib/
│       └── utils.js        # Утилиты
├── next.config.mjs         # Конфигурация Next.js
├── next-sitemap.config.js  # Конфигурация sitemap
└── package.json
```

---

## 📜 Доступные команды

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запуск режима разработки |
| `npm run build` | Сборка продакшн версии |
| `npm run start` | Запуск продакшн сервера |
| `npm run lint` | Проверка ESLint |
| `npm run format` | Форматирование кода Prettier |
| `npm run sitemap` | Генерация sitemap.xml |
| `npm run build:export` | Сборка + генерация sitemap |

---

## 🌍 Деплой на GitHub Pages

### Шаг 1: Создайте репозиторий на GitHub

```bash
# Инициализируйте git (если ещё не инициализирован)
git init

# Добавьте все файлы
git add .

# Сделайте первый коммит
git commit -m "Initial commit"

# Добавьте удалённый репозиторий
git remote add origin https://github.com/your-username/portfolio.git

# Отправьте в main ветку
git push -u origin main
```

### Шаг 2: Настройте next.config.mjs

Откройте `next.config.mjs` и раскомментируйте настройки:

```javascript
const nextConfig = {
  basePath: '/portfolio',  // Имя вашего репозитория
  assetPrefix: '/portfolio/',
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}
```

### Шаг 3: Настройте GitHub Pages

1. Перейдите в **Settings** → **Pages** вашего репозитория
2. В разделе **Build and deployment**:
   - **Source**: GitHub Actions
3. GitHub Actions workflow уже настроен в `.github/workflows/nextjs.yml`

### Шаг 4: Запустите деплой

После пуша в ветку `main`, GitHub Actions автоматически:
1. Соберёт проект
2. Создаст статические файлы в папке `out/`
3. Задеплоит на GitHub Pages

Ваш сайт будет доступен по адресу:
```
https://your-username.github.io/portfolio
```

### Шаг 5: Проверьте деплой

1. Откройте вкладку **Actions** в репозитории
2. Убедитесь, что workflow завершился успешно ✅
3. Перейдите по ссылке деплоя

---

## 🎨 Кастомизация

### Изменение данных портфолио

Откройте `src/data/portfolio.js` и измените:

```javascript
export const personalInfo = {
  name: 'Ваше Имя',
  role: 'Ваша Роль',
  // ... остальные поля
}

export const projects = [
  {
    id: 1,
    title: 'Название проекта',
    // ... остальные поля
  },
]
```

### Изменение цветовой схемы

Откройте `src/app/globals.css` и измените CSS-переменные:

```css
:root {
  --color-accent-primary: #6366f1;  /* Ваш акцентный цвет */
  --gradient-primary: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
}
```

### Добавление изображений проектов

1. Поместите изображения в `public/images/`
2. Обновите пути в `src/data/portfolio.js`:

```javascript
{
  image: '/images/project-1.jpg',
  // ...
}
```

---

## 🔍 SEO оптимизация

### Метатеги

Метатеги настраиваются в `src/app/metadata.js`:

```javascript
export const metadata = generateMetadata({
  title: 'Иван Иванов - Fullstack Разработчик',
  description: 'Портфолио разработчика...',
  image: '/og-image.jpg',
})
```

### Sitemap

Для генерации sitemap.xml выполните:

```bash
npm run sitemap
```

Файл `sitemap.xml` будет создан в папке `public/`.

### Open Graph изображение

Создайте изображение `public/og-image.jpg` (рекомендуемый размер: 1200x630px).

---

## ⚠️ Частые проблемы

### Проблема: Изображения не загружаются после деплоя

**Решение:** Убедитесь, что `basePath` и `assetPrefix` настроены правильно:

```javascript
// next.config.mjs
basePath: '/имя-репозитория',
assetPrefix: '/имя-репозитория/',
```

### Проблема: 404 при навигации

**Решение:** Для статического экспорта Next.js требует `.html` расширения. Убедитесь, что ссылки ведут на правильные пути.

### Проблема: Workflow не запускается

**Решение:**
1. Проверьте, что ветка называется `main`
2. Проверьте права доступа в Settings → Actions
3. Попробуйте запустить workflow вручную из вкладки Actions

### Проблема: Форма не отправляется

**Решение:**
1. Зарегистрируйтесь на [Formspree](https://formspree.io)
2. Создайте новую форму
3. Вставьте полученный URL в `.env.local`:

```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

---

## 📝 Лицензия

MIT License — смотрите [LICENSE](LICENSE) файл.

---

## 👤 Контакты

- **Автор:** Иван Иванов
- **Email:** ivan@example.com
- **GitHub:** [@your-username](https://github.com/your-username)
- **Telegram:** [@your-username](https://t.me/your-username)

---

## 🙏 Благодарности

- [Next.js](https://nextjs.org/) — фреймворк
- [Lucide React](https://lucide.dev/) — иконки
- [GitHub Pages](https://pages.github.com/) — хостинг

---

**Сделано с ❤️ и Next.js**
