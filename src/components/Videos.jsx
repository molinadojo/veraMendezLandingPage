import React from 'react';

export const Videos = () => {
  const videos = [
    {
      id: "NNPksXyKvMI",
      title: "Video Musical 1"
    },
    {
      id: "hCFrB2N53m0",
      title: "Video Musical 2"
    },
    {
      id: "RcnBA0WiClw",
      title: "Video Musical 3"
    }
  ];

  return (
    <section id="videos" className="py-20 px-4 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Videos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 