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
        translation: enTranslation,
        "Logo": enTranslation.TopBar.Logo,
        "Routes": enTranslation.BottomBar.Routes,
        "LanguageSelector": enTranslation.TopBar.LanguageSelector,
        "ThemeSelector": enTranslation.TopBar.ThemeSelector,

        "Home": enTranslation.Home,
        "Home.Station": enTranslation.Home.Station,
        "Home.Functionality": enTranslation.Home.Functionality,
        "Home.Facts": enTranslation.Home.Facts
      },
      es: {
        translation: esTranslation,
        "Logo": esTranslation.TopBar.Logo,
        "Routes": esTranslation.BottomBar.Routes,
        "LanguageSelector": esTranslation.TopBar.LanguageSelector,
        "ThemeSelector": esTranslation.TopBar.ThemeSelector,

        "Home": esTranslation.Home,
        "Home.Station": esTranslation.Home.Station,
        "Home.Functionality": esTranslation.Home.Functionality,
        "Home.Facts": esTranslation.Home.Facts
      },
    },
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
