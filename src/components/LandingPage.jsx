import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Encabezado */}
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Servicio de Cirugía HoLEP</h1>
          <p className="text-lg mt-2">Tratamiento avanzado para el agrandamiento prostático.</p>
        </div>
      </header>

      {/* Sección de Introducción */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Qué es la Cirugía HoLEP?</h2>
        <p className="text-lg text-gray-700">
          La cirugía HoLEP (enucleación prostática con láser de Holmium) es un tratamiento mínimamente invasivo para el agrandamiento benigno de la próstata. Utiliza un láser de Holmium para eliminar el tejido prostático obstruido, aliviando los síntomas urinarios y mejorando la calidad de vida.
        </p>
      </section>

      {/* Sección de Beneficios */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Beneficios de la Cirugía HoLEP</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Mínimamente invasiva con una recuperación rápida.</li>
            <li>Menor riesgo de complicaciones en comparación con la cirugía abierta.</li>
            <li>Resultados duraderos con una mejora significativa en los síntomas urinarios.</li>
            <li>Menor necesidad de cateterización postoperatoria.</li>
          </ul>
        </div>
      </section>

      {/* Sección de Procedimiento */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Cómo es el Procedimiento?</h2>
        <p className="text-lg text-gray-700 mb-6">
          El procedimiento HoLEP se realiza bajo anestesia general. Se utiliza un láser de Holmium para separar y extraer el tejido prostático obstruido. La duración del procedimiento varía según el tamaño de la próstata, pero generalmente dura entre 60 y 120 minutos.
        </p>
        <img src="/images/procedimiento-holep.jpg" alt="Procedimiento HoLEP" className="w-full h-64 object-cover rounded-lg shadow-md" />
      </section>

      {/* Sección de Testimonios */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Testimonios de Pacientes</h2>
          <div className="space-y-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-700">
                "La cirugía HoLEP cambió mi vida. Ahora puedo orinar sin dolor ni molestias. Estoy muy agradecido con el Dr. Bruno Rubí López."
              </p>
              <p className="mt-4 text-right text-gray-500">- Juan Pérez</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-700">
                "Excelente procedimiento, me recuperé rápidamente y los resultados fueron excepcionales."
              </p>
              <p className="mt-4 text-right text-gray-500">- Carlos García</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Preguntas Frecuentes */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Preguntas Frecuentes</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">¿Es la cirugía HoLEP dolorosa?</h3>
            <p className="text-lg text-gray-700">
              No, la cirugía HoLEP se realiza bajo anestesia, por lo que no sentirás dolor durante el procedimiento. Algunos pacientes pueden experimentar molestias leves durante la recuperación.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">¿Cuánto tiempo dura la recuperación?</h3>
            <p className="text-lg text-gray-700">
              La mayoría de los pacientes se recuperan completamente en 1 a 2 semanas. Es posible que puedas reanudar actividades ligeras al día siguiente del procedimiento.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">¿Qué resultados puedo esperar?</h3>
            <p className="text-lg text-gray-700">
              Los pacientes experimentan una mejora significativa en los síntomas urinarios, con resultados duraderos que pueden durar muchos años.
            </p>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default LandingPage;
