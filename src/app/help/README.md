# Base de Conhecimento PixelHost

Esta é a nova base de conhecimento integrada ao site PixelHost, seguindo o mesmo estilo visual e oferecendo uma experiência moderna e intuitiva.

## Funcionalidades

### 🔍 Busca Inteligente
- Busca em tempo real por palavras-chave
- Filtragem por categorias
- Resultados instantâneos

### 📚 Categorias
- **Começando**: Guias básicos para iniciantes
- **Conta e Faturamento**: Informações sobre pagamento
- **Configuração do Servidor**: Como configurar seu servidor
- **Suporte Técnico**: Assistência técnica
- **Solução de Problemas**: Resolução de problemas comuns
- **Plugins e Mods**: Instalação e configuração
- **Segurança**: Proteção e backups
- **Migração**: Transferir seu servidor

### 🎯 Artigos Populares
- Artigos mais acessados destacados
- Fácil navegação
- Acesso rápido

### 📝 Conteúdo Completo
- Tutoriais passo a passo
- Guias ilustrados
- Exemplos práticos
- Links relacionados

## Como Adicionar Novos Artigos

Edite o arquivo `src/app/config/knowledge-base.ts`:

```typescript
{
  id: 'novo-artigo',
  title: 'Título do Artigo',
  description: 'Descrição curta',
  category: 'getting-started',
  tags: ['tag1', 'tag2'],
  popular: false,
  content: `
# Título

Conteúdo do artigo em markdown...
  `
}
```

## Categorias Disponíveis

- `getting-started`
- `account-billing`
- `server-setup`
- `technical-support`
- `troubleshooting`
- `plugins-mods`
- `security`
- `migration`

## Estrutura

```
src/app/help/
├── page.tsx           # Página principal
├── layout.tsx         # Layout com metadados
├── [id]/
│   ├── page.tsx       # Página do artigo
│   └── layout.tsx     # Layout do artigo
└── README.md          # Este arquivo
```

## Próximos Passos

Para adicionar mais conteúdo da base de conhecimento existente:

1. Acesse: https://pixelohost.tawk.help/
2. Copie o conteúdo dos artigos
3. Adicione ao arquivo `knowledge-base.ts`
4. Use markdown para formatação

## Estilo Visual

A base de conhecimento segue o mesmo tema visual do site:
- Fundo escuro (#181826)
- Gradientes azul/roxo
- Border com efeito glass
- Animações suaves
- Totalmente responsivo

## Acesso

- URL: `/help`
- Integrado no navbar
- SEO otimizado
- Busca funcional

## Suporte

Para dúvidas ou problemas:
- Chat 24/7
- Ticket no painel
- Discord: discord.gg/BBAPJyKUw7

