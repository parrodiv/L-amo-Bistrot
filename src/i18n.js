import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import HttpApi from 'i18next-http-backend'



i18n
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(HttpApi)
  .use(initReactI18next)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector

  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'it',
    detection: {
      order: ['cookie', 'path', 'localStorage', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/translation/{{lng}}/translation.json',
    },
    react: { useSuspense: false },
  })

export default i18n
