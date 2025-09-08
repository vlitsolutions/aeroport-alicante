'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Locale, defaultLocale, getLocaleFromQuery, setLocaleInQuery } from '@/lib/i18n';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const currentLocale = getLocaleFromQuery(searchParams);
    setLocaleState(currentLocale);
  }, [searchParams]);

  const setLocale = (newLocale: Locale) => {
    const newParams = setLocaleInQuery(searchParams, newLocale);
    const newUrl = `${pathname}?${newParams.toString()}`;
    router.replace(newUrl);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}