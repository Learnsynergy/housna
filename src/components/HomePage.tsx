import React from 'react';
import { Heart } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 md:py-24">
      <h1 className="text-4xl md:text-6xl text-center font-bold text-red-600 animate-pulse mb-6">
        Joyeux anniversaire Housna{' '}
        <Heart className="inline-block text-red-600 fill-red-600 animate-bounce" />
      </h1>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 blur opacity-50 rounded-full transform -rotate-3"></div>
        <p className="relative text-xl md:text-2xl text-center font-medium text-pink-700 italic">
          À toi, ma chérie, en ce jour spécial ❤️
        </p>
      </div>
    </div>
  );
};

export default HomePage;