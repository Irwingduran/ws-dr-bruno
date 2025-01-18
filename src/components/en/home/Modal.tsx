import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  imageSrc: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-3xl p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-30"
          onClick={onClose}
        >
         Close ✕ 
        </button>

        {/* Content */}
        <h2 className="text-2xl font-bold text-neutralDGrey mb-2">{title}</h2>
        <img src={imageSrc} alt={title} className="w-full h-full object-cover rounded-lg mb-4" />
        <p className="text-neutralDGrey">{description}</p>
      </div>
    </div>
  );
};

export default Modal;
