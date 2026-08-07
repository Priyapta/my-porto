"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Profile", href: "#" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 border-b"
        style={{
          backgroundColor: "rgba(7,17,12,0.97)",
          borderColor: "rgba(92,255,149,0.15)",
        }}
      >
        <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <a
            href="#"
            className="font-display-xl text-headline-md font-bold tracking-widest text-[#7dffb2] uppercase"
          >
            Priyapta HUB
          </a>

          <div className="hidden md:flex items-center gap-8 font-body-md text-body-md uppercase tracking-widest">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-on-surface-variant hover:text-primary transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#5cff95] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:block font-body-md text-body-md uppercase tracking-widest text-primary border-b border-primary pb-1 hover:opacity-70 transition-opacity duration-300"
          >
            Hire Me
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-20 z-40 bg-[#07110c] flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-display-xl-mobile text-headline-lg text-primary uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="font-label-md text-label-md uppercase tracking-widest text-primary border-b border-primary pb-1"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
