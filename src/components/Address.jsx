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
                    <h2 className='text-4x1 text-neutralDGrey font-semibold mb-4 md:w-4/5'>titulo titulo titulo titulo</h2>
                    <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt laudantium, eaque quae eos atque maxime reprehenderit tempore fuga facilis veritatis repudiandae possimus quia, cum delectus voluptatem pariatur perspiciatis ratione.</p>
                    <button className='btn-primary'>Ver más</button>
                </div>
            </div>
        </div>
    </div>    
  )
}

export default Address