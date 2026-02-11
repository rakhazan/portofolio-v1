import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight01Icon, GithubIcon, Linkedin01Icon } from "hugeicons-react";
import { cn } from "../lib/utils";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { HeroVisual } from "./HeroVisual";

const SECTION_PADDING = "px-6 py-20 md:px-20 lg:px-40";

export const Hero = () => {
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();

  interface HeroVariant {
    heading: string;
    subtext: string;
  }

  const HERO_VARIANTS = (
    t("hero.variants", { returnObjects: true }) as HeroVariant[]
  ).map((v, i) => ({
    heading: (
      <>
        {v.heading.split("digital")[0]}
        <span className="accent-gradient font-extrabold">
          {i === 0
            ? "digital reality"
            : i === 1
              ? "digital connection"
              : "digital stories"}
        </span>
        {v.heading.split(
          i === 0 ? "reality" : i === 1 ? "connection" : "stories",
        )[1] || "."}
      </>
    ),
    subtext: v.subtext,
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_VARIANTS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [HERO_VARIANTS.length]);

  const current = HERO_VARIANTS[index];

  return (
    <section
      id="home"
      className={cn(
        SECTION_PADDING,
        "min-h-screen flex flex-col justify-center relative pt-32 overflow-hidden",
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-medium text-accent mb-6 border-accent/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            {t("hero.badge")}
          </div>

          <div className="min-h-[200px] md:min-h-[280px] flex flex-col justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={`heading-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h1 className="text-4xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
                  {current.heading}
                </h1>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`subtext-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <p className="text-lg md:text-xl text-white/50 mb-10 leading-relaxed">
                  {current.subtext}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-semibold rounded-full flex items-center gap-2 transition-all hover:bg-accent hover:text-black shadow-lg shadow-white/5"
            >
              {t("hero.explore")} <ArrowRight01Icon size={20} />
            </motion.button>
            <motion.div className="flex gap-4 items-center px-4">
              <a
                href="https://github.com/rakhazan"
                className="p-3 glass-card hover:bg-white/10 transition-colors rounded-full text-white/60 hover:text-white"
              >
                <GithubIcon size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/rakha-zahran-nurfirmansyah"
                className="p-3 glass-card hover:bg-white/10 transition-colors rounded-full text-white/60 hover:text-white"
              >
                <Linkedin01Icon size={22} />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side Visual Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex items-center justify-center relative h-[500px]"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
};
