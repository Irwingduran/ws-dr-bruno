import React, { useState } from 'react';
import aboutImg from '../../public/trash/Img1.png';
import Modal from './ModalAbout'; 

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const modalContent = (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sobre mí</h2>
      <p>
        En el ámbito de la urología moderna, pocos nombres resuenan con tanta fuerza como el del Dr. Bruno, fundador del Centro de Próstata y Vías Urinarias de Puebla, México. 
        Reconocido por su experiencia y destreza en la cirugía láser de próstata a nivel internacional. 
        El Dr. Bruno ha adoptado y perfeccionado esta tecnología de vanguardia, siendo reconocido en Latinoamérica por la revista Forbes México. 
        Su dominio de la tecnología le permite proporcionar a sus pacientes una atención de primera clase a un precio digno y con resultados excepcionales. 
        Recibe pacientes de todo México y de otros países como Estados Unidos, Ecuador, Colombia, Brasil, Guatemala, Panamá, entre otros de Centroamérica.
      </p>
    </div>
  );

  return (
    <div>
      {/*  about text  */}
      <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto my-8' id='about'>
        <h2 className='text-4x1 text-neutralDGrey font-semibold mb-2 text-center'>Sobre mí</h2>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
          <div>
            <img src={aboutImg} width="300px" alt="" />
          </div>
          <div className='md:w-3/4 mx-auto'>
            <h2 className='text-4x1 text-neutralDGrey font-semibold mb-4 md:w-4/5'>El Dr. Bruno: Experto Internacional en Cirugía Láser de Próstata (HoLEP)</h2>
            <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>
              En el ámbito de la urología moderna, pocos nombres resuenan con tanta fuerza como el del Dr. Bruno, fundador del Centro de Próstata y Vías Urinarias de Puebla, México. 
              Reconocido por su experiencia y destreza en la cirugía láser de próstata a nivel internacional.
            </p>
            <button className='btn-primary' onClick={openModal}>Ver más</button>
          </div>
        </div>
      </div>

      {/*  stats  */}
      <div className='px-4 lg:px-14 mx-w-screen-2x1 mx-auto bg-neutralSilver py-16'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          <div className='md:w-1/2'>
            <h2 className='text-4x1 text-neutralDGrey font-semibold mb-4 md:w-2/3'>
              Trayectoría
              <br /><span className='text-brandPrimary'>Académica</span>
            </h2>
            <p>El Dr. Bruno cuenta con una trayectoria académica excepcional, respaldada por su formación en algunas de las instituciones más prestigiosas y reconocidas en el ámbito médico. Su dedicación al estudio y la práctica quirúrgica lo han llevado a alcanzar los más altos niveles de especialización, convirtiéndose en un referente en su campo. Desde su graduación con mención honorífica en el Tecnológico de Monterrey hasta su certificación en cirugía robótica en Houston, TX, cada paso de su carrera refleja su compromiso con la excelencia en la medicina.</p>
          </div>

          {/*  stats  */}        
          <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
            <div className='space-y-8'>
              <div className='flex items-center gap-4'>
                   {/*  <img src="/trash/LogoTec.svg" width="50px" alt="" />  */}   
                <div>
                  <h4 className='text-2x1 text-neutralDGrey font-semibold'>Tecnológico de Monterrey Campus Monterrey</h4>
                  <p>Considerada la escuela más exclusiva y prestigiosa del país donde se graduó con mención honorífica.</p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <img src="" alt="" />
                <div>
                  <h4 className='text-2x1 text-neutralDGrey font-semibold'>Da vinci por Intuitive en Houston TX, USA</h4>
                  <p>Certificado por Cirugia robótica</p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <img src="" alt="" />
                <div>
                  <h4 className='text-2x1 text-neutralDGrey font-semibold'>Especialidad en Cirugía General</h4>
                  <p>En el hospital mas grande del Estado de México. Sub especialidad en Urología.</p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <img src="" alt="" />
                <div>
                  <h4 className='text-2x1 text-neutralDGrey font-semibold'>Alta Especialidad en Cirugia Láser de Próstata</h4>
                  <p>considerado el maximo rango academico que un cirujano puede llegar a adquirir en su vida.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal showModal={showModal} closeModal={closeModal} content={modalContent} />
    </div>
  )
}

export default About;
