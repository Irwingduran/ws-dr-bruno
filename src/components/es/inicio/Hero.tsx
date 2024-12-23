import { useState, useEffect } from 'react';
import Blender1 from '../../../assets/icon/Logo.png';
import Blender2 from '../../../assets/img/forbes.png';
import Blender3 from '../../../assets/img/FB-post.jpeg';
import Blender4 from '../../../assets/img/screens.png';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const slides = [
    {
      image: Blender1,
      title: 'Enfoque innovador y efectivo',
      description: 'En la cirugía HoLEP para el tratamiento de la próstata, ha sido ampliamente elogiado, alcanzando el hito de 500 cirugías exitosas.',
      cta: {
        label: 'Agendar cita',
        action: () => handleScroll('contact'),
      },
    },
    {
      image: Blender2,
      title: 'Forbes: "Bruno Rubí López, prodigio de la cirugía urológica en HoLEP".',
      description: 'Bruno Rubí López es considerado un joven cirujano prodigio, habiendo realizado más de 160 procedimientos con el uso de esta tecnología de vanguardia.',
      cta: {
        label: 'Ver artículo',
        link: 'https://www.forbes.com',
      },
    },
    {
      image: Blender3,
      title: 'La empresa de clase mundial del Robot Da Vinci “INTUITIVE”.',
      description: 'Reconoce a los cirujanos más destacados a nivel nacional, siendo el Dr. Rubí el único Top Surgeon en el Estado de Puebla y uno de los pocos en el país.',
      cta: {
        label: 'Ver publicación de Facebook',
        link: 'https://www.facebook.com/share/p/vkAQS6ArYr8XvLpe/',
      },
    },
    {
      image: Blender4,
      title: 'Nativo de EE. UU. viene a Puebla para cirugía de próstata',
      description: 'Recomienda ampliamente el servicio del Centro de Próstata.',
      cta: {
        label: 'Ver video',
        action: () => handleScroll('video'),
      },
    },
  ];


  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleCtaClick = (e, slide) => {
    e.preventDefault();
    if (slide.cta.action) {
      slide.cta.action();
    } else if (slide.cta.link) {
      window.open(slide.cta.link, '_blank');
    }
  };

  return (
    <div className="bg-neutralSilver h-fitrelative">
  <div className="px-4 sm:px-6 lg:px-14 max-w-screen-2xl mx-auto flex items-center justify-center relative">
    
    {/* Botón Anterior - Fuera del contenedor */}
    <button
      className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-brandPrimary text-white opacity-80 py-2 px-4 rounded-full hover:bg-brandDark transition duration-300 z-10"
      onClick={handlePrevious}
      aria-label="Previous slide"
    >
      &#9664;
    </button>
    
    <div className="py-8 md:py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-6 md:gap-12 w-full">
      
      {/* Contenedor de imagen con proporción dinámica */}
      <div className="relative w-full md:w-1/2 overflow-hidden rounded-lg" style={{ paddingBottom: '56.25%' }}>
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].title}
          className="absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out opacity-90 hover:opacity-100"
        />
      </div>

      {/* Contenido de texto */}
      <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
        <h1 className="text-2xl md:text-4xl font-semibold text-neutralDGrey leading-tight md:leading-snug">
          {slides[currentIndex].title}
        </h1>
        <p className="text-sm md:text-base text-neutralGrey">
          {slides[currentIndex].description}
        </p>
        <button
          onClick={(e) => handleCtaClick(e, slides[currentIndex])}
          className="btn-primary transition transform hover:scale-105 w-full md:w-auto"
        >
          {slides[currentIndex].cta.label}
        </button>
      </div>
    </div>
    
    {/* Botón Siguiente - Fuera del contenedor */}
    <button
      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-brandPrimary opacity-80 text-white py-2 px-4 rounded-full hover:bg-brandDark transition duration-300 z-10"
      onClick={handleNext}
      aria-label="Next slide"
    >
      &#9654;
    </button>

    {/* Indicadores */}
    <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2">
      {slides.map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
            index === currentIndex ? 'bg-brandPrimary' : 'bg-neutralGrey'
          }`}
        />
      ))}
    </div>
  </div>
</div>


  );
};

export default Hero;
