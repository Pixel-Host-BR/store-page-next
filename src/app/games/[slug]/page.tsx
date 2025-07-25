'use client'

import Link from 'next/link'
import React from 'react'
import MinecraftFeatures from './MinecraftFeatures'
import PalworldFeatures from './PalworldFeatures'
import ArkFeatures from './ark'

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (slug === 'minecraft') {
    return (
      <main>
        <MinecraftFeatures />
      </main>
    )
  }

  if (slug === 'palworld') {
    return (
      <main>
        <PalworldFeatures />
      </main>
    )
  }

  if (slug === 'ark') {
    return (
      <main>
        <ArkFeatures />
      </main>
    )
  }

  return (
    <main>
      <h1>Jogo não encontrado</h1>
      <p>Conteúdo para o jogo "{slug}" não disponível.</p>
    </main>
  )
}
