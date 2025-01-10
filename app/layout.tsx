import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Doolittle Development',
  description: 'A technical solutions provider.',
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
