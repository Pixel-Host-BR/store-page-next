// Constantes do site PixelHost
export const SITE_CONSTANTS = {
  // Informações da empresa
  COMPANY: {
    name: 'PixelHost',
    fullName: 'PixelHost - Hospedagem de Servidores de Jogos',
    description: 'Hospedagem de servidores de jogos com alta performance, suporte 24/7 e preços acessíveis.',
    founded: '2020',
    country: 'Brasil',
    website: 'https://pixelhostbr.com',
    email: {
      support: 'suporte@pixelhostbr.com',
      contact: 'atendimento@pixelhostbr.com',
      billing: 'financeiro@pixelhostbr.com'
    },
    phone: {
      primary: '+55 79 99934-7948',
      secondary: '+55 79 99934-7948'
    }
  },

  // URLs importantes
  URLS: {
    website: 'https://pixelhostbr.com',
    panel: 'https://painel.pixelhostbr.com',
    billing: 'https://pixelhostbr.com/financeiro/',
    knowledgeBase: 'https://pixelohost.tawk.help/',
    trustpilot: 'https://pt.trustpilot.com/evaluate/pixelhostbr.com',
    status: 'https://status.pixelhostbr.com'
  },

  // Redes sociais
  SOCIAL: {
    instagram: 'https://www.instagram.com/thepixelhost/',
    facebook: 'https://www.facebook.com/profile.php?id=61574219692149',
    linkedin: 'https://www.linkedin.com/company/thepixelhost/',
    twitter: 'https://twitter.com/thepixelhost',
    discord: 'https://discord.gg/pixelhost',
    youtube: 'https://www.youtube.com/@pixelhost'
  },

  // Configurações técnicas
  TECHNICAL: {
    uptime: '99.9%',
    latency: '< 50ms',
    network: '10Gbps',
    storage: 'SSD NVMe',
    cpu: 'AMD EPYC / Intel Xeon',
    ddosProtection: true,
    backupFrequency: 'daily',
    supportResponse: '< 5 minutes'
  },

  // Planos e preços
  PLANS: {
    basic: {
      name: 'Básico',
      price: 15.90,
      features: ['4GB RAM', 'SSD NVMe', 'DDoS Protection', 'Painel Web']
    },
    premium: {
      name: 'Premium',
      price: 29.90,
      features: ['8GB RAM', 'SSD NVMe', 'DDoS Protection', 'Painel Web', 'Backup Automático']
    },
    enterprise: {
      name: 'Enterprise',
      price: 59.90,
      features: ['16GB RAM', 'SSD NVMe', 'DDoS Protection', 'Painel Web', 'Backup Automático', 'Suporte Prioritário']
    }
  },

  // Métodos de pagamento
  PAYMENT_METHODS: {
    pix: 'PIX',
    creditCard: 'Cartão de Crédito',
    debitCard: 'Cartão de Débito',
    boleto: 'Boleto Bancário',
    paypal: 'PayPal'
  },

  // Configurações de SEO
  SEO: {
    defaultTitle: 'PixelHost - Hospedagem de Servidores de Jogos',
    defaultDescription: 'Hospedagem de servidores de jogos com alta performance, DDoS protection e suporte 24/7.',
    defaultKeywords: 'hospedagem de servidores, servidor de jogos, minecraft, ark, palworld, dayz, mta, project zomboid',
    defaultImage: 'https://i.imgur.com/8u6NO4D.jpeg',
    defaultUrl: 'https://pixelhostbr.com'
  },

  // Configurações de analytics
  ANALYTICS: {
    googleAnalytics: 'G-XXXXXXXXXX', // Substituir pelo ID real
    tawkTo: {
      widgetId: '68221a806e1d72190c2992dd',
      propertyId: '1ir2jf20l'
    }
  },

  // Configurações de contato
  CONTACT: {
    supportHours: '24/7',
    responseTime: '< 5 minutos',
    languages: ['Português', 'English'],
    timezone: 'America/Sao_Paulo'
  },

  // Configurações de segurança
  SECURITY: {
    ssl: true,
    ddosProtection: true,
    firewall: true,
    backup: true,
    monitoring: true
  },

  // Configurações de performance
  PERFORMANCE: {
    maxPlayers: '1000+',
    maxRam: '128GB',
    maxStorage: '2TB',
    maxBandwidth: 'Unlimited'
  }
};

// Função helper para obter URL completa
export function getFullUrl(path: string): string {
  return `${SITE_CONSTANTS.URLS.website}${path}`;
}

// Função helper para obter email de contato
export function getContactEmail(type: 'support' | 'contact' | 'billing'): string {
  return SITE_CONSTANTS.COMPANY.email[type];
}

// Função helper para obter telefone
export function getPhone(primary: boolean = true): string {
  return primary ? SITE_CONSTANTS.COMPANY.phone.primary : SITE_CONSTANTS.COMPANY.phone.secondary;
}

// Função helper para obter rede social
export function getSocialUrl(platform: keyof typeof SITE_CONSTANTS.SOCIAL): string {
  return SITE_CONSTANTS.SOCIAL[platform];
} 