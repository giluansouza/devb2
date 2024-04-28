import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Roboto } from 'next/font/google'
// import { Providers } from './providers'
import { Toaster } from '@/components/ui/toaster'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Devboot | Giluan Souza',
  description: 'Desenvolvedor Fullstack web e mobile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={roboto.className}>
      <body className="w-full h-full bg-background font-sans antialiased">
        {children}
        <Toaster />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7S88FJ2TWH"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7S88FJ2TWH');
          `}
        </Script>
      </body>
    </html>
  )
}
