"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      organization: "Gladiatos Humanoid Robotic Team",
      location: "Depok, Indonesia",
      role: "Technical Director",
      period: "Dec 2024 – Present",
      points: [
        "Led the technical direction and system architecture of an autonomous humanoid robot, integrating hardware, embedded systems, and software components.",
        "Designed and validated robot simulations using ROS2, accelerating prototyping and reducing integration risks prior to hardware deployment.",
        "Coordinated cross-subsystem integration (sensing, control, actuation), ensuring stable and reliable robot performance.",
        "Established structured testing workflows, improving system reliability and consistency during real-world trials.",
      ],
    },
    {
      organization: "University of Indonesia",
      location: "Depok, Indonesia",
      role: "Coordinator Teaching Assistant — Automata Theory",
      period: "Feb 2026 – Present",
      points: [
        "Coordinated teaching assistants in preparing quizzes and examination materials for the Automata Theory course.",
        "Ensured alignment between evaluation content and course learning objectives through structured review processes.",
        "Organized and monitored grading workflows to maintain consistency, fairness, and timely feedback.",
        "Collaborated with lecturers to manage course logistics and ensure smooth execution of assessments.",
      ],
    },
    {
      organization: "University of Indonesia",
      location: "Depok, Indonesia",
      role: "Teaching Assistant — Calculus I",
      period: "Aug 2025 – Dec 2025",
      points: [
        "Reviewed and graded student exams and quizzes, ensuring accurate and fair evaluation.",
        "Facilitated learning sessions for 60+ freshman students, simplifying complex calculus concepts into clear explanations.",
        "Developed assessment materials and managed grading data to support reliable reporting and course improvement.",
      ],
    },
    {
      organization: "Badan Eksekutif Mahasiswa Universitas Indonesia",
      location: "Depok, Indonesia",
      role: "Head of Student Welfare Department",
      period: "Jun 2024 – Feb 2025",
      points: [
        "Led initiatives to improve student well-being, inclusivity, and access to campus support resources.",
        "Increased total donation funds for student welfare programs by 70% compared to the previous year.",
        "Promoted the 'Curhat Sama Panda' mental health initiative, achieving 90% growth in student participation and peer-support engagement.",
        "Collaborated with faculty representatives in structured discussions on student life, academics, curriculum, and mental health, contributing to actionable improvements.",
      ],
    },
    {
      organization: "Gemastik XVIII IoT Division (Kemendikbud)",
      location: "Indonesia",
      role: "Programmer",
      period: "2025",
      points: [
        "Developed Jalalink, an IoT-based communication system enabling fishermen to communicate in offshore areas with limited network access.",
        "Engineered integration between microcontrollers and wireless communication modules for long-range data transmission.",
        "Customized the open-source Meshtastic mesh communication protocol using C/C++ for reliable device-to-device messaging.",
        "Conducted field validation with fishermen in Kampung Nelayan Jakarta to gather requirements and test real-world usability.",
      ],
    },
    {
      organization: "Remote Robot Soccer GIIAS Competition",
      location: "Indonesia",
      role: "Robotics Programmer",
      period: "2025",
      points: [
        "Built a remote-controlled soccer robot, implementing control logic for movement and gameplay interaction.",
        "Integrated sensors and motor controllers to enable navigation, ball handling, and responsive control.",
        "Performed iterative testing and debugging to improve movement stability, responsiveness, and control accuracy during matches.",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tight text-center">
            Experience
          </h2>
        </motion.div>

        {/* Experience List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
                className="bg-surface/50 border border-border rounded-xl p-8 hover:border-accent/30 transition-colors duration-300 group"
              >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {exp.organization}
                  </h3>
                  <p className="text-lg font-semibold text-foreground/80">
                    {exp.role}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-foreground/50 bg-background/50 px-3 py-1 rounded-full text-sm border border-border self-start">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-4">
                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-foreground/70 leading-relaxed"
                  >
                    <ChevronRight className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
