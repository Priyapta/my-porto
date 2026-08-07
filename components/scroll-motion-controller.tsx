"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal]";
const AMBIENT_SELECTOR = "[data-ambient-section]";

const ScrollMotionController = () => {
  useEffect(() => {
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
    );
    const ambientSections = Array.from(
      document.querySelectorAll<HTMLElement>(AMBIENT_SELECTOR),
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;

          if (element.hasAttribute("data-reveal")) {
            if (entry.isIntersecting) {
              element.classList.add("is-visible");
              observer.unobserve(element);
            }
            return;
          }

          if (element.hasAttribute("data-ambient-section")) {
            element.classList.toggle("is-in-view", entry.isIntersecting);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );

    revealElements.forEach((element) => observer.observe(element));
    ambientSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
};

export default ScrollMotionController;
