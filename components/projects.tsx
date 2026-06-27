"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProjectLink {
  url: string;
  label: string;
  kind: "github" | "demo";
}

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  objectClass?: string;
  featured?: boolean;
  year: string;
  links: ProjectLink[];
}

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current shrink-0" aria-hidden="true">
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.31 3.44 9.81 8.21 11.4.6.11.82-.26.82-.58 0-.28-.01-1.02-.01-2.01-3.34.72-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.48 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.7.82.58C20.56 22.31 24 17.81 24 12.5 24 5.87 18.63.5 12 .5Z" />
  </svg>
);

const projects: Project[] = [
  {
    id: "01",
    title: "Robot Simulation",
    description: "Simulation system using ROS 2 for autonomous humanoid robot behavior testing and control.",
    tech: ["ROS 2", "Python", "Linux", "C++"],
    image: "/project/project_robot.jpeg",
    featured: true,
    year: "2024",
    links: [{ url: "https://github.com/Gladiatos-Programming/Simulasi-Gazebo-Darnet", label: "GitHub", kind: "github" }],
  },
  {
    id: "02",
    title: "Medicine App",
    description: "Flutter mobile app to help users find nearby pharmacies and medicines.",
    tech: ["Flutter", "JavaScript", "Python", "Django"],
    image: "/project/project_sobat.png",
    featured: false,
    year: "2024",
    links: [{ url: "https://github.com/PBP24-D10/sobat_mobile", label: "GitHub", kind: "github" }],
  },
  {
    id: "03",
    title: "JalaLink",
    description: "IoT LoRa mesh communication device for fishermen at sea.",
    tech: ["React", "PostgreSQL", "LoRa", "C++"],
    image: "/project/project_gemastik.png",
    featured: true,
    year: "Jun–Sept 2025",
    links: [{ url: "https://github.com/orgs/PACILGEMAS/repositories", label: "GitHub", kind: "github" }],
  },
  {
    id: "04",
    title: "CARLOK & SiRuang",
    description: "Integrated room search and booking system for Fasilkom UI.",
    tech: ["Django", "Next.js", "PostgreSQL", "Docker"],
    image: "/project/project_carlok.png",
    objectClass: "object-contain p-4",
    featured: true,
    year: "2024",
    links: [
      { url: "https://siruang.ppl.cs.ui.ac.id/", label: "SiRuang", kind: "demo" },
      { url: "https://carlok.ppl.cs.ui.ac.id/", label: "CARLOK", kind: "demo" },
    ],
  },
  {
    id: "05",
    title: "Ruang Terang",
    description: "Website for a non-profit focused on skill development and charity events.",
    tech: ["Next.js", "PostgreSQL", "Google Analytics"],
    image: "/project/ruang-terang.png",
    featured: false,
    year: "2024",
    links: [{ url: "https://ruang-terang.com/", label: "Live Demo", kind: "demo" }],
  },
];

const BORDER = { borderColor: "rgba(92,255,149,0.15)" };

/* ── Featured Work card (vertical / flex-col) ───── */
const FeaturedCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 48 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.08 }}
    transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    className="flex flex-col group border rounded-2xl overflow-hidden"
    style={BORDER}
  >
    {/* Image on top */}
    <div className="aspect-[16/10] relative p-4" style={{ backgroundColor: "#0d1913" }}>
      <div className="relative w-full h-full overflow-hidden rounded-xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`transition-transform duration-700 group-hover:scale-105 ${project.objectClass ?? "object-cover"}`}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
    </div>

    {/* Content below */}
    <div className="flex flex-col gap-5 p-8 flex-1">
      <div className="flex items-center justify-between">
        <span className="font-label-md text-label-md text-[#5cff95] uppercase tracking-widest">{project.id}</span>
        <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">{project.year}</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-primary group-hover:text-[#7dffb2] transition-colors duration-200">
        {project.title}
      </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">{project.description}</p>
      <div className="flex flex-wrap gap-2 pt-1">
        {project.tech.map((tag) => (
          <span key={tag} className="font-label-md text-caption px-2.5 py-1 border text-on-surface-variant" style={BORDER}>
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 pt-4 mt-auto border-t" style={BORDER}>
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-label-md text-label-md uppercase tracking-widest text-[#7dffb2] hover:text-[#5cff95] transition-colors duration-200"
          >
            {link.kind === "github" ? <GitHubIcon /> : <ExternalLink size={12} strokeWidth={1.8} />}
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </motion.article>
);

/* ── Table row ──────────────────────────────────── */
const TableRow = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -16 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    className="grid grid-cols-[2rem_1fr_auto] md:grid-cols-[2rem_1fr_1fr_auto] gap-4 md:gap-8 items-center px-6 py-5 border-b group hover:bg-[#5cff95]/[0.03] transition-colors duration-200 cursor-default"
    style={BORDER}
  >
    {/* # */}
    <span className="font-label-md text-label-md text-[#5cff95] uppercase tracking-widest">
      {project.id}
    </span>

    {/* Title + desc */}
    <div className="min-w-0">
      <div className="font-headline-md text-headline-md text-primary group-hover:text-[#7dffb2] transition-colors duration-200 truncate">
        {project.title}
      </div>
      <div className="font-body-md text-body-md text-on-surface-variant mt-0.5 hidden md:block line-clamp-1">
        {project.description}
      </div>
    </div>

    {/* Stack — hidden on mobile */}
    <div className="hidden md:flex flex-nowrap gap-2 items-center py-1 overflow-hidden">
      {project.tech.slice(0, 3).map((tag) => (
        <span
          key={tag}
          className="font-label-md text-caption px-3 py-1.5 border text-on-surface-variant whitespace-nowrap shrink-0"
          style={BORDER}
        >
          {tag}
        </span>
      ))}
      {project.tech.length > 3 && (
        <span
          className="font-label-md text-caption px-2.5 py-1.5 text-on-surface-variant whitespace-nowrap shrink-0"
          style={{ color: "rgba(127,162,142,0.7)" }}
        >
          +{project.tech.length - 3}
        </span>
      )}
    </div>

    {/* Links */}
    <div className="flex gap-3 items-center justify-end shrink-0">
      {project.links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          title={link.label}
          className="text-on-surface-variant hover:text-[#5cff95] transition-colors duration-200"
        >
          {link.kind === "github" ? (
            <GitHubIcon />
          ) : (
            <ExternalLink size={14} strokeWidth={1.8} />
          )}
        </a>
      ))}
    </div>
  </motion.div>
);

/* ── Main component ─────────────────────────────── */
const Projects = () => {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* ── Featured Work ── */}
      <section className="w-full border-t" style={BORDER}>
        <div className="py-section-gap md:py-section-gap-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20"
          >
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-[#5cff95] tracking-tight">
              Featured Work
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((project, i) => (
              <FeaturedCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Selected Work — table ── */}
      <section id="work" className="w-full border-t" style={BORDER}>
        <div className="py-section-gap md:py-section-gap-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-[#5cff95] tracking-tight">
              Selected Work
            </h2>
          </motion.div>

          {/* Table wrapper */}
          <div className="border rounded-xl overflow-hidden" style={BORDER}>
            {/* Table header */}
            <div
              className="grid grid-cols-[2rem_1fr_auto] md:grid-cols-[2rem_1fr_1fr_auto] gap-4 md:gap-8 px-6 py-4 border-b"
              style={{ ...BORDER, backgroundColor: "rgba(92,255,149,0.04)" }}
            >
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">#</span>
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Project</span>
              <span className="hidden md:block font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Stack</span>
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest text-right">Links</span>
            </div>

            {/* Table rows */}
            {projects.map((project, i) => (
              <TableRow key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
