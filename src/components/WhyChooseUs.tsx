import React from 'react';
import { Bike, Wrench, HardHat, Headphones, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { DARJEELING_CONTACT } from '../data/mockData';

interface WhyChooseUsProps {
  onLearnMore?: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onLearnMore }) => {
  const features = [
    {
      icon: <Bike className="w-5 h-5 text-amber-500" />,
      title: 'Mountain-Tuned Fleet',
      description:
        'Every Royal Enfield and scooter is tuned specifically for steep Darjeeling gradients and hairpin turns.',
      highlight: 'Steep incline power',
    },
    {
      icon: <HardHat className="w-5 h-5 text-emerald-600" />,
      title: '2 Free ISI Helmets',
      description:
        'Sanitized helmets for rider and pillion, bungee cords, and hill puncture kits provided with every rental.',
      highlight: 'Zero extra charge',
    },
    {
      icon: <Wrench className="w-5 h-5 text-[#F97316]" />,
      title: '4 AM Sunrise Pickup',
      description:
        'Early morning key collection at 19, HD Lama Rd or free hotel handover so you never miss Tiger Hill.',
      highlight: 'Dawn ready',
    },
    {
      icon: <Headphones className="w-5 h-5 text-sky-600" />,
      title: '24/7 Road & Permits',
      description:
        `Direct helpline support at ${DARJEELING_CONTACT.phone} with emergency roadside rescue and free Sikkim NOC.`,
      highlight: 'Darjeeling local desk',
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="text-[10px] sm:text-[11px] font-bold text-[#F97316] uppercase tracking-widest mb-1.5 font-['Plus_Jakarta_Sans']">
            THE DARJEELING SUNRISE ADVANTAGE
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-['Plus_Jakarta_Sans']">
            Why Rent With Us In Darjeeling
          </h2>
        </div>

        {/* 2x2 on Mobile, 4-col on Desktop - Crisp & Scannable */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-4 sm:p-6 hover:shadow-lg hover:border-orange-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/60 shadow-sm flex items-center justify-center">
                    {feat.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-100">
                    {feat.highlight}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0F172A] mb-1.5 font-['Plus_Jakarta_Sans']">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {feat.description}
                </p>
              </div>

              <div className="pt-3 mt-2 border-t border-slate-100">
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#F97316] hover:text-[#EA580C] transition-colors"
                >
                  <span>Learn process</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
