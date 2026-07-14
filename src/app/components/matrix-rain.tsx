import { useEffect, useRef } from 'react';

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Matrix characters - mix of letters, numbers, and symbols
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_=|;:,.<>?/';
    const fontSize = 16;

    let drops: number[] = [];
    let spacing = 40;

    // Set canvas size and initialize drops
    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Use smaller spacing on mobile for better visibility
      const isMobile = window.innerWidth < 768;
      spacing = isMobile ? 30 : 40;

      // Fill with solid black initially
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Recalculate columns and drops
      const columns = Math.floor(canvas.width / spacing);
      drops = [];

      for (let i = 0; i < columns; i++) {
        // Only add drop if random check passes (creates sparseness)
        if (Math.random() > 0.4) {
          drops[i] = Math.random() * -200; // Start at random positions above screen
        } else {
          drops[i] = -9999; // Don't show this column initially
        }
      }
    };

    initCanvas();
    window.addEventListener('resize', initCanvas);

    // Animation function
    const draw = () => {
      // Very dark black background for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        if (drops[i] < -9000) continue; // Skip inactive columns

        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * spacing;
        const y = drops[i] * fontSize;

        // Vary opacity for depth - some characters brighter, most moderately visible
        const opacity = Math.random() > 0.8 ? 0.60 : 0.45;

        // Muted green for subtle effect
        ctx.fillStyle = `rgba(100, 200, 100, ${opacity})`;
        ctx.font = `${fontSize}px monospace`;

        // No glow - remove green cast
        ctx.shadowBlur = 0;
        ctx.shadowColor = 'transparent';

        ctx.fillText(char, x, y);

        // Reset drop to top randomly after it goes off screen
        if (y > canvas.height && Math.random() > 0.98) {
          drops[i] = Math.random() * -50;
        }

        // Move drop down - very slow
        drops[i] += 0.3;
      }
    };

    // Animation loop
    const interval = setInterval(draw, 33); // ~30fps for smooth animation

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', initCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-80"
      style={{
        pointerEvents: 'none',
        backgroundColor: '#000000',
        touchAction: 'none',
        WebkitTapHighlightColor: 'transparent',
        mixBlendMode: 'normal',
        isolation: 'isolate'
      }}
    />
  );
}
