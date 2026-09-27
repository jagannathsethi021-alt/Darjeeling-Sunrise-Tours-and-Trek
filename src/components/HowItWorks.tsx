import React from 'react';
import { ShieldCheck, Zap, Key, Headphones, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: 1,
      title: 'Choose Your Bike',
      description:
        'Select your Royal Enfield, cruiser, or scooter tailored for hill terrain and high-altitude climbs.',
      badge: '100% HILL-TUNED',
      icon: <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />,
    },
    {
      num: 2,
      title: 'Digital 0% Deposit KYC',
      description:
        'Instant digital Aadhaar / Driving License verification. Zero security deposit required.',
      badge: 'ZERO DEPOSIT',
      icon: <Zap className="w-3.5 h-3.5 text-amber-500" />,
    },
    {
      num: 3,
      title: 'Pickup or Doorstep',
      description:
        'Collect keys at 19, HD Lama Rd, Chauk Bazaar or receive delivery at your Darjeeling hotel.',
      badge: '4 AM DAWN READY',
      icon: <Key className="w-3.5 h-3.5 text-amber-500" />,
    },
    {
      num: 4,
      title: 'Ride & Return',
      description:
        'Explore Tiger Hill, Mirik, and Sikkim with 2 free helmets and 24/7 mountain road support.',
      badge: '24/7 HILL RESCUE',
      icon: <Headphones className="w-3.5 h-3.5 text-amber-500" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-20 bg-[#F59E0B] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <div className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-black/70 mb-1 font-['Plus_Jakarta_Sans']">
            SIMPLE 4-STEP PROCESS
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight mb-2 font-['Plus_Jakarta_Sans']">
            HOW IT WORKS
          </h2>
          <p className="text-black/80 text-xs sm:text-base leading-relaxed">
            Fast, paperless, and smooth bike rentals in Darjeeling.
          </p>
        </div>

        {/* 4 Steps: Horizontal Snap on Mobile, 4-col on Desktop */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              whileHover={{ y: -4 }}
              className="min-w-[240px] sm:min-w-0 snap-center bg-white rounded-2xl p-5 sm:p-6 shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Black Circle Number with Step Connector */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-extrabold text-sm">
                    {step.num}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">Step {step.num}/4</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2 font-['Plus_Jakarta_Sans']">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Bottom Badge */}
              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center gap-1.5">
                {step.icon}
                <span className="text-[10px] font-extrabold text-slate-800 tracking-wider">
                  {step.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
