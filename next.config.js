/** @type {import('next').NextConfig} */

const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    loader: 'imgix',
    path: '/',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  output: 'export',

  // assetPrefix: isProd ? 'http://123.57.84.214/' : '',
  // assetPrefix: isProd ? 'http://www.hiss.com.cn/' : ''
};

module.exports = nextConfig;
