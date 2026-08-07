"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function useTypewriter(text: string, speed = 60, startDelay = 300) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval> | undefined;

    const timeout = setTimeout(() => {
      setDisplayed("");
      setDone(false);
      interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}

const Hero = () => {
  const { displayed, done } = useTypewriter(
    "Priyapta Naufal Sudrajat",
    65,
    400,
  );

  return (
    <section
      data-ambient-section
      className="relative overflow-hidden min-h-screen"
    >
      {/* Full-width green gradient */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(92,255,149,0.14),_transparent_38%),radial-gradient(circle_at_80%_20%,_rgba(0,255,65,0.10),_transparent_28%)]" />

      {/* Animated blobs — full viewport */}
      <div
        className="hero-blob absolute -left-20 -top-10 h-96 w-96 rounded-full bg-[#5cff95] blur-3xl opacity-[0.18] pointer-events-none"
      />
      <div
        className="hero-blob hero-blob-delay-1 absolute bottom-0 right-10 h-72 w-72 rounded-full bg-[#34d399] blur-3xl opacity-[0.15] pointer-events-none"
      />
      <div
        className="hero-blob hero-blob-delay-2 absolute left-1/2 top-1/2 h-56 w-56 rounded-full bg-[#00ff41] blur-3xl opacity-[0.10] pointer-events-none"
      />

      {/* Constrained content */}
      <div className="relative z-10 pt-28 md:pt-40 pb-section-gap md:pb-section-gap-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between min-h-screen gap-8 md:gap-12">
        <div
          data-reveal="up"
          className="max-w-2xl flex flex-col flex-1 gap-8"
        >
          <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-primary font-bold tracking-tighter leading-tight">
            <span className="relative inline-block">
              {displayed}
              <span
                className={`inline-block w-[3px] h-[0.85em] bg-[#5cff95] align-middle ml-1 ${done ? "animate-[blink_1s_step-end_infinite]" : ""}`}
                style={{ verticalAlign: "middle" }}
              />
            </span>
            <br />
            <span className="text-on-surface-variant text-display-xl-mobile md:text-headline-lg font-normal">
              Fullstack &amp; AI Engineer
            </span>
          </h1>

          <p className="font-body-lg text-body-lg md:text-[1.25rem] md:leading-relaxed text-on-surface-variant max-w-xl">
            I&apos;m a Computer Science student passionate about backend development,
            system design, and AI-powered applications. I build scalable and
            secure web applications using Spring Boot, Django, Flutter, and
            Next.js, with experience in computer vision, API development, and
            designing reliable software systems
          </p>

          <a
            href="/file/CV_PriyaptaNaufal.pdf"
            download
            className="inline-flex items-center gap-2.5 border px-5 py-3 font-body-md text-body-md uppercase tracking-widest text-[#5cff95] hover:bg-[#5cff95]/10 transition-colors duration-300 w-fit"
            style={{ borderColor: "rgba(92,255,149,0.35)" }}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-none stroke-current shrink-0"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4"
              />
            </svg>
            Download CV
          </a>

          <div
            className="flex gap-8 pt-4"
            style={{ borderTop: "1px solid rgba(92,255,149,0.15)" }}
          >
            <div>
              <div className="font-display-xl text-headline-lg text-[#5cff95]">
                2+
              </div>
              <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
                Years Exp
              </div>
            </div>
            <div>
              <div className="font-display-xl text-headline-lg text-[#5cff95]">
                5+
              </div>
              <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
                Projects
              </div>
            </div>
            <div>
              <div className="font-display-xl text-headline-lg text-[#5cff95]">
                2+
              </div>
              <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
                Organizations
              </div>
            </div>
          </div>
        </div>

        <div
          data-reveal="scale"
          className="reveal-delay-2 relative shrink-0 group cursor-pointer p-3"
        >
          {/* Glow blob */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full blur-3xl opacity-25 bg-accent group-hover:opacity-40 transition-opacity duration-500" />
          </div>

          {/* Corner brackets */}
          <div
            className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2"
            style={{ borderColor: "#5cff95" }}
          />
          <div
            className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2"
            style={{ borderColor: "#5cff95" }}
          />
          <div
            className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2"
            style={{ borderColor: "#5cff95" }}
          />
          <div
            className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2"
            style={{ borderColor: "#5cff95" }}
          />

          {/* Photo */}
          <div className="w-64 h-80 overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(92,255,149,0.2)]">
            <Image
              src="/project/profiles.webp"
              alt="Priyapta Profile"
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              preload
              sizes="256px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
