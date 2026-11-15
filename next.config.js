/**
 * @type {import('next').NextConfig}
 *
 * Fully static export (no server, no API routes, no runtime data collection).
 * NEXT_PUBLIC_BASE_PATH is set by the GitHub Pages workflow (e.g. "/x-med-landing").
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
}

module.exports = nextConfig
