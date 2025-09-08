'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from '@/hooks/useTranslation';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslation();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-50 backdrop-blur-xl bg-gradient-to-r from-white/95 to-brand-50/95 border-b border-brand-200/40 shadow-brand"
    >
      <nav className="px-4 lg:container">
        <div className="flex items-center justify-between py-3 lg:py-4">
          {/* Logo */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center space-x-2 lg:space-x-3"
          >
            <div className="w-9 h-9 lg:w-12 lg:h-12 bg-gradient-primary rounded-lg lg:rounded-2xl flex items-center justify-center shadow-warm hover:shadow-glow transition-all duration-300">
              <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <div>
              <h1 className="text-base lg:text-xl font-bold text-brand-900 text-display">
                Alicante Transfers
              </h1>
              <p className="text-xs lg:text-sm text-brand-700 hidden md:block font-medium">
                Premium Airport Service
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            <a href="#services" className="text-neutral-600 hover:text-brand-600 font-medium transition-colors duration-200">
              {t.nav.services}
            </a>
            <a href="#destinations" className="text-neutral-600 hover:text-brand-600 font-medium transition-colors duration-200">
              {t.nav.destinations}
            </a>
            <a href="#about" className="text-neutral-600 hover:text-brand-600 font-medium transition-colors duration-200">
              {t.nav.about}
            </a>
            <a href="#contact" className="text-neutral-600 hover:text-brand-600 font-medium transition-colors duration-200">
              {t.nav.contact}
            </a>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center space-x-3"
          >
            {/* Desktop Language Switcher */}
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            
            {/* CTA Button */}
            <button className="btn-primary btn-sm hover-glow font-bold px-3 py-2 md:px-4 md:py-2.5 text-xs md:text-sm">
              <svg className="w-4 h-4 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {t.nav.book}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-brand-700 hover:text-brand-900 hover:bg-brand-100/60 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 rounded-lg transition-all duration-300"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="card p-4 mt-2 space-y-2">
              <a 
                href="#services" 
                className="block px-4 py-3 text-brand-700 hover:text-brand-900 hover:bg-brand-100/80 rounded-xl font-medium transition-all duration-300 hover:shadow-brand"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.services}
              </a>
              <a 
                href="#destinations" 
                className="block px-4 py-3 text-brand-700 hover:text-brand-900 hover:bg-brand-100/80 rounded-xl font-medium transition-all duration-300 hover:shadow-brand"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.destinations}
              </a>
              <a 
                href="#about" 
                className="block px-4 py-3 text-brand-700 hover:text-brand-900 hover:bg-brand-100/80 rounded-xl font-medium transition-all duration-300 hover:shadow-brand"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.about}
              </a>
              <a 
                href="#contact" 
                className="block px-4 py-3 text-brand-700 hover:text-brand-900 hover:bg-brand-100/80 rounded-xl font-medium transition-all duration-300 hover:shadow-brand"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.contact}
              </a>
              
              {/* Language Switcher in Mobile Menu */}
              <div className="pt-3 border-t border-neutral-200">
                <div className="px-4 py-2">
                  <LanguageSwitcher className="w-full" />
                </div>
              </div>
              
              <div className="pt-2">
                <button className="btn-primary w-full text-sm font-bold py-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {t.nav.book}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}