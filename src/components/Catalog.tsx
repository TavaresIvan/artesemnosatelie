/* src/components/Catalog.tsx */
import React, { useState } from "react";
import ImageModal from "./ImageModal"; // Importe o novo componente

interface Item {
  id: number;
  title: string;
  price: string;
  img: string;
  size: string;
}

const ITEMS: Item[] = [
  {
    id: 1,
    title: "Pingente Anjo Branco",
    price: "R$ 40",
    img: "/images/anjobranco.jpeg",
    size: "30 cm",
  },
  {
    id: 2,
    title: "Pingente Anjo Mostarda",
    price: "R$ 40",
    img: "/images/anjomostarda.jpeg",
    size: "30 cm",
  },
  {
    id: 3,
    title: "Enfeite bola",
    price: "R$ 15",
    img: "/images/bolas.jpeg",
    size: "70 mm",
  },
  {
    id: 4,
    title: "Pingente Papai Noel com Gizo",
    price: "R$ 10",
    img: "/images/papainoelvermelho.jpeg",
    size: "20 cm",
  },
  {
    id: 5,
    title: "Pingente Papai Noel com Gizo",
    price: "R$ 10",
    img: "/images/papainoelmostarda.jpeg",
    size: "20 cm",
  },
  {
    id: 6,
    title: "Pigente bola de macramê",
    price: "R$ 5 (Amarela)<br /> R$ 6 (Vermelha), R$ 8 (Verde) ",
    img: "/images/arcos.jpeg",
    size: "8 cm",
  },
  {
    id: 7,
    title: "Pigente bola de macramê",
    price: "R$ 5",
    img: "/images/arcos2.jpeg",
    size: "8 cm",
  },
  {
    id: 8,
    title: "Pigente mini árvores",
    price: "R$ 2.50",
    img: "/images/enfeitearvore.jpeg",
    size: "15 cm",
  },
  {
    id: 9,
    title: "Difusores",
    price: "R$ 2.50",
    img: "/images/difusores.jpeg",
    size: "15 cm",
  },
  {
    id: 10,
    title: "Colar de mesa",
    price: "R$ 2.50",
    img: "/images/colardemesa.jpeg",
    size: "15 cm",
  },
  {
    id: 11,
    title: "Colar de mesa",
    price: "R$ 2.50",
    img: "/images/bolasespeciais.jpeg",
    size: "15 cm",
  },
];

const Catalog: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({ src: "", alt: "" });

  const handleOpenModal = (imgSrc: string, title: string) => {
    setCurrentImage({ src: imgSrc, alt: title });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentImage({ src: "", alt: "" });
  };

  return (
    <section id="catalog" className="py-12">
      <div className="text-center mb-12 reveal">
        <h3 className="text-4xl font-extrabold text-gray-900">Nossa Coleção</h3>
        <p className="text-lg text-gray-600 mt-3">
          Qualidade e detalhe em cada nó. Clique na peça para ampliar.
        </p>{" "}
        {/* Mudei a descrição */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ITEMS.map((it) => (
          <article
            key={it.id}
            className="reveal card-shadow bg-white rounded-xl group cursor-pointer border border-gray-100 transition-all duration-300 hover:border-amber-200"
            onClick={() => handleOpenModal(it.img, it.title)}
            // REMOVIDO: overflow-hidden do article. Ele deve ficar na div da imagem.
          >
            {/* 1. CONTAINER DA IMAGEM: Apenas aqui deve ter overflow-hidden */}
            <div className="overflow-hidden rounded-t-xl">
              {" "}
              {/* rounded-t-xl para manter a borda do topo arredondada */}
              <img
                src={it.img}
                alt={it.title}
                // O aspect-ratio 3/4 (vertical) está no index.css
                className="catalog-img w-full transition-transform duration-500 group-hover:scale-[1.05]"
              />
            </div>

            {/* 2. BLOCO DE TEXTO/BOTÃO: Garante que o conteúdo esteja abaixo da imagem */}
            <div className="p-5 flex flex-col gap-4">
              {" "}
              {/* Mudei para flex-col para empilhar o texto e o botão */}
              {/* Informações do Produto (Título, Preço, Tamanho) */}
              <div>
                <h4 className="font-bold text-lg text-gray-900">{it.title}</h4>
                <p className="text-base text-amber-700 font-semibold mt-1">
                  {it.price}
                </p>
                <p className="text-sm text-gray-500 mt-1">Tamanho: {it.size}</p>
              </div>
              {/* Botão de Contato (no rodapé do bloco de texto) */}
              <div className="mt-2">
                <a
                  className="btn-secondary whitespace-nowrap"
                  href={`https://api.whatsapp.com/send?phone=55YOURNUMBER&text=${encodeURIComponent(
                    `Olá! Gostaria de mais informações sobre: ${it.title}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()} // IMPEDE que o clique no botão abra o modal da imagem
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white bg-green-600 rounded-full p-0.5"
                  >
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12c0 1.48.336 2.9.972 4.172L2 22l5.828-1.028A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M17.062 16.711c-.136-.067-.354-.112-.505-.133-.15-.022-.259-.008-.372.115-.113.122-.435.547-.532.657-.098.11-.196.124-.365.06-.169-.065-.713-.263-1.355-.833-.497-.442-.83-.99-.982-1.258-.152-.268-.016-.249.108-.36.104-.093.23-.242.348-.36.119-.118.158-.201.205-.336.047-.135.023-.255-.011-.336-.035-.081-.328-.788-.45-.98-.122-.192-.244-.162-.336-.165-.092-.003-.205-.003-.318-.003-.113 0-.294.045-.45.223-.155.178-.593.578-.593 1.409 0 .83.606 1.63.969 1.85.201.066 1.258.803 1.513.914.255.111.458.17.618.14.16-.03.435-.133.5-.278.066-.145.234-.788.117-.98-.116-.192-.257-.27-.406-.356z"
                      fill="#fff"
                    />
                  </svg>
                  <span>Conversar</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* O Modal é renderizado aqui, fora do loop */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        imgSrc={currentImage.src}
        imgAlt={currentImage.alt}
      />
    </section>
  );
};

export default Catalog;
