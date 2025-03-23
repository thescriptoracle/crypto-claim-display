
import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronsDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center pt-20 pb-16 px-4">
      <div 
        className={`container mx-auto text-center max-w-5xl transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="space-y-1 mb-4">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-crypto-blue/10 text-crypto-accent rounded-full">
            Limited Time Offer
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Claim Your <span className="gradient-text">Free</span> Crypto<br />
          <span className="gradient-text">Tokens</span> Today
        </h1>
        
        <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Join our exclusive giveaway and receive valuable tokens directly to your wallet.
          Limited availability, act fast to secure your share.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <a 
            href="#claim" 
            className="bg-crypto-blue hover:bg-crypto-blue-light text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 flex items-center gap-2 btn-hover-effect animate-pulse-glow"
          >
            Claim Your Tokens <ArrowRight className="h-5 w-5" />
          </a>
          
          <a 
            href="#features" 
            className="glass px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
          >
            Learn More
          </a>
        </div>
        
        <div className="mt-8 flex items-center justify-center">
          <div className="glass flex items-center gap-4 px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span>
              <span className="font-bold">876</span> people claimed tokens in the last 24 hours
            </span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#features" className="text-white/50 hover:text-white">
          <ChevronsDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
