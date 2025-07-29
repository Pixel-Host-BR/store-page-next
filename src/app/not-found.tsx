'use client'

import Link from 'next/link'
import { ArrowLeftCircle, Ghost } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 px-4">
      {/* Partículas leves no fundo para o efeito do site */}
      <div className="absolute inset-0 pointer-events-none opacity-20 select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(93,62,188,0.10),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_70%,rgba(33,150,243,0.07),transparent_70%)]" />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center max-w-lg">
        <Ghost className="w-24 h-24 text-indigo-400 mb-2 animate-bounce-alt" />
        <h1 className="text-[3rem] font-extrabold text-white mb-2 drop-shadow-lg">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-indigo-200">
          Página não encontrada
        </h2>
        <p className="text-gray-400 mb-6 text-lg">
          Opa! O endereço digitado não existe ou foi removido.<br/>
          Que tal voltar para um lugar seguro?
        </p>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-lg shadow-md transition-all"
        >
          <ArrowLeftCircle className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          Voltar para o início
        </Link>
      </div>
      {/* Animação customizada */}
      <style jsx>{`
        @keyframes bounce-alt {
          0%, 100%   { transform: translateY(0);}
          50%        { transform: translateY(-15px);}
        }
        .animate-bounce-alt {
          animation: bounce-alt 1.3s infinite;
        }
      `}</style>
    </section>
  )
}
