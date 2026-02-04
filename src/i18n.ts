import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Les traductions
const resources = {
  en: {
    translation: {
      welcome: 'Welcome to React',
      poop: 'poop',
      jury: 'jury page',
    },
  },
  fr: {
    translation: {
      welcome: 'Bienvenue sur React',
      poop: 'caca',
      jury: 'page du jury',
    },
  },
};

i18n
  .use(initReactI18next) // passe i18n à react-i18next
  .init({
    resources,
    lng: 'fr', // langue par défaut
    interpolation: {
      escapeValue: false, // react protège déjà contre les attaques XSS
    },
  });

export default i18n;
