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
            entry.target.classList.add("revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [refSelector, rootMargin]);
}
