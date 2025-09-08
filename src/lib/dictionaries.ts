import { Locale } from './i18n';

export interface Dictionary {
  common: {
    search: string;
    from: string;
    to: string;
    duration: string;
    distance: string;
    price: string;
    bookNow: string;
    getQuote: string;
    callForPrice: string;
    whatsapp: string;
    sendMessage: string;
    call: string;
    loading: string;
    error: string;
    scrollForMore: string;
  };
  nav: {
    services: string;
    destinations: string;
    about: string;
    contact: string;
    book: string;
  };
  hero: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    destinationPlaceholder: string;
    mainTitle: string;
    mainSubtitle: string;
    description: string;
  };
  transfer: {
    estimatedDuration: string;
    estimatedDistance: string;
    estimatedPrice: string;
    notAvailable: string;
    contactForQuote: string;
  };
  contact: {
    phone: string;
    whatsappMessage: string;
  };
  languages: {
    es: string;
    en: string;
    de: string;
  };
}

const dictionaries: Record<Locale, Dictionary> = {
  es: {
    common: {
      search: 'Buscar',
      from: 'Desde',
      to: 'Hasta',
      duration: 'Duración',
      distance: 'Distancia',
      price: 'Precio',
      bookNow: 'Reservar Ahora',
      getQuote: 'Solicitar Presupuesto',
      callForPrice: 'Llamar para Precio',
      whatsapp: 'WhatsApp',
      sendMessage: 'Enviar Mensaje',
      call: 'Llamar',
      loading: 'Cargando...',
      error: 'Error',
      scrollForMore: 'Desplázate para más',
    },
    nav: {
      services: 'Servicios',
      destinations: 'Destinos',
      about: 'Nosotros',
      contact: 'Contacto',
      book: 'Reservar',
    },
    hero: {
      title: 'Transfers Aeropuerto Alicante',
      subtitle: 'Servicio confiable y cómodo desde y hacia el aeropuerto de Alicante',
      searchPlaceholder: 'Buscar destino...',
      destinationPlaceholder: 'Aeropuerto de Alicante',
      mainTitle: 'Tu Viaje',
      mainSubtitle: 'Comienza Aquí',
      description: 'Experimenta transfers de aeropuerto sin interrupciones a más de 200 destinos en España.',
    },
    transfer: {
      estimatedDuration: 'Duración estimada',
      estimatedDistance: 'Distancia estimada',
      estimatedPrice: 'Precio estimado',
      notAvailable: 'No disponible en lista',
      contactForQuote: 'Contacta para un presupuesto personalizado',
    },
    contact: {
      phone: '+34 123 456 789',
      whatsappMessage: 'Hola, me interesa el servicio de transfer desde el aeropuerto de Alicante hasta',
    },
    languages: {
      es: 'Español',
      en: 'English',
      de: 'Deutsch',
    },
  },
  en: {
    common: {
      search: 'Search',
      from: 'From',
      to: 'To',
      duration: 'Duration',
      distance: 'Distance',
      price: 'Price',
      bookNow: 'Book Now',
      getQuote: 'Get Quote',
      callForPrice: 'Call for Price',
      whatsapp: 'WhatsApp',
      sendMessage: 'Send Message',
      call: 'Call',
      loading: 'Loading...',
      error: 'Error',
      scrollForMore: 'Scroll for more',
    },
    nav: {
      services: 'Services',
      destinations: 'Destinations',
      about: 'About',
      contact: 'Contact',
      book: 'Book Now',
    },
    hero: {
      title: 'Alicante Airport Transfers',
      subtitle: 'Reliable and comfortable service from and to Alicante Airport',
      searchPlaceholder: 'Search destination...',
      destinationPlaceholder: 'Alicante Airport',
      mainTitle: 'Your Journey',
      mainSubtitle: 'Starts Here',
      description: 'Experience seamless airport transfers to 200+ destinations across Spain.',
    },
    transfer: {
      estimatedDuration: 'Estimated duration',
      estimatedDistance: 'Estimated distance',
      estimatedPrice: 'Estimated price',
      notAvailable: 'Not available in list',
      contactForQuote: 'Contact us for a personalized quote',
    },
    contact: {
      phone: '+34 123 456 789',
      whatsappMessage: 'Hello, I\'m interested in transfer service from Alicante Airport to',
    },
    languages: {
      es: 'Español',
      en: 'English',
      de: 'Deutsch',
    },
  },
  de: {
    common: {
      search: 'Suchen',
      from: 'Von',
      to: 'Nach',
      duration: 'Dauer',
      distance: 'Entfernung',
      price: 'Preis',
      bookNow: 'Jetzt Buchen',
      getQuote: 'Angebot Anfordern',
      callForPrice: 'Für Preis Anrufen',
      whatsapp: 'WhatsApp',
      sendMessage: 'Nachricht Senden',
      call: 'Anrufen',
      loading: 'Laden...',
      error: 'Fehler',
      scrollForMore: 'Scrollen für mehr',
    },
    nav: {
      services: 'Dienste',
      destinations: 'Ziele',
      about: 'Über uns',
      contact: 'Kontakt',
      book: 'Buchen',
    },
    hero: {
      title: 'Alicante Flughafen Transfer',
      subtitle: 'Zuverlässiger und komfortabler Service vom und zum Flughafen Alicante',
      searchPlaceholder: 'Ziel suchen...',
      destinationPlaceholder: 'Flughafen Alicante',
      mainTitle: 'Ihre Reise',
      mainSubtitle: 'Beginnt Hier',
      description: 'Erleben Sie nahtlose Flughafentransfers zu über 200 Zielen in ganz Spanien.',
    },
    transfer: {
      estimatedDuration: 'Geschätzte Dauer',
      estimatedDistance: 'Geschätzte Entfernung',
      estimatedPrice: 'Geschätzter Preis',
      notAvailable: 'Nicht in der Liste verfügbar',
      contactForQuote: 'Kontaktieren Sie uns für ein individuelles Angebot',
    },
    contact: {
      phone: '+34 123 456 789',
      whatsappMessage: 'Hallo, ich interessiere mich für den Transfer-Service vom Flughafen Alicante nach',
    },
    languages: {
      es: 'Español',
      en: 'English',
      de: 'Deutsch',
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries.es;
}