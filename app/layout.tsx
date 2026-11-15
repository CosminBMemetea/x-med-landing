import type { Metadata, Viewport } from 'next'
import { basePath } from '@/lib/basePath'
import './globals.css'

export const metadata: Metadata = {
  title: 'Home ➤ x-edeum',
  description: 'XΞDΞUM: revolutionize healthcare with effortless medical system navigation and care.',
  icons: { icon: `${basePath}/logo_vector-file.svg` },
  referrer: 'no-referrer',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
