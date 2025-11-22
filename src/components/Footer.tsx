import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-24 py-10 bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-0 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Artes em Nós — Todos os direitos reservados.</p>
        <p className="mt-2">Feito com ❤️ — Entre em contato: <a href="mailto:contato@artesernos.com" className="underline">contato@artesernos.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;
