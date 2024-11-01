import React from 'react';
import addressImg from '../../public/trash/image2.png';

const Address = () => {
  return (
    <div>
      { /* about text */ }
      <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto my-24'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
          <div>
            <img src={addressImg} width="400px" alt="" />
          </div>
          <div className='md:w-3/4 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>Hospital Angeles Puebla</h2>
            <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>Considered the most exclusive and equipped hospital in the State of Puebla.</p>
            <a href="https://hospitalangeles.com/medico/bruno-rubi-lopez">
            <button href="https://www.doctoralia.com.mx/bruno-rubi-lopez-2/urologo/puebla" className='btn-primary text-white'>See location
                        <svg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8' fill='none' className='inline-block ml-2'>
                        <path d='M10.2503 7.00012L12.7201 4.53039C13.013 4.23749 13.013 3.7626 12.7201 3.4697L10.2503 0.999966M12.5004 4.00004L1.50012 4.00004' stroke='white' />
                        </svg>
                    </button>
                    </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
