// Configuração centralizada dos jogos suportados
export interface GameConfig {
  title: string;
  slug: string;
  description: string;
  features: string[];
  specs: {
    ram: string;
    storage: string;
    cpu: string;
    network: string;
  };
  pricing: {
    basic: number;
    premium: number;
    enterprise: number;
  };
  image: string;
  icon: string;
}

export const gamesConfig: Record<string, GameConfig> = {
  minecraft: {
    title: 'Minecraft',
    slug: 'minecraft',
    description: 'Hospedagem de servidor Minecraft com alta performance, mods, plugins e suporte especializado.',
    features: [
      'Mods e Plugins',
      'Backup Automático',
      'Painel Web',
      'DDoS Protection',
      'Suporte 24/7',
      'Deploy Instantâneo'
    ],
    specs: {
      ram: '4GB - 32GB',
      storage: 'SSD NVMe',
      cpu: 'AMD EPYC / Intel Xeon',
      network: '10Gbps'
    },
    pricing: {
      basic: 15.90,
      premium: 29.90,
      enterprise: 59.90
    },
    image: 'https://i.imgur.com/minecraft-banner.jpg',
    icon: '🎮'
  },
  ark: {
    title: 'ARK: Survival Evolved',
    slug: 'ark',
    description: 'Servidor ARK com mods, DLCs e configuração otimizada para sobrevivência.',
    features: [
      'Mods Suportados',
      'DLCs Inclusos',
      'Configuração Avançada',
      'Monitoramento',
      'Backup Diário',
      'Suporte Especializado'
    ],
    specs: {
      ram: '8GB - 64GB',
      storage: 'SSD NVMe',
      cpu: 'AMD EPYC / Intel Xeon',
      network: '10Gbps'
    },
    pricing: {
      basic: 25.90,
      premium: 45.90,
      enterprise: 89.90
    },
    image: 'https://i.imgur.com/ark-banner.jpg',
    icon: '🦖'
  },
  palworld: {
    title: 'Palworld',
    slug: 'palworld',
    description: 'Hospedagem Palworld com Pals, automação e mundo aberto.',
    features: [
      'Pals Otimizados',
      'Automação',
      'Mundo Aberto',
      'Performance Garantida',
      'Backup Automático',
      'Suporte Técnico'
    ],
    specs: {
      ram: '6GB - 48GB',
      storage: 'SSD NVMe',
      cpu: 'AMD EPYC / Intel Xeon',
      network: '10Gbps'
    },
    pricing: {
      basic: 20.90,
      premium: 35.90,
      enterprise: 69.90
    },
    image: 'https://i.imgur.com/palworld-banner.jpg',
    icon: '🐾'
  },
  dayz: {
    title: 'DayZ',
    slug: 'dayz',
    description: 'Servidor DayZ com sobrevivência intensa e mundo pós-apocalíptico.',
    features: [
      'Sobrevivência Intensa',
      'Mundo Pós-Apocalíptico',
      'Configuração Avançada',
      'Monitoramento 24/7',
      'Backup Seguro',
      'Suporte Especializado'
    ],
    specs: {
      ram: '6GB - 48GB',
      storage: 'SSD NVMe',
      cpu: 'AMD EPYC / Intel Xeon',
      network: '10Gbps'
    },
    pricing: {
      basic: 18.90,
      premium: 32.90,
      enterprise: 64.90
    },
    image: 'https://i.imgur.com/dayz-banner.jpg',
    icon: '🧟'
  },
  mta: {
    title: 'MTA: San Andreas',
    slug: 'mta',
    description: 'Hospedagem MTA com modos personalizados e scripts avançados.',
    features: [
      'Modos Personalizados',
      'Scripts Avançados',
      'Recursos Customizados',
      'Performance Otimizada',
      'Backup Automático',
      'Suporte Técnico'
    ],
    specs: {
      ram: '4GB - 32GB',
      storage: 'SSD NVMe',
      cpu: 'AMD EPYC / Intel Xeon',
      network: '10Gbps'
    },
    pricing: {
      basic: 12.90,
      premium: 22.90,
      enterprise: 44.90
    },
    image: 'https://i.imgur.com/mta-banner.jpg',
    icon: '🚗'
  },
  'project-zomboid': {
    title: 'Project Zomboid',
    slug: 'project-zomboid',
    description: 'Servidor Project Zomboid com sobrevivência realista e zumbis.',
    features: [
      'Sobrevivência Realista',
      'Zumbis Otimizados',
      'Configuração Avançada',
      'Monitoramento',
      'Backup Diário',
      'Suporte Especializado'
    ],
    specs: {
      ram: '4GB - 32GB',
      storage: 'SSD NVMe',
      cpu: 'AMD EPYC / Intel Xeon',
      network: '10Gbps'
    },
    pricing: {
      basic: 14.90,
      premium: 25.90,
      enterprise: 49.90
    },
    image: 'https://i.imgur.com/zomboid-banner.jpg',
    icon: '🧟‍♂️'
  }
};

// Função helper para obter configuração de um jogo
export function getGameConfig(slug: string): GameConfig | null {
  return gamesConfig[slug] || null;
}

// Função helper para listar todos os jogos
export function getAllGames(): GameConfig[] {
  return Object.values(gamesConfig);
}

// Função helper para obter slugs válidos
export function getValidSlugs(): string[] {
  return Object.keys(gamesConfig);
} 