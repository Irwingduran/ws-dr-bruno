const ComponenteVideo = () => {
  return (
    <div className="max-w-3xl mx-auto text-neutralDGrey h-fit my-24" id='video'>
      {/* Título del video */}
      <h1 className="text-3xl font-bold text-center mb-6">Un caso que documentamos</h1>
      <p className='text-sm text-neutralGrey mb-8 md:w-2/3 mx-auto text-center'>
        Un paciente comparte su experiencia con el Dr. Bruno, un destacado urólogo en cirugía láser de próstata, cubriendo su viaje desde la consulta hasta la recuperación y el impacto positivo del tratamiento.
      </p>
      {/* Contenedor del video */}
      <div className="relative pt-[56.25%]">
        <iframe 
          src="https://player.vimeo.com/video/1022257625?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          title="BRLV"
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </div>
  );
};

export default ComponenteVideo;
