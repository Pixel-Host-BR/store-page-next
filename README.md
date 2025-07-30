# PixelHost - Site de Hospedagem de Servidores de Jogos

Site moderno e responsivo para hospedagem de servidores de jogos, construído com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Características

- **SEO Otimizado**: Metadados dinâmicos, Open Graph, Twitter Cards
- **Performance**: Otimizado para Core Web Vitals
- **Responsivo**: Design mobile-first
- **Acessibilidade**: WCAG 2.1 compliant
- **TypeScript**: Tipagem completa
- **Organização**: Código bem estruturado e modular

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── BenefitsSection.jsx
│   │   ├── BackToTopButton.tsx
│   │   ├── navbar.tsx
│   │   └── Footer.jsx
│   ├── config/             # Configurações centralizadas
│   │   ├── constants.ts    # Constantes do site
│   │   ├── games.ts        # Configuração dos jogos
│   │   ├── testimonials.ts # Depoimentos
│   │   └── faqs.ts         # Perguntas frequentes
│   ├── games/              # Páginas de jogos
│   │   └── [slug]/
│   │       ├── page.tsx    # Página dinâmica
│   │       ├── ClientComponents.tsx
│   │       └── [Game]Features.tsx
│   ├── contato/            # Página de contato
│   │   ├── page.tsx
│   │   └── ContactForm.tsx
│   ├── types/              # Tipos TypeScript
│   │   └── index.ts
│   ├── seo-config.ts       # Configuração de SEO
│   ├── globals.css         # Estilos globais
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   ├── error.tsx           # Página de erro
│   ├── not-found.tsx       # Página 404
│   └── loading.tsx         # Componente de loading
```

## 🛠️ Tecnologias

- **Next.js 14**: Framework React com App Router
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Framework CSS utilitário
- **Lucide React**: Ícones
- **Framer Motion**: Animações (opcional)

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/pixelhost-site.git

# Entre no diretório
cd pixelhost-site

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev

# Build para produção
npm run build

# Execute em produção
npm start
```

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://pixelhostbr.com
NEXT_PUBLIC_ANALYTICS_ID=G-XXXXXXXXXX
NEXT_PUBLIC_TAWK_TO_ID=68221a806e1d72190c2992dd
```

### SEO

O SEO está configurado no arquivo `src/app/seo-config.ts`:

```typescript
export const seoConfig = {
  site: {
    name: 'PixelHost',
    url: 'https://pixelhostbr.com',
    // ... outras configurações
  },
  pages: {
    // Configurações por página
  },
  games: {
    // Configurações por jogo
  }
};
```

## 📝 Uso

### Adicionando um Novo Jogo

1. Adicione a configuração em `src/app/config/games.ts`:

```typescript
export const gamesConfig = {
  'novo-jogo': {
    title: 'Novo Jogo',
    slug: 'novo-jogo',
    description: 'Descrição do jogo...',
    // ... outras configurações
  }
};
```

2. Crie o componente em `src/app/games/[slug]/NovoJogoFeatures.tsx`

3. Atualize o mapeamento em `src/app/games/[slug]/page.tsx`

### Adicionando um Novo Depoimento

```typescript
// Em src/app/config/testimonials.ts
export const testimonials: Testimonial[] = [
  {
    id: 'novo-id',
    name: 'Nome do Cliente',
    country: 'BR',
    avatar: 'url-da-imagem',
    text: 'Depoimento...',
    rating: 5,
    game: 'Minecraft',
    date: '2024-01-20'
  }
];
```

### Adicionando uma Nova FAQ

```typescript
// Em src/app/config/faqs.ts
export const faqs: FAQ[] = [
  {
    id: 'nova-faq',
    question: 'Nova pergunta?',
    answer: 'Nova resposta...',
    category: 'geral',
    tags: ['tag1', 'tag2']
  }
];
```

## 🎨 Personalização

### Cores e Tema

As cores estão definidas no arquivo `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          // ... outras variações
        }
      }
    }
  }
}
```

### Componentes

Os componentes estão organizados em `src/app/components/` e podem ser facilmente customizados.

## 📊 Performance

O site está otimizado para:

- **Core Web Vitals**: LCP, FID, CLS
- **SEO**: Metadados dinâmicos, sitemap, robots.txt
- **Acessibilidade**: ARIA labels, navegação por teclado
- **Mobile**: Design responsivo, touch gestures

## 🔍 SEO

### Metadados Dinâmicos

Cada página tem seus próprios metadados:

```typescript
export const metadata = generateMetadata('home'); // Página inicial
export const metadata = generateMetadata('contact'); // Contato
export const metadata = generateMetadata('home', 'minecraft'); // Jogo específico
```

### Open Graph

Configurado automaticamente para todas as páginas com:
- Título dinâmico
- Descrição otimizada
- Imagem personalizada
- URL canônica

### Twitter Cards

Suporte completo para Twitter Cards com:
- Card type: `summary_large_image`
- Título e descrição dinâmicos
- Imagem otimizada

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outros Provedores

O site pode ser deployado em qualquer provedor que suporte Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📈 Analytics

### Google Analytics

Configure o ID do Google Analytics em `src/app/config/constants.ts`:

```typescript
ANALYTICS: {
  googleAnalytics: 'G-XXXXXXXXXX', // Seu ID real
}
```

### Tawk.to

Chat de suporte configurado em `src/app/layout.tsx`.

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

- **Email**: suporte@pixelhostbr.com
- **Discord**: [Link do Discord]
- **Documentação**: [Link da documentação]

## 🎯 Roadmap

- [ ] Sistema de blog
- [ ] Área do cliente
- [ ] Painel administrativo
- [ ] Sistema de notificações
- [ ] Integração com APIs de pagamento
- [ ] Sistema de backup automático
- [ ] Monitoramento em tempo real
- [ ] App mobile

---

Desenvolvido com ❤️ pela equipe PixelHost
