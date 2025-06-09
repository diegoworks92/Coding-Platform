import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

const savedLanguage = localStorage.getItem("language") || "en"; // Recupera el idioma guardado

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: savedLanguage, // Usa el idioma guardado
    fallbackLng: "en",
    debug: import.meta.env.DEV,
    interpolation: { escapeValue: false },
    backend: { loadPath: "/locales/{{lng}}.json" },
  });

export default i18n;
