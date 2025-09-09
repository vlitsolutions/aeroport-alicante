'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';

import { useLanguage } from '@/contexts/LanguageContext';
import { locales } from '@/lib/i18n';
import { cn } from '@/lib/utils';

const languageNames = {
  es: '🇪🇸 Español',
  en: '🇬🇧 English',
  de: '🇩🇪 Deutsch'
};

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={cn("relative", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center space-x-2 px-3 py-2.5 rounded-xl bg-brand-100/60 hover:bg-brand-200/60 text-brand-800 transition-all duration-300 hover:shadow-brand backdrop-blur-sm border border-brand-200/40",
          className?.includes("w-full") && "w-full justify-between"
        )}
      >
        <div className="flex items-center space-x-2">
          <Globe className="h-4 w-4" />
          <span className="text-sm font-medium">
            {languageNames[locale]}
          </span>
        </div>
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-3 bg-white/95 rounded-2xl shadow-warm border-2 border-brand-200/50 z-50 overflow-hidden min-w-[160px] backdrop-blur-xl"
          >
            {locales.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setLocale(lang);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full px-5 py-4 text-left hover:bg-brand-50 flex items-center space-x-3 transition-all duration-300 text-base font-medium hover:shadow-brand",
                  locale === lang && "bg-brand-100 text-brand-800 font-semibold"
                )}
              >
                <span>{languageNames[lang]}</span>
                {locale === lang && (
                  <div className="ml-auto w-3 h-3 bg-brand-600 rounded-full shadow-brand" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}