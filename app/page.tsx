"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
      <main className="overflow-x-hidden bg-[#050b08] text-foreground">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </LazyMotion>
  );
}
