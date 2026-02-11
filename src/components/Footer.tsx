import { Mail01Icon } from "hugeicons-react";
import { cn } from "../lib/utils";
import { useTranslation } from "react-i18next";

const SECTION_PADDING = "px-6 py-20 md:px-20 lg:px-40";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={cn(SECTION_PADDING, "border-t border-white/5 bg-black")}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            {t("footer.title.prefix")}{" "}
            <span className="accent-gradient">
              {t("footer.title.highlight")}
            </span>
            .
          </h2>
          <p className="text-white/40 text-lg mb-8 max-w-md">
            {t("footer.subtitle")}
          </p>
          <div className="flex gap-4">
            <a
              href={`mailto:${t("footer.contact.email")}`}
              className="flex items-center gap-3 px-6 py-3 glass-card hover:bg-white/5 transition-all rounded-xl text-sm md:text-base"
            >
              <Mail01Icon className="text-accent" /> {t("footer.contact.email")}
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right">
          <div className="text-xs text-white/20 font-bold uppercase tracking-[0.3em] mb-2">
            {t("footer.socialHub")}
          </div>
          <div className="flex gap-4">
            {(
              t("footer.contact.links", { returnObjects: true }) as {
                label: string;
                url: string;
              }[]
            ).map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/40 hover:text-white transition-colors uppercase tracking-widest"
              >
                {social.label}
              </a>
            ))}
          </div>
          <p className="text-white/20 text-xs mt-12 font-medium">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};
