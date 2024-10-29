import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaXmark, FaBars } from "react-icons/fa6";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // set toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

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
    }
  }, []);

  // navitems array
  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Blog", path: "blog" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
      <nav className={`py-4 lg:px-14 ${isSticky ? "sticky top-0 left-0 right-40 border-b bg-white duration-300" : ""}`}>
        <div className='flex justify-between items-center text-base gap-8 mx-1'>
          <a href="" className='text-2xl font-sans flex items-center space-x-3'>
            <img src="trash/log.png" alt="logo" width="70px" className='w-14 inline-block items-center'/>
            <span className='text-[#00435f]'><a href="#home">Prostate Center</a></span>
          </a>

          {/* nav items for large devices */}
          <ul className='md:flex space-x-12 hidden mx-12 items-center'>
            {
              navItems.map(({ link, path }) => (
                <Link 
                  to={path} 
                  spy={true} 
                  smooth={true} 
                  offset={-100} 
                  key={path} 
                  className='block text-base text-gray900 hover:text-brandPrimary first:font-medium'
                >
                  {link}
                </Link>
              ))
            }
            {/* Botón con la bandera de Estados Unidos */}
            <button className='bg-gray-100 text-gray900 hover:bg-brandPrimary hover:text-white px-4 py-2 rounded flex items-center'>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" 
                alt="Bandera de Estados Unidos" 
                width="20" 
                className="mr-2"
              />
              Botón
            </button>
          </ul>

          {/* menu btn for only mobile responsive design */}
          <div className='md:hidden'>
            <button 
              onClick={toggleMenu} 
              className='text-neutralGrey focus:outline-none focus:text-gray-500'
            >
              {
                isMenuOpen ? (
                  <FaXmark className='h-6 w-6' />
                ) : (
                  <FaBars className='h-6 w-6' />
                )
              }
            </button>
          </div>
        </div>

        {/* nav items for mobile devices */}
        <div className={`md:hidden space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
          {
            navItems.map(({ link, path }) => (
              <Link 
                to={path} 
                spy={true} 
                smooth={true} 
                offset={-200} 
                key={path} 
                className='block text-base text-white hover:text-brandPrimary first:font-medium'
              >
                {link}
              </Link>
            ))
          }
          {/* Botón con la bandera de Estados Unidos para versión móvil */}
          <button className='w-full bg-gray-100 text-gray900 hover:bg-brandPrimary hover:text-white px-4 py-2 rounded flex items-center justify-center'>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" 
              alt="Bandera de Estados Unidos" 
              width="20" 
              className="mr-2"
            />
            Botón
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
