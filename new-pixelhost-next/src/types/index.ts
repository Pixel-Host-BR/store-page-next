// filepath: new-pixelhost-next/src/types/index.ts

export interface Plan {
  name: string;
  price: string;
  features: string[];
  grad: string;
  badge?: JSX.Element | null;
}

export interface MainFeature {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  gradient: string;
  stats: {
    value: string;
    label: string;
  };
  details: string[];
}

export interface AdditionalFeature {
  icon: JSX.Element;
  title: string;
  desc: string;
}