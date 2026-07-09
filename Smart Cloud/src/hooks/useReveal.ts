import { useEffect, useRef, useState } from "react";

/**
 * Adds an `in-view` class to elements with the `.reveal` class when they enter the viewport.
 * Uses MutationObserver so dynamically mounted elements (e.g. filtered items) are also observed.
 */
export function useRevealContainer<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const observeElements = () => {
      const els = Array.from(root.querySelectorAll<HTMLElement>(".reveal:not(.in-view)"));
      els.forEach((el) => {
        // If element is already in viewport or parent is visible, mark in-view
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("in-view");
        } else {
          io.observe(el);
        }
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 10% 0px" }
    );

    observeElements();

    // Observe DOM mutations so dynamically added elements (like filtered tab items) are revealed
    const mo = new MutationObserver(() => {
      observeElements();
    });

    mo.observe(root, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return ref;
}

export function useMousePosition() {
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return pos;
}

export function useScrollProgress() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}
