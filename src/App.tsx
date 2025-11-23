import React from "react";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import useReveal from "./hooks/useReveal";

const App: React.FC = () => {
  useReveal();

  return (
    <div className="min-h-screen text-gray-800 bg-gray-50/70">
      <Hero />

      <main className="max-w-7xl mx-auto px-6 md:px-8 lg:px-0">
        <section className="mt-24 reveal">
          {" "}
          <Catalog />
        </section>

        <section className="mt-32 mb-20 reveal">
          {" "}
          <ContactCTA />
        </section>
      </main>

      <Footer />

      {/* WhatsApp FAB (Flutuante) */}
      <a
        className="whatsapp-fab transition-transform duration-300 hover:scale-105"
        href={`https://api.whatsapp.com/send?phone=5561998539400&text=${encodeURIComponent(
          "Olá! Vi seu catálogo e quero saber mais sobre as peças."
        )}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contato por WhatsApp"
      >
        {/* Usando o btn-primary no estilo flutuante */}
        <div className="btn-primary p-4 rounded-full shadow-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.99.38 1.97.78 2.9a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.18-1.18a2 2 0 0 1 2.11-.45c.93.4 1.91.66 2.9.78A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default App;
