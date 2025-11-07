// components/HeroBenefitsSection.jsx
'use client'

import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import {
  Play, Shield, Zap, Users, ArrowRight, Star, TrendingUp, Rocket, Wifi, Headset, ShieldCheck,
  BookOpen, HelpCircle, Server, Globe, ChevronLeft, ChevronRight, Quote, PlusCircle, ChevronDown
} from 'lucide-react'

const TEST_IMAGE = 'https://i.imgur.com/vILSinR.jpeg'
const TEST_IMAGE_2 = 'https://user-images.trustpilot.com/6884f6849600693717e681aa/73x73.png'
const TEST_IMAGE_3 = 'https://user-images.trustpilot.com/68868dec04313e75da39c164/73x73.png'
const TEST_IMAGE_4 = 'https://i.imgur.com/yAouMLZ.jpeg'
const TEST_IMAGE_5 = 'https://i.imgur.com/QTwy0mf.jpeg'
const TEST_IMAGE_6 = 'https://i.imgur.com/cdgoIwS.jpeg'
const TEST_IMAGE_7 = 'https://i.imgur.com/W8lt9rq.jpeg'
const TEST_IMAGE_8 = 'https://i.imgur.com/BdCpxOU.jpeg'
const TEST_IMAGE_9 = 'https://i.imgur.com/jm7sPRH.jpeg'
const TEST_IMAGE_10 = 'https://i.imgur.com/9phFl1q.jpeg'
const TEST_IMAGE_11 = 'https://i.imgur.com/nuhFy0n.jpeg'
const TEST_IMAGE_12 = 'https://i.imgur.com/IBIXilH.jpeg'
const TEST_IMAGE_13 = 'https://i.imgur.com/sCL5tRI.jpeg'
const TEST_IMAGE_14 = 'https://i.imgur.com/HyWgipM.jpeg'
const TEST_IMAGE_15 = 'https://i.imgur.com/jx4qGRf.jpeg'

const testimonials = [
  { name: 'JVS Neto', country: 'BR', avatar: TEST_IMAGE_2, text: 'Em mais de 5 anos eu não encontrei um host tão bom e barato ao mesmo tempo, com um suporte excelente!!' },
  { name: 'Pedro Neto', country: 'BR', avatar: TEST_IMAGE_3, text: 'Atendimento prestativo, resolveram todos os meus problemas e ainda me auxiliaram com meu servidor. Inegavelmente a melhor host que eu já contratei.' },
  { name: 'Literally', country: 'BR', avatar: TEST_IMAGE_4, text: 'Se eu pudesse avaliar com mais estrelas, eu avaliaria! Os meninos são super pontuais, pacientes, uns amores de pessoa! Eu como uma mera jovem com QI de idosa fui muito bem atendida, vcs são incríveis. Simplesmente apaixonada!' },
  { name: 'Carlos Silva', country: 'BR', avatar: TEST_IMAGE_5, text: 'O melhor atendimento que já tive em hospedagem de jogos. Recomendo demais!' },
  { name: 'Ana Clara', country: 'BR', avatar: TEST_IMAGE_6, text: 'Painel intuitivo, servidores estáveis e suporte sempre disponível.' },
  { name: 'Pedro Henrique', country: 'BR', avatar: TEST_IMAGE_7, text: 'Nunca fiquei na mão, uptime real e proteção DDoS eficiente.' },
  { name: 'Lucas Gamer', country: 'BR', avatar: TEST_IMAGE_8, text: 'Hospedei meu servidor de Minecraft e ficou perfeito, sem lag!' },
  { name: 'Marina Souza', country: 'BR', avatar: TEST_IMAGE_9, text: 'Equipe muito atenciosa, tiraram todas as minhas dúvidas rapidamente.' },
  { name: 'Felipe Ramos', country: 'BR', avatar: TEST_IMAGE_10, text: 'A performance dos servidores é excelente, recomendo para todos.' },
  { name: 'Gabriel Lima', country: 'BR', avatar: TEST_IMAGE_11, text: 'Fácil de configurar, preço justo e qualidade top.' },
  { name: 'Juliana Alves', country: 'BR', avatar: TEST_IMAGE_12, text: 'O melhor custo-benefício do mercado de games.' },
  { name: 'Rafael Torres', country: 'BR', avatar: TEST_IMAGE_13, text: 'Migrei de outro host e não me arrependo, só elogios!' },
  { name: 'Beatriz Costa', country: 'BR', avatar: TEST_IMAGE_14, text: 'A estabilidade e o suporte são diferenciais reais.' },
  { name: 'Vinícius Rocha', country: 'BR', avatar: TEST_IMAGE_15, text: 'Recomendo para quem quer jogar sem dor de cabeça.' },
  { name: 'Larissa Melo', country: 'BR', avatar: TEST_IMAGE, text: 'Atendimento rápido, servidores potentes e muita transparência.' },
]

const faqs = [
  {
    question: 'Por que escolher a PixelHost como minha hospedagem de jogos?',
    answer: 'A PixelHost oferece servidores de alta performance, suporte 24/7, painel de controle moderno e proteção DDoS avançada. Nossa infraestrutura é otimizada para jogos como Minecraft, ARK, DayZ e Palworld, garantindo estabilidade e baixa latência.',
  },
  {
    question: 'Posso alterar meu plano ou atualizar meu servidor depois?',
    answer: 'Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento pelo painel de controle, pagando apenas a diferença proporcional.',
  },
  {
    question: 'Recebo meu dinheiro de volta se não gostar do serviço?',
    answer: 'Oferecemos garantia de reembolso de 3 dias. Se não ficar satisfeito, basta solicitar o estorno pelo painel ou suporte.',
  },
  {
    question: 'Vocês oferecem suporte a mods e plugins?',
    answer: 'Sim! Nossa equipe auxilia na instalação e configuração de mods e plugins para os principais jogos suportados.',
  },
  {
    question: 'Como funciona o suporte técnico?',
    answer: 'Nosso suporte é 24/7 via chat, ticket e Discord. Temos uma base de conhecimento completa e equipe especializada para resolver qualquer dúvida.',
  },
  {
    question: 'Meu servidor fica online o tempo todo?',
    answer: 'Garantimos 99.9% de uptime com monitoramento constante e infraestrutura redundante.',
  },
  {
    question: 'Posso personalizar o endereço do meu servidor?',
    answer: 'Sim! Oferecemos criador de subdomínio gratuito para personalizar o acesso ao seu servidor.',
  },
  {
    question: 'Quais métodos de pagamento são aceitos?',
    answer: 'Aceitamos Pix, cartão de crédito, boleto e PayPal.',
  },
]

const featuredGames = [
  { 
    name: 'Minecraft', 
    description: 'Servidores de alta performance',
    link: '/games/minecraft',
    color: 'from-green-500 to-emerald-600'
  },
  { 
    name: 'ARK: Survival', 
    description: 'Evolução sem limites',
    link: '/games/ark',
    color: 'from-orange-500 to-red-600'
  },
  { 
    name: 'Palworld',  
    description: 'A nova sensação',
    link: '/games/palworld',
    color: 'from-blue-500 to-cyan-600'
  },
  { 
    name: 'DayZ',  
    description: 'Sobrevivência intensa',
    link: '/games/dayz',
    color: 'from-gray-600 to-gray-800'
  },
]

const benefits = [
  {
    title: 'Hardware Premium',
    description: 'Processadores AMD e Intel de alto desempenho e armazenamento NVMe para máximo desempenho.',
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
    title: 'Suporte Técnico',
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
    description: 'Dúvidas comuns respondidas de forma clara e objetiva para facilitar seu uso.',
    icon: HelpCircle,
    color: 'bg-purple-500/20 text-purple-400'
  },
  {
    title: 'Status do Servidor',
    description: 'Acompanhe em tempo real a disponibilidade dos nossos serviços para maior transparência e confiança.',
    icon: Server,
    color: 'bg-yellow-500/20 text-yellow-400'
  },
  {
    title: 'Atendimento Humano',
    description: 'Especialistas prontos para ajudar com qualquer dúvida ou problema que você tenha.',
    icon: Headset,
    color: 'bg-green-500/20 text-green-400'
  },
]

export default function HeroBenefitsSection() {
  const [currentGame, setCurrentGame] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const gameCardRef = useRef(null)
  const sectionRef = useRef(null)
  const gameIntervalRef = useRef(null)
  const testimonialIntervalRef = useRef(null)

  // Memoize calculations
  const testimonialsPerPage = useMemo(() => 3, [])
  const totalPages = useMemo(() => Math.ceil(testimonials.length / testimonialsPerPage), [testimonialsPerPage])

  // Intersection Observer to pause intervals when not visible
  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Game carousel interval - pause when not visible
  useEffect(() => {
    setMounted(true)
    
    const startInterval = () => {
      if (gameIntervalRef.current) clearInterval(gameIntervalRef.current)
      gameIntervalRef.current = setInterval(() => {
        setCurrentGame(prev => (prev + 1) % featuredGames.length)
      }, 5000)
    }

    if (isVisible) {
      startInterval()
    }

    return () => {
      if (gameIntervalRef.current) {
        clearInterval(gameIntervalRef.current)
        gameIntervalRef.current = null
      }
    }
  }, [isVisible])

  // Testimonials slider states
  const [page, setPage] = useState(0)
  
  useEffect(() => {
    const startInterval = () => {
      if (testimonialIntervalRef.current) clearInterval(testimonialIntervalRef.current)
      testimonialIntervalRef.current = setInterval(() => {
        setPage((prev) => (prev + 1) % totalPages)
      }, 8000)
    }

    if (isVisible && totalPages > 0) {
      startInterval()
    }

    return () => {
      if (testimonialIntervalRef.current) {
        clearInterval(testimonialIntervalRef.current)
        testimonialIntervalRef.current = null
      }
    }
  }, [totalPages, isVisible])

  const currentTestimonials = useMemo(() => 
    testimonials.slice(
      page * testimonialsPerPage,
      page * testimonialsPerPage + testimonialsPerPage
    ), [page, testimonialsPerPage]
  )

  // Swipe functionality - memoized callbacks
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const [isSwiping, setIsSwiping] = useState(false)
  const [touchStartY, setTouchStartY] = useState(null)
  const minSwipeDistance = 50

  const onTouchStart = useCallback((e) => {
    if (e.touches.length > 1) return
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    setTouchStartY(e.targetTouches[0].clientY)
    setIsSwiping(false)
  }, [])

  const onTouchMove = useCallback((e) => {
    if (e.touches.length > 1) return
    if (touchStart && touchStartY) {
      const currentX = e.targetTouches[0].clientX
      const currentY = e.targetTouches[0].clientY
      const diffX = Math.abs(currentX - touchStart)
      const diffY = Math.abs(currentY - touchStartY)
      if (diffX > diffY && diffX > 10) {
        e.preventDefault()
        e.stopPropagation()
      }
    }
    setTouchEnd(e.targetTouches[0].clientX)
    setIsSwiping(true)
  }, [touchStart, touchStartY])

  const onTouchEnd = useCallback((e) => {
    if (e.touches.length > 1) return
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      setPage((prev) => (prev + 1) % totalPages)
    }
    if (isRightSwipe) {
      setPage((prev) => (prev - 1 + totalPages) % totalPages)
    }
    setIsSwiping(false)
  }, [touchStart, touchEnd, totalPages])

  // FAQ Accordion
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/30 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      </div>

      {/* HERO BANNER - SIMPLIFICADO E MODERNO */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Texto Principal */}
          <div className={`space-y-8 transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div 
              className={`inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 transition-all duration-1000 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            >
              <TrendingUp className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-200">#1 em Hospedagem de Jogos</span>
            </div>

            {/* Título Principal */}
            <div className={`space-y-4 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white block">Hospedagem</span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent block">Gamer de Elite</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-xl">
                Servidores de <span className="text-blue-400 font-semibold">alta performance</span> para os melhores jogos. Deploy instantâneo, DDoS protection e suporte 24/7.
              </p>
            </div>

            {/* Stats */}
            <div 
              className={`flex flex-wrap gap-6 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <div className="flex items-center space-x-2 group">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <Users className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">4k+ Jogadores</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <Zap className="h-4 w-4 text-yellow-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Ativação &lt; 90s</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <a
                href="https://pixelhostbr.com/financeiro/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105 flex items-center justify-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Começar Agora</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity" />
              </a>
              <a
                className="group px-8 py-4 bg-gray-800/50 hover:bg-gray-700/70 text-white font-semibold rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300 backdrop-blur-sm flex items-center justify-center hover:scale-105"
                href="https://pixelhostbr.com/financeiro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-400" />
                  <span>Ver Planos</span>
                </span>
              </a>
            </div>

            {/* Rating */}
            <div 
              className={`flex items-center space-x-3 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-400">4.9/5 em mais de 500 avaliações</span>
            </div>
          </div>

          {/* Right Content - Game Card Simplificado */}
          <div 
            className={`relative transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div 
              key={currentGame}
              className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8 shadow-2xl overflow-hidden group"
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${featuredGames[currentGame].color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Game Info */}
                <div className="mb-8">
                  <div className="inline-block px-4 py-2 bg-gray-700/50 rounded-lg mb-4">
                    <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">Jogo em Destaque</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{featuredGames[currentGame].name}</h3>
                  <p className="text-gray-400">{featuredGames[currentGame].description}</p>
                </div>

                {/* Stats Grid Simplificado */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-blue-500/50 transition-colors">
                    <div className="text-2xl font-bold text-blue-400 mb-1">24ms</div>
                    <div className="text-xs text-gray-400">Latência</div>
                  </div>
                  <div className="text-center p-4 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-green-500/50 transition-colors">
                    <div className="text-2xl font-bold text-green-400 mb-1">16GB</div>
                    <div className="text-xs text-gray-400">RAM</div>
                  </div>
                  <div className="text-center p-4 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-purple-500/50 transition-colors">
                    <div className="text-2xl font-bold text-purple-400 mb-1">SSD</div>
                    <div className="text-xs text-gray-400">Storage</div>
                  </div>
                </div>

                {/* Performance Bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Performance</span>
                    <span className="text-green-400 font-semibold">98%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '98%' }}
                    />
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={featuredGames[currentGame].link}
                  className="block w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 text-center shadow-lg hover:shadow-blue-500/50 group/btn"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Criar Servidor</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </a>

                {/* Dots Navigation */}
                <div className="flex justify-center space-x-2 mt-6">
                  {featuredGames.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentGame(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === currentGame 
                          ? 'bg-blue-500 w-8 scale-110' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                      aria-label={`Ver ${featuredGames[idx].name}`}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative Badges */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-lg px-3 py-1.5">
                <div className="flex items-center space-x-1.5">
                  <Shield className="h-3.5 w-3.5 text-green-400" />
                  <span className="text-xs text-white font-medium">DDoS Protection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BENEFITS SECTION */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-16">
          <h2 
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 transition-all duration-1000 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Por que escolher{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              nossos servidores?
            </span>
          </h2>
          <p 
            className={`mt-4 max-w-2xl mx-auto text-gray-400 text-lg transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Descubra como oferecemos estabilidade, segurança e suporte incomparáveis para o seu projeto.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 mb-24">
          {benefits.map(({ title, description, icon: Icon, accent }, idx) => (
            <div
              key={idx}
              className={`group flex items-start space-x-4 p-8 bg-gray-800/40 border border-gray-700/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/50 backdrop-blur-sm ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${300 + idx * 100}ms` }}
            >
              <div className={`flex-shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${accent} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="h-7 w-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
                <p className="text-gray-300 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RECURSOS */}
        <div className="text-center mb-12">
          <h3 
            className={`text-3xl sm:text-4xl font-bold text-white mb-4 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Recursos de Hospedagem de{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Servidores
            </span>
          </h3>
          <p 
            className={`text-gray-400 max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Temos muitos recursos excelentes para orientar sua jornada de hospedagem de servidores de jogos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {recursos.map(({ title, description, icon: Icon, color }, idx) => (
            <div
              key={idx}
              className={`group flex flex-col items-center p-8 bg-gray-800/40 border border-gray-700/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/50 backdrop-blur-sm text-center ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${400 + idx * 100}ms` }}
            >
              <div className={`flex items-center justify-center w-16 h-16 mb-4 rounded-xl ${color} group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">{title}</h4>
              <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Painel CTA */}
        <div 
          className={`flex justify-center mb-24 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="max-w-2xl w-full bg-gradient-to-r from-blue-700/80 to-purple-700/80 rounded-2xl p-8 sm:p-10 shadow-2xl border border-blue-600/30 backdrop-blur-sm hover:shadow-blue-500/20 transition-shadow duration-300">
            <h4 className="text-2xl font-bold text-white mb-3">
              O Painel de Controle PixelHost – A Última Tendência em Jogos Multijogador
            </h4>
            <p className="text-gray-100 mb-6 leading-relaxed">
              Hospedar seu servidor multijogador não deve prejudicar a experiência do jogo. Tomamos medidas para reformular completamente tudo o que você espera de um painel de controle gamer moderno.
            </p>
            <a
              href="https://painel.pixelhostbr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
            >
              Acessar o Painel
              <ArrowRight className="h-4 w-4 ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* DEPOIMENTOS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <h2 
          className={`text-4xl sm:text-5xl font-extrabold text-white mb-4 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          O que estão{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            falando de nós?
          </span>
        </h2>
        <p 
          className={`text-gray-400 mb-12 text-lg transition-all duration-1000 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Um pouco de nossos clientes por aqui
        </p>

        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 transition-transform duration-500 ${isSwiping ? 'scale-95' : 'scale-100'}`}
          style={{ 
            touchAction: 'pan-y',
            userSelect: 'none',
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {currentTestimonials.map((t, idx) => (
            <div
              key={`${page}-${idx}`}
              className={`bg-gray-800/60 border border-gray-700/50 rounded-2xl shadow-lg px-6 py-8 flex flex-col items-center h-full min-h-[280px] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500/50 backdrop-blur-sm ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + idx * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border-2 border-blue-500 object-cover mr-3"
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                />
                <div className="text-left">
                  <div className="text-base font-bold text-white">
                    {t.name} <span className="text-sm text-blue-400 font-normal ml-1">{t.country}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center flex-1 justify-center">
                <Quote className="w-6 h-6 text-blue-500 mb-3 opacity-50" />
                <p className="text-gray-200 text-sm leading-relaxed text-center line-clamp-5">
                  {t.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            className="p-3 rounded-full bg-gray-800/80 hover:bg-blue-600 text-white transition-all duration-300 shadow-lg hover:scale-110 border border-gray-700/50"
            onClick={() => setPage((page - 1 + totalPages) % totalPages)}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  page === idx 
                    ? 'bg-blue-500 w-8 scale-110' 
                    : 'bg-gray-600 hover:bg-blue-400 w-2'
                }`}
                onClick={() => setPage(idx)}
                aria-label={`Ver página ${idx + 1}`}
              />
            ))}
          </div>
          <button
            className="p-3 rounded-full bg-gray-800/80 hover:bg-blue-600 text-white transition-all duration-300 shadow-lg hover:scale-110 border border-gray-700/50"
            onClick={() => setPage((page + 1) % totalPages)}
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center">
          <a
            href="https://pt.trustpilot.com/evaluate/pixelhostbr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            Avaliar como cliente
          </a>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 pb-24">
        <h2 
          className={`text-4xl sm:text-5xl font-extrabold text-white mb-4 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Perguntas Frequentes
        </h2>
        <p 
          className={`text-gray-400 mb-10 text-lg transition-all duration-1000 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Dúvidas rápidas? Veja abaixo ou acesse nossa{' '}
          <a 
            href="https://pixelohost.tawk.help/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 underline hover:text-blue-300 transition-colors"
          >
            Central de Ajuda
          </a>.
        </p>
        <div className="space-y-3 text-left">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-gray-800/60 border border-gray-700/50 rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:border-blue-500/50 backdrop-blur-sm ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${200 + idx * 50}ms` }}
            >
              <button
                className="w-full flex items-center justify-between text-left px-6 py-4 text-base font-semibold text-white hover:text-blue-400 focus:outline-none transition-colors"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                aria-expanded={openFaq === idx}
              >
                <span>{faq.question}</span>
                <ChevronDown className={`h-5 w-5 ml-4 transition-transform duration-300 flex-shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a
            href="https://pixelohost.tawk.help/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
          >
            Ver Base Completa de Conhecimento
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}
