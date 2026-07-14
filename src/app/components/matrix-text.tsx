import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface MatrixTextProps {
  children: string;
  className?: string;
  delay?: number;
  finalColor?: string;
}

const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export function MatrixText({ children, className = '', delay = 0, finalColor = 'text-white' }: MatrixTextProps) {
  const [displayText, setDisplayText] = useState(children.split('').map(() => ''));
  const [isAnimating, setIsAnimating] = useState(true);

  // Helper function to determine color based on position in text
  const getColorClass = (index: number, text: string) => {
    const lowerText = text.toLowerCase();

    // Special handling for N.R.G. Academy title
    const nrgIndex = lowerText.indexOf('nrg');
    const acadeIndex = lowerText.indexOf('acade');
    const myIndex = lowerText.indexOf('my');

    if (nrgIndex !== -1 && index >= nrgIndex && index < nrgIndex + 3) {
      return 'text-white'; // N.R.G. in white
    }
    if (acadeIndex !== -1 && index >= acadeIndex && index < acadeIndex + 5) {
      return 'text-[#fdc700]'; // Acade in yellow
    }
    if (myIndex !== -1 && index >= myIndex && index < myIndex + 2) {
      return 'text-blue-400'; // my in blue
    }

    // Use finalColor prop for all other cases
    return finalColor;
  };

  useEffect(() => {
    const chars = children.split('');
    let completedCount = 0;

    const timeoutId = setTimeout(() => {
      chars.forEach((char, index) => {
        if (char === ' ') {
          setDisplayText(prev => {
            const newText = [...prev];
            newText[index] = ' ';
            return newText;
          });
          completedCount++;
          return;
        }

        let iterations = 0;
        const maxIterations = 5;
        
        const interval = setInterval(() => {
          setDisplayText(prev => {
            const newText = [...prev];
            if (iterations < maxIterations) {
              newText[index] = matrixChars[Math.floor(Math.random() * matrixChars.length)];
            } else {
              newText[index] = char;
              clearInterval(interval);
              completedCount++;
              if (completedCount === chars.length) {
                setIsAnimating(false);
              }
            }
            return newText;
          });
          
          iterations++;
        }, 30);
      });
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [children, delay]);

  return (
    <span className={className}>
      {displayText.map((char, index) => (
        <span
          key={index}
          className={`${isAnimating && char !== ' ' ? 'text-purple-400' : getColorClass(index, children)} transition-opacity duration-200`}
          style={{
            display: 'inline-block',
            opacity: char ? 1 : 0,
            textShadow: isAnimating && char !== ' ' 
              ? '0 0 10px rgba(168, 85, 247, 0.8)' 
              : 'none'
          }}
        >
          {char || '\u00A0'}
        </span>
      ))}
    </span>
  );
}