import { Carousel } from 'flowbite-react';
import React from 'react';
import Blender1 from '../../public/trash/Img3.png';
import Blender2 from '../../public/img/blender2.png';
import Blender3 from '../../public/trash/Logo.png';


const Hero = () => {
  return (
    <div className='bg-neutralSilver' id='home'>
        <div className='px-10 lg:px-14 max-w-screen-2x1 mx-auto min-h-screen h-screen'>
            <Carousel className='w-full mx-auto'>
                <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                    <div>
                        <img src={Blender1} width="350px" alt="sliderImg" />
                    </div>
                    { /* hero text  */ }
                    <div className='md:w-1/2'>
                    <h1 className='text-5x1 font-semiblod mb-4 text-neutralDGrey md:w-3/4 leading-snug'>text text text
                    <span className='text-brandPrimary leading-snug'> text tex text</span> </h1>
                    <p className='text-neutralGrey text-base mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi officiis nulla odit corrupti 
                    optio maxime rem. Corrupti, soluta necessitatibus ex, ullam explicabo quas laboriosam temporibus aspernatur assumenda rem maiores vero.</p>
                    <button className='btn-primary'>texto</button>
                    </div>
                </div>

                <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                    <div>
                        <img src={Blender2} width="400px" alt="sliderImg" />
                    </div>
                    { /* hero text  */ }
                    <div className='md:w-1/2'>
                    <h1 className='text-5x1 font-semiblod mb-4 text-neutralDGrey md:w-3/4 leading-snug'>text text text
                    <span className='text-brandPrimary leading-snug'> text tex text</span> </h1>
                    <p className='text-neutralGrey text-base mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi officiis nulla odit corrupti 
                    optio maxime rem. Corrupti, soluta necessitatibus ex, ullam explicabo quas laboriosam temporibus aspernatur assumenda rem maiores vero.</p>
                    <button className='btn-primary'>texto</button>
                    </div>
                </div>

                <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                    <div>
                        <img src={Blender3} width="400px" alt="sliderImg" />
                    </div>
                    { /* hero text  */ }
                    <div className='md:w-1/2'>
                    <h1 className='text-5x1 font-semiblod mb-4 text-neutralDGrey md:w-3/4 leading-snug'>text text text
                    <span className='text-brandPrimary leading-snug'> text tex text</span> </h1>
                    <p className='text-neutralGrey text-base mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi officiis nulla odit corrupti 
                    optio maxime rem. Corrupti, soluta necessitatibus ex, ullam explicabo quas laboriosam temporibus aspernatur assumenda rem maiores vero.</p>
                    <button className='btn-primary'>texto</button>
                    </div>
                </div>

                
               
            </Carousel>

        </div>

    </div>
  );
};

export default Hero