'use client';

import { Hero } from '@/components/layout/Hero';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-accent-50/30 overflow-x-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 gradient-mesh opacity-40" />

      {/* Content */}
      <div className="relative w-full">
        <Hero />

        {/* CTA Section */}
        <section className="py-8 sm:py-12 lg:py-16 bg-gradient-primary">
          <div className="px-4 sm:px-6 lg:container max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">
                Ready to Book Your Transfer?
              </h2>
              <p className="text-sm sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto font-medium px-2">
                Join thousands of satisfied customers who trust us for their airport transfers
              </p>
              <button className="btn text-sm sm:text-base lg:text-lg font-bold px-6 py-3 sm:px-8 sm:py-4 lg:px-12 lg:py-5 bg-white text-brand-700 hover:bg-white/90 hover-glow rounded-lg sm:rounded-xl lg:rounded-2xl shadow-warm transition-all duration-300 hover:scale-105">
                Get Started Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}