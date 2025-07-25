'use client';

import React from 'react';
import MinecraftFeatures from './MinecraftFeatures';
import PalworldFeatures from './PalworldFeatures';
import ArkFeatures from './ark';

interface Plan {
  name: string;
  monthlyPrice: number;
  quarterlyPrice: number;
}

type Params = { slug: string };

export default async function GamePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const isQuarterly = true; // ou derive de props/estado

  // Roteamento dinâmico por slug
  if (slug === 'minecraft') {
    return <main><MinecraftFeatures /></main>;
  }
  if (slug === 'palworld') {
    return <main><PalworldFeatures /></main>;
  }
  if (slug === 'ark') {
    return <main><ArkFeatures /></main>;
  }

  // Array tipado de planos
  const plans: Plan[] = [
    { name: 'starter', monthlyPrice: 10, quarterlyPrice: 27 },
    { name: 'pro',     monthlyPrice: 20, quarterlyPrice: 54 },
  ];

  // Função tipada corretamente
  const handleRedirect = (plan: Plan) => {
    const price = isQuarterly ? plan.quarterlyPrice : plan.monthlyPrice;
    const redirectUrl = `https://your-whmcs-url.com/cart.php?a=add&pid=${plan.name}&billingcycle=${isQuarterly ? 'quarterly' : 'monthly'}`;
    window.location.href = redirectUrl;
  };

  return (
    <main>
      <h1>Jogo: {slug}</h1>
      {plans.map((plan) => (
        <button key={plan.name} onClick={() => handleRedirect(plan)}>
          Assinar por R$ {isQuarterly ? plan.quarterlyPrice : plan.monthlyPrice}
        </button>
      ))}
    </main>
  );
}
