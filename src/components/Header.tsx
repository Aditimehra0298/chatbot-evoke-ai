import React, { useState } from 'react';
import { Bot, Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

interface HeaderProps {
  onRequestDemo: () => void;
  onScrollToSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestDemo, onScrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (section: string) => {
    onScrollToSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <img
  src="/Untitled design (1).png" // ✅ Replace with your actual path
  alt="Evoke AI Logo"
  className="w-12 h-12 object-contain rounded-xl animate-float"
/>

            <div>
              <h1 className="text-2xl font-bold blue-text-gradient">Evoke AI</h1>
              <p className="text-xs text-gray-500">AI division of DamnArt</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'features', 'about', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative group capitalize"
              >
                {section}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={onRequestDemo}
              className="hidden md:block"
              size="sm"
            >
              Request Demo Trial
            </Button>

            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4">
              {['home', 'features', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 hover:bg-gray-50 rounded-lg text-left capitalize"
                >
                  {section}
                </button>
              ))}
              <Button
                onClick={() => {
                  onRequestDemo();
                  setIsMobileMenuOpen(false);
                }}
                className="mx-4 w-fit"
                size="sm"
              >
                Request Demo Trial
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
