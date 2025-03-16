
import React from 'react';
import { ChefHat, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-gray-100 py-12 mt-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <ChefHat className="h-6 w-6" strokeWidth={1.5} />
            <span className="text-lg font-medium tracking-tight">Culinary Canvas</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" strokeWidth={1.5} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Culinary Canvas. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
