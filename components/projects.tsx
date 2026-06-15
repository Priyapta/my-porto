"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "Robot Simulation",
      description:
        "Developing a robot simulation system using ROS 2 for autonomous behavior testing and control.",
      tech: ["ROS", "Python", "Linux", "C++"],
      image: "/project/project_robot.jpeg",
      objectFit: "object-cover",
      linkUrl:
        "https://github.com/Gladiatos-Programming/Simulasi-Gazebo-Darnet",
      linkLabel: "GitHub",
      linkKind: "github",
    },
    {
      id: "02",
      title: "Medicine App",
      description:
        "Building a Flutter-based mobile application to help users find and access nearby pharmacies and medicines.",
      tech: ["Flutter", "JavaScript", "Python", "Django"],
      image: "/project/project_sobat.png",
      objectFit: "object-cover",
      linkUrl: "https://github.com/PBP24-D10/sobat_mobile",
      linkLabel: "GitHub",
      linkKind: "github",
    },
    {
      id: "03",
      title: "JalaLink",
      description:
        "Designing an IoT communication device that enables fishermen to stay connected while at sea.",
      tech: ["React", "POSTGRESQL", "Lora", "C++", "C", "Typescript"],
      image: "/project/project_gemastik.png",
      objectFit: "object-cover",
      linkUrl: "https://github.com/orgs/PACILGEMAS/repositories",
      linkLabel: "GitHub",
      linkKind: "github",
    },
    {
      id: "04",
      title: "CARLOK & SiRuang",
      description:
        "Integrating CARLOK and SiRuang systems to streamline room search and booking within Fasilkom UI.",
      tech: [
        "Python",
        "Django-RestFramework",
        "Next.js",
        "PostgreSQL",
        "MINIO",
        "Docker",
      ],
      image: "/project/project_carlok.png",
      objectFit: "object-contain p-6",
      links: [
        {
          url: "https://siruang.ppl.cs.ui.ac.id/",
          label: "SiRuang",
          kind: "demo",
        },
        {
          url: "https://carlok.ppl.cs.ui.ac.id/",
          label: "CARLOK",
          kind: "demo",
        },
      ],
    },
    {
      id: "05",
      title: "Ruang Terang",
      description:
        "Website profile for a non-profit organization focused on skill development and charity events for those in need.",
      tech: ["Next.js"],
      image: "/project/ruang-terang.png",
      objectFit: "object-cover",
      links: [
        {
          url: "https://ruang-terang.com/",
          label: "Demo",
          kind: "demo",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="project"
      className="flex min-h-screen items-center justify-center px-4 py-20"
    >
      <div className="w-full max-w-6xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tight text-center">
            Project
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-0 overflow-hidden rounded-[2rem] border border-emerald-400/15 bg-[#08110d] shadow-[0_0_0_1px_rgba(92,255,149,0.06),0_24px_80px_rgba(0,0,0,0.35)] md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group border-border overflow-hidden cursor-pointer transition-all duration-300"
              style={{
                borderRight:
                  projects.indexOf(project) % 2 === 0
                    ? "1px solid rgba(92, 255, 149, 0.12)"
                    : "none",
                borderBottom:
                  projects.indexOf(project) <
                  projects.length - (projects.length % 2 === 0 ? 2 : 1)
                    ? "1px solid rgba(92, 255, 149, 0.12)"
                    : "none",
              }}
            >
              {/* Image Container */}
              <motion.div
                whileHover={{ y: -4 }}
                className="relative aspect-video overflow-hidden bg-[#0f1b15] transition-all duration-300 group-hover:shadow-[0_0_0_1px_rgba(92,255,149,0.12),0_0_30px_rgba(92,255,149,0.12)]"
              >
                <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
                  {(
                    project.links ?? [
                      {
                        url: project.linkUrl,
                        label: project.linkLabel,
                        kind: project.linkKind,
                      },
                    ]
                  ).map((link) => (
                    <a
                      key={`${project.id}-${link.label}`}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} ${link.label}`}
                      className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-[#07110c]/85 px-3 py-1.5 text-[11px] font-display font-bold uppercase tracking-[0.22em] text-[#b8ffd1] backdrop-blur-md transition hover:border-[#5cff95]/60 hover:text-[#5cff95]"
                    >
                      {link.kind === "github" ? (
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5 fill-current"
                        >
                          <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5C0 17.81 3.44 22.31 8.21 23.9C8.81 24.01 9.03 23.64 9.03 23.32C9.03 23.03 9.02 22.06 9.01 20.97C5.67 21.7 4.97 19.36 4.97 19.36C4.42 17.96 3.63 17.59 3.63 17.59C2.55 16.85 3.72 16.87 3.72 16.87C4.92 16.95 5.55 18.11 5.55 18.11C6.61 19.93 8.34 19.4 9.05 19.09C9.16 18.32 9.46 17.79 9.79 17.49C7.12 17.19 4.31 16.15 4.31 11.52C4.31 10.2 4.78 9.12 5.56 8.27C5.44 7.96 5.02 6.7 5.68 5C5.68 5 6.69 4.68 8.99 6.24C9.95 5.97 10.98 5.84 12 5.84C13.02 5.84 14.05 5.97 15.01 6.24C17.31 4.68 18.32 5 18.32 5C18.98 6.7 18.56 7.96 18.44 8.27C19.22 9.12 19.69 10.2 19.69 11.52C19.69 16.16 16.87 17.18 14.19 17.48C14.61 17.84 14.99 18.55 14.99 19.64C14.99 21.2 14.98 22.86 14.98 23.32C14.98 23.64 15.2 24.02 15.81 23.9C20.56 22.31 24 17.81 24 12.5C24 5.87 18.63 0.5 12 0.5Z" />
                        </svg>
                      ) : (
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5 fill-none stroke-current"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 5.5H20V18.5H4z" />
                          <path d="M8 20H16" />
                          <path d="M12 18.5V20" />
                        </svg>
                      )}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className={`absolute inset-0 w-full h-full ${project.objectFit} transition-transform duration-500 group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,7,0.1),rgba(4,10,7,0.72))] group-hover:bg-[linear-gradient(180deg,rgba(4,10,7,0.02),rgba(4,10,7,0.5))] transition-colors" />
                <div className="absolute right-4 top-4 text-xs font-display font-bold text-[#7dffb2] opacity-0 transition-opacity group-hover:opacity-100">
                  {project.title}
                </div>
              </motion.div>

              {/* Card Content */}
              <div className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(10,20,15,0.96),rgba(6,12,9,0.96))] p-8">
                <div className="absolute left-4 top-4 text-4xl font-display font-bold text-emerald-100/10 transition-colors group-hover:text-[#5cff95]/20">
                  {project.id}
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-3 uppercase tracking-wide pt-4">
                  {project.title}
                </h3>

                <p className="text-foreground/70 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="border border-emerald-400/15 px-3 py-1 text-xs text-foreground/70 transition-colors hover:border-[#5cff95] hover:text-[#7dffb2]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Link */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-widest text-[#7dffb2]"
                >
                  <span>VIEW</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
