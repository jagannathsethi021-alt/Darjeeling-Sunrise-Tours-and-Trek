import React from 'react';
import { CATEGORIES, BRAND_LOGOS } from '../data/mockData';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface CuratedCategoriesProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CuratedCategories: React.FC<CuratedCategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-12 sm:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-widest mb-1.5 font-['Plus_Jakarta_Sans']">
              CURATED MOUNTAIN TWO-WHEELER FLEET
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-['Plus_Jakarta_Sans']">
              Ride your journey,{' '}
              <span className="text-[#F97316]">your way.</span>
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-base max-w-lg leading-relaxed">
            Curated hill-tuned Royal Enfield motorcycles, cruisers, and automatic scooters ready for
            Tiger Hill dawn expeditions and steep mountain passes.
          </p>
        </div>

        {/* Categories: Horizontal Snap on Mobile, 4-col Grid on Desktop */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          {CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectCategory(cat.id)}
              className="min-w-[240px] sm:min-w-0 snap-center group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-end aspect-[3/4]"
            >
              {/* Background Vehicle Image */}
              <img
                src={cat.imageUrl}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

              {/* Top Left Badge: Fleet Count */}
              <div className="absolute top-3.5 left-3.5 z-10">
                <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-md">
                  {cat.fleetCount}
                </span>
              </div>

              {/* Content Bottom */}
              <div className="relative z-10 p-4 sm:p-5 space-y-1.5">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-['Plus_Jakarta_Sans']">
                  {cat.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-2 leading-relaxed font-normal">
                  {cat.description}
                </p>

                <div className="pt-1.5">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#F97316] group-hover:text-orange-400 group-hover:translate-x-1 transition-all">
                    <span>{cat.ctaText}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Brands Bar */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200/80 text-center">
          <p className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 font-['Plus_Jakarta_Sans']">
            FEATURING TRUSTED MOTORCYCLE & SCOOTER BRANDS
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 lg:gap-16 opacity-75 hover:opacity-100 transition-opacity">
            {BRAND_LOGOS.map((brand) => (
              <span
                key={brand}
                className="text-xs sm:text-sm font-extrabold tracking-widest text-slate-700 uppercase"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
