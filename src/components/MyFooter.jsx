import React from 'react'
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTiktok, BsTwitter, BsWhatsapp } from "react-icons/bs";


const MyFooter = () => {
  return (
    <div>

    <Footer container>
      <div className="w-full" id='contact'>
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-2">
          <h2><a href="#home">Dr. Bruno Rubí López</a></h2>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Links" />
              <Footer.LinkGroup col>
                <Footer.Link href="#service">Servicio</Footer.Link>
                <Footer.Link href="#about">Sobre Mí</Footer.Link>
                <Footer.Link href="https://www.doctoralia.com.mx/bruno-rubi-lopez-2/urologo/san-andres-cholula">Agendar Visita</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contacto" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://wa.me/5212228457430?text=Hola%20Dr.%20encontr%C3%A9%20su%20perfil%20en%20findoctor%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta">WhatsApp (2228457430)</Footer.Link>
              <Footer.Link href="tel:8115162443">URGENCIAS (8115162443)</Footer.Link>
              <Footer.Link href='mailto:dr.uro.bruce@gmail.com'>Correo Electrónico</Footer.Link>
                
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
          <Footer.Copyright href="#" by="Delta Agency™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://m.facebook.com/DrBrunoRubi/" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/urobruce" icon={BsInstagram} />
            <Footer.Icon href="https://x.com/urobruce" icon={BsTwitter} />
            <Footer.Icon href="https://www.linkedin.com/in/urobruce/" icon={BsLinkedin} />
            <Footer.Icon href="https://www.tiktok.com/@urobruce?is_from_webapp=1&sender_device=pc" icon={BsTiktok} />
            <Footer.Icon href="https://wa.me/5212228457430?text=Hola%20Dr.%20encontr%C3%A9%20su%20perfil%20en%20findoctor%20y%20me%20gustar%C3%ADa%20realizar%20una%20consulta" icon={BsWhatsapp} />
          </div>
        </div>
      </div>
    </Footer>

    </div>
  )
}

export default MyFooter