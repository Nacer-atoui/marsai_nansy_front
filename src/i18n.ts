import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    interpolation: { escapeValue: false },
    
    // Déclare les deux fichiers ici
    ns: ['translation', 'common'], 
    defaultNS: 'translation',

    backend: {
      // Le {{ns}} permet de charger soit translation.json, soit common.json
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;