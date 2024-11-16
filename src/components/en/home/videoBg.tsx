import  { useEffect, useState } from "react";

const VideoBg = () => {
  // Estado para manejar el video a mostrar
  const [currentVideo, setCurrentVideo] = useState<string>("");

  // Rutas de los videos
  const videoDesktop = "/video/video.mp4";
  const videoMobile = "/video/video2.mp44";

  useEffect(() => {
    // Función para actualizar el video según el tamaño de la pantalla
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      setCurrentVideo(isMobile ? videoMobile : videoDesktop);
    };

    // Llama la función al montar el componente y en cambios de tamaño
    handleResize();
    window.addEventListener("resize", handleResize);

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden" id="home">
      {/* Overlay para el fondo oscuro */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Contenedor del video con posicionamiento absoluto */}
      <div className="absolute inset-0">
        <video
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
          src={currentVideo}
          autoPlay
          loop
          muted
          playsInline // Importante para iOS
        />
      </div>

      {/* Contenido centrado */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center px-4">
          Dr. Bruno Rubí López
        </h1>
        <p className="text-xl md:text-2xl mt-4 text-center px-4">
          Expert in Prostate Surgery
        </p>
        <a
          href="#contact"
          className="mt-6 btn-primary transition transform hover:scale-105 w-full md:w-auto cursor-pointer"
        >
          Book Appointment
        </a>
      </div>
    </div>
  );
};

export default VideoBg;
