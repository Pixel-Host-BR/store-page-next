

import React from 'react';
import { notFound } from 'next/navigation';
import { PlanButton } from './ClientComponents';
import { Metadata } from 'next';
import { generateMetadata as generateGameMetadata, seoConfig } from '../../seo-config';

// Imports dos componentes de cada jogo
import MinecraftFeatures from './MinecraftFeatures'
import PalworldFeatures  from './PalworldFeatures'
import ArkFeatures       from './ark'
import DayzFeatures      from './DayzFeatures'
import MtaFeatures       from './MtaFeatures'
import ZomboidFeatures   from './ZomboidFeatures'
import HytaleFeatures    from './HytaleFeatures'

// Interface para tipagem das props da página
interface GamePageProps {
  params: Promise<{ slug: string }>;
}

// Configuração completa dos jogos
const gameConfig = {
  'minecraft': {
    title: 'Minecraft',
    component: MinecraftFeatures,
    slug: 'minecraft' as const,
  },
  'ark': {
    title: 'ARK: Survival Evolved',
    component: ArkFeatures,
    slug: 'ark' as const,
  },
  'palworld': {
    title: 'Palworld',
    component: PalworldFeatures,
    slug: 'palworld' as const,
  },
  'dayz': {
    title: 'DayZ',
    component: DayzFeatures,
    slug: 'dayz' as const,
  },
  'mta': {
    title: 'MTA: San Andreas',
    component: MtaFeatures,
    slug: 'mta' as const,
  },
  'project-zomboid': {
    title: 'Project Zomboid',
    component: ZomboidFeatures,
    slug: 'project-zomboid' as const,
  },
  'hytale': {
    title: 'Hytale',
    component: HytaleFeatures,
    slug: 'hytale' as const,
  },
} as const;

// Função para gerar metadados dinâmicos
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  const game = gameConfig[slug as keyof typeof gameConfig];
  
  if (!game) {
    return generateGameMetadata('notFound');
  }
  
  return generateGameMetadata('home', game.slug as keyof typeof seoConfig.games);
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;
  
  // Verifica se o slug é válido
  if (!(slug in gameConfig)) {
    notFound();
  }

  const game = gameConfig[slug as keyof typeof gameConfig];
  const GameComponent = game.component;

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

// Gerar parâmetros estáticos
export async function generateStaticParams() {
  return Object.keys(gameConfig).map((slug) => ({
    slug,
  }));
}
