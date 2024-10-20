import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from '../../public/locales/en.json';
import esTranslation from '../../public/locales/es.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: enTranslation
      },
      es: {
        translation: esTranslation
      },
    },
    interpolation: {
      escapeValue: false, // React already handles this
    },
  });

export default i18n;
