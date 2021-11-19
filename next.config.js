/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['media.graphcms.com']
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
