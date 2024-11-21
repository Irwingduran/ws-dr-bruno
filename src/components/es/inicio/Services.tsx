import { Link } from 'react-router-dom';

const TarjetaServicio = ({ servicio }) => (
  <Link 
    to={servicio.route}
    className="block transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full">
      <div className="overflow-hidden">
        <img
          src={servicio.image}
          alt={servicio.title}
          className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-neutralDGrey mb-3">
          {servicio.title}
        </h3>
        <p className="text-neutralDGrey">
          {servicio.description}
        </p>
      </div>
    </div>
  </Link>
);

const Servicios = () => {
  const servicios = [
    {
      id: 'cirugia-holep',
      title: 'Crecimiento Prostático',
      description: 'Hiperplasia Prostática Benigna.',
      image: '/img/service2.jpg',
      route: '/es/ServiceGrowth',
    },
    {
      id: 'cancer-prostata',
      title: 'Cáncer de Próstata',
      description: 'Diagnóstico y tratamiento del cáncer de próstata.',
      image: '/img/service.png',
      route: '/es/ServiceCancer',
    },
  ];

  return (
    <section className="py-16 bg-white" id="servicio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y descripción */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-neutralDGrey mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-neutralDGrey">
            Especialista en enfermedades benignas y malignas de la glándula prostática.
          </p>
        </div>
        
        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {servicios.map((servicio) => (
            <TarjetaServicio key={servicio.id} servicio={servicio} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
