// Configuração dos depoimentos de clientes
export interface Testimonial {
  id: string;
  name: string;
  country: string;
  avatar: string;
  text: string;
  rating: number;
  game?: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'JVS Neto',
    country: 'BR',
    avatar: 'https://user-images.trustpilot.com/6884f6849600693717e681aa/73x73.png',
    text: 'Em mais de 5 anos eu não encontrei um host tão bom e barato ao mesmo tempo, com um suporte excelente!!',
    rating: 5,
    game: 'Minecraft',
    date: '2024-01-15'
  },
  {
    id: '2',
    name: 'Pedro Neto',
    country: 'BR',
    avatar: 'https://user-images.trustpilot.com/68868dec04313e75da39c164/73x73.png',
    text: 'Atendimento prestativo, resolveram todos os meus problemas e ainda me auxiliaram com meu servidor. Inegavelmente a melhor host que eu já contratei.',
    rating: 5,
    game: 'ARK',
    date: '2024-01-10'
  },
  {
    id: '3',
    name: 'Literally',
    country: 'BR',
    avatar: 'https://i.imgur.com/yAouMLZ.jpeg',
    text: 'Se eu pudesse avaliar com mais estrelas, eu avaliaria! Os meninos são super pontuais, pacientes, uns amores de pessoa! Eu como uma mera jovem com QI de idosa fui muito bem atendida, vcs são incríveis. Simplesmente apaixonada!',
    rating: 5,
    game: 'Palworld',
    date: '2024-01-08'
  },
  {
    id: '4',
    name: 'Carlos Silva',
    country: 'BR',
    avatar: 'https://i.imgur.com/QTwy0mf.jpeg',
    text: 'O melhor atendimento que já tive em hospedagem de jogos. Recomendo demais!',
    rating: 5,
    game: 'DayZ',
    date: '2024-01-05'
  },
  {
    id: '5',
    name: 'Ana Clara',
    country: 'BR',
    avatar: 'https://i.imgur.com/cdgoIwS.jpeg',
    text: 'Painel intuitivo, servidores estáveis e suporte sempre disponível.',
    rating: 5,
    game: 'Minecraft',
    date: '2024-01-03'
  },
  {
    id: '6',
    name: 'Pedro Henrique',
    country: 'BR',
    avatar: 'https://i.imgur.com/W8lt9rq.jpeg',
    text: 'Nunca fiquei na mão, uptime real e proteção DDoS eficiente.',
    rating: 5,
    game: 'ARK',
    date: '2024-01-01'
  },
  {
    id: '7',
    name: 'Lucas Gamer',
    country: 'BR',
    avatar: 'https://i.imgur.com/BdCpxOU.jpeg',
    text: 'Hospedei meu servidor de Minecraft e ficou perfeito, sem lag!',
    rating: 5,
    game: 'Minecraft',
    date: '2023-12-28'
  },
  {
    id: '8',
    name: 'Marina Souza',
    country: 'BR',
    avatar: 'https://i.imgur.com/jm7sPRH.jpeg',
    text: 'Equipe muito atenciosa, tiraram todas as minhas dúvidas rapidamente.',
    rating: 5,
    game: 'Palworld',
    date: '2023-12-25'
  },
  {
    id: '9',
    name: 'Felipe Ramos',
    country: 'BR',
    avatar: 'https://i.imgur.com/9phFl1q.jpeg',
    text: 'A performance dos servidores é excelente, recomendo para todos.',
    rating: 5,
    game: 'DayZ',
    date: '2023-12-22'
  },
  {
    id: '10',
    name: 'Gabriel Lima',
    country: 'BR',
    avatar: 'https://i.imgur.com/nuhFy0n.jpeg',
    text: 'Fácil de configurar, preço justo e qualidade top.',
    rating: 5,
    game: 'MTA',
    date: '2023-12-20'
  },
  {
    id: '11',
    name: 'Juliana Alves',
    country: 'BR',
    avatar: 'https://i.imgur.com/IBIXilH.jpeg',
    text: 'O melhor custo-benefício do mercado de games.',
    rating: 5,
    game: 'Project Zomboid',
    date: '2023-12-18'
  },
  {
    id: '12',
    name: 'Rafael Torres',
    country: 'BR',
    avatar: 'https://i.imgur.com/sCL5tRI.jpeg',
    text: 'Migrei de outro host e não me arrependo, só elogios!',
    rating: 5,
    game: 'Minecraft',
    date: '2023-12-15'
  },
  {
    id: '13',
    name: 'Beatriz Costa',
    country: 'BR',
    avatar: 'https://i.imgur.com/HyWgipM.jpeg',
    text: 'A estabilidade e o suporte são diferenciais reais.',
    rating: 5,
    game: 'ARK',
    date: '2023-12-12'
  },
  {
    id: '14',
    name: 'Vinícius Rocha',
    country: 'BR',
    avatar: 'https://i.imgur.com/jx4qGRf.jpeg',
    text: 'Recomendo para quem quer jogar sem dor de cabeça.',
    rating: 5,
    game: 'Palworld',
    date: '2023-12-10'
  },
  {
    id: '15',
    name: 'Larissa Melo',
    country: 'BR',
    avatar: 'https://i.imgur.com/vILSinR.jpeg',
    text: 'Atendimento rápido, servidores potentes e muita transparência.',
    rating: 5,
    game: 'DayZ',
    date: '2023-12-08'
  }
];

// Função helper para obter depoimentos por jogo
export function getTestimonialsByGame(game: string): Testimonial[] {
  return testimonials.filter(t => t.game === game);
}

// Função helper para obter depoimentos recentes
export function getRecentTestimonials(limit: number = 6): Testimonial[] {
  return testimonials
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

// Função helper para obter depoimentos com melhor avaliação
export function getTopRatedTestimonials(limit: number = 6): Testimonial[] {
  return testimonials
    .filter(t => t.rating === 5)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
} 