
import React, { useEffect, useState } from 'react';
import { Bitcoin, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-crypto-dark-light/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-xl font-bold">
          <Bitcoin className="h-6 w-6 text-crypto-blue" />
          <span className="gradient-text">CryptoGiveaway</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
          <a href="#token" className="text-white/80 hover:text-white transition-colors">Token</a>
          <a href="#claim" className="text-white/80 hover:text-white transition-colors">Claim</a>
          <a href="#claim" 
             className="bg-crypto-blue text-white px-5 py-2 rounded-md hover:bg-crypto-blue-light transition-all duration-300 btn-hover-effect">
            Connect Wallet
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-crypto-dark-light/95 backdrop-blur-lg shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#token" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Token
            </a>
            <a 
              href="#claim" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Claim
            </a>
            <a 
              href="#claim" 
              className="bg-crypto-blue text-white px-5 py-2 rounded-md hover:bg-crypto-blue-light transition-all duration-300 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Connect Wallet
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
