import React from 'react';
import HAngeles from '../../public/img/HAngeles.png';

const Services = () => {
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2x1 mx-auto'>
        <div className='text-center my-8'>
            <h2 className='text-4x1 text-neutralDGrey font-semibold mb-2'> Mis Servicios</h2>
            <p className='text-neutralDGrey'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, odit?  </p>
        { /*  company logo */ }

        <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
            <img src={HAngeles} alt="" />
            <img src={HAngeles} alt="" />
        </div>
    </div>
    { /*  services card  */ }
    <div>
    <h2 className='text-4x1 text-neutralDGrey font-semibold mb-2'> Me especializo en:</h2>
    <p className='text-neutralDGrey'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, odit?  </p>
    </div>


    </div>
  )
}

export default Services