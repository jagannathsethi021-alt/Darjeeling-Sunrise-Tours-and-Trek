import React, { useState } from 'react';
import { X, CheckCircle2, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';
import { DARJEELING_CONTACT } from '../data/mockData';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  // TWO-WHEELERS ONLY (NO CARS)
  const [vehicleType, setVehicleType] = useState<'scooter' | 'bike' | 'cruiser' | 'tourer'>('cruiser');
  const [rentedDays, setRentedDays] = useState<number>(20);

  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const rateConfig = {
    scooter: { name: 'Hill Scooter (Activa / TVS / Ather)', daily: 450 },
    bike: { name: 'Commuter Mountain Bike (125cc-160cc)', daily: 650 },
    cruiser: { name: 'Royal Enfield Cruiser (Hunter / Classic 350)', daily: 800 },
    tourer: { name: 'Adventure Tourer (Himalayan 450 / Scram)', daily: 1300 },
  };

  const daily = rateConfig[vehicleType].daily;
  const grossMonthly = daily * rentedDays;
  const netTakeHome = Math.round(grossMonthly * 0.85); // 85% payout to bike owner
  const yearlyEstimate = netTakeHome * 12;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-6">
        {/* Header */}
        <div className="bg-[#052E16] text-white p-5 sm:p-6 flex items-center justify-between border-b border-emerald-900">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold font-['Plus_Jakarta_Sans']">
                Partner with Darjeeling Sunrise
              </span>
              <span className="bg-amber-400 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Host Program
              </span>
            </div>
            <p className="text-xs text-emerald-200 mt-0.5">
              Attach your bike or scooter at 19, HD Lama Rd, Chauk Bazaar for passive monthly revenue
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-emerald-900/80 flex items-center justify-center text-emerald-200 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                Partner Request Received!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{name}</span>! Our team at
                19, HD Lama Rd, Chauk Bazaar will contact you at{' '}
                <span className="font-semibold text-slate-900">{phone}</span> within 2 hours to inspect
                the two-wheeler and activate monthly payouts.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="bg-[#F97316] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Earnings Calculator */}
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 font-['Plus_Jakarta_Sans']">
                    <TrendingUp className="w-4 h-4 text-[#F97316]" />
                    <span>Monthly Host Earning Estimator</span>
                  </h4>
                  <span className="text-[11px] text-emerald-700 font-semibold">85% Revenue Share</span>
                </div>

                {/* Two-Wheeler Type Selection */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-slate-600">Select Two-Wheeler Category</label>
                  <select
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value as any)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  >
                    <option value="scooter">Hill Scooter (Activa / TVS / Ather 450X)</option>
                    <option value="bike">Commuter Mountain Bike (Pulsar / FZ / Apache)</option>
                    <option value="cruiser">Royal Enfield Cruiser (Hunter / Classic 350)</option>
                    <option value="tourer">Adventure Tourer (Himalayan 450 / Scram 411)</option>
                  </select>
                </div>

                {/* Days Rented Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-600 font-medium">Estimated Days Rented per Month:</span>
                    <span className="font-bold text-[#F97316]">{rentedDays} Days</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="28"
                    value={rentedDays}
                    onChange={(e) => setRentedDays(Number(e.target.value))}
                    className="w-full accent-[#F97316] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>5 Days (Part-time)</span>
                    <span>20 Days (Avg in Season)</span>
                    <span>28 Days (Full-time)</span>
                  </div>
                </div>

                {/* Earning Calculation Result Box */}
                <div className="bg-[#052E16] text-white rounded-xl p-4 flex items-center justify-between border border-emerald-800">
                  <div>
                    <div className="text-[10px] text-emerald-300 uppercase tracking-wider">
                      Estimated Take-Home Payout
                    </div>
                    <div className="text-2xl font-extrabold text-amber-300 font-['Plus_Jakarta_Sans']">
                      ₹{netTakeHome.toLocaleString('en-IN')}{' '}
                      <span className="text-xs font-normal text-emerald-100">/ month</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-emerald-300">Yearly Estimate</div>
                    <div className="text-sm font-bold text-emerald-200">
                      ₹{yearlyEstimate.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Host Registration Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-['Plus_Jakarta_Sans']">
                  List Your Bike in Darjeeling
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-600">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pemba Sherpa"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-600">Phone Number (WhatsApp)</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98320 12345"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-600">Bike Model & Year</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Royal Enfield Hunter 350 (2023)"
                      value={vehicleModel}
                      onChange={(e) => setVehicleModel(e.target.value)}
                      className="w-full border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-600">Vehicle Registration No.</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. WB-74-AX-8910"
                      value={regNumber}
                      onChange={(e) => setRegNumber(e.target.value)}
                      className="w-full border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-800 space-y-1">
                  <div className="font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Darjeeling Sunrise Host Protection</span>
                  </div>
                  <p className="text-[11px] text-emerald-700">
                    Free telematics GPS tracking installed. Only digital KYC verified tourists can rent.
                    Full comprehensive insurance coverage. Direct office at 19, HD Lama Rd.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>Submit Bike for Fast Listing</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
