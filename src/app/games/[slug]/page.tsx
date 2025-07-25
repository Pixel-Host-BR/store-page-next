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

type Params = { slug: string };

export default async function GamePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const isQuarterly = true; // ou derivar de props/estado

  // Se for uma rota de jogo, renderiza feature específica
  if (slug === 'minecraft') {
    return (
      <main>
        <MinecraftFeatures />
      </main>
    );
  }

  if (slug === 'palworld') {
    return (
      <main>
        <PalworldFeatures />
      </main>
    );
  }

  if (slug === 'ark') {
    return (
      <main>
        <ArkFeatures />
      </main>
    );
  }

  // Array de planos para assinatura
  const plans: Plan[] = [
    { name: 'starter', mêsPreço: 10, trimestrePreço: 27 },
    { name: 'pro',     mêsPreço: 20, trimestrePreço: 54 },
  ];

  const handleRedirect = (plano: Plan) => {
    const preço = isQuarterly ? plano.trimestrePreço : plano.mêsPreço;
    const redirectUrl = `https://your-whmcs-url.com/cart.php?a=add&pid=${plano.name}&billingcycle=${
      isQuarterly ? 'trimestral' : 'mensal'
    }`;
    window.location.href = redirectUrl;
  };

  // Default: página de assinatura
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
}
