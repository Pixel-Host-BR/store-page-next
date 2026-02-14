'use client';

import React from 'react';

interface Plan {
  name: string;
  monthlyPrice: number;
  quarterlyPrice: number;
}

interface InteractiveSectionProps {
  gameTitle: string;
}

export default function InteractiveSection({ gameTitle }: InteractiveSectionProps) {
  const isQuarterly = true;

  const plans: Plan[] = [
    { name: 'starter', monthlyPrice: 10, quarterlyPrice: 27 },
    { name: 'pro', monthlyPrice: 20, quarterlyPrice: 54 },
    { name: 'premium', monthlyPrice: 35, quarterlyPrice: 95 },
  ];

  const handleRedirect = (plan: Plan) => {
    const redirectUrl = `https://your-whmcs-url.com/cart.php?a=add&pid=${plan.name}&billingcycle=${isQuarterly ? 'quarterly' : 'monthly'}`;
    window.location.href = redirectUrl;
  };

  return (
    <div className="py-16 bg-[var(--bg-deep)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Planos Disponíveis
          </h2>
          <p className="text-[var(--text-secondary)]">
            Escolha o plano ideal para seu servidor de {gameTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-[var(--bg-surface)] rounded-lg p-6 text-center border border-[rgba(255,255,255,0.1)] hover:border-blue-500 transition-all duration-200"
            >
              <h3 className="text-xl font-bold text-white mb-4 capitalize">
                {plan.name}
              </h3>
              <div className="text-3xl font-bold text-[var(--primary-purple-light)] mb-6 whitespace-nowrap">
                R$ {isQuarterly ? plan.quarterlyPrice : plan.monthlyPrice}
                <span className="text-sm text-[var(--text-secondary)]">
                  /{isQuarterly ? 'trimestre' : 'mês'}
                </span>
              </div>
              <button
                onClick={() => handleRedirect(plan)}
                className="w-full bg-[var(--primary-purple)] hover:bg-[var(--primary-purple-hover)] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Contratar Agora
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
