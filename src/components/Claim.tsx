
import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Copy, ExternalLink } from 'lucide-react';

const Claim: React.FC = () => {
  const [email, setEmail] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Contract address to copy
  const contractAddress = '0x7A86C0b064171007716bbD6Ef4C5876c8E9f0E9A';
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const element = document.getElementById('claim-section');
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  
  return (
    <section id="claim" className="py-24 px-4">
      <div 
        id="claim-section"
        className={`container mx-auto max-w-5xl transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="glass rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-crypto-blue/20 to-crypto-accent/20 p-1">
            <div className="bg-crypto-dark-light p-8 md:p-12 rounded-xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Claim Your <span className="gradient-text">Free Tokens</span> Now
                </h2>
                <p className="text-white/70 max-w-2xl mx-auto">
                  Complete the form below to receive your tokens. Hurry, the giveaway is limited to the first 10,000 participants.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-crypto-gray border border-crypto-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-crypto-blue transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="wallet" className="block text-sm font-medium">
                      Wallet Address
                    </label>
                    <input
                      type="text"
                      id="wallet"
                      value={walletAddress}
                      onChange={(e) => setWalletAddress(e.target.value)}
                      className="w-full px-4 py-3 bg-crypto-gray border border-crypto-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-crypto-blue transition-all"
                      placeholder="0x..."
                    />
                  </div>
                  
                  <div className="pt-4">
                    <a 
                      href="https://claimcrypto.example.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-crypto-blue hover:bg-crypto-blue-light text-white px-6 py-4 rounded-lg text-center font-medium flex items-center justify-center gap-2 transition-all duration-300 btn-hover-effect animate-pulse-glow"
                    >
                      Claim Your Tokens <ArrowRight className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="glass rounded-lg p-5 space-y-4">
                    <h3 className="text-lg font-semibold">Contract Details</h3>
                    
                    <div className="space-y-1">
                      <p className="text-sm text-white/70">Contract Address:</p>
                      <div className="flex items-center gap-2 bg-crypto-gray p-2 rounded">
                        <code className="text-xs md:text-sm overflow-x-auto whitespace-nowrap flex-1">{contractAddress}</code>
                        <button 
                          onClick={copyToClipboard}
                          className="p-1.5 rounded-md hover:bg-crypto-gray-light transition-colors"
                          aria-label="Copy contract address"
                        >
                          {copied ? (
                            <Check className="h-4 w-4 text-green-400" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm text-white/70">Tokens per Claim:</p>
                      <p className="font-medium">5,000 CGV</p>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm text-white/70">Supported Networks:</p>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 bg-crypto-gray rounded text-xs font-medium">Ethereum</span>
                        <span className="px-2 py-1 bg-crypto-gray rounded text-xs font-medium">BSC</span>
                        <span className="px-2 py-1 bg-crypto-gray rounded text-xs font-medium">Polygon</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass rounded-lg p-5">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-green-500/20 p-2 mt-0.5">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Verified Smart Contract</h4>
                        <p className="text-sm text-white/70">Our contract has been audited by Certik and Hacken.</p>
                        <a 
                          href="https://etherscan.io" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-crypto-blue hover:text-crypto-blue-light text-sm inline-flex items-center gap-1 mt-1 transition-colors"
                        >
                          View on Etherscan <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Claim;
