'use client'

/*
Safe-list gradientes (Tailwind):  
bg-gradient-to-b from-gray-900 to-gray-800 
bg-gradient-to-r from-purple-600 to-indigo-600 
bg-gradient-to-r from-indigo-500 to-cyan-500 
bg-gradient-to-r from-pink-500 to-purple-500
*/

import { useState } from 'react'
import {
  Mail, Phone, Send, MapPin, Heart
} from 'lucide-react'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle'|'sent'>('idle')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sent')
    setTimeout(()=>setStatus('idle'), 4000)
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center py-20 overflow-hidden">

      {/* Partículas/fundo */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.08),transparent_50%)]"/>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,112,243,0.07),transparent_50%)]"/>
      </div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 px-6">

        {/* Card de contato */}
        <div className="w-full md:w-[350px] bg-gradient-to-br from-gray-800/70 to-gray-900/90 p-8 rounded-3xl border border-gray-700/50 flex flex-col items-center shadow-2xl">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600/30 to-indigo-600/30 border border-purple-600/20 px-4 py-2 rounded-full mb-5">
            <Heart className="h-4 w-4 text-purple-400 mr-2"/>
            <span className="text-sm text-purple-200 font-medium">Fale Conosco</span>
          </div>
          <p className="text-gray-300 text-center mb-7">
            Entre em contato pelo formulário<br/> ou diretamente:
          </p>
          <div className="w-full text-sm space-y-6">
            <div className="flex gap-3 items-start">
              <Mail className="mt-1 text-cyan-400"/>
              <span>
                <span className="text-gray-400">Email:</span><br/>
                <a href="mailto:atendimento@pixelhostbr.com" className="text-cyan-300 hover:underline">atendimento@pixelhostbr.com</a><br/>
                <a href="mailto:suporte@pixelhostbr.com" className="text-cyan-300 hover:underline">suporte@pixelhostbr.com</a>
              </span>
            </div>
            <div className="flex gap-3 items-start">
              <Phone className="mt-1 text-purple-400"/>
              <span>
                <span className="text-gray-400">Telefones:</span><br/>
                <a href="tel:+5579999347948" className="text-purple-300 hover:underline">+55 79 99934-7948</a><br/>
                <a href="tel:+5579999347948" className="text-purple-300 hover:underline">+55 79 99934-7948</a>
              </span>
            </div>
            {/* Redes sociais com Font Awesome */}
            <div className="flex gap-2 mt-6 justify-center">
              <a href="https://www.instagram.com/thepixelhost/" className="text-gray-400 hover:text-rose-400">
                <i className="fab fa-instagram h-5 w-5"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61574219692149" className="text-gray-400 hover:text-blue-500">
                <i className="fab fa-facebook-f h-5 w-5"></i>
              </a>
              <a href="https://www.linkedin.com/company/thepixelhost/" className="text-gray-400 hover:text-cyan-400">
                <i className="fab fa-linkedin-in h-5 w-5"></i>
              </a>
              <a href="https://twitter.com/thepixelhost" className="text-gray-400 hover:text-indigo-400">
                <i className="fab fa-twitter h-10 w-10"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-gradient-to-br from-gray-900/80 to-gray-800/90 p-10 rounded-3xl border border-gray-700/60 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Envie sua mensagem</span>
          </h3>
          <div className="mb-5">
            <label className="text-gray-300 block mb-2">Nome</label>
            <input required autoComplete="name" type="text" className="w-full px-4 py-3 rounded-xl bg-gray-800 border-none focus:ring-2 ring-purple-400 text-white placeholder-gray-500"/>
          </div>
          <div className="mb-5">
            <label className="text-gray-300 block mb-2">Email</label>
            <input required autoComplete="email" type="email" className="w-full px-4 py-3 rounded-xl bg-gray-800 border-none focus:ring-2 ring-cyan-400 text-white placeholder-gray-500"/>
          </div>
          <div className="mb-5">
            <label className="text-gray-300 block mb-2">Assunto</label>
            <input required type="text" className="w-full px-4 py-3 rounded-xl bg-gray-800 border-none focus:ring-2 ring-rose-400 text-white placeholder-gray-500"/>
          </div>
          <div className="mb-7">
            <label className="text-gray-300 block mb-2">Mensagem</label>
            <textarea required rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-800 border-none focus:ring-2 ring-indigo-400 text-white placeholder-gray-500"/>
          </div>
          <button type="submit" className="w-full flex justify-center items-center gap-2 py-3 px-8 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white font-bold text-lg shadow-lg shadow-purple-700/20 transition-all duration-300 hover:scale-105 focus:ring-2 ring-purple-400">
            <Send className="h-5 w-5"/> {status==='sent' ? "Mensagem enviada!" : "Enviar"}
          </button>
          {status==='sent' && (
            <p className="text-green-400 mt-4 text-center animate-fadeIn">Enviado com sucesso! Responderemos em breve.</p>
          )}
        </form>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from{ opacity:0; transform: translateY(10px);}
          to{ opacity:1; transform: translateY(0);}
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease;
        }
      `}</style>
    </section>
  )
}
