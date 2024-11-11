import { useState } from 'react';
import aboutImg from '../../../assets/img/image3.jpg';
import icon1 from '../../../assets/icon/SociedadMexicanaUrología.png';
import icon2 from '../../../assets/icon/logo.svg';
import icon3 from '../../../assets/icon/ColegioMexicanoUrologíaNacional.png';
import Modal from './ModalAbout'; 


const About = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const modalContent = (
    <div>
      <h2 className="text-2xl font-bold mb-4">About</h2>
      <p>
      In the field of modern urology, few names resonate as strongly as that of Dr. Bruno, founder of the Prostate and Urinary Tract Center in Puebla, Mexico. 
        Recognized for his expertise and skill in prostate laser surgery on an international level. 
        Dr. Bruno has adopted and perfected this cutting-edge technology, being recognized in Latin America by Forbes Mexico magazine. 
        His mastery of the technology allows him to provide his patients with first class care at a decent price and with exceptional results. 
        He receives patients from all over Mexico and other countries such as the United States, Ecuador, Colombia, Brazil, Guatemala, Panama, among others in Central America.
      </p>
    </div>
  );

  return (
    <div>
      {/*  about text  */}
      <div className='px-10 lg:px-14 max-w-screen-2x1 mx-auto my-8' id='about'>
  <h2 className='text-4xl text-neutralDGrey font-semibold mb-2 text-center py-8'>About</h2>
  <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
    <div>
      <img src={aboutImg} width="600px" alt="Doctor Bruno" />
    </div>
    <div className='md:w-3/4 mx-auto'>
      <h2 className='text-4x1 text-neutralDGrey font-semibold mb-4 md:w-4/5'>Dr. Bruno: International Expert in Prostate Laser Surgery (HoLEP)</h2>
      <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>
        In the field of modern urology, few names resonate as strongly as that of Dr. Bruno, founder of the Prostate and Urinary Tract Center in Puebla, Mexico. 
        Recognized for his expertise and skill in prostate laser surgery on an international level.
      </p>
      <div className='flex justify-center md:justify-start gap-4 mb-8'>
      <img src={icon1} alt="Doctor Bruno"  style={{ width: "68px", height: "68px" }} />
      <img src={icon2} alt="Doctor Bruno"  style={{ width: "68px", height: "68px" }}/>
      <img src={icon3} alt="Doctor Bruno"  style={{ width: "68px", height: "68px" }}/>
      </div>
      <button className='btn-primary' onClick={openModal}>See more</button>
    </div>
  </div>
</div>


      {/*  stats  */}
      <div className='px-6 lg:px-20 mx-auto max-w-screen-2xl bg-colorDark py-16'>
  <div className='flex flex-col md:flex-row justify-between items-start gap-12'>
    <div className='md:w-1/2 space-y-6'>
      <h2 className='text-4xl text-neutralDGrey font-semibold mb-6 md:w-3/4'>
        Trajectory
      </h2>

      <div className='space-y-8'>
        <div className='flex items-center gap-6'>
          <img src="/logos/tecMTY.png" width="48px" alt="" />
          <div>
            <h4 className='text-xl text-neutralDGrey font-semibold'>Tecnológico de Monterrey Campus Monterrey</h4>
            <p className='text-neutralDGrey'>
            Graduated with honors from the country's most prestigious school.
            </p>
          </div>
        </div>
        
        <div className='flex items-center gap-6'>
          <img src="/logos/icon1.png" width="48px" alt="" />
          <div>
            <h4 className='text-xl text-neutralDGrey font-semibold'>Specialization in General Surgery</h4>
            <p className='text-neutralDGrey'>At the largest hospital in the State of Mexico.</p>
          </div>
        </div>

        <div className='flex items-center gap-6'>
          <img src="/logos/icon1.png" width="48px" alt="" />
          <div>
            <h4 className='text-xl text-neutralDGrey font-semibold'>Sub-specialty in Urology</h4>
            <p className='text-neutralDGrey'></p>
          </div>
        </div>
      </div>
    </div>

    {/* Stats */}
    <div className='md:w-1/2 space-y-8'>
      <div className='flex items-center gap-6'>
        <img src="/logos/icon4.png" width="48px" alt="" />
        <div>
          <h4 className='text-xl text-neutralDGrey font-semibold'>Advanced Specialty in Prostate Laser Surgery</h4>
          <p className='text-neutralDGrey'>
            Considered the highest academic rank a surgeon can achieve in their career.
          </p>
        </div>
      </div>

      <div className='flex items-center gap-6'>
        <img src="/logos/icon2.png" width="48px" alt="" />
        <div>
          <h4 className='text-xl text-neutralDGrey font-semibold'>Certified Robotic Surgeon (Da Vinci)</h4>
          <p className='text-neutralDGrey'>Certified by Intuitive in Houston, TX, USA (Da Vinci robot logo)</p>
        </div>
      </div>

      <div className='flex items-center gap-6'>
        <img src="/logos/icon1.png" width="48px" alt="" />
        <div>
          <h4 className='text-xl text-neutralDGrey font-semibold'>International Certificate of Holmium Laser</h4>
          <p className='text-neutralDGrey'>
            Treatment for benign prostatic hyperplasia - Hill Clinic, Sofia, Bulgaria
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
