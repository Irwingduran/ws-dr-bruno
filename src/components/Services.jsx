import React from 'react';

const Services = () => {
  const services = [
    {
      id: 'cirugia-holep',
      title: 'Prostatic Growth',
      description: 'Benign Prostatic Hyperlapsia',
      image: '/trash/service2.jpg',
    },
    {
      id: 'cancer-prostata',
      title: 'Prostate Cancer',
      description: 'Diagnosis and treatment of prostate cancer.',
      image: '/trash/service.png',
    },
  ];

  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-1xl mx-auto' id='service'>
      <div className='mt-20 md:w-1/2 mx-auto text-center '>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Services</h2>
        <p className='text-neutralDGrey'>Specialist in benign and malignant disease of the prostate gland</p>
      </div>

      <div>
        {/* Sección de servicios centrados */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {services.map((service) => (
            <div key={service.id} className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-80">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mt-4">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      

    </div>
  );
};

export default Services;
