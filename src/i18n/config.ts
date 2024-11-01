import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import formatters from "./formatters";

export const supportedLngs = {
  en: "English",
  ar: "Arabic (العربية)",
};

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    debug: true,
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    supportedLngs: Object.keys(supportedLngs),
    interpolation: {
      escapeValue: false,
    },
  });

Object.entries(formatters).forEach(([key, resolver]) => {
  i18next.services.formatter?.add(key, resolver);
});

export default i18next;
