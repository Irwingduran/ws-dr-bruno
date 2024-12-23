import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface Testimonial {
  text: string;
  name: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    text: 'Recientemente conocí al Dr. Bruno Rubí cuando consultó en el hospital Riberas en Ajijic.',
    name: 'Louis Solomon',
    date: 'hace 3 meses',
  },
  {
    text: 'Es una eminencia, explica absolutamente todo de tal manera que entiendes perfectamente tanto la condición como el tratamiento, y te da posibles soluciones para la condición. Excelente ser humano.',
    name: 'Paola Gutiérrez',
    date: 'hace 8 meses',
  },
  {
    text: 'El doctor le brindó a mi papá el mejor servicio que puede haber, gran doctor, explica todo muy bien. Muy agradecida con él y su personal.',
    name: 'Dulce Hernández',
    date: 'hace 8 meses',
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
        <h2 className="text-4xl font-bold text-center mb-10 text-neutralDGrey">Testimonios de Pacientes</h2>
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
