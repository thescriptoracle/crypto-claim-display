
import React, { useEffect } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import TokenInfo from '../components/TokenInfo';
import Claim from '../components/Claim';
import Footer from '../components/Footer';

const Index = () => {
  // Page transition animation
  useEffect(() => {
    document.body.classList.add('animate-fade-in');
    
    return () => {
      document.body.classList.remove('animate-fade-in');
    };
  }, []);

  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Features />
      <TokenInfo />
      <Claim />
      <Footer />
    </div>
  );
};

export default Index;
