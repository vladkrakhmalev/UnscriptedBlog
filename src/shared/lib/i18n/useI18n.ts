import { useTranslation } from 'react-i18next'

export const useI18n = () => {
  const { i18n } = useTranslation()

  const toggleLang = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru'
    i18n.changeLanguage(newLang)
    localStorage.setItem('lang', newLang)
  }

  return {
    toggleLang,
  }
}
