import React from 'react';
import addressImg from '../../public/trash/image6.jpg';

const Address = () => {
  return (
    <div>
      { /* about text */ }
      <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto my-8'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
          <div>
            <img src={addressImg} width="400px" alt="" />
          </div>
          <div className='md:w-3/4 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>Hospital Angeles Puebla</h2>
            <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>Considered the most exclusive and equipped hospital in the State of Puebla.</p>
            <a href="https://hospitalangeles.com/medico/bruno-rubi-lopez" target="_blank" rel="noopener noreferrer" className='btn-primary'>See location</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
