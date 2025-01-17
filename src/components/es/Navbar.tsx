import { useEffect, useState } from 'react';
import { FaXmark, FaBars } from "react-icons/fa6";
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle navigation click
  const handleLinkClick = (path: string) => {
    if (location.pathname !== '/es/Inicio') {
      // Navega a la página principal y espera antes de desplazarte
      navigate('/es/Inicio');
      setTimeout(() => {
        document.getElementById(path)?.scrollIntoView({ behavior: 'smooth' });
      }, 500); // Ajusta el tiempo según sea necesario
    } else {
      document.getElementById(path)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Nav items array
  const navItems = [
    { link: "Inicio", path: "inicio" },
    { link: "Servicios", path: "service" },
    { link: "Conóceme", path: "about" },
    { link: "Blog", path: "blog" },
    { link: "Contacto", path: "contact" },
  ];

  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
      <nav className={`py-4 lg:px-14 ${isSticky ? "sticky top-0 left-0 right-40 border-b bg-white duration-300" : ""}`}>
        <div className='flex justify-between items-center text-base gap-8 mx-1'>
          <a href="/es/Inicio" className='text-2xl font-sans flex items-center space-x-3'>
            <img src="/logo.png" alt="logo" width="70px" className='w-14 inline-block items-center' />
            <span className='text-[#00435f]'>
              <a href="#home">Centro de Próstata</a>
            </span>
          </a>

          {/* Nav items for large devices */}
          <ul className='md:flex space-x-12 hidden mx-12 items-center'>
            {navItems.map(({ link, path }) => (
              <button
                key={path}
                onClick={() => handleLinkClick(path)}
                className='block text-base text-gray900 hover:text-brandPrimary first:font-medium'
              >
                {link}
              </button>
            ))}
            {/* Botón con la bandera de México */}
            <a href='/'>
              <button className='text-gray900 hover:bg-brandPrimary hover:text-white px-4 py-2 rounded flex items-center'>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                  alt="Bandera de México"
                  width="20"
                  className="mr-2"
                />
                EN
              </button>
            </a>
          </ul>

          {/* Menu button for mobile */}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-neutralGrey focus:outline-none focus:text-gray-500'>
              {isMenuOpen ? <FaXmark className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
            </button>
          </div>
        </div>

        {/* Nav items for mobile */}
        <div className={`md:hidden space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
          {navItems.map(({ link, path }) => (
            <button
              key={path}
              onClick={() => handleLinkClick(path)}
              className='block text-base text-white hover:text-brandPrimary first:font-medium'
            >
              {link}
            </button>
          ))}
          {/* Botón con la bandera de México para versión móvil */}
          <a href="/">
            <button className='w-full bg-gray-100 text-gray900 hover:bg-brandPrimary hover:text-white px-4 py-2 rounded flex items-center justify-center'>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                alt="Bandera de México"
                width="20"
                className="mr-2"
              />
              EN
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
