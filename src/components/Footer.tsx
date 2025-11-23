/* src/components/Footer.tsx */
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-32 py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-0 text-center text-sm text-gray-500">
        <p className="font-medium text-gray-700">Artes em Nós</p>
        <p className="mt-1">
          © {new Date().getFullYear()} — Todos os direitos reservados. Design
          atemporal.
        </p>
        <p className="mt-3">
          Feito com ❤️ — Entre em contato:{" "}
          <a
            href="mailto:artesemnosatelie@gmail.com"
            className="underline hover:text-gray-900 transition"
          >
            artesemnosatelie@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
