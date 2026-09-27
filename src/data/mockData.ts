export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  category: 'bikes' | 'scooters' | 'tourers' | 'sport';
  categoryLabel: string;
  typeBadge: string;
  fuelType: 'PETROL' | 'ELECTRIC';
  tag: string;
  pricePerDay: number;
  specs: {
    transmission?: 'Manual' | 'Automatic';
    seating?: string;
    engine?: string;
    mileage?: string;
    helmets?: string;
    insurance: string;
    airConditioning?: string;
    range?: string;
  };
  features: string[];
  imageUrl: string;
  isPopular?: boolean;
  minBookingDays: number;
}

export interface RouteGuide {
  id: string;
  title: string;
  badge?: string;
  badgeColor?: string;
  distance: string;
  time: string;
  roadCondition: string;
  bestVehicle: string;
  highlights: string[];
  permitRequired: boolean;
  permitNote?: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  title: string;
  review: string;
  avatarText: string;
  avatarBg: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  isOpenDefault?: boolean;
}

export const DARJEELING_CONTACT = {
  name: 'Darjeeling Sunrise Tours and Trek',
  address: '19, HD Lama Rd, Chauk Bazaar, Darjeeling, West Bengal 734101',
  phone: '086373 62969',
  phoneClean: '08637362969',
  phoneIntl: '+91 86373 62969',
  email: 'darjeelingsunrisetours@gmail.com',
};

export const DARJEELING_HUBS = [
  {
    id: 'all',
    name: 'All Darjeeling Hubs (Chauk Bazaar, Mall Rd, Ghum)',
    address: '19, HD Lama Rd, Chauk Bazaar & Darjeeling Pickup Points',
  },
  {
    id: 'chauk-bazaar',
    name: 'Chauk Bazaar Main Hub (19, HD Lama Rd)',
    address: '19, HD Lama Rd, Chauk Bazaar, Darjeeling 734101 (Opp. Taxi Stand)',
  },
  {
    id: 'mall-road',
    name: 'Darjeeling Mall & Chowrasta Point',
    address: 'Near Nehru Road Entrance & Keventer’s Corner, Darjeeling',
  },
  {
    id: 'railway-station',
    name: 'Darjeeling Toy Train Station Hub',
    address: 'Hill Cart Road, Opposite DHR Steam Shed & Station Exit',
  },
  {
    id: 'ghum-station',
    name: 'Ghum Railway Station & Monastery Point',
    address: 'Ghum Hill Cart Rd, Highest Altitude Railway Station (2,258 m)',
  },
  {
    id: 'batasia-loop',
    name: 'Batasia Loop & War Memorial Hub',
    address: 'Hill Cart Road, Near Gorkha War Memorial Spiral Loop',
  },
  {
    id: 'tiger-hill',
    name: 'Tiger Hill Sunrise Base Point',
    address: 'Tiger Hill Road Junction, Senchal Wildlife Sanctuary Gate',
  },
  {
    id: 'lebong-cart',
    name: 'Lebong & Happy Valley Tea Estate',
    address: 'Lebong Cart Road, Near Happy Valley Organic Tea Garden',
  },
];

// ONLY TWO-WHEELERS (ALL CARS REMOVED AS REQUESTED)
export const VEHICLES: Vehicle[] = [
  {
    id: 're-himalayan-450',
    name: 'Royal Enfield Himalayan 450',
    brand: 'Royal Enfield',
    category: 'tourers',
    categoryLabel: 'ADVENTURE TOURER',
    typeBadge: 'PETROL',
    fuelType: 'PETROL',
    tag: 'Mountain King',
    pricePerDay: 1399,
    specs: {
      transmission: 'Manual',
      helmets: '2 Off-road Helmets',
      engine: '452 cc Liquid-Cooled Sherpa',
      insurance: 'Full Hill Comprehensive',
    },
    features: [
      'Panniers & Heavy Luggage Carrier',
      'Ride-by-Wire with Eco & Sport Maps',
      'Tripper Navigation & Mobile Charger',
      'Sandakphu & Sikkim High-Altitude Tuned',
    ],
    imageUrl: '/assets/images/hero_bike_darjeeling_1790533232466.jpg',
    isPopular: true,
    minBookingDays: 1,
  },
  {
    id: 'hunter-350',
    name: 'Hunter 350 Dapper Grey',
    brand: 'Royal Enfield',
    category: 'bikes',
    categoryLabel: 'RETRO ROADSTER',
    typeBadge: 'PETROL',
    fuelType: 'PETROL',
    tag: 'Most Popular Mountain Bike',
    pricePerDay: 749,
    specs: {
      transmission: 'Manual',
      helmets: '2 ISI Helmets',
      engine: '349 cc J-Series Engine',
      insurance: 'Zero Deductible Waiver',
    },
    features: [
      'Dual-Channel ABS on Steep Gradients',
      'Lightweight Agile Hill Maneuverability',
      'Mobile Phone Mount & USB Charger',
      'Bungee Cords & Puncture Kit Included',
    ],
    imageUrl: '/assets/images/darjeeling_mountain_biking_1790533247961.jpg',
    isPopular: true,
    minBookingDays: 1,
  },
  {
    id: 're-classic-350',
    name: 'Classic 350 Stealth Black',
    brand: 'Royal Enfield',
    category: 'bikes',
    categoryLabel: 'HERITAGE CRUISER',
    typeBadge: 'PETROL',
    fuelType: 'PETROL',
    tag: 'Darjeeling Legend',
    pricePerDay: 849,
    specs: {
      transmission: 'Manual',
      helmets: '2 ISI Helmets',
      engine: '349 cc High-Torque',
      insurance: 'Full Mountain Cover',
    },
    features: [
      'Iconic Royal Enfield Himalayan Thump',
      'Pillion Backrest for Long Scenic Trips',
      'Heavy Low-end Torque for Rohini & Ghum Climbs',
      'Luggage Rack for Mountain Backpacks',
    ],
    imageUrl: '/assets/images/motorcycle_tourer_1790513148863.jpg',
    isPopular: true,
    minBookingDays: 1,
  },
  {
    id: 'activa-6g',
    name: 'Honda Activa 6G Red',
    brand: 'Honda',
    category: 'scooters',
    categoryLabel: 'HILL COMMUTE SCOOTER',
    typeBadge: 'PETROL',
    fuelType: 'PETROL',
    tag: 'Best Hill Commute',
    pricePerDay: 499,
    specs: {
      transmission: 'Automatic',
      helmets: '2 ISI Helmets',
      engine: '110 cc HET Hill-Tuned',
      mileage: '55 kmpl',
      insurance: 'Comprehensive',
    },
    features: [
      '2 Free Sanitized ISI Helmets',
      'Telescopic Front Suspension for Hill Roads',
      'Deep Underseat Storage for Jackets & Shopping',
      'Easy Electric Start in Chilly Darjeeling Mornings',
    ],
    imageUrl: '/assets/images/scooter_urban_ev_1790513163337.jpg',
    isPopular: true,
    minBookingDays: 1,
  },
  {
    id: 'ktm-duke-250',
    name: 'KTM Duke 250 Alpine',
    brand: 'KTM',
    category: 'sport',
    categoryLabel: 'MOUNTAIN SPORT',
    typeBadge: 'PETROL',
    fuelType: 'PETROL',
    tag: 'Precision Cornering',
    pricePerDay: 999,
    specs: {
      transmission: 'Manual',
      helmets: '2 Sport Helmets',
      engine: '249 cc Liquid-Cooled DOHC',
      insurance: 'Full Comprehensive',
    },
    features: [
      'Slipper Clutch for Hairpin Hill Bends',
      'WP APEX Inverted Front Forks',
      'High Power-to-Weight Mountain Ratio',
      'Supermoto ABS Mode',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
    isPopular: false,
    minBookingDays: 1,
  },
  {
    id: 'ather-450x',
    name: 'Ather 450X Gen 3',
    brand: 'Ather Energy',
    category: 'scooters',
    categoryLabel: 'SMART HILL EV',
    typeBadge: 'ELECTRIC',
    fuelType: 'ELECTRIC',
    tag: 'Zero Emission Hill Ride',
    pricePerDay: 599,
    specs: {
      transmission: 'Automatic',
      helmets: '2 Helmets',
      range: '115 km Real Range',
      insurance: 'Full EV Cover',
    },
    features: [
      'Fast Home Charger with Hotel Wall Adapter',
      'Instant Hill Climb Torque in Warp Mode',
      'Onboard Google Maps TFT Display',
      'Silent Glide through Tea Gardens',
    ],
    imageUrl: '/assets/images/scooter_urban_ev_1790513163337.jpg',
    isPopular: false,
    minBookingDays: 1,
  },
  {
    id: 'tvs-jupiter-125',
    name: 'TVS Jupiter 125 Disc',
    brand: 'TVS',
    category: 'scooters',
    categoryLabel: 'FAMILY COMFORT SCOOTER',
    typeBadge: 'PETROL',
    fuelType: 'PETROL',
    tag: 'Effortless Climb',
    pricePerDay: 479,
    specs: {
      transmission: 'Automatic',
      helmets: '2 ISI Helmets',
      engine: '124.8 cc IntelliGO',
      mileage: '50 kmpl',
      insurance: 'Full Coverage',
    },
    features: [
      'Extra Long Pillion Seat for Mountain Rides',
      'Front Glovebox with Mobile USB Port',
      'Gas-Charged Rear Monoshock',
      'All-in-One Central Key Lock',
    ],
    imageUrl: '/assets/images/scooter_urban_ev_1790513163337.jpg',
    isPopular: false,
    minBookingDays: 1,
  },
  {
    id: 'yamaha-mt-15',
    name: 'Yamaha MT-15 V2 Metallic',
    brand: 'Yamaha',
    category: 'sport',
    categoryLabel: 'STREET FIGHTER',
    typeBadge: 'PETROL',
    fuelType: 'PETROL',
    tag: 'Top Mileage Bike',
    pricePerDay: 799,
    specs: {
      transmission: 'Manual',
      helmets: '2 Helmets',
      engine: '155 cc Liquid-Cooled VVA',
      mileage: '48 kmpl',
      insurance: 'Comprehensive',
    },
    features: [
      'Assist & Slipper Clutch',
      'Deltabox Frame for Sharp Hill Handling',
      'Golden USD Front Forks',
      'Bluetooth Smartphone Y-Connect',
    ],
    imageUrl: '/assets/images/motorcycle_tourer_1790513148863.jpg',
    isPopular: false,
    minBookingDays: 1,
  },
];

export const CATEGORIES = [
  {
    id: 'tourers',
    title: 'Adventure Tourers',
    fleetCount: '45+ In Darjeeling Fleet',
    description: 'Royal Enfield Himalayan 450 & Scram machines built for Sandakphu, Tiger Hill, and Sikkim high altitude...',
    ctaText: 'View All Tourers >',
    imageUrl: '/assets/images/hero_bike_darjeeling_1790533232466.jpg',
  },
  {
    id: 'bikes',
    title: 'Royal Enfield Cruisers',
    fleetCount: '120+ In Darjeeling Fleet',
    description: 'Classic 350, Hunter 350 & Meteor roadsters with heavy low-end torque for steep hill climbs...',
    ctaText: 'View All Enfields >',
    imageUrl: '/assets/images/darjeeling_mountain_biking_1790533247961.jpg',
  },
  {
    id: 'scooters',
    title: 'Hill Scooters & EVs',
    fleetCount: '75+ In Darjeeling Fleet',
    description: 'Honda Activa 6G, TVS Jupiter 125, and Ather 450X electric for effortless town and tea garden rides...',
    ctaText: 'View All Scooters >',
    imageUrl: '/assets/images/scooter_urban_ev_1790513163337.jpg',
  },
  {
    id: 'sport',
    title: 'Mountain Sport Bikes',
    fleetCount: '35+ In Darjeeling Fleet',
    description: 'KTM Duke 250 and Yamaha MT-15 with agile hairpin handling and high ground clearance...',
    ctaText: 'View Sport Bikes >',
    imageUrl: '/assets/images/motorcycle_tourer_1790513148863.jpg',
  },
];

export const ROUTE_GUIDES: RouteGuide[] = [
  {
    id: 'darjeeling-flagship',
    title: 'Darjeeling Central Hubs',
    badge: 'FLAGSHIP HUB',
    badgeColor: 'bg-emerald-600 text-white',
    distance: 'Chauk Bazaar & Mall',
    time: 'Instant Key Handover',
    roadCondition: 'Paved town roads with steep hill Cart road connectors',
    bestVehicle: 'Hunter 350, Classic 350, Activa 6G, Himalayan',
    highlights: [
      '19, HD Lama Rd Office (Next to Chauk Bazaar)',
      'Darjeeling Chowrasta / Mall Road Pickups',
      'Darjeeling Toy Train Station Exit',
      'Ghum Highest Altitude Station (2,258m)',
    ],
    permitRequired: false,
    description:
      'Darjeeling Sunrise Tours and Trek central station at 19, HD Lama Rd, Chauk Bazaar. Instant key collection, 2 sanitized helmets, puncture kit, and digital KYC.',
    imageUrl: '/assets/images/hero_bike_darjeeling_1790533232466.jpg',
  },
  {
    id: 'tiger-hill-sunrise',
    title: 'Tiger Hill 4:00 AM Sunrise Ride',
    badge: 'MUST EXPERIENCE',
    badgeColor: 'bg-amber-500 text-slate-950',
    distance: '11 km from Chauk Bazaar',
    time: '35 Minutes Dawn Ride',
    roadCondition: 'Smooth asphalt through misty Senchal Wildlife pine forest',
    bestVehicle: 'Royal Enfield Himalayan 450, Hunter 350, Classic 350',
    highlights: [
      'Golden sunrise illuminating Mount Kanchenjunga & Everest',
      'Senchal Lake & Wildlife Sanctuary pine trails',
      'Ghum Monastery hot Darjeeling tea stall at dawn',
      'Early 4:00 AM self-drive key pickup support',
    ],
    permitRequired: false,
    description:
      'The crown jewel of Darjeeling rides! Set out at 4:00 AM from our HD Lama Road hub to catch the first rays of the sun turning the snow peaks of Kanchenjunga into molten gold.',
    imageUrl: '/assets/images/hero_bike_darjeeling_1790533232466.jpg',
  },
  {
    id: 'mirik-lake',
    title: 'Mirik Lake & Nepal Border',
    badge: 'SCENIC CRUISE',
    badgeColor: 'bg-blue-600 text-white',
    distance: '49 km from Darjeeling',
    time: '2 Hours Each Way',
    roadCondition: 'Paved mountain highway winding through cedar forests & tea gardens',
    bestVehicle: 'Royal Enfield Classic 350, Hunter 350, Himalayan, Activa 6G',
    highlights: [
      'Sumendu Lake boating & footbridge over water',
      'Pashupati Nagar Indo-Nepal border market',
      'Gopaldhara & Thurbo tea garden estates',
      'Pine tree avenue photo spots on mountain ridge',
    ],
    permitRequired: false,
    description:
      'A rider’s dream route gliding over scenic mountain ridges with lush green tea bushes on both sides and cool alpine air. Cross into Pashupati border for shopping.',
    imageUrl: '/assets/images/mountain_road_fleet_1790513175013.jpg',
  },
  {
    id: 'sandakphu-singalila',
    title: 'Sandakphu & Singalila Ridge',
    badge: 'EXPEDITION',
    badgeColor: 'bg-rose-600 text-white',
    distance: '32 km to Manebhanjan Base',
    time: '1.5 Hours to Base',
    roadCondition: 'Paved to Manebhanjan; rugged stone track up to Sandakphu (11,930 ft)',
    bestVehicle: 'Royal Enfield Himalayan 450 with panniers',
    highlights: [
      'Highest mountain peak in West Bengal (11,930 ft)',
      'Panoramic view of the "Sleeping Buddha" Kanchenjunga massif',
      'Singalila National Park Red Panda biodiversity',
      'Manebhanjan mountain checkpost registration',
    ],
    permitRequired: true,
    permitNote:
      'Singalila National Park entry permit issued at Manebhanjan Forest Checkpost. We provide full vehicle registration & commercial self-drive NOC.',
    description:
      'For true adventure riders! Conquer the legendary ridge overlooking four of the five highest peaks in the world (Everest, Kanchenjunga, Lhotse, Makalu).',
    imageUrl: '/assets/images/darjeeling_mountain_biking_1790533247961.jpg',
  },
  {
    id: 'lamahatta-kalimpong',
    title: 'Lamahatta Pines & Kalimpong',
    badge: 'ECO FOREST',
    badgeColor: 'bg-emerald-600 text-white',
    distance: '50 km from Darjeeling',
    time: '2 Hours',
    roadCondition: 'Peshok Road through dense pine forests with Teesta Valley overlook',
    bestVehicle: 'Hunter 350, Duke 250, Classic 350, Activa 6G',
    highlights: [
      'Lamahatta Eco Park sacred lake and prayer flags among towering pines',
      'Lovers Meet Viewpoint (Confluence of Teesta and Rangeet rivers)',
      'Peshok Tea Gardens zigzag curves',
      'Kalimpong Delo Hill and historic monasteries',
    ],
    permitRequired: false,
    description:
      'Ride under the shade of giant Himalayan pines and feel the serenity of fluttering Tibetan prayer flags along the scenic Peshok mountain road.',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ghum-batasia',
    title: 'Ghum Monastery & Batasia Loop',
    badge: 'HERITAGE',
    badgeColor: 'bg-indigo-600 text-white',
    distance: '7 km from Chauk Bazaar',
    time: '20 Minutes',
    roadCondition: 'Smooth town road alongside heritage steam train tracks',
    bestVehicle: 'All Scooters & Motorcycles',
    highlights: [
      'Batasia Loop War Memorial 360-degree Kanchenjunga view',
      'Historic Yiga Choeling Ghum Monastery built in 1850',
      'Watching the 140-year-old DHR Steam Toy Train puff by',
      'Ghum highest railway station museum',
    ],
    permitRequired: false,
    description:
      'A relaxed half-day ride following the legendary Himalayan Toy Train railway line up to Ghum. Perfect for easy scooter exploring and photography.',
    imageUrl: '/assets/images/motorcycle_tourer_1790513148863.jpg',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Vikramaditya Sen',
    location: 'Tiger Hill Sunrise Ride · Google Review',
    rating: 5,
    title: 'Unbelievable Sunrise Ride on Himalayan 450!',
    review:
      'Rented a Royal Enfield Himalayan 450 from Darjeeling Sunrise Tours at their Chauk Bazaar office on HD Lama Road. They gave us the keys at 3:45 AM for our Tiger Hill dawn ride! Bike was impeccably tuned for hill climbs, zero deposit, and two warm sanitized helmets.',
    avatarText: 'VS',
    avatarBg: 'bg-amber-100 text-amber-800',
  },
  {
    id: 'rev-2',
    name: 'Ananya Roy Choudhury',
    location: 'Chowrasta Mall Pickup · Google Review',
    rating: 5,
    title: 'Smooth Activa 6G for Darjeeling & Mirik',
    review:
      'Very honest and courteous team! Handover was right near Darjeeling Mall. The Activa 6G had great hill climb power and we effortlessly rode to Mirik Lake and back. 100% recommended for tourists in Darjeeling.',
    avatarText: 'AR',
    avatarBg: 'bg-emerald-100 text-emerald-800',
  },
  {
    id: 'rev-3',
    name: 'David MacLeod',
    location: 'Sandakphu Trek & Ride · Google Review',
    rating: 5,
    title: 'Top Motorcycle & Trek Operator in Darjeeling',
    review:
      'Darjeeling Sunrise Tours and Trek provided everything from the motorcycle with heavy-duty panniers to permits for our Singalila trip. The owner at 19 HD Lama Road is deeply knowledgeable about Himalayan mountain routes. Call 086373 62969 anytime!',
    avatarText: 'DM',
    avatarBg: 'bg-sky-100 text-sky-800',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'WHERE IS DARJEELING SUNRISE TOURS AND TREK LOCATED?',
    answer:
      'Our main office and bike pickup hub is located at 19, HD Lama Rd, Chauk Bazaar, Darjeeling, West Bengal 734101 (close to the Chauk Bazaar taxi stand). We also provide doorstep bike delivery to hotels near Darjeeling Mall Road, Chowrasta, and the Toy Train Station.',
    isOpenDefault: true,
  },
  {
    id: 'faq-2',
    question: 'CAN I GET A BIKE FOR THE 4:00 AM TIGER HILL SUNRISE RIDE?',
    answer:
      'Yes, absolutely! We specialize in early morning Tiger Hill rides. You can either pick up the bike the previous evening (free overnight parking at your hotel) or arrange a pre-dawn 3:45 AM key handover at our HD Lama Road hub. Call 086373 62969 in advance to reserve.',
    isOpenDefault: false,
  },
  {
    id: 'faq-3',
    question: 'ARE TWO HELMETS AND MOUNTAIN SAFETY GEAR PROVIDED?',
    answer:
      'Yes! Every two-wheeler rental includes two complimentary sanitized ISI-certified helmets (one for the rider and one for pillion). We also provide free bungee cords, phone mount with USB charger, and basic mountain repair kits.',
    isOpenDefault: false,
  },
  {
    id: 'faq-4',
    question: 'IS THERE ANY SECURITY DEPOSIT REQUIRED?',
    answer:
      'Zero! We believe in hassle-free travel. For verified digital KYC (original Indian Driving License + Aadhaar Card), we charge ₹0 security deposit. Your funds are never blocked.',
    isOpenDefault: false,
  },
  {
    id: 'faq-5',
    question: 'CAN I RIDE TO SIKKIM, MIRIK, OR SANDAKPHU FROM DARJEELING?',
    answer:
      'Yes! All our motorcycles hold valid commercial permits. Mirik, Kurseong, Kalimpong, and Sikkim border routes are open for self-drive. For Sikkim, we provide all required taxi-exemption letters and vehicle RC copies for smooth Rangpo/Melli checkpost clearance.',
    isOpenDefault: false,
  },
  {
    id: 'faq-6',
    question: 'WHAT ARE YOUR CONTACT NUMBERS AND BOOKING HOURS?',
    answer:
      'You can call or WhatsApp us directly at 086373 62969 (or +91 86373 62969). Our Chauk Bazaar hub is open from 6:00 AM to 9:00 PM every day, with 24/7 on-road mountain assistance available.',
    isOpenDefault: false,
  },
];

// TWO-WHEELER BRAND LOGOS ONLY (NO CAR BRANDS)
export const BRAND_LOGOS = [
  'ROYAL ENFIELD',
  'HONDA',
  'TVS',
  'KTM',
  'YAMAHA',
  'HERO',
  'ATHER',
];
