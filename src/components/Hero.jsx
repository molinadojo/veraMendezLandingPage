import React, { useState, useEffect } from 'react';

export const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const highlightTexts = [
    "Cantante · Compositora · Artista",
    "Embajadora del Cuarteto Cordobés",
    "Reconocida en el Flamingo Theater Bar de Miami",
    "Voz Dulce y Expresiva",
    "Refresh de Urbanidad con Visión Latina"
  ];

  const achievements = [
    { 
      number: "2019", 
      text: "Gira Internacional: Brasil, Venezuela, R. Dominicana, Cuba y México" 
    },
    { 
      number: "2020", 
      text: "Producción de disco con remakes de 'Amar y Vivir'" 
    },
    { 
      number: "1", 
      text: "Reconocimiento Internacional: Buenísimo Awards en los 1000 programas de Telefe Internacional" 
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % highlightTexts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/imagen_1.png"
          alt="Vera Méndez"
          className="w-full h-full md:h-auto md:min-h-full object-cover md:object-contain opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-black/70" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto mt-16 md:mt-0">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in 
                       bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300
                       pt-12 md:pt-0">
            Vera Méndez
          </h1>

          {/* Dynamic Subtitle */}
          <div className="h-20 md:h-16">
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay transition-all duration-500 ease-in-out">
              {highlightTexts[currentTextIndex]}
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl mb-8 text-purple-100 max-w-2xl mx-auto leading-relaxed">
            Cordobesa de pura cepa, embajadora natural del cuarteto. 
            Su elegancia, convicción y rebeldía son su marca registrada 
            en cada escenario que la recibe.
          </p>

          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-purple-300">
                  {achievement.number}
                </div>
                <div className="text-sm md:text-base text-purple-100">
                  {achievement.text}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#music"
              className="w-full sm:w-auto inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 animate-fade-in-delay-2 text-center"
            >
              Escuchar Ahora
            </a>
            <a 
              href="#contact"
              className="w-full sm:w-auto inline-block bg-transparent border-2 border-purple-400 hover:border-purple-300 text-white font-bold py-3 px-8 rounded-full transition duration-300 animate-fade-in-delay-2 text-center"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-purple-400"
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}; 