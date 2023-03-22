/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    loader: 'imgix',
    path: '/',
  },
  // assetPrefix: isProd ? 'http://123.57.84.214/' : '',
  assetPrefix: isProd ? 'http://www.hiss.com.cn/' : '' 
  // https://dev.to/adrai/static-html-export-with-i18n-compatibility-in-nextjs-8cd
  // https://www.npmjs.com/package/next-export-i18n
 
};

module.exports = nextConfig;
