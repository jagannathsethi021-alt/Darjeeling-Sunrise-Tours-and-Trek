import React, { useState } from 'react';
import {
  ChevronRight,
  ShieldCheck,
  Zap,
  Bike,
  MapPin,
  Calendar,
  Search,
  Headphones,
  HardHat,
  Mountain,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';
import { DARJEELING_HUBS, DARJEELING_CONTACT } from '../data/mockData';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExploreFleet: () => void;
  onSearchRides: (filters: { vehicleType: string; hubId: string; date: string }) => void;
  selectedHub: string;
  onSelectHub: (hubId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onExploreFleet,
  onSearchRides,
  selectedHub,
  onSelectHub,
}) => {
  // ONLY TWO-WHEELERS (NO CARS)
  const [vehicleType, setVehicleType] = useState<'All' | 'Motorcycle' | 'Scooter'>('All');
  const [pickupDate, setPickupDate] = useState('Today, 09:00 AM');
  const [isEditingDate, setIsEditingDate] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchRides({
      vehicleType,
      hubId: selectedHub,
      date: pickupDate,
    });
  };

  return (
    <section className="relative pt-4 sm:pt-8 pb-12 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#F0FDF4] via-white to-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Left Column: Headlines & Address Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-4 sm:space-y-6"
          >
            {/* Regional Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 sm:py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-[11px] font-bold text-[#064E3B]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
              <span className="truncate">19, HD LAMA RD, CHAUK BAZAAR, DARJEELING</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15] font-['Plus_Jakarta_Sans']">
              Ride Darjeeling Hills,{' '}
              <span className="relative inline-block text-[#F97316]">
                Your Way.
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-3 text-[#F97316] -z-10"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C50 3 150 2 197 9"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle - Punchy on mobile, detailed on desktop */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-xl leading-relaxed">
              <span className="sm:hidden">
                Rent Royal Enfield bikes and hill-tuned scooters with zero security deposit. Free
                doorstep delivery & 4:00 AM Tiger Hill sunrise pickup.
              </span>
              <span className="hidden sm:inline">
                Rent Royal Enfield bikes and hill-tuned scooters in Darjeeling with zero security
                deposit. Pickup at 19, HD Lama Rd, Chauk Bazaar or doorstep delivery across
                Darjeeling Mall Road, Ghum, Batasia Loop, and Tiger Hill routes.
              </span>
            </p>

            {/* Mobile Visual Pills (Replaces walls of text with quick scannable badges) */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-orange-50 border border-orange-200 text-[#EA580C] font-semibold">
                <Zap className="w-3.5 h-3.5 text-[#F97316]" />
                ₹0 Deposit
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold">
                <HardHat className="w-3.5 h-3.5 text-emerald-600" />
                2 Free Helmets
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 font-semibold">
                <Mountain className="w-3.5 h-3.5 text-slate-700" />
                4 AM Tiger Hill
              </span>
            </div>

            {/* Address & Direct Phone Banner */}
            <div className="flex flex-wrap items-center justify-between gap-2 bg-emerald-50/90 border border-emerald-200/80 p-3 sm:p-3.5 rounded-2xl text-xs text-slate-800">
              <div className="flex items-center gap-2 truncate">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-semibold truncate">19, HD Lama Rd, Chauk Bazaar</span>
              </div>
              <a
                href={`tel:${DARJEELING_CONTACT.phoneClean}`}
                className="font-extrabold text-[#EA580C] hover:underline flex items-center gap-1 shrink-0 ml-auto"
              >
                <span>Call: {DARJEELING_CONTACT.phone}</span>
              </a>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3 pt-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenBooking}
                className="flex-1 sm:flex-initial bg-[#F97316] hover:bg-[#EA580C] text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all cursor-pointer group"
              >
                <span>Book Your Bike</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <button
                onClick={onExploreFleet}
                className="flex-1 sm:flex-initial bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-4 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-colors cursor-pointer shadow-sm text-center"
              >
                View Fleet
              </button>
            </div>

            {/* Metrics Row - Compact on mobile */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 sm:pt-6 border-t border-slate-200/70 max-w-lg">
              <div>
                <div className="text-xl sm:text-3xl font-extrabold text-[#0F172A] font-['Plus_Jakarta_Sans']">
                  35K+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Mountain Riders</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-extrabold text-[#064E3B] font-['Plus_Jakarta_Sans']">
                  250+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Hill Bikes</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-extrabold text-[#F97316] font-['Plus_Jakarta_Sans']">
                  ₹0
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Security Deposit</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual with BIKE ONLY (Animated) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl bg-slate-900 border border-slate-100 aspect-[4/3] group">
              <img
                src="/assets/images/hero_bike_darjeeling_1790533232466.jpg"
                alt="Royal Enfield Mountain Touring in Darjeeling"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

              {/* Floating Top Right Badge with smooth hover bounce */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-slate-100 flex items-center gap-1.5"
              >
                <Mountain className="w-3.5 h-3.5 text-[#F97316]" />
                <span className="text-[11px] sm:text-xs font-bold text-slate-900">
                  Tiger Hill 4 AM Dawn Ready
                </span>
              </motion.div>

              {/* Floating Bottom Badge: 100% Mountain Tuned & 2 Helmets */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <HardHat className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-slate-900 truncate">
                    2 Sanitized ISI Helmets Included
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 truncate">
                    Free hill puncture kit & 0% security deposit
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Search Booking Box (Dark Widget - Streamlined for Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 sm:mt-12 lg:mt-16 bg-[#0B1526] text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-slate-800"
        >
          <form onSubmit={handleSearchSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 lg:gap-6 items-center">
              {/* Vehicle Type Tabs: ONLY BIKE / SCOOTER */}
              <div className="md:col-span-4 space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Select Two-Wheeler
                </label>
                <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-700/60">
                  {(['All', 'Motorcycle', 'Scooter'] as const).map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setVehicleType(type)}
                      className={`relative flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                        vehicleType === type
                          ? 'bg-[#F97316] text-white shadow-sm'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      {type === 'All' ? 'All Rides' : type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pickup Location Dropdown: Darjeeling Hubs */}
              <div className="md:col-span-4 space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Darjeeling Station / Hub
                </label>
                <div className="relative">
                  <div className="flex items-center gap-2 bg-slate-900/90 px-3 py-2.5 rounded-xl border border-slate-700/60 text-white">
                    <MapPin className="w-4 h-4 text-[#F97316] shrink-0" />
                    <select
                      value={selectedHub}
                      onChange={(e) => onSelectHub(e.target.value)}
                      className="w-full bg-transparent text-xs sm:text-sm font-medium focus:outline-none cursor-pointer truncate text-slate-200"
                    >
                      {DARJEELING_HUBS.map((hub) => (
                        <option
                          key={hub.id}
                          value={hub.id}
                          className="bg-slate-900 text-slate-200"
                        >
                          {hub.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Date & Time Selector */}
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Pickup Time
                </label>
                <div className="relative">
                  <div className="flex items-center gap-2 bg-slate-900/90 px-3 py-2.5 rounded-xl border border-slate-700/60 text-white">
                    <Calendar className="w-4 h-4 text-[#F97316] shrink-0" />
                    {isEditingDate ? (
                      <input
                        type="text"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        onBlur={() => setIsEditingDate(false)}
                        autoFocus
                        className="bg-transparent text-xs sm:text-sm font-semibold text-white focus:outline-none w-full"
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() => setIsEditingDate(true)}
                        className="text-left text-xs sm:text-sm font-semibold text-white w-full truncate cursor-pointer hover:text-orange-300"
                      >
                        {pickupDate}
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 pt-1 md:pt-5">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-3 sm:py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>Find Bikes</span>
                </motion.button>
              </div>
            </div>
          </form>

          {/* Underneath 4 Benefits Pillars (Compact 2x2 on mobile, 4 columns on desktop) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-slate-800 text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#F97316] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-white truncate">Zero Security Deposit</div>
                <div className="text-[10px] text-slate-400 truncate">Instant digital KYC</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#F97316] shrink-0">
                <HardHat className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-white truncate">2 ISI Helmets</div>
                <div className="text-[10px] text-slate-400 truncate">Sanitized rider gear</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#F97316] shrink-0">
                <Mountain className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-white truncate">Tiger Hill Ready</div>
                <div className="text-[10px] text-slate-400 truncate">4:00 AM pickup available</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#F97316] shrink-0">
                <Headphones className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-white truncate">086373 62969</div>
                <div className="text-[10px] text-slate-400 truncate">24/7 hill assistance</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
