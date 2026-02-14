'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
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
  const [mounted, setMounted] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsGamesDropdownOpen(false)
      }
    }

    if (isGamesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isGamesDropdownOpen])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Lista de jogos
  const games = [
    { name: 'Minecraft', popular: true, icon: <Server className="h-4 w-4" /> },
    { name: 'ARK', popular: true, icon: <Server className="h-4 w-4" /> },
    { name: 'Palworld', popular: true, icon: <Server className="h-4 w-4" /> },
    { name: 'Hytale', popular: true, icon: <Server className="h-4 w-4" /> },
    { name: 'DayZ', popular: false, icon: <Server className="h-4 w-4" /> },
    { name: 'Mta', popular: false, icon: <Server className="h-4 w-4" /> },
    { name: 'Project Zomboid', popular: false, icon: <Server className="h-4 w-4" /> },
  ]

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out pointer-events-none ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div
          className={`pointer-events-auto flex justify-between items-center h-16 px-4 sm:px-6 rounded-2xl border shadow-2xl ring-1 backdrop-blur-xl transition-all duration-500 ${isScrolled
              ? 'bg-white/20 backdrop-blur-xl border-white/30 ring-white/20 shadow-xl'
              : 'bg-white/10 backdrop-blur-md border-white/20 ring-white/10'
            }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              aria-label="Ir para Home"
              className="flex items-center space-x-2 group transition-transform duration-300 hover:scale-105"
            >
              <img
                src="https://i.imgur.com/JbKkw2N.png"
                alt="Logo PixelHost"
                className="h-7 w-auto md:h-8 transition-all duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              <Link
                href="/"
                className="relative flex items-center text-gray-200 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 group"
                aria-label="Ir para Home"
              >
                <span className="relative z-10">Início</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--primary-purple-light)]/20 to-[var(--primary-purple)]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              {/* Games Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsGamesDropdownOpen(!isGamesDropdownOpen)}
                  className="relative flex items-center space-x-1 text-gray-200 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 group"
                  aria-haspopup="true"
                  aria-expanded={isGamesDropdownOpen}
                  aria-label="Abrir menu de jogos"
                >
                  <span className="relative z-10">Jogos</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-all duration-300 ${isGamesDropdownOpen ? 'rotate-180' : ''
                      } group-hover:scale-110`}
                  />
                  <span className="absolute inset-0 bg-gradient-to-r from-[var(--primary-purple-light)]/20 to-[var(--primary-purple)]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                {isGamesDropdownOpen && (
                  <div
                    className={`absolute left-0 mt-3 w-80 bg-[var(--bg-surface)]/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[rgba(255,255,255,0.1)]/50 overflow-hidden transition-all duration-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                      }`}
                    aria-label="Menu de jogos"
                  >
                    <div className="p-3">
                      <div className="text-xs text-gray-400 uppercase tracking-wider mb-3 px-3 font-semibold">
                        Jogos Populares
                      </div>
                      <div className="space-y-1">
                        {games.filter(g => g.popular).map((g, i) => (
                          <Link
                            key={g.name}
                            href={`/games/${slugify(g.name)}`}
                            className="group/item flex items-center space-x-3 px-3 py-2.5 text-sm text-gray-300 hover:text-white rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 border border-transparent hover:border-blue-500/30"
                            aria-label={`Ver página de ${g.name}`}
                            onClick={() => setIsGamesDropdownOpen(false)}
                            style={{ transitionDelay: `${i * 50}ms` }}
                          >
                            <span className="text-lg group-hover/item:scale-110 transition-transform duration-300">{g.icon}</span>
                            <span className="flex-1">{g.name}</span>
                            <span className="text-xs bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-300 px-2.5 py-1 rounded-full font-medium border border-blue-500/30">
                              Popular
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-[rgba(255,255,255,0.1)]/50 my-3"></div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider mb-3 px-3 font-semibold">
                        Outros Jogos
                      </div>
                      <div className="space-y-1">
                        {games.filter(g => !g.popular).map((g, i) => (
                          <Link
                            key={g.name}
                            href={`/games/${slugify(g.name)}`}
                            className="group/item flex items-center space-x-3 px-3 py-2.5 text-sm text-gray-300 hover:text-white rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 border border-transparent hover:border-blue-500/30"
                            aria-label={`Ver página de ${g.name}`}
                            onClick={() => setIsGamesDropdownOpen(false)}
                            style={{ transitionDelay: `${(games.filter(g => g.popular).length + i) * 50}ms` }}
                          >
                            <span className="text-lg group-hover/item:scale-110 transition-transform duration-300">{g.icon}</span>
                            <span className="flex-1">{g.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/help"
                className="relative flex items-center text-gray-200 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 group"
                aria-label="Central de Suporte"
              >
                <span className="relative z-10">Ajuda</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--primary-purple-light)]/20 to-[var(--primary-purple)]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                href="/contato"
                className="relative flex items-center text-gray-200 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 group"
                aria-label="Contato"
              >
                <span className="relative z-10">Contato</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--primary-purple-light)]/20 to-[var(--primary-purple)]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              {/* Uptime externo */}
              <Link
                href="https://stats.uptimerobot.com/ZZPstf9xQM"
                className="relative flex items-center text-gray-200 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 group"
                aria-label="Status de Uptime"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10">Uptime</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--primary-purple-light)]/20 to-[var(--primary-purple)]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          </div>

          {/* CTA Desktop & Mobile menu button */}
          <div className="flex items-center space-x-3">
            {/* Botão Desktop */}
            <Link
              href="https://pixelhostbr.com/login.html"
              className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 bg-[var(--primary-purple)] hover:bg-[var(--primary-purple-hover)] text-white font-semibold rounded-lg transition-colors duration-200 group"
              aria-label="Ir para o painel de controle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowRightToLine className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              <span>Área do Cliente</span>
            </Link>

            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2.5 rounded-lg text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300 active:scale-95"
              aria-label={isMenuOpen ? "Fechar menu navegação" : "Abrir menu navegação"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`md:hidden transition-all duration-500 ease-out pointer-events-auto overflow-hidden ${isMenuOpen
              ? 'mt-3 max-h-[600px] opacity-100'
              : 'max-h-0 opacity-0 mt-0'
            }`}
        >
          <div className="rounded-2xl bg-[var(--bg-surface)]/95 backdrop-blur-xl border border-[rgba(255,255,255,0.1)]/50 shadow-2xl ring-1 ring-white/10 px-4 pt-4 pb-6 space-y-2">
            <Link
              href="/"
              className="flex items-center text-gray-200 hover:text-white px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 border border-transparent hover:border-blue-500/30"
              aria-label="Ir para Home"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>

            {/* Mobile Games Section */}
            <div className="px-4 py-3">
              <div className="text-gray-300 text-sm font-semibold mb-3 flex items-center space-x-2">
                <Gamepad2 className="h-4 w-4 text-blue-400" />
                <span>Jogos Disponíveis</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {games.map((g, i) => (
                  <Link
                    key={g.name}
                    href={`/games/${slugify(g.name)}`}
                    className="group flex items-center space-x-2 p-3 text-sm text-gray-300 hover:text-white rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 border border-transparent hover:border-blue-500/30"
                    aria-label={`Ver página de ${g.name}`}
                    onClick={() => setIsMenuOpen(false)}
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">{g.icon}</span>
                    <span className="truncate">{g.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/help"
              className="flex items-center space-x-2 text-gray-200 hover:text-white px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 border border-transparent hover:border-blue-500/30"
              aria-label="Central de Suporte"
              onClick={() => setIsMenuOpen(false)}
            >
              <Shield className="h-4 w-4" />
              <span>Ajuda</span>
            </Link>

            <Link
              href="/contato"
              className="flex items-center space-x-2 text-gray-200 hover:text-white px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 border border-transparent hover:border-blue-500/30"
              aria-label="Contato"
              onClick={() => setIsMenuOpen(false)}
            >
              <Mail className="h-4 w-4" />
              <span>Contato</span>
            </Link>

            {/* Uptime Mobile */}
            <Link
              href="https://stats.uptimerobot.com/ZZPstf9xQM"
              className="flex items-center space-x-2 text-gray-200 hover:text-white px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 border border-transparent hover:border-blue-500/30"
              aria-label="Status de Uptime"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <Clock className="h-4 w-4" />
              <span>Uptime</span>
            </Link>

            {/* Botão Painel Mobile */}
            <div className="pt-4 border-t border-[rgba(255,255,255,0.1)]/50 mt-4">
              <Link
                href="https://pixelhostbr.com/login.html"
                className="flex items-center justify-center space-x-2 w-full px-5 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold rounded-lg transition-colors duration-200 group"
                aria-label="Ir para o painel de controle"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                <ArrowRightToLine className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Área do Cliente</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
