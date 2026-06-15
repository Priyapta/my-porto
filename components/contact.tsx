"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="contact"
      className="flex items-center justify-center px-4 py-12"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="w-full max-w-xl rounded-[2rem] border border-emerald-400/15 bg-[linear-gradient(180deg,rgba(11,22,16,0.96),rgba(6,12,9,0.96))] p-8 shadow-[0_0_0_1px_rgba(92,255,149,0.06),0_24px_80px_rgba(0,0,0,0.35)] md:p-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground leading-tight tracking-tight">
            LET&apos;S CONNECT
            <br />
            TOGETHER
          </h2>
          <p className="mt-6 text-foreground/70 text-lg leading-relaxed max-w-md">
            Have a project in mind? I&apos;d love to hear about it. Get in
            touch and let&apos;s create something amazing together.
          </p>

          <motion.a
            href="mailto:priaptanaufal@gmail.com"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 flex h-20 w-20 items-center justify-center rounded-full bg-[#5cff95] text-[#04110a] shadow-[0_0_30px_rgba(92,255,149,0.25)] transition-transform hover:shadow-[0_0_50px_rgba(92,255,149,0.35)]"
          >
            <Mail size={32} />
          </motion.a>

          <div className="mt-8 space-y-3">
            <div className="text-xs uppercase tracking-widest text-muted">
              Email
            </div>
            <a
              href="mailto:priaptanaufal@gmail.com"
              className="block text-foreground font-display font-bold text-lg hover:text-[#5cff95] transition-colors"
            >
              priaptanaufal@gmail.com
            </a>
          </div>

          <div className="mt-6 space-y-3">
            <div className="text-xs uppercase tracking-widest text-muted">
              Location
            </div>
            <div className="text-foreground font-display font-bold text-lg">
              Jakarta, Indonesia
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
