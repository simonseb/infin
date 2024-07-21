/** @type {import('next').NextConfig} */

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  images: {
    // formats: ['image/avif', 'image/webp'],
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cheerful-crown-70fbfb15f1.media.strapiapp.com',
      },
      // {
      //   protocol: 'http',
      //   hostname: 'localhost'
      // }
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    );
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  env: {
    STRAPI_URL: 'https://cheerful-crown-70fbfb15f1.strapiapp.com/',
  },
};

export default nextConfig;
