import { useState } from 'react';
import Navbar from "../Navbar";
import { FaStar } from 'react-icons/fa';
import holepImg from '../../../assets/img/holepService.jpeg';
import MyFooter from "../MyFooter";

interface Question {
  id: number;
  question: string;
  answer: string;
}

const AccordionItem = ({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 px-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={onClick}
      >
        <h3 className="text-2xl font-semibold text-black">{question}</h3>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="p-6 text-lg text-black">{answer}</p>
      </div>
    </div>
  );
};

const ServiceGrowth = () => {
  const questions: Question[] = [
    {
      id: 1,
      question: "¿Qué es HoLEP y qué significa?",
      answer: "HoLEP significa Enucleación Prostática con Láser de Holmium. Es un tratamiento mínimamente invasivo y avanzado para tratar el agrandamiento benigno de la próstata. Utiliza un láser de holmium que permite la extracción intacta del tejido prostático y facilita su análisis."
    },
    {
      id: 2,
      question: "¿Cuál es la diferencia entre el láser HoLEP y el láser verde?",
      answer: "El láser HoLEP tiene una longitud de onda de 2200 nanómetros, lo que permite extraer el tejido prostático intacto para su análisis. En cambio, el láser verde, con una longitud de onda de 532 nanómetros, vaporiza o extrae el tejido en partes, lo que impide una biopsia completa."
    },
    {
      id: 3,
      question: "¿Cómo funciona el procedimiento HoLEP?",
      answer: "Se inserta un endoscopio a través de la uretra hasta llegar a los lóbulos agrandados de la próstata. Luego, el láser de holmium corta y extrae el tejido obstructivo de forma intacta, permitiendo su análisis posterior."
    },
    {
      id: 4,
      question: "¿Dónde se puede realizar el procedimiento HoLEP?",
      answer: "El procedimiento HoLEP se realiza en el Hospital MAC Puebla con el Dr. Bruno Rubi, un urólogo experto en esta técnica, capacitado por uno de los pioneros de HoLEP en México. Actualmente, es un referente y formador de esta técnica en Puebla."
    },    
  ];

  const [openId, setOpenId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      
      <div className="bg-white min-h-screen my-24">
        {/* Encabezado */}
        <header className="bg-brandPrimary text-white py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">Crecimiento Prostático</h1>
            <p className="text-lg mt-2">Tratamiento avanzado para el agrandamiento prostático.</p>
          </div>
        </header>

        {/* Sección de Introducción */}
        <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-2/3 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Qué es la cirugía HoLEP?</h2>
            <p className="text-lg text-gray-700">
              HoLEP es el tratamiento mínimamente invasivo más avanzado disponible para tratar el agrandamiento benigno de la próstata (Hiperplasia Prostática) y ya se realiza en Puebla. HoLEP significa Enucleación Prostática con Láser de Holmium. Esta es una técnica de vanguardia que ofrece múltiples beneficios a nuestros pacientes, siendo un láser superior a los anteriormente conocidos por su capacidad de corte y coagulación.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <img src={holepImg} alt="Cirugía HoLEP" className="w-full h-auto md:w-80 rounded-lg shadow-md" />
          </div>
        </section>

        {/* Sección de Beneficios */}
        <section className="py-12 bg-neutralSilver">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Cirugía HoLEP</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Lesión prostática</li>
              <li>Sin sangrado</li>
              <li>Cirugía ambulatoria (te vas a casa el mismo día)</li>
            </ul>
          </div>
        </section>

        {/* Sección de Procedimiento */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Cómo es el procedimiento?</h2>
          <div className="w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/8ZjyNtLlu5A?si=yqAKAN8c-0YlBxHt"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Sección de Testimonios */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Testimonios de Pacientes</h2>
            <div className="space-y-8">
              <div className="bg-brandPrimary p-6 rounded-lg shadow-md">
                <div className="flex mb-2">
                  {Array(5).fill(0).map((_, index) => (
                    <FaStar key={index} className="text-yellow-300" />
                  ))}
                </div>
                <p className="text-lg text-white">
                  "Recientemente conocí al Dr. Bruno Rubí cuando consultó en el hospital Riberas en Ajijic."
                </p>
                <p className="mt-4 text-right text-white">- Louis Solomon</p>
                <p className="mt-4 text-right text-white">hace 3 meses</p>
              </div>

              <div className="bg-brandPrimary p-6 rounded-lg shadow-md">
                <div className="flex mb-2">
                  {Array(5).fill(0).map((_, index) => (
                    <FaStar key={index} className="text-yellow-300" />
                  ))}
                </div>
                <p className="text-lg text-white">
                  "Es una eminencia, explica absolutamente todo de tal manera que entiendes perfectamente tanto la condición como el tratamiento. Excelente ser humano."
                </p>
                <p className="mt-4 text-right text-white">- Paola Gutiérrez</p>
                <p className="mt-4 text-right text-white">hace 8 meses</p>
              </div>

              <div className="bg-brandPrimary p-6 rounded-lg shadow-md">
                <div className="flex mb-2">
                  {Array(5).fill(0).map((_, index) => (
                    <FaStar key={index} className="text-yellow-300" />
                  ))}
                </div>
                <p className="text-lg text-white">
                  "El doctor le brindó a mi papá el mejor servicio posible. Gran doctor, explica todo muy bien. Muy agradecida con él y su personal."
                </p>
                <p className="mt-4 text-right text-white">- Dulce Hernández</p>
                <p className="mt-4 text-right text-white">hace 8 meses</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Preguntas Frecuentes */}
        <section className="container mx-auto py-20 bg-white opacity-90 w-screen h-fit">
          <h2 className="text-3xl font-bold text-black mb-8 px-6">Preguntas y Respuestas</h2>
          <div className="bg-white rounded-lg shadow-md">
            {questions.map((q) => (
              <AccordionItem
                key={q.id}
                question={q.question}
                answer={q.answer}
                isOpen={openId === q.id}
                onClick={() => handleClick(q.id)}
              />
            ))}
          </div>
        </section>
      </div>

      <footer>
        <MyFooter />
      </footer>
    </div>
  );
};

export default ServiceGrowth;
