import React from "react";

const Hero: React.FC = () => {
  return (
    <header className="hero-gradient pt-16 pb-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-0 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-lg bg-[#f3efe6] flex items-center justify-center border border-gray-200">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z" stroke="#6B4E16" strokeWidth="1.2"/>
              <path d="M8 12C8 12 10 9 12 9C14 9 16 12 16 12" stroke="#6B4E16" strokeWidth="1.2"/>
            </svg>
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#111827]">Artes em Nós</h1>
            <p className="text-sm text-gray-500">Peças artesanais de macramé — design atemporal</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#catalog" className="hover:underline">Catálogo</a>
          <a href="#contact" className="hover:underline">Contato</a>
          <a href="#" className="btn-primary px-4 py-2">Comprar</a>
        </nav>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-0 text-center mt-12 reveal">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">Peças únicas feitas à mão, pensadas para durar</h2>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">Trabalhamos com materiais selecionados e acabamento fino para que cada peça conte uma história no seu lar. Veja nosso catálogo abaixo e fale conosco pelo WhatsApp.</p>
      </div>
    </header>
  );
};

export default Hero;
