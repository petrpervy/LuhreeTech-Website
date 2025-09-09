import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luhreetech - AI Automations Done For You',
  description: 'We give small businesses a reliable digital employee — handling tasks, calls, and workflows without adding headcount.',
  keywords: ['ai automation', 'small business automation', 'digital employee'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}