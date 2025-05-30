import { useState, useEffect } from 'react';
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
import Footer from "../MyFooter";
import Parners from './Parners';
import MedicalStats from './MedicalStats';
import Mockup from './Mockup';
import SocialMediaButtons from './SocialMediaButtons';


const Inicio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); //modal
  const [currentVideo, setCurrentVideo] = useState(videoBg); //bg-video

  //modal
  useEffect(() => {
    // Open modal when the app loads
    setIsModalOpen(true);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };


//bg video
  useEffect(() => {
    // Listener para cambiar el video según el ancho de la pantalla
    const updateVideo = () => {
      if (window.innerWidth <= 768) {
        setCurrentVideo(videoBgMobile); // Cambiar a video vertical
      } else {
        setCurrentVideo(videoBg); // Video original
      }
    };

    updateVideo(); // Inicializar al cargar
    window.addEventListener('resize', updateVideo); // Escuchar cambios de tamaño

    return () => {
      window.removeEventListener('resize', updateVideo); // Limpiar listener
    };
  }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <SocialMediaButtons/>

      <div className="relative w-full h-screen overflow-hidden" id="inicio">
        {/* Overlay para el fondo oscuro */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Contenedor del video con posicionamiento absoluto */}
        <div className="absolute inset-0">
          <video
            className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
            src={currentVideo}
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
          Experto en Cirugía de Próstata
          </p>
          <a
  href="https://api.whatsapp.com/send/?phone=5212228457430&text=Hola+Dr.+encontr%C3%A9+su+perfil+en+findoctor+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0"
  target="_blank"
  className="mt-6 bg-brandPrimary text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-neutralDGrey hover:shadow-lg transition-all transform hover:scale-105 w-48 text-center"
>
  Agendar Cita
</a>

        </div>
      </div>

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
        <Mockup/>
      </div>
      <div>
        <VideoComponent />
      </div>
      <div>
        <Opinions />
        <TestimonialCarousel />
      </div>
      <div>
        <Parners />
      </div>
      <div id="contacto">
        <Footer />
      </div>
    </div>
  );
};

export default Inicio;
