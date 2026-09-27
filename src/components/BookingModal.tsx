import React, { useState } from 'react';
import { Vehicle, DARJEELING_HUBS, VEHICLES, DARJEELING_CONTACT } from '../data/mockData';
import {
  X,
  Calendar,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Phone,
  Sparkles,
  ArrowRight,
  Download,
  HardHat,
  Mountain,
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVehicle?: Vehicle | null;
  initialHub?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialVehicle,
  initialHub = 'all',
}) => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>(
    initialVehicle || VEHICLES[0]
  );
  const [selectedHub, setSelectedHub] = useState<string>(
    initialHub !== 'all' ? initialHub : 'chauk-bazaar'
  );
  const [deliveryMode, setDeliveryMode] = useState<'hub' | 'doorstep'>('hub');
  const [doorstepAddress, setDoorstepAddress] = useState('');
  const [isEarlyTigerHill, setIsEarlyTigerHill] = useState(false);

  // Trip Dates
  const [startDate, setStartDate] = useState('2026-09-28');
  const [startTime, setStartTime] = useState('09:00');
  const [endDate, setEndDate] = useState('2026-09-29');
  const [endTime, setEndTime] = useState('18:00');

  // KYC Details
  const [riderName, setRiderName] = useState('');
  const [riderPhone, setRiderPhone] = useState('');
  const [drivingLicense, setDrivingLicense] = useState('');
  const [isKycVerified, setIsKycVerified] = useState(false);
  const [isVerifyingKyc, setIsVerifyingKyc] = useState(false);
  const [kycError, setKycError] = useState('');
  const [voucherSaved, setVoucherSaved] = useState(false);

  // Add-ons
  const [includeDamageProtection, setIncludeDamageProtection] = useState(true);

  // Stepper: 1: Details & Bike, 2: KYC & Addons, 3: Confirmation Ticket
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [bookingRef, setBookingRef] = useState('');

  // Sync initialVehicle when modal opens
  React.useEffect(() => {
    if (initialVehicle) {
      setSelectedVehicle(initialVehicle);
    }
  }, [initialVehicle]);

  if (!isOpen) return null;

  // Calculate rental duration in days (minimum 1 day)
  const startMs = new Date(`${startDate}T${startTime}`).getTime() || Date.now();
  const endMs =
    new Date(`${endDate}T${endTime}`).getTime() || Date.now() + 86400000;
  const hours = Math.max(24, Math.round((endMs - startMs) / (1000 * 60 * 60)));
  const days = Math.max(1, Math.ceil(hours / 24));

  // Pricing breakdown
  const baseRate = selectedVehicle.pricePerDay * days;
  const doorstepFee = deliveryMode === 'doorstep' ? 149 : 0;
  const damageProtectionFee = includeDamageProtection ? 99 : 0;
  const subtotal = baseRate + doorstepFee + damageProtectionFee;
  const gst = Math.round(subtotal * 0.05);
  const totalAmount = subtotal + gst;

  const currentHubObj =
    DARJEELING_HUBS.find((h) => h.id === selectedHub) || DARJEELING_HUBS[1];

  const handleSimulateKyc = (e: React.FormEvent) => {
    e.preventDefault();
    if (!riderName || !riderPhone || !drivingLicense) {
      setKycError('Please fill in your Name, Phone Number, and Driving License number.');
      return;
    }
    setKycError('');
    setIsVerifyingKyc(true);
    setTimeout(() => {
      setIsVerifyingKyc(false);
      setIsKycVerified(true);
    }, 1000);
  };

  const handleConfirmBooking = () => {
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    setBookingRef(`DS-DARJ-${randomCode}`);
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    setIsKycVerified(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden my-6">
        {/* Modal Header */}
        <div className="bg-[#052E16] text-white p-5 sm:p-6 flex items-center justify-between border-b border-emerald-900">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold font-['Plus_Jakarta_Sans']">
                Darjeeling Sunrise Bike Reservation
              </span>
              <span className="bg-amber-400 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                ₹0 Deposit
              </span>
            </div>
            <p className="text-xs text-emerald-200 mt-0.5">
              19, HD Lama Rd, Chauk Bazaar, Darjeeling • 2 Free ISI Helmets Included
            </p>
          </div>

          <button
            onClick={handleReset}
            className="w-8 h-8 rounded-full bg-emerald-900/80 flex items-center justify-center text-emerald-200 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper Progress */}
        <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center justify-between text-xs font-semibold">
          <div
            className={`flex items-center gap-2 ${
              step >= 1 ? 'text-[#F97316]' : 'text-slate-400'
            }`}
          >
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                step >= 1 ? 'bg-[#F97316] text-white' : 'bg-slate-200 text-slate-600'
              }`}
            >
              1
            </span>
            <span>Bike & Dates</span>
          </div>

          <div className="w-8 sm:w-16 h-0.5 bg-slate-200" />

          <div
            className={`flex items-center gap-2 ${
              step >= 2 ? 'text-[#F97316]' : 'text-slate-400'
            }`}
          >
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                step >= 2 ? 'bg-[#F97316] text-white' : 'bg-slate-200 text-slate-600'
              }`}
            >
              2
            </span>
            <span>Instant Digital KYC</span>
          </div>

          <div className="w-8 sm:w-16 h-0.5 bg-slate-200" />

          <div
            className={`flex items-center gap-2 ${
              step === 3 ? 'text-emerald-600' : 'text-slate-400'
            }`}
          >
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                step === 3 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'
              }`}
            >
              3
            </span>
            <span>Voucher & Key PIN</span>
          </div>
        </div>

        {/* Step 1: Bike Selection & Trip Dates */}
        {step === 1 && (
          <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
            {/* Selected Bike Card */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4">
              <div className="w-full sm:w-36 h-24 rounded-xl overflow-hidden bg-slate-200 shrink-0">
                <img
                  src={selectedVehicle.imageUrl}
                  alt={selectedVehicle.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0 text-center sm:text-left">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  {selectedVehicle.brand} • {selectedVehicle.categoryLabel}
                </div>
                <h4 className="text-base font-bold text-slate-900 truncate">
                  {selectedVehicle.name}
                </h4>
                <div className="text-xs text-slate-500 mt-1 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="bg-amber-100 text-amber-800 font-semibold px-2 py-0.5 rounded text-[10px]">
                    {selectedVehicle.fuelType}
                  </span>
                  <span>•</span>
                  <span>{selectedVehicle.specs.transmission || 'Manual'}</span>
                  <span>•</span>
                  <span>{selectedVehicle.specs.engine || selectedVehicle.specs.range}</span>
                  <span>•</span>
                  <span className="text-emerald-700 font-semibold">2 Free Helmets</span>
                </div>
              </div>

              <div className="text-center sm:text-right shrink-0">
                <div className="text-xl font-extrabold text-[#F97316]">
                  ₹{selectedVehicle.pricePerDay}
                </div>
                <div className="text-[10px] text-slate-400">per day</div>
              </div>
            </div>

            {/* Change Bike Selector (Two-Wheelers Only) */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">
                Choose Two-Wheeler Model
              </label>
              <select
                value={selectedVehicle.id}
                onChange={(e) => {
                  const v = VEHICLES.find((item) => item.id === e.target.value);
                  if (v) setSelectedVehicle(v);
                }}
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {VEHICLES.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.name} — ₹{v.pricePerDay}/day ({v.categoryLabel})
                  </option>
                ))}
              </select>
            </div>

            {/* Delivery Mode Toggle */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700">
                Pickup Preference in Darjeeling
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDeliveryMode('hub')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    deliveryMode === 'hub'
                      ? 'border-[#F97316] bg-orange-50/60 ring-2 ring-orange-500/20'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">
                    Pickup at Chauk Bazaar Hub
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    19, HD Lama Rd • Instant handover
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setDeliveryMode('doorstep')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    deliveryMode === 'doorstep'
                      ? 'border-[#F97316] bg-orange-50/60 ring-2 ring-orange-500/20'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">
                    Hotel / Mall Road Delivery
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Any Hotel in Darjeeling • ₹149
                  </div>
                </button>
              </div>
            </div>

            {/* Station or Address Selector */}
            {deliveryMode === 'hub' ? (
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  Select Darjeeling Station
                </label>
                <select
                  value={selectedHub}
                  onChange={(e) => setSelectedHub(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {DARJEELING_HUBS.filter((h) => h.id !== 'all').map((hub) => (
                    <option key={hub.id} value={hub.id}>
                      {hub.name}
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-slate-500 pl-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{currentHubObj.address}</span>
                </p>
              </div>
            ) : (
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  Your Hotel or Homestay in Darjeeling
                </label>
                <input
                  type="text"
                  placeholder="e.g. Elgin Hotel / Windamere / Mall Road Homestay / Ghum"
                  value={doorstepAddress}
                  onChange={(e) => setDoorstepAddress(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            )}

            {/* Tiger Hill 4 AM Sunrise Option */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Mountain className="w-5 h-5 text-amber-600 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Are you riding to Tiger Hill for Sunrise?
                  </div>
                  <div className="text-[11px] text-slate-500">
                    We arrange 3:45 AM pre-dawn key handover or free overnight hotel parking
                  </div>
                </div>
              </div>
              <input
                type="checkbox"
                checked={isEarlyTigerHill}
                onChange={(e) => setIsEarlyTigerHill(e.target.checked)}
                className="w-4 h-4 text-[#F97316] rounded"
              />
            </div>

            {/* Dates & Times */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  Pickup Date & Time
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="border border-slate-300 rounded-xl p-2 text-xs text-slate-800 focus:outline-none"
                  />
                  <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="border border-slate-300 rounded-xl p-2 text-xs text-slate-800 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  Drop-off Date & Time
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="border border-slate-300 rounded-xl p-2 text-xs text-slate-800 focus:outline-none"
                  />
                  <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="border border-slate-300 rounded-xl p-2 text-xs text-slate-800 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Price Estimate Summary */}
            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900">
                  Rental Period: {days} {days === 1 ? 'Day' : 'Days'} • 2 Helmets Included Free
                </div>
                <div className="text-[11px] text-emerald-800 font-semibold">
                  ₹0 Security Deposit Required
                </div>
              </div>
              <div className="text-right">
                <div className="text-base font-extrabold text-[#F97316]">
                  ₹{subtotal + gst}
                </div>
                <div className="text-[10px] text-slate-500">Includes all hill road taxes</div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setStep(2)}
                className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Proceed to Digital Verification</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Instant KYC */}
        {step === 2 && (
          <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-emerald-700" />
                  <h4 className="text-sm font-bold text-slate-900">
                    Rider Digital Verification (Darjeeling Sunrise)
                  </h4>
                </div>
                {isKycVerified ? (
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    VERIFIED
                  </span>
                ) : (
                  <span className="text-[11px] text-slate-400">Zero paperwork</span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-600">
                    Full Legal Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={riderName}
                    onChange={(e) => setRiderName(e.target.value)}
                    className="w-full border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-600">
                    Phone (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={riderPhone}
                    onChange={(e) => setRiderPhone(e.target.value)}
                    className="w-full border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-600">
                    Driving License No.
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="WB-74-202200192"
                    value={drivingLicense}
                    onChange={(e) => setDrivingLicense(e.target.value)}
                    className="w-full border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </div>
              </div>

              {!isKycVerified && (
                <div className="pt-1 space-y-2">
                  {kycError && (
                    <div className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg p-2 font-medium">
                      {kycError}
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={handleSimulateKyc}
                    disabled={isVerifyingKyc}
                    className="w-full bg-[#052E16] hover:bg-[#064E3B] text-white py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isVerifyingKyc ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Validating with Parivahan DL Database...
                      </span>
                    ) : (
                      <>
                        <ShieldCheck className="w-4 h-4 text-amber-400" />
                        <span>Instant 1-Click Verification</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              {isKycVerified && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    KYC Verified for {riderName} ({drivingLicense}). Zero Security Deposit unlocked!
                  </span>
                </div>
              )}
            </div>

            {/* Included Equipment */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Included Mountain Gear (100% Free)
              </h4>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>2 Sanitized ISI Helmets (Rider & Pillion)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Mobile Phone Holder with USB Quick Charger</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Bungee Luggage Cords & Emergency Mountain Puncture Kit</span>
                </div>
              </div>
            </div>

            {/* Fare Breakdown */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>
                  Base Rental ({selectedVehicle.name} × {days} days)
                </span>
                <span className="font-semibold text-slate-900">₹{baseRate}</span>
              </div>

              {deliveryMode === 'doorstep' && (
                <div className="flex justify-between text-slate-600">
                  <span>Hotel Delivery in Darjeeling</span>
                  <span className="font-semibold text-slate-900">₹149</span>
                </div>
              )}

              <div className="flex justify-between text-emerald-700 font-semibold">
                <span>Refundable Security Deposit</span>
                <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded text-[11px]">
                  ₹0 (Zero Deposit)
                </span>
              </div>

              <div className="flex justify-between text-slate-600">
                <span>Taxes & GST (5%)</span>
                <span className="font-semibold text-slate-900">₹{gst}</span>
              </div>

              <div className="pt-2 border-t border-slate-200 flex justify-between text-sm font-extrabold text-slate-900">
                <span>Total Payable Amount</span>
                <span className="text-[#F97316]">₹{totalAmount}</span>
              </div>
            </div>

            {/* Stepper Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 py-3 rounded-full text-xs font-bold uppercase transition-colors"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleConfirmBooking}
                className="w-2/3 bg-[#F97316] hover:bg-[#EA580C] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Confirm & Lock Bike</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Confirmed Voucher Ticket */}
        {step === 3 && (
          <div className="p-6 sm:p-8 space-y-6 text-center max-h-[75vh] overflow-y-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="bg-emerald-50 text-emerald-700 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                Booking Confirmed & Bike Reserved
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-2 font-['Plus_Jakarta_Sans']">
                Your Mountain Ride is Ready!
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Collect keys at 19, HD Lama Rd, Chauk Bazaar, Darjeeling.
              </p>
            </div>

            {/* Ticket Card */}
            <div className="bg-[#052E16] text-white rounded-2xl p-6 text-left space-y-4 max-w-md mx-auto shadow-xl border border-emerald-800">
              <div className="flex justify-between items-center border-b border-emerald-800 pb-3">
                <div>
                  <div className="text-[10px] text-emerald-300 uppercase">Booking Reference</div>
                  <div className="text-lg font-extrabold text-amber-300 tracking-wider">
                    {bookingRef}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-emerald-300 uppercase">Total Amount</div>
                  <div className="text-base font-extrabold text-white">₹{totalAmount}</div>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-emerald-200">Bike Model:</span>
                  <span className="font-semibold text-white">{selectedVehicle.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-emerald-200">Rider:</span>
                  <span className="font-semibold text-white">{riderName || 'Verified Rider'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-emerald-200">Station / Address:</span>
                  <span className="font-semibold text-amber-300 text-right">
                    {deliveryMode === 'doorstep'
                      ? doorstepAddress || 'Hotel in Darjeeling'
                      : '19, HD Lama Rd, Chauk Bazaar'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-emerald-200">Helmets:</span>
                  <span className="font-semibold text-white">2 ISI Helmets Included</span>
                </div>
              </div>

              <div className="bg-[#022c22] rounded-xl p-3 border border-emerald-800/80 text-[11px] text-emerald-200 space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Key Handover & Helpline</span>
                </div>
                <p>
                  Visit our office at 19, HD Lama Rd, Chauk Bazaar or call {DARJEELING_CONTACT.phone}.
                  {isEarlyTigerHill && ' 4:00 AM Dawn pickup confirmed!'}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  setVoucherSaved(true);
                  setTimeout(() => setVoucherSaved(false), 3000);
                }}
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{voucherSaved ? '✓ Voucher Saved' : 'Save Voucher'}</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
