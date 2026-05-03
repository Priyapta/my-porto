"use client";

import { motion } from "framer-motion";

const About = () => {
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
      id="about"
      className="flex min-h-screen items-center justify-center px-4 py-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="w-full max-w-4xl rounded-[2rem] border border-emerald-400/15 bg-[linear-gradient(180deg,rgba(16,33,24,0.92),rgba(8,18,13,0.92))] p-8 shadow-[0_0_0_1px_rgba(92,255,149,0.06),0_24px_80px_rgba(0,0,0,0.35)] md:p-12"
      >
        <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-12 tracking-tight text-center">
          ABOUT ME
        </h2>

        <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
          <p>
            I'm a Computer Science student passionate about backend development,
            system design, and the intersection of software with the physical
            world. I build scalable, secure web applications using Rust, Django,
            Spring Boot, and Next.js focusing on clean architecture and robust
            authentication systems. Beyond the web, I'm actively involved in IoT
            competitions and part of a humanoid robotics team, where I explore
            how software and hardware come together to solve real problems.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-emerald-400/12 pt-12 md:grid-cols-3">
          {[
            { label: "Years Experience", value: "2+" },
            { label: "Projects Completed", value: "5+" },
            { label: "Organizations", value: "2+" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-accent font-display text-2xl md:text-3xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm uppercase tracking-widest text-muted">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
