import React from "react";

interface Item {
  id: number;
  title: string;
  price: string;
  img: string;
}

const ITEMS: Item[] = [
  {
    id: 1,
    title: "Painel Macramé P",
    price: "R$ 120",
    img: "https://images.unsplash.com/photo-1619808799783-db68de98fbe0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Suporte para Plantas",
    price: "R$ 80",
    img: "https://plus.unsplash.com/premium_photo-1661757739361-b05e5a077ed0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Cortina Macramé",
    price: "R$ 240",
    img: "https://images.unsplash.com/photo-1631945788919-24e76faead25?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Chaveiro Decorativo",
    price: "R$ 25",
    img: "https://images.unsplash.com/photo-1610428011552-734764c290ee?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Catalog: React.FC = () => {
  return (
    <section id="catalog" className="py-6">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-semibold">Catálogo</h3>
        <p className="text-sm text-gray-500">
          Peças selecionadas — clicáveis para ver detalhes
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ITEMS.map((it) => (
          <article
            key={it.id}
            className="reveal card-shadow bg-white p-4 rounded-lg"
          >
            <img src={it.img} alt={it.title} className="catalog-img w-full" />
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <h4 className="font-semibold">{it.title}</h4>
                <p className="text-sm text-gray-500">{it.price}</p>
              </div>
              <div className="ml-auto">
                <a
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-sm hover:bg-gray-50"
                  href={`https://api.whatsapp.com/send?phone=55YOURNUMBER&text=${encodeURIComponent(
                    `Olá! Gostaria de mais informações sobre: ${it.title}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Contato
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
