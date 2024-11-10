import { useState, useEffect } from 'react';
import Blender1 from '../../../assets/icon/Logo.png';
import Blender2 from '../../../assets/img/Img1.jpg';
import Blender3 from '../../../assets/img/FB-post.jpeg';
import Blender4 from '../../../assets/img/screens.png';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const slides = [
    {
      image: Blender1,
      title: 'Innovative and Effective Approach',
      description: 'In HoLEP surgery for prostate treatment, he has been widely praised, reaching the milestone of 300 successful surgeries.',
      cta: {
        label: 'Book appointment',
        action: () => handleScroll('contact') 
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
        action: () => handleScroll('video') // ID de tu sección de video
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
    }, 8000);

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
    <div className="bg-neutralSilver h-fit relative">
      <div className="px-10 lg:px-14 max-w-screen-2xl mx-auto min-h-screen flex items-center justify-center">
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div className="relative overflow-hidden w-full h-[500px] md:h-[600px]">
            <img
              src={slides[currentIndex].image}
              alt="sliderImg"
              className="object-cover w-full h-full transition-opacity duration-1000 ease-in-out opacity-90 hover:opacity-100"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
              {slides[currentIndex].title}
            </h1>
            <p className="text-neutralGrey text-base mb-8">
              {slides[currentIndex].description}
            </p>
            <button
              onClick={(e) => handleCtaClick(e, slides[currentIndex])}
              className="btn-primary transition transform hover:scale-105"
            >
              {slides[currentIndex].cta.label}
            </button>
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
        <div className="absolute bottom-10 flex justify-center w-full space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
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