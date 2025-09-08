import React from 'react';
import BenefitsSection from './components/BenefitsSection';
import BackToTopButton from './components/BackToTopButton'
import FacebookPixel from './components/FacebookPixel'
import { generateMetadata } from './seo-config'

export const metadata = generateMetadata('home');

export default function Home() {
  return (
    <>
      <BenefitsSection/>
      <BackToTopButton/>
      <FacebookPixel/>
    </>
  );
}