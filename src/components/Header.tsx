
import React from 'react';
import { ChefHat } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto py-4 px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ChefHat className="h-6 w-6" strokeWidth={1.5} />
          <span className="text-lg font-medium tracking-tight">Culinary Canvas</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Home
          </a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Gallery
          </a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            About
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
