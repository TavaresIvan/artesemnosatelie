/* src/hooks/useReveal.ts */
import { useEffect } from "react";

export default function useReveal(
  refSelector = ".reveal",
  rootMargin = "-10% 0px -10% 0px"
) {
  useEffect(() => {
    // Busca todos os elementos que devem ser revelados
    const els = Array.from(document.querySelectorAll(refSelector));
    if (!els.length) return;

    // Inicializa a Intersection Observer
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Adiciona a classe para iniciar a transição
            entry.target.classList.add("revealed");
            // Para de observar o elemento após a revelação
            io.unobserve(entry.target);
          }
        });
      },
      // Configuração para revelar o elemento quando 10% do topo da tela o alcançar
      // Ajuste para: threshold: 0 para que revele logo que entra no viewport
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" } // A margem negativa inferior garante que revele um pouco antes de sumir
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [refSelector, rootMargin]);
}
