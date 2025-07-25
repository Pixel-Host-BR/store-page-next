// app/layout.js
import './globals.css'
import Navbar from '../app/components/navbar'
import BenefitsSection from '../app/components/BenefitsSection'
import Footer from '../app/components/Footer';
import Script from 'next/script'

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
 <html>
   <head>
        <link rel="icon" href="https://i.imgur.com/lLi1Qo8.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"/>
    </head>
      <body className="bg-site">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Script 
          src="https://embed.tawk.to/68221a806e1d72190c2992dd/1ir2jf20l" 
          strategy="afterInteractive" 
          crossOrigin="anonymous" 
        />
      </body>
  </html>
  <Footer />
</>
  )
}
