import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Cpu, Network, Shield, Zap } from 'lucide-react';
import { MatrixText } from '@/app/components/matrix-text';

const features = [
  {
    icon: Cpu,
    title: 'Advanced AI Models',
    description: 'State-of-the-art machine learning algorithms',
  },
  {
    icon: Network,
    title: 'Neural Networks',
    description: 'Deep learning architecture for complex tasks',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and data protection',
  },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Millisecond response times at scale',
  },
];

export function TechShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    null
  );
}