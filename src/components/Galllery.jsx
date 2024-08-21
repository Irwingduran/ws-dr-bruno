import { Carousel } from 'flowbite-react';
import React from 'react';
import Blender1 from '../../public/trash/img1.jpg';
import Blender2 from '../../public/trash/image2.png';
import Blender3 from '../../public/trash/image5.png';
import Blender4 from '../../public/trash/image7.jpg';

const Gallery = () => {
  return (
    <div className='bg-neutralSilver'>
      <div className='px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
        <Carousel className='w-full mx-auto'>
          <div className='my-12 sm:my-16 md:my-20 lg:my-24 xl:my-28 py-8 sm:py-10 md:py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
            <div>
              <img src={Blender1} alt="sliderImg" />
            </div>
          </div>

          <div className='my-12 sm:my-16 md:my-20 lg:my-24 xl:my-28 py-8 sm:py-10 md:py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
            <div>
              <img src={Blender2} alt="sliderImg" />
            </div>
          </div>

          <div className='my-12 sm:my-16 md:my-20 lg:my-24 xl:my-28 py-8 sm:py-10 md:py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
            <div>
              <img src={Blender3} alt="sliderImg" />
            </div>
          </div>

          <div className='my-12 sm:my-16 md:my-20 lg:my-24 xl:my-28 py-8 sm:py-10 md:py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
            <div>
              <img src={Blender4} alt="sliderImg" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
