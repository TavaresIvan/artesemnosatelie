import React from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imgSrc: string;
  imgAlt: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imgSrc,
  imgAlt,
}) => {
  if (!isOpen) return null;

  return (
    // Backdrop escuro e fixo (Tailwind: fixed, inset-0, bg-black/80)
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm"
      onClick={onClose} // Fecha ao clicar fora da imagem
    >
      <div
        className="relative max-w-4xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()} // Impede que o clique na imagem feche o modal
      >
        <img
          src={imgSrc}
          alt={imgAlt}
          className="max-h-[85vh] w-auto rounded-lg shadow-2xl object-contain"
        />

        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition duration-200"
          aria-label="Fechar Modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
