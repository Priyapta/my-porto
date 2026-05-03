"use client";

import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/Priyapta",
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4 fill-current"
        >
          <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5C0 17.81 3.44 22.31 8.21 23.9C8.81 24.01 9.03 23.64 9.03 23.32C9.03 23.03 9.02 22.06 9.01 20.97C5.67 21.7 4.97 19.36 4.97 19.36C4.42 17.96 3.63 17.59 3.63 17.59C2.55 16.85 3.72 16.87 3.72 16.87C4.92 16.95 5.55 18.11 5.55 18.11C6.61 19.93 8.34 19.4 9.05 19.09C9.16 18.32 9.46 17.79 9.79 17.49C7.12 17.19 4.31 16.15 4.31 11.52C4.31 10.2 4.78 9.12 5.56 8.27C5.44 7.96 5.02 6.7 5.68 5C5.68 5 6.69 4.68 8.99 6.24C9.95 5.97 10.98 5.84 12 5.84C13.02 5.84 14.05 5.97 15.01 6.24C17.31 4.68 18.32 5 18.32 5C18.98 6.7 18.56 7.96 18.44 8.27C19.22 9.12 19.69 10.2 19.69 11.52C19.69 16.16 16.87 17.18 14.19 17.48C14.61 17.84 14.99 18.55 14.99 19.64C14.99 21.2 14.98 22.86 14.98 23.32C14.98 23.64 15.2 24.02 15.81 23.9C20.56 22.31 24 17.81 24 12.5C24 5.87 18.63 0.5 12 0.5Z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/priyaptanaufal/",
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4 fill-current"
        >
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.48 6C1.09 6 0 4.88 0 3.5C0 2.12 1.1 1 2.48 1C3.88 1 4.98 2.12 4.98 3.5ZM.2 8.2H4.77V23.5H.2V8.2ZM8.36 8.2H12.74V10.3H12.8C13.41 9.16 14.91 7.86 17.16 7.86C21.4 7.86 22.2 10.66 22.2 14.3V23.5H17.64V15.37C17.64 13.43 17.6 10.95 14.93 10.95C12.22 10.95 11.79 13.07 11.79 15.22V23.5H7.22V8.2H8.36Z" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: "mailto:priaptanaufal@gmail.com",
      icon: (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4 fill-none stroke-current"
          strokeWidth="1.8"
        >
          <path d="M4 6.5H20V17.5H4Z" />
          <path d="M4.5 7L12 13L19.5 7" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="border-t border-emerald-400/15 bg-[linear-gradient(180deg,rgba(7,17,12,0.96),rgba(4,8,6,0.98))]">
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1.15fr)_auto] md:items-start md:gap-12"
        >
          {/* Branding */}
          <div className="max-w-sm">
            <h3 className="text-xs uppercase tracking-widest text-accent font-display font-bold mb-4">
              Follow Me
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Developer passionate about building scalable web systems and
              intelligent robotics solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="md:justify-self-start">
            <h4 className="text-xs uppercase tracking-widest text-foreground font-display font-bold mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label === "Email" ? undefined : "_blank"}
                  rel={social.label === "Email" ? undefined : "noreferrer"}
                  className="inline-flex w-fit items-center gap-3 rounded-full border border-emerald-400/15 bg-white/5 px-4 py-2 text-sm text-foreground/80 transition hover:border-[#5cff95]/50 hover:text-[#7dffb2]"
                >
                  {social.icon}
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mb-8 border-t border-emerald-400/15" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center text-xs uppercase tracking-widest text-foreground/50"
        >
          <div>© {currentYear} Priyapta Naufal Sudrajat.</div>
          {/* <div>Designed & Built with React & Tailwind</div> */}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
