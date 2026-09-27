import React from 'react';
import { ROUTE_GUIDES, RouteGuide } from '../data/mockData';
import { MapPin, ArrowRight, Mountain, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface PopularRoutesProps {
  onSelectRoute: (route: RouteGuide) => void;
  onViewAllHubs: () => void;
}

export const PopularRoutes: React.FC<PopularRoutesProps> = ({ onSelectRoute, onViewAllHubs }) => {
  const flagshipRoute = ROUTE_GUIDES[0];
  const mountainRoutes = ROUTE_GUIDES.slice(1);

  return (
    <section id="routes" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-10">
          <div>
            <div className="text-[10px] sm:text-[11px] font-bold text-[#064E3B] uppercase tracking-widest mb-1 font-['Plus_Jakarta_Sans']">
              QUEEN OF THE HILLS • HIMALAYAN EXPEDITIONS
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-['Plus_Jakarta_Sans']">
              Ride in <span className="text-[#F97316]">Darjeeling</span> & Mountain Routes
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
              Tiger Hill dawn expeditions, tea estate avenues, and scenic mountain ridges from our
              19, HD Lama Rd Chauk Bazaar hub.
            </p>
          </div>

          <button
            onClick={onViewAllHubs}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-[#F97316] transition-colors cursor-pointer group"
          >
            <span>All Darjeeling Pickup Points</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Routes Grid: Left Flagship Card + Right 2x3 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Flagship Card (Darjeeling Chauk Bazaar) */}
          <motion.div
            whileHover={{ y: -3 }}
            onClick={() => onSelectRoute(flagshipRoute)}
            className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto lg:h-full bg-slate-900 flex flex-col justify-end"
          >
            <img
              src={flagshipRoute.imageUrl}
              alt={flagshipRoute.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

            {/* Flagship Badge */}
            <div className="absolute top-3.5 left-3.5 z-10">
              <span className="bg-emerald-500 text-white font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded">
                MAIN OFFICE HUB
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 p-4 sm:p-6 space-y-1 sm:space-y-2">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
                Chauk Bazaar & Mall Road
              </h3>
              <p className="text-xs text-slate-200 flex items-center gap-1.5 leading-relaxed truncate">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate">19, HD Lama Rd, Chauk Bazaar • Fast Handover</span>
              </p>
            </div>
          </motion.div>

          {/* Right Destination Grid: Horizontal Snap on Mobile, 3-col on Desktop */}
          <div className="lg:col-span-7 flex sm:grid sm:grid-cols-3 gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory pb-3 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
            {mountainRoutes.map((route) => (
              <motion.div
                key={route.id}
                whileHover={{ y: -3 }}
                onClick={() => onSelectRoute(route)}
                className="min-w-[200px] sm:min-w-0 snap-center relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group aspect-[16/11] bg-slate-900 flex flex-col justify-end border border-slate-200"
              >
                <img
                  src={route.imageUrl}
                  alt={route.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Badge if present */}
                {route.badge && (
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span
                      className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm ${
                        route.badge === 'MUST EXPERIENCE'
                          ? 'bg-amber-500 text-slate-950 font-extrabold'
                          : route.badge === 'SCENIC CRUISE'
                          ? 'bg-blue-600 text-white'
                          : route.badge === 'EXPEDITION'
                          ? 'bg-orange-600 text-white'
                          : 'bg-emerald-600 text-white'
                      }`}
                    >
                      {route.badge}
                    </span>
                  </div>
                )}

                {/* Bottom Route Summary */}
                <div className="relative z-10 p-3">
                  <h4 className="text-sm font-bold text-white tracking-tight font-['Plus_Jakarta_Sans'] line-clamp-1">
                    {route.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[10px] text-slate-300 mt-0.5 font-medium">
                    <span>{route.distance}</span>
                    <span>•</span>
                    <span>{route.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
