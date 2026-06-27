"use client";

const Footer = () => {
  return (
    <footer className="bg-[#07110c] border-t w-full" style={{borderColor: 'rgba(92,255,149,0.15)'}}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-8">
        <div className="font-display-xl text-headline-md font-normal text-primary uppercase">
          Priyapta HUB
        </div>

        <div className="flex flex-wrap gap-8 font-label-md text-label-md uppercase tracking-widest">
          <a
            href="https://github.com/Priyapta"
            target="_blank"
            rel="noreferrer"
            className="text-on-surface-variant hover:text-primary transition-all duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/priyaptanaufal/"
            target="_blank"
            rel="noreferrer"
            className="text-on-surface-variant hover:text-primary transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:priaptanaufal@gmail.com"
            className="text-on-surface-variant hover:text-primary transition-all duration-300"
          >
            Email
          </a>
        </div>

        <div className="font-caption text-caption text-on-surface-variant uppercase tracking-widest">
          © Priyapta Naufal Sudrajat.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
