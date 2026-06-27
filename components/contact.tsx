"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const BORDER = { borderColor: "rgba(92,255,149,0.15)" };

const Contact = () => (
  <section
    id="contact"
    className="w-full border-t"
    style={BORDER}
  >
    <div className="py-section-gap md:py-section-gap-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-8"
      >
        <h2 className="font-headline-lg text-headline-lg text-[#5cff95] tracking-tight">
          Contact
        </h2>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>

        <motion.a
          href="mailto:priaptanaufal@gmail.com"
          className="group inline-flex items-center gap-4 w-fit"
          whileHover={{ x: 6 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.span
            className="flex items-center justify-center w-12 h-12 border text-[#5cff95]"
            style={BORDER}
            animate={{ boxShadow: ["0 0 0px rgba(92,255,149,0)", "0 0 14px rgba(92,255,149,0.35)", "0 0 0px rgba(92,255,149,0)"] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Mail size={20} strokeWidth={1.5} />
          </motion.span>
          <span className="font-headline-md text-headline-md text-primary group-hover:text-[#5cff95] transition-colors duration-300 tracking-tight">
            priaptanaufal@gmail.com
          </span>
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default Contact;
