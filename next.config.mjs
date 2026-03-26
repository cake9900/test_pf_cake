/** @type {import('next').NextConfig} */
const nextConfig = {
  // Важно для GitHub Pages: указываем имя репозитория
  // Раскомментируй и замени 'your-repo-name' на точное имя своего репозитория
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || '',

  // Статический экспорт для хостинга на GitHub Pages
  output: 'export',

  // Настройка изображений для оптимизации
  images: {
    unoptimized: true, // Требуется для static export
  },

  // Подавить сбор телеметрии
  reactStrictMode: true,
}

export default nextConfig;
