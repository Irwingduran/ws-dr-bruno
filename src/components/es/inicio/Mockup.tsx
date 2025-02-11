import React from "react";

interface ServiceSectionProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  imageUrl,
  title,
  description,
  buttonText,
}) => {
  return (
    <section className="flex items-center justify-center bg-white py-12 px-6">
      <div className="max-w-6xl flex flex-col md:flex-row items-center gap-8">
        {/* Imagen */}
        <div className="w-full md:w-1/2">
          <img
            src={imageUrl}
            alt="Service"
            className="w-full"
          />
        </div>

        {/* Contenido */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-neutralDGrey">{title}</h2>
          <p className="text-gray-700 mt-4 p-5">{description}</p>
          <button href="" className='btn-primary text-white'>
          {buttonText}
                    </button>
        </div>
      </div>
    </section>
  );
};

// Ejemplo de uso
const App = () => {
  return (
    <ServiceSection
    imageUrl="/img/mockup.png"
    title="Especialista en Cirugía Láser Prostática HoLEP"
    description="El Dr. Bruno Rubí López es un cirujano urólogo especializado en la técnica HoLEP, un procedimiento mínimamente invasivo para el tratamiento de la hiperplasia prostática benigna. Con más de 300 cirugías exitosas, su experiencia y precisión garantizan una recuperación rápida y efectiva para sus pacientes."
    buttonText="Agenda tu cita"
  />
  
  );
};

export default App;
