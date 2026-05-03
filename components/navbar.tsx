"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["ABOUT", "PROJECT", "EXPERIENCE", "SKILLS", "CONTACT"];

  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center  border-b border-emerald-400/15 bg-[#07110c]/80 px-6 py-4 backdrop-blur-xl">
        <div className="text-xs tracking-[0.35em] font-display font-bold text-[#7dffb2]"></div>

        <div className="hidden md:flex gap-12 lg:gap-16">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link px-2"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 w-6"
        >
          <span
            className={`h-0.5 bg-foreground transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`h-0.5 bg-foreground transition-all ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 bg-foreground transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 top-16 z-40 flex flex-col items-center justify-center gap-8 bg-[#07110c] md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                custom={i}
                variants={itemVariants}
                initial="closed"
                animate="open"
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-2xl uppercase tracking-widest text-foreground hover:text-accent transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
