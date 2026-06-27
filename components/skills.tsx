"use client";

import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiPython, SiDjango, SiFastapi, SiNodedotjs, SiRust, SiSpring,
  SiPostgresql, SiRedis, SiFirebase,
  SiDocker, SiLinux, SiGit,
  SiCplusplus,
} from "react-icons/si";
import { FaRobot, FaBroadcastTower, FaNetworkWired, FaAws } from "react-icons/fa";

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface Category {
  label: string;
  skills: Skill[];
}

const categories: Category[] = [
  {
    label: "Frontend",
    skills: [
      { name: "React",        icon: <SiReact />,       color: "#61DAFB" },
      { name: "Next.js",      icon: <SiNextdotjs />,   color: "#ffffff" },
      { name: "TypeScript",   icon: <SiTypescript />,  color: "#3178C6" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Python",      icon: <SiPython />,    color: "#FFD43B" },
      { name: "Django",      icon: <SiDjango />,    color: "#44B78B" },
      { name: "FastAPI",     icon: <SiFastapi />,   color: "#009688" },
      { name: "Node.js",     icon: <SiNodedotjs />, color: "#339933" },
      { name: "Rust",        icon: <SiRust />,      color: "#CE422B" },
      { name: "Spring Boot", icon: <SiSpring />,    color: "#6DB33F" },
    ],
  },
  {
    label: "Database",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
      { name: "Redis",      icon: <SiRedis />,      color: "#DC382D" },
      { name: "Firebase",   icon: <SiFirebase />,   color: "#FFCA28" },
    ],
  },
  {
    label: "DevOps",
    skills: [
      { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
      { name: "AWS",    icon: <FaAws />,    color: "#FF9900" },
      { name: "Linux",  icon: <SiLinux />,  color: "#FCC624" },
      { name: "Git",    icon: <SiGit />,    color: "#F05032" },
    ],
  },
  {
    label: "Hardware",
    skills: [
      { name: "ROS 2",     icon: <FaRobot />,         color: "#22D3EE" },
      { name: "C++",       icon: <SiCplusplus />,     color: "#00599C" },
      { name: "LoRa",      icon: <FaBroadcastTower />, color: "#A78BFA" },
      { name: "WebSocket", icon: <FaNetworkWired />,   color: "#34D399" },
    ],
  },
];

const BORDER = { borderColor: "rgba(92,255,149,0.15)" };

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const Skills = () => (
  <section id="skills" className="w-full border-t" style={BORDER}>
    <div className="py-section-gap md:py-section-gap-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16"
      >
        <h2 className="font-headline-lg text-headline-lg text-[#5cff95] tracking-tight">
          Technical Skills
        </h2>
      </motion.div>

      <div className="space-y-0">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-10 py-8 border-b items-start"
            style={BORDER}
          >
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest pt-1">
              {cat.label}
            </span>

            <motion.div
              className="flex flex-wrap gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {cat.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={badgeVariants}
                  whileHover={{
                    scale: 1.06,
                    boxShadow: `0 0 14px 2px ${skill.color}40`,
                    borderColor: `${skill.color}80`,
                    transition: { duration: 0.18 },
                  }}
                  className="flex items-center gap-2 border px-4 py-2.5 text-primary cursor-default"
                  style={BORDER}
                >
                  <motion.span
                    className="text-base"
                    style={{ color: skill.color }}
                    whileHover={{ rotate: [0, -12, 12, 0], transition: { duration: 0.4 } }}
                  >
                    {skill.icon}
                  </motion.span>
                  <span className="font-label-md text-label-md uppercase tracking-widest">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
