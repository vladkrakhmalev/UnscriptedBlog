import i18n from "./i18n";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    lng: 'ru',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: {
          'TEST': 'TEST'
        }
      },
      ru: {
        translation: {
          'TEST': 'TEST'
        }
      }
    }
  })

export default i18n