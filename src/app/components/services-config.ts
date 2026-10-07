import { Globe, Cpu, Zap, MessageSquare, Rocket, Shield, Terminal, BrainCircuit, type LucideIcon } from 'lucide-react';

export type ServiceKey =
  | 'webDev'
  | 'aiAgents'
  | 'automation'
  | 'consultancy'
  | 'aiImplementation'
  | 'academy'
  | 'offGrid'
  | 'softwareDev';

export interface ServiceConfig {
  key: ServiceKey;
  slug: string;
  icon: LucideIcon;
  color: string;
}

export const serviceOrder: ServiceConfig[] = [
  { key: 'webDev', slug: 'web-development', icon: Globe, color: 'from-blue-500 to-cyan-500' },
  { key: 'aiAgents', slug: 'ai-agents', icon: Cpu, color: 'from-cyan-500 to-blue-500' },
  { key: 'automation', slug: 'marketing-automation', icon: Zap, color: 'from-blue-600 to-indigo-600' },
  { key: 'consultancy', slug: 'ai-consultancy', icon: MessageSquare, color: 'from-blue-400 to-cyan-400' },
  { key: 'aiImplementation', slug: 'ai-implementation', icon: BrainCircuit, color: 'from-indigo-500 to-blue-500' },
  { key: 'academy', slug: 'academy', icon: Rocket, color: 'from-cyan-500 to-teal-500' },
  { key: 'offGrid', slug: 'off-grid', icon: Shield, color: 'from-green-500 to-emerald-500' },
  { key: 'softwareDev', slug: 'software-development', icon: Terminal, color: 'from-purple-500 to-violet-500' },
];

export const serviceBySlug: Record<string, ServiceConfig> = Object.fromEntries(
  serviceOrder.map((s) => [s.slug, s])
);
