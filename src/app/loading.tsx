'use client'

import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 z-50">
      <Loader2 className="animate-spin text-purple-600 w-16 h-16" />
      <span className="sr-only">Carregando...</span>
    </div>
  )
}
