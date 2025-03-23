
import React, { useEffect, useRef, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

// Sample data for the price chart
const priceData = [
  { name: 'Jan', price: 0.0025 },
  { name: 'Feb', price: 0.0032 },
  { name: 'Mar', price: 0.0028 },
  { name: 'Apr', price: 0.0042 },
  { name: 'May', price: 0.0058 },
  { name: 'Jun', price: 0.0065 },
  { name: 'Jul', price: 0.0072 },
  { name: 'Aug', price: 0.0088 },
  { name: 'Sep', price: 0.0094 },
  { name: 'Oct', price: 0.0110 },
  { name: 'Nov', price: 0.0125 },
  { name: 'Dec', price: 0.0142 },
];

interface TokenStatProps {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
}

const TokenStat: React.FC<TokenStatProps> = ({ label, value, change, isPositive }) => {
  return (
    <div className="glass rounded-lg p-4">
      <p className="text-white/70 text-sm mb-1">{label}</p>
      <div className="flex items-end gap-2">
        <h4 className="text-xl font-bold">{value}</h4>
        {change && (
          <span className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? '+' : ''}{change}
          </span>
        )}
      </div>
    </div>
  );
};

const TokenInfo: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isChartVisible, setIsChartVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsChartVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="token" className="py-24 px-4 bg-crypto-dark-light/30">
      <div ref={sectionRef} className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Token <span className="gradient-text">Information</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our token has shown consistent growth since its inception, backed by a strong community and solid use cases.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className={`${isChartVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="glass rounded-xl p-6 h-[350px]">
              {isChartVisible && (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={priceData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0066FF" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#0066FF" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#fff', opacity: 0.6 }}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#fff', opacity: 0.6 }}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1E1E1E', 
                        borderColor: '#3A3A3A',
                        color: '#fff',
                        borderRadius: '0.5rem'
                      }}
                      formatter={(value) => [`$${value}`, 'Price']}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="price" 
                      stroke="#0066FF" 
                      fillOpacity={1} 
                      fill="url(#colorPrice)" 
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
          
          <div className={`space-y-6 ${isChartVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 gap-4">
              <TokenStat label="Current Price" value="$0.0142" change="12.8%" isPositive={true} />
              <TokenStat label="Market Cap" value="$14.2M" change="8.3%" isPositive={true} />
              <TokenStat label="Volume (24h)" value="$1.8M" change="5.2%" isPositive={true} />
              <TokenStat label="Holders" value="42,567" change="215" isPositive={true} />
            </div>
            
            <div className="glass rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-bold">Token Details</h3>
              
              <div className="grid grid-cols-2 gap-y-3 text-sm">
                <div className="text-white/70">Token Name:</div>
                <div className="font-medium">CryptoGive (CGV)</div>
                
                <div className="text-white/70">Total Supply:</div>
                <div className="font-medium">1,000,000,000 CGV</div>
                
                <div className="text-white/70">Circulating Supply:</div>
                <div className="font-medium">420,500,000 CGV</div>
                
                <div className="text-white/70">Blockchain:</div>
                <div className="font-medium">Ethereum, BSC, Polygon</div>
                
                <div className="text-white/70">Token Type:</div>
                <div className="font-medium">ERC-20 / BEP-20</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenInfo;
