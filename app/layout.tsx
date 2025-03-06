import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Doolittle Development',
  description: 'Providing robust tech solutions',
  openGraph: {
    title: "Doolittle Development",
    description: "Providing robust tech solutions",
    url: "https://doolittle-development.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://doolittle-development.vercel.app/dd-high-resolution-logo.png",
        alt: "Doolittle Development"
      }
    ],
    siteName: "Doolittle Development"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon link */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  )
}
