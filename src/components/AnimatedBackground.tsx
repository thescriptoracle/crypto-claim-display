
import React, { useState, useEffect } from 'react';

const AnimatedBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Generate random particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 30,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden opacity-60">
      {mounted && particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-crypto-blue/30"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: '0 0 10px rgba(0, 102, 255, 0.5)',
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-crypto-dark-light/0 via-crypto-dark to-crypto-dark" />
    </div>
  );
};

export default AnimatedBackground;
