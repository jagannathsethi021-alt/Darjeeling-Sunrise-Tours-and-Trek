import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CuratedCategories } from './components/CuratedCategories';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TrendingRides } from './components/TrendingRides';
import { HowItWorks } from './components/HowItWorks';
import { PopularRoutes } from './components/PopularRoutes';
import { TestimonialsSection } from './components/TestimonialsSection';
import { HostPartnerBanner } from './components/HostPartnerBanner';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

// Modals
import { BookingModal } from './components/BookingModal';
import { FleetModal } from './components/FleetModal';
import { RouteModal } from './components/RouteModal';
import { PartnerModal } from './components/PartnerModal';

import { Vehicle, RouteGuide, VEHICLES } from './data/mockData';

export default function App() {
  const [selectedHub, setSelectedHub] = useState<string>('all');

  // Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeBookingVehicle, setActiveBookingVehicle] = useState<Vehicle | null>(null);

  // Fleet Catalog Modal State
  const [isFleetOpen, setIsFleetOpen] = useState(false);
  const [fleetCategory, setFleetCategory] = useState('all');

  // Route Guide Modal State
  const [isRouteOpen, setIsRouteOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState<RouteGuide | null>(null);

  // Host / Partner Modal State
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);

  // Category filter state for trending rides
  const [trendingFilter, setTrendingFilter] = useState('all');

  const handleOpenBooking = (vehicle?: Vehicle) => {
    setActiveBookingVehicle(vehicle || VEHICLES[0]);
    setIsBookingOpen(true);
  };

  const handleOpenFleet = (category = 'all') => {
    setFleetCategory(category);
    setIsFleetOpen(true);
  };

  const handleOpenRoute = (route: RouteGuide) => {
    setActiveRoute(route);
    setIsRouteOpen(true);
  };

  const handleSearchRides = (filters: { vehicleType: string; hubId: string; date: string }) => {
    setSelectedHub(filters.hubId);
    if (filters.vehicleType === 'Motorcycle') {
      setTrendingFilter('enfield');
    } else if (filters.vehicleType === 'Scooter') {
      setTrendingFilter('scooters');
    } else {
      setTrendingFilter('all');
    }

    const trendingEl = document.getElementById('trending');
    if (trendingEl) {
      trendingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookFromRoute = () => {
    setIsRouteOpen(false);
    handleOpenBooking(VEHICLES[0]);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#F97316] selection:text-white flex flex-col font-['Inter',sans-serif]">
      {/* Sticky Top Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenFleet={() => handleOpenFleet('all')}
        onSelectHub={setSelectedHub}
        selectedHub={selectedHub}
      />

      <main className="flex-1">
        {/* Hero Section with Search Bar & Key Metrics */}
        <HeroSection
          onOpenBooking={() => handleOpenBooking()}
          onExploreFleet={() => {
            const trendingEl = document.getElementById('trending');
            trendingEl?.scrollIntoView({ behavior: 'smooth' });
          }}
          onSearchRides={handleSearchRides}
          selectedHub={selectedHub}
          onSelectHub={setSelectedHub}
        />

        {/* Curated Mobility Categories & Trusted Brand Logos */}
        <CuratedCategories
          onSelectCategory={(categoryId) => handleOpenFleet(categoryId)}
        />

        {/* About RentOnn Section */}
        <AboutSection
          onExploreFleet={() => handleOpenFleet('all')}
        />

        {/* Why Choose Us: 4 Key Value Pillars */}
        <WhyChooseUs
          onLearnMore={() => {
            const el = document.getElementById('how-it-works');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Trending Rides / Most Booked This Week */}
        <TrendingRides
          onBookVehicle={(vehicle) => handleOpenBooking(vehicle)}
          onViewAll={() => handleOpenFleet('all')}
          selectedCategoryFilter={trendingFilter}
        />

        {/* How It Works: 4-Step Golden Flow */}
        <HowItWorks />

        {/* Gateway to North Bengal & Sikkim: Popular Routes */}
        <PopularRoutes
          onSelectRoute={handleOpenRoute}
          onViewAllHubs={() => {
            const el = document.getElementById('routes');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Testimonials: Loved by Riders Across India */}
        <TestimonialsSection />

        {/* Host Banner: List Your Vehicle & Earn Every Month */}
        <HostPartnerBanner
          onOpenPartnerModal={() => setIsPartnerOpen(true)}
        />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenFleet={() => handleOpenFleet('all')}
        onOpenPartnerModal={() => setIsPartnerOpen(true)}
      />

      {/* Floating Mobile Bottom Navigation Bar (Thumb Reach Zone) */}
      <MobileBottomBar
        onOpenBooking={() => handleOpenBooking()}
        onOpenFleet={() => handleOpenFleet('all')}
      />

      {/* Interactive Booking Flow Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialVehicle={activeBookingVehicle}
        initialHub={selectedHub}
      />

      {/* Full Fleet Catalog Explorer Modal */}
      <FleetModal
        isOpen={isFleetOpen}
        onClose={() => setIsFleetOpen(false)}
        onSelectVehicle={(vehicle) => handleOpenBooking(vehicle)}
        initialCategory={fleetCategory}
      />

      {/* Scenic Route Details & Mountain Guidance Modal */}
      <RouteModal
        route={activeRoute}
        isOpen={isRouteOpen}
        onClose={() => setIsRouteOpen(false)}
        onBookRideForRoute={handleBookFromRoute}
      />

      {/* Host / Vehicle Listing Calculator Modal */}
      <PartnerModal
        isOpen={isPartnerOpen}
        onClose={() => setIsPartnerOpen(false)}
      />
    </div>
  );
}
