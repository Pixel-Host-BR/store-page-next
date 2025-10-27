import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const { getArticle } = await import('../../config/knowledge-base')
  const article = getArticle(id)
  
  if (!article) {
    return {
      title: 'Artigo não encontrado - PixelHost',
    }
  }

  return {
    title: `${article.title} - PixelHost`,
    description: article.description,
    keywords: article.tags.join(', '),
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      url: `https://pixelhostbr.com/help/${id}`,
    },
  }
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

