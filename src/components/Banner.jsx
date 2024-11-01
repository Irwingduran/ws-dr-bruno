import React from 'react'

const Banner = () => {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2x1 my-10 mx-auto bg-colorDark py-16'>
        <div className='flex items-center justify-center lg:w-3/5 mx-auto'>
            <div className='text-center'>
                <h2 className='lg:text-4x1 text-2xl text-neutral-800 font-semibold mb-6 lg:leading-snug'>
                Are you a candidate for prostate surgery? Book an appointment here!
                </h2>
                <div className='flex items-center justify-center gap-8'>
                <a href="https://wa.me/5212228457430?text=Hello%20Dr.%20I%20found%20your%20profile%20on%20findoctor%20and%20would%20like%20to%20schedule%20a%20consultation">
                    <button href="https://www.doctoralia.com.mx/bruno-rubi-lopez-2/urologo/puebla" className='btn-primary text-white'>Book appointment
                        <svg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8' fill='none' className='inline-block ml-2'>
                        <path d='M10.2503 7.00012L12.7201 4.53039C13.013 4.23749 13.013 3.7626 12.7201 3.4697L10.2503 0.999966M12.5004 4.00004L1.50012 4.00004' stroke='white' />
                        </svg>
                    </button></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
