export const locales = ['es', 'en', 'de'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'es';

export function getLocaleFromQuery(searchParams: URLSearchParams): Locale {
  const lg = searchParams.get('lg') as Locale;
  return locales.includes(lg) ? lg : defaultLocale;
}

export function setLocaleInQuery(searchParams: URLSearchParams, locale: Locale): URLSearchParams {
  const newParams = new URLSearchParams(searchParams);
  if (locale === defaultLocale) {
    newParams.delete('lg');
  } else {
    newParams.set('lg', locale);
  }
  return newParams;
}