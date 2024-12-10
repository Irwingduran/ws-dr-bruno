import { useState } from 'react';
import Modal from './ModalAbout'; 
import aboutImg from '../../../assets/img/image3.jpg';
import icon1 from '../../../assets/icon/SociedadMexicanaUrología.png';
import icon2 from '../../../assets/icon/logo.svg';
import icon3 from '../../../assets/icon/ColegioMexicanoUrologíaNacional.png';
import icon4 from '../../../assets/icon/CONAMEU.png';
import icon5 from '../../../assets/icon/siu.gif';
import icon6 from '../../../assets/icon/eau.png';
import icon7 from '../../../assets/icon/cau.png';

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const modalContent = (
    <div>
      <h2 className="text-2xl font-bold mb-4">Acerca de</h2>
      <p>
        En el campo de la urología moderna, pocos nombres resuenan tan fuerte como el del Dr. Bruno, fundador del Centro de Próstata y Vías Urinarias en Puebla, México. 
        Reconocido por su experiencia y habilidad en cirugía láser de próstata a nivel internacional. 
        El Dr. Bruno ha adoptado y perfeccionado esta tecnología de vanguardia, siendo reconocido en América Latina por la revista Forbes México. 
        Su dominio de la tecnología le permite brindar a sus pacientes una atención de primera clase a un precio accesible y con resultados excepcionales. 
        Recibe pacientes de todo México y de otros países como Estados Unidos, Ecuador, Colombia, Brasil, Guatemala, Panamá, entre otros en Centroamérica.
      </p>
    </div>
  );

  return (
    <div>
      {/* Texto de "Acerca de" */}
      <div className='px-10 lg:px-14 max-w-screen-2x1 mx-auto my-8' id='about'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2 text-center py-8'>Acerca de</h2>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
          <div>
            <img src={aboutImg} width="600px" alt="Doctor Bruno" />
          </div>
          <div className='md:w-3/4 mx-auto'>
            <h2 className='text-4x1 text-neutralDGrey font-semibold mb-4 md:w-4/5'>Dr. Bruno: Experto Internacional en Enucleación Prostática con Láser de Holmio (HoLEP)</h2>
            <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>
              En el campo de la urología moderna, pocos nombres resuenan tan fuerte como el del Dr. Bruno, fundador del Centro de Próstata y Vías Urinarias en Puebla, México. 
              Reconocido por su experiencia y habilidad en cirugía láser de próstata a nivel internacional.
            </p>
            <div className='flex flex-wrap justify-center md:justify-start gap-4 mb-8'>
              <img src={icon1} alt="Ícono 1" className="w-16 h-16 md:w-20 md:h-20" />
              <img src={icon2} alt="Ícono 2" className="w-16 h-16 md:w-20 md:h-20" />
              <img src={icon3} alt="Ícono 3" className="w-16 h-16 md:w-20 md:h-20" />
              <img src={icon4} alt="Ícono 4" className="w-16 h-16 md:w-20 md:h-20" />
              <img src={icon5} alt="Ícono 5" className="w-16 h-16 md:w-20 md:h-20" />
              <img src={icon7} alt="Ícono 7" className="w-24 h-16 md:w-28 md:h-20" />
              <img src={icon6} alt="Ícono 6" className="w-32 h-16 md:w-32 md:h-20" />
            </div>
            <button className='btn-primary' onClick={openModal}>Ver más</button>
          </div>
        </div>
      </div>

      {/* Trayectoria */}
      <div className='px-6 lg:px-20 mx-auto max-w-screen-2xl bg-colorDark py-16'>
        <div className='flex flex-col md:flex-row justify-between items-start gap-12'>
          <div className='md:w-1/2 space-y-6'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-6 md:w-3/4'>
              Trayectoria
            </h2>

            <div className='space-y-8'>
              <div className='flex items-center gap-6'>
                <img src="/logos/tecMTY.png" width="48px" alt="" />
                <div>
                  <h4 className='text-xl text-neutralDGrey font-semibold'>Tecnológico de Monterrey Campus Monterrey</h4>
                  <p className='text-neutralDGrey'>
                    Graduado con honores de la escuela más prestigiosa del país.
                  </p>
                </div>
              </div>
              
              <div className='flex items-center gap-6'>
                <img src="/logos/icon8.png" width="48px" alt="" />
                <div>
                  <h4 className='text-xl text-neutralDGrey font-semibold'>Especialización en Cirugía General</h4>
                  <p className='text-neutralDGrey'>En el hospital más grande del Estado de México.</p>
                </div>
              </div>

              <div className='flex items-center gap-6'>
                <img src="/logos/icon6.png" width="48px" alt="" />
                <div>
                  <h4 className='text-xl text-neutralDGrey font-semibold'>Subsubespecialidad en Urología</h4>
                  <p className='text-neutralDGrey'>Con residencia rotativa en 4 de los mejores hospitales de México.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Estadísticas */}
          <div className='md:w-1/2 space-y-8'>
            <div className='flex items-center gap-6'>
              <img src="/logos/icon4.png" width="48px" alt="" />
              <div>
                <h4 className='text-xl text-neutralDGrey font-semibold'>Especialidad Avanzada en Cirugía Láser de Próstata</h4>
                <p className='text-neutralDGrey'>
                  Considerada el rango académico más alto que un cirujano puede alcanzar en su carrera.
                </p>
              </div>
            </div>

            <div className='flex items-center gap-6'>
              <img src="/logos/icon2.png" width="48px" alt="" />
              <div>
                <h4 className='text-xl text-neutralDGrey font-semibold'>Cirujano Robótico Certificado (Da Vinci)</h4>
                <p className='text-neutralDGrey'>Certificado por Intuitive en Houston, TX, EE. UU. (logotipo del robot Da Vinci).</p>
              </div>
            </div>

            <div className='flex items-center gap-6'>
              <img src="/logos/icon7.png" width="48px" alt="" />
              <div>
                <h4 className='text-xl text-neutralDGrey font-semibold'>Certificación Internacional en Cirugías de Próstata</h4>
                <p className='text-neutralDGrey'>
                  Tratamiento de hiperplasia prostática benigna con láser de holmio, Sofía, Bulgaria.
                </p>
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
