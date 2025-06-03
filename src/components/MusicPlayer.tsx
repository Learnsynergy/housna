import React, { useEffect, useRef } from 'react';
import { Music, Pause, Play } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
  togglePlay: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, togglePlay }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Audio playback prevented:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);
  
  return (
    <div className="fixed bottom-5 right-5 z-10">
      <div className="bg-white/80 backdrop-blur-sm rounded-full shadow-lg p-3 flex items-center">
        <Music className="text-pink-500 mr-2" size={20} />
        <button 
          onClick={togglePlay}
          className="bg-pink-500 hover:bg-pink-600 text-white rounded-full p-2 focus:outline-none"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
        <audio 
          ref={audioRef} 
          loop 
          src="https://www.chosic.com/wp-content/uploads/2021/02/Sweet_Love_-_AshamaluevMusic.mp3"
        />
        <span className="ml-2 text-sm text-pink-700">
          {isPlaying ? 'Pause' : 'Jouer'} la musique
        </span>
      </div>
    </div>
  );
};

export default MusicPlayer;