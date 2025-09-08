'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Route, Euro, Phone, MessageCircle, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage } from '@/contexts/LanguageContext';
import { getDestinationName, type Destination } from '@/data/destinations';
import { cn } from '@/lib/utils';

interface SearchResultsProps {
  query: string;
  destination: Destination | null;
  isVisible: boolean;
  onDestinationSelect?: (destination: Destination) => void;
}

export function SearchResults({ query, destination, isVisible, onDestinationSelect }: SearchResultsProps) {
  const t = useTranslation();
  const { locale } = useLanguage();
  
  if (!isVisible) return null;
  
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `${t.contact.whatsappMessage} ${query}. ${destination ? 
        `Precio estimado: €${destination.priceEur}, Duración: ${destination.durationMinutes} min` : 
        'Solicito cotización personalizada.'}`
    );
    window.open(`https://wa.me/${t.contact.phone.replace(/\D/g, '')}?text=${message}`, '_blank');
  };
  
  const handleCall = () => {
    window.location.href = `tel:${t.contact.phone}`;
  };
  
  const handleQuote = () => {
    // This would open a quote form modal or navigate to a quote page
    console.log('Open quote form');
  };
  
  if (!destination) {
    // Show contact options for unlisted destinations
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-2xl mx-auto mt-8"
      >
        <div className="card-warm p-8 shadow-warm border-2 border-brand-200/50">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-200/80 rounded-full mb-6 shadow-brand">
              <MapPin className="h-10 w-10 text-brand-700" />
            </div>
            <h3 className="text-2xl font-bold text-brand-900 mb-3">
              {t.transfer.notAvailable}
            </h3>
            <p className="text-brand-700 mb-8 text-lg">
              {t.transfer.contactForQuote}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleWhatsApp}
                size="lg"
                className="flex items-center justify-center px-6 py-4 bg-green-600 hover:bg-green-700 text-white border-0 font-semibold rounded-xl"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                {t.common?.whatsapp || 'WhatsApp'}
              </Button>
              <Button 
                onClick={handleCall}
                size="lg"
                className="flex items-center justify-center px-6 py-4 bg-brand-600 hover:bg-brand-700 text-white border-0 font-semibold rounded-xl"
              >
                <Phone className="h-5 w-5 mr-2" />
                {t.common?.call || 'Call'}
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-3xl mx-auto px-2 sm:px-4 lg:px-0"
    >
      <div className="card-warm shadow-warm border-2 border-brand-200/50 overflow-hidden">
        <div className="bg-gradient-primary text-white p-3 sm:p-6">
          <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
            <MapPin className="h-4 w-4 sm:h-6 sm:w-6" />
            <h2 className="text-base sm:text-xl lg:text-3xl font-bold truncate">
              {getDestinationName(destination, locale)}
            </h2>
          </div>
          <p className="text-white/95 text-xs sm:text-sm lg:text-lg font-medium">
            {t.common.from} Airport → {getDestinationName(destination, locale)}
          </p>
        </div>
        
        <div className="p-3 sm:p-6">
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="text-center flex flex-col"
            >
              <div className="inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-brand-200/80 rounded-lg sm:rounded-xl lg:rounded-2xl mb-1 sm:mb-3 shadow-brand mx-auto">
                <Clock className="h-3 w-3 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-brand-700" />
              </div>
              <h3 className="font-medium sm:font-semibold text-brand-900 mb-1 text-xs sm:text-sm lg:text-lg leading-tight h-8 sm:h-10 lg:h-12 flex items-center justify-center">{t.transfer?.estimatedDuration || 'Duration'}</h3>
              <p className="text-sm sm:text-xl lg:text-3xl font-bold text-brand-800 h-6 sm:h-8 lg:h-12 flex items-center justify-center">{destination.durationMinutes} min</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center flex flex-col"
            >
              <div className="inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-accent-200/80 rounded-lg sm:rounded-xl lg:rounded-2xl mb-1 sm:mb-3 shadow-brand mx-auto">
                <Route className="h-3 w-3 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-accent-700" />
              </div>
              <h3 className="font-medium sm:font-semibold text-brand-900 mb-1 text-xs sm:text-sm lg:text-lg leading-tight h-8 sm:h-10 lg:h-12 flex items-center justify-center">{t.transfer?.estimatedDistance || 'Distance'}</h3>
              <p className="text-sm sm:text-xl lg:text-3xl font-bold text-accent-700 h-6 sm:h-8 lg:h-12 flex items-center justify-center">{destination.distanceKm} km</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center flex flex-col"
            >
              <div className="inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-brand-300/80 rounded-lg sm:rounded-xl lg:rounded-2xl mb-1 sm:mb-3 shadow-brand mx-auto">
                <Euro className="h-3 w-3 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-brand-800" />
              </div>
              <h3 className="font-medium sm:font-semibold text-brand-900 mb-1 text-xs sm:text-sm lg:text-lg leading-tight h-8 sm:h-10 lg:h-12 flex items-center justify-center">{t.transfer?.estimatedPrice || 'Price'}</h3>
              <p className="text-sm sm:text-xl lg:text-3xl font-bold text-brand-800 h-6 sm:h-8 lg:h-12 flex items-center justify-center">€{destination.priceEur}</p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-3 sm:gap-4 lg:flex-row lg:gap-4 justify-center p-2 sm:p-0"
          >
            <Button 
              onClick={handleWhatsApp}
              size="sm"
              className="flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm lg:text-base bg-green-600 hover:bg-green-700 text-white border-0 font-semibold rounded-xl"
            >
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 lg:h-5 lg:w-5 mr-2" />
              {t.common?.whatsapp || 'WhatsApp'}
            </Button>
            <Button 
              onClick={handleQuote}
              size="sm"
              className="flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm lg:text-base bg-blue-600 hover:bg-blue-700 text-white border-0 font-semibold rounded-xl"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 lg:h-5 lg:w-5 mr-2" />
              {t.common?.sendMessage || 'Send Message'}
            </Button>
            <Button 
              onClick={handleCall}
              size="sm"
              className="flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm lg:text-base bg-brand-600 hover:bg-brand-700 text-white border-0 font-semibold rounded-xl"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 lg:h-5 lg:w-5 mr-2" />
              {t.common?.call || 'Call'}
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}