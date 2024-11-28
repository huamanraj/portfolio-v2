import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/theme-provider'
import { Navigation } from '@/components/navigation'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <main className="max-w-[700px] mx-auto px-6 py-12">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}