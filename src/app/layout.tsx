import './globals.css'
import Navbar from '../app/components/navbar'
import Footer from '../app/components/Footer';
import FacebookPixel from './components/FacebookPixel';
import FacebookPixelHead from './components/FacebookPixelHead';
import Script from 'next/script'
import { ReactNode, Suspense } from 'react';
import { seoConfig, generateMetadata } from './seo-config'

export const metadata = generateMetadata('home');

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="bg-[#181826] min-h-screen">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BVTZVVEJRL"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BVTZVVEJRL');
          `}
        </Script>
        <link rel="icon" href="https://i.imgur.com/2pr5v85.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"/>
        <meta name="theme-color" content="#181826" />
        <meta name="msapplication-navbutton-color" content="#181826" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <FacebookPixelHead />
      </head>
      <body className="bg-[#181826] min-h-screen">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <FacebookPixel />
        <Script
          src="https://embed.tawk.to/68221a806e1d72190c2992dd/1ir2jf20l"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  )
}
