import React from 'react';

const HeartfeltSection: React.FC = () => {
  const thoughts = [
    {
      title: "Ce que j'aime chez toi",
      content: "Ta gentillesse, ton intelligence, ta beauté, ton rire contagieux, ta passion et ta force de caractère."
    },
    {
      title: "Nos plus beaux souvenirs",
      content: "Nos balades main dans la main, nos fous rires interminables, nos voyages inoubliables, et tous ces petits moments du quotidien qui sont devenus si précieux."
    },
    {
      title: "Ce que je te souhaite",
      content: "Le bonheur, la santé, la réussite dans tous tes projets, et que tous tes rêves se réalisent. Tu mérites le meilleur."
    },
    {
      title: "Ma promesse",
      content: "Être toujours là pour toi, t'aimer chaque jour davantage, et construire ensemble un avenir rempli d'amour et de joie."
    }
  ];

  return (
    <div className="my-16">
      <h2 className="text-3xl text-center font-bold text-red-600 mb-10">Tout ce que je ressens pour toi</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {thoughts.map((thought, index) => (
          <div 
            key={index} 
            className="bg-white/90 p-6 rounded-lg shadow-md border-2 border-pink-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-pink-600 mb-3">{thought.title}</h3>
            <p className="text-gray-700">{thought.content}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-2xl font-bold text-red-500">Je t'aime infiniment ❤️</p>
        <p className="mt-2 text-pink-700 italic">Aujourd'hui, demain et pour toujours</p>
      </div>
    </div>
  );
};

export default HeartfeltSection;