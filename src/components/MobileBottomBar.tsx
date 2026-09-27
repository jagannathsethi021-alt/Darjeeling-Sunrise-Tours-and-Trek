import React from 'react';
import { Phone, Bike, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { DARJEELING_CONTACT } from '../data/mockData';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
  onOpenFleet: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  onOpenBooking,
  onOpenFleet,
}) => {
  return (
    <motion.aside
      aria-label="Quick Action Bar"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 shadow-[0_-8px_25px_rgba(0,0,0,0.08)] px-3 pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Direct Call Desk */}
        <a
          href={`tel:${DARJEELING_CONTACT.phoneClean}`}
          className="flex flex-col items-center justify-center min-w-[68px] h-12 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors active:scale-95 text-center"
        >
          <Phone className="w-4 h-4 text-[#064E3B] mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">Call Desk</span>
        </a>

        {/* View Fleet / Hubs */}
        <button
          onClick={onOpenFleet}
          className="flex flex-col items-center justify-center min-w-[68px] h-12 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors active:scale-95 text-center cursor-pointer"
        >
          <Bike className="w-4 h-4 text-[#F97316] mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">Bikes</span>
        </button>

        {/* Primary Instant Booking CTA */}
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={onOpenBooking}
          className="flex-1 h-12 rounded-xl bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white px-3.5 flex items-center justify-between shadow-lg shadow-orange-500/25 active:shadow-sm cursor-pointer"
        >
          <div className="text-left">
            <div className="text-xs font-black tracking-wide uppercase flex items-center gap-1">
              <span>Rent Bike Now</span>
              <Sparkles className="w-3 h-3 text-amber-200" />
            </div>
            <div className="text-[10px] text-orange-100 font-medium">₹0 Deposit · Chauk Bazaar</div>
          </div>
          <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center text-white font-bold text-xs">
            →
          </div>
        </motion.button>
      </div>
    </motion.aside>
  );
};
