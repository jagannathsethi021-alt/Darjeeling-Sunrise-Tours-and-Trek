import React from 'react';
import { RouteGuide } from '../data/mockData';
import { X, MapPin, Clock, Compass, ShieldAlert, CheckCircle, ArrowRight } from 'lucide-react';

interface RouteModalProps {
  route: RouteGuide | null;
  isOpen: boolean;
  onClose: () => void;
  onBookRideForRoute: () => void;
}

export const RouteModal: React.FC<RouteModalProps> = ({
  route,
  isOpen,
  onClose,
  onBookRideForRoute,
}) => {
  if (!isOpen || !route) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-6">
        {/* Visual Header */}
        <div className="relative h-48 sm:h-56 bg-slate-900 overflow-hidden">
          <img
            src={route.imageUrl}
            alt={route.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/90 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Title */}
          <div className="absolute bottom-4 left-6 right-6">
            {route.badge && (
              <span className="bg-amber-400 text-slate-950 font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded inline-block mb-2">
                {route.badge}
              </span>
            )}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              {route.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto text-xs sm:text-sm">
          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-[#F8FAFC] border border-slate-200 rounded-2xl p-4">
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Distance</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">{route.distance}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Drive Time</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">{route.time}</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-[10px] uppercase font-bold text-slate-400">Recommended</div>
              <div className="text-xs font-bold text-[#F97316] mt-0.5 truncate">
                {route.bestVehicle}
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans']">
              Route Overview & Road Guidance
            </h4>
            <p className="text-slate-600 leading-relaxed">{route.description}</p>
          </div>

          {/* Road Conditions */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-1">
            <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Mountain Terrain & Road Quality</span>
            </div>
            <p className="text-slate-600 text-xs">{route.roadCondition}</p>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans']">
              Key Scenic Stops & Viewpoints
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {route.highlights.map((spot, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{spot}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Permit Notice if any */}
          {route.permitRequired && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-amber-900">Sikkim Border Permit Guidelines</div>
                <div className="text-[11px] text-amber-800 mt-0.5">
                  {route.permitNote || 'All commercial self-drive papers & vehicle permit letters are provided gratis.'}
                </div>
              </div>
            </div>
          )}

          {/* Action CTA */}
          <div className="pt-2 space-y-2">
            <button
              onClick={() => {
                onClose();
                onBookRideForRoute();
              }}
              className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Book Two-Wheeler for this Route</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="text-center text-[11px] text-slate-500">
              Need custom trek or bike route guidance? Call our Darjeeling desk at 086373 62969
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
