import './globals.css'

import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import { Toaster } from 'sonner'
import {GoogleTagManager} from '@next/third-parties/google'


const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight:['400', '500', '600', '700'],

})

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Smart Consig',
  description: 'Há 5 anos atuando com credibilidade, segurança e qualidade.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <GoogleTagManager gtmId='GTM-KX2X2J86'/>
      <body className={`${montserrat.className} ${openSans.variable} antialiased`}>
        <main>{children}</main>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}