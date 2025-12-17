export interface ServiceData {
  id: string;
  slug: string; // unique string for URLs
  title: string;
  subtitle: string;
  category: string; // 'cleaning' | 'outdoor' | 'auto' | 'labor'

  // Header / Visuals
  coverImage: string;
  thumbnail: string;

  // Stats
  rating: number;
  reviewsCount: number;

  // Logic: Does this service jump straight to booking, or does it have sub-menus?
  hasSubCategories: boolean;

  // Content for "ServiceInfo" component
  description: string;
  features: string[]; // Bullet points (e.g., "Eco-friendly soap", "Insurance included")

  // Content for "OptionsToggle" & "QuantitySelector" & "PaymentSummary"
  pricing: {
    mode: "quantity" | "fixed" | "hourly"; // How do we calculate price?
    unitName: string; // e.g., "Bag", "Car", "Hour", "Worker"
    oneTimePrice: number;
    subscriptionPrice: number; // Usually cheaper
    currencySymbol: string;
  };

  // ONLY used if hasSubCategories is true (Like your Service Options page)
  subCategories?: {
    id: string;
    name: string;
    description: string;
    price: number;
  }[];
}

export const SERVICES_DATA: ServiceData[] = [
  {
    id: "1",
    slug: "laundry",
    title: "Laundry Service",
    subtitle: "Washing, Folding & Ironing",
    category: "cleaning",
    coverImage:
      "https://images.unsplash.com/photo-1545173168-9f1947eebb8f?q=80&w=1200",
    thumbnail:
      "https://images.unsplash.com/photo-1517677208171-0bc6799a4267?q=80&w=400",
    rating: 4.8,
    reviewsCount: 124,
    hasSubCategories: true, // This suggests we should go to 'service-options' first
    description:
      "Experience the ultimate convenience with our premium laundry service. We sort, wash, dry, and fold your clothes with hypoallergenic detergents.",
    features: [
      "Separation of colors and whites",
      "Hypoallergenic detergents",
      "Free pickup and delivery",
      "24-hour turnaround",
    ],
    pricing: {
      mode: "quantity",
      unitName: "Load",
      oneTimePrice: 35000,
      subscriptionPrice: 28000,
      currencySymbol: "UGX",
    },
    subCategories: [
      {
        id: "wash-fold",
        name: "Wash & Fold",
        description: "Standard cleaning",
        price: 35000,
      },
      {
        id: "ironing",
        name: "Ironing Only",
        description: "Pressing services",
        price: 20000,
      },
      {
        id: "dry-clean",
        name: "Dry Cleaning",
        description: "For delicate suits/dresses",
        price: 50000,
      },
    ],
  },
  {
    id: "2",
    slug: "car-wash",
    title: "Car Wash",
    subtitle: "Tewekoya, Make life Easy", // Updated to match image
    category: "auto",
    // Used the image from your screenshot context roughly
    coverImage:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1200",
    thumbnail:
      "https://images.unsplash.com/photo-1605218427306-022ba7b8a538?q=80&w=400", // Man in blue overalls
    rating: 4.6,
    reviewsCount: 89,
    hasSubCategories: true, // CHANGED TO TRUE
    description: "We come to you! Our van is equipped with water and power.",
    features: [
      "Water & Power supplied",
      "Premium Wax finish",
      "Interior vacuum",
    ],
    pricing: {
      mode: "quantity",
      unitName: "Car",
      oneTimePrice: 25000,
      subscriptionPrice: 20000,
      currencySymbol: "UGX",
    },
    // ADDED SPECIFIC SUB-CATEGORIES FROM IMAGE
    subCategories: [
      {
        id: "ext-wash",
        name: "Exterior wash",
        description: "Standard Cleaning",
        price: 20000,
      },
      {
        id: "tire-rim",
        name: "Tire & rim cleaning",
        description: "Deep Treatment",
        price: 20000,
      },
      {
        id: "int-vac",
        name: "Interior vacuuming",
        description: "Finishing Touch",
        price: 15000,
      },
      {
        id: "seat-shampoo",
        name: "Seat shampooing",
        description: "Gentle Care",
        price: 30000,
      },
      {
        id: "body-wax",
        name: "Body waxing",
        description: "Delicate Fabrics",
        price: 50000,
      },
      {
        id: "steam",
        name: "Steam cleaning",
        description: "Sanitizing Clean",
        price: 45000,
      },
      {
        id: "carpet",
        name: "Carpet cleaning",
        description: "Heavy Duty",
        price: 25000,
      },
      {
        id: "headlight",
        name: "Headlight restoration",
        description: "Special Care",
        price: 20000,
      },
    ],
  },
  {
    id: "3",
    slug: "gardening",
    title: "Gardening & Landscape",
    subtitle: "Compound Maintenance",
    category: "outdoor",
    coverImage:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=1200",
    thumbnail:
      "https://images.unsplash.com/photo-1615811361269-89432d83663d?q=80&w=400",
    rating: 4.9,
    reviewsCount: 56,
    hasSubCategories: false,
    description:
      "Keep your compound green and clean. Our team handles grass cutting, hedge trimming, and flower bed maintenance.",
    features: [
      "Own tools provided",
      "Green waste disposal included",
      "Expert pruning",
    ],
    pricing: {
      mode: "fixed", // Fixed price per visit regardless of hours (simplified)
      unitName: "Visit",
      oneTimePrice: 50000,
      subscriptionPrice: 40000,
      currencySymbol: "UGX",
    },
  },
  {
    id: "4",
    slug: "construction",
    title: "Casual Laborers",
    subtitle: "Site Porters & Helpers",
    category: "labor",
    coverImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
    thumbnail:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=400",
    rating: 4.5,
    reviewsCount: 32,
    hasSubCategories: false,
    description:
      "Need strong hands for a day? Our verified porters can help with moving materials, mixing cement, or site clearing.",
    features: [
      "Safety gear equipped",
      "Verified IDs",
      "Hardworking & Punctual",
    ],
    pricing: {
      mode: "quantity",
      unitName: "Worker",
      oneTimePrice: 30000,
      subscriptionPrice: 30000, // No discount on labor usually
      currencySymbol: "UGX",
    },
  },
  {
    id: "5",
    slug: "house-help",
    title: "Domestic Help",
    subtitle: "Maids & House Boys",
    category: "cleaning",
    coverImage:
      "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?q=80&w=1200",
    thumbnail:
      "https://images.unsplash.com/photo-1581578731117-104f2a41272c?q=80&w=400",
    rating: 4.7,
    reviewsCount: 210,
    hasSubCategories: false,
    description:
      "Professional home cleaning and organization. Our staff helps with dishes, dusting, floor mopping, and general tidying up.",
    features: ["Background checked", "Trained in hygiene", "Pet friendly"],
    pricing: {
      mode: "hourly",
      unitName: "Hour",
      oneTimePrice: 15000,
      subscriptionPrice: 12000,
      currencySymbol: "UGX",
    },
  },
];
