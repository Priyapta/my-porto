import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import About from "@/components/about";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ScrollMotionController from "@/components/scroll-motion-controller";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#050b08] text-foreground min-h-screen">
      <ScrollMotionController />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
