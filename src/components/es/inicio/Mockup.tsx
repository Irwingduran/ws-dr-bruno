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
          <a href="https://www.findoctor.com.mx/doctores/bruno-rubi-lopez" target="_blank"><button className='btn-primary text-white'>
          {buttonText}
                    </button>
                    </a>
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
  title="Encuentra más información en mi tarjeta digital en Findoctor"
  description="Accede a mi tarjeta digital en Findoctor y obtén fácilmente información sobre mis servicios, ubicación, horarios y formas de contacto. Agenda tu cita en línea de manera rápida y segura."
  buttonText="Ir a mi tarjeta digital"
/>


  
  );
};

export default App;
