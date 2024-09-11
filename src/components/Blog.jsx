import React from 'react'

const Blog = () => {
    const article = [
        {id: 1, title: "Bruno Rubí, el urólogo prodigio de México, cumple 300 cirugías Holep", image: "https://www.e-consulta.com/_next/image?url=https%3A%2F%2Ffotos.e-consulta.com%2Fsite_uploads%2F2023%2FDiciembre%2Fbruno_rubi_urologo_prodigio_de_mexico_1.jpeg&w=1080&q=75", link: "https://www.e-consulta.com/nota/2023-12-28/salud/bruno-rubi-el-urologo-prodigio-de-mexico-cumple-300-cirugias-holep"},
        {id: 2, title: "Bruno Rubí López, cirujano urólogo prodigio en HoLEP", image: "/trash/Bruno-Rubí-Urólogo.jpg", link: "https://www.forbes.com.mx/ad-holep-la-tecnica-quirurgica-mas-avanzada-contra-el-crecimiento-prostatico/"},
        {id: 3, title: "Cirugía HoLEP para la próstata, sin dolor y eficaz", image: "https://www.elsoldepuebla.com.mx/local/khblo3-bruno-rubi-urologo-prodigio-de-mexico./ALTERNATES/FREE_768/Bruno%20Rubí,%20urólogo%20prodigio%20de%20México.", link: "https://www.elsoldepuebla.com.mx/doble-via/salud/cirugia-holep-para-la-prostata-sin-dolor-y-eficaz-11201411.html/amp"},
        {id: 4, title: "¿Qué es Holep?", image: "https://www.e-consulta.com/_next/image?url=https%3A%2F%2Ffotos.e-consulta.com%2Fsite_uploads%2F2023%2FDiciembre%2Fbruno_rubi_urologo_prodigio_de_mexico_2.jpeg&w=1080&q=75", link: "https://hospitalesmac.com/blogt/2022/05/1197-holep.html"},
        {id: 5, title: "Inauguran Centro Quirúrgico de Próstata en Puebla", image: "https://i0.wp.com/cincoradio.com.mx/wp-content/uploads/2023/12/oumT0msc78Y5Z23u.jpg?w=848&ssl=1", link: "https://cincoradio.com.mx/inauguran-centro-quirurgico-de-prostata-en-puebla-cirugias-sin-dolor-y-sin-sangrado/"},

    ];
  return (
    <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto my-12' id='blog'>
        <div className='text-center md:w-1/2 mx-auto'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>Articulos</h2>
        <p className='text-sm text-neutralGrey mb-8 md:w-4/4 mx-auto'>El Dr. Bruno, 
        destacado cirujano urólogo en México, ha captado la atención de importantes medios como Forbes. 
        Estos artículos destacan su dedicación, habilidad y el impacto positivo que ha tenido en la vida de sus pacientes, consolidándolo como un referente en la urología moderna.</p>
        </div>

        { /* articles  */ }

        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
            {
                article.map( article => <div key={article.id} className='mx-auto relative mb-12 cursor-pointer'>
                    <img src={article.image} alt=''className='hover:scale-95 transition-all duration-300' />
                    <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                        <h3 className='mb-3 text-neutralGrey font-semibold'>{article.title}</h3>
                        <div className='flex items-center justify-center grap-8'>
                            <a href={article.link} className='font-bold text-brandPrimary hover:text-neutral-700'>
                            Ver más{" "}
                            
                            </a>
                        </div>
                    </div> 
                </div>) 
            }
        </div>
    </div>
  )
}

export default Blog

