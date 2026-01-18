// Configuração centralizada de SEO para o site PixelHost
export const seoConfig = {
  // Configurações globais
  site: {
    name: 'PixelHost',
    url: 'https://pixelhostbr.com',
    description: 'Hospedagem de servidores de jogos com alta performance, suporte 24/7 e preços acessíveis.',
    keywords: [
      'hospedagem de servidores',
      'servidor de jogos',
      'minecraft server',
      'ark server',
      'palworld server',
      'dayz server',
      'mta server',
      'project zomboid server',
      'hospedagem gamer',
      'servidor brasileiro',
      'ddos protection',
      'suporte 24/7'
    ],
    author: 'PixelHost',
    language: 'pt-BR',
    themeColor: '#5e34e0',
    viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
  },

  // Configurações por página
  pages: {
    home: {
      title: 'Início - PixelHost',
      description: 'Bem-vindo à PixelHost - Hospedagem de servidores de jogos de elite com alta performance, DDoS protection e suporte 24/7.',
      keywords: 'hospedagem de servidores, servidor de jogos, minecraft, ark, palworld, dayz, mta, project zomboid',
      ogImage: 'https://i.imgur.com/8u6NO4D.jpeg',
      ogType: 'website'
    },
    contact: {
      title: 'Contato - PixelHost',
      description: 'Entre em contato com a PixelHost. Suporte técnico especializado para hospedagem de servidores de jogos.',
      keywords: 'contato pixelhost, suporte técnico, atendimento, ajuda',
      ogImage: 'https://i.imgur.com/8u6NO4D.jpeg',
      ogType: 'website'
    },
    help: {
      title: 'Base de Conhecimento - PixelHost',
      description: 'Encontre respostas rápidas para suas dúvidas. Guias completos, tutoriais e suporte técnico para hospedagem de servidores de jogos.',
      keywords: 'ajuda pixelhost, base de conhecimento, tutoriais servidores, suporte técnico, guias servidores de jogos',
      ogImage: 'https://i.imgur.com/8u6NO4D.jpeg',
      ogType: 'website'
    },
    notFound: {
      title: 'Página não encontrada - PixelHost',
      description: 'A página que você está procurando não foi encontrada.',
      keywords: '404, página não encontrada, erro',
      ogImage: 'https://i.imgur.com/8u6NO4D.jpeg',
      ogType: 'website'
    },
    error: {
      title: 'Erro - PixelHost',
      description: 'Ocorreu um erro interno. Nossa equipe foi notificada.',
      keywords: 'erro, problema técnico, erro interno',
      ogImage: 'https://i.imgur.com/8u6NO4D.jpeg',
      ogType: 'website'
    }
  },

  // Configurações por jogo
  games: {
    minecraft: {
      title: 'Minecraft - PixelHost',
      description: 'Hospedagem de servidor Minecraft com alta performance, mods, plugins e suporte especializado. Deploy instantâneo e DDoS protection.',
      keywords: 'servidor minecraft, hospedagem minecraft, minecraft server, mods minecraft, plugins minecraft',
      ogImage: 'https://i.imgur.com/8u6NO4D.jpeg',
      ogType: 'website'
    },
    ark: {
      title: 'ARK: Survival Evolved - PixelHost',
      description: 'Servidor ARK com mods, DLCs e configuração otimizada para sobrevivência. Alta performance e suporte técnico.',
      keywords: 'servidor ark, hospedagem ark, ark survival evolved, mods ark, dlc ark',
      ogImage: 'https://i.imgur.com/8u6NO4D.jpeg',
      ogType: 'website'
    },
    palworld: {
      title: 'Palworld - PixelHost',
      description: 'Hospedagem Palworld com Pals, automação e mundo aberto. Servidor otimizado para a nova sensação dos jogos.',
      keywords: 'servidor palworld, hospedagem palworld, pals, automação palworld',
      ogImage: 'https://i.imgur.com/8u6NO4D.jpeg',
      ogType: 'website'
    },
    dayz: {
      title: 'DayZ - PixelHost',
      description: 'Servidor DayZ com sobrevivência intensa e mundo pós-apocalíptico. Alta performance para jogos de sobrevivência.',
      keywords: 'servidor dayz, hospedagem dayz, sobrevivência, pós-apocalíptico',
      ogImage: 'https://i.imgur.com/8u6NO4D.jpeg',
      ogType: 'website'
    },
    mta: {
      title: 'MTA: San Andreas - PixelHost',
      description: 'Hospedagem MTA com modos personalizados e scripts avançados. Servidor otimizado para GTA San Andreas multiplayer.',
      keywords: 'servidor mta, hospedagem mta, gta san andreas, multiplayer mta',
      ogImage: 'https://i.imgur.com/8u6NO4D.jpeg',
      ogType: 'website'
    },
    'project-zomboid': {
      title: 'Project Zomboid - PixelHost',
      description: 'Servidor Project Zomboid com sobrevivência realista e zumbis. Configuração otimizada para jogos de sobrevivência.',
      keywords: 'servidor project zomboid, hospedagem project zomboid, zumbis, sobrevivência',
      ogImage: 'https://i.imgur.com/8u6NO4D.jpeg',
      ogType: 'website'
    },
    hytale: {
      title: 'Hytale - PixelHost',
      description: 'Hospedagem Hytale com aventura épica, construção criativa e multiplayer imersivo. Servidor otimizado para a nova experiência de jogo.',
      keywords: 'servidor hytale, hospedagem hytale, aventura épica, construção criativa, multiplayer hytale',
      ogImage: 'https://i.imgur.com/8u6NO4D.jpeg',
      ogType: 'website'
    }
  },

  // Configurações de redes sociais
  social: {
    twitter: {
      handle: '@thepixelhost',
      site: '@thepixelhost',
      cardType: 'summary_large_image'
    },
    facebook: {
      appId: '61574219692149',
      type: 'website'
    },
    instagram: {
      username: 'thepixelhost'
    }
  },

  // Configurações de analytics e tracking
  analytics: {
    googleAnalytics: {
      measurementId: 'G-XXXXXXXXXX' // Substituir pelo ID real
    },
    tawkTo: {
      widgetId: '68221a806e1d72190c2992dd',
      propertyId: '1ir2jf20l'
    }
  }
};

// Função helper para gerar metadados
export function generateMetadata(page: keyof typeof seoConfig.pages, game?: keyof typeof seoConfig.games) {
  const config = game ? seoConfig.games[game] : seoConfig.pages[page];
  
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: seoConfig.site.author }],
    creator: seoConfig.site.author,
    publisher: seoConfig.site.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(seoConfig.site.url),
    alternates: {
      canonical: seoConfig.site.url,
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: seoConfig.site.url,
      siteName: seoConfig.site.name,
      images: [
        {
          url: config.ogImage,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
      locale: seoConfig.site.language,
      type: config.ogType,
    },
    twitter: {
      card: seoConfig.social.twitter.cardType,
      title: config.title,
      description: config.description,
      images: [config.ogImage],
      creator: seoConfig.social.twitter.handle,
      site: seoConfig.social.twitter.site,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'google-site-verification-code', // Substituir pelo código real
    },
  };
} 