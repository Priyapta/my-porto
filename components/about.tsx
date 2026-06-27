"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const experiences = [
  {
    role: "Technical Director",
    org: "Gladiatos Humanoid Robotic Team",
    period: "Dec 2024 – Present",
    desc: [
      "Led the technical direction and system architecture of an autonomous humanoid robot, integrating hardware, embedded systems, and software components.",
      "Designed and validated robot simulations using ROS2, accelerating prototyping and reducing integration risks prior to hardware deployment.",
      "Coordinated cross-subsystem integration (sensing, control, actuation), ensuring stable and reliable robot performance.",
      "Established structured testing workflows, improving system reliability and consistency during real-world trials.",
    ],
  },
  {
    role: "Coordinator Teaching Assistant",
    org: "University of Indonesia • Automata Theory",
    period: "Feb – Jun 2026",
    desc: [
      "Coordinated teaching assistants in preparing quizzes and examination materials for the Automata Theory course.",
      "Ensured alignment between evaluation content and course learning objectives through structured review processes.",
      "Organized and monitored grading workflows to maintain consistency, fairness, and timely feedback.",
      "Collaborated with lecturers to manage course logistics and ensure smooth execution of assessments.",
    ],
  },
  {
    role: "Teaching Assistant",
    org: "University of Indonesia • Calculus I",
    period: "Aug – Dec 2025",
    desc: [
      "Reviewed and graded student exams and quizzes, ensuring accurate and fair evaluation.",
      "Facilitated learning sessions for 60+ freshman students, simplifying complex calculus concepts into clear explanations.",
      "Developed assessment materials and managed grading data to support reliable reporting and course improvement.",
    ],
  },
  {
    role: "Head of Student Welfare Department",
    org: "BEM Universitas Indonesia",
    period: "Jun 2025 – Feb 2026",
    desc: [
      "Led initiatives to improve student well-being, inclusivity, and access to campus support resources.",
      "Increased total donation funds for student welfare programs by 70% compared to the previous year.",
      "Promoted the 'Curhat Sama Panda' mental health initiative, achieving 90% growth in student participation and peer-support engagement.",
      "Collaborated with faculty representatives in structured discussions on student life, academics, curriculum, and mental health.",
    ],
  },
  {
    role: "Programmer — IoT Division",
    org: "Gemastik XVIII (Kemendikbud)",
    period: "Jun – Sept 2025",
    desc: [
      "Developed Jalalink, an IoT-based communication system enabling fishermen to communicate in offshore areas with limited network access.",
      "Engineered integration between microcontrollers and wireless communication modules for long-range data transmission.",
      "Customized the open-source Meshtastic mesh communication protocol using C/C++ for reliable device-to-device messaging.",
      "Conducted field validation with fishermen in Kampung Nelayan Jakarta to gather requirements and test real-world usability.",
    ],
  },
  {
    role: "Robotics Programmer",
    org: "Remote Robot Soccer GIIAS",
    period: "Jul 2025",
    desc: [
      "Built a remote-controlled soccer robot, implementing control logic for movement and gameplay interaction.",
      "Integrated sensors and motor controllers to enable navigation, ball handling, and responsive control.",
      "Performed iterative testing and debugging to improve movement stability, responsiveness, and control accuracy during matches.",
    ],
  },
];

const awards = [
  {
    title: "Gemastik XVIII — IoT Division",
    org: "Kemendikbud Ristek",
    year: "2025",
    desc: "Competed in the national Gemastik XVIII competition under the IoT category, developing JalaLink — an offline mesh communication device for fishermen.",
  },
  {
    title: "FIRA RobotWorldCup — Qualifier",
    org: "FIRA International",
    year: "2026",
    desc: "Qualified for the FIRA RobotWorldCup, representing the team in the robot soccer category with a custom-built autonomous humanoid robot system.",
  },
];

const BORDER = { borderColor: "rgba(92,255,149,0.15)" };

const ExperienceItem = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="border-b"
      style={BORDER}
    >
      {/* Header — always visible, clickable */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 md:gap-8 py-6 items-center text-left group cursor-pointer"
      >
        <div className="space-y-1">
          <h3 className="font-headline-md text-headline-md text-primary group-hover:text-[#7dffb2] transition-colors duration-200">
            {exp.role}
          </h3>
          <p className="font-label-md text-label-md text-[#5cff95] uppercase tracking-widest">
            {exp.org}
          </p>
        </div>
        <div className="flex items-center gap-4 md:justify-end">
          <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest shrink-0">
            {exp.period}
          </span>
          <span className="text-[#5cff95] shrink-0">
            {open ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
          </span>
        </div>
      </button>

      {/* Collapsible body */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="pb-6 space-y-2 list-none">
              {exp.desc.map((point, j) => (
                <li key={j} className="font-body-md text-body-md text-on-surface-variant flex gap-2.5">
                  <span className="text-[#5cff95] mt-[0.35em] shrink-0 text-[0.5rem]">▸</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const About = () => (
  <section id="about" className="w-full border-t" style={BORDER}>
    <div className="py-section-gap md:py-section-gap-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-0 lg:gap-16 items-start">

        {/* ── Left: Experience ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <h2 className="font-headline-lg text-headline-lg text-[#5cff95] tracking-tight">
              Experience
            </h2>
          </motion.div>

          <div>
            {experiences.map((exp, i) => (
              <ExperienceItem key={exp.role + exp.org} exp={exp} index={i} />
            ))}
          </div>
        </div>

        {/* ── Right: Awards ── */}
        <div className="lg:border-l lg:pl-16 mt-16 lg:mt-0" style={BORDER}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <h2 className="font-headline-lg text-headline-lg text-[#5cff95] tracking-tight">
              Awards
            </h2>
          </motion.div>

          <div className="space-y-0">
            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="py-8 border-b space-y-2"
                style={BORDER}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-headline-md text-headline-md text-primary leading-snug">
                    {award.title}
                  </h3>
                  <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest shrink-0">
                    {award.year}
                  </span>
                </div>
                <p className="font-label-md text-label-md text-[#5cff95] uppercase tracking-widest">
                  {award.org}
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant pt-1">
                  {award.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default About;
