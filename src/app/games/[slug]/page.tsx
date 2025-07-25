

import React from 'react';
import { notFound } from 'next/navigation';
import { PlanButton } from './ClientComponents';

// Imports dos componentes de cada jogo
import MinecraftFeatures from './MinecraftFeatures'
import PalworldFeatures  from './PalworldFeatures'
import ArkFeatures       from './ark'
import DayzFeatures      from './DayzFeatures'
import MtaFeatures       from './MtaFeatures'
import ZomboidFeatures   from './ZomboidFeatures'

// Interface para tipagem das props da página
interface GamePageProps {
  params: Promise<{ slug: string }>;
}

// Mapeamento de slugs para componentes
const gameComponents = {
  'minecraft': MinecraftFeatures,
  'ark': ArkFeatures,
  'palworld': PalworldFeatures,
  'dayz': DayzFeatures,
  'mta': MtaFeatures,
  'project-zomboid': ZomboidFeatures,
} as const;

// Títulos para cada jogo
const gameTitles = {
  'minecraft': 'Minecraft',
  'ark': 'ARK: Survival Evolved',
  'palworld': 'Palworld',
} as const;

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;
  
  // Verifica se o slug é válido
  if (!(slug in gameComponents)) {
    notFound();
  }

  const GameComponent = gameComponents[slug as keyof typeof gameComponents];
  const gameTitle = gameTitles[slug as keyof typeof gameTitles];

  return (
    <main >
      {/* Header da página */}
      
      

      {/* Componente específico do jogo */}
      <div className="py-16">
        <GameComponent />
      </div>
    </main>
  );
}

// Gerar metadados dinâmicos - AGORA FUNCIONA!


// Gerar parâmetros estáticos - AGORA FUNCIONA!
export async function generateStaticParams() {
  return [
    { slug: 'minecraft', title: 'Minecraft' },
    { slug: 'ark', title: 'ARK: Survival Evolved' },
    { slug: 'palworld', title: 'Palworld' },
    { slug: 'dayz', title: 'DayZ' },
    { slug: 'mta', title: 'MTA: San Andreas' },
    { slug: 'zomboid', title: 'Project Zomboid' },
  ];
}
