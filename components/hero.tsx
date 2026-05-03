"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
const Hero = () => {
  const fullName = "Priyapta Naufal Sudrajat";
  const role = "Developer";
  const [displayText, setDisplayText] = useState(fullName);

  useEffect(() => {
    let index = 0;
    setDisplayText("");
    const interval = setInterval(() => {
      if (index < fullName.length) {
        setDisplayText(fullName.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const blobVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(92,255,149,0.16),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(0,255,65,0.12),_transparent_22%),linear-gradient(180deg,_#07110c_0%,_#040806_100%)] pt-16">
      {/* Background Grid SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="grid"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke="#00FF41"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="1000" height="1000" fill="url(#grid)" />
      </svg>

      {/* Animated Blobs */}
      <motion.div
        variants={blobVariants}
        animate="animate"
        className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#5cff95] blur-3xl opacity-20"
      />
      <motion.div
        variants={blobVariants}
        animate="animate"
        transition={{ delay: 2 }}
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#34d399] blur-3xl opacity-20"
      />
      <motion.div
        variants={blobVariants}
        animate="animate"
        transition={{ delay: 4 }}
        className="absolute left-1/2 top-1/2 h-72 w-72 rounded-full bg-[#00ff41] blur-3xl opacity-15"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 px-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 text-5xl font-display font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
              {displayText}
              <span className="animate-pulse text-accent">|</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 flex items-center justify-center gap-2 lg:justify-start"
          >
            <span className="text-xl text-foreground md:text-2xl">{role}</span>
            <span className="animate-pulse text-accent">●</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href="#project"
              className="bg-[#5cff95] px-8 py-3 text-center font-display text-sm font-bold tracking-widest text-[#04110a] shadow-[0_0_30px_rgba(92,255,149,0.22)] transition-opacity hover:opacity-90"
            >
              VIEW WORK
            </a>
            <a
              href="#contact"
              className="border border-emerald-300/40 bg-emerald-400/5 px-8 py-3 text-center font-display text-sm font-bold tracking-widest text-[#7dffb2] transition-colors hover:bg-emerald-400/10"
            >
              CONTACT
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative mx-auto flex items-center justify-center group cursor-pointer"
        >
          {/* Blur Background Effect */}
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full blur-3xl opacity-30 bg-accent group-hover:opacity-50 transition-opacity duration-500" />
          </div>

          {/* Profile Container */}
          <div className="flex shrink-0 overflow-hidden rounded-full relative w-64 h-64 md:w-80 md:h-80 border-4 border-accent/20 transition-all duration-500 ease-out group-hover:scale-105 group-hover:border-accent/40 group-hover:shadow-[0_0_40px_rgba(92,255,149,0.3)]">
            <div className="absolute inset-0 blur-xl">
              <Image
                src="/project/profiles.png"
                alt=""
                aria-hidden="true"
                fill
                sizes="(max-width: 1024px) 100vw, 320px"
                className="object-cover scale-110"
              />
            </div>

            <Image
              src="/project/profiles.png"
              alt="Foto profil Priyapta"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 320px"
              className="object-cover relative z-10 transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-6 h-6 text-accent" />
      </motion.div>
    </section>
  );
};

export default Hero;
