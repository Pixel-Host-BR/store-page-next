// Tipos TypeScript centralizados para o site PixelHost

// Tipos básicos
export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

// Tipos de usuário
export interface User extends BaseEntity {
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'admin' | 'moderator';
  isActive: boolean;
}

// Tipos de servidor
export interface Server extends BaseEntity {
  name: string;
  game: string;
  status: 'online' | 'offline' | 'starting' | 'stopping' | 'maintenance';
  players: {
    current: number;
    max: number;
  };
  specs: {
    ram: number;
    cpu: number;
    storage: number;
    network: number;
  };
  location: string;
  ip: string;
  port: number;
  version: string;
  uptime: number;
  lastBackup?: string;
}

// Tipos de plano
export interface Plan extends BaseEntity {
  name: string;
  slug: string;
  price: number;
  currency: 'BRL' | 'USD' | 'EUR';
  billingCycle: 'monthly' | 'yearly';
  features: string[];
  specs: {
    ram: number;
    cpu: number;
    storage: number;
    bandwidth: number;
    players: number;
  };
  isPopular?: boolean;
  isActive: boolean;
}

// Tipos de pedido
export interface Order extends BaseEntity {
  userId: string;
  planId: string;
  serverId?: string;
  status: 'pending' | 'paid' | 'cancelled' | 'refunded';
  amount: number;
  currency: string;
  paymentMethod: string;
  paymentId?: string;
  expiresAt: string;
}

// Tipos de ticket de suporte
export interface SupportTicket extends BaseEntity {
  userId: string;
  subject: string;
  message: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  category: 'technical' | 'billing' | 'general' | 'feature_request';
  assignedTo?: string;
  responses: TicketResponse[];
}

export interface TicketResponse extends BaseEntity {
  ticketId: string;
  userId: string;
  message: string;
  isInternal: boolean;
}

// Tipos de notificação
export interface Notification extends BaseEntity {
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  isRead: boolean;
  actionUrl?: string;
}

// Tipos de analytics
export interface Analytics {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{
    path: string;
    views: number;
  }>;
  topReferrers: Array<{
    source: string;
    visits: number;
  }>;
}

// Tipos de configuração
export interface SiteConfig {
  maintenance: boolean;
  maintenanceMessage?: string;
  features: {
    chat: boolean;
    tickets: boolean;
    backups: boolean;
    ddosProtection: boolean;
  };
  limits: {
    maxServersPerUser: number;
    maxPlayersPerServer: number;
    maxRamPerServer: number;
  };
}

// Tipos de API
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Tipos de formulário
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  game?: string;
}

export interface ServerForm {
  name: string;
  game: string;
  plan: string;
  location: string;
  version?: string;
  mods?: string[];
}

// Tipos de filtros
export interface ServerFilters {
  game?: string;
  status?: Server['status'];
  location?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  players?: {
    min: number;
    max: number;
  };
}

export interface TicketFilters {
  status?: SupportTicket['status'];
  priority?: SupportTicket['priority'];
  category?: SupportTicket['category'];
  assignedTo?: string;
  dateRange?: {
    start: string;
    end: string;
  };
}

// Tipos de eventos
export interface ServerEvent {
  type: 'start' | 'stop' | 'restart' | 'backup' | 'update';
  serverId: string;
  timestamp: string;
  status: 'success' | 'failed' | 'in_progress';
  message?: string;
}

// Tipos de logs
export interface ServerLog {
  serverId: string;
  level: 'info' | 'warning' | 'error' | 'debug';
  message: string;
  timestamp: string;
  source: string;
  metadata?: Record<string, any>;
}

// Tipos de backup
export interface Backup extends BaseEntity {
  serverId: string;
  name: string;
  size: number;
  status: 'completed' | 'failed' | 'in_progress';
  type: 'automatic' | 'manual';
  retentionDays: number;
  downloadUrl?: string;
}

// Tipos de domínio
export interface Domain extends BaseEntity {
  name: string;
  serverId: string;
  type: 'subdomain' | 'custom';
  status: 'active' | 'pending' | 'error';
  ssl: boolean;
  records: DnsRecord[];
}

export interface DnsRecord {
  type: 'A' | 'CNAME' | 'MX' | 'TXT';
  name: string;
  value: string;
  ttl: number;
}

// Tipos de métricas
export interface ServerMetrics {
  serverId: string;
  timestamp: string;
  cpu: number;
  ram: number;
  storage: number;
  network: {
    in: number;
    out: number;
  };
  players: number;
  uptime: number;
}

// Tipos de alertas
export interface Alert extends BaseEntity {
  serverId: string;
  type: 'cpu' | 'ram' | 'storage' | 'network' | 'players' | 'offline';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  isResolved: boolean;
  resolvedAt?: string;
  resolvedBy?: string;
}

// Tipos de configuração de jogo
export interface GameConfig {
  name: string;
  slug: string;
  version: string;
  ports: number[];
  defaultSettings: Record<string, any>;
  mods: Mod[];
  plugins: Plugin[];
}

export interface Mod {
  name: string;
  version: string;
  description: string;
  isActive: boolean;
  config?: Record<string, any>;
}

export interface Plugin {
  name: string;
  version: string;
  description: string;
  isActive: boolean;
  config?: Record<string, any>;
}

// Tipos de pagamento
export interface PaymentMethod {
  id: string;
  type: 'pix' | 'credit_card' | 'debit_card' | 'boleto' | 'paypal';
  name: string;
  isActive: boolean;
  config?: Record<string, any>;
}

export interface Payment extends BaseEntity {
  orderId: string;
  method: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  transactionId?: string;
  gateway: string;
  metadata?: Record<string, any>;
}

// Tipos de relatórios
export interface Report extends BaseEntity {
  type: 'usage' | 'billing' | 'performance' | 'support';
  period: 'daily' | 'weekly' | 'monthly' | 'yearly';
  data: Record<string, any>;
  generatedAt: string;
  expiresAt: string;
}

// Tipos de integração
export interface Integration extends BaseEntity {
  name: string;
  type: 'discord' | 'telegram' | 'email' | 'webhook';
  isActive: boolean;
  config: Record<string, any>;
  events: string[];
}

// Tipos de webhook
export interface Webhook extends BaseEntity {
  name: string;
  url: string;
  events: string[];
  isActive: boolean;
  secret?: string;
  lastTriggered?: string;
  successCount: number;
  failureCount: number;
}

// Tipos de cache
export interface CacheConfig {
  ttl: number;
  maxSize: number;
  strategy: 'lru' | 'lfu' | 'fifo';
}

// Tipos de rate limiting
export interface RateLimit {
  window: number;
  max: number;
  strategy: 'ip' | 'user' | 'token';
}

// Tipos de auditoria
export interface AuditLog extends BaseEntity {
  userId?: string;
  action: string;
  resource: string;
  resourceId?: string;
  details: Record<string, any>;
  ip: string;
  userAgent: string;
} 