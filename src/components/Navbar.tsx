import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu01Icon, Cancel01Icon, Globe02Icon } from "hugeicons-react";
import { cn } from "../lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { useTranslation } from "react-i18next";
import { Logo } from "./Logo";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export const Navbar = ({
  activeSection,
  setActiveSection,
  isMenuOpen,
  setIsMenuOpen,
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["home", "about", "projects", "contact"];

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "id" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out flex items-center justify-between",
          isScrolled
            ? "top-6 mx-auto w-[90%] md:w-[60%] lg:w-[50%] px-6 py-4 rounded-full bg-background/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-accent/10"
            : "top-0 w-full px-6 py-8 md:px-20 bg-background/50 backdrop-blur-md border-b border-white/5",
        )}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter cursor-pointer flex items-center gap-3"
          onClick={() => setActiveSection("home")}
        >
          <Logo size={28} className="text-accent" />
        </motion.div>

        <div className="flex items-center gap-4">
          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center mr-4">
            {navLinks.map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={cn(
                  "text-sm font-medium transition-all hover:text-accent relative group",
                  activeSection === item ? "text-accent" : "text-white/60",
                )}
              >
                {t(`nav.${item}`)}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-300",
                    activeSection === item
                      ? "w-full"
                      : "w-0 group-hover:w-full",
                  )}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-white/5 transition-colors text-white/60 hover:text-accent flex items-center gap-1.5"
              title={
                i18n.language === "en"
                  ? "Switch to Bahasa"
                  : "Switch to English"
              }
            >
              <Globe02Icon size={20} />
              <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline">
                {i18n.language.toUpperCase()}
              </span>
            </button>

            <ThemeToggle />

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white flex items-center justify-center p-2 rounded-full hover:bg-white/5 transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu01Icon size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-10 right-10 text-white/40 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Cancel01Icon size={32} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => {
                    setActiveSection(item);
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    "text-5xl md:text-7xl font-bold tracking-tighter transition-all hover:scale-110",
                    activeSection === item
                      ? "text-accent"
                      : "text-white/20 hover:text-white",
                  )}
                >
                  {t(`nav.${item}`)}
                  <span className="text-accent opacity-0 group-hover:opacity-100">
                    .
                  </span>
                </motion.button>
              ))}
            </div>

            <div className="absolute bottom-20 flex gap-8">
              {["Github", "Linkedin", "Email"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 hover:text-accent transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
