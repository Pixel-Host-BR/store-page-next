'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 250)
    window.addEventListener('scroll', toggle)
    return () => window.removeEventListener('scroll', toggle)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      aria-label="Voltar para o topo"
      onClick={handleClick}
      className={`
        fixed bottom-23 right-7.5 z-[99]
        transition-all duration-300
        ${visible ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'}
        bg-gradient-to-br from-purple-600 to-indigo-500
        hover:from-indigo-600 hover:to-purple-700
        shadow-2xl shadow-purple-800/40
        rounded-full p-3
        border-2 border-white/10
        flex items-center justify-center
        group
      `}
    >
      <ChevronUp className="h-6 w-6 text-white group-hover:scale-125 transition-transform" />
    </button>
  )
}
