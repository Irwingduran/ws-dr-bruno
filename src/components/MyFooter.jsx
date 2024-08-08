import React from 'react'
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";


const MyFooter = () => {
  return (
    <div>

    <Footer container>
      <div className="w-full" id='contact'>
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <h2>Dr. Bruno Rubí López</h2>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Links" />
              <Footer.LinkGroup col>
                <Footer.Link href="#service">Servicio</Footer.Link>
                <Footer.Link href="#about">Sobre Mí</Footer.Link>
                <Footer.Link href="#">Agendar Visita</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contacto" />
              <Footer.LinkGroup col>
              <Footer.Link href="#">Tel: 2228457430</Footer.Link>
                <Footer.Link href="#">mail@ejemplo.com</Footer.Link>
                
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
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
            <Footer.Icon href="#" icon={BsWhatsapp} />
          </div>
        </div>
      </div>
    </Footer>

    </div>
  )
}

export default MyFooter