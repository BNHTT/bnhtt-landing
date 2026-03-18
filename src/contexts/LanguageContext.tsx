import { createContext, useContext, useState } from "react";
import type { Language } from "../i18n/translations";
import { translations } from "../i18n/translations";

interface LanguageContextValue {
  lang: Language;
  t: (typeof translations)[Language];
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const toggle = () => setLang((prev) => (prev === "en" ? "es" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
