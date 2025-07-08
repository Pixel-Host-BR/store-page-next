// app/layout.js
import './globals.css'
import Navbar from '../app/components/navbar'
import BenefitsSection from '../app/components/BenefitsSection'

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-site">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}
