import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'sis-eco',
  description: 'Created with v0',
  generator: 'fazm',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
