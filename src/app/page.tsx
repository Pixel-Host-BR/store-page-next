'use client';

import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Zap, Play, ArrowRight, Shield, Star } from 'lucide-react';
import BenefitsSection from './components/BenefitsSection';
import BackToTopButton from './components/BackToTopButton'


export default function Home() {
  return (
    <>
      <BenefitsSection/>
      <BackToTopButton/>
    </>
  );
}