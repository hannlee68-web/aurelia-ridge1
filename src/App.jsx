import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Menu, X, Calendar, Users, ArrowRight, ChevronDown, ChevronLeft, ChevronRight,
  Mountain, ShieldCheck, Compass, Sparkles, Wifi, Car, Eye, Waves, Flame,
  UtensilsCrossed, Footprints, HeartHandshake, Headphones, Check, Star,
  MapPin, Phone, Mail, MessageCircle, Maximize2, BedDouble, Bath, Clock,
  Sun, Moon, Camera, Anchor, ExternalLink, Monitor, Tablet, Smartphone,
  AlertCircle, CheckCircle2, Info, Navigation
} from 'lucide-react';

// ============================================================================
// CONFIGURABLE DEMO BUSINESS WHATSAPP NUMBER
// Replace with any international phone number (digits only, with country code)
// ============================================================================
const DEMO_WHATSAPP_NUMBER = "15550192834"; // Configurable Demo WhatsApp Number

// ============================================================================
// GOOGLE FONTS & GLOBAL STYLES INJECTION
// ============================================================================
const FontAndStyleInjector = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <style>{`
      html {
        scroll-behavior: smooth;
        font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
        background-color: #F7F8F3;
        color: #252C29;
      }
      .font-serif-display {
        font-family: 'Playfair Display', Georgia, serif;
      }
      .font-sans-body {
        font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
      }
      @keyframes slowZoom {
        0% { transform: scale(1); }
        100% { transform: scale(1.07); }
      }
      .animate-slow-zoom {
        animation: slowZoom 22s ease-in-out infinite alternate;
      }
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in-up {
        animation: fadeInUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }
      /* Custom subtle scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #F7F8F3;
      }
      ::-webkit-scrollbar-thumb {
        background: #A5B99A;
        border-radius: 9999px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #183F32;
      }
    `}</style>
  );
};

// ============================================================================
// SAFE IMAGE COMPONENT WITH GRACEFUL FALLBACK
// ============================================================================
const FALLBACK_MOUNTAIN_IMG =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80";

const SafeImage = ({ src, alt, className = "", loading = "lazy" }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-[#183F32]/10 ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#A5B99A]/25 to-[#244C65]/15" />
      )}
      <img
        src={imgSrc}
        alt={alt}
        loading={loading}
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (imgSrc !== FALLBACK_MOUNTAIN_IMG) {
            setImgSrc(FALLBACK_MOUNTAIN_IMG);
          }
          setLoaded(true);
        }}
        className={`w-full h-full object-cover transition-all duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

// ============================================================================
// CURATED HIGH-RESOLUTION REAL-WORLD PHOTOGRAPHY & DATA
// ============================================================================
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85";

const ABOUT_IMAGES = {
  main: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1400&q=85",
  secondary: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
};

const ROOMS_DATA = [
  {
    id: "mountain-view-deluxe",
    number: "01",
    name: "Mountain View Deluxe Room",
    tagline: "Floor-to-ceiling alpine framing above the timberline.",
    price: 340,
    maxOccupancy: "2 Adults",
    maxAdults: 2,
    maxChildren: 1,
    bedConfig: "1 King-Size Organic Linen Bed",
    sizeSqm: 48,
    bathroom: "Rain Shower & Deep Freestanding Soaking Tub",
    viewType: "Panoramic Snow-Capped Peak View",
    balcony: "Private Cantilevered Cedar Balcony",
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    accentColor: "#183F32",
    badge: "Couples' Sanctuary",
    shortIntro:
      "Crafted in warm Nordic larch and honed slate, featuring uninterrupted floor-to-ceiling glass overlooking the eastern granite spires and morning mist.",
    fullDescription:
      "Designed for quiet contemplation above Valenreach Pass, the Mountain View Deluxe Room pairs Scandinavian architectural restraint with tactile warmth. Wake to alpenglow spilling across snow-dusted summits directly from your custom king bed, step onto your cantilevered cedar balcony with freshly brewed pour-over coffee, and unwind in a limestone bath overlooking ancient evergreens.",
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85",
    ],
    highlights: ["Private Balcony", "Panoramic Windows", "Soaking Tub", "Artisanal Espresso Bar"],
    amenities: [
      "Floor-to-ceiling triple-glazed acoustic mountain windows",
      "Private cantilevered cedar balcony with lounge chairs",
      "King-size bed with organic Merino wool & Egyptian cotton bedding",
      "Spa bathroom with rainfall shower & deep soaking tub",
      "Radiant underfloor heating & individual climate control",
      "Complimentary high-speed fiber Wi-Fi & Marshall acoustic speaker",
      "Daily organic alpine breakfast included",
    ],
  },
  {
    id: "forest-family-suite",
    number: "02",
    name: "Forest Family Suite",
    tagline: "Two-wing woodland sanctuary nestled among towering pines.",
    price: 520,
    maxOccupancy: "4 Guests (2 Adults + 2 Children)",
    maxAdults: 2,
    maxChildren: 2,
    bedConfig: "1 King Bed + 2 Custom Twin Alcove Beds",
    sizeSqm: 78,
    bathroom: "Dual-Vanity Stone Bathroom + Separate Powder Room",
    viewType: "Ancient Alpine Pine Canopy View",
    balcony: "Wraparound Forest-Facing Timber Deck",
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    accentColor: "#244C65",
    badge: "Family Retreat",
    shortIntro:
      "A generous two-zone residence suspended beside old-growth conifers, offering a sunlit reading lounge, separate sleeping quarters, and a wraparound forest deck.",
    fullDescription:
      "Created for families seeking shared wonder without compromising architectural serenity, the Forest Family Suite separates a tranquil primary king bedroom from a cozy twin timber sleeping nook via sliding acoustic oak panels. Gather around the sunlit living lounge after a day on the valley trails, or listen to wind rustling through the fir canopy from your private wraparound terrace.",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    ],
    highlights: ["Two Sleeping Zones", "Wraparound Forest Deck", "Family Lounge", "Dual Vanity Bath"],
    amenities: [
      "Primary king suite plus sliding-door twin sleeping alcove",
      "Spacious living area with curated nature library & board games",
      "Wraparound private forest deck with outdoor daybed",
      "Dual-vanity river-stone bathroom with oversized walk-in shower",
      "Pantry bar with minibar, herbal teas & children's welcome kit",
      "Complimentary high-speed Wi-Fi & smart projection screen",
      "Daily organic alpine breakfast for all registered guests",
    ],
  },
  {
    id: "alpine-luxury-cabin",
    number: "03",
    name: "Alpine Luxury Cabin",
    tagline: "Freestanding timber-and-stone chalet with wood-burning hearth.",
    price: 680,
    maxOccupancy: "2–3 Guests",
    maxAdults: 3,
    maxChildren: 1,
    bedConfig: "1 Super King Bed + Fireside Lounge Daybed",
    sizeSqm: 92,
    bathroom: "Private Cedar Sauna & Stone Spa Bath",
    viewType: "Unobstructed Glacier Valley & Ridge View",
    balcony: "Private Stargazing Terrace & Outdoor Hearth",
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    accentColor: "#183F32",
    badge: "Most Requested",
    shortIntro:
      "An architectural standalone timber sanctuary set on a secluded granite outcrop, complete with a suspended wood-burning fireplace, private sauna, and outdoor terrace.",
    fullDescription:
      "Set apart along the upper ridge for complete seclusion, the Alpine Luxury Cabin embodies modern Nordic wilderness architecture. Charred cedar cladding shelters an airy cathedral-ceilinged interior anchored by a suspended cast-iron wood fireplace. After dusk, step from your private Finnish cedar sauna onto your heated stone terrace beneath zero-light-pollution alpine skies.",
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=85",
    ],
    highlights: ["Standalone Cabin", "Wood Fireplace", "Private Cedar Sauna", "Stargazing Deck"],
    amenities: [
      "Standalone architectural cabin with private footpath entrance",
      "Suspended wood-burning fireplace with seasoned birch logs",
      "Private indoor Finnish cedar sauna & rain shower",
      "Expansive outdoor relaxation terrace with lounge & telescope",
      "Super-king canopy bed facing 18-foot glacier valley glass",
      "Dedicated boot warmer, ski/hiking gear alcove & espresso bar",
      "Complimentary breakfast & evening fireside aperitif",
    ],
  },
  {
    id: "lakeside-premium-villa",
    number: "04",
    name: "Lakeside Premium Villa",
    tagline: "Flagship waterfront residence poised above turquoise glacial waters.",
    price: 950,
    maxOccupancy: "4–6 Guests",
    maxAdults: 4,
    maxChildren: 2,
    bedConfig: "2 King Master Suites + Living Pavilion",
    sizeSqm: 145,
    bathroom: "2 En-Suite Spa Baths + Outdoor Cedar Hot Tub",
    viewType: "Direct Turquoise Alpine Lakefront & Peaks",
    balcony: "Private Waterfront Terrace, Firepit & Jetty",
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    accentColor: "#244C65",
    badge: "Flagship Residence",
    shortIntro:
      "Our crowning two-bedroom lakefront villa featuring a glass-walled living pavilion, private outdoor cedar soaking tub, waterside firepit, and panoramic fjord-like reflections.",
    fullDescription:
      "Cantilevered gently above the mirror-still turquoise shoreline of Valenreach Tarn, the Lakeside Premium Villa is the pinnacle of private alpine living. Two symmetrical king master wings flank an expansive central living and dining pavilion with disappearing glass walls. Step straight onto your private timber terrace to soak in a steaming cedar hot tub as snow-capped peaks reflect across the water.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85",
    ],
    highlights: ["Direct Lakefront", "2 King Master Suites", "Outdoor Cedar Tub", "Private Firepit Terrace"],
    amenities: [
      "Two private king master bedrooms with uninterrupted lake views",
      "Open-plan living & dining pavilion with chef's wine cellar",
      "Private waterfront terrace with heated outdoor cedar hot tub",
      "Sunken stone firepit lounge & direct morning kayak access",
      "Two spa bathrooms with steam showers & botanical bath rituals",
      "Priority private concierge & custom in-villa dining option",
      "Complimentary gourmet breakfast & welcome champagne",
    ],
  },
];

const FACILITIES_LIST = [
  {
    icon: Wifi,
    title: "High-Speed Fiber Wi-Fi",
    desc: "Seamless satellite-backed mesh connectivity across all cabins, lounges, and forest decks.",
  },
  {
    icon: Car,
    title: "Private Valet & EV Parking",
    desc: "Covered timber carports with complimentary Level-2 electric vehicle charging stations.",
  },
  {
    icon: Eye,
    title: "Mountain View Balconies",
    desc: "Every residence includes a private cantilevered terrace oriented toward untouched peaks.",
  },
  {
    icon: Waves,
    title: "Heated Alpine Infinity Pool",
    desc: "Geothermally warmed 38°C outdoor mineral pool overlooking the glacial valley year-round.",
  },
  {
    icon: Flame,
    title: "Artisanal BBQ Pavilion",
    desc: "Open-flame cedar grill pavilion equipped with locally sourced ingredients and prep stations.",
  },
  {
    icon: Sun,
    title: "Outdoor Stone Fireplace",
    desc: "Sunken granite amphitheater hearth lit nightly at dusk for fireside storytelling.",
  },
  {
    icon: UtensilsCrossed,
    title: "Organic Breakfast Service",
    desc: "Farm-to-table highland sourdough, wildflower honey, pasture eggs, and specialty roasts.",
  },
  {
    icon: Footprints,
    title: "Private Hiking Trails",
    desc: "14 km of groomed private ridge and lakeside trails accessible directly from your doorstep.",
  },
  {
    icon: HeartHandshake,
    title: "Family-Friendly Comforts",
    desc: "Thoughtful children's bedding, junior trail packs, board games, and gentle meadow paths.",
  },
  {
    icon: Headphones,
    title: "24/7 Dedicated Guest Support",
    desc: "On-site mountain hosts available day and night for trail guidance, transfers, and dining.",
  },
];

const EXPERIENCES_LIST = [
  {
    title: "Sunrise Mountain View",
    subtitle: "05:45 AM • Ridge Overlook",
    description:
      "Watch first golden light ignite the snow-crowned summits from our heated eastern viewing deck with warm spiced cider.",
    image:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Guided Nature Hiking",
    subtitle: "Half-Day • Alpine Meadows",
    description:
      "Traverse wildflower valleys, glacial moraines, and cascading waterfalls led by our resident naturalist guides.",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "High-Altitude Stargazing",
    subtitle: "10:00 PM • Dark Sky Reserve",
    description:
      "Peer through our apochromatic observatory telescope under crystal-clear Bortle Class 1 alpine night skies.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Fireside Outdoor BBQ",
    subtitle: "Sunset • Cedar Pavilion",
    description:
      "Savor flame-kissed highland produce, smoked trout, and artisan flatbreads around glowing birch embers.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Candlelit Romantic Dinner",
    subtitle: "Evening • Glasshouse Conservatory",
    description:
      "An intimate five-course seasonal tasting menu served beside panoramic windows reflecting twilight peaks.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Curated Photography Spots",
    subtitle: "Golden Hour • Mirror Tarn",
    description:
      "Discover secret lakeside vantage points where snow peaks mirror symmetrically in turquoise glacial water.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Relaxing by the Lake",
    subtitle: "All Day • Private Timber Dock",
    description:
      "Unplug in cedar loungers along the tranquil shoreline, paddle a wooden canoe, or read to the rhythm of lapping water.",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80",
  },
];

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
    id: 1,
    category: "Mountain Scenery",
    title: "Turquoise Glacial Tarn at Dawn",
    location: "Valenreach Valley",
    span: "md:col-span-2 md:row-span-2",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: 2,
    category: "Exterior Architecture",
    title: "Nordic Timber & Stone Chalet Facade",
    location: "Upper Ridge Sanctuary",
    span: "md:col-span-1 md:row-span-1",
    src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    category: "Swimming Pool",
    title: "Heated Alpine Infinity Pool Overlooking Peaks",
    location: "Thermal Wellness Deck",
    span: "md:col-span-1 md:row-span-1",
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    category: "Bedrooms",
    title: "Panoramic King Suite Awakening",
    location: "Mountain View Deluxe",
    span: "md:col-span-1 md:row-span-1",
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    category: "Living Spaces",
    title: "Fireside Cedar Lounge & Library",
    location: "Alpine Luxury Cabin",
    span: "md:col-span-1 md:row-span-1",
    src: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    category: "Mountain Scenery",
    title: "Emerald Fjord & Snow-Crowned Spires",
    location: "North Pass Overlook",
    span: "md:col-span-2 md:row-span-1",
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: 7,
    category: "Dining Area",
    title: "Glasshouse Conservatory Table",
    location: "Aurelia Dining Room",
    span: "md:col-span-1 md:row-span-1",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 8,
    category: "Outdoor Experiences",
    title: "Twilight Ridge Trail & Alpine Mist",
    location: "Crestwood Highlands",
    span: "md:col-span-1 md:row-span-1",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 9,
    category: "Exterior Architecture",
    title: "Lakeside Villa Waterfront Terrace",
    location: "Mirror Tarn Shoreline",
    span: "md:col-span-1 md:row-span-1",
    sr
