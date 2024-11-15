import { useState, useEffect } from 'react';
import Blender1 from '../../../assets/icon/Logo.png';
import Blender2 from '../../../assets/img/img1.jpg';
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
      title: 'Innovative and Effective Approach',
      description: 'In HoLEP surgery for prostate treatment, he has been widely praised, reaching the milestone of 300 successful surgeries.',
      cta: {
        label: 'Book appointment',
        action: () => handleScroll('contact'),
      },
    },
    {
      image: Blender2,
      title: 'Forbes: "Bruno Rubí López, urological surgeon prodigy at HoLEP".',
      description: 'Bruno Rubí López is considered a young prodigy surgeon, having completed more than 160 procedures with the use of this cutting-edge technology.',
      cta: {
        label: 'View article',
        link: 'https://www.forbes.com',
      },
    },
    {
      image: Blender3,
      title: 'Robotic Surgeon Top Surgeon',
      description: 'Da Vinci Company in Mexico offers situation to Dr. Bruno Rubi, expert in Robotic Surgery.',
      cta: {
        label: 'View Facebook post',
        link: 'https://www.facebook.com/share/p/vkAQS6ArYr8XvLpe/',
      },
    },
    {
      image: Blender4,
      title: 'A patient shares their experience',
      description: 'To traveling to Puebla for your operation with Toni Lucca',
      cta: {
        label: 'View video',
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
    <div className="bg-neutralSilver min-h-screen relative">
      <div className="px-4 sm:px-6 lg:px-14 max-w-screen-2xl mx-auto flex items-center justify-center">
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

        {/* Controles del carrusel */}
        <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-4 px-4">
          <button
            className="bg-brandPrimary text-white py-2 px-4 rounded-full hover:bg-brandDark transition duration-300"
            onClick={handlePrevious}
            aria-label="Previous slide"
          >
            &#9664;
          </button>
          <button
            className="bg-brandPrimary text-white py-2 px-4 rounded-full hover:bg-brandDark transition duration-300"
            onClick={handleNext}
            aria-label="Next slide"
          >
            &#9654;
          </button>
        </div>

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
