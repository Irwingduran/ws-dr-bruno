import React, { useState, useEffect } from 'react';
import Blender1 from '../../public/trash/Img3.png';
import Blender2 from '../../public/logos/forbes.png';
import Blender3 from '../../public/trash/Logo.png';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: Blender3,
      title: 'Innovative and Effective Approach',
      description: 'In HoLEP surgery for prostate treatment, he has been widely praised, reaching the milestone of 300 successful surgeries.',
      cta: {
        label: 'Schedule Appointment',
        link: 'https://api.whatsapp.com/send/?phone=5212228457430&text=Hi+Dr.+I+found+your+profile+on+findoctor+and+would+like+to+schedule+a+consultation&type=phone_number&app_absent=0',
      },
    },
    {
      image: Blender2,
      title: 'Forbes: "Bruno Rubí López, urological surgeon prodigy at HoLEP".',
      description: 'Bruno Rubí López is considered a young prodigy surgeon, having completed more than 160 procedures with the use of this cutting-edge technology.',
      cta: {
        label: 'View Article',
        link: 'Bruno Rubí López is considered a young prodigy surgeon, having completed more than 160 procedures with the use of this cutting-edge technology.',
      },
    },
    {
      image: Blender1,
      title: 'Innovative and Effective Approach',
      description: 'In HoLEP surgery for prostate treatment, he has been widely praised, reaching the milestone of 300 successful surgeries.',
      cta: {
        label: 'View Facebook Post',
        link: 'https://www.facebook.com/share/p/vkAQS6ArYr8XvLpe/',
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
    const interval = setInterval(() => {
      handleNext();
    }, 8000); // Cambia cada 8 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  return (
    <div className="bg-neutralSilver h-fit relative">
      <div className="px-10 lg:px-14 max-w-screen-2xl mx-auto min-h-screen flex items-center justify-center">
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div>
            <img src={slides[currentIndex].image} alt="sliderImg" width="300px" />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
              {slides[currentIndex].title}
            </h1>
            <p className="text-neutralGrey text-base mb-8">{slides[currentIndex].description}</p>
            <a
              href={slides[currentIndex].cta.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {slides[currentIndex].cta.label}
            </a>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-20 flex justify-center">
          <button
            className="bg-brandPrimary text-white font-bold py-2 px-4 mx-2 rounded-full hover:bg-brandDark transition duration-300"
            onClick={handlePrevious}
          >
            &#9664;
          </button>
          <button
            className="bg-brandPrimary text-white font-bold py-2 px-4 mx-2 rounded-full hover:bg-brandDark transition duration-300"
            onClick={handleNext}
          >
            &#9654;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
