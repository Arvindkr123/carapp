import { Footer, Navbar } from '@/Components'
import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Car Hub App',
  description: 'Discover best Car in the world!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
