import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function GamePlans() {
  const [isQuarterly, setIsQuarterly] = useState(false);

  const plans = [
    {
      name: 'Básico',
      monthlyPrice: '25/mês',
      quarterlyPrice: '70/3 meses',
      features: ['4GB RAM', '1 CPU Core', '10GB SSD'],
      grad: 'from-gray-800 via-gray-900 to-zinc-700',
    },
    {
      name: 'Avançado',
      monthlyPrice: '35/mês',
      quarterlyPrice: '100/3 meses',
      features: ['8GB RAM', '2 CPU Cores', '25GB SSD'],
      grad: 'from-blue-900 via-blue-800 to-blue-900',
    },
    {
      name: 'Premium',
      monthlyPrice: '50/mês',
      quarterlyPrice: '140/3 meses',
      features: ['16GB RAM', '4 CPU Cores', '50GB SSD'],
      grad: 'from-green-700 via-emerald-700 to-green-800',
    },
    {
      name: 'Master',
      monthlyPrice: '90/mês',
      quarterlyPrice: '250/3 meses',
      features: ['32GB RAM', '8 CPU Cores', '100GB SSD'],
      grad: 'from-yellow-700 via-yellow-800 to-orange-800',
    },
  ];

  
}