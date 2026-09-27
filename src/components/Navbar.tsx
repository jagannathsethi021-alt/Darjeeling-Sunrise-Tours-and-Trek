import React, { useState } from 'react';
import { Phone, ChevronDown, Menu, X, MapPin, Bike, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DARJEELING_HUBS, DARJEELING_CONTACT } from '../data/mockData';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenFleet: () => void;
  onSelectHub: (hubId: string) => void;
  selectedHub: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenFleet,
  onSelectHub,
  selectedHub,
}) => {
  const [isHubDropdownOpen, setIsHubDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentHubName =
    DARJEELING_HUBS.find((h) => h.id === selectedHub)?.name.split(' (')[0] || 'Darjeeling Hub';

  return (
    <header className="w-full sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Announcement Bar - Optimized for Mobile & Desktop */}
      <div className="bg-[#064E3B] text-slate-100 text-xs py-1.5 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Mobile view: Compact, punchy status */}
          <div className="flex sm:hidden items-center justify-between w-full text-[11px]">
            <div className="flex items-center gap-1.5 font-semibold text-emerald-100 truncate">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
              <span className="truncate">Chauk Bazaar, Darjeeling • 0% Deposit</span>
            </div>
            <a
              href={`tel:${DARJEELING_CONTACT.phoneClean}`}
              className="text-amber-300 font-bold shrink-0 ml-2"
            >
              📞 {DARJEELING_CONTACT.phone}
            </a>
          </div>

          {/* Tablet & Desktop view */}
          <div className="hidden sm:flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
            <p className="font-medium tracking-wide">
              <span className="text-amber-300 font-bold uppercase tracking-wider">
                DARJEELING & NORTH BENGAL
              </span>{' '}
              <span className="text-emerald-300/70 mx-1.5">|</span>
              Zero security deposit & doorstep bike delivery • 19, HD Lama Rd, Chauk Bazaar
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-[11px] font-semibold text-emerald-200">
            <span>Daily 6:00 AM – 9:00 PM</span>
            <span>•</span>
            <a
              href={`tel:${DARJEELING_CONTACT.phoneClean}`}
              className="text-amber-300 hover:text-white font-bold transition-colors"
            >
              📞 {DARJEELING_CONTACT.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Zone with Darjeeling Sunrise Tours and Trek Logo */}
        <a href="#" className="flex items-center group py-1">
          <Logo size="sm" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
          <a href="#about" className="hover:text-[#F97316] transition-colors">
            About Us
          </a>
          <button
            onClick={() => onOpenFleet()}
            className="hover:text-[#F97316] transition-colors flex items-center gap-1 cursor-pointer font-semibold"
          >
            Bikes & Scooters
            <span className="text-[10px] bg-orange-100 text-[#EA580C] px-2 py-0.5 rounded-full font-bold">
              Fleet
            </span>
          </button>

          {/* Darjeeling Hub Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsHubDropdownOpen(!isHubDropdownOpen)}
              className="flex items-center gap-1.5 hover:text-[#F97316] transition-colors cursor-pointer py-1 font-semibold"
            >
              <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
              <span>{currentHubName}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isHubDropdownOpen ? 'rotate-180 text-[#F97316]' : 'text-slate-400'
                }`}
              />
            </button>

            {isHubDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsHubDropdownOpen(false)}
                />
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 z-20">
                  <div className="px-3 py-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider border-b border-slate-100 mb-1 flex items-center justify-between">
                    <span>Darjeeling Pickup Hubs</span>
                    <span className="text-[10px] text-slate-400 font-normal">7 Active</span>
                  </div>
                  {DARJEELING_HUBS.map((hub) => (
                    <button
                      key={hub.id}
                      onClick={() => {
                        onSelectHub(hub.id);
                        setIsHubDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs hover:bg-orange-50 hover:text-[#EA580C] transition-colors flex items-start gap-2 cursor-pointer ${
                        selectedHub === hub.id
                          ? 'bg-orange-50/80 text-[#EA580C] font-bold'
                          : 'text-slate-700'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5 mt-0.5 text-slate-400 shrink-0" />
                      <div>
                        <div className="font-semibold">{hub.name}</div>
                        <div className="text-[10px] text-slate-400 truncate">{hub.address}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <a href="#how-it-works" className="hover:text-[#F97316] transition-colors">
            How It Works
          </a>
          <a href="#routes" className="hover:text-[#F97316] transition-colors">
            Mountain Routes
          </a>
          <a href="#faq" className="hover:text-[#F97316] transition-colors">
            FAQ
          </a>
        </nav>

        {/* Right Action Zone (Desktop) */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`tel:${DARJEELING_CONTACT.phoneClean}`}
            className="flex items-center gap-2.5 text-xs font-semibold text-slate-800 hover:text-[#F97316] transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#064E3B] border border-emerald-200/60 flex items-center justify-center">
              <Phone className="w-3.5 h-3.5 text-[#064E3B]" />
            </div>
            <div className="text-left">
              <div className="text-[10px] text-slate-500 font-medium">Chauk Bazaar</div>
              <div className="font-extrabold text-xs text-[#0F172A]">{DARJEELING_CONTACT.phone}</div>
            </div>
          </a>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenBooking}
            className="bg-[#F97316] hover:bg-[#EA580C] text-white px-4 py-2.5 rounded-full text-xs font-extrabold tracking-wider uppercase transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            <span>RENT A BIKE</span>
            <span className="text-base leading-none">→</span>
          </motion.button>
        </div>

        {/* Mobile menu toggle & quick dial */}
        <div className="flex sm:hidden items-center gap-1.5">
          <a
            href={`tel:${DARJEELING_CONTACT.phoneClean}`}
            className="p-2 text-[#064E3B] bg-emerald-50 rounded-lg active:scale-95 transition-transform"
            aria-label="Call Helpline"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-3 overflow-hidden shadow-xl"
          >
            {/* Quick Hub Badge */}
            <div className="p-2.5 bg-slate-50 rounded-xl text-xs flex items-center justify-between text-slate-700">
              <div className="flex items-center gap-1.5 truncate">
                <MapPin className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
                <span className="font-bold text-slate-900 truncate">19, HD Lama Rd, Chauk Bazaar</span>
              </div>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full shrink-0">
                Open Daily
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenFleet();
                }}
                className="p-2.5 rounded-xl bg-orange-50 border border-orange-200 text-left cursor-pointer active:scale-95 transition-transform"
              >
                <div className="text-xs font-bold text-[#EA580C] flex items-center gap-1">
                  <Bike className="w-3.5 h-3.5" />
                  <span>View All Bikes</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">Himalayan, Hunter & Scooters</div>
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-left cursor-pointer active:scale-95 transition-transform"
              >
                <div className="text-xs font-bold text-emerald-800 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Rent Online</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">₹0 Security Deposit</div>
              </button>
            </div>

            <div className="divide-y divide-slate-100 text-sm font-semibold text-slate-700">
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2.5 px-1 hover:text-[#F97316]"
              >
                About Our Darjeeling Agency
              </a>
              <a
                href="#routes"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2.5 px-1 hover:text-[#F97316]"
              >
                Tiger Hill & Mountain Routes
              </a>
              <a
                href="#how-it-works"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2.5 px-1 hover:text-[#F97316]"
              >
                How Rental Works (4 Easy Steps)
              </a>
              <a
                href="#faq"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2.5 px-1 hover:text-[#F97316]"
              >
                FAQs & Road Guidelines
              </a>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <a
                href={`tel:${DARJEELING_CONTACT.phoneClean}`}
                className="flex-1 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call {DARJEELING_CONTACT.phone}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
