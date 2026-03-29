/** @type {import('next').NextConfig} */
const nextConfig = {
  // Важно для GitHub Pages: указываем имя репозитория
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || '',

  // Статический экспорт для хостинга на GitHub Pages
  output: 'export',

  // Отключаем оптимизацию изображений (требуется для static export)
  images: {
    unoptimized: true,
  },

  reactStrictMode: true,
}

export default nextConfig;
