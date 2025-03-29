import React from 'react';

export const Gallery = () => {
  const galleryImages = [
    {
      src: "/assets/images/imagen_4.png",
      alt: "Vera Méndez - Sesión fotográfica",
      caption: "Sesión fotográfica"
    },
    {
      src: "/assets/images/imagen_8.png",
      alt: "Vera Méndez - En estudio",
      caption: "En estudio"
    },
    {
      src: "/assets/images/imagen_9.png",
      alt: "Vera Méndez - Presentación",
      caption: "Presentación en vivo"
    },
    {
      src: "/assets/images/imagen_10.png",
      alt: "Vera Méndez - Retrato artístico",
      caption: "Retrato artístico"
    },
    {
      src: "/assets/images/imagen_26.png",
      alt: "Vera Méndez - Performance",
      caption: "Performance"
    },
    {
      src: "/assets/images/imagen_27.png",
      alt: "Vera Méndez - Actuación",
      caption: "Actuación en vivo"
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Galería</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full aspect-square object-cover transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <p className="text-white p-4">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 