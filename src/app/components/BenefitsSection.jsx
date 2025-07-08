// components/HeroBenefitsSection.jsx
'use client'

import { useState, useEffect } from 'react'
import {
  Play,
  Shield,
  Zap,
  Users,
  ArrowRight,
  Star,
  TrendingUp,
  Rocket,
  Wifi,
  Headset,
  ShieldCheck,
  BookOpen,
  HelpCircle,
  Server,
  Globe
} from 'lucide-react'

const featuredGames = [
  { name: 'Minecraft', icon: '🟩', players: '2.8M', description: 'Servidores de alta performance' },
  { name: 'ARK: Survival', icon: '🦕', players: '890K', description: 'Evolução sem limites' },
  { name: 'Palworld', icon: '🐾', players: '1.2M', description: 'A nova sensação' },
  { name: 'DayZ', icon: '🧟', players: '450K', description: 'Sobrevivência intensa' },
]

const benefits = [
  {
    title: 'Hardware Premium',
    description: 'Processadores AMD de alto desempenho e armazenamento NVMe para máximo desempenho.',
    icon: Rocket,
    accent: 'from-pink-500 to-purple-500',
  },
  {
    title: 'Rede de Alta Velocidade',
    description: 'Conexões de até 10Gbps com proteção Anti-DDoS incluída em todos os planos.',
    icon: Wifi,
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Suporte Especializado',
    description: 'Equipe técnica disponível 24/7 por chat, ticket ou Discord para auxiliar em qualquer necessidade.',
    icon: Headset,
    accent: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Garantia de Uptime',
    description: '99.9% de disponibilidade garantida com monitoramento constante e SLAs rigorosos.',
    icon: ShieldCheck,
    accent: 'from-yellow-500 to-orange-500',
  },
]

const recursos = [
  {
    title: 'Base de Conhecimento',
    description: 'Tutoriais, guias e dicas para você tirar o máximo do seu servidor.',
    icon: BookOpen,
    color: 'bg-red-500/20 text-red-400'
  },
  {
    title: 'Perguntas Frequentes',
    description: 'Dúvidas comuns respondidas de forma clara e objetiva.',
    icon: HelpCircle,
    color: 'bg-purple-500/20 text-purple-400'
  },
  {
    title: 'Status do Servidor',
    description: 'Acompanhe em tempo real a disponibilidade dos nossos serviços.',
    icon: Server,
    color: 'bg-yellow-500/20 text-yellow-400'
  },
  {
    title: 'Criador de Subdomínio',
    description: 'Personalize o endereço do seu servidor com facilidade.',
    icon: Globe,
    color: 'bg-green-500/20 text-green-400'
  },
]

function HeroBanner({ isVisible, currentGame, setCurrentGame }) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Texto principal */}
      <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2">
          <TrendingUp className="h-4 w-4 text-blue-400" />
          <span className="text-sm font-medium text-blue-200">#1 em Hospedagem de Jogos</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="text-white">Hospedagem </span><br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Gamer</span><br/>
          <span className="text-white">de </span>
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Elite</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
          Servidores de <span className="text-blue-400 font-semibold">alta performance</span> para os melhores jogos. Deploy instantâneo, DDoS protection e suporte 24/7.
        </p>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray-400">99.9% Uptime</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-gray-400">5M+ Jogadores</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="h-4 w-4 text-yellow-400" />
            <span className="text-sm text-gray-400">Deploy &lt; 60s</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105">
            <span className="flex items-center space-x-2">
              <Play className="h-5 w-5" />
              <span>Começar Agora</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button className="group px-8 py-4 bg-gray-800/50 hover:bg-gray-700/50 text-white font-semibold rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-300 backdrop-blur-sm">
            <span className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-400" />
              <span>Ver Planos</span>
            </span>
          </button>
        </div>
        <div className="flex items-center space-x-6 pt-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
          ))}
          <span className="text-sm text-gray-400 ml-2">4.9/5 (3.2k reviews)</span>
        </div>
      </div>
      {/* Card de destaque de jogo */}
      <GameCard
        isVisible={isVisible}
        currentGame={currentGame}
        setCurrentGame={setCurrentGame}
      />
    </div>
  )
}

function GameCard({ isVisible, currentGame, setCurrentGame }) {
  return (
    <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">{featuredGames[currentGame].icon}</div>
            <div>
              <h3 className="text-xl font-bold text-white">{featuredGames[currentGame].name}</h3>
              <p className="text-sm text-gray-400">{featuredGames[currentGame].description}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-400">{featuredGames[currentGame].players}</div>
            <div className="text-xs text-gray-400">jogadores online</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 bg-gray-700/30 rounded-lg">
            <div className="text-lg font-bold text-blue-400">24ms</div>
            <div className="text-xs text-gray-400">Latência</div>
          </div>
          <div className="text-center p-3 bg-gray-700/30 rounded-lg">
            <div className="text-lg font-bold text-green-400">16GB</div>
            <div className="text-xs text-gray-400">RAM</div>
          </div>
          <div className="text-center p-3 bg-gray-700/30 rounded-lg">
            <div className="text-lg font-bold text-purple-400">SSD</div>
            <div className="text-xs text-gray-400">Storage</div>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-400">Performance</span>
            <span className="text-green-400">98%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-[98%] transition-all duration-1000"></div>
          </div>
        </div>
        <button className="w-full py-3 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
          Criar Servidor
        </button>
      </div>
      <div className="flex justify-center space-x-2 mt-6">
        {featuredGames.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentGame(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentGame ? 'bg-blue-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'}`}
          />
        ))}
      </div>
      <div className="absolute -top-6 -left-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-lg p-3">
        <div className="flex items-center space-x-2">
          <Shield className="h-4 w-4 text-green-400" />
          <span className="text-xs text-white font-medium">DDoS Protection</span>
        </div>
      </div>
      <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-lg p-3">
        <div className="flex items-center space-x-2">
          <Zap className="h-4 w-4 text-yellow-400" />
          <span className="text-xs text-white font-medium">Setup Instantâneo</span>
        </div>
      </div>
    </div>
  )
}

function BenefitsSection() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
          Por que escolher nossos servidores?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-base sm:text-lg">
          Descubra como oferecemos estabilidade, segurança e suporte incomparáveis para o seu projeto.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 mb-16">
        {benefits.map(({ title, description, icon: Icon, accent }, idx) => (
          <div
            key={idx}
            className="flex items-start space-x-4 p-6 bg-gray-850/30 border border-gray-800 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${accent}`}>
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function RecursosSection() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="text-center mb-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Recursos de Hospedagem de Servidores
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Temos muitos recursos excelentes para orientar sua jornada de hospedagem de servidores de jogos.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {recursos.map(({ title, description, icon: Icon, color }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center p-8 bg-gray-850/70 border border-gray-800 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-gray-700"
          >
            <div className={`flex items-center justify-center w-16 h-16 mb-4 rounded-full ${color}`}>
              <Icon className="h-8 w-8" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="max-w-xl w-full bg-gradient-to-r from-blue-700/80 to-purple-700/80 rounded-xl p-8 shadow-lg border border-blue-600/30 text-left">
          <h4 className="text-xl font-bold text-white mb-2">
            O Painel da PixelHost – É a ultima Tendência em Jogos Multiplayer
          </h4>
          <p className="text-gray-200 mb-4">
            Hospedar seu servidor  não deve prejudicar a experiência do jogo. Tomamos medidas para reformular completamente tudo o que você espera de um painel gamer moderno.
          </p>
          <a
            href="/painel"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
          >
            Acessar Nosso Painel
          </a>
        </div>
      </div>
    </div>
  )
}

export default function HeroBenefitsSection() {
  const [currentGame, setCurrentGame] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentGame(prev => (prev + 1) % featuredGames.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/30 overflow-visible">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,200,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,120,200,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32">
        <HeroBanner isVisible={isVisible} currentGame={currentGame} setCurrentGame={setCurrentGame} />
      </div>
      <BenefitsSection />
      <RecursosSection />
    </section>
  )
}
