// Configuração das Perguntas Frequentes (FAQ)
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'geral' | 'tecnico' | 'pagamento' | 'suporte';
  tags: string[];
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Por que escolher a PixelHost como minha hospedagem de jogos?',
    answer: 'A PixelHost oferece servidores de alta performance, suporte 24/7, painel de controle moderno e proteção DDoS avançada. Nossa infraestrutura é otimizada para jogos como Minecraft, ARK, DayZ e Palworld, garantindo estabilidade e baixa latência.',
    category: 'geral',
    tags: ['hospedagem', 'performance', 'suporte']
  },
  {
    id: '2',
    question: 'Posso alterar meu plano ou atualizar meu servidor depois?',
    answer: 'Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento pelo painel de controle, pagando apenas a diferença proporcional.',
    category: 'geral',
    tags: ['planos', 'upgrade', 'downgrade']
  },
  {
    id: '3',
    question: 'Recebo meu dinheiro de volta se não gostar do serviço?',
    answer: 'Oferecemos garantia de reembolso de 3 dias. Se não ficar satisfeito, basta solicitar o estorno pelo painel ou suporte.',
    category: 'pagamento',
    tags: ['reembolso', 'garantia', 'satisfação']
  },
  {
    id: '4',
    question: 'Vocês oferecem suporte a mods e plugins?',
    answer: 'Sim! Nossa equipe auxilia na instalação e configuração de mods e plugins para os principais jogos suportados.',
    category: 'tecnico',
    tags: ['mods', 'plugins', 'configuração']
  },
  {
    id: '5',
    question: 'Como funciona o suporte técnico?',
    answer: 'Nosso suporte é 24/7 via chat, ticket e Discord. Temos uma base de conhecimento completa e equipe especializada para resolver qualquer dúvida.',
    category: 'suporte',
    tags: ['suporte', '24/7', 'chat', 'discord']
  },
  {
    id: '6',
    question: 'Meu servidor fica online o tempo todo?',
    answer: 'Garantimos 99.9% de uptime com monitoramento constante e infraestrutura redundante.',
    category: 'tecnico',
    tags: ['uptime', 'monitoramento', 'estabilidade']
  },
  {
    id: '7',
    question: 'Posso personalizar o endereço do meu servidor?',
    answer: 'Sim! Oferecemos criador de subdomínio gratuito para personalizar o acesso ao seu servidor.',
    category: 'tecnico',
    tags: ['subdomínio', 'personalização', 'endereço']
  },
  {
    id: '8',
    question: 'Quais métodos de pagamento são aceitos?',
    answer: 'Aceitamos Pix, cartão de crédito, boleto e PayPal.',
    category: 'pagamento',
    tags: ['pagamento', 'pix', 'cartão', 'boleto', 'paypal']
  },
  {
    id: '9',
    question: 'Como funciona a proteção DDoS?',
    answer: 'Todos os nossos servidores possuem proteção DDoS avançada incluída, garantindo que seu servidor permaneça online mesmo sob ataques.',
    category: 'tecnico',
    tags: ['ddos', 'proteção', 'segurança']
  },
  {
    id: '10',
    question: 'Posso fazer backup do meu servidor?',
    answer: 'Sim! Oferecemos backup automático diário e você também pode fazer backups manuais a qualquer momento pelo painel.',
    category: 'tecnico',
    tags: ['backup', 'segurança', 'dados']
  },
  {
    id: '11',
    question: 'Qual a latência dos servidores?',
    answer: 'Nossos servidores estão localizados no Brasil, garantindo latência baixa (menos de 50ms) para jogadores brasileiros.',
    category: 'tecnico',
    tags: ['latência', 'performance', 'brasil']
  },
  {
    id: '12',
    question: 'Posso transferir meu servidor de outro host?',
    answer: 'Sim! Nossa equipe auxilia na migração do seu servidor de outros provedores sem custo adicional.',
    category: 'suporte',
    tags: ['migração', 'transferência', 'suporte']
  }
];

// Função helper para obter FAQs por categoria
export function getFaqsByCategory(category: FAQ['category']): FAQ[] {
  return faqs.filter(faq => faq.category === category);
}

// Função helper para obter FAQs por tag
export function getFaqsByTag(tag: string): FAQ[] {
  return faqs.filter(faq => faq.tags.includes(tag));
}

// Função helper para buscar FAQs por texto
export function searchFaqs(query: string): FAQ[] {
  const lowerQuery = query.toLowerCase();
  return faqs.filter(faq => 
    faq.question.toLowerCase().includes(lowerQuery) ||
    faq.answer.toLowerCase().includes(lowerQuery) ||
    faq.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

// Função helper para obter todas as categorias
export function getFaqCategories(): FAQ['category'][] {
  return [...new Set(faqs.map(faq => faq.category))];
}

// Função helper para obter todas as tags
export function getFaqTags(): string[] {
  return [...new Set(faqs.flatMap(faq => faq.tags))];
} 