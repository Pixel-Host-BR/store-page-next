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

  const handleRedirect = (plan) => {
    const price = isQuarterly ? plan.quarterlyPrice : plan.monthlyPrice;
    const redirectUrl = `https://your-whmcs-url.com/cart.php?a=add&pid=${plan.name}&billingcycle=${isQuarterly ? 'quarterly' : 'monthly'}`;
    window.location.href = redirectUrl;
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 overflow-hidden">
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold text-white mb-4">Escolha seu Plano</h3>
        <button
          onClick={() => setIsQuarterly(!isQuarterly)}
          className="mb-4 px-4 py-2 bg-gray-700 text-white rounded-lg"
        >
          {isQuarterly ? 'Mudar para Mensal' : 'Mudar para Trimestral'}
        </button>
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 max-w-9xl mx-auto mb-16">
        {plans.map((plan) => (
          <div key={plan.name} className={`relative flex flex-col rounded-3xl p-7 border bg-gradient-to-br shadow-lg transition-all duration-300 ${plan.grad} border-gray-700`}>
            <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
            <div className="text-4xl font-extrabold text-green-400 mb-2">
              {isQuarterly ? plan.quarterlyPrice : plan.monthlyPrice}
            </div>
            <ul className="flex-1 space-y-2 mb-6 mt-2">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-base text-gray-200">{f}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleRedirect(plan)}
              className="mt-auto bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-bold shadow-inner shadow-green-900/10 hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
            >
              Contratar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}