import React from "react";

const ContactCTA: React.FC = () => {
  return (
    <div id="contact" className="rounded-2xl bg-white p-8 card-shadow">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h3 className="text-2xl font-bold">Fale conosco</h3>
          <p className="text-gray-600 mt-2">Interessado(a) em uma peça ou quer encomendar algo personalizado? Envie uma mensagem no WhatsApp e teremos prazer em responder.</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            className="btn-primary"
            href={`https://api.whatsapp.com/send?phone=55YOURNUMBER&text=${encodeURIComponent('Olá! Vi o catálogo e quero mais informações.')}`}
            target="_blank"
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Contato por WhatsApp</span>
          </a>

          <a href="#catalog" className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50">Ver catálogo</a>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;
