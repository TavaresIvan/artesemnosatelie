/* src/components/Catalog.tsx */
import React from "react";

interface Item {
  id: number;
  title: string;
  price: string;
  img: string;
  size: string;
}

const ITEMS: Item[] = [
  // URLs de exemplo foram mantidas.
  {
    id: 1,
    title: "Painel Macramé P",
    price: "R$ 120",
    img: "https://images.unsplash.com/photo-1619808799783-db68de98fbe0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    size: "20 cm",
  },
  {
    id: 2,
    title: "Suporte para Plantas",
    price: "R$ 80",
    img: "https://plus.unsplash.com/premium_photo-1661757739361-b05e5a077ed0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    size: "20 cm",
  },
  {
    id: 3,
    title: "Cortina Macramé",
    price: "R$ 240",
    img: "https://images.unsplash.com/photo-1631945788919-24e76faead25?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    size: "20 cm",
  },
  {
    id: 4,
    title: "Manta Decorativa (Lã)",
    price: "R$ 180",
    img: "https://images.unsplash.com/photo-1610428011552-734764c290ee?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    size: "20 cm",
  },
  {
    id: 5,
    title: "Cesto de Fios",
    price: "R$ 95",
    img: "https://images.unsplash.com/photo-1610428011552-734764c290ee?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    size: "20 cm",
  },
  {
    id: 6,
    title: "Detalhe de Parede",
    price: "R$ 75",
    img: "https://images.unsplash.com/photo-1610428011552-734764c290ee?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    size: "20 cm",
  },
];

const Catalog: React.FC = () => {
  return (
    <section id="catalog" className="py-12">
      <div className="text-center mb-12 reveal">
        <h3 className="text-4xl font-extrabold text-gray-900">Nossa Coleção</h3>
        <p className="text-lg text-gray-600 mt-3">
          Qualidade e detalhe em cada nó. Explore as peças disponíveis para
          pronta-entrega.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ITEMS.map((it) => (
          <article
            key={it.id}
            className="reveal card-shadow bg-white rounded-xl overflow-hidden group cursor-pointer border border-gray-100 transition-all duration-300 hover:border-amber-200"
          >
            <div className="overflow-hidden">
              <img
                src={it.img}
                alt={it.title}
                className="catalog-img w-full transition-transform duration-500 group-hover:scale-[1.05]"
              />
            </div>

            <div className="p-5 flex items-start justify-between gap-4">
              <div>
                <h4 className="font-bold text-lg text-gray-900">{it.title}</h4>
                {/* INFORMAÇÃO DE TAMANHO: Discreto e Secundário */}
                <p className="text-sm text-gray-500 mt-1">Tamanho: {it.size}</p>
                {/* Preço (Cor de destaque) */}
                <p className="text-base text-amber-700 font-semibold mt-1">
                  {it.price}
                </p>
              </div>
              <div className="ml-auto">
                <a
                  className="btn-secondary whitespace-nowrap"
                  href={`https://api.whatsapp.com/send?phone=55YOURNUMBER&text=${encodeURIComponent(
                    `Olá! Gostaria de mais informações sobre: ${it.title}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* Ícone do WhatsApp: Agora alinhado pelo btn-secondary */}
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
                    className="text-white bg-green-500 rounded-full p-0.5"
                  >
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12c0 1.48.336 2.9.972 4.172L2 22l5.828-1.028A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"
                      fill="#4CAF50"
                    />{" "}
                    {/* Fundo verde da bolha */}
                    <path
                      d="M17.062 16.711c-.136-.067-.354-.112-.505-.133-.15-.022-.259-.008-.372.115-.113.122-.435.547-.532.657-.098.11-.196.124-.365.06-.169-.065-.713-.263-1.355-.833-.497-.442-.83-.99-.982-1.258-.152-.268-.016-.249.108-.36.104-.093.23-.242.348-.36.119-.118.158-.201.205-.336.047-.135.023-.255-.011-.336-.035-.081-.328-.788-.45-.98-.122-.192-.244-.162-.336-.165-.092-.003-.205-.003-.318-.003-.113 0-.294.045-.45.223-.155.178-.593.578-.593 1.409 0 .83.606 1.63 68.969 1.85.201.066 1.258.803 1.513.914.255.111.458.17.618.14.16-.03.435-.133.5-.278.066-.145.234-.788.117-.98-.116-.192-.257-.27-.406-.356z"
                      fill="#fff"
                    />{" "}
                    {/* Ícone do WhatsApp branco */}
                  </svg>
                  <span>Conversar</span> {/* O texto está DENTRO do botão */}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Catalog;
