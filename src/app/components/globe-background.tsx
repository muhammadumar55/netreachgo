import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function GlobeBackground() {
  const [targetIndex, setTargetIndex] = useState(0);
  
  // Coordinates for the bouncing point (Percentages)
  const locations = [
    { left: '30%', top: '40%' }, // North America
    { left: '45%', top: '65%' }, // Panama / Central Am
    { left: '55%', top: '35%' }, // Europe
    { left: '75%', top: '45%' }, // Asia
    { left: '80%', top: '70%' }, // Australia
    { left: '40%', top: '75%' }, // South America
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTargetIndex((prev) => (prev + 1) % locations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Container for the globe to handle scaling on mobile */}
      <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] opacity-60">
        
        {/* Glow behind globe */}
        <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-[100px]" />

        {/* The Globe Sphere */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border border-blue-500/20 rounded-full"
        >
          {/* Latitudinal Lines */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`lat-${i}`}
              className="absolute inset-0 border border-blue-500/10 rounded-full"
              style={{
                transform: `rotateX(${i * 22.5}deg)`,
              }}
            />
          ))}
          {/* Longitudinal Lines */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`long-${i}`}
              className="absolute inset-0 border border-blue-500/10 rounded-full"
              style={{
                transform: `rotateY(${i * 22.5}deg)`,
              }}
            />
          ))}
        </motion.div>

        {/* Outer Highlight Ring */}
        <div className="absolute inset-[-10px] border border-blue-400/10 rounded-full blur-sm" />
        
        {/* The World Map (Simplified clusters) */}
        <svg className="absolute inset-0 w-full h-full text-blue-400/20" viewBox="0 0 100 100">
          <circle cx="25" cy="35" r="4" fill="currentColor" className="blur-[1px]" />
          <circle cx="45" cy="60" r="3" fill="currentColor" className="blur-[1px]" />
          <circle cx="55" cy="30" r="5" fill="currentColor" className="blur-[1px]" />
          <circle cx="75" cy="45" r="7" fill="currentColor" className="blur-[1px]" />
          <circle cx="85" cy="70" r="3" fill="currentColor" className="blur-[1px]" />
          <circle cx="35" cy="75" r="4" fill="currentColor" className="blur-[1px]" />
          <circle cx="65" cy="60" r="2" fill="currentColor" className="blur-[1px]" />
        </svg>

        {/* The Bouncing/Moving Point */}
        <AnimatePresence mode="wait">
          <motion.div
            key={targetIndex}
            initial={{ 
              left: locations[(targetIndex - 1 + locations.length) % locations.length].left, 
              top: locations[(targetIndex - 1 + locations.length) % locations.length].top,
              opacity: 0,
              scale: 0
            }}
            animate={{ 
              left: locations[targetIndex].left, 
              top: locations[targetIndex].top,
              opacity: 1,
              scale: 1
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ 
              duration: 1.5,
              ease: "circOut"
            }}
            className="absolute w-6 h-6 -ml-3 -mt-3 z-10"
          >
            {/* Core Glow */}
            <div className="absolute inset-0 bg-blue-400 rounded-full shadow-[0_0_20px_rgba(96,165,250,1),0_0_40px_rgba(96,165,250,0.5)]" />
            
            {/* Rippling Rings */}
            <motion.div 
              animate={{ scale: [1, 3], opacity: [0.6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 border-2 border-blue-400 rounded-full"
            />
            <motion.div 
              animate={{ scale: [1, 2], opacity: [0.4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              className="absolute inset-0 border border-blue-300 rounded-full"
            />
          </motion.div>
        </AnimatePresence>

        {/* Connection Arcs */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(96, 165, 250, 0)" />
              <stop offset="50%" stopColor="rgba(96, 165, 250, 0.4)" />
              <stop offset="100%" stopColor="rgba(96, 165, 250, 0)" />
            </linearGradient>
          </defs>
          <motion.path
            key={`path-${targetIndex}`}
            d={`M ${locations[(targetIndex - 1 + locations.length) % locations.length].left} ${locations[(targetIndex - 1 + locations.length) % locations.length].top} L ${locations[targetIndex].left} ${locations[targetIndex].top}`}
            stroke="url(#arcGradient)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ filter: 'blur(1px)' }}
          />
        </svg>
      </div>
    </div>
  );
}
