import { Carousel } from 'flowbite-react';
import React from 'react';
import Blender1 from '../../public/trash/img1.jpg';
import Blender2 from '../../public/trash/image2.png';
import Blender3 from '../../public/trash/image5.png';
import Blender4 from '../../public/trash/image7.jpg';
import Blender5 from '../../public/trash/image4.jpg';

const Gallery = () => {
  return (
    <div className='bg-neutralSilver'>
        
        <div className='px-10 lg:px-14 max-w-screen-2x1 mx-auto min-h-screen h-screen'>
            <Carousel className='w-full mx-auto'>
                <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 '>
                    <div>
                        <img src={Blender1} alt="sliderImg" />
                    </div>
                </div>

                <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                    <div>
                        <img src={Blender2} alt="sliderImg" />
                    </div>
                </div>

                <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                    <div>
                        <img src={Blender3} alt="sliderImg" />
                    </div>
                </div>
                <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                    <div>
                        <img src={Blender4} alt="sliderImg" />
                    </div>
                </div>
                <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                    <div>
                        <img src={Blender5} alt="sliderImg" />
                    </div>
                </div>

                
               
            </Carousel>

        </div>

    </div>
  );
};

export default Gallery