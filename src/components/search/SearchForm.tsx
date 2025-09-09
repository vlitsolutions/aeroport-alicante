'use client';

import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Search, MapPin, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { searchDestinations, getDestinationName, type Destination } from '@/data/destinations';
import { cn } from '@/lib/utils';

const searchSchema = z.object({
  destination: z.string().min(2, 'Destination is required'),
});

type SearchFormData = z.infer<typeof searchSchema>;

interface SearchFormProps {
  onSearch: (destination: string, result: Destination | null) => void;
  onFocus?: (focused: boolean) => void;
  onDestinationSelect?: (destination: Destination) => void;
}

export function SearchForm({ onSearch, onFocus, onDestinationSelect }: SearchFormProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
  });
  
  const suggestions = useMemo(() => {
    if (!query || query.length < 2) return [];
    return searchDestinations(query); // Show all matching results, but limit visible rows to 3
  }, [query]);
  
  const onSubmit = (data: SearchFormData) => {
    const destination = searchDestinations(data.destination)[0] || null;
    onSearch(data.destination, destination);
    setIsOpen(false);
  };
  
  const handleSuggestionClick = (destination: Destination) => {
    const name = getDestinationName(destination);
    setValue('destination', name);
    setQuery(name);
    setIsOpen(false);
    
    // Call the destination selection callback first (for animations)
    if (onDestinationSelect) {
      onDestinationSelect(destination);
    }
    
    // Also call onSearch to trigger results display
    onSearch(name, destination);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setValue('destination', value);
    setIsOpen(value.length >= 2);
  };

  const handleInputFocus = () => {
    setIsOpen(query.length >= 2);
    onFocus?.(true);
    
    // On mobile, scroll input into view with animation
    if (window.innerWidth < 768) {
      setTimeout(() => {
        const input = document.querySelector('input[placeholder*="Where to"]');
        if (input) {
          input.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest'
          });
        }
      }, 100);
    }
  };
  
  return (
    <motion.div 
      className="relative w-full max-w-3xl mx-auto px-2"
      animate={{
        scale: isOpen ? 1.01 : 1,
      }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="relative">
        <motion.div 
          className="card-glass p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-warm border-2 border-brand-200/40"
          animate={{
            borderColor: isOpen ? 'rgb(251 191 36 / 0.5)' : 'rgb(251 191 36 / 0.4)',
          }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="relative flex-1">
              <div className="absolute left-3 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 text-brand-500 z-10">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </div>
              <input
                {...register('destination')}
                value={query}
                onChange={handleInputChange}
                placeholder="✨ Where to? (e.g. Benidorm, Valencia...)"
                className={cn(
                  "w-full px-3 py-3 pl-10 pr-3 sm:px-4 sm:py-4 sm:pl-12 sm:pr-4 md:px-6 md:py-5 md:pl-16 md:pr-6 bg-white/90 border-2 border-brand-200/60 rounded-lg sm:rounded-xl md:rounded-2xl text-sm sm:text-base md:text-lg font-medium text-brand-900 placeholder:text-brand-500 placeholder:text-sm sm:placeholder:text-base focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-brand-400 focus:bg-white transition-all duration-300 backdrop-blur-sm shadow-brand",
                  errors.destination && "ring-2 ring-red-400 focus:ring-red-400 border-red-300"
                )}
                onFocus={handleInputFocus}
                onBlur={() => {
                  // Delay to allow suggestion clicks to register
                  setTimeout(() => {
                    onFocus?.(false);
                  }, 150);
                }}
              />
            </div>
            <button 
              type="submit" 
              className="btn-primary text-sm sm:text-base md:text-lg font-bold px-4 py-3 sm:px-6 sm:py-3 md:px-10 md:py-5 rounded-lg sm:rounded-xl md:rounded-2xl shadow-warm hover-glow transition-all duration-300 hover:scale-105 active:scale-95 w-full"
            >
              <Search className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-2" />
              Search Now
            </button>
          </div>
        </motion.div>
        
        {errors.destination && (
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-600 mt-2 ml-4"
          >
            {errors.destination.message}
          </motion.p>
        )}
      </form>
      
      <AnimatePresence>
        {isOpen && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 mt-2 card-glass rounded-xl sm:rounded-2xl border border-white/30 z-50 backdrop-blur-xl overflow-hidden"
          >
            <div 
              className="p-1 sm:p-2 max-h-48 overflow-y-auto"
              style={{ maxHeight: '192px' }} // Height for exactly 3 rows
            >
              {suggestions.map((destination, index) => (
                <motion.button
                  key={destination.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  onClick={() => handleSuggestionClick(destination)}
                  className="w-full p-2 sm:p-3 text-left hover:bg-white/60 rounded-lg sm:rounded-xl flex items-center justify-between group transition-all duration-200"
                >
                  <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-100 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-brand-200 transition-colors duration-200 flex-shrink-0">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-brand-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium sm:font-semibold text-neutral-900 text-sm sm:text-base truncate">{getDestinationName(destination)}</p>
                      <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-neutral-500 mt-0.5">
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          {destination.durationMinutes}min
                        </span>
                        <span className="flex items-center font-medium text-brand-600">
                          €{destination.priceEur}
                        </span>
                        <span className="hidden sm:inline px-1.5 py-0.5 bg-neutral-100 text-neutral-600 rounded text-xs font-medium uppercase tracking-wide">
                          {destination.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-neutral-400 group-hover:text-brand-600 transition-colors duration-200 flex-shrink-0 ml-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.button>
              ))}
            </div>
            
            <div className="border-t border-white/20 p-2 sm:p-3 bg-brand-50/50">
              <p className="text-xs sm:text-sm text-neutral-600 text-center">
                Can&apos;t find your destination? <span className="text-brand-600 font-medium">Contact us</span> for custom quotes
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Backdrop to close suggestions */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setIsOpen(false);
            onFocus?.(false);
          }}
        />
      )}
    </motion.div>
  );
}