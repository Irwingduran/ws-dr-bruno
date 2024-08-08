import React, { useState } from 'react';
import Modal from './Modal';

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {id: 1, title: "Cirugía Láser de Próstata", minDescription: "HoLEP = Holmium enucleation of the prostate", description: "HoLEP es el último y más avanzado tratamiento mínimamente invasivo que existe para tratar el agrandamiento benigno de la próstata. Y se encuentra en Puebla! HoLEP significa Holmium Láser Enucleación de la Próstata. Por ello siempre que nos refiramos a HOLEP estaremos mencionando al nuevo y revolucionario Láser de Holmium para la Enucleación de la Próstata.", img: "/trash/check-up.png"},
    {id: 2, title: "Prostatectomia Radical Robótica", img: "/trash/check-up.png" },
    {id: 3, title: "Prostata Benigna", minDescription: "Hiperplasia prostática benigna", img: "/trash/check-up.png"},
    {id: 4, title: "Cirugía Robótica", minDescription: "Robot da Vinci", img: "/trash/check-up.png"},
    {id: 5, title: "Próstata Maligna", minDescription: "Cáncer de próstata", img: "/trash/check-up.png" },
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
        <h2 className='text-4x1 text-neutralDGrey font-semibold mb-2'> Especialista en:</h2>
        <p className='text-neutralDGrey'>Especialista en enfermedad benigna y maligna de la próstata</p>
      </div>

      <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
        {services.map(service => (
          <div
            key={service.id}
            className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'
            onClick={() => openModal(service)}
          >
            <div>
              <div className='mb-4 h-14 w-14 mx-auto rounded-tl-3x1 rounded-br-3x1'>
                <img src={service.img} height='20px' alt=""  className=''/>
              </div>
              <h4 className='text-2x1 font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
              <p className='text-sm text-neutralDGrey'>{service.minDescription}</p>
            
            </div>
          </div>
        ))}
      </div>

      <Modal showModal={showModal} closeModal={closeModal} service={selectedService} />
    </div>
  );
};

export default Services;


const services = [
    {id: 1, title: "Cirugía Láser de Próstata", minDescription: "HoLEP = Holmium enucleation of the prostate", description: "HoLEP es el último y más avanzado tratamiento mínimamente invasivo que existe para tratar el agrandamiento benigno de la próstata. Y se encuentra en Puebla! HoLEP significa Holmium Láser Enucleación de la Próstata. Por ello siempre que nos refiramos a HOLEP estaremos mencionando al nuevo y revolucionario Láser de Holmium para la Enucleación de la Próstata.", img: "/trash/check-up.png"},
    {id: 2, title: "Prostatectomia Radical Robótica", img: "/trash/check-up.png" },
    {id: 3, title: "Prostata Benigna", minDescription: "Hiperplasia prostática benigna", img: "/trash/check-up.png"},
    {id: 4, title: "Cirugía Robótica", minDescription: "Robot da Vinci", img: "/trash/check-up.png"},
    {id: 5, title: "Próstata Maligna", minDescription: "Cáncer de próstata", img: "/trash/check-up.png" },
  ];