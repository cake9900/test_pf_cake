# 📋 Инструкция: GitHub README-визитка

## 🎯 Что это такое

Это руководство поможет вам использовать ваше Next.js портфолио как **README-визитку** для вашего GitHub профиля (`github.com/cake9900`).

---

## 📌 Вариант 1: README для основного профиля GitHub

### Шаг 1: Создайте специальный репозиторий

1. Создайте **новый репозиторий** с именем **точно** как ваш username:
   ```
   cake9900/cake9900
   ```

2. Репозиторий должен быть **публичным**

### Шаг 2: Создайте README.md

В созданном репозитории создайте файл `README.md` со следующим содержимым:

```markdown
# 👋 Привет, я Евгений!

**Fullstack Разработчик** | 📍 Сочи, Россия

[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/bot_callsilence)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/zheka9900)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:kholodok06@bk.ru)

---

## 🚀 Обо мне

Создаю веб-приложения с фокусом на UX и производительность. Специализируюсь на React, Next.js и Node.js.

### 🛠 Мой стек

**Frontend:**
- React / Next.js / TypeScript
- Tailwind CSS / CSS Modules

**Backend:**
- Node.js / Express.js
- PostgreSQL / MongoDB
- Python (базово)

**Инструменты:**
- Git / Docker / CI/CD / AWS

---

## 📊 GitHub Статистика

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=cake9900&show_icons=true&theme=radical)
![Top Langs](https://github-readme-stats.vercel.app/api/top-langs?username=cake9900&layout=compact&theme=radical)

---

## 🔥 Мои проекты

### 🛒 E-commerce Платформа
Полнофункциональный интернет-магазин с корзиной и админ-панелью  
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/PraktikaCore/e-commerce-app)

### 📋 Task Manager
Kanban-приложение для управления задачами с real-time обновлениями  
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/CrazyJson/TaskManager)

### 🌤 Weather Dashboard
Дашборд погоды с прогнозом на 7 дней и интерактивными картами  
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/matopeto/kindle-weather-dashboard)

---

## 📈 Активность

![GitHub Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=cake9900&theme=react-dark)

---

## 💬 Связаться со мной

- **Email:** kholodok06@bk.ru
- **Telegram:** [@bot_callsilence](https://t.me/bot_callsilence)
- **Twitter:** [@zheka9900](https://x.com/zheka9900)

---

<p align="center">
  <em>Сделано с ❤️ и Next.js</em>
</p>
```

### Шаг 3: Настройте портфолио-сайт

Ваш основной проект портфолио задеплойте как отдельный сайт:

1. Создайте репозиторий `test_pf_cake` (или используйте существующий)
2. Настройте GitHub Pages (см. ниже)
3. Добавьте ссылку на сайт в профиль GitHub

---

## 📌 Вариант 2: Портфолио-сайт на GitHub Pages

### Шаг 1: Настройте переменные окружения

```bash
# Создайте файл .env.local
cp .env.example .env.local
```

Файл `.env.local` уже настроен для вашего репозитория `test_pf_cake`.

### Шаг 2: Проверьте next.config.mjs

Откройте `next.config.mjs` и **раскомментируйте** настройки basePath:

```javascript
const nextConfig = {
  basePath: '/test_pf_cake',  // Имя вашего репозитория
  assetPrefix: '/test_pf_cake/',
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

export default nextConfig
```

### Шаг 3: Создайте GitHub Actions workflow

Убедитесь, что файл `.github/workflows/nextjs.yml` существует:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Шаг 4: Задеплойте

```bash
# Инициализируйте git (если ещё не инициализирован)
git init
git add .
git commit -m "Initial commit"

# Добавьте удалённый репозиторий
git remote add origin https://github.com/cake9900/test_pf_cake.git

# Отправьте в main ветку
git branch -M main
git push -u origin main
```

### Шаг 5: Настройте GitHub Pages

1. Перейдите в **Settings** → **Pages** репозитория `test_pf_cake`
2. В разделе **Build and deployment**:
   - **Source**: GitHub Actions
3. GitHub Actions автоматически запустится

Ваш сайт будет доступен по адресу:
```
https://cake9900.github.io/test_pf_cake
```

---

## 📌 Вариант 3: Комбинированный (Рекомендуется)

Используйте **оба варианта**:

| Компонент | Назначение |
|-----------|------------|
| **README в `cake9900/cake9900`** | Визитка в профиле GitHub |
| **Сайт `cake9900.github.io/test_pf_cake`** | Полноценное портфолио |

### Как связать их:

1. В README профиль добавьте ссылку на сайт:
   ```markdown
   [🌐 Моё портфолио](https://cake9900.github.io/test_pf_cake)
   ```

2. В портфолио сайте в футере добавьте ссылку на GitHub:
   ```javascript
   // src/data/portfolio.js
   social: {
     github: 'https://github.com/cake9900',
     // ...
   }
   ```

---

## 🎨 Кастомизация README

### Бейджи для навыков

Добавьте в README:

```markdown
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
```

### GitHub Stats (виджеты)

```markdown
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=cake9900&show_icons=true&theme=radical)
![Streak Stats](https://github-readme-streak-stats.herokuapp.com/?user=cake9900&theme=radical)
```

### Динамический профиль

```markdown
[![GitHub Activity](https://github-readme-activity-graph.vercel.app/graph?username=cake9900&theme=react-dark)](https://github.com/cake9900)
```

---

## ⚠️ Важные замечания

### Для портфолио-сайта:

1. **basePath должен совпадать с именем репозитория**
   - Репозиторий: `test_pf_cake`
   - basePath: `/test_pf_cake`

2. **Изображения проектов**
   - Поместите скриншоты в `public/images/`
   - Обновите пути в `src/data/portfolio.js`

3. **Форма обратной связи**
   - Зарегистрируйтесь на [Formspree](https://formspree.io)
   - Создайте форму и вставьте URL в `.env.local`

### Для README-визитки:

1. Репозиторий должен называться **точно** как username
2. README должен быть в корне репозитория
3. Изменения отображаются в течение 1-2 минут

---

## 🔗 Полезные ссылки

- [GitHub Profile README Guide](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme)
- [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats)
- [Shields.io Badges](https://shields.io/)
- [GitHub Pages Documentation](https://pages.github.com/)

---

## ✅ Чек-лист готовности

- [ ] Создан репозиторий `cake9900/cake9900` с README
- [ ] Создан репозиторий `cake9900/test_pf_cake` с портфолио
- [ ] Настроен `next.config.mjs` с правильным basePath
- [ ] Настроен `.env.local` с правильными URL
- [ ] GitHub Actions workflow создан
- [ ] Сайт задеплоен на GitHub Pages
- [ ] README отображается в профиле GitHub
- [ ] Все ссылки работают корректно

---

**Готово! 🎉** Теперь у вас есть профессиональная GitHub визитка и портфолио-сайт!
