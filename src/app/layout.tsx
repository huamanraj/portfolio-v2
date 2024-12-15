
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/theme-provider'
import { Navigation } from '@/components/navigation'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: "Aman Raj - Full Stack Developer Portfolio",
  description:
    "Explore the portfolio of Aman Raj, a full-stack developer specializing in building scalable web applications. Discover projects, skills, and opportunities for collaboration.",
  keywords:
    "full stack developer, web applications, Next.js, portfolio, Aman Raj",
  author: "Aman Raj",
  openGraph: {
    title: "Aman Raj - Full Stack Developer Portfolio",
    description: "Explore my work and projects as a full-stack developer.",
    url: "https://www.aman-raj.xyz/",
    type: "website",
    image: "https://www.github.com/huamanraj.png", 
  },
  twitter: {
    cardType: "summary_large_image",
    site: "huamanraj",
  },
};


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
            <main className="max-w-[700px] mx-auto px-6 py-10 bg-background">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}