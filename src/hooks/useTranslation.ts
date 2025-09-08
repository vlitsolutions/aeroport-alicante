'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { getDictionary, Dictionary } from '@/lib/dictionaries';

export function useTranslation(): Dictionary {
  const { locale } = useLanguage();
  return getDictionary(locale);
}