import React from 'react';
import videoBg from '/trash/video.mp4';

const Home = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden' id='home'>
      {/* Overlay para el fondo oscuro */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Contenedor del video con posicionamiento absoluto */}
      <div className="absolute inset-0">
        <video 
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
          src={videoBg} 
          autoPlay 
          loop 
          muted 
          playsInline // Importante para iOS
        />
      </div>

      {/* Contenido centrado */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center px-4">
          Bruno Rubí López
        </h1>
        <p className="text-xl md:text-2xl mt-4 text-center px-4">
          Experto en Cirugía de Próstata
        </p>
      </div>
    </div>
  );
};

export default Home;