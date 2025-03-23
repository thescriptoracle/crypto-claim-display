
import React, { useEffect, useRef } from 'react';
import { 
  Shield, 
  Zap, 
  TrendingUp, 
  Clock, 
  CheckCheck,
  Award
} from 'lucide-react';

const featureData = [
  {
    icon: <Shield className="h-10 w-10 text-crypto-blue" />,
    title: 'Secure Distribution',
    description: 'Tokens are distributed securely through smart contracts with complete transparency.',
  },
  {
    icon: <Zap className="h-10 w-10 text-crypto-blue" />,
    title: 'Instant Transfer',
    description: 'Receive your tokens instantly in your wallet after verification.',
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-crypto-blue" />,
    title: 'Growth Potential',
    description: 'Our tokens have shown consistent growth since launch.',
  },
  {
    icon: <Clock className="h-10 w-10 text-crypto-blue" />,
    title: 'Limited Time',
    description: 'This giveaway is available for a limited time only.',
  },
  {
    icon: <CheckCheck className="h-10 w-10 text-crypto-blue" />,
    title: 'Verified Project',
    description: 'Our project has been verified by leading blockchain security firms.',
  },
  {
    icon: <Award className="h-10 w-10 text-crypto-blue" />,
    title: 'Community Rewards',
    description: 'Active community members receive additional bonuses and rewards.',
  },
];

const Features: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.feature-card');
            elements.forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).classList.add('animate-fade-in');
                (el as HTMLElement).style.opacity = '1';
              }, i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }
    
    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);
  
  return (
    <section id="features" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Join Our <span className="gradient-text">Giveaway</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our token giveaway offers more than just free crypto. Discover all the benefits of participating in our exclusive event.
          </p>
        </div>
        
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card glass rounded-xl p-6 opacity-0 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,102,255,0.3)]"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
