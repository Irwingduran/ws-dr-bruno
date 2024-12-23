import { useState } from 'react';
import Navbar from "../Navbar";
import { FaStar } from 'react-icons/fa';
import holepImg from '../../../assets/img/holepService.jpeg';
import MyFooter from "../MyFooter";

// Definimos la interfaz para la pregunta
interface Question {
  id: number;
  question: string;
  answer: string;
}

// Componente para cada pregunta individual
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
  // Lista de preguntas y respuestas
  const questions: Question[] = [
    {
      id: 1,
      question: "Is HoLEP surgery painful?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam eveniet reiciendis fugit recusandae quisquam eius, nobis obcaecati quibusdam ipsam aspernatur laborum blanditiis, voluptas laboriosam harum doloribus a vel dolorum!"
    },
    {
      id: 2,
      question: "How long does recovery take?",
      answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum iusto asperiores, odio dolor dicta quos modi optio cum deserunt sequi adipisci, fugiat error nulla ducimus molestias eaque quae tempore nisi?"
    },
    {
      id: 3,
      question: "What results can I expect?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam tenetur veritatis ipsum minima illum dolorum assumenda quisquam magnam et consectetur nemo, velit ab, eos pariatur vitae aperiam obcaecati perferendis voluptatem."
    }
  ];

  // Estado para manejar qué pregunta está abierta
  const [openId, setOpenId] = useState<number | null>(null);

  // Función para manejar el clic en una pregunta
  const handleClick = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      <header>
        <Navbar/>
      </header>
      
      <div className="bg-white min-h-screen my-24">
        {/* Encabezado */}
        <header className="bg-brandPrimary text-white py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">Prostate Enlargement</h1>
            <p className="text-lg mt-2">Advanced treatment for prostate enlargement.</p>
          </div>
        </header>

        {/* Sección de Introducción */}
        <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-2/3 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What is HoLEP Surgery?</h2>
            <p className="text-lg text-gray-700">
              HoLEP is the latest and most advanced minimally invasive treatment available to treat benign prostate enlargement (Prostatic Hyperplasia) and it is already performed in Puebla! HoLEP stands for Holmium Laser Enucleation of the Prostate. This is an avant-garde technique that offers multiple benefits to our patients, being a laser superior to those previously known for its cutting and coagulation capacity.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <img src={holepImg} alt="HoLEP Surgery" className="w-full h-auto md:w-80 rounded-lg shadow-md" />
          </div>
        </section>

        {/* Sección de Beneficios */}
        <section className="py-12 bg-neutralSilver">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">HoLEP Surgery</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Prostate lesion</li>
              <li>No bleeding</li>
              <li>Ambulatory surgery (you go home the same day)</li>
            </ul>
          </div>
        </section>

        {/* Sección de Procedimiento */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What is the procedure like?</h2>
          <div className="w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/b4q9qanbfW0?si=J3LpJyD8MmB2UM2z"
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Patient Testimonials</h2>
            <div className="space-y-8">
              <div className="bg-brandPrimary p-6 rounded-lg shadow-md">
                <div className="flex mb-2">
                  {Array(5).fill(0).map((_, index) => (
                    <FaStar key={index} className="text-yellow-300" />
                  ))}
                </div>
                <p className="text-lg text-white">
                  "I recently met with Dr. Bruno Rubi, when he consulted at the Riberas hospital in Ajijic."
                </p>
                <p className="mt-4 text-right text-white">- Louis Solomon</p>
                <p className="mt-4 text-right text-white">3 months ago</p>
              </div>

              <div className="bg-brandPrimary p-6 rounded-lg shadow-md">
                <div className="flex mb-2">
                  {Array(5).fill(0).map((_, index) => (
                    <FaStar key={index} className="text-yellow-300" />
                  ))}
                </div>
                <p className="text-lg text-white">
                  "He is an eminence, he explains absolutely everything in such a way that you understand perfectly both the condition and the treatment and he gives you possible solutions for the condition Excellent human being."
                </p>
                <p className="mt-4 text-right text-white">- Paola Gutiérrez</p>
                <p className="mt-4 text-right text-white">8 months ago</p>
              </div>

              <div className="bg-brandPrimary p-6 rounded-lg shadow-md">
                <div className="flex mb-2">
                  {Array(5).fill(0).map((_, index) => (
                    <FaStar key={index} className="text-yellow-300" />
                  ))}
                </div>
                <p className="text-lg text-white">
                  "The doctor gave my dad the best service there can be, great doctor, explains everything very well. Very grateful to him and his staff."
                </p>
                <p className="mt-4 text-right text-white">- Dulce Hernandez</p>
                <p className="mt-4 text-right text-white">8 months ago</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Preguntas Frecuentes */}
        <section className="container mx-auto py-20 bg-white opacity-90 w-screen h-fit">
          <h2 className="text-3xl font-bold text-black mb-8 px-6">Q&A</h2>
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
        <MyFooter/>
      </footer>
    </div>
  );
};

export default ServiceGrowth;