"use client";

import { motion } from "framer-motion";

const Skills = () => {
  const skillRows = [
    [
      "React",
      "TypeScript",
      "Node.js",
      "Next.js",
      "Linux",

      "PostgreSQL",
      "Tailwind",
    ],
    [
      "Python",
      "FastAPI",
      "Docker",
      "AWS",
      "Firebase",
      "Redis",
      "WebSocket",
      "Jest",
    ],
  ];

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
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="w-full max-w-5xl"
      >
        <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-20 tracking-tight text-center">
          TECHNICAL SKILLS
        </h2>

        <div className="space-y-12">
          {skillRows.map((skills, rowIndex) => (
            <div key={rowIndex} className="relative overflow-hidden">
              <motion.div
                animate={{
                  x: rowIndex % 2 === 0 ? [0, -1000] : [-1000, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex gap-8 whitespace-nowrap pb-4"
              >
                {/* First set */}
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-4 text-lg font-display font-bold text-foreground"
                  >
                    <span>{skill}</span>
                    <span className="text-accent">✦</span>
                  </div>
                ))}

                {/* Duplicate for seamless loop */}
                {skills.map((skill) => (
                  <div
                    key={`${skill}-2`}
                    className="flex items-center gap-4 text-lg font-display font-bold text-foreground"
                  >
                    <span>{skill}</span>
                    <span className="text-accent">✦</span>
                  </div>
                ))}
              </motion.div>

              {/* Gradient overlays */}
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
