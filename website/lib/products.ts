// Product catalog data structure for CANNHEAL

export type ProductCategory =
  | 'oil'
  | 'chews'
  | 'drops'
  | 'topical'
  | 'spray'
  | 'balm'
  | 'treats'
  | 'supplement'

export type PetType = 'DOG' | 'CAT' | 'HORSE'

export interface Product {
  id: string
  name: string
  petType: PetType
  category: ProductCategory
  description: string
  cbdStrength: number // Total CBD in mg
  cbdPerServing: number // CBD per serving in mg
  servingsPerUnit: number
  price: number // Price in cents
  retailPrice?: number // Retail price in cents (for wholesale)
  wholesalePrice?: number // Wholesale price in cents
  image?: string
  featured?: boolean
  flavor?: string // Only for dog products
  ingredients?: string[]
  benefits?: string[]
  warnings?: string[] // Especially important for cats
}

// TODO: Replace with API call to fetch products from database
export const products: Product[] = [
  // ========== DOG PRODUCTS ==========

  // Daily Wellness Oils (Weight-based)
  {
    id: 'dog-wellness-oil-small',
    name: 'Daily Wellness Oil - Small Dogs',
    petType: 'DOG',
    category: 'oil',
    description: 'Perfect for dogs under 25 lbs. Daily wellness support with organic hemp.',
    cbdStrength: 300,
    cbdPerServing: 10,
    servingsPerUnit: 30,
    price: 3999,
    retailPrice: 3999,
    wholesalePrice: 2400,
    featured: true,
    benefits: [
      'Daily wellness support',
      'Promotes calm behavior',
      'Supports joint health',
      'Easy dropper application',
    ],
  },
  {
    id: 'dog-wellness-oil-medium',
    name: 'Daily Wellness Oil - Medium Dogs',
    petType: 'DOG',
    category: 'oil',
    description: 'Ideal for dogs 25-60 lbs. Balanced daily support for medium breeds.',
    cbdStrength: 600,
    cbdPerServing: 20,
    servingsPerUnit: 30,
    price: 5999,
    retailPrice: 5999,
    wholesalePrice: 3600,
    featured: true,
    benefits: ['Supports daily wellness', 'Joint and mobility support', 'Calm disposition'],
  },
  {
    id: 'dog-wellness-oil-large',
    name: 'Daily Wellness Oil - Large Dogs',
    petType: 'DOG',
    category: 'oil',
    description: 'High-strength formula for dogs over 60 lbs. Maximum support for larger breeds.',
    cbdStrength: 1050,
    cbdPerServing: 35,
    servingsPerUnit: 30,
    price: 7999,
    retailPrice: 7999,
    wholesalePrice: 4800,
    featured: true,
    benefits: [
      'High-strength support',
      'Perfect for large breeds',
      'Joint and mobility',
      'Overall wellness',
    ],
  },

  // Calming Formulas
  {
    id: 'dog-calming-oil',
    name: 'Calming Formula Oil',
    petType: 'DOG',
    category: 'oil',
    description: 'Specially formulated to support calm behavior during stressful situations.',
    cbdStrength: 500,
    cbdPerServing: 17,
    servingsPerUnit: 30,
    price: 5499,
    retailPrice: 5499,
    wholesalePrice: 3300,
    benefits: [
      'Reduces anxiety',
      'Supports calm behavior',
      'Great for separation anxiety',
      'Thunder & fireworks',
    ],
  },
  {
    id: 'dog-calming-chews',
    name: 'Calming Formula Chews',
    petType: 'DOG',
    category: 'chews',
    description: 'Delicious chicken-flavored chews for anxiety and stress relief.',
    cbdStrength: 450,
    cbdPerServing: 15,
    servingsPerUnit: 30,
    price: 4999,
    retailPrice: 4999,
    wholesalePrice: 3000,
    flavor: 'Chicken',
    featured: true,
    benefits: ['Easy to administer', 'Great taste dogs love', 'Fast-acting', 'Travel friendly'],
  },
  {
    id: 'dog-calming-spray',
    name: 'Calming Spray',
    petType: 'DOG',
    category: 'spray',
    description: 'Fast-acting spray for quick anxiety relief. Perfect for on-the-go.',
    cbdStrength: 300,
    cbdPerServing: 10,
    servingsPerUnit: 30,
    price: 3999,
    retailPrice: 3999,
    wholesalePrice: 2400,
    benefits: ['Fast-acting', 'Easy application', 'Travel size', 'Instant relief'],
  },

  // Mobility + Joint Support
  {
    id: 'dog-mobility-oil',
    name: 'Mobility + Joint Support Oil',
    petType: 'DOG',
    category: 'oil',
    description:
      'Premium formula for joint health, mobility, and inflammation support with CBD and glucosamine.',
    cbdStrength: 750,
    cbdPerServing: 25,
    servingsPerUnit: 30,
    price: 6999,
    retailPrice: 6999,
    wholesalePrice: 4200,
    featured: true,
    benefits: [
      'Supports joint health',
      'Reduces inflammation',
      'Improves mobility',
      'With glucosamine',
    ],
  },
  {
    id: 'dog-mobility-chews',
    name: 'Mobility Joint Chews',
    petType: 'DOG',
    category: 'chews',
    description: 'Bacon-flavored chews with CBD and joint-supporting ingredients.',
    cbdStrength: 600,
    cbdPerServing: 20,
    servingsPerUnit: 30,
    price: 5999,
    retailPrice: 5999,
    wholesalePrice: 3600,
    flavor: 'Bacon',
    benefits: ['Joint support', 'Great bacon taste', 'Easy to give', 'With turmeric'],
  },
  {
    id: 'dog-mobility-topical',
    name: 'Joint & Muscle Topical',
    petType: 'DOG',
    category: 'topical',
    description: 'Targeted relief for sore joints and muscles. Apply directly to affected areas.',
    cbdStrength: 500,
    cbdPerServing: 33,
    servingsPerUnit: 15,
    price: 4999,
    retailPrice: 4999,
    wholesalePrice: 3000,
    benefits: [
      'Targeted relief',
      'Absorbs quickly',
      'Non-greasy formula',
      'With arnica & menthol',
    ],
  },

  // Skin & Coat Products
  {
    id: 'dog-skin-coat-oil',
    name: 'Skin & Coat Support Oil',
    petType: 'DOG',
    category: 'oil',
    description: 'Supports healthy skin and shiny coat from the inside out.',
    cbdStrength: 450,
    cbdPerServing: 15,
    servingsPerUnit: 30,
    price: 4999,
    retailPrice: 4999,
    wholesalePrice: 3000,
    benefits: [
      'Healthy skin',
      'Shiny coat',
      'Reduces itching',
      'With omega fatty acids',
    ],
  },
  {
    id: 'dog-skin-balm',
    name: 'Soothing Skin Balm',
    petType: 'DOG',
    category: 'balm',
    description: 'Topical balm for dry, irritated skin. Perfect for paw pads and hot spots.',
    cbdStrength: 250,
    cbdPerServing: 17,
    servingsPerUnit: 15,
    price: 3499,
    retailPrice: 3499,
    wholesalePrice: 2100,
    benefits: ['Soothes irritation', 'Moisturizes skin', 'Safe if licked', 'Natural ingredients'],
  },
  {
    id: 'dog-itch-spray',
    name: 'Anti-Itch Relief Spray',
    petType: 'DOG',
    category: 'spray',
    description: 'Fast-acting spray for itchy, irritated skin. Provides instant relief.',
    cbdStrength: 300,
    cbdPerServing: 10,
    servingsPerUnit: 30,
    price: 3999,
    retailPrice: 3999,
    wholesalePrice: 2400,
    benefits: ['Instant relief', 'Reduces scratching', 'Cooling sensation', 'Easy application'],
  },

  // Digestive/Gut Support
  {
    id: 'dog-digestive-oil',
    name: 'Digestive Support Oil',
    petType: 'DOG',
    category: 'oil',
    description: 'Supports healthy digestion and gut function with CBD and probiotics.',
    cbdStrength: 450,
    cbdPerServing: 15,
    servingsPerUnit: 30,
    price: 4999,
    retailPrice: 4999,
    wholesalePrice: 3000,
    benefits: ['Supports digestion', 'With probiotics', 'Reduces upset stomach', 'Healthy gut'],
  },
  {
    id: 'dog-digestive-supplement',
    name: 'Gut Health Supplement Powder',
    petType: 'DOG',
    category: 'supplement',
    description: 'Powdered supplement for digestive health. Mix with food.',
    cbdStrength: 600,
    cbdPerServing: 20,
    servingsPerUnit: 30,
    price: 5499,
    retailPrice: 5499,
    wholesalePrice: 3300,
    benefits: [
      'Easy to mix with food',
      'Probiotics & enzymes',
      'Supports gut health',
      'Flavorless',
    ],
  },

  // ========== CAT PRODUCTS ==========

  // Unflavored CBD Oils
  {
    id: 'cat-wellness-oil-small',
    name: 'Cat-Safe Wellness Oil (Unflavored)',
    petType: 'CAT',
    category: 'oil',
    description:
      'Specially formulated for cats with sensitive systems. 100% cat-safe, unflavored formula.',
    cbdStrength: 150,
    cbdPerServing: 5,
    servingsPerUnit: 30,
    price: 3499,
    retailPrice: 3499,
    wholesalePrice: 2100,
    featured: true,
    benefits: ['Cat-safe formula', 'Unflavored', 'No harmful terpenes', 'Daily wellness'],
    warnings: [
      'Never use dog products on cats',
      'Avoid citrus, peppermint, and essential oils',
      'Consult vet before use',
    ],
  },
  {
    id: 'cat-wellness-oil-medium',
    name: 'Cat-Safe Wellness Oil - Medium Strength',
    petType: 'CAT',
    category: 'oil',
    description: 'Medium-strength unflavored oil for cats 8-15 lbs.',
    cbdStrength: 360,
    cbdPerServing: 12,
    servingsPerUnit: 30,
    price: 4999,
    retailPrice: 4999,
    wholesalePrice: 3000,
    benefits: [
      'Medium strength',
      'Cat-safe ingredients',
      'Unflavored',
      'Clean formulation',
    ],
    warnings: ['Cats are more sensitive than dogs', 'Start with lower doses'],
  },

  // Cat-safe Calming Drops
  {
    id: 'cat-calming-drops',
    name: 'Cat Calming Drops (Unflavored)',
    petType: 'CAT',
    category: 'drops',
    description:
      'Gentle calming formula specifically designed for feline anxiety and stress.',
    cbdStrength: 240,
    cbdPerServing: 8,
    servingsPerUnit: 30,
    price: 3999,
    retailPrice: 3999,
    wholesalePrice: 2400,
    featured: true,
    benefits: [
      'Reduces anxiety',
      'Vet visits & travel',
      'Cat-safe ingredients',
      'Easy dropper',
    ],
    warnings: ['Do not use essential oils with cats', 'Avoid peppermint and citrus'],
  },

  // Skin/Topical Balms
  {
    id: 'cat-skin-balm',
    name: 'Cat-Safe Skin Balm',
    petType: 'CAT',
    category: 'balm',
    description: 'Gentle topical balm safe for feline skin. No harmful essential oils.',
    cbdStrength: 150,
    cbdPerServing: 10,
    servingsPerUnit: 15,
    price: 3299,
    retailPrice: 3299,
    wholesalePrice: 2000,
    benefits: ['Safe if licked', 'No essential oils', 'Soothes skin', 'Gentle formula'],
    warnings: ['Never use dog topicals on cats', 'Avoid menthol and camphor'],
  },

  // Simple, limited-ingredient treats
  {
    id: 'cat-treats',
    name: 'Simple Ingredient Cat Treats',
    petType: 'CAT',
    category: 'treats',
    description: 'Limited ingredient treats with cat-safe CBD. No artificial flavors.',
    cbdStrength: 150,
    cbdPerServing: 5,
    servingsPerUnit: 30,
    price: 3499,
    retailPrice: 3499,
    wholesalePrice: 2100,
    benefits: ['Simple ingredients', 'Natural flavor', 'Cat-safe', 'Easy to give'],
    warnings: ['Monitor for allergic reactions', 'Introduce slowly'],
  },

  // ========== HORSE PRODUCTS ==========

  // High-strength CBD Oils
  {
    id: 'horse-oil-3000',
    name: 'Equine High-Strength Oil 3000mg',
    petType: 'HORSE',
    category: 'oil',
    description:
      'Premium high-strength CBD oil formulated for horses. Perfect for daily wellness and joint support.',
    cbdStrength: 3000,
    cbdPerServing: 100,
    servingsPerUnit: 30,
    price: 14999,
    retailPrice: 14999,
    wholesalePrice: 9000,
    featured: true,
    benefits: [
      'High potency',
      'Supports joint health',
      'Reduces inflammation',
      'Daily wellness',
    ],
  },
  {
    id: 'horse-oil-5000',
    name: 'Equine High-Strength Oil 5000mg',
    petType: 'HORSE',
    category: 'oil',
    description:
      'Maximum strength CBD oil for larger horses or those with severe joint issues.',
    cbdStrength: 5000,
    cbdPerServing: 167,
    servingsPerUnit: 30,
    price: 22999,
    retailPrice: 22999,
    wholesalePrice: 13800,
    featured: true,
    benefits: [
      'Maximum strength',
      'For large horses',
      'Chronic conditions',
      'Professional grade',
    ],
  },
  {
    id: 'horse-performance-oil',
    name: 'Equine Performance Recovery Oil',
    petType: 'HORSE',
    category: 'oil',
    description:
      'Specially formulated for performance horses. Supports recovery after training and competition.',
    cbdStrength: 4500,
    cbdPerServing: 150,
    servingsPerUnit: 30,
    price: 19999,
    retailPrice: 19999,
    wholesalePrice: 12000,
    featured: true,
    benefits: [
      'Performance recovery',
      'Reduces muscle soreness',
      'Supports endurance',
      'Post-workout',
    ],
  },

  // Topicals for Joints & Muscles
  {
    id: 'horse-joint-topical',
    name: 'Equine Joint & Muscle Topical',
    petType: 'HORSE',
    category: 'topical',
    description:
      'Professional-grade topical for targeted relief of sore joints and muscles.',
    cbdStrength: 3000,
    cbdPerServing: 200,
    servingsPerUnit: 15,
    price: 12999,
    retailPrice: 12999,
    wholesalePrice: 7800,
    benefits: [
      'Targeted relief',
      'Fast absorption',
      'With arnica',
      'Professional grade',
    ],
  },
  {
    id: 'horse-muscle-balm',
    name: 'Equine Muscle Recovery Balm',
    petType: 'HORSE',
    category: 'balm',
    description: 'Soothing balm for muscle recovery and inflammation. Great for legs and joints.',
    cbdStrength: 2000,
    cbdPerServing: 133,
    servingsPerUnit: 15,
    price: 9999,
    retailPrice: 9999,
    wholesalePrice: 6000,
    benefits: ['Muscle recovery', 'Reduces swelling', 'Cooling effect', 'Easy application'],
  },
  {
    id: 'horse-liniment',
    name: 'CBD-Infused Equine Liniment',
    petType: 'HORSE',
    category: 'topical',
    description:
      'Traditional liniment enhanced with CBD. Perfect for post-workout muscle care.',
    cbdStrength: 1500,
    cbdPerServing: 100,
    servingsPerUnit: 15,
    price: 8999,
    retailPrice: 8999,
    wholesalePrice: 5400,
    benefits: ['Traditional formula', 'With CBD', 'Warming effect', 'Muscle relaxation'],
  },

  // Feed-Ready Supplements
  {
    id: 'horse-feed-pellets',
    name: 'Equine Feed-Ready Supplement (Pelleted)',
    petType: 'HORSE',
    category: 'supplement',
    description: 'Easy-to-feed pelleted supplement. Mix with regular feed for daily wellness.',
    cbdStrength: 3000,
    cbdPerServing: 100,
    servingsPerUnit: 30,
    price: 16999,
    retailPrice: 16999,
    wholesalePrice: 10200,
    benefits: ['Easy to feed', 'Mix with grain', 'Consistent dosing', 'Palatable'],
  },
  {
    id: 'horse-feed-powder',
    name: 'Equine Wellness Powder Supplement',
    petType: 'HORSE',
    category: 'supplement',
    description: 'Fine powder supplement for horses. Mixes easily with any feed.',
    cbdStrength: 3500,
    cbdPerServing: 117,
    servingsPerUnit: 30,
    price: 17999,
    retailPrice: 17999,
    wholesalePrice: 10800,
    benefits: ['Fine powder', 'Easy mixing', 'Flavorless', 'Fast absorption'],
  },
  {
    id: 'horse-calming-supplement',
    name: 'Equine Calming & Travel Support',
    petType: 'HORSE',
    category: 'supplement',
    description:
      'Calming supplement for trailer anxiety, show nerves, and behavioral support.',
    cbdStrength: 2500,
    cbdPerServing: 83,
    servingsPerUnit: 30,
    price: 14999,
    retailPrice: 14999,
    wholesalePrice: 9000,
    benefits: [
      'Reduces trailer anxiety',
      'Show preparation',
      'Behavioral support',
      'Fast-acting',
    ],
  },
]

// Helper functions
export function getProductsByPetType(petType: PetType): Product[] {
  return products.filter((p) => p.petType === petType)
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}
