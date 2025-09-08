'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Header } from '@/components/layout/Header';
import { SearchForm } from '@/components/search/SearchForm';
import { SearchResults } from '@/components/search/SearchResults';
import { useTranslation } from '@/hooks/useTranslation';
import { type Destination } from '@/data/destinations';

export function Hero() {
  const t = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<Destination | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [showSplitView, setShowSplitView] = useState(false);
  
  const handleSearch = (query: string, destination: Destination | null) => {
    setSearchQuery(query);
    setSearchResult(destination);
    setShowResults(true);
  };

  const handleSearchFocus = (focused: boolean) => {
    setIsSearchFocused(focused);
    if (!focused) {
      // Hide results when unfocusing
      setShowResults(false);
      setSearchResult(null);
      setSearchQuery('');
    }
  };

  const handleDestinationSelect = (destination: Destination) => {
    setSelectedDestination(destination);
    setSearchResult(destination);
    setShowResults(true);
    
    // Keep input focused so results stay visible
    setIsSearchFocused(true);
  };
  
  return (
    <section className="relative h-screen bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-60 h-60 sm:w-80 sm:h-80 bg-brand-400/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-accent-400/12 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-72 sm:h-72 bg-brand-500/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}} />
        <div className="absolute top-3/4 left-1/3 w-48 h-48 sm:w-64 sm:h-64 bg-accent-300/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '6s'}} />
      </div>

      {/* Navbar */}
      <Header />

      {/* Main Content Container - This moves up/down smoothly */}
      <motion.div
        className="relative z-10 w-full h-full"
        animate={{
          y: isSearchFocused 
            ? 'calc(-50vh + 100px)' // Move up to just below navbar when focused
            : 0 // Centered in middle of screen when not focused
        }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
      
        {/* Mobile Layout */}
        <div className="md:hidden container px-4 relative h-screen">
          {/* Hero Header - Always visible unless searching */}
          <motion.div
            animate={{
              opacity: isSearchFocused ? 0 : 1,
              scale: isSearchFocused ? 0.9 : 1,
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute top-20 left-0 right-0 text-center px-4 z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-brand-100 to-accent-100 text-brand-800 rounded-full text-xs font-bold mb-3 border border-brand-300/60 shadow-brand backdrop-blur-sm">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              ✨ Premium Airport Transfers
            </div>
            
            <h1 className="font-bold text-display mb-2 leading-tight px-2" style={{fontSize: 'clamp(1.5rem, 8vw, 4rem)'}}>
              <span className="text-brand-900">{t.hero.mainTitle}</span>
              <br />
              <span className="bg-gradient-to-r from-brand-600 via-accent-500 to-brand-700 bg-clip-text text-transparent">{t.hero.mainSubtitle}</span>
            </h1>
            
            <motion.p
              animate={{ 
                opacity: isSearchFocused ? 0 : 1,
              }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-brand-700 mb-4 max-w-2xl mx-auto leading-relaxed font-medium px-2" 
              style={{fontSize: 'clamp(0.75rem, 3.5vw, 1.125rem)'}}
            >
              {t.hero.description}
            </motion.p>
          </motion.div>

          {/* Content Area */}
          <div className="flex flex-col items-center justify-center h-full">
            {/* Mobile: Search Form and Results with slide transitions */}
            {!selectedDestination ? (
              <motion.div
                key="search-form"
                initial={{ x: 0, opacity: 1 }}
                exit={{ x: '-100%', opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full max-w-4xl"
              >
                <SearchForm 
                  onSearch={handleSearch}
                  onFocus={handleSearchFocus}
                  onDestinationSelect={handleDestinationSelect}
                />
                
                {/* Search Results dropdown */}
                {isSearchFocused && showResults && !selectedDestination && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="mt-4"
                  >
                    <SearchResults 
                      query={searchQuery}
                      destination={searchResult}
                      isVisible={showResults}
                    />
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="selected-result"
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full max-w-4xl px-4"
              >
                <SearchResults 
                  query={searchQuery}
                  destination={selectedDestination}
                  isVisible={true}
                />
              </motion.div>
            )}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block container px-4">
          <div className="flex flex-col items-center justify-center h-screen">
            {/* Hero Header - Desktop */}
            <motion.div
              animate={{
                opacity: isSearchFocused ? 0 : 1,
                scale: isSearchFocused ? 0.9 : 1,
              }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center mb-6"
            >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-brand-100 to-accent-100 text-brand-800 rounded-full text-xs font-bold mb-3 border border-brand-300/60 shadow-brand backdrop-blur-sm">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              ✨ Premium Airport Transfers
            </div>
            
            <h1 className="font-bold text-display mb-2 leading-tight px-2 text-6xl lg:text-7xl">
              <span className="text-brand-900">{t.hero.mainTitle}</span>
              <br />
              <span className="bg-gradient-to-r from-brand-600 via-accent-500 to-brand-700 bg-clip-text text-transparent">{t.hero.mainSubtitle}</span>
            </h1>
            
              <motion.p
                animate={{ 
                  opacity: isSearchFocused ? 0 : 1,
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-brand-700 mb-6 max-w-2xl mx-auto leading-relaxed font-medium text-xl"
              >
                {t.hero.description}
              </motion.p>
            </motion.div>
            
            {/* Desktop: Split-view when destination selected, centered when not */}
            {selectedDestination ? (
              <div className="grid grid-cols-2 gap-12 w-full max-w-7xl px-8">
                {/* Left Column - Search Form */}
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: 0 }}
                  className="flex flex-col justify-start"
                >
                  <SearchForm 
                    onSearch={handleSearch}
                    onFocus={handleSearchFocus}
                    onDestinationSelect={handleDestinationSelect}
                  />
                </motion.div>
                
                {/* Right Column - Selected Result */}
                <motion.div
                  initial={{ x: '100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col justify-start"
                  style={{ marginBottom: '100px' }} // Prevent overlay with scroll indicator
                >
                  <SearchResults 
                    query={searchQuery}
                    destination={selectedDestination}
                    isVisible={true}
                  />
                </motion.div>
              </div>
            ) : (
              <div className="flex flex-col items-center w-full max-w-4xl px-8">
                <div className="w-full mb-6">
                  <SearchForm 
                    onSearch={handleSearch}
                    onFocus={handleSearchFocus}
                    onDestinationSelect={handleDestinationSelect}
                  />
                </div>
                
                {/* Search Results dropdown - Only show when focused and has results */}
                {isSearchFocused && showResults && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-full"
                    style={{ marginBottom: '100px' }} // Prevent overlay with scroll indicator
                  >
                    <SearchResults 
                      query={searchQuery}
                      destination={searchResult}
                      isVisible={showResults}
                    />
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Scroll for More Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: (isSearchFocused || showResults || selectedDestination) ? 0 : 1 
        }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-brand-600">
          <span className="text-sm font-medium">{t.common?.scrollForMore || 'Scroll for more'}</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}