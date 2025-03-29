import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-black/80">
      <div className="max-w-7xl mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Pablo Molina. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}; 