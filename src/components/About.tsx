import { motion } from "framer-motion";
import {
  Calendar03Icon,
  Location01Icon,
  Briefcase02Icon,
  CodeIcon,
} from "hugeicons-react";
import { cn } from "../lib/utils";
import profile from "../assets/profile.png";
import { useTranslation } from "react-i18next";

const SECTION_PADDING = "px-6 py-24 md:px-20 lg:px-40";

export const About = () => {
  const { t } = useTranslation(); // Added useTranslation hook

  return (
    <section
      id="about"
      className={cn(SECTION_PADDING, "relative bg-slate-950")}
    >
      {" "}
      {/* Updated class */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {" "}
        {/* Updated gap and alignment */}
        {/* Left Column: Story */} {/* Updated comment */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8" // Added space-y-8
        >
          <div>
            {" "}
            {/* New wrapper div */}
            <span className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-3 block">
              {" "}
              {/* Updated structure and classes */}
              {t("about.subtitle")} {/* Translated */}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              {" "}
              {/* Updated classes */}
              Rakha Zahran Nurfirmansyah<span className="text-accent">
                .
              </span>{" "}
              {/* Updated text */}
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {" "}
            {/* Updated classes */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/5 text-sm text-white/60">
              {" "}
              {/* Updated classes */}
              <Calendar03Icon size={16} className="text-accent" />{" "}
              {t("about.age")} {/* Added icon and translated */}
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/5 text-sm text-white/60">
              {" "}
              {/* Updated classes */}
              <Location01Icon size={16} className="text-accent" />{" "}
              {t("about.location")} {/* Added icon and translated */}
            </div>
          </div>
          <div className="space-y-6 text-lg text-white/50 leading-relaxed font-light">
            {" "}
            {/* Updated classes */}
            <p>{t("about.bio1")}</p> {/* Translated */}
            <p>{t("about.bio2")}</p> {/* Translated */}
          </div>
          {/* Stats Bento */} {/* New comment */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {" "}
            {/* Updated classes */}
            <div className="p-6 glass-card border-white/5">
              {" "}
              {/* Updated classes */}
              <span className="text-3xl font-bold text-white block mb-1">
                5+
              </span>
              <span className="text-xs text-white/40 uppercase tracking-widest leading-relaxed">
                {t("about.stats.coding")} {/* Translated */}
              </span>
            </div>
            <div className="p-6 glass-card border-white/5">
              {" "}
              {/* Updated classes */}
              <span className="text-3xl font-bold text-white block mb-1">
                50+
              </span>
              <span className="text-xs text-white/40 uppercase tracking-widest leading-relaxed">
                {t("about.stats.projects")} {/* Translated */}
              </span>
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
            className="relative mx-auto lg:mx-0 w-full max-w-[420px]" // Updated class
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
                      {t("about.photo.identity")} {/* Translated */}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white tracking-tight">
                    {t("about.photo.role")} {/* Translated */}
                  </h4>
                  <p className="text-white/40 text-xs font-mono mt-1 uppercase tracking-widest">
                    ID: RZN-2002
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 p-4 glass-card border-accent/20 bg-accent/10 backdrop-blur-xl rounded-2xl -rotate-6 group-hover:rotate-3 transition-transform duration-500 z-30">
                <Briefcase02Icon className="text-accent" size={28} />
              </div>

              <div className="absolute -bottom-4 -left-4 px-6 py-3 glass-card border-white/10 bg-white/5 backdrop-blur-xl rounded-xl rotate-3 group-hover:-rotate-3 transition-transform duration-500 z-30">
                <span className="text-[10px] font-bold text-white/60 tracking-[0.2em] uppercase">
                  {t("about.photo.badge")} {/* Translated */}
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
                "TypeScript",
                "React/Next.js",
                "Express.js",
                "Golang",
                "Fiber/GORM",
                "PHP",
                "Laravel",
                "MySQL/PostgreSQL",
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
