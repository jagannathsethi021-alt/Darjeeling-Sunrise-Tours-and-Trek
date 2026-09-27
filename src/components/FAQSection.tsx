import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-12 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="text-[10px] sm:text-[11px] font-bold text-[#F97316] uppercase tracking-widest mb-1.5 font-['Plus_Jakarta_Sans']">
            HAVE QUESTIONS?
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-2 font-['Plus_Jakarta_Sans']">
            Frequently Asked <span className="text-amber-500">Questions</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Booking, security deposit, Tiger Hill permits, and mountain riding guidance.
          </p>
        </div>

        {/* Accordion List with Motion */}
        <div className="space-y-2.5 sm:space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            const isFirst = faq.id === 'faq-1';

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-200 overflow-hidden border ${
                  isOpen && isFirst
                    ? 'bg-[#F59E0B] text-slate-950 border-amber-500 shadow-md'
                    : isOpen
                    ? 'bg-slate-50 text-slate-900 border-slate-300 shadow-sm'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer"
                >
                  <span
                    className={`text-xs sm:text-sm font-bold tracking-tight uppercase font-['Plus_Jakarta_Sans'] ${
                      isOpen && isFirst ? 'text-slate-950' : 'text-slate-900'
                    }`}
                  >
                    {faq.question}
                  </span>

                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    } ${isOpen && isFirst ? 'bg-black/10 text-slate-950' : 'text-slate-400'}`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div
                        className={`px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm leading-relaxed ${
                          isFirst ? 'text-slate-950 font-medium' : 'text-slate-600'
                        }`}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
