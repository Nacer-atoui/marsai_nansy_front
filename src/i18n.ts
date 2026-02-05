import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 1. On importe les fichiers JSON qu'on vient de remplir
import fr from './locales/fr/translation.json';
import en from './locales/en/translation.json';

const resources = {
  fr: {
    translation: fr  // On branche le fichier FR
  },
  en: {
    translation: en  // On branche le fichier EN
  }
};

i18n
  .use(LanguageDetector) // Pour détecter la langue du navigateur
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr', // Langue de secours
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;