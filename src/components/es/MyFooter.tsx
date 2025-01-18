import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const MyFooter = () => {
  return (
    <Footer container className="bg-colorDark">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <a href="/es/Inicio" className="text-lg font-sans flex items-center space-x-3">
              <img src="/logo.png" alt="logo" className="w-14 inline-block items-center" />
              <span className="text-[#263238]">
                <a href="/es/Inicio">Centro de Próstata</a>
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Enlaces" />
              <Footer.LinkGroup col>
                <Footer.Link href="/es/Inicio/#service">Servicios</Footer.Link>
                <Footer.Link href="/es/Inicio/#about">Conóceme</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contacto" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://api.whatsapp.com/send/?phone=5212228457430&text=Hola+Dr.+encontr%C3%A9+su+perfil+en+findoctor+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0" target="_blank">WhatsApp</Footer.Link>
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
        </div>
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://m.facebook.com/DrBrunoRubi/" target="_blank" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/centro_de_prostata/" target="_blank" icon={BsInstagram} />
            <Footer.Icon href="https://x.com/urobruce" target="_blank" icon={BsTwitter} />
          </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
