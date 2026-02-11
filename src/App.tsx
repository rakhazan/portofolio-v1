import { useState, useEffect } from "react";
import { BackgroundEffects } from "./components/BackgroundEffects";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Update Document Title
    document.title = t("common.seo.title");

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", t("common.seo.description"));
    }

    // Update OG/Twitter Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", t("common.seo.title"));

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", t("common.seo.description"));

    const twitterTitle = document.querySelector(
      'meta[property="twitter:title"]',
    );
    if (twitterTitle)
      twitterTitle.setAttribute("content", t("common.seo.title"));

    const twitterDesc = document.querySelector(
      'meta[property="twitter:description"]',
    );
    if (twitterDesc)
      twitterDesc.setAttribute("content", t("common.seo.description"));

    // Update HTML Lang Attribute
    document.documentElement.lang = i18n.language;
  }, [t, i18n.language]);

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
