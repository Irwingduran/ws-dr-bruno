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
    title="Find more information on my digital card at Findoctor"
    description="Access my digital card on Findoctor to easily find information about my services, location, schedule, and contact details. Book your appointment online quickly and securely."
    buttonText="Go to my digital card"
  />
  
  
  );
};

export default App;
