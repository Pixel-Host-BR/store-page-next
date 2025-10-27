'use client'

import { useState } from 'react'
import { 
  knowledgeArticles, 
  knowledgeCategories, 
  KnowledgeCategory,
  searchArticles,
  getPopularArticles,
  getArticlesByCategory
} from '../config/knowledge-base'
import { 
  Search, 
  BookOpen, 
  TrendingUp, 
  HelpCircle,
  ChevronRight,
  Hash
} from 'lucide-react'
import Link from 'next/link'

const ITEMS_PER_PAGE = 6

export default function HelpPage() {
  if (typeof window !== 'undefined') {
    document.title = 'Base de Conhecimento - PixelHost'
  }
  
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<KnowledgeCategory | 'all'>('all')
  const [searchResults, setSearchResults] = useState(knowledgeArticles)
  const [currentPagePopular, setCurrentPagePopular] = useState(0)
  const [currentPageArticles, setCurrentPageArticles] = useState(0)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentPageArticles(0) // reset page on new search
    if (query.trim()) {
      const results = searchArticles(query)
      setSearchResults(results)
    } else {
      setSearchResults(knowledgeArticles)
    }
  }

  const filteredArticles = selectedCategory === 'all' 
    ? searchQuery ? searchResults : knowledgeArticles
    : getArticlesByCategory(selectedCategory)

  const popularArticles = getPopularArticles()

  // Paginate popular articles
  const popularPageCount = Math.ceil(popularArticles.length / ITEMS_PER_PAGE)
  const popularArticlesToShow = popularArticles.slice(
    currentPagePopular * ITEMS_PER_PAGE,
    (currentPagePopular + 1) * ITEMS_PER_PAGE)

  // Paginate filtered articles
  const articlesPageCount = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE)
  const filteredArticlesToShow = filteredArticles.slice(
    currentPageArticles * ITEMS_PER_PAGE,
    (currentPageArticles + 1) * ITEMS_PER_PAGE)

  const renderPaginationControls = (pageCount: number, currentPage: number, setPage: (page:number)=>void) => (
    <div className="flex justify-center mt-6 space-x-2">
      <button
        disabled={currentPage === 0}
        onClick={() => setPage(currentPage - 1)}
        className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
      >
        Anterior
      </button>
      {[...Array(pageCount)].map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i)}
          className={`px-3 py-1 rounded ${i === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
        >
          {i + 1}
        </button>
      ))}
      <button
        disabled={currentPage === pageCount - 1 || pageCount === 0}
        onClick={() => setPage(currentPage + 1)}
        className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50"
      >
        Próximo
      </button>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#181826] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <BookOpen className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-200">Base de Conhecimento</span>
            </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Como podemos </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">ajudar?</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Encontre respostas rápidas para suas dúvidas. Guias completos, tutoriais e suporte técnico.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Pesquise por palavras-chave, problemas ou dúvidas..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Categories */}
        {!searchQuery && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Categorias</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {Object.entries(knowledgeCategories).map(([key, category]) => {
                const articleCount = getArticlesByCategory(key as KnowledgeCategory).length
                return (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedCategory(key as KnowledgeCategory)
                      setCurrentPageArticles(0) // reset page on category change
                    }}
                    className={`p-6 text-center rounded-xl border transition-all duration-300 ${
                      selectedCategory === key
                        ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/50 scale-105'
                        : 'bg-gray-900/80 backdrop-blur-sm border-gray-700 hover:border-blue-500/50 hover:scale-105'
                    }`}
                  >
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="text-sm font-semibold text-white mb-1">{category.name}</h3>
                    <p className="text-xs text-gray-400">{category.description}</p>
                    <div className="mt-2 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium inline-block">
                      {articleCount} {articleCount === 1 ? 'artigo' : 'artigos'}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Popular Articles */}
        {!searchQuery && selectedCategory === 'all' && popularArticles.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="h-5 w-5 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Artigos Populares</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularArticlesToShow.map((article) => (
                <Link
                  key={article.id}
                  href={`/help/${article.id}`}
                  className="group p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-2xl">{knowledgeCategories[article.category].icon}</span>
                    <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                      {knowledgeCategories[article.category].name}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center text-blue-400 mt-4 group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium">Ler mais</span>
                    <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
            {renderPaginationControls(popularPageCount, currentPagePopular, setCurrentPagePopular)}
          </div>
        )}

        {/* Results */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">
              {searchQuery ? `Resultados da busca${filteredArticles.length > 0 ? ` (${filteredArticles.length})` : ''}` : 'Todos os Artigos'}
            </h2>
            {selectedCategory !== 'all' && (
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setCurrentPageArticles(0)
                }}
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Limpar filtro
              </button>
            )}
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Nenhum resultado encontrado</h3>
              <p className="text-gray-400 mb-6">
                Tente usar termos diferentes ou navegue pelas categorias acima.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                  setSearchResults(knowledgeArticles)
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Limpar busca
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticlesToShow.map((article) => (
                <Link
                  key={article.id}
                  href={`/help/${article.id}`}
                  className="group p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-2xl">{knowledgeCategories[article.category].icon}</span>
                    <span className="text-xs px-3 py-1 bg-gray-700/50 text-gray-400 rounded">
                      {knowledgeCategories[article.category].name}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-gray-700/50 text-gray-400 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <ChevronRight className="h-4 w-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          )}

          {renderPaginationControls(articlesPageCount, currentPageArticles, setCurrentPageArticles)}
        </div>

        {/* Still Need Help */}
        <div className="mt-16 max-w-4xl mx-auto">
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
    </div>
  )
}
