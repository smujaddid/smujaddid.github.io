import { defaultLocale, locales, ui, type Locale, type UIKey } from './ui'

/**
 * Resolve the active locale from `Astro.url.pathname`.
 * Anything under `/id/` or exactly `/id` is Indonesian; everything else is English.
 */
export function getLocale(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean)
  const first = segments[0]
  if (first && (locales as readonly string[]).includes(first)) {
    return first as Locale
  }
  return defaultLocale
}

export function t(locale: Locale, key: UIKey, values?: Record<string, string>): string {
  let text: string = ui[locale][key] ?? ui[defaultLocale][key]
  if (values) {
    Object.entries(values).forEach(([k, v]) => {
      text = text.replace(new RegExp(`{${k}}`, 'g'), v)
    })
  }
  return text
}

/**
 * Prefix a path with the locale if needed. Default locale stays at root.
 */
export function localizedPath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`
  if (locale === defaultLocale) return clean
  return `/${locale}${clean === '/' ? '' : clean}`
}

/**
 * Convert a path on the current locale to the equivalent path on the other locale.
 */
export function swapLocalePath(pathname: string, target: Locale): string {
  const current = getLocale(pathname)
  if (current === target) return pathname

  let stripped = pathname
  if (current !== defaultLocale) {
    stripped = pathname.replace(new RegExp(`^/${current}(?=/|$)`), '') || '/'
  }
  if (!stripped.startsWith('/')) stripped = `/${stripped}`

  return target === defaultLocale ? stripped : `/${target}${stripped === '/' ? '' : stripped}`
}
