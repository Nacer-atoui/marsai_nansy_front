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
    ns: ['common', 'translation'],
    defaultNS: 'translation',
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    backend: {
      loadPath: (lngs: string | string[], namespaces: string | string[]) => {
        const langRaw = Array.isArray(lngs) ? lngs[0] : lngs;
        const ns = Array.isArray(namespaces) ? namespaces[0] : namespaces;
        const lang = langRaw.split('-')[0]; // Transforme fr-FR en fr

        if (ns === 'common') return `/locales/${lang}/common.json`;
        return `http://localhost:3000/api/translations/${lang}`;
      },
    },
  });

export default i18n;