import React, { useState } from 'react';
import { VEHICLES, Vehicle, DARJEELING_CONTACT } from '../data/mockData';
import { X, Search, HardHat, Gauge, Fuel } from 'lucide-react';

interface FleetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectVehicle: (vehicle: Vehicle) => void;
  initialCategory?: string;
}

export const FleetModal: React.FC<FleetModalProps> = ({
  isOpen,
  onClose,
  onSelectVehicle,
  initialCategory = 'all',
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState<string>(initialCategory);
  const [fuelFilter, setFuelFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc'>('recommended');

  if (!isOpen) return null;

  const filteredVehicles = VEHICLES.filter((vehicle) => {
    const matchesSearch =
      vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === 'all'
        ? true
        : category === 'enfield'
        ? vehicle.brand.toLowerCase().includes('enfield')
        : category === 'scooters'
        ? vehicle.category === 'scooters'
        : category === 'tourers'
        ? vehicle.category === 'tourers' || vehicle.category === 'sport'
        : vehicle.category === category;

    const matchesFuel =
      fuelFilter === 'all'
        ? true
        : vehicle.fuelType.toLowerCase() === fuelFilter.toLowerCase();

    return matchesSearch && matchesCategory && matchesFuel;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.pricePerDay - b.pricePerDay;
    if (sortBy === 'price-desc') return b.pricePerDay - a.pricePerDay;
    return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white rounded-3xl max-w-6xl w-full shadow-2xl border border-slate-200 overflow-hidden my-6 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#052E16] text-white p-5 sm:p-6 flex items-center justify-between border-b border-emerald-900 shrink-0">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-['Plus_Jakarta_Sans']">
              Darjeeling Two-Wheeler Fleet Catalog
            </h2>
            <p className="text-xs text-emerald-200 mt-0.5">
              19, HD Lama Rd, Chauk Bazaar • 250+ hill-inspected bikes & scooters • Call: {DARJEELING_CONTACT.phone}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-emerald-900/80 flex items-center justify-center text-emerald-200 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar */}
        <div className="bg-[#F8FAFC] p-4 border-b border-slate-200 space-y-3 shrink-0">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="sm:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by bike model (e.g. Himalayan, Hunter, Classic, Activa, Duke)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>

            {/* Fuel Filter */}
            <div className="sm:col-span-3">
              <select
                value={fuelFilter}
                onChange={(e) => setFuelFilter(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 focus:outline-none"
              >
                <option value="all">All Fuel Types</option>
                <option value="petrol">Petrol Bikes</option>
                <option value="electric">Electric (EV)</option>
              </select>
            </div>

            {/* Sort Filter */}
            <div className="sm:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 focus:outline-none"
              >
                <option value="recommended">Featured / Recommended</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Tabs (Two-Wheelers Only) */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {[
              { id: 'all', label: 'All Two-Wheelers' },
              { id: 'enfield', label: 'Royal Enfield Only' },
              { id: 'scooters', label: 'Hill Scooters & EVs' },
              { id: 'tourers', label: 'Adventure Tourers & Sport' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCategory(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                  category === tab.id
                    ? 'bg-[#F97316] text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle Results Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {filteredVehicles.length === 0 ? (
            <div className="text-center py-16 text-slate-500">
              <p className="text-sm font-semibold">No two-wheelers found matching your search.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setCategory('all');
                  setFuelFilter('all');
                }}
                className="mt-3 text-xs text-[#F97316] font-bold underline cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                      <img
                        src={vehicle.imageUrl}
                        alt={vehicle.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-slate-900/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                          {vehicle.tag}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="bg-amber-500 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded">
                          {vehicle.fuelType}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <span className="bg-black/90 text-white text-xs font-extrabold px-2.5 py-1 rounded-md">
                          ₹{vehicle.pricePerDay}{' '}
                          <span className="text-[10px] font-normal text-slate-300">/ day</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-4 space-y-2">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {vehicle.brand} • {vehicle.categoryLabel}
                      </div>
                      <h4 className="text-base font-bold text-slate-900 font-['Plus_Jakarta_Sans']">
                        {vehicle.name}
                      </h4>

                      <div className="space-y-1 pt-2 border-t border-slate-100">
                        {vehicle.features.slice(0, 2).map((feat, i) => (
                          <div key={i} className="text-[11px] text-slate-600 flex items-center gap-1.5 truncate">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <button
                      onClick={() => {
                        onSelectVehicle(vehicle);
                        onClose();
                      }}
                      className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer active:scale-95"
                    >
                      Book This Two-Wheeler
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
