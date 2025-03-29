import React from 'react';

export const Music = () => {
  const releases = [
    {
      title: "VERA",
      cover: "/assets/images/imagen_24.png",
      spotifyUrl: "https://open.spotify.com/artist/6CB9afBFLNVz9p7OzpZRyr",
      description: "Remakes de la banda sonora 'Amar y Vivir'"
    },
    // Agregar más lanzamientos aquí
  ];

  return (
    <section id="music" className="relative py-20 px-4 overflow-hidden">
      {/* Background with gradient and texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-black/95 to-purple-900/90" />
        <div className="absolute inset-0 bg-[url('/assets/images/imagen_6.png')] opacity-10 bg-cover bg-center mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-400">
            Mi Música
          </h2>
          <p className="text-purple-200/80 text-lg max-w-2xl mx-auto">
            Un refresh de urbanidad contenedora y varios géneros que, bajo la visión latina, 
            definen su corazón pop en todas sus formas
          </p>
        </div>
        
        {/* Content Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Music Grid */}
          <div className="w-full md:w-1/2 max-w-md">
            {releases.map((release, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm 
                          rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300
                          border border-purple-500/20 hover:border-purple-500/40"
              >
                {/* Album Cover */}
                <div className="relative aspect-square mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={release.cover} 
                    alt={release.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Album Info */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-purple-100">{release.title}</h3>
                  <p className="text-purple-300/80 text-sm">{release.description}</p>
                  
                  {/* Spotify Button */}
                  <a 
                    href={release.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 
                             text-white font-medium py-3 px-6 rounded-full transition-all duration-300
                             group-hover:shadow-lg group-hover:shadow-green-500/20"
                  >
                    <span>Escuchar en Spotify</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="w-full md:w-1/2 max-w-md text-center">
            <div className="bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm 
                          rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-purple-100 mb-4">¿Querés contactarme?</h3>
              <p className="text-purple-200/80 mb-6">
                Estoy disponible para shows, eventos y colaboraciones
              </p>
              <a 
                href="https://wa.me/5492932610378"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#128C7E] 
                         text-white font-medium py-4 px-8 rounded-full transition-all duration-300
                         hover:shadow-lg hover:shadow-[#25D366]/20 w-full"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Contactar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 