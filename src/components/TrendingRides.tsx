import React, { useState } from 'react';
import { VEHICLES, Vehicle } from '../data/mockData';
import {
  ChevronLeft,
  ChevronRight,
  HardHat,
  Gauge,
  Fuel,
  Sparkles,
  Zap,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TrendingRidesProps {
  onBookVehicle: (vehicle: Vehicle) => void;
  onViewAll: () => void;
  selectedCategoryFilter?: string;
}

export const TrendingRides: React.FC<TrendingRidesProps> = ({
  onBookVehicle,
  onViewAll,
  selectedCategoryFilter = 'all',
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'enfield' | 'scooters' | 'tourers'>(
    selectedCategoryFilter === 'tourers' ? 'tourers' : 'all'
  );

  const tabs: Array<{ id: 'all' | 'enfield' | 'scooters' | 'tourers'; label: string; count?: number }> = [
    { id: 'all', label: 'All Bikes (8)' },
    { id: 'enfield', label: 'Royal Enfield' },
    { id: 'scooters', label: 'Hill Scooters' },
    { id: 'tourers', label: 'Adventure' },
  ];

  const filteredVehicles = VEHICLES.filter((vehicle) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'enfield') return vehicle.brand.toLowerCase().includes('enfield');
    if (activeTab === 'scooters') return vehicle.category === 'scooters';
    if (activeTab === 'tourers') return vehicle.category === 'tourers' || vehicle.category === 'sport';
    return true;
  });

  return (
    <section id="trending" className="py-12 sm:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
          <div>
            <div className="text-[11px] font-bold text-red-500 uppercase tracking-widest mb-1 font-['Plus_Jakarta_Sans'] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>MOST BOOKED TWO-WHEELERS THIS WEEK</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-['Plus_Jakarta_Sans']">
              Trending Bikes & Scooters
            </h2>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => {
                const tabIds = tabs.map((t) => t.id);
                const idx = tabIds.indexOf(activeTab);
                setActiveTab(tabIds[(idx - 1 + tabIds.length) % tabIds.length]);
              }}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Previous category"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const tabIds = tabs.map((t) => t.id);
                const idx = tabIds.indexOf(activeTab);
                setActiveTab(tabIds[(idx + 1) % tabIds.length]);
              }}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Next category"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={onViewAll}
              className="bg-[#F97316] hover:bg-[#EA580C] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all cursor-pointer active:scale-95 shadow-sm"
            >
              VIEW ALL (8)
            </button>
          </div>
        </div>

        {/* Filter Pills with Animated Selection */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-6 sm:mb-8 overflow-x-auto pb-1 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-3.5 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shrink-0 cursor-pointer ${
                  isActive ? 'text-white' : 'text-slate-600 bg-white border border-slate-200/80 hover:bg-slate-50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-[#0F172A] rounded-xl -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* MOBILE MODE: Horizontal Snap-Scroll Carousel (No endless vertical text wall!) */}
        <div className="sm:hidden -mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-none">
          <AnimatePresence mode="popLayout">
            {filteredVehicles.map((vehicle) => (
              <motion.div
                key={vehicle.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="min-w-[280px] max-w-[290px] snap-center bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Vehicle Image */}
                  <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                    <img
                      src={vehicle.imageUrl}
                      alt={vehicle.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Top Tag */}
                    <div className="absolute top-2.5 left-2.5">
                      <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md shadow">
                        {vehicle.tag}
                      </span>
                    </div>

                    {/* Fuel badge */}
                    <div className="absolute top-2.5 right-2.5">
                      <span className="bg-black/60 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded">
                        {vehicle.typeBadge}
                      </span>
                    </div>
                  </div>

                  {/* Vehicle Info */}
                  <div className="p-3.5 space-y-2">
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {vehicle.brand}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 leading-snug line-clamp-1 font-['Plus_Jakarta_Sans']">
                        {vehicle.name}
                      </h3>
                    </div>

                    {/* Quick Specs Pills */}
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-600">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100">
                        <Gauge className="w-3 h-3 text-[#F97316]" />
                        {vehicle.specs.engine?.split(' ')[0]} cc
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100">
                        <HardHat className="w-3 h-3 text-emerald-600" />
                        2 Helmets
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Price & Direct Book */}
                <div className="p-3.5 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between gap-2">
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Daily Rate</div>
                    <div className="text-base font-black text-[#0F172A]">
                      ₹{vehicle.pricePerDay}
                      <span className="text-[10px] font-semibold text-slate-500"> /day</span>
                    </div>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.94 }}
                    onClick={() => onBookVehicle(vehicle)}
                    className="bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl shadow cursor-pointer"
                  >
                    BOOK NOW
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="sm:hidden flex items-center justify-center gap-1 text-[11px] font-semibold text-slate-400 -mt-1 mb-2">
          <span>👈 Swipe to view all {filteredVehicles.length} rides 👉</span>
        </div>

        {/* DESKTOP / TABLET MODE: Responsive Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredVehicles.slice(0, 4).map((vehicle) => (
              <motion.div
                key={vehicle.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Top Card Image */}
                  <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                    <img
                      src={vehicle.imageUrl}
                      alt={vehicle.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Top Left Tag */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/95 backdrop-blur-sm text-slate-900 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md shadow-sm">
                        {vehicle.tag}
                      </span>
                    </div>

                    {/* Fuel badge */}
                    <div className="absolute top-3 right-3">
                      <span className="bg-black/60 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded">
                        {vehicle.typeBadge}
                      </span>
                    </div>
                  </div>

                  {/* Body Specs */}
                  <div className="p-4 sm:p-5 space-y-3">
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {vehicle.brand}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight font-['Plus_Jakarta_Sans'] line-clamp-1">
                        {vehicle.name}
                      </h3>
                    </div>

                    {/* Telemetry / Specs Badges */}
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-1.5 truncate">
                        <Gauge className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
                        <span className="truncate">{vehicle.specs.engine?.split(' ')[0]} cc</span>
                      </div>
                      <div className="flex items-center gap-1.5 truncate">
                        <HardHat className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">2 Helmets</span>
                      </div>
                    </div>

                    {/* Key features bullet points */}
                    <ul className="text-xs text-slate-600 space-y-1 pt-1 font-medium">
                      {vehicle.features.slice(0, 2).map((feat, i) => (
                        <li key={i} className="flex items-center gap-1.5 truncate">
                          <span className="text-[#064E3B] font-bold">✓</span>
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Price & Direct Book */}
                <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] text-slate-400 font-medium">Daily Rental</div>
                    <div className="text-lg font-black text-[#0F172A] font-['Plus_Jakarta_Sans']">
                      ₹{vehicle.pricePerDay}
                      <span className="text-xs font-semibold text-slate-500"> /day</span>
                    </div>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onBookVehicle(vehicle)}
                    className="bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 cursor-pointer"
                  >
                    BOOK NOW
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
