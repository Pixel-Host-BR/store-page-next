'use client'
import Link from 'next/link'
import React from 'react';
import MinecraftFeatures from './MinecraftFeatures';
import PalworldFetures from './PalworldFeatures';
import ArkFeatures from './ArkFeatures'



export default function GamePage({ params }: { params: { slug: string } }) {
  
  if (params.slug === 'minecraft') {
    return (
      <main>
        <MinecraftFeatures />
      </main>
    )
  }

  if (params.slug === 'palworld') {
    return (
      <main>
        <PalworldFetures />
      </main>
    )
  }
  if (params.slug === 'ArkFeatures') 
    return 
  <main>
    <ArkFeatures />
  </main>

  return (
    <main>
      <h1>Jogo não encontrado</h1>
      <p>Conteúdo para o jogo "{params.slug}" não disponível.</p>
    </main>
  )
}
