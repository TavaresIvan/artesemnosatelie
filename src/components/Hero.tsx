/* src/components/Hero.tsx */
import React from "react";

const Hero: React.FC = () => {
  return (
    // Gradiente suave e padding ajustado
    <header className="hero-gradient pt-8 pb-32 border-b border-gray-200/50">
      {/* Navbar e Logo */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-0 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo / Ícone - cor mais discreta */}
          <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center border border-gray-200">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b45309"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2a10 10 0 0 0-9 15.54C3.8 17.65 6.47 18 12 18s8.2-0.35 9-0.46A10 10 0 0 0 12 2z" />
              <path d="M12 18v4" />
              <path d="M12 18H8" />
              <path d="M12 18h4" />
            </svg>
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-800 tracking-wider">
              Artes em Nós
            </h1>
            <p className="text-xs text-gray-500">Macramé e Design Atemporal</p>
          </div>
        </div>

        {/* Links de Navegação */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a
            href="#catalog"
            className="hover:text-amber-700 transition duration-200"
          >
            Catálogo
          </a>
          <a
            href="#contact"
            className="hover:text-amber-700 transition duration-200"
          >
            Contato
          </a>
          <a href="#contact" className="btn-primary px-4 py-2 text-sm">
            Fale Conosco
          </a>
        </nav>
      </div>

      {/* Conteúdo Principal (Hero) */}
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-0 text-center mt-20 reveal">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-snug text-gray-900 tracking-tight">
          Arte Têxtil que Transforma Seu Ambiente
        </h2>
        <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto">
          Cada peça é um trabalho artesanal exclusivo, feito com fios nobres e
          design moderno. Invista em qualidade e sofisticação para o seu lar.
        </p>

        {/* Botão de Call to Action */}
        <div className="mt-10">
          <a href="#catalog" className="btn-primary text-lg">
            Ver Catálogo Completo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
