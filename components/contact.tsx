"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio message from ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    window.location.href = `mailto:priaptanaufal@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: "", email: "", message: "" });
  };

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
      className="flex min-h-screen items-center justify-center px-4 py-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="w-full max-w-5xl rounded-[2rem] border border-emerald-400/15 bg-[linear-gradient(180deg,rgba(11,22,16,0.96),rgba(6,12,9,0.96))] p-8 shadow-[0_0_0_1px_rgba(92,255,149,0.06),0_24px_80px_rgba(0,0,0,0.35)] md:p-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground leading-tight tracking-tight">
              LET&apos;S CONNECT
              <br />
              TOGETHER
            </h2>
            <p className="mt-6 text-foreground/70 text-lg leading-relaxed">
              Have a project in mind? I&apos;d love to hear about it. Get in
              touch and let&apos;s create something amazing together.
            </p>

            <div className="mt-12 space-y-6">
              {[
                { label: "Email", value: "priaptanaufal@gmail.com" },
                { label: "Location", value: "Jakarta, Indonesia" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-xs uppercase tracking-widest text-muted mb-2">
                    {item.label}
                  </div>
                  <div className="text-foreground font-display font-bold">
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-widest text-muted mb-3"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-emerald-400/15 bg-[#0c1712] px-4 py-3 text-foreground transition-colors placeholder:text-emerald-50/25 focus:border-[#5cff95] focus:outline-none"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-widest text-muted mb-3"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-emerald-400/15 bg-[#0c1712] px-4 py-3 text-foreground transition-colors placeholder:text-emerald-50/25 focus:border-[#5cff95] focus:outline-none"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-widest text-muted mb-3"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full resize-none border border-emerald-400/15 bg-[#0c1712] px-4 py-3 text-foreground transition-colors placeholder:text-emerald-50/25 focus:border-[#5cff95] focus:outline-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#5cff95] py-4 font-display text-sm font-bold tracking-widest text-[#04110a] shadow-[0_0_30px_rgba(92,255,149,0.18)] transition-opacity hover:opacity-90"
            >
              SEND MESSAGE
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
