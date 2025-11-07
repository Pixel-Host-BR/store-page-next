'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let ticking = false
    let scrollTimeout: NodeJS.Timeout | null = null

    const toggle = () => {
      const shouldShow = window.scrollY > 250
      setVisible(shouldShow)
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolling(true)
          toggle()
          if (scrollTimeout) clearTimeout(scrollTimeout)
          scrollTimeout = setTimeout(() => {
            setIsScrolling(false)
          }, 150)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout) clearTimeout(scrollTimeout)
    }
  }, [])

  const handleClick = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    })
  }

  return (
    <button
      aria-label="Voltar para o topo"
      onClick={handleClick}
      style={{ zIndex: 99999 }}
      className={`
        fixed bottom-28 right-4 sm:bottom-32 sm:right-6 md:bottom-28 md:right-6 lg:bottom-28 lg:right-6 xl:bottom-28 xl:right-6
        transition-all duration-500 ease-out
        ${visible 
          ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' 
          : 'opacity-0 scale-90 pointer-events-none translate-y-4'
        }
        ${isScrolling ? 'scale-105' : ''}
        bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600
        hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700
        active:from-purple-800 active:via-indigo-800 active:to-blue-800
        shadow-2xl shadow-purple-900/50
        hover:shadow-purple-500/60
        rounded-2xl p-4
        border-2 border-white/20 hover:border-white/30
        flex items-center justify-center
        group
        backdrop-blur-sm
        hover:scale-110
        active:scale-95
      `}
    >
      <ChevronUp className="h-6 w-6 text-white group-hover:scale-125 group-hover:-translate-y-1 transition-all duration-300" />
      
      {/* Ripple effect on hover */}
      <span className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500" />
      
      {/* Glow effect */}
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/30 to-blue-400/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
    </button>
  )
}
