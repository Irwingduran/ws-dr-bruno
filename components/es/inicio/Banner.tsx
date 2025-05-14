const Banner = () => {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2x1 my-10 mx-auto bg-neutralSilver py-16'>
      <div className='flex items-center justify-center lg:w-3/5 mx-auto'>
        <div className='text-center'>
          <h2 className='lg:text-4x1 text-2xl text-neutralDGrey font-semibold mb-6 lg:leading-snug'>
          ¿Eres candidato para cirugía de próstata?
          </h2>
          <div className='flex items-center justify-center gap-8'>
            <a
              href="https://api.whatsapp.com/send/?phone=5212228457430&text=Hola+Dr.+encontr%C3%A9+su+perfil+en+findoctor+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0"
              className='btn-primary text-white cursor-pointer'
              target="_blank"
              rel="noopener noreferrer"
            >
             Agenda una cita aquí
              <svg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8' fill='none' className='inline-block ml-2'>
                <path d='M10.2503 7.00012L12.7201 4.53039C13.013 4.23749 13.013 3.7626 12.7201 3.4697L10.2503 0.999966M12.5004 4.00004L1.50012 4.00004' stroke='white' />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
