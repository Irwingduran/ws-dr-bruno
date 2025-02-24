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
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-3xl p-6 relative z-60">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 z-70 focus:outline-none"
          onClick={onClose}
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        {/* Content */}
        <h2 className="text-2xl font-bold text-neutralDGrey mb-2">{title}</h2>
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto object-cover rounded-lg mb-4"
        />
        <p className="text-neutralDGrey">{description}</p>
      </div>
    </div>
  );
};

export default Modal;
