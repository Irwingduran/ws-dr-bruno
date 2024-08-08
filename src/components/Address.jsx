import React from 'react'
import addressImg from '../../public/img/addressImg.png';

const Address = () => {
  return (
    <div>
    { /*  about text */ }
        <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto my-8'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                <div>
                <img src={addressImg} width="400px" alt="" />
                </div>
                <div className='md:w-3/4 mx -auto'>
                    <h2 className='text-4x1 text-neutralDGrey font-semibold mb-4 md:w-4/5'>Consultorio</h2>
                    <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>Av Kepler 2143, Reserva territorial Atlixcáyotl CP 72190 Puebla, Puebla Torre 1 consultorio 620</p>
                    <button className='btn-primary'>Ver más</button>
                </div>
            </div>
        </div>
    </div>    
  )
}

export default Address