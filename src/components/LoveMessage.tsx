import React, { useEffect, useState } from 'react';

const LoveMessage: React.FC = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-all duration-1000 ease-in-out ${visible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
      <div className="max-w-2xl mx-auto my-10 p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border-2 border-pink-200">
        <h2 className="text-2xl font-bold text-red-500 mb-4 text-center">Mon message d'amour</h2>
        <p className="text-pink-800 italic text-lg leading-relaxed">
          En ce jour si spécial, je veux te rappeler à quel point tu es précieuse pour moi. 
          Depuis que tu es entrée dans ma vie, tout a changé. Chaque moment passé à tes côtés est un cadeau, chaque sourire de toi est un rayon de soleil dans ma journée.
          Ta gentillesse, ta beauté, ta force et ton rire… tout en toi me fait tomber amoureux encore et encore.
          Aujourd’hui, c’est ton jour. Et je veux qu’il soit aussi merveilleux que toi.
          Je te promets d’être là pour toi, de te soutenir, de t’aimer, encore plus fort chaque jour.
          Merci d’être celle que tu es. Merci d’être dans ma vie.
          Je t’aime  💖
          Joyeux anniversaire, mon cœur.
        </p>
        <div className="flex justify-center mt-4">
          <div className="text-3xl text-red-500">❤️</div>
        </div>
      </div>
    </div>
  );
};

export default LoveMessage;