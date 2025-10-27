import { Metadata } from 'next'
import { generateMetadata } from '../seo-config'

export const metadata: Metadata = {
  title: 'Base de Conhecimento - PixelHost',
  description: 'Encontre respostas rápidas para suas dúvidas. Guias completos, tutoriais e suporte técnico para hospedagem de servidores de jogos.',
  keywords: 'ajuda pixelhost, base de conhecimento, tutoriais servidores, suporte técnico, guias servidores de jogos',
  openGraph: {
    title: 'Base de Conhecimento - PixelHost',
    description: 'Encontre respostas rápidas para suas dúvidas sobre hospedagem de servidores de jogos.',
    url: 'https://pixelhostbr.com/help',
    type: 'website',
  },
}

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

