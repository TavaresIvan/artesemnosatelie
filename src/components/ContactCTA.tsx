/* src/components/ContactCTA.tsx */
import React from "react";

const ContactCTA: React.FC = () => {
  return (
    // Fundo sutil para destacar a seção
    <div
      id="contact"
      className="rounded-2xl bg-white p-10 md:p-16 border border-gray-200/50"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-4xl font-bold text-gray-900">
            Pronto para Encomendar?
          </h3>
          <p className="text-xl text-gray-600 mt-3">
            Vamos criar algo exclusivo para você. Fale com nossa equipe agora
            mesmo.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            className="btn-primary text-lg"
            href={`https://api.whatsapp.com/send?phone=5561998539400&text=${encodeURIComponent(
              "Olá! Vi o catálogo e quero mais informações."
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Conversar no WhatsApp</span>
          </a>

          <a href="#catalog" className="btn-secondary">
            Revisar Catálogo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;
