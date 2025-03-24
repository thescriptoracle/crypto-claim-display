import React from 'react';
import { Bitcoin, Github, Twitter, MessageCircle, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-crypto-dark-light">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 text-xl font-bold mb-4">
              <Bitcoin className="h-6 w-6 text-crypto-blue" />
              <span className="gradient-text">CryptoFiesta</span>
            </a>
            <p className="text-white/60 text-sm mb-6">
              Join our exclusive token fiesta and be part of the next generation of crypto enthusiasts.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-crypto-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-crypto-blue transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-crypto-blue transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-crypto-blue transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Home</a></li>
              <li><a href="#features" className="text-white/60 hover:text-white transition-colors">Features</a></li>
              <li><a href="#token" className="text-white/60 hover:text-white transition-colors">Token</a></li>
              <li><a href="#claim" className="text-white/60 hover:text-white transition-colors">Claim</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Smart Contract</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Audit Report</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Disclaimer</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-crypto-gray/30 mt-12 pt-6 text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} CryptoFiesta. All rights reserved.</p>
          <p className="mt-2">
            Disclaimer: This is a demonstration website. No real tokens or cryptocurrencies are being distributed.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
