import React from 'react'
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTiktok, BsTwitter, BsWhatsapp } from "react-icons/bs";


const MyFooter = () => {
  return (
    <Footer container>
      <div className="w-full" id='contact'>
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
          <a href="#home" className='text-lg font-sans flex items-center space-x-3'>
            <img src="trash/log.png" alt="logo" className=' w-14 inline-block items-center' />
            <span className='text-[#263238]'><a href="#home">Centro de Próstata</a></span>
          </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Links" />
              <Footer.LinkGroup col>
                <Footer.Link href="#service">Servicio</Footer.Link>
                <Footer.Link href="#about">Sobre Mí</Footer.Link>
                <Footer.Link href="https://api.whatsapp.com/send/?phone=5212228457430&text=Hola+Dr.+encontr%C3%A9+su+perfil+en+findoctor+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0">Agendar Visita</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contacto" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://wa.me/5212228457430?text=Hola%20Dr.%20encontr%C3%A9%20su%20perfil%20en%20findoctor%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta">WhatsApp (2228457430)</Footer.Link>
              <Footer.Link href='mailto:centrodeprostata@gmail.com'>Correo Electrónico</Footer.Link>
                
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Aviso de Privacidad</Footer.Link>
                <Footer.Link href="#">Términos &amp; Condiciones</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="https://delta-digital.com.mx" by="Delta Agency™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://m.facebook.com/DrBrunoRubi/" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/urobruce" icon={BsInstagram} />
            <Footer.Icon href="https://x.com/urobruce" icon={BsTwitter} />
            <Footer.Icon href="https://wa.me/5212228457430?text=Hola%20Dr.%20encontr%C3%A9%20su%20perfil%20en%20findoctor%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta" icon={BsWhatsapp} />
          </div>
        </div>
      </div>
    </Footer>

    
  )
}

export default MyFooter