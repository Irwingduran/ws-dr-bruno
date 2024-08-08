import React from 'react';

const Modal = ({ showModal, closeModal, service }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">{service.title}</h2>
        <p className="mb-4">{service.description}</p>
        
        <button className="bg-indigo-600 text-white px-4 py-2 rounded" onClick={closeModal}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
