import React from 'react';
import videoBg from '../../public/trash/video.mp4';

const Home = () => {
  return (
    <div className='relative w-full h-screen' id='home'>
        <div className="absolute inset-0 bg-black/40"></div>
        <video className="w-full h-full object-cover" src={videoBg} autoPlay loop muted />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl font-bold">Bruno Rubí López</h1>
            <p className="text-xl">Número de cédula: CP: 9505148 / CE: 12831401</p>
        </div>
    </div>
  )
} 

export default Home
