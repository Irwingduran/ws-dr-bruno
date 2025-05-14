import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface Testimonial {
  text: string;
  name: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    text: 'Very professional, explains everything in detail, and is empathetic towards the needs of both the patient and their family.',
    name: 'Citlaly Cruz',
    date: 'December 21, 2024',
  },
  {
    text: 'Excellent explanation, we are starting the treatment. He demonstrates great confidence and experience.',
    name: 'Omar Salcedo',
    date: 'December 19, 2024',
  },
  {
    text: 'The way he explained everything was extremely detailed, and the trust he inspires is incredible.',
    name: 'JIEC',
    date: 'December 18, 2024',
  },
  {
    text: 'The doctor was very attentive and kind to me! Everything was great. Thank you very much.',
    name: 'MFFI',
    date: 'December 18, 2024',
  },
  {
    text: 'A very honest professional. Nowadays, most doctors suggest unnecessary treatments to charge more, but this doctor treated me only with what was necessary.',
    name: 'Brandon Huesca',
    date: 'December 16, 2024',
  },
  {
    text: 'Excellent attention, very clear explanations, and a clean, well-designed office.',
    name: 'Ricardo Hernández Hernández',
    date: 'December 13, 2024',
  },
  {
    text: 'Excellent doctor, an expert in his field and the latest technological advancements.',
    name: 'Carlos Estrada',
    date: 'December 9, 2024',
  },
  {
    text: 'From the beginning of the consultation, the doctor acted with professionalism and competence. He inspired enough confidence in me, and I have no doubt he will heal me. I will follow his instructions. I am grateful.',
    name: 'Arturo Gutiérrez Orozco',
    date: 'December 5, 2024',
  },
  {
    text: 'Excellent attention, respect for the patient, shows interest in providing the best solution, and has the necessary knowledge and expertise.',
    name: 'JMV',
    date: 'December 3, 2024',
  },
  {
    text: 'He explained the situation in detail, was cordial, and clearly knowledgeable in his field. I highly recommend him.',
    name: 'Edmundo Rojas',
    date: 'November 18, 2024',
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
