
const Opinions = () => {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto py-16 bg-colorDark'>
        <div className='flex items-center justify-center lg:w-2/3 mx-auto'>
          <div className='text-center'>
            <h2 className='text-2xl font-bold mb-4 text-neutralDGrey'>
            Ver opiniones verificadas de pacientes en Google Business 
            </h2>
            <div className='flex items-center justify-center gap-8'>
              <a href="https://www.google.com/maps/place/Dr.+Bruno+Rubí,+Cirujano+Urólogo/@19.0212342,-98.2347385,3271m/data=!3m1!1e3!4m8!3m7!1s0x8428aff80c0575ef:0xf3628b313ac0c63a!8m2!3d19.0212342!4d-98.2347385!9m1!1b1!16s%2Fg%2F11q8pwtrvz?entry=ttu&g_ep=EgoyMDI0MDkwMi4xIKXMDSoASAFQAw%3D%3D" target="_blank">
                <button className='btn-primary text-white'>
                  Ver reseñas
                  <svg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8' fill='none' className='inline-block ml-2'>
                    <path d='M10.2503 7.00012L12.7201 4.53039C13.013 4.23749 13.013 3.7626 12.7201 3.4697L10.2503 0.999966M12.5004 4.00004L1.50012 4.00004' stroke='white' />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Opinions
