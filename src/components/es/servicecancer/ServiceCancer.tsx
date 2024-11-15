import { useState } from 'react';
import Navbar from "../Navbar";
import { FaStar } from 'react-icons/fa';
import cancerImg from '../../../assets/img/cancer.png';
import holepImg from '../../../assets/img/holepService.jpeg'
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

const ServiceCancer = () => {
  const questions: Question[] = [
    {
      id: 1,
      question: "¿Es dolorosa la cirugía HoLEP?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam eveniet reiciendis fugit recusandae quisquam eius, nobis obcaecati quibusdam ipsam aspernatur laborum blanditiis, voluptas laboriosam harum doloribus a vel dolorum!"
    },
    {
      id: 2,
      question: "¿Cuánto tiempo lleva la recuperación?",
      answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum iusto asperiores, odio dolor dicta quos modi optio cum deserunt sequi adipisci, fugiat error nulla ducimus molestias eaque quae tempore nisi?"
    },
    {
      id: 3,
      question: "¿Qué resultados puedo esperar?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam tenetur veritatis ipsum minima illum dolorum assumenda quisquam magnam et consectetur nemo, velit ab, eos pariatur vitae aperiam obcaecati perferendis voluptatem."
    }
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
        <header className="bg-brandPrimary text-white py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">Cáncer de Próstata</h1>
            <p className="text-lg mt-2">Tratamiento avanzado para el cáncer de próstata.</p>
          </div>
        </header>

        <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-2/3 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Qué es el cáncer de próstata?</h2>
            <p className="text-lg text-gray-700">
              El cáncer ocurre cuando las células del cuerpo comienzan a crecer sin control. Las células de casi cualquier parte del cuerpo pueden convertirse en células cancerosas y luego extenderse a otras áreas.
            </p>
            <br />
            <p className="text-lg text-gray-700">
              El cáncer de próstata ocurre cuando las células en la próstata comienzan a crecer sin control. La próstata es una glándula que solo tienen los hombres. Esta glándula produce parte del líquido que compone el semen.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <img src={cancerImg} alt="Cirugía HoLEP" className="w-full h-auto md:w-80 rounded-lg shadow-md" />
          </div>
        </section>

        <section className="container bg-neutralSilver mx-auto px-4 py-12 flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/3 flex justify-center md:justify-start mb-4 md:mb-0">
            <img src={holepImg} alt="Cirugía HoLEP" className="w-full h-auto md:w-80 rounded-lg shadow-md" />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Qué es la cirugía HoLEP?</h2>
            <p className="text-lg text-gray-700">
              HoLEP es el tratamiento mínimamente invasivo más avanzado disponible para tratar el agrandamiento benigno de la próstata (Hiperplasia Prostática) y ya se realiza en Puebla. HoLEP significa Enucleación Prostática con Láser de Holmium. Esta técnica de vanguardia ofrece múltiples beneficios a nuestros pacientes, siendo un láser superior a los anteriormente conocidos por su capacidad de corte y coagulación.
            </p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Cirugía HoLEP</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Lesión prostática</li>
              <li>Sin sangrado</li>
              <li>Cirugía ambulatoria (regresas a casa el mismo día)</li>
            </ul>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Cómo es el procedimiento?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium labore esse in reiciendis autem distinctio, provident reprehenderit deleniti aliquid? Voluptatum velit aliquid cum quis iste autem non asperiores eius ipsam.
          </p>
          <div className="w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/oeW2n63QkRE?si=NAzmTcAU0PItzcL9"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>

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

export default ServiceCancer;
