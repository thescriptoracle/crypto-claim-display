
import React, { useState, useEffect } from 'react';

const AnimatedBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Generate random particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 30,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.3,
    color: i % 3 === 0 ? 'bg-crypto-blue/30' : 
           i % 3 === 1 ? 'bg-crypto-accent/30' : 'bg-purple-500/30',
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-crypto-dark-light via-indigo-950/40 to-crypto-dark" />
      
      {/* Animated Particles */}
      {mounted && particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full ${particle.color}`}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            boxShadow: '0 0 15px rgba(0, 102, 255, 0.6)',
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      
      {/* Additional Gradient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-crypto-blue/5 blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 rounded-full bg-crypto-accent/5 blur-[120px] animate-pulse" 
           style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/3 right-1/3 w-1/4 h-1/4 rounded-full bg-purple-500/5 blur-[100px] animate-pulse"
           style={{ animationDelay: '0.8s' }} />
    </div>
  );
};

export default AnimatedBackground;
