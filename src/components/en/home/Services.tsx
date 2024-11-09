import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => (
  <Link 
    to={service.route}
    className="block transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full">
      <div className="overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-neutralDGrey mb-3">
          {service.title}
        </h3>
        <p className="text-neutralDGrey">
          {service.description}
        </p>
      </div>
    </div>
  </Link>
);

const Services = () => {
  const services = [
    {
      id: 'cirugia-holep',
      title: 'Prostatic Growth',
      description: 'Benign Prostatic Hyperlapsia',
      image: '/img/service2.jpg',
      route: '/ServiceGrowth',
    },
    {
      id: 'cancer-prostata',
      title: 'Prostate Cancer',
      description: 'Diagnosis & treatment of prostate cancer.',
      image: '/img/service.png',
      route: '/ServiceCancer',
    },
  ];

  return (
    <section className="py-16 bg-white" id="service">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y descripción */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-neutralDGrey mb-4">
            Our Services
          </h2>
          <p className="text-lg text-neutralDGrey">
            Specialist in benign and malignant diseases of the prostate gland.
          </p>
        </div>
        
        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;