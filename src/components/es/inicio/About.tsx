import { useState } from 'react';
import aboutImg from '../../../assets/img/image3.jpg';
import icon1 from '../../../assets/icon/SociedadMexicanaUrología.png';
import icon2 from '../../../assets/icon/logo.svg';
import icon3 from '../../../assets/icon/ColegioMexicanoUrologíaNacional.png';
import Modal from './ModalAbout'; 

const About = () => {
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => setMostrarModal(true);
  const cerrarModal = () => setMostrarModal(false);

  const contenidoModal = (
    <div>
      <h2 className="text-2xl font-bold mb-4">Conóceme</h2>
      <p>
        En el campo de la urología moderna, pocos nombres resuenan con tanta fuerza como el del Dr. Bruno, fundador del Centro de Próstata y Vías Urinarias en Puebla, México.
        Reconocido por su experiencia y habilidad en cirugía láser de próstata a nivel internacional. 
        El Dr. Bruno ha adoptado y perfeccionado esta tecnología de vanguardia, siendo reconocido en América Latina por la revista Forbes México. 
        Su dominio de la tecnología le permite brindar a sus pacientes atención de primer nivel a un costo razonable y con resultados excepcionales. 
        Atiende pacientes de todo México y de otros países como Estados Unidos, Ecuador, Colombia, Brasil, Guatemala, Panamá, entre otros en Centroamérica.
      </p>
    </div>
  );

  return (
    <div>
      {/* Texto de "Acerca de" */}
      <div className='px-10 lg:px-14 max-w-screen-2x1 mx-auto my-8' id='acerca'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2 text-center py-8'>Acerca de</h2>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
          <div>
            <img src={aboutImg} width="600px" alt="Doctor Bruno" />
          </div>
          <div className='md:w-3/4 mx-auto'>
            <h2 className='text-4x1 text-neutralDGrey font-semibold mb-4 md:w-4/5'>Dr. Bruno: Experto Internacional en Cirugía Láser de Próstata (HoLEP)</h2>
            <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>
              En el campo de la urología moderna, pocos nombres resuenan con tanta fuerza como el del Dr. Bruno, fundador del Centro de Próstata y Vías Urinarias en Puebla, México. 
              Reconocido por su experiencia y habilidad en cirugía láser de próstata a nivel internacional.
            </p>
            <div className='flex justify-center md:justify-start gap-4 mb-8'>
              <img src={icon1} alt="Sociedad Mexicana de Urología" style={{ width: "68px", height: "68px" }} />
              <img src={icon2} alt="Logo" style={{ width: "68px", height: "68px" }} />
              <img src={icon3} alt="Colegio Mexicano de Urología Nacional" style={{ width: "68px", height: "68px" }} />
            </div>
            <button className='btn-primary' onClick={abrirModal}>Ver más</button>
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
                <img src="/logos/tecMTY.png" width="48px" alt="Tec de Monterrey" />
                <div>
                  <h4 className='text-xl text-neutralDGrey font-semibold'>Tecnológico de Monterrey Campus Monterrey</h4>
                  <p className='text-neutralDGrey'>
                    Graduado con honores de la escuela más prestigiosa del país.
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-6'>
                <img src="/logos/icon8.png" width="48px" alt="Cirugía General" />
                <div>
                  <h4 className='text-xl text-neutralDGrey font-semibold'>Especialización en Cirugía General</h4>
                  <p className='text-neutralDGrey'>En el hospital más grande del Estado de México.</p>
                </div>
              </div>
              <div className='flex items-center gap-6'>
                <img src="/logos/icon6.png" width="48px" alt="Urología" />
                <div>
                  <h4 className='text-xl text-neutralDGrey font-semibold'>Subespecialidad en Urología</h4>
                  <p className='text-neutralDGrey'></p>
                </div>
              </div>
            </div>
          </div>

          {/* Estadísticas */}
          <div className='md:w-1/2 space-y-8'>
            <div className='flex items-center gap-6'>
              <img src="/logos/icon4.png" width="48px" alt="Cirugía Láser de Próstata" />
              <div>
                <h4 className='text-xl text-neutralDGrey font-semibold'>Especialidad Avanzada en Cirugía Láser de Próstata</h4>
                <p className='text-neutralDGrey'>
                  Considerado el rango académico más alto que un cirujano puede alcanzar en su carrera.
                </p>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <img src="/logos/icon2.png" width="48px" alt="Cirujano Robótico" />
              <div>
                <h4 className='text-xl text-neutralDGrey font-semibold'>Cirujano Robótico Certificado (Da Vinci)</h4>
                <p className='text-neutralDGrey'>Certificado por Intuitive en Houston, TX, EE. UU. (robot Da Vinci)</p>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <img src="/logos/icon7.png" width="48px" alt="Certificado Internacional" />
              <div>
                <h4 className='text-xl text-neutralDGrey font-semibold'>Certificado Internacional en Láser de Holmium</h4>
                <p className='text-neutralDGrey'>
                  Tratamiento para hiperplasia prostática benigna - Hill Clinic, Sofía, Bulgaria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal showModal={mostrarModal} closeModal={cerrarModal} content={contenidoModal} />
    </div>
  );
}

export default About;
