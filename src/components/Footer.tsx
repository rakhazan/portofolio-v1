import { Mail01Icon } from "hugeicons-react";
import { cn } from "../lib/utils";

const SECTION_PADDING = "px-6 py-20 md:px-20 lg:px-40";

export const Footer = () => {
  return (
    <footer className={cn(SECTION_PADDING, "border-t border-white/5 bg-black")}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Let's <span className="accent-gradient">Connect</span>.
          </h2>
          <p className="text-white/40 text-lg mb-8 max-w-md">
            Open for collaboration on innovative backend systems and immersive
            digital experiences.
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:contact@rakha.dev"
              className="flex items-center gap-3 px-6 py-3 glass-card hover:bg-white/5 transition-all rounded-xl"
            >
              <Mail01Icon className="text-accent" /> contact@rakha.dev
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right">
          <div className="text-xs text-white/20 font-bold uppercase tracking-[0.3em] mb-2">
            Social Hub
          </div>
          <div className="flex gap-4">
            {["Github", "Linkedin", "Layers"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm font-medium text-white/40 hover:text-white transition-colors uppercase tracking-widest"
              >
                {social}
              </a>
            ))}
          </div>
          <p className="text-white/20 text-xs mt-12 font-medium">
            © 2026 Rakha Zahran. Crafted for high performance.
          </p>
        </div>
      </div>
    </footer>
  );
};
