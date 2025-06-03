import React from 'react';

const PhotoSection: React.FC = () => {
  return (
    <div className="flex justify-center my-8">
      <div className="relative max-w-sm w-full">
        {/* Decorative elements */}
        <div className="absolute -top-3 -left-3 w-8 h-8 bg-pink-200 rounded-full"></div>
        <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-pink-200 rounded-full"></div>
        <div className="absolute -top-3 -right-3 w-6 h-6 bg-red-300 rounded-full"></div>
        <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-red-300 rounded-full"></div>
        
        {/* Photo frame */}
        <div className="border-8 border-white rounded-lg shadow-xl p-3 bg-gradient-to-br from-pink-100 to-pink-50">
          <div className="aspect-[3/4] bg-pink-200 rounded flex items-center justify-center">
            <p className="text-pink-600 text-center p-4">
              Ajoutez votre photo ici<br/>
              (Taille recommandée: 600x800px)
            </p>
          </div>
          <div className="mt-3 text-center text-pink-700 font-medium">
            La plus belle des étoiles
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoSection;