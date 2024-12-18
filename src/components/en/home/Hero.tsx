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
      title: 'Innovative and Effective Approach',
      description: 'In HoLEP surgery for prostate treatment, he has been widely praised, reaching the milestone of 500 successful surgeries.',
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
      title: 'The world-class company of the Da Vinci Robot “INTUITIVE”. ',
      description: 'It recognizes the most outstanding surgeons nationwide, being Dr. Rubi the only Top Surgeon in the State of Puebla and one of the few in the country.',
      cta: {
        label: 'View Facebook post',
        link: 'https://www.facebook.com/share/p/vkAQS6ArYr8XvLpe/',
      },
    },
    {
      image: Blender4,
      title: 'U.S. native comes to Puebla for prostate surgery',
      description: 'Highly recommends the service of the Prostate Center.',
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
    <div className="bg-neutralSilver h-auto relative">
      <div className="px-4 sm:px-6 lg:px-14 mx-auto flex flex-col items-center gap-6 py-8 w-full">
        {/* Imagen */}
        <div className="relative w-full md:w-3/5 overflow-hidden rounded-lg">
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Contenido de texto */}
        <div className="text-center space-y-4 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutralDGrey leading-tight">
            {slides[currentIndex].title}
          </h1>
          <p className="text-sm sm:text-base text-neutralGrey">
            {slides[currentIndex].description}
          </p>
          <button
            onClick={(e) => handleCtaClick(e, slides[currentIndex])}
            className="bg-brandPrimary text-white py-3 px-6 rounded-lg hover:bg-brandDark transition-transform transform hover:scale-105"
          >
            {slides[currentIndex].cta.label}
          </button>
        </div>

        {/* Controles */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={handlePrevious}
            className="bg-brandPrimary text-white rounded-full p-2 hover:bg-brandDark transition"
          >
            &#9664;
          </button>
          <button
            onClick={handleNext}
            className="bg-brandPrimary text-white rounded-full p-2 hover:bg-brandDark transition"
          >
            &#9654;
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
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
