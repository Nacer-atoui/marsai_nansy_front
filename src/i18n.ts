import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr-FR',
    ns: ['common', 'translation'],
    defaultNS: 'translation', // 'translation' reste le défaut pour les pages
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    backend: {
      loadPath: (lngs: string[], namespaces: string[]) => {
        const lang = lngs[0];
        const ns = namespaces[0];

        // LOGIQUE : common = public/locales, le reste = Express
        if (ns === 'common') {
          return `/locales/${lang}/common.json`;
        }
        console.log(lang)
        return `http://localhost:3000/api/translations/${lang}`;
      },
    },
  });

export default i18n;