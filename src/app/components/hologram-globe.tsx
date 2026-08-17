import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import globeImg from '@/assets/c70d7771f83836211341ccfba2b1d205b9d19b07.png';

export function HologramGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speed: Math.random() * 0.5 + 0.2,
          opacity: Math.random()
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
      particles.forEach(p => {
        p.y -= p.speed;
        if (p.y < -10) p.y = canvas.height + 10;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    createParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
      {/* Background Deep Navy Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,40,80,0.3)_0%,transparent_70%)]" />
      
      {/* 3D Isometric Hologram Globe */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.02, 1],
        }}
        transition={{ 
          rotate: { duration: 60, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
        className="relative w-[800px] h-[800px] flex items-center justify-center"
        style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
      >
        <img 
          src={globeImg} 
          alt="Hologram Globe" 
          className="w-full h-full object-contain opacity-90 drop-shadow-[0_0_30px_rgba(0,255,255,0.4)]"
          style={{ 
            filter: 'hue-rotate(180deg) brightness(1.2) contrast(1.1)',
            transform: 'rotateX(15deg) rotateY(-10deg)' 
          }}
        />
        
        {/* Shimmering Orbital Rings */}
        <div 
          className="absolute inset-0 border-[1px] border-cyan-500/20 rounded-full scale-[1.2] animate-[spin_20s_linear_infinite]" 
          style={{ transform: 'rotateX(75deg)' }}
        />
        <div 
          className="absolute inset-0 border-[1px] border-blue-500/10 rounded-full scale-[1.5] animate-[spin_35s_linear_infinite_reverse]" 
          style={{ transform: 'rotateX(85deg)' }}
        />
      </motion.div>

      {/* Point-Cloud Particle Canvas Layer */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 mix-blend-screen opacity-40"
      />

      {/* Technical Overlays: Scanlines & Glitch */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(0,255,255,0.05),rgba(255,0,255,0.02),rgba(0,255,255,0.05))] bg-[size:100%_4px,4px_100%]" />
        <div className="absolute inset-0 animate-pulse bg-cyan-500/5 mix-blend-overlay" />
      </div>

      {/* Vignette & Void Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-transparent to-[#020205]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020205] via-transparent to-[#020205]" />
    </div>
  );
}
