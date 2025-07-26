'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  Menu,
  X,
  ChevronDown,
  Gamepad2,
  Server,
  Shield,
  Clock,
  Tag,
  Info,
  ArrowRightToLine,
  Mail,
} from 'lucide-react'

// Função simples para slugificação
function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isGamesDropdownOpen, setIsGamesDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Lista de jogos, ordem igual ao print
  const games = [
    { name: 'Minecraft', popular: true, icon: <Server className="h-4 w-4" /> },
    { name: 'ARK', popular: true, icon: <Server className="h-4 w-4" /> },
    { name: 'Palworld', popular: true, icon: <Server className="h-4 w-4" /> },
    { name: 'DayZ', popular: false, icon: <Server className="h-4 w-4" /> },
    { name: 'Mta', popular: false, icon: <Server className="h-4 w-4" /> },
    { name: 'Project Zomboid', popular: false, icon: <Server className="h-4 w-4" /> },
  ]

  return (
    
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" aria-label="Ir para Home" className="flex items-center space-x-2">
              <img
                src="https://i.imgur.com/Hl1hshd.png"
                alt="Logo PixelHost"
                className="h-6 w-auto md:h-8"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="flex items-center text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                aria-label="Ir para Home"
              >
                Início
              </Link>

              {/* Games Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsGamesDropdownOpen(!isGamesDropdownOpen)}
                  className="text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-1"
                  aria-haspopup="true"
                  aria-expanded={isGamesDropdownOpen}
                  aria-label="Abrir menu de jogos"
                >
                  <span>Jogos</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    isGamesDropdownOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                {isGamesDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-72 bg-gray-800/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-700/50 overflow-hidden"
                    aria-label="Menu de jogos"
                  >
                    <div className="p-2">
                      <div className="text-xs text-gray-400 uppercase tracking-wide mb-2 px-3">
                        Jogos Populares
                      </div>
                      {games.filter(g => g.popular).map((g, i) => (
                        <Link
                          key={g.name}
                          href={`/games/${slugify(g.name)}`}
                          className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md transition-all duration-200"
                          aria-label={`Ver página de ${g.name}`}
                          onClick={() => setIsGamesDropdownOpen(false)}
                        >
                          <span className="text-lg">{g.icon}</span>
                          <span>{g.name}</span>
                          <span className="ml-auto text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded select-none">
                            Popular
                          </span>
                        </Link>
                      ))}
                      <div className="border-t border-gray-700/50 my-2"></div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide mb-2 px-3">
                        Outros Jogos
                      </div>
                      {games.filter(g => !g.popular).map((g, i) => (
                        <Link
                          key={g.name}
                          href={`/games/${slugify(g.name)}`}
                          className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md transition-all duration-200"
                          aria-label={`Ver página de ${g.name}`}
                          onClick={() => setIsGamesDropdownOpen(false)}
                        >
                          <span className="text-lg">{g.icon}</span>
                          <span>{g.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="https://pixelohost.tawk.help/"
                className="text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-1"
                aria-label="Central de Suporte"
                target="_blank" rel="noopener noreferrer"
              >
                <span>Ajuda</span>
              </Link>

              <Link
                href="/contato"
                className="flex items-center text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                aria-label="Sobre a empresa"
              >
                Contato
              </Link>
            </div>
          </div>

          {/* CTA Desktop & Mobile menu button */}
          <div className="flex items-center space-x-4">
            {/* Botão Desktop */}
            <Link
              href="https://pixelhostbr.com/login.html"
              className="hidden sm:flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-lg text-sm font-medium text-center w-full max-w-xs transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              aria-label="Ir para o painel de controle"
              target="_blank" rel="noopener noreferrer"
            >
              <ArrowRightToLine className="h-4 w-4 group-hover:translate-x-1 transition-transform"/>
              <span> Área do Cliente</span>
            </Link>

            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
              aria-label={isMenuOpen ? "Fechar menu navegação" : "Abrir menu navegação"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } overflow-y-auto bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50`}>
        <div className="px-2 pt-2 pb-4 space-y-1">
          <Link
            href="/"
            className="text-gray-300 hover:text-white hover:bg-gray-800/50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
            aria-label="Ir para Home"
            onClick={() => setIsMenuOpen(false)}
          >
            Início
          </Link>

          {/* Mobile Games Section */}
          <div className="px-3 py-2">
            <div className="text-gray-400 text-sm font-medium mb-2 flex items-center space-x-2">
              <Gamepad2 className="h-4 w-4" />
              <span>Jogos Disponíveis</span>
            </div>
            <div className="grid grid-cols-2 gap-2 ml-4">
              {games.map((g) => (
                <Link
                  key={g.name}
                  href={`/games/${slugify(g.name)}`}
                  className="flex items-center space-x-2 p-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-all duration-200"
                  aria-label={`Ver página de ${g.name}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{g.icon}</span>
                  <span className="truncate">{g.name}</span>
                </Link>
              ))}
            </div>
          </div>

          

          <Link
            href="https://pixelohost.tawk.help/"
            className="text-gray-300 hover:text-white hover:bg-gray-800/50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 flex items-center space-x-2"
            aria-label="Central de Suporte"
            onClick={() => setIsMenuOpen(false)}
          >
            <Shield className="h-4 w-4" />
            <span>Ajuda</span>
          </Link>

          <Link
            href="/contato"
            className="text-gray-300 hover:text-white hover:bg-gray-800/50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 flex items-center space-x-2"
            aria-label="Contato"
            onClick={() => setIsMenuOpen(false)}
          >
            <Mail className="h-4 w-4" />
            <span>Contato</span>
          </Link>

          {/* Botão Painel Mobile */}
          <div className="pt-4 border-t border-gray-700/50 mt-4">
            <Link
              href="https://pixelhostbr.com/login.html"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white block px-4 py-3 rounded-lg text-base font-medium text-center w-full flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-200"
              aria-label="Ir para o painel de controle"
              target="_blank" rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <ArrowRightToLine className="h-4 w-4 group-hover:translate-x-1 transition-transform"/>
              <span>Painel de Controle</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}