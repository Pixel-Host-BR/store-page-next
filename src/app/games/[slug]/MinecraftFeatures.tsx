'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  CheckCircle2,
  Rocket,
  Shield,
  Headphones,
  Settings,
  Server,
  Zap,
  Users,
  Database,
  Globe,
  Code,
  Heart,
  ArrowRight,
  Play,
  Sparkles,
  Coffee,
  Blocks
} from 'lucide-react'

interface Recommendation {
  players: string
  world: string
  ram: string
  color: 'purple' | 'blue' | 'green'
  width: string
  description: string
}

export const metadata = {
  title: "Minecraft - PixelHost",
  description: "Bem-vindo à PixelHost",
}

export default function MinecraftFeatures() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [activeConfig, setActiveConfig] = useState<'mods' | 'plugins' | 'vanilla'>('mods')
  const [version, setVersion] = useState<'bedrock' | 'java'>('java')

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % mainFeatures.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const mainFeatures = [
    {
      id: 'performance',
      title: 'Hardware de última geração.',
      description: 'Desempenho superior para rodar grandes mapas e mods.',
      icon: <Rocket className="h-8 w-8" />,
      gradient: 'from-orange-500 to-red-500',
      stats: { value: '99.9%', label: 'Uptime Garantido' },
      details: ['AMD Ryzen 5000', 'NVMe', 'Rede de até 10Gbps']
    },
    {
      id: 'security',
      title: 'Proteção DDoS avançada e backups automáticos.',
      description: 'Segurança máxima para manter seu servidor sempre online.',
      icon: <Shield className="h-8 w-8" />,
      gradient: 'from-green-500 to-emerald-500',
      stats: { value: '24/7', label: 'Monitoramento' },
      details: ['DDoS até 1Tbps', 'Backups diários', 'Firewall avançado', 'SSL Included']
    },
    {
      id: 'support',
      title: 'Suporte Minecraft especializado 24/7.',
      description: 'Equipe dedicada para resolver qualquer dúvida.',
      icon: <Headphones className="h-8 w-8" />,
      gradient: 'from-blue-500 to-purple-500',
      stats: { value: '<5min', label: 'Resposta Média' },
      details: ['Suporte 24/7', 'Chat & Discord', 'Base de Conhecimento', 'Ticket System']
    },
    {
      id: 'management',
      title: 'Painel Pterodactyl com 1-click mods/plugins.',
      description: 'Controle total do seu servidor com poucos cliques.',
      icon: <Settings className="h-8 w-8" />,
      gradient: 'from-purple-500 to-pink-500',
      stats: { value: '500+', label: 'Mods Disponíveis' },
      details: ['Instalação 1-click', 'FTP/SFTP', 'Console em tempo real', 'Restarts automáticos']
    }
  ]

  const additionalFeatures = [
    { icon: <Server className="h-5 w-5" />, title: 'Localizações Globais', desc: 'Datacenters no BR, EUA e EU' },
    { icon: <Zap className="h-5 w-5" />, title: 'Setup Instantâneo', desc: 'Servidor pronto em <90s' },
    { icon: <Users className="h-5 w-5" />, title: 'Slots Ilimitados', desc: 'Sem limite de jogadores' },
    { icon: <Database className="h-5 w-5" />, title: 'MySQL Grátis', desc: 'Banco de dados incluído' },
    { icon: <Users className="h-5 w-5" />, title: 'Atendimento Humano', desc: 'prontos para te ajudar e garantir sua melhor experiência' },
    { icon: <Code className="h-5 w-5" />, title: 'API Completa', desc: 'Integração via REST' }
  ]

  const plans = [
    {
      name: 'Básico',
      price: '25/mês',
      features: ['4GB RAM', '2 CPU Cores', '10GB SSD', 'Processamento Básico'],
      grad: 'from-gray-800 via-gray-900 to-zinc-700',
      badge: null
    },
    {
      name: 'Avançado',
      price: '35/mês',
      features: ['8GB RAM', '3 CPU Cores', '25GB SSD', 'Processamento Avançado'],
      grad: 'from-blue-900 via-blue-800 to-blue-900',
      badge: null
    },
    {
      name: 'Premium',
      price: '50/mês',
      features: ['16GB RAM', '3 CPU Cores', '50GB SSD', 'Processamento Premium'],
      grad: 'from-green-700 via-emerald-700 to-green-800',
      badge: (
        <span className="absolute top-4 right-4 px-2 py-1 bg-gradient-to-r from-green-400 to-green-600 text-xs font-semibold text-white rounded-full flex items-center gap-1 shadow-md">
          <Sparkles className="w-3 h-3" />
          Popular
        </span>
      )
    },
    {
      name: 'Ultimate',
      price: '90/mês',
      features: ['26GB RAM', '5 CPU Cores', '100GB SSD', 'Processamento Master'],
      grad: 'from-yellow-700 via-yellow-800 to-orange-800',
      badge: null
    }
  ]

  const configRecommendations: Record<'mods' | 'plugins' | 'vanilla', Recommendation[]> = {
    mods: [
      {
        players: 'Até 5 jogadores',
        world: 'Mundo pequeno a médio',
        ram: '6GB RAM',
        color: 'purple',
        width: '40%',
        description: 'Ideal para modpacks pequenos'
      },
      {
        players: '5-10 jogadores',
        world: 'Mundo médio',
        ram: '16GB RAM',
        color: 'blue',
        width: '70%',
        description: 'Perfeito para modpacks populares'
      },
      {
        players: '10-20 jogadores',
        world: 'Mundo grande',
        ram: '20GB RAM',
        color: 'green',
        width: '90%',
        description: 'Para modpacks pesados e muitos jogadores'
      }
    ],
    plugins: [
      {
        players: 'Até 8 jogadores',
        world: 'Mundo pequeno a médio',
        ram: '4GB RAM',
        color: 'purple',
        width: '35%',
        description: 'Ideal para servidores com plugins básicos'
      },
      {
        players: '8-15 jogadores',
        world: 'Mundo médio',
        ram: '8GB RAM',
        color: 'blue',
        width: '60%',
        description: 'Perfeito para servidores com muitos plugins'
      },
      {
        players: '25-40 jogadores',
        world: 'Mundo grande',
        ram: '16GB RAM',
        color: 'green',
        width: '85%',
        description: 'Para servidores complexos com muitos plugins'
      }
    ],
    vanilla: [
      {
        players: 'Até 8 jogadores',
        world: 'Mundo pequeno a médio',
        ram: '4GB RAM',
        color: 'purple',
        width: '30%',
        description: 'Ideal para servidores vanilla simples'
      },
      {
        players: '8-15 jogadores',
        world: 'Mundo médio',
        ram: '8GB RAM',
        color: 'blue',
        width: '55%',
        description: 'Perfeito para servidores vanilla médios'
      },
      {
        players: '15-20 jogadores',
        world: 'Mundo grande',
        ram: '16GB RAM',
        color: 'green',
        width: '80%',
        description: 'Para servidores vanilla grandes'
      }
    ]
  }

  // Função para obter o link baseado na versão e no plano
  const getPlanLink = (planIndex: number) => {
    const baseUrl = 'https://pixelhostbr.com/financeiro/index.php?rp=/store'
    const planNames = ['basico', 'avancado', 'premium', 'master']
    const bedrockPlanNames = ['basico', 'avancado', 'premiuum', 'master']

    if (version === 'bedrock') {
      return `${baseUrl}/hospedagem-minecraft-bedrock/plano-${bedrockPlanNames[planIndex]}`
    } else {
      return `${baseUrl}/hospedagem-minecraft/${planNames[planIndex]}`
    }
  }

  const getCustomPlanLink = () => {
    const baseUrl = 'https://pixelhostbr.com/financeiro/index.php?rp=/store'

    if (version === 'bedrock') {
      return `${baseUrl}/hospedagem-minecraft-bedrock/plano-personalizavel`
    } else {
      return `${baseUrl}/hospedagem-minecraft/plano-personalizavel`
    }
  }

  const getStoreLink = () => {
    const baseUrl = 'https://pixelhostbr.com/financeiro/index.php?rp=/store'

    if (version === 'bedrock') {
      return `${baseUrl}/hospedagem-minecraft-bedrock`
    } else {
      return `${baseUrl}/hospedagem-minecraft`
    }
  }

  return (
    <section className="relative bg-[var(--bg-deep)] py-20 overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]" />
      </div>
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400/15 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* ----------- HEADER ----------- */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-4 py-2 mb-6">
            <Heart className="h-4 w-4 text-green-400" />
            <span className="text-sm font-medium text-green-200">Recursos Premium Incluídos</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Tudo o que seu servidor</span><br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">
              Minecraft precisa
            </span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Recursos profissionais que fazem a diferença na experiência dos seus jogadores.
          </p>
        </div>

        {/* ----------- MAIN FEATURES ----------- */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-[rgba(255,255,255,0.1)]/50 p-8 shadow-2xl">
              <div key={activeFeature} className="animate-fadeIn">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${mainFeatures[activeFeature].gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                    {mainFeatures[activeFeature].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{mainFeatures[activeFeature].title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-2xl font-bold text-green-400">{mainFeatures[activeFeature].stats.value}</span>
                      <span className="text-sm text-[var(--text-secondary)]">{mainFeatures[activeFeature].stats.label}</span>
                    </div>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6">
                  {mainFeatures[activeFeature].description}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {mainFeatures[activeFeature].details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-[var(--text-secondary)]">{detail}</span>
                    </div>
                  ))}
                </div>
                <button className="group flex items-center space-x-2 text-green-400 hover:text-green-300 font-semibold transition-colors">
                  <span>Saiba mais sobre este recurso</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="flex justify-center space-x-3 mt-8">
                {mainFeatures.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveFeature(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === activeFeature
                      ? 'bg-green-500 scale-125 shadow-lg shadow-green-500/50'
                      : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-4">
              {mainFeatures.map((feature, idx) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(idx)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${idx === activeFeature
                    ? 'bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/30 shadow-lg shadow-green-500/10'
                    : 'bg-[var(--bg-surface)]/30 border-[rgba(255,255,255,0.1)]/50 hover:border-gray-600/50 hover:bg-[var(--bg-surface)]/50'
                    }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${idx === activeFeature
                      ? `bg-gradient-to-br ${feature.gradient} text-white`
                      : 'bg-gray-700 text-[var(--text-secondary)]'
                      }`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold ${idx === activeFeature ? 'text-white' : 'text-[var(--text-secondary)]'}`}>
                        {feature.title}
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] mt-1">
                        {feature.description}
                      </p>
                    </div>
                    {idx === activeFeature && (
                      <Play className="h-5 w-5 text-green-400 animate-pulse" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ----------- RECURSOS ADICIONAIS ----------- */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              E muito mais incluído em todos os planos
            </h3>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Recursos adicionais que fazem a diferença na experiência dos seus jogadores
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-[rgba(255,255,255,0.1)]/50 rounded-2xl p-6 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-green-400 group-hover:from-green-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white group-hover:text-green-400 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ----------- PLANS GRID ----------- */}
          <div className="text-center mt-16 mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Escolha seu Plano</h3>
            <p className="text-[var(--text-secondary)] mb-8">Encontre o equilíbrio perfeito entre custo e poder!</p>

            {/* Switch para alternar entre Java e Bedrock */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm font-semibold transition-colors ${version === 'java' ? 'text-[var(--primary-purple-light)]' : 'text-[var(--text-secondary)]'}`}>
                Java
              </span>
              <button
                onClick={() => setVersion(version === 'java' ? 'bedrock' : 'java')}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${version === 'bedrock' ? 'bg-green-600' : 'bg-[var(--primary-purple)]'
                  }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${version === 'bedrock' ? 'translate-x-9' : 'translate-x-1'
                    }`}
                />
              </button>
              <span className={`text-sm font-semibold transition-colors ${version === 'bedrock' ? 'text-green-400' : 'text-[var(--text-secondary)]'}`}>
                Bedrock
              </span>
            </div>
          </div>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 max-w-7xl mx-auto mb-16">
            {/* Quatro planos */}
            {plans.map((plan, idx) =>
              <div
                key={plan.name}
                className={`relative overflow-visible flex flex-col rounded-3xl p-7 border bg-gradient-to-br shadow-lg transition-all duration-500 transform
                  ${plan.grad} ${version === 'bedrock' ? 'border-green-500/50 hover:ring-2 hover:ring-green-500/50' : 'border-blue-500/50 hover:ring-2 hover:ring-blue-500/50'} hover:scale-[1.04]`}
              >
                {plan.badge}
                {/* Badge de versão */}
                <div className={`absolute -top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-lg transition-all duration-300 ${version === 'bedrock'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                  : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                  }`}>
                  {version === 'bedrock' ? (
                    <>
                      <Blocks className="w-3 h-3" />
                      Bedrock
                    </>
                  ) : (
                    <>
                      <Coffee className="w-3 h-3" />
                      Java
                    </>
                  )}
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
                <div className="mb-2">
                  <div className={`text-3xl font-extrabold transition-colors duration-300 whitespace-nowrap ${version === 'bedrock' ? 'text-green-400' : 'text-[var(--primary-purple-light)]'
                    }`}>
                    R$ {plan.price}
                  </div>
                </div>

                <ul className="flex-1 space-y-2 mb-6 mt-2">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className={`h-5 w-5 flex-shrink-0 transition-colors duration-300 ${version === 'bedrock' ? 'text-green-400' : 'text-[var(--primary-purple-light)]'
                        }`} />
                      <span className="text-base text-gray-200">{f}</span>
                    </li>
                  ))}
                </ul>
                {idx === 0 && (
                  <a
                    href={getPlanLink(0)}
                    className={`mt-auto text-white py-3 rounded-xl font-bold shadow-inner transition-all duration-300 flex justify-center ${version === 'bedrock'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 shadow-green-900/10 hover:from-green-600 hover:to-emerald-700'
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-blue-900/10 hover:from-blue-600 hover:to-blue-700'
                      }`}
                  >
                    Contratar
                  </a>
                )}
                {idx === 1 && (
                  <a
                    href={getPlanLink(1)}
                    className={`mt-auto text-white py-3 rounded-xl font-bold shadow-inner transition-all duration-300 flex justify-center ${version === 'bedrock'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 shadow-green-900/10 hover:from-green-600 hover:to-emerald-700'
                      : 'bg-gradient-to-r from-blue-600 to-blue-800 shadow-blue-900/10 hover:from-blue-700 hover:to-blue-900'
                      }`}
                  >
                    Contratar
                  </a>
                )}
                {idx === 2 && (
                  <a
                    href={getPlanLink(2)}
                    className={`mt-auto text-white py-3 rounded-xl font-bold shadow-inner transition-all duration-300 flex justify-center ${version === 'bedrock'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 shadow-green-900/10 hover:from-green-600 hover:to-emerald-700'
                      : 'bg-gradient-to-r from-green-400 to-green-700 shadow-green-900/10 hover:from-green-500 hover:to-green-800'
                      }`}
                  >
                    Contratar
                  </a>
                )}
                {idx === 3 && (
                  <a
                    href={getPlanLink(3)}
                    className={`mt-auto text-white py-3 rounded-xl font-bold shadow-inner transition-all duration-300 flex justify-center ${version === 'bedrock'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 shadow-green-900/10 hover:from-green-600 hover:to-emerald-700'
                      : 'bg-gradient-to-r from-yellow-500 to-orange-600 shadow-yellow-900/10 hover:from-yellow-600 hover:to-orange-700'
                      }`}
                  >
                    Contratar
                  </a>
                )}
              </div>
            )}
            {/* Card Customizado */}
            <div className={`relative overflow-visible flex flex-col rounded-3xl p-7 border bg-gradient-to-br from-purple-700/30 to-pink-700/30 shadow-lg transition-all duration-500 ${version === 'bedrock'
              ? 'border-green-500/50 hover:ring-2 hover:ring-green-500/50'
              : 'border-blue-500/50 hover:ring-2 hover:ring-blue-500/50'
              } hover:scale-[1.04]`}>
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-1 text-xs font-bold shadow-lg select-none">
                Plano personalizado
              </span>
              <h4 className="text-2xl font-bold text-white mb-2">Personalize</h4>
              <div className={`text-4xl font-extrabold mb-2 transition-colors duration-300 ${version === 'bedrock' ? 'text-green-400' : 'text-[var(--primary-purple-light)]'
                }`}>
                Sob consulta
              </div>
              <p className="text-base text-gray-200 mb-6 mt-2">
                Nenhum dos planos atende sua necessidade?<br />
                <span className={`font-bold transition-colors duration-300 ${version === 'bedrock' ? 'text-green-400' : 'text-[var(--primary-purple-light)]'
                  }`}>
                  Crie o seu plano!
                </span>
              </p>
              <a
                href={getCustomPlanLink()}
                className={`mt-auto text-white py-3 rounded-xl font-bold shadow-inner transition-all duration-300 flex justify-center ${version === 'bedrock'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 shadow-green-900/10 hover:from-green-600 hover:to-emerald-700'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-pink-900/10 hover:from-purple-700 hover:to-pink-700'
                  }`}
              >
                Customizar
              </a>
            </div>
          </div>
        </div>

        {/* ----------- RECOMENDAÇÕES DE PLANOS ----------- */}
        <section className="max-w-3xl mx-auto p-6 my-12 bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl border border-[rgba(255,255,255,0.1)]/40 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-1">Qual plano é ideal para você?</h2>
          <p className="text-[var(--text-secondary)] text-center mb-8">
            O tamanho ideal do servidor depende do tipo de uso. Confira nossas recomendações:
          </p>

          {/* Botões de alternância */}
          <div className="flex justify-center mb-8">
            <div className="bg-[var(--bg-surface)]/50 rounded-xl p-1 border border-[rgba(255,255,255,0.1)]/50">
              <button
                onClick={() => setActiveConfig('mods')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${activeConfig === 'mods'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'text-[var(--text-secondary)] hover:text-white hover:bg-gray-700/50'
                  }`}
              >
                Com Mods
              </button>
              <button
                onClick={() => setActiveConfig('plugins')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${activeConfig === 'plugins'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                  : 'text-[var(--text-secondary)] hover:text-white hover:bg-gray-700/50'
                  }`}
              >
                Com Plugins
              </button>
              <button
                onClick={() => setActiveConfig('vanilla')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${activeConfig === 'vanilla'
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                  : 'text-[var(--text-secondary)] hover:text-white hover:bg-gray-700/50'
                  }`}
              >
                Vanilla
              </button>
            </div>
          </div>

          <div className="grid gap-6">
            {configRecommendations[activeConfig].map((recommendation, idx) => (
              <div key={idx} className="bg-[var(--bg-surface)]/80 p-5 rounded-2xl border border-[rgba(255,255,255,0.1)]/50 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">{recommendation.players}</h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-2">{recommendation.description}</p>
                  <span className={`text-xs rounded px-2 py-0.5 font-bold ${recommendation.color === 'purple' ? 'bg-indigo-700/50 text-indigo-100' :
                    recommendation.color === 'blue' ? 'bg-blue-700/40 text-blue-100' :
                      'bg-green-700/40 text-green-100'
                    }`}>
                    {recommendation.world}
                  </span>
                  <div className="mt-2 h-2 bg-gray-700 rounded-full relative overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 h-full rounded-full ${recommendation.color === 'purple' ? 'bg-purple-500' :
                        recommendation.color === 'blue' ? 'bg-blue-400' :
                          'bg-green-400'
                        }`}
                      style={{ width: recommendation.width }}
                    ></div>
                  </div>
                </div>
                <span className={`bg-[var(--bg-surface)] px-4 py-1.5 rounded-lg font-bold mt-4 md:mt-0 ${recommendation.color === 'purple' ? 'text-purple-300' :
                  recommendation.color === 'blue' ? 'text-blue-300' :
                    'text-green-300'
                  }`}>
                  {recommendation.ram}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ----------- CHAMADA FINAL ----------- */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-[var(--bg-surface)]/40 backdrop-blur-sm border border-gray-600/50 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Pronto para começar sua jornada?</h3>
                <p className="text-[var(--text-secondary)]">
                  Crie seu servidor Minecraft agora e veja a diferença que um hosting profissional faz.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={getStoreLink()} className="btn-primary btn-lg flex-1 flex justify-center">
                  Começar Agora
                </a>
                {/* Servidor Publico
                 <button className="flex-1 bg-[var(--bg-surface)] hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg border border-gray-600 hover:border-green-500/50 transition-all duration-300">
                  Ver Demonstração
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeIn {
        animation: fadeIn 0.5s ease-out;
      }
    `}</style>
    </section>
  )
}