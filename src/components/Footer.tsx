import React, { useState } from 'react';
import { Heart, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { DARJEELING_CONTACT } from '../data/mockData';
import { Logo } from './Logo';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenFleet: () => void;
  onOpenPartnerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenFleet,
  onOpenPartnerModal,
}) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  const neighborhoods = [
    'Chauk Bazaar (19, HD Lama Rd)',
    'Darjeeling Mall Road',
    'Chowrasta Point',
    'Ghum Railway Station',
    'Batasia Loop',
    'Tiger Hill Sunrise Base',
    'Lebong Cart Road',
    'Happy Valley Tea Estate',
    'Mirik Lake Hub',
    'Kurseong Hub',
    'Kalimpong Hub',
    'Sandakphu Base (Manebhanjan)',
    'Singamari / HMI Point',
    'Jorethang / Sikkim Gateway',
  ];

  return (
    <footer className="bg-[#052E16] text-slate-300 text-xs border-t border-emerald-950 pb-24 md:pb-0">
      {/* Newsletter Strip */}
      <div className="border-b border-emerald-900/60 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight font-['Plus_Jakarta_Sans']">
              JOIN THE DARJEELING RIDER JOURNAL
            </h3>
            <p className="text-emerald-200/80 text-xs mt-0.5">
              Get Tiger Hill dawn weather updates, high-altitude road alerts, and exclusive bike coupons.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex-1 max-w-md">
            <div className="flex items-center gap-2 bg-[#022c22] border border-emerald-800 p-1.5 rounded-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-transparent text-xs text-white px-4 py-2 w-full focus:outline-none placeholder:text-emerald-400/60"
              />
              <button
                type="submit"
                className="bg-[#F97316] hover:bg-[#EA580C] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
              >
                {isSubscribed ? 'JOINED!' : 'SUBSCRIBE'}
              </button>
            </div>
            {isSubscribed && (
              <p className="text-amber-300 text-[11px] mt-2 flex items-center gap-1 pl-2 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>You're subscribed! We've sent the Tiger Hill Sunrise guide.</span>
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Address Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" variant="light" />

            <div className="space-y-2 pt-2 text-xs text-emerald-100">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Main Office & Fleet Station:</div>
                  <div className="text-slate-300">{DARJEELING_CONTACT.address}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="font-bold text-white">Helpline / Booking: </span>
                  <a
                    href={`tel:${DARJEELING_CONTACT.phoneClean}`}
                    className="font-extrabold text-amber-300 hover:text-white transition-colors"
                  >
                    {DARJEELING_CONTACT.phone}
                  </a>
                </div>
              </div>
            </div>

            <p className="text-emerald-200/70 text-xs leading-relaxed max-w-sm pt-1">
              Darjeeling's certified two-wheeler rental and trekking agency. Zero security deposit,
              2 free sanitized helmets, and early 4 AM pickup for Tiger Hill sunrise rides.
            </p>
          </div>

          {/* Vehicles (Two-Wheelers Only) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Plus_Jakarta_Sans']">
              Two-Wheelers
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button
                  onClick={onOpenFleet}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Royal Enfield Himalayan 450
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenFleet}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Royal Enfield Hunter 350
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenFleet}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Classic 350 Stealth Black
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenFleet}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Honda Activa 6G
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenFleet}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Ather 450X Mountain EV
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenFleet}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  KTM Duke 250 Alpine
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Plus_Jakarta_Sans']">
              Tours & Company
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">
                  About Our Agency
                </a>
              </li>
              <li>
                <a href="#routes" className="hover:text-amber-300 transition-colors">
                  Tiger Hill Sunrise Ride
                </a>
              </li>
              <li>
                <a href="#routes" className="hover:text-amber-300 transition-colors">
                  Sandakphu Ridge Expeditions
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenPartnerModal}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  List Your Bike (Host)
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-300 transition-colors">
                  FAQ & Hill Road Tips
                </a>
              </li>
              <li>
                <a
                  href={`tel:${DARJEELING_CONTACT.phoneClean}`}
                  className="hover:text-amber-300 transition-colors font-bold text-amber-300"
                >
                  Call {DARJEELING_CONTACT.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Plus_Jakarta_Sans']">
              Legal & Terms
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#faq" className="hover:text-amber-300 transition-colors">
                  Terms of Two-Wheeler Rental
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-300 transition-colors">
                  Zero Deposit Policy
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-300 transition-colors">
                  Tiger Hill 4 AM Guidelines
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-300 transition-colors">
                  Singalila & Sikkim Permits
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-300 transition-colors">
                  Cancellation Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Neighborhoods Directory */}
        <div className="mt-12 pt-8 border-t border-emerald-900/60 space-y-3">
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-emerald-200">
            <span>DARJEELING & NORTH BENGAL TWO-WHEELER HUBS</span>
            <span className="text-amber-400 font-bold">19, HD LAMA RD, CHAUK BAZAAR</span>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] text-emerald-200/80">
            {neighborhoods.map((n, idx) => (
              <span key={idx} className="hover:text-white transition-colors cursor-pointer">
                • {n}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-emerald-300">
          <div>
            © 2026 Darjeeling Sunrise Tours and Trek. 19, HD Lama Rd, Chauk Bazaar, Darjeeling 734101.
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <span className="flex items-center gap-1.5 text-amber-300 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Chauk Bazaar Desk Open
            </span>
            <span className="text-emerald-700">·</span>
            <a
              href={`tel:${DARJEELING_CONTACT.phoneClean}`}
              className="text-white hover:text-amber-300 font-bold"
            >
              📞 {DARJEELING_CONTACT.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
