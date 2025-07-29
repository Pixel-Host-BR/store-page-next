'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  Code,
  CheckCircle2,
  Shield,
  Rocket,
  Users,
  Server,
  Zap,
  Globe,
  Database,
  Headphones,
  Settings,
  Heart,
  ArrowRight,
  Play,
  Sparkles
} from 'lucide-react'



export default function ArkFeatures() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % mainFeatures.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const mainFeatures = [
    {
      id: 'dinosaurs',
      title: 'Domine os dinossauros.',
      description: 'Capture e treine criaturas pré-históricas para batalhas e defesa.',
      icon: <Rocket className="h-8 w-8" />,
      gradient: 'from-red-600 to-yellow-500',
      stats: { value: '100+', label: 'Espécies de dinossauros' },
      details: ['Domesticação avançada', 'Batalhas estratégicas', 'Montarias poderosas']
    },
    {
      id: 'base-building',
      title: 'Construção de bases robustas.',
      description: 'Construa fortalezas para proteger seus recursos e aliados.',
      icon: <Shield className="h-8 w-8" />,
      gradient: 'from-green-600 to-emerald-500',
      stats: { value: '500+', label: 'Estruturas personalizáveis' },
      details: ['Paredes reforçadas', 'Defesas automáticas', 'Layouts estratégicos']
    },
    {
      id: 'multiplayer',
      title: 'Experiência multiplayer intensa.',
      description: 'Alie-se com outros jogadores ou dispute territórios em servidores dedicados.',
      icon: <Server className="h-8 w-8" />,
      gradient: 'from-blue-600 to-indigo-600',
      stats: { value: '24/7', label: 'Servidores estáveis' },
      details: ['Equipe de suporte dedicada', 'Eventos PvP/PvE', 'Comunicação integrada']
    },
    {
      id: 'crafting',
      title: 'Crafting e sobrevivência avançados.',
      description: 'Explore, colete recursos e crie equipamentos para aumentar sua chance de sobrevivência.',
      icon: <Settings className="h-8 w-8" />,
      gradient: 'from-yellow-500 to-orange-400',
      stats: { value: '300+', label: 'Itens e engrenagens' },
      details: ['Forjas e máquinas', 'Ferramentas personalizadas', 'Receitas sofisticadas']
    }
  ]

  const additionalFeatures = [
    { icon: <Zap className="h-5 w-5" />, title: 'Setup rápido', desc: 'Servidor pronto para rodar em poucos minutos' },
    { icon: <Database className="h-5 w-5" />, title: 'Backups automáticos', desc: 'Segurança total dos seus dados' },
    { icon: <Heart className="h-5 w-5" />, title: 'Comunidade ativa', desc: 'Fóruns e suporte constantes' },
    { icon: <Rocket className="h-5 w-5" />, title: 'Atualizações frequentes', desc: 'Novidades e melhorias constantes' },
    { icon: <Code className="h-5 w-5" />, title: 'API para mods', desc: 'Flexibilidade para integrar e criar conteúdo' },
    { icon: <Users className="h-5 w-5" />, title: 'Suporte 24/7', desc: 'Equipe pronta para ajudar a qualquer momento' }
  ]

  const plans = [
    {
      name: 'Básico',
      price: '50/mês',
      features: ['5GB RAM', '2 CPU Cores', '20GB SSD'],
      grad: 'from-gray-800 via-gray-900 to-zinc-700',
      badge: null
    },
    {
      name: 'Avançado',
      price: '80/mês',
      features: ['8GB RAM', '4 CPU Cores', '40GB SSD'],
      grad: 'from-blue-900 via-blue-800 to-blue-900',
      badge: null
    },
    {
      name: 'Premium',
      price: '105/mês',
      features: ['16GB RAM', '6 CPU Cores', '80GB SSD'],
      grad: 'from-green-700 via-emerald-700 to-green-800',
      badge: (
        <span className="absolute top-4 right-4 px-2 py-1 bg-gradient-to-r from-green-400 to-green-600 text-xs font-semibold text-white rounded-full flex items-center gap-1 shadow-md">
          <Sparkles className="w-3 h-3" />
          Mais Popular
        </span>
      )
    },
    {
      name: 'Ultimate',
      price: '160/mês',
      features: ['26GB RAM', '8 CPU Cores', '150GB SSD'],
      grad: 'from-yellow-700 via-yellow-800 to-orange-800',
      badge: null
    }
  ]

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(202,138,4,0.08),transparent_50%)]" />
      </div>
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500/15 rounded-full animate-pulse"
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
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-yellow-400/20 backdrop-blur-sm border border-red-500/30 rounded-full px-4 py-2 mb-6">
            <Heart className="h-4 w-4 text-red-400" />
            <span className="text-sm font-medium text-red-200">Recursos Premium Inclusos</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Tudo o que seu servidor</span><br/>
            <span className="bg-gradient-to-r from-red-500 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              de ARK precisa
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Performance, segurança e suporte para elevar sua experiência no ARK.
          </p>
        </div>

        {/* ----------- MAIN FEATURES ----------- */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 shadow-2xl">
              <div key={activeFeature} className="animate-fadeIn">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${mainFeatures[activeFeature].gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                    {mainFeatures[activeFeature].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{mainFeatures[activeFeature].title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-2xl font-bold text-yellow-400">{mainFeatures[activeFeature].stats.value}</span>
                      <span className="text-sm text-gray-400">{mainFeatures[activeFeature].stats.label}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {mainFeatures[activeFeature].description}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {mainFeatures[activeFeature].details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>
                <button className="group flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 font-semibold transition-colors">
                  <span>Saiba mais sobre este recurso</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="flex justify-center space-x-3 mt-8">
                {mainFeatures.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveFeature(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      idx === activeFeature
                        ? 'bg-yellow-400 scale-125 shadow-lg shadow-yellow-400/50'
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
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                    idx === activeFeature
                      ? 'bg-gradient-to-r from-yellow-400/10 to-yellow-400/10 border-yellow-400/30 shadow-lg shadow-yellow-400/10'
                      : 'bg-gray-800/30 border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-800/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      idx === activeFeature
                        ? `bg-gradient-to-br ${feature.gradient} text-white`
                        : 'bg-gray-700 text-gray-400'
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold ${idx === activeFeature ? 'text-white' : 'text-gray-300'}`}>
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-400 mt-1">
                        {feature.description}
                      </p>
                    </div>
                    {idx === activeFeature && (
                      <Play className="h-5 w-5 text-yellow-400 animate-pulse" />
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
            <p className="text-gray-400 max-w-2xl mx-auto">
              Recursos adicionais que tornam a sua experiência inesquecível
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-400/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-xl flex items-center justify-center text-yellow-400 group-hover:from-yellow-400/30 group-hover:to-yellow-500/30 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white group-hover:text-yellow-400 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">
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
            <p className="text-gray-400 mb-8">Planos flexíveis para todos os tipos de jogadores</p>
          </div>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 max-w-9x1 mx-auto mb-16">
            {/* Quatro planos */}
            {plans.map((plan, idx) =>
              <div key={plan.name}
                className={`relative overflow-visible flex flex-col rounded-3xl p-7 border bg-gradient-to-br shadow-lg transition-all duration-300
                  ${plan.grad} border-gray-700 hover:scale-[1.04] hover:ring-2 hover:ring-yellow-400/30`}
              >
                {plan.badge}
                <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
                <div className="text-4xl font-extrabold text-yellow-400 mb-2">{plan.price}</div>
                <ul className="flex-1 space-y-2 mb-6 mt-2">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                      <span className="text-base text-gray-200">{f}</span>
                    </li>
                  ))}
                </ul>
                {/* Links ajustados para exemplo */}
                {idx === 0 && (
                  <a
                    href="https://pixelhostbr.com/financeiro/index.php?rp=/store/ark-survival/basico"
                    className="mt-auto bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-3 rounded-xl font-bold shadow-inner shadow-yellow-900/10 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 flex justify-center"
                  >
                    Contratar
                  </a>
                )}
                {idx === 1 && (
                  <a
                    href="https://pixelhostbr.com/financeiro/index.php?rp=/store/ark-survival/avancado"
                    className="mt-auto bg-gradient-to-r from-yellow-600 to-yellow-800 text-white py-3 rounded-xl font-bold shadow-inner shadow-yellow-900/10 hover:from-yellow-700 hover:to-yellow-900 transition-all duration-200 flex justify-center"
                  >
                    Contratar
                  </a>
                )}
                {idx === 2 && (
                  <a
                    href="https://pixelhostbr.com/financeiro/index.php?rp=/store/ark-survival/premium"
                    className="mt-auto bg-gradient-to-r from-yellow-700 to-yellow-900 text-white py-3 rounded-xl font-bold shadow-inner shadow-yellow-900/10 hover:from-yellow-800 hover:to-yellow-950 transition-all duration-200 flex justify-center"
                  >
                    Contratar
                  </a>
                )}
                {idx === 3 && (
                  <a
                    href="https://pixelhostbr.com/financeiro/index.php?rp=/store/ark-survival/plano-ultimate"
                    className="mt-auto bg-gradient-to-r from-yellow-800 to-yellow-950 text-white py-3 rounded-xl font-bold shadow-inner shadow-yellow-900/10 hover:from-yellow-900 hover:to-yellow-950 transition-all duration-200 flex justify-center"
                  >
                    Contratar
                  </a>
                )}
              </div>
            )}
            {/* Card Customizado */}
            <div className="relative flex flex-col items-center text-center rounded-3xl border bg-gradient-to-br from-purple-700/30 to-pink-700/30 shadow-lg border-purple-600 p-7 hover:scale-[1.04] transition-all duration-300 hover:ring-2 hover:ring-pink-400/30">
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-1 text-xs font-bold shadow-lg select-none">
                Plano personalizado
              </span>
              <h4 className="text-xl font-bold text-white my-4">Personalize</h4>
              <p className="text-base text-gray-200 mb-4">
                Nenhum dos planos atende sua necessidade?<br />
                <span className="font-bold text-pink-400">Crie o seu plano!</span>
              </p> <br/><br/>
              <a
                href="https://pixelhostbr.com/financeiro/index.php?rp=/store/ark-survival/plano-personalizavel"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-bold shadow-pink-600/20 transition-all duration-200 hover:from-purple-700 hover:to-pink-700 flex justify-center"
              >
                Customizar
              </a>
            </div>
          </div>
        </div>

        {/* ----------- CHAMADA FINAL ----------- */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-yellow-600/10 to-yellow-800/10 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Pronto para conquistar o ARK?</h3>
                <p className="text-gray-300">
                  Configure seu servidor ARK conosco e tenha a melhor performance para sua tribo.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://pixelhostbr.com/financeiro/index.php?rp=/store/ark-survival">
                <button className="flex-1 bg-gradient-to-r from-yellow-600 to-yellow-800 hover:from-yellow-700 hover:to-yellow-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-400/25">
                  Começar Agora
                </button>
              </a>
                {/* Exemplo comentado para futuro
                <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg border border-gray-600 hover:border-yellow-400/50 transition-all duration-300">
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
