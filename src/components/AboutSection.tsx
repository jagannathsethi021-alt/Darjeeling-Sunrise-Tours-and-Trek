import React from 'react';
import { Check, ArrowRight, Award, MapPin, Phone, ShieldCheck, HardHat, Clock, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import { DARJEELING_CONTACT } from '../data/mockData';

interface AboutSectionProps {
  onExploreFleet: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreFleet }) => {
  const highlights = [
    {
      icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
      title: 'Hill-Tuned Bikes',
      desc: 'Inspected daily for mountain slopes',
    },
    {
      icon: <HardHat className="w-4 h-4 text-emerald-400" />,
      title: '2 Free ISI Helmets',
      desc: 'Sanitized gear & emergency kit',
    },
    {
      icon: <Clock className="w-4 h-4 text-amber-400" />,
      title: '4 AM Sunrise Pickup',
      desc: 'Never miss Tiger Hill dawn',
    },
    {
      icon: <Compass className="w-4 h-4 text-sky-400" />,
      title: 'Sikkim & Mirik NOC',
      desc: 'Complete commercial permits',
    },
  ];

  return (
    <section id="about" className="py-10 sm:py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#0B1526] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-14 shadow-2xl border border-slate-800 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="space-y-1.5 sm:space-y-2">
                <span className="text-[10px] sm:text-[11px] font-bold text-emerald-400 uppercase tracking-widest block font-['Plus_Jakarta_Sans']">
                  WHO WE ARE • DARJEELING
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
                  About <span className="text-[#F97316]">DARJEELING SUNRISE</span>
                </h2>
                <div className="text-xs font-semibold text-emerald-300 flex items-center gap-1.5 pt-0.5 truncate">
                  <MapPin className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
                  <span className="truncate">19, HD Lama Rd, Chauk Bazaar, Darjeeling</span>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
                Darjeeling's premier motorcycle and scooter agency located at Chauk Bazaar. We offer
                mountain-ready Royal Enfields and automatic scooters with zero security deposit,
                instant digital Aadhaar KYC, and 4:00 AM Tiger Hill sunrise pickup.
              </p>

              {/* 2x2 Feature Highlights (Compact on mobile, replaces heavy walls of text) */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="p-2.5 sm:p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2 sm:gap-2.5"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-bold text-white truncate">
                        {item.title}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-slate-400 truncate">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action row */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={onExploreFleet}
                  className="bg-white hover:bg-slate-100 text-slate-900 px-5 sm:px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow flex items-center gap-2 cursor-pointer active:scale-95 group"
                >
                  <span>EXPLORE BIKES</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </motion.button>

                <a
                  href={`tel:${DARJEELING_CONTACT.phoneClean}`}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 py-2 px-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {DARJEELING_CONTACT.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Visual: BIKE IMAGE */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/11] border border-slate-700/80 shadow-2xl group">
                <img
                  src="/src/assets/images/darjeeling_mountain_biking_1790533247961.jpg"
                  alt="Darjeeling Sunrise Tours and Trek Mountain Bikes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                {/* Top Right Badge */}
                <div className="absolute top-3.5 right-3.5 bg-amber-400 text-slate-950 font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  <span>TOP RATED TOUR OPERATOR</span>
                </div>

                {/* Bottom Badge: 35,000+ Successful trips */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:right-auto bg-black/80 backdrop-blur-md border border-white/10 px-3.5 py-2 rounded-xl text-white flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-[#F97316] flex items-center justify-center text-white shrink-0 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold text-white">35,000+ Rides Guided</div>
                    <div className="text-[10px] text-slate-300 truncate">
                      Chauk Bazaar, Darjeeling Mall & Tiger Hill
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
