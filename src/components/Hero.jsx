import { Carousel } from 'flowbite-react';
import React from 'react';
import Blender1 from '../../public/trash/Img3.png';
import Blender2 from '../../public/trash/Img1.png';
import Blender3 from '../../public/trash/Logo.png';

const Hero = () => {
  return (
    <div className='bg-neutralSilver h-screen'>
        <div className='px-10 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
            <Carousel className='w-full mx-auto'>
                <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 '>
                    <div>
                        <img src={Blender3} alt="sliderImg" width='400px'/>
                    </div>
                    { /* hero text  */ }
                    <div className='md:w-1/2 max-w-screen-2xl'>
                    <h1 className='text-4xl font-semiblod mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Innovative 
                    <span className='text-brandPrimary leading-snug'> and Effective Approach</span> </h1>
                    <p className='text-neutralGrey text-base mb-8'>In HoLEP surgery for prostate treatment, he has been widely praised, reaching the milestone of 300 successful surgeries.</p>
                    <a href="https://api.whatsapp.com/send/?phone=5212228457430&text=Hi+Dr.+I+found+your+profile+on+findoctor+and+would+like+to+schedule+a+consultation&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className='btn-primary'>Schedule Appointment</a>
                    </div>
                </div>

                <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                    <div>
                        <img src={Blender1} alt="sliderImg" width='400px'/>
                    </div>
                    { /* hero text  */ }
                    <div className='md:w-1/2'>
                    <h1 className='text-4xl font-semiblod mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Innovative 
                    <span className='text-brandPrimary leading-snug'> and Effective Approach</span> </h1>
                    <p className='text-neutralGrey text-base mb-8'>In HoLEP surgery for prostate treatment, he has been widely praised, reaching the milestone of 300 successful surgeries.</p>
                    <a href="#Contact" target="_blank" rel="noopener noreferrer" className='btn-primary'>Contact</a>
                    </div>
                </div>

                <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                    <div>
                        <img src={Blender2} alt="sliderImg" width='400px' />
                    </div>
                    { /* hero text  */ }
                    <div className='md:w-1/2'>
                    <h1 className='text-4xl font-semiblod mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Innovative 
                    <span className='text-brandPrimary leading-snug'> and Effective Approach</span> </h1>
                    <p className='text-neutralGrey text-base mb-8'>In HoLEP surgery for prostate treatment, he has been widely praised, reaching the milestone of 300 successful surgeries.</p>
                    <a href="https://maps.app.goo.gl/2Pv734JFbGS6C6Bv8" target="_blank" rel="noopener noreferrer" className='btn-primary'>See Location</a>
                    </div>
                </div>
            </Carousel>
        </div>
    </div>
  );
};

export default Hero;
