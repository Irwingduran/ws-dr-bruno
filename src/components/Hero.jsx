import { Carousel } from 'flowbite-react';
import React from 'react';
import Blender1 from '../../public/trash/Img3.png';
import Blender2 from '../../public/trash/Img1.png';
import Blender3 from '../../public/trash/Logo.png';


const Hero = () => {
  return (
    <div className='bg-neutralSilver'>
        <div className='px-10 lg:px-14 max-w-screen-2x1 mx-auto min-h-screen h-screen'>
            <Carousel className='w-full mx-auto'>
                <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 '>
                    <div>
                        <img src={Blender3} width="300px" alt="sliderImg" />
                    </div>
                    { /* hero text  */ }
                    <div className='md:w-1/2 max-w-screen-2x1'>
                    <h1 className='text-5x1 font-semiblod mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Enfoque 
                    <span className='text-brandPrimary leading-snug'> Innovador y Eficaz</span> </h1>
                    <p className='text-neutralGrey text-base mb-8'>En la cirugía HoLEP para el tratamiento de la próstata ha sido ampliamente elogiado, 
                    alcanzando el hito de 300 cirugías exitosas. </p>
                    <a href="https://maps.app.goo.gl/2Pv734JFbGS6C6Bv8" target="_blank" rel="noopener noreferrer" className='btn-primary'>Agendar Cita</a>
                    </div>
                </div>

                <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                    <div>
                        <img src={Blender1} width="300px" alt="sliderImg" />
                    </div>
                    { /* hero text  */ }
                    <div className='md:w-1/2'>
                    <h1 className='text-5x1 font-semiblod mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Enfoque 
                    <span className='text-brandPrimary leading-snug'> Innovador y Eficaz</span> </h1>
                    <p className='text-neutralGrey text-base mb-8'>En la cirugía HoLEP para el tratamiento de la próstata ha sido ampliamente elogiado, 
                    alcanzando el hito de 300 cirugías exitosas. </p>
                    <a href="#Contacto" target="_blank" rel="noopener noreferrer" className='btn-primary'>Contacto</a>
                    </div>
                </div>

                <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                    <div>
                        <img src={Blender2} width="300px" alt="sliderImg" />
                    </div>
                    { /* hero text  */ }
                    <div className='md:w-1/2'>
                    <h1 className='text-5x1 font-semiblod mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Enfoque 
                    <span className='text-brandPrimary leading-snug'> Innovador y Eficaz</span> </h1>
                    <p className='text-neutralGrey text-base mb-8'>En la cirugía HoLEP para el tratamiento de la próstata ha sido ampliamente elogiado, 
                    alcanzando el hito de 300 cirugías exitosas. </p>
                    <a href="https://maps.app.goo.gl/2Pv734JFbGS6C6Bv8" target="_blank" rel="noopener noreferrer" className='btn-primary'>Ver Ubicación</a>
                    </div>
                </div>

                
               
            </Carousel>

        </div>

    </div>
  );
};

export default Hero