// components/HeroBenefitsSection.jsx
'use client'

import { useState, useEffect } from 'react'
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



export default function HeroBenefitsSection() {
  // Hero Banner Slider
  const [currentGame, setCurrentGame] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentGame(prev => (prev + 1) % featuredGames.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Testimonials slider states
  const [page, setPage] = useState(0)
  const testimonialsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages)
    }, 8000)
    return () => clearInterval(interval)
  }, [totalPages])

  const currentTestimonials = testimonials.slice(
    page * testimonialsPerPage,
    page * testimonialsPerPage + testimonialsPerPage
  )

  // Parallax effect handlers
  const handleMouseMove = (e, idx) => {
    const card = document.getElementById(`testimonial-card-${idx}`)
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    card.style.transform = `perspective(600px) rotateY(${x / 30}deg) rotateX(${-y / 30}deg) scale(1.05)`
  }
  const handleMouseLeave = (idx) => {
    const card = document.getElementById(`testimonial-card-${idx}`)
    if (!card) return
    card.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)'
  }

  // Swipe functionality
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const [isSwiping, setIsSwiping] = useState(false)
  const [touchStartY, setTouchStartY] = useState(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    // Prevenir zoom e scroll indesejado
    if (e.touches.length > 1) return // Ignorar multi-touch (pinch)
    
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    setTouchStartY(e.targetTouches[0].clientY)
    setIsSwiping(false)
  }

  const onTouchMove = (e) => {
    // Prevenir zoom e scroll indesejado
    if (e.touches.length > 1) return // Ignorar multi-touch (pinch)
    
    // Prevenir scroll vertical durante swipe horizontal
    if (touchStart && touchStartY) {
      const currentX = e.targetTouches[0].clientX
      const currentY = e.targetTouches[0].clientY
      const diffX = Math.abs(currentX - touchStart)
      const diffY = Math.abs(currentY - touchStartY)
      
      // Se o movimento horizontal for maior que o vertical, prevenir scroll
      if (diffX > diffY && diffX > 10) {
        e.preventDefault()
        e.stopPropagation()
      }
    }
    
    setTouchEnd(e.targetTouches[0].clientX)
    setIsSwiping(true)
  }

  const onTouchEnd = (e) => {
    // Prevenir zoom e scroll indesejado
    if (e.touches.length > 1) return // Ignorar multi-touch (pinch)
    
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      // Swipe left - next page
      setPage((page + 1) % totalPages)
    }
    if (isRightSwipe) {
      // Swipe right - previous page
      setPage((page - 1 + totalPages) % totalPages)
    }
    
    setIsSwiping(false)
  }

  // FAQ Accordion
  const [openFaq, setOpenFaq] = useState(null)

  // Dados do restante do site (benefícios, recursos, jogos)
  const featuredGames = [
    { name: 'Minecraft', description: 'Servidores de alta performance' },
    { name: 'ARK: Survival', description: 'Evolução sem limites' },
    { name: 'Palworld',  description: 'A nova sensação' },
    { name: 'DayZ',  description: 'Sobrevivência intensa' },
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

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/30 overflow-visible">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,200,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,120,200,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      </div>

      {/* HERO BANNER */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                <span className="text-sm text-gray-400">4k+ Jogadores</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-gray-400">Ativação &lt; 90s</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
             <a
               href="https://pixelhostbr.com/financeiro/"
               target="_blank"
               rel="noopener noreferrer"
               className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105 flex items-center justify-center"
             >
                <span className="flex items-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Começar Agora</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
             </a>
              <a
                className="group px-8 py-4 bg-gray-800/50 hover:bg-gray-700/50 text-white font-semibold rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
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
            <div className="flex items-center space-x-6 pt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
              <span className="text-sm text-gray-400 ml-2">4.9/5</span>
            </div>
          </div>
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
              {/* Botão dinâmico para cada jogo */}
              <a
                href={
                  currentGame === 0
                    ? "/games/minecraft"
                    : currentGame === 1
                    ? "/games/ark"
                    : currentGame === 2
                    ? "/games/palworld"
                    : currentGame === 3
                    ? "/games/dayz"
                    : "#"
                }
                // Removido target="_blank" para abrir na mesma guia
                rel="noopener noreferrer"
                className="w-full block py-3 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 text-center"
              >
                Criar Servidor
              </a>
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
          </div>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Por que escolher <span className='bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>nossos servidores?</span>
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

        {/* RECURSOS */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Recursos de Hospedagem de <span className='bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'> Servidores</span>
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
        <div className="flex justify-center mb-24">
          <div className="max-w-xl w-full bg-gradient-to-r from-blue-700/80 to-purple-700/80 rounded-xl p-8 shadow-lg border border-blue-600/30 text-left">
            <h4 className="text-xl font-bold text-white mb-2">
              O Painel de Controle PixelHost – A Última Tendência em Jogos Multijogador
            </h4>
            <p className="text-gray-200 mb-4">
              Hospedar seu servidor multijogador não deve prejudicar a experiência do jogo. Tomamos medidas para reformular completamente tudo o que você espera de um painel de controle gamer moderno.
            </p>
            <a
              href="https://painel.pixelhostbr.com"
              className="inline-flex items-center text px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Acessar o Painel
            </a>
          </div>
        </div>
      </div>

      {/* DEPOIMENTOS EM GRID INTERATIVO */}
      <div className="max-w-5xl mx-auto text-center py-24">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          O que estão <span className='bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>falando de nós?</span> 
        </h2>
        <p className="text-gray-400 mb-12">
          Um pouco de nossos clientes por aqui
        </p>
        <p className="text-xs text-gray-500 mb-6">
          💡 Deslize para navegar entre os depoimentos
        </p>
        <div 
          className={`grid grid-cols-3 gap-4 md:gap-8 mb-10 items-stretch transition-transform duration-200 touch-manipulation ${isSwiping ? 'scale-95' : 'scale-100'}`}
          style={{ 
            touchAction: 'pan-y',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            WebkitTouchCallout: 'none',
            WebkitTapHighlightColor: 'transparent'
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {currentTestimonials.map((t, idx) => (
            <div
              key={`${page}-${idx}`}
              id={`testimonial-card-${idx}`}
              className="bg-gray-900/90 border border-gray-800 rounded-2xl shadow-lg px-4 md:px-8 py-6 md:py-10 flex flex-col items-center h-64 md:h-80 min-h-[256px] md:min-h-[320px] max-h-[256px] md:max-h-[320px] transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-500/60 cursor-pointer group animate-fadeIn"
              style={{ willChange: 'transform' }}
              onMouseMove={e => handleMouseMove(e, idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-blue-500 object-cover mr-2 md:mr-4 transition-all duration-300 group-hover:ring-2 group-hover:ring-blue-400"
                  draggable={false}
                />
                <div className="text-left">
                  <div className="text-sm md:text-lg font-bold text-white">
                    {t.name} <span className="text-xs text-blue-400 font-normal ml-1">{t.country}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center flex-1 justify-center">
                <Quote className="w-6 h-6 md:w-8 md:h-8 text-blue-500 mb-2 animate-pulse" />
                <p className="text-gray-200 text-xs md:text-base lg:text-lg font-medium max-w-xs mb-2 line-clamp-5">
                  {t.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Navegação */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 text-white transition shadow hover:scale-110"
            onClick={() => setPage((page - 1 + totalPages) % totalPages)}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${page === idx ? 'bg-blue-500 animate-pulse scale-125' : 'bg-gray-600 hover:bg-blue-400'}`}
                onClick={() => setPage(idx)}
                aria-label={`Ver página ${idx + 1}`}
              />
            ))}
          </div>
          <button
            className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 text-white transition shadow hover:scale-110"
            onClick={() => setPage((page + 1) % totalPages)}
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        {/* Botão para novos clientes avaliarem */}
        <div className="flex justify-center">
          <a
            href="https://pt.trustpilot.com/evaluate/pixelhostbr.com"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105"
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            Avaliar como cliente
          </a>
        </div>
      </div>

      {/* FAQ - Perguntas Frequentes (agora otimizada e abaixo dos depoimentos) */}
      <div className="max-w-3xl mx-auto text-center py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Perguntas Frequentes
        </h2>
        <p className="text-gray-400 mb-8">
          Dúvidas rápidas? Veja abaixo ou acesse nossa <a href="https://pixelohost.tawk.help/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">Central de Ajuda</a>.
        </p>
        <div className="space-y-2 text-left">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-gray-900/80 border border-gray-800 rounded-lg shadow px-4 py-2">
              <button
                className="w-full flex items-center justify-between text-base font-semibold text-white focus:outline-none"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                aria-expanded={openFaq === idx}
                aria-controls={`faq-panel-${idx}`}
              >
                <span>{faq.question}</span>
                <ChevronDown className={`h-5 w-5 ml-2 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              <div
                id={`faq-panel-${idx}`}
                className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-40 mt-2 opacity-100' : 'max-h-0 opacity-0'}`}
                aria-hidden={openFaq !== idx}
              >
                <p className="text-gray-300 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <a
            href="https://pixelohost.tawk.help/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-sm"
          >
            Ver Base Completa de Conhecimento
          </a>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease;
        }
      `}</style>
    </section>
  )
}
