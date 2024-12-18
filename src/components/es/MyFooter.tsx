import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const MyFooter = () => {
  return (
    <Footer container className="bg-colorDark">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <a href="/" className="text-lg font-sans flex items-center space-x-3">
              <img src="/logo.png" alt="logo" className="w-14 inline-block items-center" />
              <span className="text-[#263238]">
                <a href="#home">Centro de Próstata</a>
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Enlaces" />
              <Footer.LinkGroup col>
                <Footer.Link href="#service">Servicios</Footer.Link>
                <Footer.Link href="#about">Acerca de</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contacto" />
              <Footer.LinkGroup col>
                <Footer.Link href="#contact">Contacto</Footer.Link>
                <Footer.Link href="mailto:centrodeprostata@gmail.com">Correo electrónico</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Política de Privacidad</Footer.Link>
                <Footer.Link href="#">Términos y Condiciones</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="https://delta-digital.com.mx" by="Imagen Médica™" year={2025} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://m.facebook.com/DrBrunoRubi/" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/urobruce" icon={BsInstagram} />
            <Footer.Icon href="https://x.com/urobruce" icon={BsTwitter} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
