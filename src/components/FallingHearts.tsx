import React, { useEffect, useState } from 'react';
import '../styles/fallingHearts.css';

interface Heart {
  id: number;
  left: number;
  size: number;
  animationDuration: number;
  delay: number;
}

const FallingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);
  
  useEffect(() => {
    // Create initial hearts
    const initialHearts = Array.from({ length: 20 }, (_, i) => createHeart(i));
    setHearts(initialHearts);
    
    // Add new hearts periodically
    const interval = setInterval(() => {
      setHearts(prevHearts => {
        const newHearts = [...prevHearts];
        // Remove some old hearts to avoid too many elements
        if (newHearts.length > 30) {
          newHearts.splice(0, 5);
        }
        // Add 2 new hearts
        newHearts.push(createHeart(newHearts.length));
        newHearts.push(createHeart(newHearts.length + 1));
        return newHearts;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  const createHeart = (id: number): Heart => {
    return {
      id,
      left: Math.random() * 100, // Random position (0-100%)
      size: Math.random() * 15 + 10, // Random size (10-25px)
      animationDuration: Math.random() * 10 + 10, // Random duration (10-20s)
      delay: Math.random() * 5 // Random delay (0-5s)
    };
  };

  return (
    <div className="falling-hearts-container">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="falling-heart"
          style={{
            left: `${heart.left}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.delay}s`
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default FallingHearts;