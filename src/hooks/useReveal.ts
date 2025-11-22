import { useEffect } from "react";

export default function useReveal(
  refSelector = ".reveal",
  rootMargin = "-10% 0px -10% 0px"
) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(refSelector));
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [refSelector, rootMargin]);
}
