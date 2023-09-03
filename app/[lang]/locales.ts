import 'server-only'
export type LangType = 'vi' | 'en'
const locales = {
  en: () => import('@/locales/en.json').then((module) => module.default),
  vi: () => import('@/locales/vi.json').then((module) => module.default)
}

export const getDictionary = async (locale: keyof typeof locales) => locales[locale]()
