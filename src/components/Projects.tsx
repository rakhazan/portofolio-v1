import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  CodeIcon,
  UserAccountIcon,
  Cursor01Icon,
  ArrowRight01Icon,
  Cancel01Icon,
} from "hugeicons-react";
import { useTranslation } from "react-i18next";

const SECTION_PADDING = "px-6 py-20 md:px-20 lg:px-40";

interface Project {
  id: string;
  icon: React.ReactNode;
  tech: string[];
}

const PROJECTS_DATA: Project[] = [
  { id: "solla", icon: <CodeIcon size={32} />, tech: ["Go", "Fiber", "MySQL"] },
  {
    id: "skallr",
    icon: <UserAccountIcon size={32} />,
    tech: ["Go", "JWT", "Postman"],
  },
  {
    id: "building",
    icon: <Cursor01Icon size={32} />,
    tech: ["React", "Three.js", "Motion"],
  },
  {
    id: "iot",
    icon: <CodeIcon size={32} />,
    tech: ["Go", "Next.js", "Prisma"],
  },
];

export const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );
  const { t } = useTranslation();

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (selectedProjectId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProjectId]);

  const selectedProject = selectedProjectId
    ? {
        ...PROJECTS_DATA.find((p) => p.id === selectedProjectId)!,
        title: t(`projects.items.${selectedProjectId}.title`),
        desc: t(`projects.items.${selectedProjectId}.desc`),
        role: t(`projects.items.${selectedProjectId}.role`),
        deepDive: t(`projects.items.${selectedProjectId}.deepDive`, {
          returnObjects: true,
        }) as string[],
      }
    : null;

  return (
    <section id="projects" className={`${SECTION_PADDING} relative`}>
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          {t("projects.title.prefix")}{" "}
          <span className="text-accent">{t("projects.title.highlight")}</span>.
        </h2>
        <p className="text-white/40 text-lg">{t("projects.subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            onClick={() => setSelectedProjectId(project.id)}
            className="glass-card p-8 group relative cursor-pointer"
          >
            <div className="mb-6 inline-block p-4 bg-white/5 rounded-2xl group-hover:bg-accent/10 transition-colors">
              <div className="text-accent group-hover:scale-110 transition-transform">
                {project.icon}
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3">
              {t(`projects.items.${project.id}.title`)}
            </h3>
            <p className="text-white/50 text-base mb-6 leading-relaxed">
              {t(`projects.items.${project.id}.desc`)}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((techItem) => (
                <span
                  key={techItem}
                  className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-white/5 rounded-md text-white/40 border border-white/5"
                >
                  {techItem}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-white/50 group-hover:text-accent transition-colors">
              {t("projects.viewDetails")} <ArrowRight01Icon size={16} />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 md:p-6 lg:p-12">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProjectId(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Drawer */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "110%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="relative w-full max-w-5xl glass-card bg-[#0a0a0a]/80 border-white/10 rounded-t-3xl md:rounded-3xl p-8 md:p-12 overflow-y-auto max-h-[90vh] shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProjectId(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/60 hover:text-white"
              >
                <Cancel01Icon size={24} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Side: Header & Tech */}
                <div className="lg:col-span-5">
                  <div className="mb-8 inline-block p-6 bg-accent/10 rounded-3xl text-accent">
                    {selectedProject.icon}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="text-white/60 text-lg mb-8 leading-relaxed">
                    {selectedProject.desc}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">
                        {t("projects.drawer.role")}
                      </h4>
                      <p className="text-white/80 font-medium text-lg">
                        {selectedProject.role}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">
                        {t("projects.drawer.tech")}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((techItem) => (
                          <span
                            key={techItem}
                            className="px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-lg text-accent text-sm font-semibold"
                          >
                            {techItem}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Deep-Dive */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="p-8 md:p-10 bg-white/5 border border-white/10 rounded-3xl">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-8 border-b border-white/10 pb-4">
                      {t("projects.drawer.deepDive")}
                    </h4>
                    <ul className="space-y-6">
                      {selectedProject.deepDive.map((point, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + idx * 0.1 }}
                          className="flex gap-4 group"
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2.5 group-hover:scale-150 transition-transform" />
                          <p className="text-white/70 leading-relaxed">
                            {point}
                          </p>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
