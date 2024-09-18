import React from 'react';

const ModalAbout = ({ showModal, closeModal, content }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <div className="mb-4">{content}</div>
        <button className="bg-brandPrimary text-white px-4 py-2 rounded" onClick={closeModal}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalAbout;
