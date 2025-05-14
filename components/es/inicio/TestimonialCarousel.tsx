import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface Testimonial {
  text: string;
  name: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    text: 'Muy profesional, explica todo en detalle y es empático con las necesidades tanto del paciente como de su familia.',
    name: 'Citlaly Cruz',
    date: '21 de diciembre de 2024',
  },
  {
    text: 'Explicación excelente, estamos comenzando el tratamiento. Demuestra gran confianza y experiencia.',
    name: 'Omar Salcedo',
    date: '19 de diciembre de 2024',
  },
  {
    text: 'La forma en que explicó todo fue extremadamente detallada, y la confianza que inspira es increíble.',
    name: 'JIEC',
    date: '18 de diciembre de 2024',
  },
  {
    text: '¡El doctor fue muy atento y amable conmigo! Todo estuvo excelente. Muchas gracias.',
    name: 'MFFI',
    date: '18 de diciembre de 2024',
  },
  {
    text: 'Un profesional muy honesto. Hoy en día, la mayoría de los médicos sugieren tratamientos innecesarios para cobrar más, pero este doctor me trató solo con lo necesario.',
    name: 'Brandon Huesca',
    date: '16 de diciembre de 2024',
  },
  {
    text: 'Excelente atención, explicaciones muy claras y un consultorio limpio y bien diseñado.',
    name: 'Ricardo Hernández Hernández',
    date: '13 de diciembre de 2024',
  },
  {
    text: 'Excelente doctor, experto en su campo y en los últimos avances tecnológicos.',
    name: 'Carlos Estrada',
    date: '9 de diciembre de 2024',
  },
  {
    text: 'Desde el inicio de la consulta, el doctor actuó con profesionalismo y competencia. Me inspiró suficiente confianza y no tengo duda de que me sanará. Seguiré sus instrucciones. Estoy agradecido.',
    name: 'Arturo Gutiérrez Orozco',
    date: '5 de diciembre de 2024',
  },
  {
    text: 'Excelente atención, respeto al paciente, muestra interés en brindar la mejor solución y cuenta con el conocimiento y la experiencia necesarios.',
    name: 'JMV',
    date: '3 de diciembre de 2024',
  },
  {
    text: 'Explicó la situación en detalle, fue cordial y claramente conocedor en su campo. Lo recomiendo ampliamente.',
    name: 'Edmundo Rojas',
    date: '18 de noviembre de 2024',
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
