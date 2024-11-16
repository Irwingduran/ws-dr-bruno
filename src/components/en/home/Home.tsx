import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import videoBg from '../../../assets/video/video.mp4';
import videoBgMobile from '../../../assets/video/video2.mp4'; 
import Navbar from '../Navbar';
import Hero from './Hero';
import Services from './Services';
import Banner from './Banner';
import About from './About';
import Address from './Address';
import Blog from './Blog';
import VideoComponent from './VideoComponent';
import TestimonialCarousel from './TestimonialCarousel';
import Opinions from './Opinions';
import Form from './Form';
import Footer from "../MyFooter";
import Parners from './Parners';
import MedicalStats from './MedicalStats';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detecta si el dispositivo es móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Ancho de referencia para móvil
    };

    handleResize(); // Inicializa el estado al cargar el componente
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const videoSrc = isMobile ? videoBgMobile : videoBg; // Selecciona el video según el dispositivo

  return (
    <div>
      <header>
        <Navbar />
      </header>

      <div className="relative w-full h-screen overflow-hidden" id="home">
        {/* Overlay para el fondo oscuro */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        {/* Contenedor del video con posicionamiento absoluto */}
        <div className="absolute inset-0">
          <video
            className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
            src={videoSrc} // Usa el video dinámico
            autoPlay
            loop
            muted
            playsInline // Importante para iOS
          />
        </div>

        {/* Contenido centrado */}
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-center px-4">
            Dr. Bruno Rubí López
          </h1>
          <p className="text-xl md:text-2xl mt-4 text-center px-4">
            Expert in Prostate Surgery
          </p>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="mt-6 btn-primary transition transform hover:scale-105 w-full md:w-auto cursor-pointer"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      {/* Resto del contenido */}
      <div>
        <Hero />
      </div>
      <div>
        <Services />
        <Banner />
        <MedicalStats />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Blog />
      </div>
      <div>
        <Address />
      </div>
      <div>
        <VideoComponent />
      </div>
      <div>
        <TestimonialCarousel />
        <Opinions />
      </div>
      <div>
        <Form />
      </div>
      <div>
        <Parners />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
