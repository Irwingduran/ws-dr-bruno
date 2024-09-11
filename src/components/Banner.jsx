import React from 'react'

const Banner = () => {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto bg-colorDark py-16'>
        <div className='flex items-center justify-center lg:w-2/5 mx-auto'>
            <div className='text-center'>
                <h2 className='lg:text-5x1 text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug'>
                ¿Eres candidato a una cirugía de próstata? ¡Agenda una cita aquí!
                </h2>
                <div className='flex items-center justify-center gap-8'>
                <a href="https://wa.me/5212228457430?text=Hola%20Dr.%20encontr%C3%A9%20su%20perfil%20en%20findoctor%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta">
                    <button href="https://www.doctoralia.com.mx/bruno-rubi-lopez-2/urologo/puebla" className='btn-primary text-white'>Agendar cita
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