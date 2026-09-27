import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { DARJEELING_CONTACT } from '../data/mockData';

interface HostPartnerBannerProps {
  onOpenPartnerModal: () => void;
}

export const HostPartnerBanner: React.FC<HostPartnerBannerProps> = ({ onOpenPartnerModal }) => {
  return (
    <section className="py-10 sm:py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#064E3B] text-white p-5 sm:p-10 lg:p-14 border border-emerald-800 shadow-2xl"
        >
          {/* Background image subtle overlay */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <img
              src="/assets/images/darjeeling_mountain_biking_1790533247961.jpg"
              alt="Darjeeling Mountain Background"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="relative z-10 max-w-3xl space-y-4 sm:space-y-6">
            {/* Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-amber-300">
              <span>PARTNER WITH DARJEELING SUNRISE</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Plus_Jakarta_Sans']">
              List Your Bike & <span className="text-[#F97316]">Earn Every Month.</span>
            </h2>

            {/* Description */}
            <p className="text-emerald-100 text-xs sm:text-base leading-relaxed max-w-2xl">
              Attach your Royal Enfield or scooter to our fleet at 19, HD Lama Rd. Earn steady monthly
              income with verified tourists and full insurance coverage.
            </p>

            {/* 3 Metric Badges */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 pt-1 max-w-md">
              <div className="bg-black/20 border border-white/10 rounded-xl p-2.5 sm:p-3 text-left">
                <div className="text-base sm:text-xl font-extrabold text-amber-300">₹22K+</div>
                <div className="text-[10px] text-emerald-200">Avg Monthly Earning</div>
              </div>

              <div className="bg-black/20 border border-white/10 rounded-xl p-2.5 sm:p-3 text-left">
                <div className="text-base sm:text-xl font-extrabold text-white">Chauk Bazaar</div>
                <div className="text-[10px] text-emerald-200">Main Office Hub</div>
              </div>

              <div className="bg-black/20 border border-white/10 rounded-xl p-2.5 sm:p-3 text-left">
                <div className="text-base sm:text-xl font-extrabold text-emerald-300">100%</div>
                <div className="text-[10px] text-emerald-200">Insured & Tracked</div>
              </div>
            </div>

            {/* CTA row */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={onOpenPartnerModal}
                className="bg-[#F97316] hover:bg-[#EA580C] text-white px-5 sm:px-7 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-lg flex items-center gap-2 cursor-pointer group"
              >
                <span>CALCULATE HOST EARNINGS</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <div className="flex items-center gap-1.5 text-xs text-emerald-200 font-medium py-1">
                <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Call {DARJEELING_CONTACT.phone}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
