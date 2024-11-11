import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface Testimonial {
  text: string;
  name: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    text: 'I recently met with Dr. Bruno Rubi, when he consulted at the Riberas hospital in Ajijic.',
    name: 'Louis Solomon',
    date: '3 months ago',
  },
  {
    text: 'He is an eminence, he explains absolutely everything in such a way that you understand perfectly both the condition and the treatment and he gives you possible solutions for the condition. Excellent human being.',
    name: 'Paola Gutiérrez',
    date: '8 months ago',
  },
  {
    text: 'The doctor gave my dad the best service there can be, great doctor, explains everything very well. Very grateful to him and his staff.',
    name: 'Dulce Hernandez',
    date: '8 months ago',
  },
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-neutralDGrey">Patient Testimonials</h2>
        <div className="flex justify-center">
          <div className="max-w-2xl p-8 bg-brandPrimary rounded-xl shadow-lg transform transition-all duration-500">
            <p className="text-xl italic text-white mb-6">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="text-center">
              <p className="font-semibold text-white">{testimonials[currentIndex].name}</p>
              <p className="text-sm text-gray-200">{testimonials[currentIndex].date}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-white text-brandPrimary rounded-full shadow hover:bg-gray-200 focus:outline-none flex items-center justify-center"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-white text-brandPrimary rounded-full shadow hover:bg-gray-200 focus:outline-none flex items-center justify-center"
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-brandPrimary' : 'bg-gray-400'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
