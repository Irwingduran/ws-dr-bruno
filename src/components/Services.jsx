import React, { useState } from 'react';
import Modal from './Modal';

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'urologia-general',
      title: 'Urología General',
      description: 'Evaluación y tratamiento de condiciones urológicas comunes.',
      image: '/trash/image3.jpg',
    },
    {
      id: 'cirugia-holep',
      title: 'Cirugía HoLEP',
      description: 'HoLEP = Holmium enucleation of the prostate", description: "HoLEP es el último y más avanzado tratamiento mínimamente invasivo que existe para tratar el agrandamiento benigno de la próstata. Y se encuentra en Puebla! HoLEP significa Holmium Láser Enucleación de la Próstata. Por ello siempre que nos refiramos a HOLEP estaremos mencionando al nuevo y revolucionario Láser de Holmium para la Enucleación de la Próstata.',
      image: '/trash/image4.jpg',
    },
    {
      id: 'cancer-prostata',
      title: 'Tratamiento del Cáncer de Próstata',
      description: 'Diagnóstico y tratamiento del cáncer de próstata.',
      image: '/trash/image7.jpg',
    },
    {
      id: 'cirugia-robotica',
      title: 'Cirugía Robótica',
      description: 'Robot da Vinci',
      image: '/trash/image6.jpg',
    },
  ];
  
  const openModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2x1 mx-auto' id='service'>
      <div className='mt-20 md:w-1/2 mx-auto text-center'>
        <h2 className='text-4x1 text-neutralDGrey font-semibold mb-2'>Servicios</h2>
        <p className='text-neutralDGrey'>Especialista en enfermedad benigna y maligna de la próstata</p>
      </div>

      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mt-4">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Services;
