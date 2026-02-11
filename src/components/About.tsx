import { motion } from "framer-motion";
import {
  CodeIcon,
  Location01Icon,
  UserIcon,
  Briefcase02Icon,
} from "hugeicons-react";
import { cn } from "../lib/utils";
import profile from "../assets/profile.png";

const SECTION_PADDING = "px-6 py-24 md:px-20 lg:px-40";

export const About = () => {
  return (
    <section id="about" className={cn(SECTION_PADDING, "bg-white/2 relative")}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Column: Biography */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-12 h-[1px] bg-accent"></span>
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold">
              Meet the Architect
            </span>
          </div>
          <h2 className="text-5xl font-bold mb-6 tracking-tight leading-[1.1]">
            Rakha Zahran <br />
            <span className="text-accent">Nurfirmansyah</span>.
          </h2>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-white/60 bg-white/5 py-1.5 px-3 rounded-full border border-white/5">
              <UserIcon size={16} />
              <span className="text-sm">23 Years Old</span>
            </div>
            <div className="flex items-center gap-2 text-white/60 bg-white/5 py-1.5 px-3 rounded-full border border-white/5">
              <Location01Icon size={16} />
              <span className="text-sm">Jakarta, Indonesia</span>
            </div>
          </div>

          <p className="text-white/70 text-lg mb-8 leading-relaxed max-w-xl">
            I am a passionate{" "}
            <strong className="accent-gradient bg-clip-text text-transparent">
              Fullstack Developer
            </strong>{" "}
            with a strong foundation in Informatics Engineering. I dedicate my
            career to mastering the art of building{" "}
            <span className="text-accent underline underline-offset-8 decoration-accent/30">
              scalable, high-performance
            </span>{" "}
            web applications and robust backend systems.
          </p>

          <p className="text-white/50 text-base mb-10 leading-relaxed max-w-xl">
            Whether it's crafting immersive{" "}
            <span className="text-accent italic font-semibold">
              frontend experiences
            </span>{" "}
            or architecting complex systems in{" "}
            <span className="text-accent font-bold">Go</span>, I thrive on
            solving challenging problems that bridge the gap between user needs
            and technical possibility.
          </p>

          <div className="grid grid-cols-2 gap-6 max-w-md">
            <div className="glass-card p-6 border-l-4 border-l-accent group hover:bg-white/5 transition-all">
              <h3 className="text-3xl font-bold mb-1 group-hover:text-accent transition-colors">
                5+
              </h3>
              <p className="text-xs text-white/40 uppercase tracking-widest font-semibold">
                Years of Coding
              </p>
            </div>
            <div className="glass-card p-6 border-l-4 border-l-accent group hover:bg-white/5 transition-all">
              <h3 className="text-3xl font-bold mb-1 group-hover:text-accent transition-colors">
                10+
              </h3>
              <p className="text-xs text-white/40 uppercase tracking-widest font-semibold">
                Projects Delivered
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Visual & Tech */}
        <div className="space-y-12">
          {/* Profile Photo Container with 3D Interaction */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto lg:mx-0 w-full max-w-[420px]"
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full opacity-40 -z-10 animate-pulse"></div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative p-6 glass-card border-white/10 overflow-visible group"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out z-10" />

                {/* Main Photo */}
                <img
                  src={profile}
                  alt="Rakha Zahran Nurfirmansyah"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/src/assets/profile-placeholder.png";
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80" />

                {/* Photo ID Info */}
                <div className="absolute bottom-8 left-8 right-8 text-left z-20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-8 h-[2px] bg-accent"></span>
                    <span className="text-[10px] text-accent font-bold uppercase tracking-[0.4em]">
                      Authentic Identity
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white tracking-tight">
                    Software Architect
                  </h4>
                  <p className="text-white/40 text-xs font-mono mt-1 uppercase tracking-widest">
                    ID: RZN-2003
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 p-4 glass-card border-accent/20 bg-accent/10 backdrop-blur-xl rounded-2xl -rotate-6 group-hover:rotate-3 transition-transform duration-500 z-30">
                <Briefcase02Icon className="text-accent" size={28} />
              </div>

              <div className="absolute -bottom-4 -left-4 px-6 py-3 glass-card border-white/10 bg-white/5 backdrop-blur-xl rounded-xl rotate-3 group-hover:-rotate-3 transition-transform duration-500 z-30">
                <span className="text-[10px] font-bold text-white/60 tracking-[0.2em] uppercase">
                  Available for Work
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 border border-white/5"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <CodeIcon className="text-accent" /> Professional Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {[
                "Golang",
                "Fiber/GORM",
                "React/Next.js",
                "TypeScript",
                "Three.js",
                "Framer Motion",
                "MySQL",
                "Clean Architecture",
                "JWT",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/5 rounded-lg text-sm font-medium border border-white/5 transition-all hover:bg-accent/20 hover:border-accent/40 hover:-translate-y-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
