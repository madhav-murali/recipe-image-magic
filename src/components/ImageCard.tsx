
import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

interface ImageCardProps {
  imageUrl: string;
  title: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, title }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setIsLoaded(true);
  }, [imageUrl]);

  return (
    <div 
      className="relative overflow-hidden rounded-2xl shadow-subtle transition-all duration-300 hover:shadow-hover animate-slide-up opacity-0"
      style={{ animationDelay: '0.2s' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isLoaded ? 'image-loaded scale-100' : 'image-loading scale-105'
          } ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>
      <div 
        className={`absolute bottom-0 left-0 right-0 p-4 glass-dark text-white transform transition-transform duration-300 ${
          isHovered ? 'translate-y-0' : 'translate-y-8'
        }`}
      >
        <h3 className="font-medium text-lg mb-1 truncate">{title}</h3>
        <div className="flex items-center justify-between">
          <p className="text-sm text-white/80 truncate">Generated image</p>
          <button 
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Download image"
          >
            <Download className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
