import { useState, useEffect } from 'react';
import Blender1 from '../../../assets/icon/Logo.png';
import Blender2 from '../../../assets/img/img3.jpg';
import Blender3 from '../../../assets/img/FB-post.jpeg';
import Blender4 from '../../../assets/img/screens.png';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const manejarDesplazamiento = (elementId) => {
    const elemento = document.getElementById(elementId);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const diapositivas = [
    {
      image: Blender1,
      title: 'Enfoque Innovador y Eficaz',
      description: 'En cirugía HoLEP para el tratamiento de próstata, ha sido ampliamente elogiado, alcanzando el hito de 300 cirugías exitosas.',
      cta: {
        label: 'Agendar cita',
        action: () => manejarDesplazamiento('contacto'),
      },
    },
    {
      image: Blender2,
      title: 'Forbes: "Bruno Rubí López, prodigio en cirugía urológica con HoLEP".',
      description: 'Bruno Rubí López es considerado un joven cirujano prodigio, habiendo realizado más de 160 procedimientos con esta tecnología de vanguardia.',
      cta: {
        label: 'Ver artículo',
        link: 'https://www.forbes.com',
      },
    },
    {
      image: Blender3,
      title: 'Cirujano Robótico Destacado',
      description: 'Da Vinci Company en México ofrece posición a Dr. Bruno Rubí, experto en cirugía robótica.',
      cta: {
        label: 'Ver publicación en Facebook',
        link: 'https://www.facebook.com/share/p/vkAQS6ArYr8XvLpe/',
      },
    },
    {
      image: Blender4,
      title: 'Un paciente comparte su experiencia',
      description: 'Viajar a Puebla para tu operación con Toni Lucca.',
      cta: {
        label: 'Ver video',
        action: () => manejarDesplazamiento('video'),
      },
    },
  ];

  const manejarAnterior = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? diapositivas.length - 1 : prevIndex - 1));
  };

  const manejarSiguiente = () => {
    setCurrentIndex((prevIndex) => (prevIndex === diapositivas.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const intervalo = setInterval(manejarSiguiente, 8000);
    return () => clearInterval(intervalo);
  }, []);

  const manejarClickCta = (e, diapositiva) => {
    e.preventDefault();
    if (diapositiva.cta.action) {
      diapositiva.cta.action();
    } else if (diapositiva.cta.link) {
      window.open(diapositiva.cta.link, '_blank');
    }
  };

  return (
    <div className="bg-neutralSilver min-h-screen relative">
      <div className="px-4 sm:px-6 lg:px-14 max-w-screen-2xl mx-auto flex items-center justify-center">
        <div className="py-8 md:py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-6 md:gap-12 w-full">
          {/* Contenedor de imagen con proporción dinámica */}
          <div className="relative w-full md:w-1/2 overflow-hidden rounded-lg" style={{ paddingBottom: '56.25%' }}>
            <img
              src={diapositivas[currentIndex].image}
              alt={diapositivas[currentIndex].title}
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out opacity-90 hover:opacity-100"
            />
          </div>

          {/* Contenido de texto */}
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
            <h1 className="text-2xl md:text-4xl font-semibold text-neutralDGrey leading-tight md:leading-snug">
              {diapositivas[currentIndex].title}
            </h1>
            <p className="text-sm md:text-base text-neutralGrey">
              {diapositivas[currentIndex].description}
            </p>
            <button
              onClick={(e) => manejarClickCta(e, diapositivas[currentIndex])}
              className="btn-primary transition transform hover:scale-105 w-full md:w-auto"
            >
              {diapositivas[currentIndex].cta.label}
            </button>
          </div>
        </div>

        {/* Controles del carrusel */}
        <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-4 px-4">
          <button
            className="bg-brandPrimary text-white py-2 px-4 rounded-full hover:bg-brandDark transition duration-300"
            onClick={manejarAnterior}
            aria-label="Diapositiva anterior"
          >
            &#9664;
          </button>
          <button
            className="bg-brandPrimary text-white py-2 px-4 rounded-full hover:bg-brandDark transition duration-300"
            onClick={manejarSiguiente}
            aria-label="Diapositiva siguiente"
          >
            &#9654;
          </button>
        </div>

        {/* Indicadores */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2">
          {diapositivas.map((_, index) => (
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
