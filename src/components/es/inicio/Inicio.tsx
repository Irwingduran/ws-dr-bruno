

import videoBg from '../../../assets/video/video.mp4';
import Navbar from '../Navbar';
import Hero from './Hero'
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


const Inicio = () => {
  return (
    <div>

        <header>
            <Navbar/>
        </header>
    
        <div className="relative w-full h-screen overflow-hidden" id="home">
  {/* Overlay para el fondo oscuro */}
  <div className="absolute inset-0 bg-black/40 z-10"></div>
  
  {/* Contenedor del video con posicionamiento absoluto */}
  <div className="absolute inset-0">
    <video 
      className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
      src={videoBg} 
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
    <a href="https://api.whatsapp.com/send/?phone=5212228457430&amp;text=Hi+Dr.+I+found+your+profile+and+would+like+to+schedule+a+consultation&amp;type=phone_number&amp;app_absent=0" target="_blank" rel="noopener noreferrer" class="mt-6 px-6 py-3 bg-brandPrimary hover:bg-neutralDGrey text- text-lg font-semibold rounded-full shadow-lg transition-colors duration-300">Agendar Cita</a>
  </div>
</div>
<div>
        <Hero/>
    </div>
    <div>
        <Services/>
        <Banner/>
        <MedicalStats/>
    </div>
    <div>
        <About/>
    </div>
    <div>
        <Blog/>
    </div>
    <div>
   
    <Address/>
    </div>
    <div>
        <VideoComponent/>
    </div>
    <div>
        <TestimonialCarousel/>
        <Opinions/>
    </div>
 
    <div>
        <Parners/>
    </div>
    <div>
        <Footer/>
    </div>



    </div>
  )
} 

export default Inicio
