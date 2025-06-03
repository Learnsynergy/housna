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
          Chaque jour passé à tes côtés est un cadeau précieux. 
          Ton sourire illumine ma vie, ton rire est ma mélodie préférée, 
          et ton amour est mon plus grand trésor. En ce jour spécial, 
          je veux te dire à quel point tu es extraordinaire et combien 
          je suis reconnaissant(e) de t'avoir dans ma vie.
        </p>
        <div className="flex justify-center mt-4">
          <div className="text-3xl text-red-500">❤️</div>
        </div>
      </div>
    </div>
  );
};

export default LoveMessage;