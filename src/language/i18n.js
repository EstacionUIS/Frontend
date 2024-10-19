import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: require('./locales/en.json'),
      },
      es: {
        translation: require('./locales/es.json'),
      },
    },
    interpolation: {
      escapeValue: false, // React already handles this
    },
  });

export default i18n;
