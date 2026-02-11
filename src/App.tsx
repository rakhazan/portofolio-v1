import { useState } from "react";
import { BackgroundEffects } from "./components/BackgroundEffects";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans selection:bg-accent/30 selection:text-white relative">
        <BackgroundEffects />

        <div className="relative z-10">
          <Navbar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />

          <Hero />
          <About />
          <Projects />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
