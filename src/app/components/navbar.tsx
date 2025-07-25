'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Server, Gamepad2, Shield, Clock, ArrowRightToLine } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  popular?: boolean;
}

// Definição dos itens de navegação (removido Produtos e Sobre)
const navItems: NavItem[] = [
  { label: 'Início',           href: '/',                                     icon: undefined },
  { label: 'Minecraft',        href: '/games/minecraft',  popular: true,  icon: <Server className="h-4 w-4" /> },
  { label: 'ARK',              href: '/games/ark',        popular: true,  icon: <Server className="h-4 w-4" /> },
  { label: 'Palworld',         href: '/games/palworld',   popular: true,  icon: <Server className="h-4 w-4" /> },
  { label: 'DayZ',             href: '/games/dayz',       popular: false, icon: <Clock className="h-4 w-4" /> },
  { label: 'MTA',              href: '/games/mta',        popular: false, icon: <Gamepad2 className="h-4 w-4" /> },
  { label: 'Project Zomboid',  href: '/games/project-zomboid', popular: false, icon: <Shield className="h-4 w-4" /> },
  { label: 'Suporte',          href: 'https://pixelohost.tawk.help/',              icon: undefined },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGamesDropdownOpen, setIsGamesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(v => !v);

  const homeItem    = navItems.find(i => i.label === 'Início')!;
  const supportItem = navItems.find(i => i.label === 'Suporte')!;
  const gameItems   = navItems.filter(i => i.href.startsWith('/games/'));

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800/50'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" aria-label="Home">
          <img src="https://i.imgur.com/Hl1hshd.png" alt="Logo" className="h-6 md:h-8" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Início */}
          <Link href={homeItem.href} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            {homeItem.label}
          </Link>

          {/* Jogos Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsGamesDropdownOpen(v => !v)}
              className="flex items-center space-x-1 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              <span>Jogos</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isGamesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isGamesDropdownOpen && (
              <div className="absolute left-0 mt-2 w-60 bg-gray-800/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-700/50 overflow-hidden">
                <div className="p-2">
                  <div className="text-xs text-gray-400 uppercase px-3 mb-1">Populares</div>
                  {gameItems.filter(i => i.popular).map(i => (
                    <Link
                      key={i.label}
                      href={i.href}
                      className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md text-sm"
                      onClick={() => setIsGamesDropdownOpen(false)}
                    >
                      {i.icon}
                      <span>{i.label}</span>
                    </Link>
                  ))}
                  <div className="border-t border-gray-700/50 my-1"></div>
                  <div className="text-xs text-gray-400 uppercase px-3 mb-1">Outros</div>
                  {gameItems.filter(i => !i.popular).map(i => (
                    <Link
                      key={i.label}
                      href={i.href}
                      className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md text-sm"
                      onClick={() => setIsGamesDropdownOpen(false)}
                    >
                      {i.icon}
                      <span>{i.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Suporte */}
          <Link href={supportItem.href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            {supportItem.label}
          </Link>
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <Link
            href="https://pixelhostbr.com/login.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-transform hover:scale-105"
          >
            <ArrowRightToLine className="h-4 w-4" />
            <span>Painel</span>
          </Link>
          <button onClick={toggleMenu} className="md:hidden text-gray-300 p-2 rounded-md hover:text-white hover:bg-gray-800">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50">
          <div className="px-4 py-3 space-y-1">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white px-3 py-2 rounded-md">
              Início
            </Link>
            <div className="border-t border-gray-700/50 my-2"></div>
            <div className="text-gray-400 uppercase text-xs px-3 mb-1">Jogos Populares</div>
            {gameItems.filter(i => i.popular).map(i => (
              <Link key={i.label} href={i.href} onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2 text-gray-300 hover:text-white px-3 py-2 rounded-md">
                {i.icon}<span>{i.label}</span>
              </Link>
            ))}
            <div className="border-t border-gray-700/50 my-2"></div>
            <div className="text-gray-400 uppercase text-xs px-3 mb-1">Outros Jogos</div>
            {gameItems.filter(i => !i.popular).map(i => (
              <Link key={i.label} href={i.href} onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2 text-gray-300 hover:text-white px-3 py-2 rounded-md">
                {i.icon}<span>{i.label}</span>
              </Link>
            ))}
            <div className="border-t border-gray-700/50 my-2"></div>
            <Link href="https://pixelhostbr.com/login.html" onClick={() => setIsMenuOpen(false)} className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg text-center">
              Painel de Controle
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
