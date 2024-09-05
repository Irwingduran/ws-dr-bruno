import React from 'react';
import { useParams } from 'react-router-dom';

const LandingPage = () => {
  const { id } = useParams();

  const services = {
    'urologia-general': {
      title: 'Servicio de Urología General',
      description: 'Evaluación y tratamiento de condiciones urológicas comunes.',
    },
    'cirugia-holep': {
      title: 'Servicio de Cirugía HoLEP',
      description: 'Tratamiento avanzado para el agrandamiento prostático.',
    },
    'cancer-prostata': {
      title: 'Tratamiento del Cáncer de Próstata',
      description: 'Diagnóstico y tratamiento del cáncer de próstata.',
    },
    'cirugia-robotica': {
      title: 'Servicio de Cirugía Robótica',
      description: 'Robot da Vinci.',
    },
  };

  const service = services[id] || {};

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">{service.title}</h1>
          <p className="text-lg mt-2">{service.description}</p>
        </div>
      </header>
      
      {/* Puedes agregar más secciones aquí según el servicio */}
    </div>
  );
};

export default LandingPage;
