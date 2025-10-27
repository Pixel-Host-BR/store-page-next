// Configuração da Base de Conhecimento PixelHost

export interface KnowledgeArticle {
  id: string;
  title: string;
  description: string;
  content: string;
  category: KnowledgeCategory;
  tags: string[];
  popular?: boolean;
  related?: string[];
}

export type KnowledgeCategory = 
  | 'minecraft'
  | 'ark'
  | 'dayz'
  | 'palworld'
  | 'project-zomboid'
  | 'account-billing'
  | 'security'
  | 'migration';

export const knowledgeCategories: Record<KnowledgeCategory, { name: string; description: string; icon: string }> = {
  'minecraft': {
    name: 'Minecraft',
    description: 'Tutoriais e guias para servidores Minecraft',
    icon: '⛏️'
  },
  'ark': {
    name: 'ARK: Survival Evolved',
    description: 'Guias para servidores ARK',
    icon: '🦖'
  },
  'dayz': {
    name: 'DayZ',
    description: 'Tutoriais para servidores DayZ',
    icon: '🧟'
  },
  'palworld': {
    name: 'Palworld',
    description: 'Guias para servidores Palworld',
    icon: '🐾'
  },
  'project-zomboid': {
    name: 'Project Zomboid',
    description: 'Tutoriais para servidores Project Zomboid',
    icon: '🧟‍♂️'
  },
  'account-billing': {
    name: 'Conta e Faturamento',
    description: 'Informações sobre pagamento e conta',
    icon: '💳'
  },
  'security': {
    name: 'Segurança',
    description: 'Proteção e backups',
    icon: '🔒'
  },
  'migration': {
    name: 'Migração',
    description: 'Transferir seu servidor',
    icon: '📦'
  }
};

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    id: 'creating-an-account',
    title: 'Criando sua Conta na PixelHost',
    description: 'Aprenda a criar sua conta e acessar o painel de controle da PixelHost',
    category: 'account-billing',
    tags: ['conta', 'início', 'painel'],
    popular: true,
    content: `
# Criando sua Conta na PixelHost

## Passo a Passo

1. **Acesse nosso site**: Vá até [pixelhostbr.com/financeiro](https://pixelhostbr.com/financeiro/)

2. **Clique em Registrar**: Clique no botão "Registrar" ou "Criar Conta"

3. **Preencha seus dados**:
   - Email válido
   - Nome completo
   - Senha segura
   - Confirmação de senha

4. **Verifique seu email**: Você receberá um email de confirmação

5. **Login**: Faça login com suas credenciais

## Dicas Importantes

- Use um email válido e acessível
- Crie uma senha forte com pelo menos 8 caracteres
- Guarde suas credenciais em local seguro
- Verifique sua caixa de spam se não receber o email

## Acessar o Painel

Após criar sua conta, você pode acessar o painel em:
- URL: [painel.pixelhostbr.com](https://painel.pixelhostbr.com)
- Use as mesmas credenciais do site
    `
  },
  {
    id: 'payment-methods',
    title: 'Métodos de Pagamento Aceitos',
    description: 'Conheça todas as formas de pagamento disponíveis na PixelHost',
    category: 'account-billing',
    tags: ['pagamento', 'billing', 'pix', 'cartão'],
    popular: true,
    content: `
# Métodos de Pagamento Aceitos

## Formas de Pagamento Disponíveis

### 1. PIX (Recomendado)
- **Processamento**: Imediato
- **Aprovação**: Até 5 minutos
- **Desconto**: 5% em todos os produtos
- **Como pagar**: Escolha PIX no checkout e escaneie o QR Code

### 2. Cartão de Crédito
- **Bandeiras**: Visa, Mastercard, Elo, Amex
- **Processamento**: Imediato para bandeira internacional
- **Parcelamento**: Até 12x sem juros
- **Segurança**: Transações criptografadas

### 3. Cartão de Débito
- **Bandeiras**: Visa, Mastercard
- **Processamento**: Imediato
- **Verificação**: Segurança adicional via banco

### 4. Boleto Bancário
- **Vencimento**: 3 dias úteis
- **Aprovação**: 1 dia útil após pagamento
- **Desconto**: Até 10% em planos anuais

### 5. PayPal
- **Processamento**: Imediato
- **Disponível para**: Clientes internacionais
- **Segurança**: Proteção PayPal

## Garantia de Reembolso

Todos os planos incluem **garantia de 3 dias**. Se não ficar satisfeito, basta solicitar o reembolso.

## Como Pagar

1. Acesse o painel
2. Vá em "Serviços" → "Pedidos"
3. Clique em "Pagar"
4. Escolha o método de pagamento
5. Complete a transação
    `
  },
  {
    id: 'installing-plugins-minecraft',
    title: 'Instalando Plugins no Minecraft',
    description: 'Guia completo para instalar plugins no seu servidor Minecraft',
    category: 'minecraft',
    tags: ['minecraft', 'plugins', 'instalação'],
    popular: true,
    content: `
# Instalando Plugins no Minecraft

## Pré-requisitos

- Servidor Minecraft Java Edition
- Versão Spigot/Paper/Bukkit
- Acesso FTP ou painel de controle

## Método 1: Via Painel (Recomendado)

1. **Acesse o Painel**
   - Login em painel.pixelhostbr.com
   - Selecione seu servidor

2. **Vá em Plugins**
   - Menu lateral: "Plugins"
   - Clique em "Adicionar Plugin"

3. **Instale o Plugin**
   - Busque pelo nome do plugin
   - Clique em "Instalar"
   - Aguarde a instalação

4. **Reinicie o Servidor**
   - Clique em "Reiniciar"
   - Aguarde o servidor voltar online

## Método 2: Upload Manual

1. **Download do Plugin**
   - Acesse SpigotMC ou Bukkit
   - Baixe o arquivo .jar do plugin

2. **Acesse o FTP**
   - Use as credenciais do FTP no painel
   - Conecte via FileZilla ou similar

3. **Upload**
   - Navegue até a pasta /plugins
   - Upload do arquivo .jar

4. **Reinicie o Servidor**

## Plugins Recomendados

### Essenciais
- **WorldEdit**: Edição de terreno
- **WorldGuard**: Proteção de áreas
- **EssentialsX**: Comandos básicos
- **LuckPerms**: Sistema de permissões

### Performance
- **ChunkMaster**: Otimização de chunks
- **ClearLag**: Limpeza de itens
- **FastAsyncWorldEdit**: WorldEdit otimizado

## Configurando Permissões

1. Instale LuckPerms
2. Acesse console ou in-game
3. Use comando:
\`\`\`
/lp editor
\`\`\`
4. Configure suas permissões

## Solução de Problemas

### Plugin não carrega
- Verifique a versão do servidor
- Confirme compatibilidade
- Veja os logs de erro

### Plugin dá erro
- Atualize o plugin
- Verifique dependências
- Contate o suporte

## Suporte

Precisa de ajuda? Nossa equipe está pronta para ajudar!
- Chat 24/7
- Ticket no painel
- Discord da comunidade
    `
  },
  {
    id: 'backup-restore',
    title: 'Backup e Restauração',
    description: 'Como fazer backup e restaurar seu servidor',
    category: 'security',
    tags: ['backup', 'segurança', 'restauração'],
    popular: true,
    content: `
# Backup e Restauração

## Backups Automáticos

### Configuração
- Backups diários automáticos
- Horário personalizável
- Retenção configurável

### Configurar
1. Acesse o painel
2. Vá em "Backups"
3. Configure horário e frequência
4. Salve as configurações

## Backup Manual

### Fazer Backup
1. No painel, vá em "Backups"
2. Clique em "Criar Backup"
3. Aguarde a conclusão
4. Backup salvo automaticamente

### Tipos de Backup
- **Backup Completo**: Tudo incluído
- **Backup Incremental**: Apenas mudanças
- **Backup de Mundo**: Apenas world

## Restaurar Backup

### Restaurar
1. Acesse "Backups"
2. Selecione o backup desejado
3. Clique em "Restaurar"
4. Confirme a restauração
5. Servidor será reiniciado

### Atenção
- Restaurar apaga dados atuais
- Fazer backup antes de restaurar
- Pode demorar alguns minutos

## Download de Backup

### Baixar
1. Vá em "Backups"
2. Clique no backup
3. "Download"
4. Faça download para seu PC

## Recomendações

### Frequência
- **Backup Diário**: Servidores ativos
- **Backup Semanal**: Servidores menores
- **Backup Manual**: Antes de grandes mudanças

### Boas Práticas
- Sempre teste restauração
- Mantenha múltiplos backups
- Faça backup antes de atualizações
- Guarde backups em local seguro

## Solução de Problemas

### Backup não completa
- Verifique espaço em disco
- Contate o suporte
- Tente backup manual

### Restauração falha
- Verifique integridade do backup
- Tente outro backup
- Contate o suporte

## Limites

- **Retenção**: 7 dias padrão
- **Tamanho**: Sem limite
- **Quantidade**: Até 30 backups

Para aumentar limites, contate o suporte.

## Suporte

Problemas com backups?
- Chat 24/7
- Ticket no painel
- Nossa equipe está sempre pronta!
    `
  },
  {
    id: 'ddos-protection',
    title: 'Proteção DDoS',
    description: 'Entenda como funciona nossa proteção contra ataques DDoS',
    category: 'security',
    tags: ['ddos', 'segurança', 'proteção'],
    popular: true,
    content: `
# Proteção DDoS

## O que é DDoS Protection?

Proteção DDoS (Distributed Denial of Service) é um sistema que protege seu servidor contra ataques que tentam tirar seu servidor do ar.

## Proteção Incluída

### Todos os Planos
- Proteção anti-DDoS incluída
- Sem custo adicional
- 100% transparente
- Sem impacto na performance

### Como Funciona
1. Detecção automática de ataques
2. Bloqueio em tempo real
3. Filtragem inteligente
4. Continua servidor online

## Características

### Proteção Automática
- Ativa automaticamente
- Não requer configuração
- Funciona 24/7
- Invisível para jogadores legítimos

### Tipos de Ataques Protegidos
- SYN Flood
- UDP Flood
- ICMP Flood
- HTTP Flood
- Outros tipos de DDoS

### Performance
- Latência adicional: < 1ms
- Sem impacto visível
- Otimizado para jogos
- Zero configuração

## Monitoramento

### Em Tempo Real
- Você não precisa fazer nada
- Sistema funciona automaticamente
- Sem notificações de spam
- Proteção invisível

### Transparência
- Veja estatísticas no painel
- Ataques bloqueados
- Relatórios mensais
- Dados em tempo real

## Comportamento Normal

### Para Jogadores
- Não sentem diferença
- Conexão permanece estável
- Performance inalterada
- Experiência perfeita

### Para Você
- Servidor sempre online
- Proteção automática
- Sem preocupações
- Jogabilidade garantida

## FAQ

### Preciso ativar?
Não, funciona automaticamente.

### Há impacto na performance?
Não, impacto imperceptível.

### Vai funcionar?
Sim, 99.9% de eficácia.

### Custo adicional?
Não, incluído em todos os planos.

## Suporte

Dúvidas sobre proteção?
- Chat 24/7
- Ticket no painel
- Documentação completa
    `
  },
  {
    id: 'migrate-server',
    title: 'Migrando seu Servidor para PixelHost',
    description: 'Como transferir seu servidor de outro host para PixelHost',
    category: 'migration',
    tags: ['migração', 'transferência', 'servidor'],
    content: `
# Migrando seu Servidor

## Serviço Gratuito de Migração

Oferecemos migração gratuita para clientes novos e existentes!

## Processo de Migração

### 1. Criação de Ticket
- Acesse nosso [site](https://pixelhostbr.com)
- Vá em "Suporte"
- Crie ticket de migração
- Informe dados do servidor antigo

### 2. Análise
- Nossa equipe analisa
- Verifica compatibilidade
- Estima tempo de migração
- Notifica aprovação

### 3. Migração
- Equipe executa migração
- Copia todos os arquivos
- Testa o servidor
- Notifica conclusão

### 4. Configuração
- Confirma funcionamento
- Ajusta configurações
- Otimiza performance
- Entrega pronto para uso

## O que é Migrado?

### Arquivos
- Mundo completo
- Plugins/Mods
- Configurações
- Scripts personalizados

### Dados
- Base de dados
- Statistics
- Timings
- Tudo salvo

## Requisitos

### Informações Necessárias
- IP do servidor antigo
- Credenciais de acesso
- Tipo de servidor
- Versão do jogo

### Compatibilidade
- Mesma versão do jogo
- Mesma plataforma
- Arquivos acessíveis
- Servidor online/offline

## Tempo de Migração

### Servidores Pequenos
- < 5GB: 15-30 minutos
- Mundo simples
- Poucos plugins

### Servidores Médios
- 5-20GB: 1-3 horas
- Modpacks
- Vários plugins

### Servidores Grandes
- > 20GB: 2-6 horas
- Configurações complexas
- Muitos addons

## Boas Práticas

### Antes da Migração
- Faça backup completo
- Liste todos os addons
- Documente configurações
- Informe aos jogadores

### Após a Migração
- Teste tudo
- Verifique plugins
- Teste performance
- Confirme funcionamento

## Suporte Durante Migração

### Nossa Equipe
- Acompanha todo o processo
- Resolve problemas
- Otimiza configurações
- Garante funcionamento

### Comunicação
- Atualizações em tempo real
- Suporte via chat
- Ticket prioritário
- Discord dedicado

## FAQ

### É realmente grátis?
Sim, sem custo adicional.

### Perco dados?
Não, tudo é migrado.

### Demora muito?
Depende do tamanho.

### Preciso parar o servidor?
Durante a migração, sim.

## Contratar Migração

### Como Solicitar
1. Faça seu pedido
2. No checkout, escolha migração
3. Preencha formulário
4. Equipe entra em contato

### Ou Solicitar Depois
1. Acesse o painel
2. Vá em "Suporte"
3. Crie ticket de migração
4. Siga o processo

## Suporte

Dúvidas sobre migração?
- Chat 24/7
- Ticket no painel
- Nossa equipe especializada
- Discord da comunidade
    `
  },
  {
    id: 'minecraft-first-steps',
    title: 'Primeiros Passos com Servidor Minecraft',
    description: 'Guia completo para iniciar seu primeiro servidor Minecraft na PixelHost',
    category: 'minecraft',
    tags: ['minecraft', 'início', 'começando'],
    popular: true,
    content: `
# Primeiros Passos com Servidor Minecraft

## Contratando seu Servidor

1. **Acesse a Página de Minecraft**: [pixelhostbr.com/financeiro](https://pixelhostbr.com/financeiro/)
2. **Escolha seu Plano**: Selecione a quantidade de RAM adequada
3. **Finalize a Compra**: PIX aprova em minutos!
4. **Receba suas Credenciais**: Email automático com IP e porta

## Configurações Iniciais

### Acessando o Painel

1. **Login**: Acesse [painel.pixelhostbr.com](https://painel.pixelhostbr.com)
2. **Meus Serviços**: Clique no seu servidor Minecraft
3. **Visão Geral**: Veja IP, porta e versão

### Primeira Inicialização

1. **Aguarde o Setup**: Servidor cria automaticamente
2. **Aceite o EULA**: Vá em "Arquivos" → "server.properties"
3. **Edite**: eula=false para eula=true
4. **Reinicie**: Clique em "Reiniciar Servidor"

## Conectando ao Servidor

### Via Minecraft

1. Abra o Minecraft Java Edition
2. Clique em "Jogar Multiplayer"
3. Adicione novo servidor
4. Cole o IP e porta fornecidos
5. Clique em "Conectar ao Servidor"

## Configurações Recomendadas

### server.properties

Algumas configurações importantes:

\`\`\`
max-players=20
view-distance=10
simulation-distance=6
difficulty=easy
gamemode=survival
online-mode=true
\`\`\`

### Tipos de Servidor

- **Vanilla**: Servidor padrão do Minecraft
- **Spigot**: Melhor performance, plugins
- **Paper**: Otimizado, plugins, mais estável
- **Bukkit**: Suporte a plugins legado

## Próximos Passos

1. Configure backups automáticos
2. Instale plugins essenciais
3. Configure permissões
4. Convide seus amigos

## Suporte

Precisa de ajuda? Nossa equipe está pronta!
- Chat 24/7 no site
- Ticket no painel
- Discord: discord.gg/BBAPJyKUw7
    `
  },
  {
    id: 'minecraft-spigot-paper',
    title: 'Configurando Spigot ou Paper',
    description: 'Como instalar e configurar Spigot/Paper no seu servidor Minecraft',
    category: 'minecraft',
    tags: ['minecraft', 'spigot', 'paper', 'configuração'],
    popular: true,
    content: `
# Configurando Spigot ou Paper no Minecraft

## Por que Spigot/Paper?

- **Melhor Performance**: Otimizações avançadas
- **Plugins**: Suporte a vasta biblioteca
- **Estabilidade**: Menos lag e crashes
- **Personalização**: Controle total

## Instalando via Painel

### Método Automático (Recomendado)

1. **Acesse o Painel**
   - Login em painel.pixelhostbr.com
   - Selecione seu servidor

2. **Vá em "Instalação"**
   - Clique na aba "Software"
   - Procure por "Spigot" ou "Paper"

3. **Selecione Versão**
   - Escolha a versão do Minecraft
   - Clique em "Instalar"

4. **Aguarde Conclusão**
   - Instalação automática
   - Servidor reinicia sozinho

## Instalando Manualmente

### 1. Download

- **Spigot**: [spigotmc.org](https://www.spigotmc.org/)
- **Paper**: [papermc.io](https://papermc.io/)

### 2. Upload

1. **Acesse FTP**
   - Credenciais no painel
   - Conecte via FileZilla

2. **Pasta Raiz**
   - Delete server.jar antigo
   - Upload novo jar (spigot.jar ou paper.jar)

3. **Renomeie**
   - Para server.jar
   - Ou configure no painel

### 3. Inicie o Servidor

- Painel: Clique em "Iniciar"
- Console: Aguarde carregar

## Configurações Importantes

### paper.yml ou spigot.yml

Otimizações recomendadas:

\`\`\`yaml
chunk-loading:
  autosave-interval: 300
  max-concurrent-sends: 4

world-settings:
  default:
    ticks-per:
      grass-spread: 1
      container-update: 1
\`\`\`

### bukkit.yml

\`\`\`yaml
settings:
  allow-end: true
  warn-on-overload: true
  shutdown-message: Servidor reiniciado
\`\`\`

## Plugins Essenciais

### Obrigatórios

1. **LuckPerms**: Sistema de permissões
2. **EssentialsX**: Comandos básicos
3. **WorldEdit**: Edição de mundo
4. **WorldGuard**: Proteção de áreas

### Performance

1. **ChunkMaster**: Gerenciamento de chunks
2. **ClearLag**: Limpeza de entidades
3. **Spark**: Monitoramento de performance

## Verificando Instalação

Digite no console:
\`\`\`
/version
\`\`\`

Deve mostrar: \`This server is running Spigot version...\` ou \`This server is running Paper version...\`

## Dicas de Otimização

### JVM Arguments

Adicione no painel:
\`\`\`
-XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200
\`\`\`

### RAM

- **Apenas jogo**: 2GB é suficiente
- **Com plugins**: 4GB+ recomendado
- **Muitos players**: 8GB+

## Suporte

Dúvidas sobre Spigot/Paper?
- Chat 24/7
- Ticket no painel
- Documentação: docs.spigotmc.org
    `
  },
  {
    id: 'minecraft-optimization',
    title: 'Otimizando seu Servidor Minecraft',
    description: 'Dicas e configurações para melhorar a performance do servidor',
    category: 'minecraft',
    tags: ['minecraft', 'performance', 'otimização', 'lag'],
    popular: true,
    content: `
# Otimizando seu Servidor Minecraft

## Identificando Problemas

### Sinais de Lag

- TPS abaixo de 20
- Jogadores reclamando
- Chunks não carregam
- Comandos lentos

### Ferramentas de Diagnóstico

1. **Digite no console**: \`/timings\`
2. **Analyze**: Veja o relatório
3. **Identifique**: Problemas específicos

## Configurações de Performance

### server.properties

\`\`\`
view-distance=10
max-world-size=29999984
simulation-distance=6
max-chunk-threads=1
\`\`\`

### paper.yml

Configurações importantes:

\`\`\`yaml
chunk-loading:
  autosave-interval: 600
  max-concurrent-sends: 2

entity-tracking-range:
  players: 48
  monsters: 48
  misc: 32

mob-spawns:
  disable-chest-cat-detection: true
  nerf-spawner-mobs: true
\`\`\`

## Plugins de Otimização

### Essenciais

1. **ClearLag** - Remove entidades excessivas
2. **ChunkMaster** - Gerenciamento inteligente de chunks
3. **Spark** - Monitoramento em tempo real
4. **Chunky** - Pré-geração de mundo

### Configuração ClearLag

\`\`\`yaml
settings:
  seconds-between-removal: 300
  removal-timer: 30
  tnt:
    clear:
      enabled: true
\`\`\`

## Otimizações de Mundo

### WorldBorder

1. Instale o plugin WorldBorder
2. Configure limite razoável
3. Pre-gerere o mundo

### Redstone

- Desative clocks desnecessários
- Use comparadores seletivos
- Evite loops infinitos

### Entidades

- Limite mobs por chunk
- Configure mob-spawner-rate
- Use plugins de limpeza

## JVM Arguments Otimizados

### Para Paper

\`\`\`
-XX:+UseG1GC -XX:+ParallelRefProcEnabled
-XX:MaxGCPauseMillis=200
-XX:+UnlockExperimentalVMOptions
-XX:+DisableExplicitGC
-XX:+AlwaysPreTouch
-XX:G1NewSizePercent=30
-XX:G1MaxNewSizePercent=40
-XX:G1HeapRegionSize=8M
-XX:G1ReservePercent=20
-XX:G1HeapWastePercent=5
-XX:G1MixedGCCountTarget=4
-XX:InitiatingHeapOccupancyPercent=15
\`\`\`

## Monitoramento Contínuo

### Spark

- Digite: \`/spark profiler start\`
- Jogue normalmente por 5 min
- Digite: \`/spark profiler stop\`
- Analise o relatório

### Timings

Regularmente:
\`\`\`
/timings on
# aguardar...
/timings paste
\`\`\`

## Reduzindo Lag de Chunks

1. Use Chunky ou ChunkSpawner
2. Limite view-distance
3. Desative chunk loading em áreas vazias
4. Pre-gere mundo antes de abrir

## Limite de Players

Configure baseado em sua RAM:
- **2GB**: 10-15 players
- **4GB**: 30-40 players  
- **8GB**: 60-80 players
- **16GB**: 120+ players

## Suporte

Precisa de ajuda com otimização?
- Chat 24/7
- Ticket no painel
- Discord: discord.gg/BBAPJyKUw7
    `
  },
  {
    id: 'minecraft-upgrade-downgrade',
    title: 'Posso fazer upgrade ou downgrade do meu plano Minecraft?',
    description: 'Como alterar seu plano de hospedagem Minecraft para mais ou menos recursos',
    category: 'minecraft',
    tags: ['minecraft', 'upgrade', 'downgrade', 'planos', 'pagamento'],
    popular: true,
    content: `
# Posso fazer upgrade ou downgrade do meu plano?

Sim, você pode alterar seu plano de hospedagem Minecraft a qualquer momento — tanto para aumentar os recursos (**upgrade**) quanto para reduzir (**downgrade**). No entanto, esse processo deve ser feito através do nosso suporte.

## 🔼 Upgrade de Plano

### Como funciona
- Solicite a qualquer momento, diretamente com nosso time de atendimento
- Após confirmação do pagamento da diferença proporcional, o novo plano é ativado **imediatamente**
- Seu servidor permanece no ar durante o processo, **sem perda de dados**

### Vantagens do upgrade
- Mais RAM para plugins e mods
- Melhor performance com mais jogadores
- Recursos adicionais conforme necessário
- Ativação instantânea

## 🔽 Downgrade de Plano

### Como funciona
- Também pode ser solicitado via suporte
- A alteração é aplicada no próximo ciclo de cobrança
- Recomendamos garantir que o novo plano tenha os recursos necessários para evitar instabilidade

### Atenção importante
- Verifique se o novo plano atende suas necessidades
- Alguns plugins podem exigir mais RAM
- Considere o número de jogadores simultâneos

## ✅ Como Solicitar

Você pode solicitar a alteração de plano pelos seguintes canais:

### 1. Suporte via Site
- Acesse [pixelhostbr.com](https://pixelhostbr.com)
- Clique em "Suporte"
- Abra um chamado descrevendo sua solicitação

### 2. WhatsApp
- **(79) 99934-7948**
- Atendimento rápido e direto
- Disponível 24/7

### 3. Discord da PixelHost
- Entre no [Discord](https://discord.gg/BBAPJyKUw7)
- Abra um ticket com a equipe
- Especifique a alteração desejada

## Informações Necessárias

Ao solicitar alteração de plano, informe:
- ID do seu servidor
- Plano atual
- Plano desejado
- Motivo da alteração (opcional)

## Processamento

### Upgrade
1. Confirmação da solicitação
2. Cálculo da diferença proporcional
3. Pagamento da diferença
4. **Ativação imediata do novo plano**

### Downgrade
1. Confirmação da solicitação
2. Agendamento para próximo ciclo
3. Alteração aplicada automaticamente
4. Aviso por email

## Custos

### Upgrade
- Você paga apenas a **diferença proporcional**
- Cálculo baseado em dias restantes no ciclo
- Sem taxa adicional

### Downgrade
- Sem custo adicional
- Diferença não é reembolsada no ciclo atual
- Novo valor inicia no próximo ciclo

## Dicas

- **Upgrade**: Faça quando precisar de mais recursos
- **Downgrade**: Considere limpar plugins/mods desnecessários antes
- **Teste**: Use recursos de monitoramento para decidir
- **Backup**: Sempre faça backup antes de grandes alterações

## Suporte

Nosso suporte está disponível **24 horas por dia, 7 dias por semana**, para garantir uma transição rápida e segura.

Entre em contato agora mesmo!
- Chat 24/7 no site
- WhatsApp: (79) 99934-7948
- Discord: discord.gg/BBAPJyKUw7
    `
  },
  {
    id: 'minecraft-hosting-plans',
    title: 'Planos de Hospedagem Minecraft',
    description: 'Compare nossos planos de hospedagem para servidores Minecraft',
    category: 'minecraft',
    tags: ['minecraft', 'planos', 'hospedagem', 'recursos'],
    popular: true,
    content: `
# Planos de Hospedagem Minecraft

Na PixelHost, oferecemos planos flexíveis para todos os tipos de jogadores e projetos — desde servidores entre amigos até grandes comunidades. Abaixo, você confere todos os nossos planos, com detalhes de recursos, suporte e valores.

## 🧱 Plano Básico

**Ideal para**: Quem está começando ou deseja jogar com um pequeno grupo de amigos.

**Recomendado para**: Até 4 jogadores

**Recursos**:
- **Memória RAM**: 4 GB
- **Processamento**: Básico
- **Suporte**: Humano, Atendimento 24/7

**Valor**: **R$ 25,00 / mês**

## ⚔️ Plano Avançado

**Ideal para**: Quem busca mais desempenho e liberdade para usar plugins e personalizações.

**Recomendado para**: Até 8 jogadores

**Recursos**:
- **Memória RAM**: 8 GB
- **Processamento**: Avançado
- **Suporte**: Humano, Atendimento 24/7

**Valor**: **R$ 35,00 / mês**

## 💎 Plano Premium

**Ideal para**: Servidores exigentes, com maior número de jogadores e uso intenso de mods ou minigames.

**Recomendado para**: Até 16 jogadores

**Recursos**:
- **Memória RAM**: 16 GB
- **Processamento**: Premium
- **Suporte**: Humano 24/7, Prioridade no atendimento

**Valor**: **R$ 50,00 / mês**

## 🔥 Plano Master

**Ideal para**: Grandes projetos, redes de servidores e comunidades que exigem o máximo desempenho.

**Recomendado para**: Muitos jogadores

**Recursos**:
- **Memória RAM**: Ilimitada*
- **Processamento**: Master
- **Suporte**: Humano 24/7, Atendimento prioritário

**Valor**: **R$ 90,00 / mês**

*\*A RAM é escalável conforme a necessidade real do servidor.*

## 📋 Recursos Comuns a Todos os Planos

### Infraestrutura
- **Painel intuitivo**: Pterodactyl
- **Acesso completo**: FTP e banco de dados
- **Instalação fácil**: Mods e plugins
- **Versão**: Suporte a qualquer versão do Minecraft
- **Uptime**: Garantido de 99,9%

### Segurança
- **Proteção DDoS**: Incluída em todos os planos
- **Firewall**: Configurado automaticamente
- **Backups**: Automáticos e seguros

### Controle
- **Painel Pterodactyl**: Interface moderna e intuitiva
- **File Manager**: Editor de arquivos integrado
- **Console**: Acesso direto ao terminal
- **Database**: MySQL incluído

### Suporte
- **24/7**: Atendimento humano sempre disponível
- **Rápido**: Resposta em menos de 5 minutos
- **Especializado**: Equipe técnica certificada

## 💡 Qual Plano Escolher?

### 4 Jogadores ou Menos?
**Escolha**: Plano Básico (R$ 25/mês)
- Perfeito para grupo de amigos
- Recursos suficientes para servidores Vanilla
- Ideal para testes

### 5-8 Jogadores?
**Escolha**: Plano Avançado (R$ 35/mês)
- Melhor para plugins e mods
- Performance otimizada
- Excelente custo-benefício

### 9-16 Jogadores?
**Escolha**: Plano Premium (R$ 50/mês)
- Suporta servidores com muitos plugins
- Modpacks pesados
- Comunidades médias

### 17+ Jogadores?
**Escolha**: Plano Master (R$ 90/mês)
- Redes de servidores
- Performance máxima
- RAM ilimitada e escalável

## 🎮 Por Que Escolher PixelHost?

### Performance
- Processadores AMD EPYC / Intel Xeon
- SSD NVMe de alta velocidade
- Latência < 50ms no Brasil
- 99.9% de uptime garantido

### Flexibilidade
- Sem contrato mínimo
- Upgrade/downgrade a qualquer momento
- Cancelamento sem multas
- Garantia de 3 dias

### Economia
- PIX: Aprovação em minutos
- Cartão: Até 12x sem juros
- Boleto: 10% desconto
- Plano anual: Até 20% desconto

## 🚀 Comece Agora

Escolha o plano ideal para você e comece agora mesmo sua jornada com estabilidade, desempenho e suporte de verdade.

### Como Contratar

1. **Acesse**: [pixelhostbr.com/financeiro](https://pixelhostbr.com/financeiro/)
2. **Escolha**: Selecione o plano desejado
3. **Configure**: Opções do servidor
4. **Pague**: PIX, cartão ou boleto
5. **Ative**: Servidor em até 5 minutos

## 📞 Precisa de Ajuda?

Se precisar de ajuda, nossa equipe está disponível **24/7**!

- **WhatsApp**: (79) 99934-7948
- **Discord**: [discord.gg/BBAPJyKUw7](https://discord.gg/BBAPJyKUw7)
- **Chat**: No site
- **Email**: suporte@pixelhostbr.com

## FAQ Rápido

**Posso mudar de plano depois?**
Sim! Faça upgrade ou downgrade quando quiser.

**Há taxa de instalação?**
Não! Sem taxas adicionais ou setup fees.

**Posso testar antes?**
Sim! Garantia de 3 dias com reembolso completo.

**Quais métodos de pagamento?**
PIX, cartão de crédito (até 12x), boleto e PayPal.

**Consigo usar plugins e mods?**
Sim! Todos os planos suportam plugins e mods.

## 💰 Oferta Especial

- **Primeiro mês**: Sem cobrança até aprovação
- **Sem impostos**: Preços transparentes
- **Desconto PIX**: 5% adicional
- **Plano Anual**: Até 20% de desconto
    `
  },
  {
    id: 'minecraft-offline-mode',
    title: 'Como permitir Minecraft pirata no meu servidor?',
    description: 'Ative o modo offline para permitir jogadores com versões não oficiais do Minecraft',
    category: 'minecraft',
    tags: ['minecraft', 'offline-mode', 'crack', 'segurança'],
    content: `
# Como permitir Minecraft pirata no meu servidor?

Se você deseja permitir que jogadores com Minecraft pirata (não original) entrem no seu servidor, é possível liberar essa opção de forma simples pelo painel da PixelHost.

## ⚠️ Atenção Importante

**Riscos ao ativar modo offline**:
- O servidor **deixará de verificar** a autenticidade das contas com a Mojang
- Jogadores podem usar nomes duplicados
- **Risco de segurança** para banco de dados
- Dificulta moderação e controle de acesso

**Use essa opção apenas se estiver ciente dos riscos de segurança e moderação.**

## ✅ Ativando o Suporte para Minecraft Pirata

### Passo a Passo Completo

#### 1. Acesse o Painel da PixelHost

- URL: [painel.pixelhostbr.com](https://painel.pixelhostbr.com)
- Faça login com suas credenciais

#### 2. Selecione seu Servidor

- Clique no nome do seu servidor Minecraft
- Aguarde carregar as informações

#### 3. Abra o Gerenciador de Arquivos

- No menu lateral, clique em **"Files"**
- Aguarde carregar a lista de arquivos

#### 4. Edite server.properties

- Procure e clique no arquivo **server.properties**
- O arquivo abrirá em modo de edição

#### 5. Alterar Configuração

**Localize a linha**:
\`\`\`
online-mode=true
\`\`\`

**Altere para**:
\`\`\`
online-mode=false
\`\`\`

**O que significa?**
- \`online-mode=true\`: Verifica autenticidade (apenas original)
- \`online-mode=false\`: Não verifica (permite pirata)

#### 6. Salve as Alterações

- Clique em **"Save Content"** ou **"Salvar conteúdo"**
- Aguarde confirmação de salvamento

#### 7. Reinicie o Servidor

1. Volte para o menu principal
2. Entre no **"Console"**
3. Clique no **botão amarelo** para reiniciar o servidor
4. Aguarde o servidor voltar online

## 🎮 Pronto!

Agora jogadores com Minecraft pirata poderão entrar no seu servidor utilizando o IP fornecido no painel.

## 📋 Como Jogadores Vão Conectar?

### Jogadores com Minecraft Pirata

1. Abra o Minecraft pirata
2. Clique em **"Multiplayer"**
3. Clique em **"Add Server"**
4. Cole o **IP e Porta** fornecidos no painel
5. Clique em **"Join Server"**

### Informando o IP

No painel, você encontra:
- **IP**: Exibido na página principal
- **Porta**: Exibida na página principal
- **Exemplo**: \`meuservidor.pixelhostbr.com:25565\`

## 🔒 Dicas de Segurança

### Problemas Comuns

**Nomes duplicados**
- Múltiplos jogadores com mesmo nick
- Dificulta identificação

**Banimento**
- Bannir um jogador bane todos com aquele nick
- Use sistema de UUIDs

**Modo Híbrido (Recomendado)**

Use plugin que funciona com ambos:

\`\`\`
# plugins
# AuthMe - Sistema de autenticação
# AntiDupe - Previne exploits
# AdvancedBan - Melhor controle de bans
\`\`\`

### Plugins Recomendados para Modo Offline

1. **AuthMe**
   - Sistema de registro/login
   - Protege contra nomes duplicados
   - Configuração via console

2. **AdvancedBan**
   - Banco de dados para bans
   - Evita banir jogador errado
   - UUID support

3. **LuckPerms**
   - Sistema de permissões
   - Funciona com qualquer tipo de player

## ⚙️ Configurações Adicionais

### Para Melhor Performance

Edite \`server.properties\`:

\`\`\`
online-mode=false
max-players=20
difficulty=normal
gamemode=survival
white-list=false
enforce-whitelist=false
\`\`\`

### Recomendações

- **Use whitelist**: Para controle de acesso
- **Configure AuthMe**: Para segurança
- **Backup regular**: Mantenha backups frequentes
- **Monitore**: Acompanhe quem entra/sai

## 🔄 Reverter para Modo Online

Se quiser voltar ao modo online (apenas original):

1. Edite \`server.properties\`
2. Altere: \`online-mode=true\`
3. Salve e reinicie

## ⚙️ Troubleshooting

### Problema: Servidor não aceita players
- Verifique se salvou as alterações
- Confirme que reiniciou o servidor
- Veja os logs para erros

### Problema: Nomes duplicados
- Instale AuthMe plugin
- Configure sistema de autenticação
- Force registro obrigatório

### Problema: Performance ruim
- Reduza max-players
- Otimize plugins
- Use ClearLag

## 📞 Precisa de Ajuda?

Nossa equipe está pronta para ajudar!
- **Chat 24/7**: No site
- **WhatsApp**: (79) 99934-7948
- **Discord**: [discord.gg/BBAPJyKUw7](https://discord.gg/BBAPJyKUw7)

## 📝 Resumo Rápido

1. Acesse painel → Servidor → Files
2. Abra **server.properties**
3. Mude \`online-mode=true\` para \`false\`
4. Salve e reinicie
5. Jogadores pirata podem entrar!

**Importante**: Considere usar plugins de segurança para proteger seu servidor.
    `
  },
  {
    id: 'minecraft-change-version',
    title: 'Como alterar a versão do meu servidor?',
    description: 'Guia completo para mudar a versão do Minecraft do seu servidor com segurança',
    category: 'minecraft',
    tags: ['minecraft', 'versão', 'update', 'downgrade'],
    content: `
# Como alterar a versão do meu servidor?

Quer mudar a versão do Minecraft do seu servidor? Por exemplo, voltar da 1.21 para a 1.19? Isso é totalmente possível com a PixelHost! Abaixo, explicamos o processo completo para você fazer isso com segurança.

## ⚠️ Atenção Importante

**Antes de iniciar o processo**:
- **Desligue seu servidor** no painel
- Alterar a versão com o servidor ligado pode causar erros ou corromper arquivos
- **Faça backup** de seus arquivos importantes antes de prosseguir
- **Plugins incompatíveis** podem causar problemas com a nova versão

## 🔄 Alterando para uma Versão Diferente do Minecraft

### Passo a Passo Completo

#### 1. Acesse seu Painel

- URL: [painel.pixelhostbr.com](https://painel.pixelhostbr.com)
- Faça login com suas credenciais
- Clique no nome do seu servidor

#### 2. Garanta que o Servidor Está Desligado

- **Importante**: Servidor deve estar offline
- Vá em "Console" e certifique-se de que está parado
- Não prossiga se o servidor estiver rodando

#### 3. Acesse Menu "More"

- No menu lateral esquerdo, clique em **"More"** ou **"Mais"**
- Aguarde carregar as opções

#### 4. Selecione "Versions"

- Dentro dessa seção, clique em **"Versions"**
- Você verá as opções disponíveis

#### 5. Escolha a Base Desejada

- **Vanilla**: Versão original do Minecraft
- **Spigot**: Suporte a plugins
- **Paper**: Otimizado com plugins
- **Bukkit**: Versão legado

#### 6. Selecione a Versão

- Clique na opção desejada (ex: Vanilla, Spigot, Paper)
- Navegue pelas versões disponíveis
- **Escolha a versão** desejada (ex: 1.19, 1.21, etc.)
- Clique em **"Prosseguir"**

#### 7. Configuração de Instalação

**✅ Recomendamos marcar**:
- "Excluir todos os arquivos" - para instalação limpa
- Isso garante instalação sem bugs
- Remove arquivos de versões antigas

**⚠️ Cuidado**:
- Se não excluir, arquivos antigos podem causar conflitos
- Plugins incompatíveis podem gerar erros

#### 8. Finalizando a Alteração

- Clique em confirmar
- Aguarde o processo de instalação
- Não interrompa o processo

## ▶️ Finalizando

### 1. Acesse o Console

- Vá até o menu **"Console"**
- Aguarde carregar o terminal

### 2. Inicie o Servidor

- Clique no **botão verde de Play ▶️**
- Aguarde o servidor iniciar
- **Não interrompa** o processo de inicialização

### 3. Aguarde a Mensagem de Sucesso

Você deve ver a mensagem:
\`\`\`
Server marked as running..
\`\`\`

**Ou similar**:
- "Done"
- "For help, type /help"
- "Listening on..."

### 4. Teste a Conexão

- Abra seu Minecraft com a nova versão
- Conecte ao servidor
- Teste funcionalidades básicas

## 🎮 Pronto!

Agora é só entrar no seu Minecraft com a nova versão e jogar com seus amigos.

## 📋 Versões Disponíveis

### Versões Mais Populares

**1.8 - 1.12** (Legado)
- Compatibilidade com plugins antigos
- Muitos servidores ainda usam

**1.13 - 1.16** (Intermediário)
- Flattening de blocos
- Melhor desempenho

**1.17 - 1.20** (Modernas)
- Recursos mais recentes
- Caves & Cliffs, The Wild Update

**1.21+** (Atuais)
- Mais recente
- Últimas features

## ⚙️ Dicas Importantes

### Antes de Alterar a Versão

1. **Faça Backup**
   - Backups automáticos no painel
   - Download manual recomendado
   - Guarde arquivos importantes

2. **Verifique Plugins**
   - Alguns plugins podem ser incompatíveis
   - Consulte documentação dos plugins
   - Lista de plugins compatíveis

3. **Dados Permanentes**
   - Server.properties será resetado
   - Whitelist será perdida
   - Logs serão limpos

### Após Alterar a Versão

1. **Teste Plugins**
   - Verifique se plugins ainda funcionam
   - Atualize plugins incompatíveis
   - Remova plugins problemáticos

2. **Configure Novamente**
   - Ajuste server.properties
   - Configure whitelist (se usar)
   - Ajuste configurações de jogo

3. **Monitore**
   - Acompanhe logs
   - Verifique performance
   - Teste com jogadores

## 🔄 Fazendo Downgrade

### De Versão Nova Para Antiga

**Exemplo**: 1.21 → 1.19

1. **Importante**: Backup completo
2. Plugins podem não funcionar
3. World pode ter features incompatíveis
4. **Recomendado**: Limpar world e recomeçar

### Recomendações de Downgrade

- Use world antigo se possível
- Plugins compatíveis com versão escolhida
- Configure tudo novamente
- Teste antes de abrir para jogadores

## 📊 Compatibilidade de Plugins

### Verifique Compatibilidade

Antes de mudar versão:

1. Veja versões suportadas do plugin
2. Consulte SpigotMC ou Bukkit
3. Teste em servidor de teste primeiro
4. Tenha lista de plugins compatíveis

### Plugins Comuns

- **EssentialsX**: Funciona 1.8+
- **WorldEdit**: Versão específica por MC
- **Vault**: Compatível com todas
- **LuckPerms**: 1.8+

## ⚙️ Troubleshooting

### Problema: Servidor não inicia

**Possíveis causas**:
- Versão incompatível
- Falta de memória
- Arquivos corrompidos

**Soluções**:
- Tente versão diferente
- Aumente RAM no painel
- Reinstale com limpeza completa

### Problema: Plugins não funcionam

**Causa**: Incompatibilidade de versão

**Solução**:
- Atualize plugins
- Use versão de plugin compatível
- Remova plugins problemáticos

### Problema: World com erros

**Causa**: Downgrade de versão muito antiga

**Solução**:
- Use backup da world
- Gere nova world
- Migre edifícios manualmente

## 🔄 Revertendo a Alteração

Se quiser voltar à versão anterior:

1. Repita o processo
2. Escolha a versão anterior
3. **Não** marque "Excluir arquivos"
4. Use backup se necessário

## 📞 Precisa de Ajuda?

Nossa equipe está pronta para ajudar!
- **Chat 24/7**: No site
- **WhatsApp**: (79) 99934-7948
- **Discord**: [discord.gg/BBAPJyKUw7](https://discord.gg/BBAPJyKUw7)

## 📝 Resumo Rápido

1. **Desligue** o servidor
2. **Faça backup** dos arquivos
3. Menu → More → Versions
4. Escolha **Vanilla/Spigot/Paper**
5. Selecione **versão desejada**
6. Marque **"Excluir arquivos"** (recomendado)
7. **Prosseguir** e aguardar
8. **Inicie** servidor
9. Aguarde **"Server marked as running"**
10. **Teste** conexão

**Dica**: Sempre teste a nova versão antes de abrir para jogadores!
    `
  },
  {
    id: 'minecraft-reset-server',
    title: 'Como resetar meu servidor?',
    description: 'Guia completo para resetar seu servidor Minecraft e começar do zero',
    category: 'minecraft',
    tags: ['minecraft', 'reset', 'reinstalar', 'limpar'],
    content: `
# Como resetar meu servidor?

Se deseja começar do zero, apagar todos os mundos ou aplicar uma nova versão limpa, você pode resetar seu servidor facilmente.

## ⚠️ Atenção Importante

**Antes de realizar qualquer método**:
- **Desligue seu servidor** no painel
- Isso evita erros e garante que todos os arquivos sejam removidos corretamente
- **Faça backup** dos arquivos importantes
- **Dados serão perdidos** permanentemente

## 🔹 Método 1: Reset Manual via Arquivos

### Passo a Passo

#### 1. Acesse seu Painel

- URL: [painel.pixelhostbr.com](https://painel.pixelhostbr.com)
- Clique no nome do seu servidor
- Garanta que o servidor está **desligado**

#### 2. Acesse o Gerenciador de Arquivos

- No menu lateral, clique em **"Files"**
- Aguarde carregar todos os arquivos

#### 3. Selecione Todos os Arquivos

- Use **Ctrl+A** (Windows/Linux) ou **Cmd+A** (Mac)
- Ou clique em **"Select All"** se disponível
- Todos os arquivos estarão marcados

#### 4. Exclua os Arquivos

- Clique no **ícone da lixeira** 🗑️
- Localizado no canto inferior direito da tela
- Confirme a exclusão
- Aguarde processo concluir

#### 5. Instale Nova Versão

- Vá em **"More"** ou **"Mais"** no menu lateral
- Clique em **"Versions"**
- Escolha a versão do Minecraft desejada
- Clique em **"Prosseguir"**
- Aguarde instalação

#### 6. Inicie o Servidor

- Acesse o **"Console"**
- Pressione o **botão verde de Play ▶️**
- Aguarde servidor iniciar
- Pronto! Servidor resetado e limpo

## 🔹 Método 2: Reset Automático ao Instalar Nova Versão

### Passo a Passo

#### 1. Acesse Menu "More"

- No painel, clique em **"More"** → **"Versions"**
- Escolha a versão do Minecraft desejada

#### 2. Configure Instalação Limpa

**✅ Importante**: Marque a caixa:
- **"Excluir todos os arquivos"** ✓
- Isso garante instalação limpa
- Remove tudo automaticamente

#### 3. Confirme Instalação

- Clique em **"Prosseguir"**
- O painel irá:
  - ✅ Excluir todos os arquivos antigos automaticamente
  - ✅ Baixar a nova versão
  - ✅ Preparar o servidor do zero

#### 4. Inicie o Servidor

- Vá até o **"Console"**
- Clique no **botão de Play ▶️**
- Aguarde servidor ligar
- Pronto! Novo servidor limpo

## 💡 Dicas Importantes

### Antes de Resetar

**⚙️ Faça Backup**:
- Backups automáticos disponíveis
- Download manual de world
- Guarde server.properties
- Salve whitelist e bans

**📋 Anote Configurações**:
- Plugins instalados
- Configurações importantes
- Endereços e senhas
- Permissões configuradas

### O Que Será Perdido

- **World completa**: Tudo será apagado
- **Plugins**: Serão removidos
- **Configurações**: Resetadas ao padrão
- **Dados**: Bancos de dados (se houver)
- **Logs**: Histórico apagado

### O Que Será Mantido

- **Painel**: Configurações permanecem
- **RAM**: Alocação continuará
- **IP/Porta**: Não mudam
- **Pasta principal**: Estrutura base

## 🔄 Quando Resetar?

### Motivos Comuns

**1. Começar Do Zero**
- Mudou o conceito do servidor
- Quer fresh start
- Testar nova dinâmica

**2. Problemas Graves**
- Corrupção de arquivos
- Erros irrecuperáveis
- Performance ruim
- Plugins quebrados

**3. Mudança de Versão**
- Quer versão diferente
- Plugins incompatíveis
- Features antigas não funcionam

**4. Limpeza Completa**
- Muitos arquivos antigos
- World muito grande
- Acúmulo de dados lixo

## 📋 Comparação dos Métodos

### Método 1: Manual

**Vantagens**:
- ✅ Mais controle
- ✅ Pode selecionar o que manter
- ✅ Ver exatamente o que foi removido

**Desvantagens**:
- ❌ Mais passos
- ❌ Pode esquecer de algo
- ❌ Mais tempo

### Método 2: Automático

**Vantagens**:
- ✅ Mais rápido
- ✅ Menos erros
- ✅ Passo único
- ✅ Recomendado

**Desvantagens**:
- ❌ Não pode selecionar
- ❌ Remove tudo
- ❌ Menos controle

## ⚙️ Configurações Pós-Reset

### Após Resetar

1. **server.properties**
   - Configure whitelist
   - Ajuste max-players
   - Defina gamemode

2. **Plugins**
   - Instale novamente
   - Configure permissões
   - Ajuste configurações

3. **Backups**
   - Ative backups automáticos
   - Configure frequência
   - Teste restauração

4. **Segurança**
   - Configure AuthMe
   - Ajuste banco de dados
   - Proteção contra exploits

## 🔒 Prevenindo Resets Acidentais

### Boas Práticas

- **Backups regulares**: Sempre tenha backup
- **Tags claros**: Organize arquivos
- **Documentação**: Anote configurações
- **Testes**: Teste em servidor secundário

### Modo de Proteção

Edite \`server.properties\`:
\`\`\`
force-gamemode=false
enforce-whitelist=true
\`\`\`

## 📞 Precisa de Ajuda?

Nossa equipe está pronta para ajudar!
- **Chat 24/7**: No site
- **WhatsApp**: (79) 99934-7948
- **Discord**: [discord.gg/BBAPJyKUw7](https://discord.gg/BBAPJyKUw7)

## 📝 Resumo Rápido

### Método 1: Manual
1. Desligue servidor
2. Files → Selecione tudo
3. Delete todos arquivos
4. More → Versions
5. Escolha versão → Prosseguir
6. Inicie servidor

### Método 2: Automático
1. Desligue servidor
2. More → Versions
3. Escolha versão
4. Marque "Excluir arquivos"
5. Prosseguir
6. Inicie servidor

**Dica**: Se você quiser manter seu mundo antigo ou configurações específicas, lembre-se de fazer um backup antes de apagar tudo!
    `
  },
  {
    id: 'minecraft-install-forge',
    title: 'Como instalar o Forge no meu servidor?',
    description: 'Guia completo para instalar Forge e permitir mods no seu servidor Minecraft',
    category: 'minecraft',
    tags: ['minecraft', 'forge', 'mods', 'instalação'],
    content: `
# Como instalar o Forge no meu servidor?

O Forge é uma base que permite rodar mods no Minecraft. Se você quer adicionar mods ao seu servidor, o primeiro passo é instalar o Forge corretamente.

## ⚠️ Atenção Importante

**Antes de iniciar a instalação**:
- **Desligue seu servidor** no painel
- Isso evita falhas no processo e possíveis corrupções de dados
- **Faça backup** dos arquivos importantes
- Verifique se escolheu a **versão correta** do Minecraft

## 🧱 Passo a Passo para Instalar o Forge

### 1. Acesse o Painel da PixelHost

- URL: [painel.pixelhostbr.com](https://painel.pixelhostbr.com)
- Faça login com suas credenciais
- Garanta que o servidor está **desligado**

### 2. Selecione seu Servidor

- Clique no nome do seu servidor
- Aguarde carregar as informações

### 3. Acesse Menu "More"

- No menu lateral esquerdo, vá em **"More"** ou **"Mais"**
- Aguarde carregar as opções

### 4. Abra Versions

- Clique em **"Versions"**
- Você verá as opções de software disponíveis

### 5. Escolha Forge

- Localize e clique na opção **"Forge"**
- Diferentes versões estarão disponíveis

### 6. Selecione a Versão do Minecraft

- Escolha a versão do Minecraft que deseja usar com mods
- Exemplo: 1.19.2, 1.20.1, etc.
- Verifique compatibilidade com os mods desejados

### 7. Opção: Excluir Arquivos Antigos

**Se o servidor já foi utilizado com outra versão**:
- ✅ Marque a caixa **"Excluir todos os arquivos"**
- Garante instalação limpa
- Remove conflitos de versões antigas

**Se é um servidor novo**:
- Não é necessário marcar
- Pode prosseguir direto

### 8. Confirme Instalação

- Clique em **"Prosseguir"** para iniciar instalação
- Aguarde o download e instalação
- Não interrompa o processo

## ▶️ Iniciando o Forge

### 1. Acesse o Console

- Vá até a aba **"Console"** no menu lateral
- Aguarde carregar o terminal

### 2. Inicie o Servidor

- Clique no **botão verde de Play ▶️**
- Aguarde o processo de inicialização
- **Não interrompa** durante a instalação

### 3. Aguarde Conclusão

- **Aguarde até 5 minutos**
- A instalação será concluída quando aparecer:
\`\`\`
Server marked as running..
\`\`\`

Ou mensagens similares:
- "Done"
- "For help, type /help"
- "Listening on..."

## 🎮 Pronto!

Seu servidor agora está com o Forge instalado, pronto para receber mods!

## 📦 Próximos Passos

### 1. Instalar Mods

**Como adicionar mods**:
1. Baixe mods compatíveis com a versão do Forge
2. Vá em **Files** → **mods** (crie pasta se não existir)
3. Upload dos arquivos .jar dos mods
4. Reinicie o servidor

### 2. Mods Recomendados

**Essenciais**:
- **JourneyMap**: Mapa do mundo
- **JEI**: Receitas de crafting
- **WTHIT**: Informações de blocos
- **Cloth Config**: Configurações avançadas

**Populares**:
- **Applied Energistics 2**: Automação
- **Create**: Maquinário e engenharia
- **Mekanism**: Tecnologia avançada
- **Biomes O' Plenty**: Novos biomas

### 3. Compatibilidade

**Importante**:
- Mods devem ser da mesma versão do Forge
- Mods devem ser do lado servidor (não cliente)
- Alguns mods requerem outros mods (dependências)

## 🔍 Como Verificar Instalação

### Teste Rápido

Digite no console:
\`\`\`
/forge version
\`\`\`

Deve retornar a versão do Forge instalada.

### Verificar Logs

- No console, procure por "ModLauncher"
- Deve mostrar "Found X mods"
- Sem erros de incompatibilidade

## ⚙️ Configurações Importantes

### server.properties

Após instalar Forge, ajuste:

\`\`\`
online-mode=false
force-gamemode=false
enforce-whitelist=false
view-distance=10
\`\`\`

### eula.txt

Certifique-se que está aceito:
- Edite **eula.txt**
- \`eula=true\`

## 🔄 Atualizando Forge

Para atualizar o Forge:

1. Faça backup dos mods
2. Repita processo de instalação
3. Escolha nova versão do Forge
4. Marque "Excluir arquivos"
5. Reinstale mods

## 📋 Dicas e Troubleshooting

### Dica 1: Versão Correta

- Verifique compatibilidade mods/Forge/Minecraft
- Sites: CurseForge, Modrinth
- Use versões estáveis

### Dica 2: Organização

- Mantenha pasta /mods organizada
- Documente mods instalados
- Crie backup antes de adicionar novos

### Dica 3: Performance

- Muitos mods exigem mais RAM
- Considere upgrade de plano
- Use mods de performance (Optifine, etc)

### Problema: Servidor não inicia

**Causas comuns**:
- Mod incompatível
- Falta de RAM
- Versão errada do Forge

**Soluções**:
- Remova mods problemáticos
- Aumente RAM
- Use versão estável do Forge

### Problema: Mods não funcionam

**Causa**: Mods de cliente instalados no servidor

**Solução**:
- Use apenas mods de servidor
- Verifique compatibilidade
- Alguns mods precisam estar em ambos (cliente e servidor)

### Problema: Crash constante

**Causa**: Mods conflitando

**Solução**:
- Remova mods um por um
- Veja logs de erro
- Use versões compatíveis

## 🎮 Mods por Categoria

### Construtor
- **Chisel**: Decorações
- **Carpenter's Blocks**: Suportes especiais
- **Architecture**: Contrução avançada

### Redstone
- **Redstone Paste**: Redstone 3D
- **Redstone Arsenal**: Ferramentas eletro
- **ProjectRed**: Expansão de redstone

### Farm/Automação
- **Industrial Foregoing**: Farm automático
- **Mystical Agriculture**: Farm de recursos
- **Harvester**: Farm inteligente

### Magia
- **Thaumcraft**: Sistema de magia
- **Botania**: Magia natural
- **Blood Magic**: Sacrifício e magia

## 📞 Precisa de Ajuda?

Nossa equipe está pronta para ajudar!
- **Chat 24/7**: No site
- **WhatsApp**: (79) 99934-7948
- **Discord**: [discord.gg/BBAPJyKUw7](https://discord.gg/BBAPJyKUw7)

## 📝 Resumo Rápido

1. **Desligue** o servidor
2. **Faça backup** dos arquivos
3. Menu → More → Versions
4. Escolha **Forge**
5. Selecione **versão do Minecraft**
6. Marque **"Excluir arquivos"** (se necessário)
7. **Prosseguir** e aguardar
8. Console → **Play ▶️**
9. Aguarde **"Server marked as running"**
10. **Instale mods** na pasta /mods

**Dica**: Comece com poucos mods e vá adicionando gradualmente para identificar incompatibilidades!
    `
  },
  {
    id: 'minecraft-install-mods',
    title: 'Como instalar mods no meu servidor Forge (ou Fabric)?',
    description: 'Guia completo para adicionar mods ao seu servidor Minecraft com Forge ou Fabric',
    category: 'minecraft',
    tags: ['minecraft', 'mods', 'forge', 'fabric', 'instalação'],
    content: `
# Como instalar mods no meu servidor Forge (ou Fabric)?

Agora que você já tem o Forge instalado no seu servidor, pode adicionar mods personalizados para deixar seu mundo Minecraft ainda mais divertido!

## ⚠️ Importante

**Antes de começar**:
- **Mods só funcionam** com Forge ou Fabric instalado
- Certifique-se de que o servidor e seu jogo **estão na mesma versão** do Forge
- **Use os mesmos mods** no servidor e no cliente
- Verifique **compatibilidade** entre mods

## 📂 Como Instalar os Mods no Servidor

### Passo a Passo Completo

#### 1. Acesse o Painel da PixelHost

- URL: [painel.pixelhostbr.com](https://painel.pixelhostbr.com)
- Faça login com suas credenciais

#### 2. Selecione seu Servidor

- Clique no nome do seu servidor
- Aguarde carregar as informações

#### 3. Acesse o Gerenciador de Arquivos

- Vá até a aba lateral **"Files"**
- Aguarde carregar a lista de arquivos

#### 4. Entre na Pasta mods

**Se a pasta existir**:
- Procure e clique na pasta **mods**
- Entre na pasta

**Se não existir**:
- Clique em **"New Folder"** ou **"Nova Pasta"**
- Crie com o nome exato: **mods** (minúsculo)
- Pressione Enter
- Entre na pasta

#### 5. Upload dos Mods

- Clique no botão **"Upload"**
- Selecione os arquivos **.jar** dos mods
- **Certifique-se**: Compatíveis com a versão do Forge
- Aguarde upload concluir
- Pronto! Mods instalados

### Regras Importantes

**✅ Mods que funcionam no servidor**:
- Apenas mods de **servidor**
- Mods de **lado ambos** (cliente + servidor)
- Mesma versão do Forge/Minecraft

**❌ Mods que NÃO funcionam**:
- Mods **apenas de cliente**
- Versões incompatíveis
- Mods obsoletos

## 🧩 E os Mods no Meu Minecraft?

Você também precisa instalar os mesmos mods no seu próprio Minecraft.

### Windows

1. **Instale Forge no Cliente**
   - Baixe Forge da mesma versão do servidor
   - Execute o instalador
   - Instale no client

2. **Localização da Pasta**
   - Abra o explorador de arquivos
   - Digite na barra de endereço: \`%appdata%/.minecraft/mods\`
   - Ou navegue: \`C:\\\\Users\\\\SeuUsuário\\\\AppData\\\\Roaming\\\\.minecraft\\mods\`

3. **Cole os Mods**
   - Copie os mesmos arquivos .jar
   - Cole na pasta mods
   - Abra Minecraft com o perfil Forge

### Mac

1. **Instale Forge no Cliente**
   - Baixe Forge da mesma versão
   - Abra o instalador
   - Siga instruções

2. **Localização da Pasta**
   - \`~/Library/Application Support/minecraft/mods\`
   - Ou pressione **Cmd+Shift+G**
   - Digite: \`~/Library/Application Support/minecraft\`

3. **Cole os Mods**
   - Mova arquivos .jar para pasta mods
   - Abra Minecraft com Forge

### Linux

1. **Instale Forge no Cliente**
   - Baixe e extraia Forge
   - Execute instalador

2. **Localização da Pasta**
   - \`~/.minecraft/mods\`
   - Ou \`/home/SeuUsuário/.minecraft/mods\`

3. **Cole os Mods**
   - Copie arquivos .jar
   - Coloque na pasta mods

## ▶️ Iniciando Tudo

### 1. Volte ao Console

- No painel, vá até **"Console"**
- Aguarde carregar o terminal

### 2. Inicie o Servidor

- Clique no **botão verde de Play ▶️**
- Aguarde carregamento completo
- **Observação**: Primeira vez pode demorar mais

### 3. Aguarde Inicialização

- Procure por "ModLauncher"
- Deve mostrar "Found X mods"
- Mensagem "Server marked as running.."

### 4. Erros de Incompatibilidade

**Caso apareça erro**:
- **Verifique a versão** do mod
- Confirme compatibilidade com Forge
- Veja logs de erro no console
- Remova mods problemáticos

## 🎮 Pronto!

Agora é só abrir seu Minecraft com o Forge instalado, usar o mesmo IP do servidor e se divertir com os mods!

## 📦 Onde Baixar Mods?

### Sites Confiáveis

1. **CurseForge** ([curseforge.com](https://curseforge.com))
   - Maior coleção de mods
   - Seguro e verificado
   - Filtros por versão

2. **Modrinth** ([modrinth.com](https://modrinth.com))
   - Alternativa moderna
   - Interface limpa
   - Download rápido

3. **Planet Minecraft**
   - Comunidade grande
   - Reviews e ratings
   - Downloads gratuitos

### Dicas de Download

- ✅ Use sites oficiais
- ✅ Verifique versão compatível
- ✅ Leia descrição e reviews
- ✅ Confirme autor verificado
- ❌ Evite sites não confiáveis
- ❌ Não use mods piratas

## 🔍 Verificando Instalação

### No Servidor

Acesse console e digite:
\`\`\`
/forge list
\`\`\`

Deve mostrar lista de mods instalados.

### No Cliente

- Abra Minecraft com Forge
- Na tela principal, verá "Mods" à esquerda
- Lista todos os mods instalados

## ⚙️ Mods Essenciais Recomendados

### Performance

- **OptiFine**: Otimizações gráficas
- **Lithium**: Performance do servidor
- **Sodium**: Performance do cliente
- **Phosphor**: Melhoria de iluminação

### Qualidade de Vida

- **JEI**: Receitas de crafting
- **WTHIT**: Info de blocos e entidades
- **JourneyMap**: Mapa do mundo
- **Inventory Tweaks**: Organização automática

### Essenciais Multiplayer

- **Loliasm**: Otimização de servidor
- **FerriteCore**: Redução de uso de memória
- **FastChunkRegen**: Regeneração rápida de chunks

## ⚠️ Troubleshooting

### Problema: Servidor não inicia com mods

**Causa**: Mod incompatível ou versão errada

**Solução**:
1. Veja logs no console
2. Identifique mod problemático
3. Remova o mod
4. Reinicie servidor

### Problema: Cliente não conecta

**Causa**: Mods diferentes ou versões diferentes

**Solução**:
1. Confirme mesmos mods
2. Versão Forge igual
3. Mesma versão Minecraft
4. Reinstale Forge se necessário

### Problema: Crash ao iniciar

**Causa**: Conflito entre mods

**Solução**:
1. Remova mods um por um
2. Teste após cada remoção
3. Identifique conflito
4. Use versões compatíveis

### Problema: Mods não aparecem

**Causa**: Pasta errada ou arquivo incorreto

**Solução**:
1. Confirme pasta /mods existe
2. Arquivos são .jar (não .zip)
3. Verifique nome do arquivo
4. Reinicie servidor

## 📋 Checklist de Instalação

### Antes de Adicionar Mods

- [ ] Forge instalado no servidor
- [ ] Versão do Forge anotada
- [ ] Backup feito
- [ ] Lista de mods desejados pronta

### Após Adicionar Mods

- [ ] Mods na pasta /mods
- [ ] Arquivos .jar corretos
- [ ] Servidor iniciado sem erros
- [ ] Cliente configurado
- [ ] Testado conexão

### No Cliente

- [ ] Forge instalado
- [ ] Mesmos mods copiados
- [ ] Versão Forge igual
- [ ] Pasta mods correta
- [ ] Perfil correto selecionado

## 💡 Dicas Importantes

### Organização

- **Paste separada**: Organize mods por categoria
- **Documentação**: Anote mods instalados
- **Backup**: Guarde lista e arquivos

### Performance

- **RAM**: Mods exigem mais memória
- **Startup**: Pode demorar mais na primeira vez
- **Crash**: Se crashar, remova mods pesados

### Segurança

- **Origem**: Baixe de sites seguros
- **Antivírus**: Configure exceções
- **Backup**: Sempre mantenha backup

## 📞 Precisa de Ajuda?

Nossa equipe está pronta para ajudar!
- **Chat 24/7**: No site
- **WhatsApp**: (79) 99934-7948
- **Discord**: [discord.gg/BBAPJyKUw7](https://discord.gg/BBAPJyKUw7)

## 📝 Resumo Rápido

### Servidor
1. Files → pasta **mods**
2. **Upload** arquivos .jar
3. Verifique compatibilidade
4. Console → **Play ▶️**
5. Aguarde inicialização

### Cliente
1. Instale **Forge no Minecraft**
2. Acesse pasta mods
3. **Cole** mesmos mods
4. Abra Minecraft com perfil Forge
5. Conecte ao servidor

**Importante**: Servidor e cliente devem ter **os mesmos mods** e mesma versão do Forge!
    `
  },
  {
    id: 'minecraft-give-op',
    title: 'Como dar OP para um jogador no meu servidor?',
    description: 'Aprenda a conceder permissões de operador (OP) para jogadores no seu servidor Minecraft',
    category: 'minecraft',
    tags: ['minecraft', 'op', 'admin', 'permissões', 'operador'],
    content: `
# Como dar OP para um jogador no meu servidor?

Dar **OP** (Operador) a um jogador permite que ele use comandos administrativos dentro do jogo, como /gamemode, /time set, /tp, entre outros.

## ⚠️ Atenção Importante

**Dê OP apenas para pessoas de confiança**:
- Um jogador com OP tem **acesso total** aos comandos do servidor
- Pode alterar configurações do jogo
- Pode modificar o mundo
- Pode moderar outros jogadores

## 🧾 Passo a Passo para Dar OP

### Método 1: Via Terminal (Painel)

#### 1. Acesse o Painel da PixelHost

- URL: [painel.pixelhostbr.com](https://painel.pixelhostbr.com)
- Faça login com suas credenciais

#### 2. Selecione seu Servidor

- Clique no nome do seu servidor
- Aguarde carregar as informações

#### 3. Abra o Terminal

- Vá até a aba lateral chamada **"Terminal"**
- Ou abra o **"Console"**
- Aguarde carregar o terminal

#### 4. Digite o Comando

No campo de comandos, digite:
\`\`\`
op NOME_DO_JOGADOR
\`\`\`

**Exemplo**:
\`\`\`
op SteveBR
\`\`\`

Outros exemplos:
- \`op Player123\`
- \`op Admin\`
- \`op Moderador\`

#### 5. Execute o Comando

- Pressione **Enter** ou clique no botão de enviar
- Aguarde confirmação

#### 6. Confirmação

Você verá uma mensagem:
\`\`\`
Made Player123 a server operator
\`\`\`

## 🎮 Pronto!

Agora esse jogador terá permissões de administrador dentro do jogo!

## 📋 Métodos Alternativos

### Método 2: Via In-Game

Se você já é OP e está no jogo:

1. Abra o **chat** no jogo
2. Digite: \`/op NOME_DO_JOGADOR\`
3. Pressione Enter
4. Pronto! Jogador recebe OP

### Método 3: Via Arquivo op.json

**Avançado**:

1. Acesse **Files** no painel
2. Procure arquivo **op.json**
3. Adicione configuração:
\`\`\`json
{
  "uuid": "UUID_DO_JOGADOR",
  "name": "NOME_DO_JOGADOR",
  "level": 4,
  "bypassesPlayerLimit": false
}
\`\`\`
4. Salve e reinicie servidor

## 🔧 O Que o OP Pode Fazer?

### Comandos Administrativos

Com OP, o jogador pode usar:

- **\`/gamemode\`**: Mudar modo de jogo
- **\`/tp\`**: Teleportar
- **\`/give\`**: Dar itens
- **\`/time set\`**: Alterar hora
- **\`/weather\`**: Mudar clima
- **\`/ban\`**: Banir jogadores
- **\`/kick\`**: Expulsar jogadores
- **\`/op\`**: Dar OP para outros
- E muito mais!

### Níveis de OP

- **Level 0**: Sem permissões especiais
- **Level 1**: Comandos básicos
- **Level 2**: Comandos intermediários
- **Level 3**: Comandos avançados
- **Level 4**: **Todos os comandos** (padrão)

## ⚙️ Configurações Avance

### Alterar Nível de OP

Para mudar nível de permissões:

\`\`\`
op NOME_DO_JOGADOR NÍVEL
\`\`\`

**Exemplos**:
- \`op Player123 1\` - Level 1
- \`op Player123 4\` - Level 4 (máximo)

### Ver Quem Tem OP

Para listar todos os OPs:

\`\`\`
op list
\`\`\`

Ou:

\`\`\`
ops
\`\`\`

### Remover OP

Para remover permissões de OP:

\`\`\`
deop NOME_DO_JOGADOR
\`\`\`

Ou:

\`\`\`
de-op NOME_DO_JOGADOR
\`\`\`

## 🛡️ Segurança e Boas Práticas

### Dicas Importantes

**✅ Boas Práticas**:
- Dê OP **apenas para confiança**
- Use sistema de ranks/perms (LuckPerms)
- Documente quem tem OP
- Revise permissões regularmente

**❌ Evite**:
- Dar OP sem necessidade
- OP em nível 4 para todos
- Não revisar quem tem OP
- Confiar cegamente

### Sistema de Permissões Alternativo

**Recomendado**: Use **LuckPerms**

Ao invés de OP, use grupos:

\`\`\`
/lp group admin permission set * true
/lp user Player123 group set admin
\`\`\`

**Vantagens**:
- ✅ Controle granular
- ✅ Permissões específicas
- ✅ Melhor gestão
- ✅ Logs de ações

## 🔍 Troubleshooting

### Problema: Comando não funciona

**Causa**: Você não tem OP ou não é owner

**Solução**:
1. Confirme que você é OP
2. Verifique ortografia do nome
3. Jogador deve estar online (algumas vezes)
4. Tente via painel diretamente

### Problema: OP não funciona no jogo

**Causa**: Relog necessário ou permissão

**Solução**:
1. Peça jogador fazer relog
2. Confirme comando digitado certo
3. Verifique se servidor aceita
4. Veja logs de erro

### Problema: Jogador não aparece como OP

**Causa**: Nome incorreto ou UUID errado

**Solução**:
1. Verifique nome exato
2. Confirme UUID correto
3. Use /op list para ver
4. Teste com outro nome

## 📋 Comandos Úteis

### Comandos de Administração

\`\`\`
/op <player> [level]       - Dar OP
/deop <player>             - Remover OP
/op list                   - Listar OPs
/gamemode <mode>           - Mudar modo
/tp <player1> <player2>    - Teleportar
/give <player> <item>      - Dar item
/time set <value>          - Alterar hora
/weather <type>            - Mudar clima
/ban <player>              - Banir
/kick <player>             - Expulsar
/whitelist add <player>    - Adicionar whitelist
\`\`\`

## 💡 Dicas Importantes

### Quando Dar OP

**Situações apropriadas**:
- ✅ Para moderadores
- ✅ Para administradores
- ✅ Para builders confiáveis
- ✅ Para desenvolvedores
- ✅ Para testes

**Situações para evitar**:
- ❌ Para jogadores comuns
- ❌ Sem conhecimento do jogador
- ❌ "Apenas para testar"
- ❌ Permanentemente desnecessário

### Gestão de OP

**Documente**:
- Quem tem OP
- Quando foi dado
- Por que foi dado
- Quando revogar

**Revise**:
- Regularmente (mensal)
- Após incidentes
- Quando jogador sair
- Quando suspeito

## 📞 Precisa de Ajuda?

Nossa equipe está pronta para ajudar!
- **Chat 24/7**: No site
- **WhatsApp**: (79) 99934-7948
- **Discord**: [discord.gg/BBAPJyKUw7](https://discord.gg/BBAPJyKUw7)

## 📝 Resumo Rápido

### Via Painel
1. Acesse **Terminal** ou **Console**
2. Digite: \`op NOME_DO_JOGADOR\`
3. Pressione **Enter**
4. Confirme mensagem

### Via Jogo
1. Abra chat
2. Digite: \`/op NOME_DO_JOGADOR\`
3. Pressione **Enter**
4. Pronto!

### Remover OP
\`\`\`
deop NOME_DO_JOGADOR
\`\`\`

**Importante**: Dê OP apenas para jogadores de confiança que realmente precisam de permissões administrativas!
    `
  },
  {
    id: 'minecraft-whitelist',
    title: 'Como ativar e configurar a Whitelist?',
    description: 'Guia completo para ativar whitelist e controlar quem pode acessar seu servidor Minecraft',
    category: 'minecraft',
    tags: ['minecraft', 'whitelist', 'privado', 'controle'],
    content: `
# Como ativar e configurar a Whitelist?

A Whitelist serve para bloquear o acesso ao servidor para qualquer jogador que não esteja na lista de autorizados. Ideal para servidores privados ou entre amigos.

## ✅ Ativando a Whitelist

### Passo a Passo

#### 1. Acesse o Painel da PixelHost

- URL: [painel.pixelhostbr.com](https://painel.pixelhostbr.com)
- Faça login com suas credenciais

#### 2. Selecione seu Servidor

- Clique no nome do seu servidor
- Aguarde carregar as informações

#### 3. Abra o Terminal

- Vá até a aba lateral chamada **"Terminal"**
- Ou acesse o **"Console"**
- Aguarde carregar

#### 4. Ative a Whitelist

Digite o comando:
\`\`\`
whitelist on
\`\`\`

#### 5. Execute

- Pressione **Enter** ou clique em enviar
- Pronto! Whitelist ativada

## ➕ Adicionando Jogadores à Whitelist

### No Console

No mesmo console, digite:

\`\`\`
whitelist add NOME_DO_JOGADOR
\`\`\`

**Exemplo**:
\`\`\`
whitelist add SteveBR
\`\`\`

Outros exemplos:
- \`whitelist add Player123\`
- \`whitelist add Admin\`
- \`whitelist add Amigo1\`

### Adicionar Múltiplos Jogadores

Para adicionar vários de uma vez:

\`\`\`
whitelist add Player1 Player2 Player3
\`\`\`

### Via Arquivo whitelist.json

**Método Alternativo**:

1. Acesse **Files** no painel
2. Procure arquivo **whitelist.json**
3. Adicione jogador:
\`\`\`json
{
  "uuid": "UUID_DO_JOGADOR",
  "name": "NOME_DO_JOGADOR"
}
\`\`\`
4. Salve e reinicie servidor

## ➖ Removendo Jogadores da Whitelist

Se quiser tirar alguém da lista, use:

\`\`\`
whitelist remove NOME_DO_JOGADOR
\`\`\`

**Exemplo**:
\`\`\`
whitelist remove Player123
\`\`\`

### Remover Múltiplos

\`\`\`
whitelist remove Player1 Player2
\`\`\`

## ❌ Desativando a Whitelist

Caso queira liberar o servidor novamente para todos os jogadores:

\`\`\`
whitelist off
\`\`\`

Pronto! Agora você tem controle total sobre quem entra no seu servidor da PixelHost.

## 📋 Comandos Completos de Whitelist

### Gerenciamento Básico

\`\`\`
whitelist on                    - Ativar whitelist
whitelist off                   - Desativar whitelist
whitelist add <player>          - Adicionar jogador
whitelist remove <player>       - Remover jogador
whitelist list                  - Listar todos
whitelist reload                - Recarregar lista
\`\`\`

### Visualizar Lista

Para ver quem está na whitelist:

\`\`\`
whitelist list
\`\`\`

Retorna:
\`\`\`
There are X whitelisted players:
- Player1
- Player2
- Player3
\`\`\`

### Recarregar Whitelist

Se modificou arquivo manualmente:

\`\`\`
whitelist reload
\`\`\`

## ⚙️ Configurações Avançadas

### Ativar Automaticamente

Edite **server.properties**:

\`\`\`
white-list=true
enforce-whitelist=true
\`\`\`

**Explicação**:
- \`white-list=true\`: Ativa whitelist
- \`enforce-whitelist=true\`: Força whitelist sempre ativa

### Manter Servidor Público Temporariamente

Para permitir todos temporariamente:

\`\`\`
whitelist off
\`\`\`

Quando quiser proteger novamente:

\`\`\`
whitelist on
\`\`\`

## 🎯 Quando Usar Whitelist?

### Situações Ideais

**✅ Use Whitelist para**:
- Servidores privados entre amigos
- Servidores de teste
- Eventos exclusivos
- Proteção contra griefing
- Controle de acesso

**❌ Não use Whitelist para**:
- Servidores públicos abertos
- Servidores com muitos players
- Servidores competitivos grandes

### Vantagens

- ✅ **Segurança**: Apenas pessoas autorizadas
- ✅ **Controle**: Você decide quem entra
- ✅ **Proteção**: Reduz griefing e trolling
- ✅ **Personalização**: Servidor exclusivo

### Desvantagens

- ❌ **Menos players**: Crescimento limitado
- ❌ **Manutenção**: Precisa adicionar manualmente
- ❌ **Gerenciamento**: Mais trabalho admin

## 🔐 Boas Práticas

### Gerenciamento

**✅ Recomendações**:
- Mantenha lista atualizada
- Documente quem adicionou
- Revise regularmente
- Comunique mudanças

**📋 Organização**:
- Use comandos de lista
- Exporte whitelist.json (backup)
- Mantenha registro de adições

### Segurança

**🛡️ Dicas**:
- Adicione apenas jogadores confiáveis
- Verifique identidade antes
- Use sistema de convite
- Monitore acesso

## 📝 Troubleshooting

### Problema: Jogador não consegue entrar

**Causa**: Jogador não está na whitelist

**Solução**:
1. Verifique com \`whitelist list\`
2. Confirme nome correto
3. Adicione com \`whitelist add\`
4. Teste conexão

### Problema: Whitelist não funciona

**Causa**: Configuração incorreta

**Solução**:
1. Verifique server.properties
2. Confirme \`white-list=true\`
3. Digite \`whitelist on\`
4. Reinicie servidor

### Problema: Todos entram mesmo com whitelist ativa

**Causa**: \`enforce-whitelist=false\`

**Solução**:
1. Edite server.properties
2. \`enforce-whitelist=true\`
3. Digite \`whitelist reload\`
4. Teste

## 🎮 Alternativas

### Sistema de Convite

Use plugins:
- **InviteSystem**: Sistema de convites
- **MyCommand**: Comandos customizados
- **EssentialsX**: Módulo de invites

### Combinação com OP

Para admins entrarem sempre:

1. Dê OP para você
2. Use \`op bypassesPlayerLimit=true\`
3. Será ignorado pela whitelist

## 📞 Precisa de Ajuda?

Nossa equipe está pronta para ajudar!
- **Chat 24/7**: No site
- **WhatsApp**: (79) 99934-7948
- **Discord**: [discord.gg/BBAPJyKUw7](https://discord.gg/BBAPJyKUw7)

## 📝 Resumo Rápido

### Ativar
\`\`\`
whitelist on
\`\`\`

### Adicionar
\`\`\`
whitelist add NOME_DO_JOGADOR
\`\`\`

### Remover
\`\`\`
whitelist remove NOME_DO_JOGADOR
\`\`\`

### Desativar
\`\`\`
whitelist off
\`\`\`

### Listar
\`\`\`
whitelist list
\`\`\`

**Dica**: Mantenha a whitelist organizada e revisada regularmente para garantir que apenas as pessoas certas tenham acesso ao seu servidor!
    `
  },
  {
    id: 'minecraft-change-gamemode',
    title: 'Como mudar o modo de jogo no servidor?',
    description: 'Guia completo para alterar o modo de jogo de jogadores e configurar o modo padrão do servidor',
    category: 'minecraft',
    tags: ['minecraft', 'gamemode', 'survival', 'creative', 'configuração'],
    content: `
# Como mudar o modo de jogo no servidor?

## 🕹️ Mudando via Comando no Terminal

### Passo a Passo

#### 1. Acesse o Painel da PixelHost

- URL: [painel.pixelhostbr.com](https://painel.pixelhostbr.com)
- Faça login com suas credenciais

#### 2. Selecione seu Servidor

- Clique no nome do seu servidor
- Aguarde carregar as informações

#### 3. Abra o Terminal

- Vá até o menu lateral **"Terminal"**
- Ou acesse o **"Console"**
- Aguarde carregar

#### 4. Digite o Comando

Digite o comando abaixo, substituindo pelo nome do jogador e modo desejado:

\`\`\`
gamemode creative NOME_DO_JOGADOR
\`\`\`

**Exemplo**:
\`\`\`
gamemode creative SteveBR
\`\`\`

### Modos Disponíveis

| Modo | Comando | Descrição |
|------|---------|-----------|
| **Survival** | \`survival\` ou \`0\` | Modo sobrevivência padrão |
| **Creative** | \`creative\` ou \`1\` | Modo criativo, voo e recursos infinitos |
| **Adventure** | \`adventure\` ou \`2\` | Aventura, sem quebrar blocos |
| **Spectator** | \`spectator\` ou \`3\` | Espectador, voa e atravessa blocos |

### Sintaxe dos Comandos

**Formas de Usar**:
\`\`\`
gamemode <mode> [player]
gamemode <mode> <player>
\`\`\`

**Exemplos**:
- \`gamemode creative Player123\`
- \`gamemode 1 SteveBR\`
- \`gamemode survival Admin\`
- \`gamemode adventure TestPlayer\`

### Mudando Vários Jogadores

Para mudar múltiplos players:
\`\`\`
gamemode creative Player1 Player2 Player3
\`\`\`

### Mudando para Você Mesmo

Se você é OP no servidor:
- Digite: \`gamemode creative\` (sem nome)
- Você será colocado em creative

## 🔧 Mudando o Modo Padrão do Servidor

Se quiser que todos os jogadores entrem já no modo escolhido:

### Passo a Passo

#### 1. Acesse o Gerenciador de Arquivos

- Vá até a aba **"Files"**
- Aguarde carregar arquivos

#### 2. Abra server.properties

- Procure e clique no arquivo **server.properties**
- O arquivo abrirá para edição

#### 3. Localize a Configuração

Localize a linha:

\`\`\`
gamemode=survival
\`\`\`

#### 4. Altere para o Modo Desejado

**Survival** (padrão):
\`\`\`
gamemode=survival
\`\`\`

**Creative**:
\`\`\`
gamemode=creative
\`\`\`

**Adventure**:
\`\`\`
gamemode=adventure
\`\`\`

**Spectator**:
\`\`\`
gamemode=spectator
\`\`\`

#### 5. Salve as Alterações

- Clique em **"Save Content"** ou **"Salvar"**
- Aguarde confirmação

#### 6. Reinicie seu Servidor

- Vá em **"Console"**
- Clique em **"Stop"** ou **"Stop"**
- Aguarde parar completamente
- Clique em **"Start"** ou **"Play ▶️"**
- Aguarde iniciar

## 🎮 Descrição dos Modos

### Survival (Sobrevivência)

**Características**:
- ✅ Resspawns com droppdo de itens
- ✅ Precisar de comida
- ✅ Recursos limitados
- ✅ Inimigos aparecem
- ✅ Dano de queda
- ❌ Não voa
- ❌ Death penalty

**Ideal para**: Jogadores casuais, aventura, construção com desafio

### Creative (Criativo)

**Características**:
- ✅ Voo ilimitado
- ✅ Recursos infinitos
- ✅ Invulnerável
- ✅ Sem fome
- ✅ Pode quebrar qualquer bloco
- ❌ Sem survival challenges

**Ideal para**: Builders, construtores, criação de mapas

### Adventure (Aventura)

**Características**:
- ✅ Não pode quebrar blocos
- ✅ Usa ferramentas apropriadas
- ✅ Respeita permissões
- ✅ Inimigos aparecem
- ✅ Dano funciona

**Ideal para**: Mapas customizados, puzzles, adventures

### Spectator (Espectador)

**Características**:
- ✅ Voa livremente
- ✅ Atravessa blocos
- ✅ Vê através de entidades
- ✅ Invisível
- ✅ Não pode interagir

**Ideal para**: Observar, filmar, eventos

## ⚙️ Configurações Adicionais

### Forçar Modo de Jogo

Para todos sempre entrarem no modo configurado:

Edite **server.properties**:
\`\`\`
gamemode=creative
force-gamemode=true
\`\`\`

**O que faz**:
- \`force-gamemode=true\`: Força jogadores ao modo padrão
- Não podem mudar de modo
- Auto-corrige para modo padrão

### Permitir Mudança de Modo

Para permitir mudanças:

\`\`\`
force-gamemode=false
\`\`\`

**Resultado**:
- Jogadores podem mudar de modo
- Se têm permissão (/gamemode)
- Mais flexibilidade

## 📋 Comandos Úteis Relacionados

### Ver Modo Atual

Para ver seu modo atual:
\`\`\`
/gamemode
\`\`\`

### Listar Modos Disponíveis

Digite no console:
\`\`\`
help gamemode
\`\`\`

### Mudar Para Outro Jogador

Como admin:
\`\`\`
gamemode creative @SteveBR
\`\`\`

### Mudar Vários ao Mesmo Tempo

\`\`\`
gamemode creative @a
\`\`\`
(Todos os jogadores)

\`\`\`
gamemode creative @e[type=player]
\`\`\`
(Todos players conectados)

## 🎯 Dicas de Uso

### Para Servidores

**Servidor Survival**:
- \`gamemode=survival\`
- \`force-gamemode=false\`
- Permite diversidade

**Servidor Creative**:
- \`gamemode=creative\`
- \`force-gamemode=true\`
- Foco em construção

**Servidor Híbrido**:
- \`gamemode=survival\`
- \`force-gamemode=false\`
- Deixe players escolherem

### Gerenciamento

**Builders**:
- Dê creative temporariamente
- Para construções grandes
- Revenja para survival depois

**Eventos**:
- Use spectator para organizadores
- Crie áreas adventure
- Mix de modos criativo

### Segurança

**Evite**:
- ❌ Creative para todos permanentemente
- ❌ Sem controle de modo
- ❌ Permissões muito permissivas

**Prefira**:
- ✅ Survival como padrão
- ✅ Creative sob permissão
- ✅ Monitoramento de mudanças

## ⚠️ Troubleshooting

### Problema: Comando não funciona

**Causa**: Sem permissão ou OP

**Solução**:
1. Verifique se você é OP
2. Confirme nome correto do jogador
3. Use console do painel

### Problema: Modo não muda

**Causa**: force-gamemode ativado

**Solução**:
1. Edite server.properties
2. \`force-gamemode=false\`
3. Reinicie servidor
4. Tente novamente

### Problema: Todos mudam de modo sozinho

**Causa**: force-gamemode=true

**Solução**:
- Normal e esperado
- Todos voltam ao padrão
- Para permitir mudanças: force-gamemode=false

## 📞 Precisa de Ajuda?

Nossa equipe está pronta para ajudar!
- **Chat 24/7**: No site
- **WhatsApp**: (79) 99934-7948
- **Discord**: [discord.gg/BBAPJyKUw7](https://discord.gg/BBAPJyKUw7)

## 📝 Resumo Rápido

### Mudar Modo de Um Jogador
\`\`\`
gamemode creative NOME_DO_JOGADOR
\`\`\`

### Modos Disponíveis
- \`survival\` ou \`0\` - Sobrevivência
- \`creative\` ou \`1\` - Criativo
- \`adventure\` ou \`2\` - Aventura
- \`spectator\` ou \`3\` - Espectador

### Modo Padrão do Servidor
1. Files → **server.properties**
2. Altere: \`gamemode=creative\`
3. Save e reinicie
4. Pronto!

**Dica**: Use creative para builders temporariamente e survival para jogadores normais mantendo o equilíbrio do servidor!
    `
  },
  {
    id: 'minecraft-enable-commands',
    title: 'Como ativar comandos no servidor?',
    description: 'Guia para habilitar comandos e command blocks no seu servidor Minecraft',
    category: 'minecraft',
    tags: ['minecraft', 'comandos', 'cheats', 'command-block'],
    content: `
# Como ativar comandos no servidor?

Se você não consegue usar comandos dentro do jogo, é possível que eles estejam desativados no servidor.

## ✅ Ativando os Comandos (Cheats)

### Passo a Passo

#### 1. Acesse o Painel da PixelHost

- URL: [painel.pixelhostbr.com](https://painel.pixelhostbr.com)
- Faça login com suas credenciais

#### 2. Selecione seu Servidor

- Clique no nome do seu servidor
- Aguarde carregar as informações

#### 3. Vá até a Aba Files

- No menu lateral, clique em **"Files"**
- Aguarde carregar a lista de arquivos

#### 4. Abra o Arquivo server.properties

- Procure e clique no arquivo **server.properties**
- O arquivo abrirá para edição

#### 5. Localize a Configuração

Procure a linha:

\`\`\`
enable-command-block=false
\`\`\`

**Importante**: Esta linha pode não existir por padrão. Se não existir, adicione.

#### 6. Altere para True

Altere para:

\`\`\`
enable-command-block=true
\`\`\`

#### 7. Salve as Alterações

- Clique em **"Save Content"** ou **"Salvar"**
- Aguarde confirmação

#### 8. Reinicie seu Servidor

- Vá em **"Console"**
- Clique em **"Stop"** se estiver rodando
- Aguarde parar completamente
- Clique em **"Start"** ou **"Play ▶️"**
- Aguarde iniciar

## 💡 Importante

Caso o comando que você queira usar seja de **operador** (como /gamemode), lembre-se de dar **OP** ao jogador com o comando no terminal:

\`\`\`
op NOME_DO_JOGADOR
\`\`\`

**Exemplo**:
\`\`\`
op Player123
\`\`\`

## 📋 Comandos e Permissões

### Tipos de Comandos

**Comandos de Jogador** (não precisam OP):
- \`/help\` - Ajuda
- \`/spawn\` - Ir ao spawn
- \`/home\` - Ir para casa
- \`/warp\` - Teletransporte a warp

**Comandos de Operador** (precisam OP):
- \`/gamemode\` - Mudar modo
- \`/give\` - Dar itens
- \`/tp\` - Teleportar
- \`/ban\` - Banir
- \`/kick\` - Expulsar

### Dar OP para Jogador

**No Console**:
\`\`\`
op NOME_DO_JOGADOR
\`\`\`

**In-Game**:
\`\`\`
/op NOME_DO_JOGADOR
\`\`\`

### Verificar se Você é OP

Digite no jogo:
\`\`\`
/op list
\`\`\`

## ⚙️ Configurações Relacionadas

### server.properties

#### Habilita Command Blocks

\`\`\`
enable-command-block=true
\`\`\`

**O que faz**:
- Permite usar command blocks no mundo
- Permite comandos em blocos
- Comandos digitados ainda precisam OP

#### Força Comandos (Enforce)

\`\`\`
enforce-whitelist=false
enforce-secure-profile=true
\`\`\`

**Configurações de segurança**:
- \`enforce-whitelist\`: Força whitelist
- \`enforce-secure-profile\`: Verifica perfis

### Diferença Entre Cheats e Command Blocks

**enable-command-block=true**:
- ✅ Habilita **command blocks** no mundo
- ✅ Blocos que executam comandos
- ✅ Permite mapas com comandos
- ❌ NÃO habilita comandos no chat

**Comandos no Chat**:
- Sempre funcionam
- Apenas precisam de OP/permissão
- Não precisam de configuração

## 🎮 Como Usar Comandos

### Comandos Básicos Disponíveis

**Todos os Jogadores**:
- \`/help\` - Listar comandos
- \`/list\` - Listar jogadores
- \`/me\` - Ação de roleplay
- \`/msg\` - Mensagem privada

**Se tiver OP**:
- \`/gamemode <mode> [player]\`
- \`/give <player> <item> [amount]\`
- \`/tp <player1> <player2>\`
- \`/time set <value>\`
- \`/weather <type>\`

### Exemplos Práticos

**Mudar para Creative**:
\`\`\`
/gamemode creative
\`\`\`

**Dar 64 Diamantes**:
\`\`\`
/give @p diamond 64
\`\`\`

**Teleportar Jogador**:
\`\`\`
/tp Player1 100 64 200
\`\`\`

**Mudar Hora**:
\`\`\`
/time set noon
\`\`\`

## 🔧 Troubleshooting

### Problema: Comando não funciona

**Causas**:
- Jogador não tem OP
- Comando digitado errado
- Servidor não aceita comando

**Soluções**:
1. Verifique se você é OP: \`/op list\`
2. Confirme comando correto
3. Veja logs de erro
4. Use console do painel

### Problema: Command blocks não funcionam

**Causa**: enable-command-block=false

**Solução**:
1. Edite server.properties
2. \`enable-command-block=true\`
3. Reinicie servidor
4. Teste command block

### Problema: Precisa ser OP para tudo

**Causa**: Sistema de permissões muito restritivo

**Solução**:
- Use plugin de permissões (LuckPerms)
- Configure permissões específicas
- Dê permissões por comando

## 📋 Comandos Mais Úteis

### Administração

\`\`\`
/op <player>               - Dar OP
/deop <player>             - Remover OP
/whitelist add <player>     - Adicionar whitelist
/ban <player> [reason]      - Banir jogador
/kick <player> [reason]    - Expulsar jogador
\`\`\`

### Mundo

\`\`\`
/gamemode <mode> [player]  - Mudar modo
/tp <player1> <player2>     - Teleportar
/time set <value>          - Alterar hora
/weather <type>            - Mudar clima
/difficulty <level>        - Mudar dificuldade
\`\`\`

### Itens

\`\`\`
/give <player> <item>       - Dar item
/clear <player> [item]      - Limpar inventário
/enchant <player> <enchant> - Encantar item
\`\`\`

### Úteis

\`\`\`
/spawn                      - Ir ao spawn
/home                       - Ir para casa
/sethome                    - Definir casa
/back                       - Voltar
\`\`\`

## 🛡️ Segurança

### Boas Práticas

**✅ Recomendações**:
- Use OP apenas para admins
- Configure permissões específicas
- Monitore comandos usados
- Documente permissões

**❌ Evite**:
- Dar OP para todos
- Permissões muito amplas
- Sem monitoramento
- Comandos destrutivos

### Plugins de Permissões

**LuckPerms**:
\`\`\`
/lp user <player> permission set minecraft.command.gamemode true
\`\`\`

**Vantagens**:
- Controle granular
- Permissões por comando
- Logs de ações
- Grupos hierárquicos

## 💡 Dicas Importantes

### Comandos vs. Permissões

- **Command blocks**: Arquivos do mundo
- **Comandos de chat**: Sempre funcionam
- **Permissões**: Controla acesso
- **OP**: Acesso completo

### Melhores Práticas

**Organização**:
- Use ranks/permissões ao invés de OP
- Configure grupos hierárquicos
- Documente comandos permitidos
- Revise permissões regularmente

**Segurança**:
- Limite acesso a comandos destrutivos
- Use whitelist quando necessário
- Monitore uso de comandos
- Faça backups regulares

## 📞 Precisa de Ajuda?

Nossa equipe está pronta para ajudar!
- **Chat 24/7**: No site
- **WhatsApp**: (79) 99934-7948
- **Discord**: [discord.gg/BBAPJyKUw7](https://discord.gg/BBAPJyKUw7)

## 📝 Resumo Rápido

### Ativar Command Blocks
1. Files → **server.properties**
2. Altere: \`enable-command-block=true\`
3. Save e reinicie

### Dar Permissões
\`\`\`
op NOME_DO_JOGADOR
\`\`\`

### Usar Comando
Digite no chat: \`/comando\`

**Lembre-se**: Comandos de administrador precisam de OP, command blocks precisam estar habilitados!
    `
  },
  {
    id: "minecraft-difficulty-change",
    title: "Como mudar a dificuldade do servidor?",
    description: "Guia para alterar o nível de dificuldade do seu servidor Minecraft pelo console ou arquivo.",
    category: "minecraft",
    tags: ["minecraft", "dificuldade", "server.properties", "console", "configuração"],
    content: 
  "🟢  Opções de dificuldade\n\
  Você pode alterar a dificuldade do seu servidor entre as opções:\n\
  - Peaceful (Pacífica)\n\
  - Easy (Fácil)\n\
  - Normal (Normal)\n\
  - Hard (Difícil)\n\
  Cada nível modifica o comportamento dos mobs, o dano causado e como a fome afeta o jogador.\n\
  \n\
  🧾  Método 1 – Mudando pelo console\n\
  1. Acesse o painel da PixelHost\n\
  2. Vá até a aba lateral Terminal\n\
  3. Digite o comando:\n\
     difficulty normal\n\
     (substitua por: peaceful, easy, normal ou hard)\n\
  4. Pressione Enter\n\
  5. 🔄 Reinicie o servidor\n\
  \n\
  🛠️  Método 2 – Mudando no arquivo de configuração\n\
  1. Vá até a aba Files\n\
  2. Abra o arquivo chamado server.properties\n\
  3. Localize a linha:\n\
     difficulty=easy\n\
  4. Altere para um dos valores:\n\
     0 = Peaceful\n\
     1 = Easy\n\
     2 = Normal\n\
     3 = Hard\n\
     Exemplo:\n\
     difficulty=3\n\
  5. Clique em Save Content\n\
  6. 🔄 Reinicie o servidor\n"
  }, 
  {
    id: "minecraft-enable-coordinates",
    title: "Como ativar coordenadas no Minecraft?",
    description: "Aprenda como exibir as coordenadas na tela, seja no Minecraft Java ou Bedrock.",
    category: "minecraft",
    tags: ["minecraft", "coordenadas", "localização", "comandos", "bedrock", "java"],
    content: 
  "🧭  O que são coordenadas?\n\
  As coordenadas ajudam você a se localizar no mundo. Elas mostram sua posição nos eixos X (leste-oeste), Y (altura) e Z (norte-sul).\n\
  \n\
  💻  Método para Minecraft Java\n\
  1. Dentro do jogo, pressione a tecla F3 do teclado.\n\
  2. As coordenadas aparecem no canto superior esquerdo da tela, identificadas como X, Y e Z.\n\
  3. Para esconder, pressione F3 novamente.\n\
  \n\
  📜  Método para Minecraft Bedrock (e ativar no servidor)\n\
  1. No painel da PixelHost, vá até o Terminal.\n\
  2. Digite o comando:\n\
     gamerule showCoordinates true\n\
  3. Pressione Enter.\n\
  4. Pronto! Todos os jogadores verão as coordenadas no canto da tela durante o jogo.\n"
  }, 
  {
    id: "minecraft-install-modpack",
    title: "Como instalar um Modpack (Forge, Fabric ou NeoForge)?",
    description: "Guia para instalar modpacks completos de CurseForge, Modrinth ou Feed The Beast no seu servidor PixelHost.",
    category: "minecraft",
    tags: ["minecraft", "modpack", "forge", "fabric", "neoforge", "curseforge", "modrinth", "ftb", "instalação"],
    content:
  "🧩  Sobre Modpacks\n\
  Você pode instalar modpacks completos no seu servidor com apenas alguns cliques, seja do CurseForge, Modrinth ou Feed The Beast.\n\
  \n\
  ⚠️  Antes de começar\n\
  Certifique-se de que o Forge, Fabric ou NeoForge já está instalado no seu servidor antes de seguir este processo.\n\
  \n\
  🧭  Passo a passo para instalar modpacks\n\
  1. Acesse o painel da PixelHost.\n\
  2. Clique no seu servidor.\n\
  3. 🚦 Desligue o servidor antes de continuar.\n\
  4. Vá até a aba lateral More (ou Mais).\n\
  5. Clique na opção Modpacks.\n\
  6. Escolha de qual repositório deseja baixar:\n\
     • CurseForge\n\
     • Modrinth\n\
     • Feed The Beast (FTB)\n\
  7. Selecione a versão do Minecraft desejada e o loader correspondente:\n\
     • Forge\n\
     • Fabric\n\
     • NeoForge\n\
  8. Navegue pela lista e selecione o modpack que deseja instalar.\n\
  9. Clique em Install Modpack.\n\
  \n\
  ⏳  Após a instalação\n\
  1. Volte para o terminal.\n\
  2. Aguarde a instalação automática do modpack.\n\
  3. Assim que aparecer a mensagem de servidor pronto, você já pode dar start no servidor normalmente.\n\
  \n\
  ✅  Pronto!\n\
  Seu servidor estará rodando o modpack escolhido.\n"
  }, 
  {
    id: "minecraft-sftp-upload",
    title: "Como enviar arquivos para o servidor via SFTP?",
    description: "Guia para enviar mods, plugins, backups ou mundos personalizados via SFTP usando FileZilla e outros clientes.",
    category: "minecraft",
    tags: ["minecraft", "sftp", "upload", "arquivos", "filezilla", "winSCP", "cyberduck", "mod", "plugin", "backup"],
    content:
  "📦  Para que serve o SFTP?\n\
  Se você precisa enviar arquivos diretamente para seu servidor da PixelHost — como mods, plugins, datapacks, mundos personalizados ou backups — o método mais rápido e completo é usando SFTP (Secure File Transfer Protocol).\n\
  \n\
  🖥️  O que você precisa\n\
  - Um programa cliente de SFTP, como:\n\
    • FileZilla (recomendado)\n\
    • WinSCP (Windows)\n\
    • Cyberduck (Mac)\n\
  - Os dados de acesso ao SFTP (fornecidos no painel da PixelHost)\n\
  \n\
  🧭  Passo a passo com FileZilla\n\
  1. Baixe e instale o FileZilla:\n\
     https://filezilla-project.org/download.php?type=client\n\
  2. Acesse o painel da PixelHost.\n\
  3. Clique no seu servidor.\n\
  4. Você verá as seguintes informações:\n\
     • Endereço do servidor (Host)\n\
     • Usuário (username)\n\
     • Senha (sua senha do painel)\n\
  5. Abra o FileZilla e insira os dados nas caixas superiores:\n\
     - Host → sftp.pixelhost.com\n\
     - Username → (seu nome de usuário)\n\
     - Senha → (sua senha)\n\
  6. Após conectar, do lado direito estão os arquivos do servidor.\n\
  7. Do lado esquerdo, estão os arquivos do seu PC.\n\
  8. Arraste e solte arquivos/pastas para onde desejar:\n\
     • mods → instalar mods\n\
     • plugins → instalar plugins\n\
     • world → enviar mapas\n\
  \n\
  ⚠️  Atenção\n\
  - Envie arquivos .jar, .zip, ou pastas inteiras sem alterar a estrutura original.\n\
  - Após enviar, reinicie o servidor para aplicar as mudanças.\n\
  - Use com o servidor desligado ao enviar mundos ou grandes quantidades de dados.\n"
  },
  {
    id: "minecraft-delete-playerdata",
    title: "Como deletar todos os dados de um player no mundo?",
    description: "Guia para remover completamente os dados de um jogador em mundos Minecraft (inventário, avanços, estatísticas e mais).",
    category: "minecraft",
    tags: ["minecraft", "playerdata", "deletar", "apagar dados", "inventário", "uuid", "avanços", "stats"],
    content:
  "🗂️  Identifique o nome do jogador\n\
  - O nome precisa ser exatamente como está no jogo (diferencia maiúsculas/minúsculas).\n\
  \n\
  🗃️  Acesse os arquivos do servidor\n\
  1. Vá até o Painel da PixelHost.\n\
  2. Clique em \"File Manager\" ou use SFTP (FileZilla/WinSCP).\n\
  3. Navegue até a pasta:\n\
     /world/playerdata/\n\
     *Se o seu mundo tem outro nome (ex: mundo, survival), entre na pasta correspondente.*\n\
  \n\ Delete o arquivo .dat do jogador\n\
  - Localize o arquivo referente ao UUID do jogador (<UUID>.dat).\n\
  - Descubra o UUID em: https://mcuuid.net/\n\
  - Exemplo: a4a7f4bc-xxxx-xxxx-xxxx-xxxxxxxxxxxx.dat\n\
  - Delete o arquivo para remover dados de:\n\
    • Inventário\n\
    • Armadura\n\
    • Ender Chest\n\
    • Local de spawn personalizado\n\
    • Status (vida, XP, efeitos)\n\
  \n\
  📊  (Extra) Apagar estatísticas e avanços\n\
  - Para apagar estatísticas/avanços, navegue para:\n\
    /world/stats/\n\
    /world/advancements/\n\
  - Delete os arquivos .json do UUID do jogador.\n\
  \n\
  🛠️  (Avançado) Limpar baús do mundo\n\
  - Se o jogador deixou itens em baús, use plugins ou ferramentas:\n\
    • CoreProtect: reverte interações se já instalado\n\
    • NBTExplorer: edita blocos e baús offline\n\
    • WorldEdit: substitui baús por ar em uma área\n\
  - ⚠️ Não existe método automático nativo para limpar apenas baús de um jogador, sem logs via plugin.\n"
  },
  {
    id: "minecraft-server-optimization",
    title: "Como otimizar seu servidor?",
    description: "Dicas essenciais e mods recomendados para melhorar performance, reduzir lag e entender as causas dos travamentos em servidores Minecraft PixelHost.",
    category: "minecraft",
    tags: ["minecraft", "otimização", "chunky", "spark", "mods", "performance", "lag", "servidor"],
  
    content:
  "⚡  Principais causas de lag em servidores com mods\n\
  - Mods pesados e mal otimizados\n\
  - Entidades demais (itens dropados, mobs acumulados)\n\
  - Máquinas automáticas e farms exageradas\n\
  - Jogadores espalhados carregando muitos chunks\n\
  - Redstone ativa constantemente\n\
  \n\
  🛠️  Configurações iniciais de otimização\n\
  1. Acesse o painel da PixelHost.\n\
  2. Clique no nome do seu servidor.\n\
  3. No menu lateral, vá em “Files” > “Server properties”.\n\
  4. Ajuste as configurações recomendadas:\n\
     • allow-flight=true\n\
     • max-tick-time=-1\n\
     • view-distance=10 (ou menos, se houver muitos jogadores)\n\
  \n\
  🧩  Instalação do mod Chunky para pré-carregar chunks\n\
  - Baixe o mod Chunky: https://modrinth.com/plugin/chunky\n\
  - Coloque o .jar na pasta mods do seu servidor.\n\
  - Reinicie o servidor com o mod instalado.\n\
  - Use os comandos no console (sem a barra na frente):\n\
     chunky radius 10000\n\
     chunky start\n\
  \n\
  ⚠️ Atenção sobre quantidade de chunks\n\
  O número “10000” é apenas referência. Quanto maior o raio:\n\
  - Mais tempo levará a pré-geração\n\
  - Maior o uso de espaço\n\
  - Exemplo: raio 10000 pode levar ~30 horas!\n\
  Execute a pré-geração enquanto não há jogadores online.\n\
  \n\
  🔧  Mods recomendados para otimizar o servidor\n\
  - Teste mods de otimização um por vez para garantir estabilidade.\n\
  - Recomendações populares:\n\
    • Lithium\n\
    • FerriteCore\n\
    • Starlight\n\
    • ModernFix\n\
    • Embeddium/Xenon\n\
    • Krypton\n\
    • Sodium (Fabric)\n\
    • Noisium\n\
  - Veja coleção oficial: https://modrinth.com/mods?e=server&f=categories:optimization&g=categories:forge\n\
  \n\
  🔍  Encontrando o erro de performance\n\
  - Instale o mod Spark: https://modrinth.com/mod/spark\n\
  - Reinicie e rode o comando:\n\
     spark profiler open\n\
  - Ele gera link com relatório completo do uso de CPU (MSPT > 50ms causa lag, mesmo com 20 TPS).\n\
  - Veja documentação: https://spark.lucko.me/docs/guides/Finding-lag-spikes\n\
  \n\
  🚀  Conclusão\n\
  Se o lag continuar mesmo após otimizações, pode ser algum problema no mapa ou a necessidade de subir para um plano mais potente. Entre em contato com o suporte PixelHost para receber ajuda dedicada e recomendações!\n"
  },
  {
    id: "account-refund-request",
    title: "Como solicitar um reembolso?",
    description: "Passos para iniciar o pedido de reembolso do seu serviço PixelHost, seguindo nossos termos de política.",
    category: "account-billing",
    tags: ["reembolso", "cancelamento", "conta", "plano", "estorno", "serviços"],
    content:
  "💰  Como solicitar um reembolso passo a passo\n\
  1. Acesse sua conta no nosso site com seu login e senha.\n\
  2. No painel, vá até o menu “Serviços” e depois clique em “Meus Serviços”.\n\
  3. Localize o plano que deseja cancelar e clique sobre ele.\n\
  4. Clique no botão “Cancelar”.\n\
  5. Na próxima tela, explique o motivo do cancelamento no campo apropriado.\n\
  6. Escolha o tipo de cancelamento:\n\
     • Imediato: o serviço será encerrado agora e o processo de reembolso iniciado.\n\
     • Ao final do ciclo: o serviço continuará ativo até o fim do período contratado.\n\
  7. Após o envio da solicitação, nossa equipe analisará seu pedido de acordo com os termos de reembolso da PixelHost.\n\
  \n\
  ⚠️  Observações importantes\n\
  - A garantia de reembolso é válida para solicitações dentro do prazo estipulado nos termos de serviço (geralmente até 3 dias após ativação do serviço ou conforme legislação vigente).\n\
  - Se houver quebra dos termos de serviço, abuso ou uso indevido, o reembolso pode ser negado[web:62][web:64].\n\
  - O reembolso será realizado de acordo com o método utilizado no pagamento, conforme regras e prazos da operadora financeira.\n\
  - Consulte a política completa de reembolso da PixelHost para mais detalhes ou entre em contato com o suporte.\n"
  }, 
  {
    id: "account-refund-support",
    title: "Como solicitar um reembolso via suporte?",
    description: "Passo a passo para pedir reembolso pelo Suporte PixelHost, incluindo WhatsApp, Discord e atendimento direto.",
    category: "account-billing",
    tags: ["reembolso", "suporte", "cancelamento", "contato", "estorno", "atendimento"],
    content:
  "🛎️  Como solicitar por atendimento\n\
  1. Acesse nosso site e clique na aba de Suporte.\n\
  2. Envie uma mensagem explicando que deseja o reembolso. Especifique:\n\
     • O plano contratado\n\
     • O motivo do cancelamento\n\
     • Se deseja cancelamento imediato ou ao final do ciclo\n\
  \n\
  ☎️  Outros canais oficiais\n\
  Você também pode solicitar diretamente em:\n\
  - WhatsApp: (79) 99934-7948\n\
  - Discord: acesse nosso servidor e abra um chamado com a equipe\n\
  \n\
  ✅  O que acontece depois?\n\
  Nosso time vai analisar sua solicitação e garantir um processo rápido e transparente, de acordo com a política de reembolso PixelHost.\n\
  Em caso de dúvidas, entre em contato por qualquer canal acima!\n"
  }, 
  {
    id: "account-payment-check",
    title: "Como saber se meu pagamento foi efetuado?",
    description: "Veja como confirmar o status do seu pagamento na PixelHost, recebendo notificações e consultando o painel.",
    category: "account-billing",
    tags: ["pagamento", "status", "confirmação", "painel", "serviços", "recebimento"],
    content:
  "💳  Verificando no painel da PixelHost\n\
  1. Acesse sua conta em nosso site.\n\
  2. Vá até Serviços > Meus Serviços.\n\
  3. Verifique o status do seu plano:\n\
     • Ativo: pagamento confirmado e serviço liberado.\n\
     • Inativo: pagamento não processado ou pendente.\n\
     *(Veja a imagem de exemplo para referência visual.)*\n\
  \n\
  📧  Verificando seu e-mail\n\
  - Você receberá uma mensagem de confirmação com o assunto de ativação do serviço.\n\
  - O e-mail conterá:\n\
     • Confirmação do pagamento\n\
     • Recibo\n\
     • Dados de login do painel de servidores\n\
  - Caso não encontre o e-mail, confira a caixa de spam ou lixeira.\n\
  \n\
  🛎️  Ainda está na dúvida?\n\
  Entre em contato com nosso suporte pelo painel, WhatsApp ou Discord para confirmar o status do pagamento.\n\
  "
  }, 
  {
    id: "account-refund-policy",
    title: "Política de Reembolso",
    description: "Veja como funciona a política de reembolso da PixelHost, requisitos legais e procedimentos para solicitar devolução de valores.",
    category: "account-billing",
    tags: ["política", "reembolso", "cancelamento", "devolução", "termos", "consumidor"],
    content:
  "📜  Condições gerais\n\
  A PixelHost fornece a infraestrutura e disponibilidade do servidor contratado, garantindo o funcionamento da plataforma. Toda configuração interna, instalação de mods, alterações no servidor e gerenciamento de arquivos são responsabilidade exclusiva do cliente.\n\
  ⚠️ A PixelHost não se responsabiliza por reembolsos decorrentes de falhas causadas por má configuração, alterações indevidas ou falta de conhecimento técnico do cliente.\n\
  \n\
  🔹  Garantia de Reembolso — Art. 49 do Código de Defesa do Consumidor\n\
  Conforme o Código de Defesa do Consumidor ([translate:Lei nº 8.078/90]), artigo 49, o cliente tem até 7 dias corridos após a contratação feita de forma remota (internet ou [translate:WhatsApp]) para solicitar o cancelamento e reembolso total.\n\
  • O serviço será encerrado imediatamente após a aprovação do reembolso.\n\
  \n\
  💬  Como solicitar o reembolso\n\
  Abra um ticket no setor Financeiro informando:\n\
  - Nome completo\n\
  - CPF ou [translate:CNPJ]\n\
  - E-mail de cadastro\n\
  - Motivo do cancelamento\n\
  - Dados para reembolso (chave [translate:Pix] ou conta bancária)\n\
  Após aprovação, a PixelHost enviará um Termo de Reembolso para formalização.\n\
  \n\
  ⏳  Prazo para devolução\n\
  Após o termo assinado, o valor será devolvido em até 5 dias úteis, via [translate:Pix] ou transferência bancária, somente para o titular da conta original.\n\
  \n\
  ⛔  Casos onde o reembolso NÃO se aplica\n\
  - Planos utilizados por mais de 7 dias\n\
  - Descumprimento dos nossos Termos de Uso\n\
  - Requisições por fora dos canais oficiais (ex: disputa na operadora de cartão)\n\
  - Atividades proibidas (spam, bots, ataques, etc.)\n\
  - Planos gratuitos, bônus, créditos de cortesia\n\
  - Falhas causadas por configurações do cliente (mods, alterações, backups etc.)\n\
  \n\
  🗑️  Cancelamento e exclusão do serviço\n\
  Após aprovação do reembolso, o servidor será encerrado imediatamente e todos os arquivos e backups serão excluídos sem possibilidade de recuperação.\n\
  \n\
  📆  Reembolso proporcional (casos técnicos)\n\
  Em casos raros de instabilidade grave sem resolução em até 48h, pode ser solicitado reembolso proporcional dos dias não utilizados. Cada caso será analisado individualmente.\n\
  \n\
  📝  Confirmação e encerramento\n\
  Todo reembolso exige assinatura de Termo de Reembolso para formalizar a operação, encerrar a relação e confirmar os dados bancários.\n\
  \n\
  ❓  Dúvidas\n\
  Fale com nosso time pelo painel ou [translate:WhatsApp]: (79) 99934-7948 para esclarecimentos.\n"
  },
  {
    id: "palworld-xbox-gamepass-access",
    title: "Como ativar o acesso dos usuários de Gamepass (Xbox)",
    description: "Guia para liberar e configurar seu servidor Palworld para permitir conexões de jogadores no Xbox Gamepass e Windows PC da Microsoft Store.",
    category: "palworld",
    tags: ["palworld", "xbox", "gamepass", "servidores", "configuração", "crossplay"],
    content:
  "🎮  Ativando o acesso Xbox/Gamepass\n\
  Servidores configurados com este método aceitam jogadores das versões:\n\
  • Xbox Series X\n\
  • Xbox Series S\n\
  • Xbox One\n\
  • Windows PC (Microsoft Store/Gamepass)\n\
  \n\
  ⚠️  Limitações do cross-play\n\
  • Cross-play com a versão Steam NÃO é possível neste momento.\n\
  \n\
  🛠️  Passo a passo de configuração\n\
  1. Desligue o servidor antes de qualquer alteração.\n\
  2. Vá até “Configurações”.\n\
  3. Abra o arquivo principal de configuração:\n\
     /Pal/Saved/Config/WindowsServer/PalWorldSettings.ini  *(caminho exato pode variar em outras hosts ou Linux)*\n\
  4. Cole esta linha ao final do arquivo:\n\
     [/Script/Pal.PalGameWorldSettings]\n\
     OptionSettings=(AllowConnectPlatform=Xbox)\n\
  5. Salve e feche o arquivo.\n\
  6. Inicie o servidor normalmente.\n\
  \n\
  🚫  Atenção\n\
  • Todas as configurações DEVEM ser salvas com o servidor desligado!\n\
  • Para alterar qualquer outro parâmetro, sempre desligue o servidor antes.\n\
  • Conexão multiplayer só será possível entre plataformas compatíveis.\n"
  },
  {
    id: "palworld-server-password-setup",
    title: "Como definir uma senha de acesso ao servidor de PalWorld",
    description: "Aprenda a configurar uma senha para proteger o acesso ao seu servidor PalWorld e limitar usuários.",
    category: "palworld",
    tags: ["palworld", "servidor", "senha", "proteção", "multiplayer", "acesso"],
    content:  
  "🔒  Passo a passo para definir a senha\n\
  1. Acesse seu painel em https://painel.pixelhostbr.com/\n\
  2. Vá até a aba “Inicialização” no painel.\n\
  3. Localize o campo “Senha do Servidor”.\n\
  4. Digite a senha desejada para o servidor.\n\
  5. Salve as alterações.\n\
  \n\
  ✅  Pronto para usar\n\
  Sua senha já está definida e pode ser compartilhada com os jogadores que você desejar.\n\
  Para acessar o servidor, os jogadores precisarão informar essa senha para entrar.\n"
  },
  {
    id: "palworld-ftp-connection",
    title: "Como conectar via FTP no seu servidor de Palworld",
    description: "Guia rápido para conectar via FTP ao seu servidor Palworld usando Filezilla e gerenciar arquivos facilmente.",
    category: "palworld",
    tags: ["palworld", "ftp", "sftp", "filezilla", "conexão", "servidor", "gerenciar arquivos"],
    content:
  "🔗  Passo a passo para conexão FTP\n\
  1. Baixe o Filezilla no site oficial: https://filezilla-project.org/download.php?type=client\n\
  2. Instale e abra o programa.\n\
  3. Acesse o painel PixelHost e vá até “Informações”.\n\
  4. Copie os dados exibidos em “SFTP DETAILS”.\n\
  \n\
    ⚠️ IMPORTANTE\n\
  A senha do FTP é a MESMA do painel, enviada automaticamente após a confirmação do pagamento.\n\
  \n\
  5. Cole os dados no Filezilla (Host, Usuário, Senha) e clique em conectar.\n\
  \n\
  ✅ Agora você pode editar e gerenciar os arquivos do seu servidor via FTP com facilidade.\n"
  }, 
  {
    id: "palworld-change-server-name",
    title: "Como alterar o nome do seu servidor de Palworld",
    description: "Aprenda a mudar o nome do seu servidor Palworld pelo painel PixelHost, tornando-o facilmente identificável para os jogadores.",
    category: "palworld",
    tags: ["palworld", "servidor", "nome", "alteração", "painel", "multiplayer"],
    content:
  "🖥️  Passo a passo para alterar o nome do servidor\n\
  1. Acesse o Painel em https://painel.pixelhostbr.com/\n\
  2. Vá até a aba \"Inicialização\" no painel.\n\
  3. Localize o campo \"Nome do Servidor\".\n\
  4. Altere para o nome que desejar.\n\
  \n\
  ✅  Finalizando\n\
  Seu servidor estará com o novo nome disponível para uso imediatamente após salvar as alterações.\n\
  Compartilhe o nome com seus jogadores para facilitar o acesso.\n"
  },
  {
    id: "palworld-become-admin",
    title: "Como se tornar administrador no servidor de Palworld",
    description: "Passo a passo para definir a senha de administrador e obter privilégios administrativos no seu servidor Palworld PixelHost.",
    category: "palworld",
    tags: ["palworld", "administrador", "admin", "servidor", "senha", "comando", "painel"],
    content:
  "🔐  Passos para virar administrador\n\
  1. Acesse seu painel em https://painel.pixelhostbr.com/ e certifique-se que o servidor está desligado.\n\
  2. Vá até a aba \"Inicialização\" no painel.\n\
  3. Localize o campo \"Senha de Administrador\".\n\
  4. Altere a senha para a desejada, usando apenas letras minúsculas, sem números ou caracteres especiais.\n\
  \n\
  🎮  Comando para ativar a senha no jogo\n\
  No chat do jogo, digite:\n\
  `/AdminPassword suasenha`\n\
  (Substitua `suasenha` pela senha definida no painel.)\n\
  \n\
  ✅  Pronto!\n\
  Quem digitar essa senha terá acesso aos códigos de administrador no jogo.\n"
  },
  {
    id: "palworld-admin-commands",
    title: "Comandos de administrador do Palworld",
    description: "Principais comandos para gerenciar seu servidor Palworld e moderar jogadores com eficiência.",
    category: "palworld",
    tags: ["palworld", "comandos", "admin", "moderar", "servidor", "itens", "experiência", "jogadores"] ,
    content:
  "🛠️  Comandos principais de administração\n\
  \n\
  🧙‍♂️ Conceder itens a um jogador\n\
  /give [UID/SteamID64] [ItemID] [Quantidade]\n\
  Este comando permite conceder um item específico a um jogador.\n\
  Exemplo: /give 1234567890 1001 10 (Concede 10 unidades do item com ID 1001 ao jogador com UID 1234567890)\n\
  \n\
  🧙‍♀️ Conceder experiência a um jogador\n\
  /give_exp [UID/SteamID64] [Quantidade]\n\
  Este comando adiciona uma quantidade específica de experiência a um jogador.\n\
  Exemplo: /give_exp 1234567890 500 (Concede 500 pontos de experiência ao jogador com UID 1234567890)\n\
  \n\
  🦜 Conceder um Pal a um jogador\n\
  /givepal [UID/SteamID64] [CharacterID] [Nível]\n\
  Este comando concede um Pal específico a um jogador.\n\
  Exemplo: /givepal 1234567890 2001 5 (Concede um Pal com ID 2001 no nível 5 ao jogador com UID 1234567890)\n\
  \n\
  🥚 Conceder um ovo a um jogador\n\
  /giveegg [UID/SteamID64] [Egg_ItemID]\n\
  Este comando concede um ovo contendo um Pal aleatório a um jogador.\n\
  Exemplo: /giveegg 1234567890 3001 (Concede um ovo com ID 3001 ao jogador com UID 1234567890)\n\
  \n\
  ⚙️ Lista de comandos úteis\n\
  /KickPlayer {PlayerUID ou SteamID} - Expulsa o jogador do servidor.\n\
  /ShowPlayers - Mostra informações sobre todos os jogadores conectados.\n\
  /Broadcast {MessageText} - Transmite uma mensagem para todos os jogadores.\n\
  /BanPlayer {PlayerUID ou SteamID} - Bane o jogador do servidor.\n\
  /TeleportToPlayer {PlayerUID ou SteamID} - Teletransporta ao jogador alvo *[apenas no jogo]*.\n\
  /TeleportToMe {PlayerUID ou SteamID} - Teletransporta o jogador alvo até você *[apenas no jogo]*.\n\
  /Info - Mostra informações do servidor.\n\
  /Shutdown {Segundos} {Mensagem} - Encerra o servidor com contagem regressiva.\n\
  /DoExit - Encerra o servidor imediatamente (uso restrito).\n\
  /Save - Salva o estado do mundo, players e dados importantes.\n\
  "
  },
  {
    id: "palworld-ban-kick-player",
    title: "Como banir ou expulsar um jogador no servidor de Palworld",
    description: "Saiba como utilizar comandos de administrador para remover jogadores do seu servidor Palworld por meio do painel PixelHost.",
    category: "palworld",
    tags: ["palworld", "banir", "expulsar", "administrador", "comandos", "servidor", "jogadores"],
    content:
  "🚫  Banindo ou expulsando um jogador do servidor\n\
  \n\
  1️⃣ Após se tornar administrador, pesquise o SteamID do usuário:\n\
  • Digite /ShowPlayers no chat do jogo e pressione Enter.\n\
  • Verifique o resultado no formato: nome, playeruid, steamid. O SteamID é o terceiro campo, composto apenas por números.\n\
  \n\
  2️⃣ Para banir o jogador:\n\
  • Digite no chat do jogo: /BanPlayer (SteamID do usuário, sem parênteses)\n\
  Exemplo: /BanPlayer 1234567890\n\
  \n\
  3️⃣ Para expulsar (kick) o jogador:\n\
  • Digite no chat do jogo: /KickPlayer (SteamID do usuário, sem parênteses)\n\
  Exemplo: /KickPlayer 1234567890\n\
  \n\
  ⚠️ IMPORTANTE:\n\
  - Apenas administradores podem usar esses comandos.\n\
  - O banimento impede o jogador de voltar ao seu servidor até ser desbanido.\n\
  - O comando kick remove o jogador apenas da sessão atual, podendo voltar a qualquer momento.\n"
  },
  {
    id: "palworld-upload-savegame",
    title: "Como enviar um saved game para a host de PalWorld",
    description: "Guia passo a passo para subir e ativar seu save local no servidor PalWorld usando FTPWeb e painel PixelHost.",
    category: "palworld",
    tags: ["palworld", "save", "upload", "ftpweb", "savegame", "painel", "jogo salvo"],
    content:
  "💾  Enviando um save game para seu servidor\n\
  1. Acesse a aba \"FTPWeb\" no painel do usuário: https://painel.pixelhostbr.com/\n\
  2. Siga o diretório: Pal > Saved > Save Games > 0. Você verá uma pasta com vários dígitos.\n\
  3. Delete essa pasta marcando a caixa ao lado e clicando em \"Delete\" no canto inferior direito da página.\n\
  \n\
  📁  Preparando o save no seu computador\n\
  4. No seu PC, pressione Windows + R e digite:\n\
  %localappdata%/PAL/Saved/SaveGames/\n\
  5. Abra a pasta com seu Steam_ID.\n\
     - Para encontrar seu Steam_ID: No jogo, digite /ShowPlayers no chat para ver todos os IDs.\n\
  6. Compacte em .ZIP a pasta do save desejado e copie o nome EXATO da pasta.\n\
  \n\
  🗂️  Subindo e ativando o save no painel\n\
  7. Arraste o arquivo .ZIP para dentro da pasta \"0\" no FTPWeb do painel.\n\
  8. Clique com o botão direito no arquivo ZIP e selecione \"Unarchive\".\n\
  \n\
  ⚙️  Configurando o servidor para reconhecer o save\n\
  9. Volte para \"Save Games\", entre na pasta \"Config\", depois em \"LinuxServer\" e edite \"GameUserSettings.ini\".\n\
  10. Na linha DedicatedServerName=, apague o que estiver depois do = e cole o nome EXATO da pasta do save. Salve!\n\
  \n\
  ✅  Finalizando\n\
  Pronto! Agora seu servidor será iniciado com seu save antigo.\n\
  Se necessário, reinicie o servidor após salvar as alterações para garantir que tudo funcione corretamente.\n"
  }, 
  {
    id: "palworld-change-difficulty",
    title: "Como mudar a dificuldade do servidor de PalWorld",
    description: "Saiba como alterar a dificuldade do seu servidor PalWorld pelo painel PixelHost, ativando Easy, Normal, Hard ou Custom.",
    category: "palworld",
    tags: ["palworld", "dificuldade", "servidor", "configuração", "painel", "ini", "ftpweb"],
    content:
  "🎯  Alterando a dificuldade do servidor\n\
  1. Acesse seu painel de usuário: https://painel.pixelhostbr.com/\n\
  2. Vá até a aba FTPWeb no topo da tela.\n\
  3. Navegue pelos diretórios: Pal > Saved > Config > LinuxServer > PalWorldSettings.ini\n\
  4. Dentro do arquivo, localize a linha “Difficulty=None” e mude “None” para a dificuldade que prefere (Easy, Normal, Hard, Custom).\n\
  \n\
  ⚠️  Arquivo PalWorldSettings.ini vazio?\n\
  5. Abra o arquivo DefaultPalWorldSetting.ini na página inicial da aba FTPWeb.\n\
  6. Copie todo o conteúdo a partir da linha verde até o final.\n\
  7. Cole tudo dentro de PalWorldSettings.ini no diretório mostrado acima.\n\
  8. Salve o progresso em Save Content no canto inferior direito e reinicie o servidor.\n\
  9. Repita a etapa 4 para definir a dificuldade desejada!\n\
  \n\
  ✅  Pronto\n\
  Seu servidor PalWorld agora estará rodando na dificuldade escolhida.\n"
  }, 
  {
    id: "palworld-change-death-penalty",
    title: "Como alterar a penalidade de morte do servidor de Palworld",
    description: "Aprenda a mudar o que acontece com os jogadores ao morrer no servidor PalWorld, configurando para perder tudo, nada, apenas itens ou itens e equipamentos.",
    category: "palworld",
    tags: ["palworld", "penalidade", "morte", "servidor", "configurações", "painel", "ftpweb", "deathpenalty"],
    content:
  "☠️  Como mudar a penalidade de morte\n\
  1. Acesse o painel do usuário em https://painel.pixelhostbr.com/\n\
  2. Vá até a aba \"Configurações\".\n\
  3. Procure por \"PalWorldSettings.ini\" seguindo: Pal > Saved > Config > LinuxServer\n\
  4. Abra o arquivo e utilize CTRL+F para buscar por \"DeathPenalty\". Por padrão: DeathPenalty=All\n\
     - Troque \"All\" pelo valor desejado:\n\
       • All – Perde tudo ao morrer (itens, equipamentos, Pals)\n\
       • ItemAndEquipment – Perde apenas itens e equipamentos\n\
       • Item – Perde apenas itens\n\
       • None – Nenhuma penalidade ao morrer\n\
  \n\
  ⚠️  Arquivo vazio? Siga esses passos:\n\
  5. Abra o arquivo \"DefaultPalWorldSetting.ini\" na página inicial da aba FTPWeb.\n\
  6. Copie todo o conteúdo a partir da linha verde até o fim.\n\
  7. Cole dentro do arquivo PalWorldSettings.ini no diretório mostrado acima.\n\
  8. Salve clicando em Save Content no canto inferior direito e reinicie o servidor.\n\
  9. Agora, repita o passo 4 para ajustar a penalidade de morte conforme desejar!\n\
  \n\
  ✅  Pronto\n\
  Após salvar e reiniciar, seu servidor PalWorld estará com a penalidade de morte definida de acordo com sua preferência.\n"
  },
  {
    id: "palworld-general-settings",
    title: "Configurações gerais do servidor de Palworld",
    description: "Guia prático para ajustar todos os parâmetros do servidor Palworld, usando gerador online e edições via painel PixelHost.",
    category: "palworld",
    tags: ["palworld", "configurações", "ini", "servidor", "painel", "guia", "parâmetros", "advanced"],
    content:
  "⚙️  Como editar as configurações do servidor\n\
  1. Acesse https://pal-conf.bluefissure.com/ para gerar as configurações desejadas de forma fácil e visual.\n\
  2. Configure os parâmetros conforme sua preferência no site, incluindo dificuldade, taxa de spawn de Pal, PvP, etc.\n\
  3. Role para baixo e confira se está em PalWorldSettings.ini; clique em \"Copy\" para copiar o conteúdo gerado.\n\
  \n\
  🖥️  Aplicando as configurações no painel PixelHost\n\
  4. Acesse o painel em https://painel.pixelhostbr.com/ e vá em \"Configurações\".\n\
  5. No painel, desligue o servidor antes de editar qualquer linha (alterações feitas com o servidor ligado podem ser perdidas).\n\
  6. Cole o conteúdo gerado no arquivo PalWorldSettings.ini.\n\
  7. Salve as alterações e reinicie o servidor para aplicar as novas configurações.\n\
  \n\
  📚  Principais parâmetros do PalWorldSettings.ini\n\
  - Difficulty: Ajusta a dificuldade do jogo.\n\
  - DayTimeSpeedRate: Velocidade do tempo durante o dia.\n\
  - NightTimeSpeedRate: Velocidade do tempo durante a noite.\n\
  - ExpRate: Taxa de experiência.\n\
  - PalCaptureRate: Taxa de captura de criaturas Pal.\n\
  - PalSpawnNumRate: Taxa de spawn de creatures Pal.\n\
  - PalDamageRateAttack/Defense: Dano causado/recebido por Pals.\n\
  - PlayerDamageRateAttack/Defense: Dano causado/recebido por jogadores.\n\
  - PlayerStomach/Stamina/AutoHPRegene: Taxas de consumo e regeneração do jogador.\n\
  - PalStomach/Stamina/AutoHPRegene: Taxas equivalentes para criaturas Pal.\n\
  - BuildObjectDamageRate/DeteriorationDamageRate: Dano e deterioração de estruturas.\n\
  - CollectionDropRate/ObjectHpRate/RespawnSpeedRate: Taxas de coleta, saúde e respawn de objetos.\n\
  - EnemyDropItemRate: Taxa de drop de itens de inimigos.\n\
  - DeathPenalty: Penalidade de morte (All, None, Item, ItemAndEquipment).\n\
  - bEnablePlayerToPlayerDamage: Ativa dano entre jogadores.\n\
  - bEnableFriendlyFire: Ativa fogo amigo.\n\
  - bEnableInvaderEnemy: Ativa inimigos invasores.\n\
  - ...\n\
  (Consulte a lista completa para ajustes mais avançados!)\n\
  \n\
  ✅  Pronto\n\
  Seu servidor estará pronto e customizado conforme suas necessidades!\n\
  Consulte regularmente https://pal-conf.bluefissure.com/ para novos parâmetros e atualizações do jogo.\n"
  },
  {
    id: "palworld-server-optimization",
    title: "Como realizar otimizações de performance no seu servidor de Palworld",
    description: "Dicas práticas para reduzir lag, evitar vazamento de memória e melhorar o desempenho do seu servidor Palworld na PixelHost.",
    category: "palworld",
    tags: ["palworld", "otimização", "performance", "vazamento de memória", "configuração", "lag"],
    content:
  "🚀  Otimizações de performance essenciais\n\
  Até o momento (28/01/2024), Palworld e seus servidores estão em beta. Instabilidades e bugs de performance ainda são comuns, mas algumas ações ajudam bastante!\n\
  \n\
  ⚠️  Sobre vazamento de memória\n\
  Um problema recorrente é o consumo excessivo de RAM por vazamento de memória. As situações mais comuns são:\n\
  - Entrando repetidamente em Dungeons\n\
  - Eventos de Raids\n\
  - Pals trabalhando perto da base, movimentando itens e saindo do render\n\
  \n\
  🔧  Como reduzir o consumo de RAM\n\
  1. Acesse o FTP Web e vá até /Pal/Saved/Config/LinuxServer/PalWorldSettings.ini\n\
  2. Defina o parâmetro abaixo para desabilitar invasores no servidor (reduz stress de IA):\n\
  bEnableInvaderEnemy=False\n\
  \n\
  3. Procure pela linha PalSpawnNumRate=1.000000 e ajuste para limitar spawns simultâneos:\n\
  PalSpawnNumRate=0.500000\n\
  \n\
  4. Salve as alterações e reinicie o servidor para aplicar!\n\
  \n\
  💡  Dicas rápidas adicionais\n\
  - Sempre atualize seu servidor para a versão mais recente\n\
  - Evite mods e plugins não testados durante o período beta\n\
  - Se persistirem problemas, considere reiniciar o servidor periodicamente até novas correções dos desenvolvedores\n\
  \n\
  🙌  Agradecimentos\n\
  Agradecimentos especiais ao pessoal da Palbrasil.com pelas dicas compartilhadas à comunidade!\n"
  },
  {
    id: "palworld-update-server",
    title: "Como atualizar o seu servidor de Palworld para versão mais recente",
    description: "Passo a passo seguro para atualizar o servidor Palworld da PixelHost, protegendo seus arquivos, save e configs durante o processo.",
    category: "palworld",
    tags: ["palworld", "atualização", "update", "servidor", "backup", "painel", "reinstalar", "save"],
    content:
  "⬆️  Atualize seu servidor Palworld com segurança\n\
  Se você está recebendo aviso de versão desatualizada ao logar, siga os passos para atualizar o servidor:\n\
  \n\
  1️⃣ Faça backup completo antes de tudo!\n\
  - Acesse o painel PixelHost, vá até a guia “Backups” e crie um backup do seu servidor **com ele desligado**.\n\
  - Faça o download do backup para o seu computador para maior segurança!\n\
  \n\
  2️⃣ Reinicie e reinstale\n\
  - Com os arquivos seguros, vá para a guia “Informações” e clique em “Reinstall Server”.\n\
  - Confirme, sabendo que arquivos antigos podem ser sobrescritos para permitir a atualização.\n\
  - Aguarde a finalização da reinstalação, sem fechar o painel nem interromper o processo.\n\
  \n\
  3️⃣ Observação sobre PalWorldSettings.ini\n\
  - Após reinstalar, um NOVO arquivo PalWorldSettings.ini é criado com as configurações padrão mais recentes.\n\
  - O arquivo de configuração antigo será salvo como PalWorldSettings_(DATA_ATUAL).ini\n\
  - **Não copie o arquivo antigo por cima do novo.** Compare ambos e adapte manualmente suas configurações personalizadas!\n\
  \n\
  💾  Sobre o save do servidor\n\
  - Em raros casos seu save pode não ser carregado automaticamente após o update.\n\
  \n\
  🔄  Por que as configs são resetadas?\n\
  - Novas versões podem trazer opções inéditas e, para evitar erros, a desenvolvedora zera o arquivo base, mantendo um backup das configs antigas para consulta.\n\
  - Por isso sempre confira e ajuste qualquer personalização manualmente após o update!\n\
  \n\
  ✅  Finalizando\n\
  Seu servidor estará atualizado, seguro e pronto para continuar sua aventura em Palworld!\n"
  }, 
  {
    id: "palworld-fix-save-post-update",
    title: "Como corrigir problemas com save após a atualização do servidor de Palworld",
    description: "Soluções e passos detalhados para restaurar saves e configurações após atualizar servidores Palworld na PixelHost.",
    category: "palworld",
    tags: ["palworld", "save", "atualização", "problema", "correção", "servidor", "backup", "configuração"],
    content:
  "🛠️  Restaurando o arquivo PalWorldSettings.ini\n\
  - Você precisará de um backup do arquivo PalWorldSettings.ini, pois a partir de 20/01/2024 ele é apagado pelo SteamCMD automaticamente.\n\
  - Se tiver o backup, substitua o arquivo na pasta para restaurar as configurações.\n\
  \n\
  ⏹️  Parar o servidor\n\
  Antes de qualquer alteração, pare o servidor.\n\
  \n\
  💾  Fazer backup\n\
  - Sempre faça backup antes de modificar o servidor.\n\
  - Use a aba \"Backups\" no painel PixelHost para criar backups rápidos.\n\
  \n\
  📂  Verificar dados salvos no servidor\n\
  - Navegue para /Pal/Saved/SaveGames.\n\
  - Se houver pasta \"0\", ela provavelmente contém os arquivos do servidor.\n\
  - Cada pasta com um nome aleatório é o ID da versão do servidor.\n\
  - Verifique a data para escolher a que deseja restaurar.\n\
  \n\
  ⚙️  Restaurar referência no arquivo de configuração\n\
  - Abra /Pal/Saved/Config/LinuxServer/GameUserSettings.ini\n\
  - Altere DedicateServerName= para o ID escolhido da pasta de save.\n\
  - Salve o arquivo.\n\
  \n\
  🔄  Reinicie o servidor e verifique\n\
  Se não funcionar, repita passos até identificar o ID correto.\n\
  \n\
  🔧  Passo alternativo 1\n\
  - Desligue o servidor.\n\
  - Apague o ID do mapa em GameUserSettings.ini, deixando em branco.\n\
  - Inicie o servidor e crie um novo personagem.\n\
  - Desligue o servidor novamente.\n\
  - Restaure o ID correto no arquivo de configuração.\n\
  - Reinicie o servidor.\n\
  \n\
  🧹  Passo alternativo 2\n\
  - Com servidor ligado e save em /Pal/Saved/SaveGames/0\n\
  - Apague os arquivos dos jogadores via FTP ou Filezilla.\n\
  - Reenvie os arquivos dos jogadores.\n\
  - Reinicie e teste.\n\
  - Repita até 3 vezes se necessário.\n\
  \n\
  🗑️  Passo alternativo 3\n\
  - Servidor desligado\n\
  - Acesse /Pal/Saved/SaveGames/0/[ID DO MAPA]/Players\n\
  - Apague saves de jogadores.\n\
  - Reenvie os saves.\n\
  - Ligue o servidor e teste o acesso.\n"
  },
];

// Funções auxiliares
export function getArticlesByCategory(category: KnowledgeCategory): KnowledgeArticle[] {
  return knowledgeArticles.filter(article => article.category === category);
}

export function getPopularArticles(): KnowledgeArticle[] {
  return knowledgeArticles.filter(article => article.popular);
}

export function searchArticles(query: string): KnowledgeArticle[] {
  const lowerQuery = query.toLowerCase();
  return knowledgeArticles.filter(article => 
    article.title.toLowerCase().includes(lowerQuery) ||
    article.description.toLowerCase().includes(lowerQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    article.content.toLowerCase().includes(lowerQuery)
  );
}

export function getArticle(id: string): KnowledgeArticle | undefined {
  return knowledgeArticles.find(article => article.id === id);
}

export function getRelatedArticles(articleId: string): KnowledgeArticle[] {
  const article = getArticle(articleId);
  if (!article) return [];
  
  if (article.related) {
    return article.related
      .map(id => getArticle(id))
      .filter((a): a is KnowledgeArticle => a !== undefined);
  }
  
  // Find articles with same category or tags
  return knowledgeArticles.filter(a => 
    a.id !== articleId && 
    (a.category === article.category || 
     a.tags.some(tag => article.tags.includes(tag)))
  ).slice(0, 3);
}

export function getAllTags(): string[] {
  return [...new Set(knowledgeArticles.flatMap(article => article.tags))];
}

export function getArticlesByTag(tag: string): KnowledgeArticle[] {
  return knowledgeArticles.filter(article => article.tags.includes(tag));
}
