'use client';

export function PlanButton({ planName }: { planName: string }) {
  const handleClick = () => {
    // Lógica que precisa rodar no cliente
    window.location.href = `https://exemplo.com/plano/${planName}`;
  };

  return (
    <button onClick={handleClick} className="bg-blue-600 text-white px-4 py-2 rounded">
      Contratar {planName}
    </button>
  );
}
