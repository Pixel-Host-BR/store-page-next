'use client'
'use client';

import React from 'react';
import MinecraftFeatures from './MinecraftFeatures';
import PalworldFeatures from './PalworldFeatures';
import ArkFeatures from './ark';

interface Plan {
  name: string;
  mêsPreço: number;
  trimestrePreço: number;
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Exemplo de array de planos
  const plans: Plan[] = [
    { name: 'starter', mêsPreço: 10, trimestrePreço: 27 },
    { name: 'pro',     mêsPreço: 20, trimestrePreço: 54 },
  ];

  const isQuarterly = true; // ou vindo de props/estado

  const handleRedirect = (plano: Plan) => {
    const preço = isQuarterly ? plano.trimestrePreço : plano.mêsPreço;
    const redirectUrl = `https://your-whmcs-url.com/cart.php?a=add&pid=${plano.name}&billingcycle=${isQuarterly ? 'trimestral' : 'mensal'}`;
    window.location.href = redirectUrl;
  };

  return (
    <main>
      <h1>Jogo: {slug}</h1>
      {plans.map((plano) => (
        <button key={plano.name} onClick={() => handleRedirect(plano)}>
          Assinar por R$ {isQuarterly ? plano.trimestrePreço : plano.mêsPreço}
        </button>
      ))}
    </main>
  );


  if (slug === 'minecraft') {
    return (
      <main>
        <MinecraftFeatures />
      </main>
    )
  }

  if (slug === 'palworld') {
    return (
      <main>
        <PalworldFeatures />
      </main>
    )
  }

  if (slug === 'ark') {
    return (
      <main>
        <ArkFeatures />
      </main>
    )
  }

  return (
    <main>
      <h1>Jogo não encontrado</h1>
      <p>Conteúdo para o jogo "{slug}" não disponível.</p>
    </main>
  )
}
