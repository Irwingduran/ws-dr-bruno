import React from 'react';
import aboutImg from '../../public/img/trayectoria.png';

const About = () => {
  return (
    <div>
        { /*  about text */ }
        <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto my-8' id='about'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
            <h2 className='text-4x1 text-neutralDGrey font-semibold mb-2'>Sobre mí</h2>
                <div>
                <img src={aboutImg} width="300px" alt="" />
                </div>
                <div className='md:w-3/4 mx -auto'>
                    <h2 className='text-4x1 text-neutralDGrey font-semibold mb-4 md:w-4/5'>El Dr. Bruce: Experto Internacional en Cirugía Láser de Próstata (HoLEP)</h2>
                    <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt laudantium, eaque quae eos atque maxime reprehenderit tempore fuga facilis veritatis repudiandae possimus quia, cum delectus voluptatem pariatur perspiciatis ratione.</p>
                    <button className='btn-primary'>Ver más</button>
                </div>
            </div>
        </div>

        { /*  stats */ }
        <div className='px-4 lg:px-14 mx-w-screen-2x1 mx-auto bg-neutralSilver py-16'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/2'>
                <h2 className='text-4x1 text-neutralDGrey font-semibold mb-4 md:w-2/3'>Titulo Titulo Titulo
                <br /><span className='text-brandPrimary'>Titulo</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur repudiandae quasi minus perspiciatis, impedit suscipit alias nesciunt dolorum voluptate reiciendis laborum deleniti blanditiis veritatis temporibus itaque tempora. Placeat, corrupti!</p>
                </div>
        { /*  stats */}        
            <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
            <div className='space-y-8'>
                <div className='flex items-center gap-4'>
                    <img src="" alt="" />
                    <div>
                        <h4 className='text-2x1 text-neutralDGrey font-semibold'>Titulo</h4>
                        <p>texto o numeros</p>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <img src="" alt="" />
                    <div>
                        <h4 className='text-2x1 text-neutralDGrey font-semibold'>Titulo</h4>
                        <p>texto o numeros</p>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <img src="" alt="" />
                    <div>
                        <h4 className='text-2x1 text-neutralDGrey font-semibold'>Titulo</h4>
                        <p>texto o numeros</p>
                    </div>
                </div>

                
            
            </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default About