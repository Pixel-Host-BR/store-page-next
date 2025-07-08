'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Gamepad2, Server, Shield, Clock } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isGamesDropdownOpen, setIsGamesDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Detectar scroll para navbar glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const games = [
    { name: 'Minecraft', popular: true, icon: <Server className="h-4 w-4" /> },
    { name: 'ARK: Survival Evolved', popular: true, icon: <Gamepad2 className="h-4 w-4" /> },
    { name: 'DayZ', popular: false, icon: <Gamepad2 className="h-4 w-4" /> },
    { name: 'Palworld', popular: true, icon: <Gamepad2 className="h-4 w-4" /> },
    { name: 'Rust', popular: false, icon: <Gamepad2 className="h-4 w-4" /> },
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
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <Server className="h-8 w-8 text-blue-500" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Pixel Host
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/" 
                className="flex items-center text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                Início
              </Link>
              
              {/* Games Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsGamesDropdownOpen(!isGamesDropdownOpen)}
                  className="text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-1"
                >
                  <span>Jogos</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    isGamesDropdownOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {isGamesDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-72 bg-gray-800/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-700/50 overflow-hidden">
                    <div className="p-2">
                      <div className="text-xs text-gray-400 uppercase tracking-wide mb-2 px-3">
                        Jogos Populares
                      </div>
                      {games.filter(game => game.popular).map((game, index) => (
                        <Link
                          key={index}
                          href={`/games/${game.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                          className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md transition-all duration-200"
                        >
                          <span className="text-lg">{game.icon}</span>
                          <span>{game.name}</span>
                          <span className="ml-auto text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                            Popular
                          </span>
                        </Link>
                      ))}
                      <div className="border-t border-gray-700/50 my-2"></div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide mb-2 px-3">
                        Outros Jogos
                      </div>
                      {games.filter(game => !game.popular).map((game, index) => (
                        <Link
                          key={index}
                          href={`/games/${game.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                          className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md transition-all duration-200"
                        >
                          <span className="text-lg">{game.icon}</span>
                          <span>{game.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link 
                href="/precos" 
                className="flex items-center text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                Preços
              </Link>
              
              <Link 
                href="/suporte" 
                className="text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-1">
                <span>Suporte</span>
              </Link>
              
              <Link 
                href="/sobre" 
                className="flex items-center text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                Sobre
              </Link>
            </div>
          </div>

          {/* CTA Button & Mobile menu button */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/painel" 
              className="hidden sm:inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Clock className="h-4 w-4" />
              <span>Painel de Controle</span>
            </Link>
            
            <button 
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link 
            href="/" 
            className="text-gray-300 hover:text-white hover:bg-gray-800/50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
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
              {games.map((game, index) => (
                <Link
                  key={index}
                  href={`/games/${game.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className="flex items-center space-x-2 p-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-all duration-200"
                >
                  <span>{game.icon}</span>
                  <span className="truncate">{game.name}</span>
                </Link>
              ))}
            </div>
          </div>
          
          <Link 
            href="/precos" 
            className="text-gray-300 hover:text-white hover:bg-gray-800/50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
          >
            Preços
          </Link>
          
          <Link 
            href="/suporte" 
            className="text-gray-300 hover:text-white hover:bg-gray-800/50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 flex items-center space-x-2"
          >
            <Shield className="h-4 w-4" />
            <span>Suporte</span>
          </Link>
          
          <Link 
            href="/sobre" 
            className="text-gray-300 hover:text-white hover:bg-gray-800/50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
          >
            Sobre
          </Link>
          
          <Link 
            href="/painel" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium mt-4 text-center transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <Clock className="h-4 w-4" />
            <span>Painel de Controle</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
