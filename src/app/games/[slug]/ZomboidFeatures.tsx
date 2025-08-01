'use client'


import { useState, useEffect } from 'react'
import {
  Heart,
  Users,
  Shield,
  Server,
  Settings,
  Zap,
  Code,
  Play,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Skull,
  Wrench
} from 'lucide-react'

export const metadata = {
  title: "Project Zomboid - PixelHost",
  description: "Bem-vindo à PixelHost",
}

export default function ZomboidFeatures() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  /* animação de entrada + carrossel automático */
  useEffect(() => {
    setIsVisible(true)
    const id = setInterval(
      () => setActiveFeature(prev => (prev + 1) % mainFeatures.length),
      4000
    )
    return () => clearInterval(id)
  }, [])

  /* -------- dados -------- */
  const mainFeatures = [
    {
      id: 'hardcore',
      title: 'Morte permanente.',
      description:
        'Quando morrer, acabou. Sobreviva o máximo que conseguir neste mundo brutal.',
      icon: <Skull className="h-8 w-8" />,
      gradient: 'from-indigo-700 to-indigo-500',
      stats: { value: 'Só 1', label: 'Vida' },
      details: ['Lesões realistas', 'Sistema de doenças', 'Ansiedade e depressão']
    },
    {
      id: 'crafting',
      title: 'Sistema de crafting profundo.',
      description:
        'Construa barricadas, cozinhe alimentos, costure roupas e mantenha geradores funcionando.',
      icon: <Wrench className="h-8 w-8" />,
      gradient: 'from-rose-600 to-pink-500',
      stats: { value: '200+', label: 'Receitas' },
      details: ['Multiferramentas', 'Habilidade por uso', 'Árvores de skill']
    },
    {
      id: 'multiplayer',
      title: 'Co-op ou PvP desafiador.',
      description:
        'Monte grupos de sobrevivência, compartilhe recursos ou lute por territórios.',
      icon: <Users className="h-8 w-8" />,
      gradient: 'from-teal-600 to-emerald-500',
      stats: { value: '16-64', label: 'Jogadores' },
      details: ['VoIP integrado', 'Admin tools', 'Eventos sazonais']
    },
    {
      id: 'mods',
      title: 'Workshop fervilhante.',
      description:
        'Milhares de mods expandindo mapas, tipos de zumbis e mecânicas de jogo.',
      icon: <Code className="h-8 w-8" />,
      gradient: 'from-amber-500 to-amber-400',
      stats: { value: '4 000+', label: 'Mods ativos' },
      details: ['Instalação 1-click', 'Backups automáticos', 'FTP/SFTP']
    }
  ]

  const additionalFeatures = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: 'Setup rápido',
      desc: 'Servidor sobe em menos de 90 s'
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: 'DDoS 1 Tbps',
      desc: 'Proteção total contra ataques'
    },
    {
      icon: <Server className="h-5 w-5" />,
      title: 'Slots flexíveis',
      desc: 'Ajuste quando precisar'
    }
  ]

  const plans = [
    {
      name: 'Básico',
      price: '13/mês',
      features: ['3 GB RAM', '2 CPU Cores', '15 GB SSD', 'Processamento Básico'],
      grad: 'from-gray-800 via-gray-900 to-zinc-700',
      badge: null
    },
    {
      name: 'Avançado',
      price: '35/mês',
      features: ['8 GB RAM', '3 CPU Cores', '35 GB SSD', 'Processamento Avançado'],
      grad: 'from-blue-900 via-blue-800 to-blue-900',
      badge: null
    },
    {
      name: 'Premium',
      price: '103/mês',
      features: ['12 GB RAM', '3 CPU Cores', '60 GB SSD', 'Processamento Premium'],
      grad: 'from-indigo-700 via-indigo-700 to-violet-800',
      badge: (
        <span className="absolute top-4 right-4 px-2 py-1 bg-gradient-to-r from-indigo-400 to-indigo-600 text-xs font-semibold text-white rounded-full flex items-center gap-1 shadow-md">
          <Sparkles className="w-3 h-3" />
          Mais popular
        </span>
      )
    },
    {
      name: 'Ultimate',
      price: '115/mês',
      features: ['24 GB RAM', '5 CPU Cores', '120 GB SSD', 'Processamento Ultimate'],
      grad: 'from-rose-700 via-rose-800 to-rose-900',
      badge: null
    }
  ]

  /* -------- markup -------- */
  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 overflow-hidden">
      {/* efeito de background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,69,19,0.08),transparent_50%)]" />
      </div>

      {/* partículas */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/15 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* -------- header -------- */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/20 to-violet-600/20 backdrop-blur-sm border border-indigo-500/30 rounded-full px-4 py-2 mb-6">
            <Heart className="h-4 w-4 text-indigo-400" />
            <span className="text-sm font-medium text-indigo-200">
              Recursos Premium Inclusos
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Tudo que seu servidor</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-500 to-purple-600 bg-clip-text text-transparent">
              Project Zomboid precisa
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Performance, estabilidade e suporte para a experiência de sobrevivência definitiva.
          </p>
        </div>

        {/* -------- main features -------- */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* card grande */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 shadow-2xl">
              <div key={activeFeature} className="animate-fadeIn">
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${
                      mainFeatures[activeFeature].gradient
                    } rounded-2xl flex items-center justify-center text-white shadow-lg`}
                  >
                    {mainFeatures[activeFeature].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {mainFeatures[activeFeature].title}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-2xl font-bold text-indigo-400">
                        {mainFeatures[activeFeature].stats.value}
                      </span>
                      <span className="text-sm text-gray-400">
                        {mainFeatures[activeFeature].stats.label}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {mainFeatures[activeFeature].description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {mainFeatures[activeFeature].details.map((d, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-sm text-gray-300"
                    >
                      <CheckCircle2 className="h-4 w-4 text-indigo-400 flex-shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

                <button className="group flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
                  <span>Saiba mais sobre este recurso</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* dots */}
              <div className="flex justify-center space-x-3 mt-8">
                {mainFeatures.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveFeature(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      idx === activeFeature
                        ? 'bg-indigo-500 scale-125 shadow-lg shadow-indigo-500/50'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* lista lateral */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="space-y-4">
              {mainFeatures.map((f, idx) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFeature(idx)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                    idx === activeFeature
                      ? 'bg-gradient-to-r from-indigo-500/10 to-violet-600/10 border-indigo-500/30 shadow-lg shadow-indigo-500/10'
                      : 'bg-gray-800/30 border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-800/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        idx === activeFeature
                          ? `bg-gradient-to-br ${f.gradient} text-white`
                          : 'bg-gray-700 text-gray-400'
                      }`}
                    >
                      {f.icon}
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`font-semibold ${
                          idx === activeFeature
                            ? 'text-white'
                            : 'text-gray-300'
                        }`}
                      >
                        {f.title}
                      </h4>
                      <p className="text-sm text-gray-400 mt-1">{f.description}</p>
                    </div>
                    {idx === activeFeature && (
                      <Play className="h-5 w-5 text-indigo-400 animate-pulse" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* -------- recursos adicionais -------- */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              E muito mais incluído em todos os planos
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Recursos extras que garantem sua sobrevivência no apocalipse zumbi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((a, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500/20 to-violet-600/20 rounded-xl flex items-center justify-center text-indigo-400 group-hover:from-indigo-500/30 group-hover:to-violet-600/30 transition-all duration-300">
                    {a.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white group-hover:text-indigo-400 transition-colors">
                      {a.title}
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">{a.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* -------- planos -------- */}
          <div className="text-center mt-16 mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Escolha seu Plano
            </h3>
            <p className="text-gray-400 mb-8">
              Encontre o equilíbrio perfeito entre custo e poder!
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 max-w-9x1 mx-auto mb-16">
            {plans.map((p, idx) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-3xl p-7 border bg-gradient-to-br shadow-lg transition-all duration-300 ${p.grad} border-gray-700 hover:scale-[1.04] hover:ring-2 hover:ring-indigo-500/30`}
              >
                {p.badge}
                <h4 className="text-2xl font-bold text-white mb-2">{p.name}</h4>
                <div className="text-4xl font-extrabold text-indigo-400 mb-2">
                  {p.price}
                </div>
                <ul className="flex-1 space-y-2 mb-6 mt-2">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                      <span className="text-base text-gray-200">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* LINKS – ajuste para seus produtos reais */}
                {idx === 0 && (
                  <a
                    href="https://pixelhostbr.com/financeiro/index.php?rp=/store/hospedagem-peoject-zomboid/plano-basico"
                    className="mt-auto bg-gradient-to-r from-indigo-500 to-violet-700 text-white py-3 rounded-xl font-bold shadow-inner shadow-indigo-900/10 hover:from-indigo-600 hover:to-violet-800 transition-all duration-200 flex justify-center"
                  >
                    Contratar
                  </a>
                )}
                {idx === 1 && (
                  <a
                    href="https://pixelhostbr.com/financeiro/index.php?rp=/store/hospedagem-peoject-zomboid/plano-avancado"
                    className="mt-auto bg-gradient-to-r from-indigo-500 to-violet-700 text-white py-3 rounded-xl font-bold shadow-inner shadow-indigo-900/10 hover:from-indigo-600 hover:to-violet-800 transition-all duration-200 flex justify-center"
                  >
                    Contratar
                  </a>
                )}
                {idx === 2 && (
                  <a
                    href="https://pixelhostbr.com/financeiro/index.php?rp=/store/hospedagem-peoject-zomboid/plano-premium"
                    className="mt-auto bg-gradient-to-r from-indigo-500 to-violet-700 text-white py-3 rounded-xl font-bold shadow-inner shadow-indigo-900/10 hover:from-indigo-600 hover:to-violet-800 transition-all duration-200 flex justify-center"
                  >
                    Contratar
                  </a>
                )}
                {idx === 3 && (
                  <a
                    href="https://pixelhostbr.com/financeiro/index.php?rp=/store/hospedagem-peoject-zomboid/plano-ultimate"
                    className="mt-auto bg-gradient-to-r from-indigo-500 to-violet-700 text-white py-3 rounded-xl font-bold shadow-inner shadow-indigo-900/10 hover:from-indigo-600 hover:to-violet-800 transition-all duration-200 flex justify-center"
                  >
                    Contratar
                  </a>
                )}
              </div>
            ))}

            {/* cartão personalizado */}
            <div className="relative overflow-visible flex flex-col rounded-3xl p-7 border bg-gradient-to-br from-purple-700/30 to-pink-700/30 shadow-lg border-purple-600 hover:scale-[1.04] transition-all duration-300 hover:ring-2 hover:ring-pink-400/30">
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-1 text-xs font-bold shadow-lg select-none">
                Plano personalizado
              </span>
              <h4 className="text-2xl font-bold text-white mb-2">Personalize</h4>
              <div className="text-4xl font-extrabold text-pink-400 mb-2">Sob consulta</div>
              <p className="text-base text-gray-200 mb-6 mt-2">
                Nenhum dos planos atende sua necessidade?
                <br />
                <span className="font-bold text-pink-400">Crie o seu plano!</span>
              </p>
              <a
                href="https://pixelhostbr.com/financeiro/index.php?rp=/store/hospedagem-peoject-zomboid/plano-personalizavel"
                className="mt-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-bold shadow-inner shadow-pink-900/10 hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex justify-center"
              >
                Customizar
              </a>
            </div>
          </div>
        </div>

        {/* -------- call to action final -------- */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gradient-to-r from-indigo-600/10 to-violet-700/10 backdrop-blur-sm border border-indigo-400/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Pronto para enfrentar o apocalipse?
                </h3>
                <p className="text-gray-300">
                  Configure seu servidor Project Zomboid conosco e sobreviva com máxima performance.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://pixelhostbr.com/financeiro/index.php?rp=/store/hospedagem-peoject-zomboid">
                  <button className="flex-1 bg-gradient-to-r from-indigo-600 to-violet-700 hover:from-indigo-700 hover:to-violet-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-indigo-500/25">
                    Começar Agora
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* animação fadeIn */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  )
}
