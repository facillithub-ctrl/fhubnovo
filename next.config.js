/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // NOTA: 'next-pwa' foi removido.
  // Ele força o Webpack, que está em conflito com o Tailwind v4.
  // Vamos fazer o CSS funcionar primeiro.
};

module.exports = nextConfig;