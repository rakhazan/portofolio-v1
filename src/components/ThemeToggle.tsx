import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon02Icon, PaintBrush01Icon, StarsIcon } from "hugeicons-react";
import { useTheme } from "../context/ThemeContext";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case "navy":
        return <PaintBrush01Icon size={20} strokeWidth={2} />;
      case "purple":
        return <StarsIcon size={20} strokeWidth={2} />;
      case "slate":
        return <Moon02Icon size={20} strokeWidth={2} />;
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative p-2 rounded-full transition-all duration-300",
        "bg-white/5 hover:bg-white/10 border border-white/10",
        "group flex items-center justify-center overflow-hidden w-10 h-10",
      )}
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: 20, opacity: 0, rotate: 45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -20, opacity: 0, rotate: -45 }}
          transition={{ duration: 0.3, ease: "backOut" }}
          className="flex items-center justify-center text-accent"
        >
          {getIcon()}
        </motion.div>
      </AnimatePresence>

      {/* Ripple Effect Background */}
      <motion.div
        className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"
        layoutId="toggle-ripple"
      />
    </button>
  );
};
