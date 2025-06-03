import React, { useState } from 'react';
import HomePage from './components/HomePage';
import PhotoSection from './components/PhotoSection';
import LoveMessage from './components/LoveMessage';
import HeartfeltSection from './components/HeartfeltSection';
import FallingHearts from './components/FallingHearts';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 relative overflow-hidden">
      <FallingHearts />
      <div className="container mx-auto px-4 py-8">
        <HomePage />
        <PhotoSection />
        <div className="flex justify-center mt-8">
          <button
            onClick={toggleMessage}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none"
          >
            {showMessage ? 'Cacher le message' : 'Voir mon message d\'amour'}
          </button>
        </div>
        {showMessage && <LoveMessage />}
        <HeartfeltSection />
        <MusicPlayer isPlaying={isMusicPlaying} togglePlay={toggleMusic} />
      </div>
    </div>
  );
}

export default App;