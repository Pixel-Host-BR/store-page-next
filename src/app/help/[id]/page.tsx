'use client'

import { useState, useEffect } from 'react'
import { use } from 'react'
import { 
  getArticle, 
  getRelatedArticles, 
  knowledgeCategories,
  getAllTags 
} from '../../config/knowledge-base'
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  BookOpen,
  ChevronRight,
  Tag as TagIcon
} from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const article = getArticle(resolvedParams.id)
  
  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(article.id)
  const category = knowledgeCategories[article.category]

  // Simple markdown parser
  const parseMarkdown = (content: string) => {
    const lines = content.split('\n')
    const elements: React.JSX.Element[] = []
    let inCodeBlock = false
    let codeBlock: string[] = []
    let key = 0

    const renderCodeBlock = () => {
      if (codeBlock.length > 0) {
        const code = codeBlock.join('\n').replace(/```[\w]*\n?/g, '')
        elements.push(
          <pre key={key++} className="bg-gray-800 p-4 rounded-lg overflow-x-auto my-4">
            <code className="text-sm text-green-400">{code}</code>
          </pre>
        )
        codeBlock = []
      }
      inCodeBlock = false
    }

    lines.forEach((line, index) => {
      if (line.startsWith('```')) {
        inCodeBlock = !inCodeBlock
        if (inCodeBlock) {
          renderCodeBlock()
        }
        return
      }

      if (inCodeBlock) {
        codeBlock.push(line)
        return
      }

      if (line.startsWith('# ')) {
        renderCodeBlock()
        elements.push(
          <h1 key={key++} className="text-3xl font-bold text-white mt-8 mb-4">{line.replace(/^# /, '')}</h1>
        )
      } else if (line.startsWith('## ')) {
        renderCodeBlock()
        elements.push(
          <h2 key={key++} className="text-2xl font-bold text-white mt-6 mb-3">{line.replace(/^## /, '')}</h2>
        )
      } else if (line.startsWith('### ')) {
        renderCodeBlock()
        elements.push(
          <h3 key={key++} className="text-xl font-semibold text-white mt-4 mb-2">{line.replace(/^### /, '')}</h3>
        )
      } else if (line.startsWith('- ') || line.startsWith('* ')) {
        renderCodeBlock()
        elements.push(
          <li key={key++} className="text-gray-300 ml-6 list-disc">{line.replace(/^[-*] /, '')}</li>
        )
      } else if (line.trim() === '') {
        elements.push(<br key={key++} />)
      } else {
        renderCodeBlock()
        // Parse inline links and bold
        const parts = line.split(/(\[.*?\]\(.*?\)|\*\*.*?\*\*)/g)
        elements.push(
          <p key={key++} className="text-gray-300 mb-4 leading-relaxed">
            {parts.map((part, pIndex) => {
              const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/)
              const boldMatch = part.match(/\*\*(.*?)\*\*/)
              if (linkMatch) {
                return (
                  <a
                    key={pIndex}
                    href={linkMatch[2]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    {linkMatch[1]}
                  </a>
                )
              } else if (boldMatch) {
                return (
                  <strong key={pIndex} className="text-white font-semibold">
                    {boldMatch[1]}
                  </strong>
                )
              } else {
                return <span key={pIndex}>{part}</span>
              }
            })}
          </p>
        )
      }
    })

    renderCodeBlock()
    return <>{elements}</>
  }

  return (
    <div className="min-h-screen bg-[#181826] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/help"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Voltar para Base de Conhecimento
        </Link>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-3xl">{category.icon}</span>
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full">
              <span className="text-sm font-medium text-blue-300">{category.name}</span>
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {article.title}
          </h1>
          <p className="text-lg text-gray-300">
            {article.description}
          </p>
        </div>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-gray-700">
          <div className="flex items-center text-gray-400">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm">5 min de leitura</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full"
              >
                <TagIcon className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-invert max-w-none mb-12">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <div className="text-gray-300 leading-relaxed">
              {parseMarkdown(article.content)}
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Artigos Relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((relatedArticle) => {
                const relatedCategory = knowledgeCategories[relatedArticle.category]
                return (
                  <Link
                    key={relatedArticle.id}
                    href={`/help/${relatedArticle.id}`}
                    className="group p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-2xl">{relatedCategory.icon}</span>
                      <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                        {relatedCategory.name}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {relatedArticle.title}
                    </h4>
                    <p className="text-sm text-gray-400 line-clamp-2">
                      {relatedArticle.description}
                    </p>
                    <div className="flex items-center text-blue-400 mt-4 group-hover:text-blue-300 transition-colors">
                      <span className="text-sm font-medium">Ler artigo</span>
                      <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        {/* Still Need Help */}
        <div className="bg-gradient-to-r from-blue-700/80 to-purple-700/80 rounded-xl p-8 shadow-lg border border-blue-600/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ainda precisa de ajuda?
          </h3>
          <p className="text-gray-200 mb-6">
            Nossa equipe está pronta para ajudar 24/7 via chat, ticket ou Discord.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://tawk.to/chat/68221a806e1d72190c2992dd/1ir2jf20l"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200"
            >
              Falar com Suporte
            </a>
            <a
              href="/contato"
              className="px-6 py-3 bg-gray-800/50 text-white font-semibold rounded-lg border border-gray-600 hover:bg-gray-700/50 transition-all duration-200"
            >
              Enviar Ticket
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
