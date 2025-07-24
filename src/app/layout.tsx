// app/layout.js
import './globals.css'
import Navbar from '../app/components/navbar'
import BenefitsSection from '../app/components/BenefitsSection'
import Footer from '../app/components/Footer';

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
      <body className="bg-site">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </>
  )
}
