import React, { useState, useEffect, useMemo } from "react";
import {
  Menu,
  X,
  Wifi,
  Car,
  Mountain,
  Waves,
  Flame,
  Utensils,
  Compass,
  Users,
  Headphones,
  Sparkles,
  Sunrise,
  Camera,
  Heart,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Star,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Check,
  BedDouble,
  Bath,
  Eye,
  Clock,
  ArrowRight,
  Monitor,
  Smartphone,
  Tablet,
  Instagram,
  Facebook,
  Youtube,
  Globe,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";

// ============================================================================
// CONFIGURABLE DEMO WHATSAPP NUMBER (Update before client/demo handover)
// Format: country code + number without "+" or spaces (e.g. "60123456789")
// ============================================================================
const DEMO_WHATSAPP_NUMBER = "60123456789";

// ============================================================================
// REAL-WORLD MOUNTAIN SCENERY & LUXURY RETREAT PHOTOGRAPHY (Unsplash / Pexels)
// Inspired by New Zealand (Tekapo/Pukaki/Southern Alps), Switzerland (Lauterbrunnen/
// Grindelwald/Zermatt), and Norway (Lofoten/Fjords). Fictional location: Aurelia Ridge.
// ============================================================================
const PHOTOS = {
  heroAlpine:
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85",
  aboutCabin:
    "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=85",
  aboutValley:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85",

  // Room 01 — Mountain View Deluxe Room
  deluxeMain:
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=85",
  deluxeView:
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=85",
  deluxeBath:
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85",

  // Room 02 — Forest Family Suite
  familyMain:
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85",
  familyForest:
    "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=85",
  familyLounge:
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=85",

  // Room 03 — Alpine Luxury Cabin
  cabinMain:
    "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=1600&q=85",
  cabinFireplace:
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1600&q=85",
  cabinDeck:
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=85",

  // Room 04 — Lakeside Premium Villa
  villaMain:
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
  villaLake:
    "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1600&q=85",
  villaInterior:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",

  // Facilities & Experiences
  poolAlpine:
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85",
  sunrisePeak:
    "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1600&q=85",
  stargazingNight:
    "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1600&q=85",
  bbqOutdoor:
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85",
  romanticDining:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85",
  hikingTrail:
    "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1600&q=85",
  nordicFjord:
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=85",
  breakfastMorning:
    "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1600&q=85",
};

// ============================================================================
// ROOMS & SUITES DATA (4 Distinct Categories)
// ============================================================================
const ROOMS_DATA = [
  {
    id: "mountain-view-deluxe",
    code: "ROOM 01",
    name: "Mountain View Deluxe Room",
    tagline: "Floor-to-ceiling alpine framing with quiet Nordic warmth",
    pricePerNight: 420,
    currency: "USD",
    maxOccupancy: "2 Adults + 1 Child",
    maxAdults: 2,
    maxChildren: 1,
    bedConfiguration: "1 King-Size Canopy Bed",
    sizeSqm: 48,
    bathroomDetails: "Rain Shower, Freestanding Soaking Tub & Heated Slate Floor",
    viewType: "Panoramic South Ridge & Glacier Peaks",
    checkInOut: "Check-in from 3:00 PM · Check-out until 11:30 AM",
    accentBadge: "Nordic Minimalist",
    cardBg: "bg-white border-[#183F32]/10",
    images: [PHOTOS.deluxeMain, PHOTOS.deluxeView, PHOTOS.deluxeBath],
    shortDescription:
      "An intimate sanctuary pairing pale oak joinery and soft wool textures with unobstructed ridge views and a private sunrise balcony.",
    fullDescription:
      "Designed for couples and solo travelers seeking serene altitude, the Mountain View Deluxe Room frames dramatic snow-dusted crests through triple-glazed panoramic windows. Step onto your private timber balcony with morning espresso or unwind in the deep stone soaking tub after crisp mountain air.",
    amenities: [
      "Private Mountain-View Balcony",
      "King-Size Organic Linen Bed",
      "High-Speed Fiber Wi-Fi",
      "Artisanal Espresso & Tea Bar",
      "Rainfall Shower & Deep Soaking Tub",
      "Underfloor Heating & Climate Control",
      "In-Room Morning Breakfast Tray",
      "Complimentary Valet Parking",
    ],
  },
  {
    id: "forest-family-suite",
    code: "ROOM 02",
    name: "Forest Family Suite",
    tagline: "Spacious multi-bedroom sanctuary nestled beside ancient pines",
    pricePerNight: 640,
    currency: "USD",
    maxOccupancy: "4 Adults + 2 Children",
    maxAdults: 4,
    maxChildren: 2,
    bedConfiguration: "1 King Bed + 2 Twin Beds + Lounge Daybed",
    sizeSqm: 86,
    bathroomDetails: "Two En-Suite Bathrooms, Walk-In Rain Shower & Double Vanity",
    viewType: "Old-Growth Pine Canopy & Misty Valley",
    checkInOut: "Check-in from 3:00 PM · Check-out until 12:00 PM",
    accentBadge: "Family Sanctuary",
    cardBg: "bg-[#F7F8F3] border-[#A5B99A]/60",
    images: [PHOTOS.familyMain, PHOTOS.familyForest, PHOTOS.familyLounge],
    shortDescription:
      "Generously proportioned for families, featuring a cozy living lounge, dual sleeping zones, and a peaceful forest-facing balcony.",
    fullDescription:
      "Crafted for unhurried family gatherings, the Forest Family Suite separates restful sleeping quarters from a warm central living lounge where everyone can read, play board games, or step out onto the covered forest balcony to watch wildlife move through the pines.",
    amenities: [
      "Forest-Facing Covered Balcony",
      "Dedicated Living & Dining Lounge",
      "Two Full Bathrooms with Heated Floors",
      "Kid-Friendly Board Games & Reading Nook",
      "High-Speed Wi-Fi & Smart Media",
      "Complimentary Family Breakfast Buffet",
      "Stroller & High-Chair Access on Request",
      "Private Reserved Parking",
    ],
  },
  {
    id: "alpine-luxury-cabin",
    code: "ROOM 03",
    name: "Alpine Luxury Cabin",
    tagline: "Freestanding timber architecture with hearth & private deck",
    pricePerNight: 790,
    currency: "USD",
    maxOccupancy: "3 Adults + 2 Children",
    maxAdults: 3,
    maxChildren: 2,
    bedConfiguration: "1 Super King Bed + Optional Loft Sofa Bed",
    sizeSqm: 104,
    bathroomDetails: "Spa Stone Bath, Cedar Sauna Accent & Dual Rainfall Showers",
    viewType: "High-Altitude Peaks & Private Meadow",
    checkInOut: "Check-in from 3:00 PM · Check-out until 12:00 PM",
    accentBadge: "Private Hearth Cabin",
    cardBg: "bg-white border-[#244C65]/20",
    images: [PHOTOS.cabinMain, PHOTOS.cabinFireplace, PHOTOS.cabinDeck],
    shortDescription:
      "A standalone Scandinavian-inspired timber cabin with a crackling hearth, wide mountain windows, and a private outdoor relaxation deck.",
    fullDescription:
      "Set apart along a quiet ridge path for heightened privacy, the Alpine Luxury Cabin blends charred larch and warm timber interiors with sweeping mountain vistas. Evenings center around the glowing fireplace and an outdoor cedar deck ideal for stargazing and fireside conversations.",
    amenities: [
      "Standalone Cabin & Private Deck",
      "Indoor Hearth & Outdoor Fire Lounge",
      "Panoramic Mountain Picture Windows",
      "Spa Bathroom with Deep Soaking Tub",
      "Private Outdoor Loungers & Sun Deck",
      "Gourmet Breakfast & Evening Turndown",
      "Complimentary Trail Lanterns & Binoculars",
      "Dedicated Driveway Parking",
    ],
  },
  {
    id: "lakeside-premium-villa",
    code: "ROOM 04",
    name: "Lakeside Premium Villa",
    tagline: "Signature waterfront residence with sweeping turquoise lake views",
    pricePerNight: 980,
    currency: "USD",
    maxOccupancy: "4 Adults + 2 Children",
    maxAdults: 4,
    maxChildren: 2,
    bedConfiguration: "2 Master Suites (King Beds) + Expansive Salon",
    sizeSqm: 142,
    bathroomDetails: "Two Luxury Marble & Slate Suites, Freestanding Tub & Rain Showers",
    viewType: "Turquoise Glacial Lake & Reflected Peaks",
    checkInOut: "Check-in from 2:30 PM · Check-out until 12:30 PM",
    accentBadge: "Signature Waterfront",
    cardBg: "bg-[#F7F8F3] border-[#244C65]/25",
    images: [PHOTOS.villaMain, PHOTOS.villaLake, PHOTOS.villaInterior],
    shortDescription:
      "Our flagship villa overlooking calm turquoise alpine waters, complete with a private lakefront terrace, expansive living room, and bespoke service.",
    fullDescription:
      "Positioned along the tranquil shoreline of Mirror Basin Lake, the Lakeside Premium Villa offers serene water reflections and dramatic mountain backdrops. Enjoy an expansive living room, dining space for entertaining, and a private lake-view terrace built for golden-hour reflection.",
    amenities: [
      "Private Lakefront Terrace & Lounge",
      "Expansive Living & Dining Salon",
      "Two En-Suite King Bedrooms",
      "Panoramic Lake & Mountain Views",
      "Private Concierge & Breakfast Service",
      "Complimentary Lakeside Rowboat Access",
      "High-Speed Wi-Fi & Sound System",
      "Private Covered Arrival Bay",
    ],
  },
];

// ============================================================================
// FACILITIES & AMENITIES (10 Items)
// ============================================================================
const FACILITIES_DATA = [
  {
    title: "Free Wi-Fi",
    desc: "Reliable high-speed connectivity across suites, lounges, and terrace spaces.",
    icon: Wifi,
  },
  {
    title: "Private Parking",
    desc: "Secure, well-lit on-site parking bays with easy luggage access.",
    icon: Car,
  },
  {
    title: "Mountain View Balcony",
    desc: "Private elevated vantage points designed for crisp alpine mornings.",
    icon: Mountain,
  },
  {
    title: "Swimming Pool",
    desc: "Heated scenic pool framed by mountain air and tranquil greenery.",
    icon: Waves,
  },
  {
    title: "BBQ Area",
    desc: "Curated outdoor grilling stations for relaxed evening gatherings.",
    icon: Utensils,
  },
  {
    title: "Outdoor Fireplace",
    desc: "Warm open-air fire circles for crisp nights under clear skies.",
    icon: Flame,
  },
  {
    title: "Breakfast Service",
    desc: "Freshly prepared daily morning fare featuring local mountain produce.",
    icon: Sparkles,
  },
  {
    title: "Hiking Trails",
    desc: "Direct access to scenic ridge paths, forest loops, and overlook trails.",
    icon: Compass,
  },
  {
    title: "Family-Friendly Facilities",
    desc: "Thoughtful spaces, spacious suites, and welcoming layouts for all ages.",
    icon: Users,
  },
  {
    title: "24/7 Guest Support",
    desc: "Round-the-clock on-site host assistance for seamless stays.",
    icon: Headphones,
  },
];

// ============================================================================
// EXPERIENCES & ACTIVITIES (7 Items)
// ============================================================================
const EXPERIENCES_DATA = [
  {
    title: "Sunrise Mountain View",
    subtitle: "First Light Over High Ridges",
    description:
      "Watch golden dawn light touch snow-dusted peaks and drift across quiet alpine valleys with a warm cup in hand.",
    image: PHOTOS.sunrisePeak,
    icon: Sunrise,
  },
  {
    title: "Nature Hiking",
    subtitle: "Curated Ridge & Pine Trails",
    description:
      "Follow winding forest paths and elevated viewpoints surrounded by crisp air, wildflowers, and expansive horizons.",
    image: PHOTOS.hikingTrail,
    icon: Compass,
  },
  {
    title: "Stargazing",
    subtitle: "Crisp High-Altitude Night Skies",
    description:
      "Far from city glare, step outside to admire clear constellations and deep midnight skies over the peaks.",
    image: PHOTOS.stargazingNight,
    icon: Sparkles,
  },
  {
    title: "Outdoor BBQ",
    subtitle: "Open-Air Fireside Feasts",
    description:
      "Gather around our outdoor grill terrace for savory seasonal flavors, cool mountain breezes, and unhurried conversation.",
    image: PHOTOS.bbqOutdoor,
    icon: Flame,
  },
  {
    title: "Romantic Dinner",
    subtitle: "Candlelit Mountain Evenings",
    description:
      "Celebrate special moments with an intimate, thoughtfully set evening dining experience overlooking serene scenery.",
    image: PHOTOS.romanticDining,
    icon: Heart,
  },
  {
    title: "Photography Spots",
    subtitle: "Dramatic Peaks, Lakes & Valleys",
    description:
      "Capture sweeping landscapes, timber architecture, and shifting natural light from iconic viewpoints across the estate.",
    image: PHOTOS.nordicFjord,
    icon: Camera,
  },
  {
    title: "Relaxing by the Lake",
    subtitle: "Calm Waters & Quiet Reflection",
    description:
      "Unwind beside still turquoise waters where mountain silhouettes mirror across the surface in peaceful harmony.",
    image: PHOTOS.villaLake,
    icon: Waves,
  },
];

// ============================================================================
// PHOTO GALLERY (7 Categories)
// ============================================================================
const GALLERY_CATEGORIES = [
  "All",
  "Exterior Architecture",
  "Bedrooms",
  "Living Spaces",
  "Mountain Scenery",
  "Swimming Pool",
  "Dining Area",
  "Outdoor Experiences",
];

const GALLERY_ITEMS = [
  {
    id: "g1",
    title: "Nordic Timber Cabin Facade",
    category: "Exterior Architecture",
    caption: "Warm wood and stone architecture nestled against alpine slopes.",
    image: PHOTOS.aboutCabin,
  },
  {
    id: "g2",
    title: "Lakeside Villa Architecture",
    category: "Exterior Architecture",
    caption: "Contemporary glass and timber lines overlooking tranquil waters.",
    image: PHOTOS.villaMain,
  },
  {
    id: "g3",
    title: "Mountain View Deluxe Bedroom",
    category: "Bedrooms",
    caption: "Serene king suite designed for rest and natural light.",
    image: PHOTOS.deluxeMain,
  },
  {
    id: "g4",
    title: "Forest Family Suite Quarters",
    category: "Bedrooms",
    caption: "Comfortable multi-guest sleeping layout with calm neutral tones.",
    image: PHOTOS.familyMain,
  },
  {
    id: "g5",
    title: "Hearthside Cabin Lounge",
    category: "Living Spaces",
    caption: "Cozy fireplace ambiance ideal for cool mountain evenings.",
    image: PHOTOS.cabinFireplace,
  },
  {
    id: "g6",
    title: "Sunlit Sanctuary Living Room",
    category: "Living Spaces",
    caption: "Spacious seating area with minimalist Scandinavian character.",
    image: PHOTOS.villaInterior,
  },
  {
    id: "g7",
    title: "Glacial Valley & Snow Peaks",
    category: "Mountain Scenery",
    caption: "Sweeping alpine ridges and deep blue waters at dusk.",
    image: PHOTOS.heroAlpine,
  },
  {
    id: "g8",
    title: "Highland Crest Panorama",
    category: "Mountain Scenery",
    caption: "Dramatic mountain peaks rising above green valleys.",
    image: PHOTOS.aboutValley,
  },
  {
    id: "g9",
    title: "Scenic Resort Pool",
    category: "Swimming Pool",
    caption: "Refreshing pool surrounded by calm resort grounds.",
    image: PHOTOS.poolAlpine,
  },
  {
    id: "g10",
    title: "Morning Breakfast Table",
    category: "Dining Area",
    caption: "Freshly prepared morning spread to start the day slowly.",
    image: PHOTOS.breakfastMorning,
  },
  {
    id: "g11",
    title: "Evening Dining Atmosphere",
    category: "Dining Area",
    caption: "Warm lighting and refined table settings for memorable dinners.",
    image: PHOTOS.romanticDining,
  },
  {
    id: "g12",
    title: "Starlit Alpine Sky",
    category: "Outdoor Experiences",
    caption: "Clear night skies above the mountain ridge.",
    image: PHOTOS.stargazingNight,
  },
];

// ============================================================================
// TESTIMONIALS (4 Fictional Demo Guest Reviews)
// ============================================================================
const TESTIMONIALS_DATA = [
  {
    name: "Hannah Lindqvist",
    stayExperience: "3 Nights · Mountain View Deluxe Room",
    rating: 5,
    review:
      "Waking up to misty peaks and quiet pine air felt effortless. Every detail—from the linen bedding to the calm terrace view—made it hard to leave.",
  },
  {
    name: "Daniel & Mei-Ling Tan",
    stayExperience: "4 Nights · Forest Family Suite",
    rating: 5,
    review:
      "Our children loved the spacious lounge and morning trails while we enjoyed the peaceful forest balcony. The pacing of the entire property feels genuinely restorative.",
  },
  {
    name: "Lucas Meyer",
    stayExperience: "2 Nights · Alpine Luxury Cabin",
    rating: 5,
    review:
      "Sitting beside the cabin fireplace after a brisk hike and looking out at clear night skies was unforgettable. Thoughtful design without feeling flashy.",
  },
  {
    name: "Amira Al-Mansoor",
    stayExperience: "3 Nights · Lakeside Premium Villa",
    rating: 5,
    review:
      "The turquoise lake views from the terrace at golden hour were extraordinary. Spacious, quiet, and warmly hosted from arrival to departure.",
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================
function getTodayISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().split("T")[0];
}

function getOffsetDateISO(daysFromToday) {
  const d = new Date();
  d.setDate(d.getDate() + daysFromToday);
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().split("T")[0];
}

function calculateNights(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 0;
  const start = new Date(checkIn + "T00:00:00");
  const end = new Date(checkOut + "T00:00:00");
  const diffTime = end.getTime() - start.getTime();
  const nights = Math.round(diffTime / (1000 * 60 * 60 * 24));
  return nights > 0 ? nights : 0;
}

function formatCurrency(amount) {
  return `$${Number(amount || 0).toLocaleString("en-US")}`;
}

function buildWhatsAppMessage({
  fullName,
  phone,
  email,
  roomName,
  checkIn,
  checkOut,
  nights,
  adults,
  children,
  pricePerNight,
  estimatedTotal,
  specialRequests,
}) {
  return [
    "Hello! I would like to make a reservation at your homestay.",
    "",
    "BOOKING DETAILS",
    "",
    `Guest Name: ${fullName || "-"}`,
    `Phone Number: $
