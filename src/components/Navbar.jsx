import React, { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img 
              src="/assets/images/imagen_6.png"
              alt="Logo Vera Méndez"
              className="h-8 w-auto"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
              <a href="#music" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Música</a>
              <a href="#videos" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Videos</a>
              <a href="#contact" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Redes Sociales</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-400"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/80 backdrop-blur-sm">
            <a href="#home" className="hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Inicio</a>
            <a href="#music" className="hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Música</a>
            <a href="#videos" className="hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Videos</a>
            <a href="#contact" className="hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Redes Sociales</a>
          </div>
        </div>
      )}
    </nav>
  );
}; 