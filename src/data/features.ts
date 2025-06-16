import { DivideIcon as LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: string;
  color: string;
  stats: string;
}

export const features: Feature[] = [
  {
    title: "Advanced NLP",
    description: "Natural language processing for human-like conversations that understand context and intent",
    icon: "brain",
    color: "from-blue-700 to-indigo-600",
    stats: "99.5% Accuracy"
  },
  {
    title: "Multi-Platform Integration",
    description: "Seamlessly deploy across web, mobile, social media, and messaging platforms",
    icon: "network",
    color: "from-blue-600 to-indigo-500",
    stats: "15+ Platforms"
  },
  {
    title: "24/7 Intelligent Support",
    description: "Round-the-clock customer assistance with smart escalation and context awareness",
    icon: "clock",
    color: "from-indigo-600 to-blue-700",
    stats: "Zero Downtime"
  },
  {
    title: "Advanced Analytics",
    description: "Deep insights into customer behavior, conversation patterns, and performance metrics",
    icon: "bar-chart-3",
    color: "from-blue-600 to-indigo-600",
    stats: "Real-time Data"
  }
];