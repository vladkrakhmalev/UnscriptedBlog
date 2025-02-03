import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from 'i18next-http-backend';

const lang = localStorage.getItem('lang') || 'ru'

i18n
  .use(initReactI18next)
  .use(HttpBackend)
  .init({
    lng: lang,
    debug: false,
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    }
  });

  export default i18n;