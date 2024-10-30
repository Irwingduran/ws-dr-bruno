import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      text: 'I recently met with Dr. Bruno Rubi, when he consulted at the Riberas hospital in Ajijic.',
      name: 'Louis Solomon',
      date: '3 months ago'
    },
    {
      text: 'He is an eminence, he explains absolutely everything in such a way that you understand perfectly both the condition and the treatment and he gives you possible solutions for the condition. Excellent human being.',
      name: 'Paola Gutiérrez',
      date: '8 months ago'
    },
    {
      text: 'The doctor gave my dad the best service there can be, great doctor, explains everything very well. Very grateful to him and his staff.',
      name: 'Dulce Hernandez',
      date: '8 months ago'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true, // Ajuste importante para centrar la tarjeta en el carrusel
    centerPadding: '0', // Para asegurarse de que no haya desplazamiento lateral
  };

  return (
    <section className="bg-gradient-to-r bg-[#fff] py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl font-bold text-neutralDGrey text-center mb-10">Patient Testimonials</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex justify-center">
              <div className="bg-brandPrimary p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 mx-auto max-w-xl">
                <div className="flex mb-4 justify-center">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-xl" />
                    ))}
                </div>
                <p className="text-xl text-[#fff] italic text-center mb-6">"{testimonial.text}"</p>
                <div className="text-center">
                  <p className="font-semibold text-[#fff]">- {testimonial.name}</p>
                  <p className="text-[#fff] text-sm">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
