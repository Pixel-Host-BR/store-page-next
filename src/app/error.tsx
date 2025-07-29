'use client'

import Link from 'next/link'
import { Bug, RefreshCw } from 'lucide-react'

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-900 to-gray-900 px-4">
      <div className="text-center flex flex-col items-center max-w-lg">
        <Bug className="w-20 h-20 text-rose-400 mb-2 animate-pulse" />
        <h1 className="text-[2.7rem] font-extrabold text-white mb-2 drop-shadow-lg">
          500
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-rose-200">
          Erro Interno do Servidor
        </h2>
        <p className="text-gray-400 mb-6 text-lg">
          Algo inesperado aconteceu.<br />
          Nossa equipe já foi notificada.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 text-white font-bold text-lg shadow-md hover:from-red-700 hover:to-rose-700 transition-all"
          >
            <RefreshCw className="h-5 w-5 group-hover:rotate-180 transition-transform" />
            Tentar novamente
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg ml-2 shadow-md transition-all hover:from-indigo-700 hover:to-purple-700"
          >
            Voltar para o início
          </Link>
        </div>
      </div>
      <style jsx>{`
        .animate-pulse {
          animation: pulse 1.2s cubic-bezier(0.4,0,0.6,1) infinite;
        }
        @keyframes pulse {
          0%,100% { opacity:1 }
          50% { opacity:.4 }
        }
      `}</style>
    </section>
  )
}
