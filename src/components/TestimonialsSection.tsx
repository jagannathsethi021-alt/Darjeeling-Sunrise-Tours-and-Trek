import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <div className="flex items-center justify-center gap-1 mb-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 fill-amber-500" />
            ))}
            <span className="text-[11px] sm:text-xs font-bold text-slate-700 ml-1.5 tracking-wider">
              4.9 / 5 FROM 3,200+ DARJEELING RIDERS
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-1.5 font-['Plus_Jakarta_Sans']">
            Loved by Mountain Riders
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm">
            Real stories from riders exploring Tiger Hill, Sandakphu, and Sikkim routes.
          </p>
        </div>

        {/* 3 Review Cards: Horizontal Snap on Mobile, 3-col on Desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-3.5 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-3 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-none">
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              whileHover={{ y: -3 }}
              className="min-w-[270px] sm:min-w-0 snap-center bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Stars + Google G */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-amber-500 fill-amber-500" />
                    ))}
                  </div>

                  <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[10px] text-slate-500">
                    G
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[#0F172A] mb-1.5 font-['Plus_Jakarta_Sans']">
                  {t.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>

              {/* Bottom Avatar Info */}
              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center gap-2.5">
                <div
                  className={`w-8 h-8 rounded-full ${t.avatarBg} flex items-center justify-center font-bold text-xs shrink-0`}
                >
                  {t.avatarText}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{t.name}</div>
                  <div className="text-[10px] text-slate-400">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
