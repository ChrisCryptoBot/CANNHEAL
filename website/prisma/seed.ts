import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting database seed...')

  // Clear existing data (optional - comment out in production)
  await prisma.cOA.deleteMany()
  await prisma.productVariant.deleteMany()
  await prisma.product.deleteMany()
  await prisma.retailPartner.deleteMany()

  // Create Products
  console.log('Creating products...')

  const oilDog500 = await prisma.product.create({
    data: {
      name: 'CBD Oil for Dogs - 500mg',
      slug: 'cbd-oil-dogs-500mg',
      description:
        'Premium THC-free CBD oil formulated specifically for dogs. Perfect for managing anxiety, joint pain, and promoting overall wellness. CO2-extracted from organic US-grown hemp.',
      category: 'OIL',
      petType: 'DOG',
      retailPrice: 4999,
      wholesalePrice: 2999,
      isActive: true,
      featuredProduct: true,
      cbdMgPerServing: 16,
      servingsPerUnit: 30,
      ingredients:
        'Organic hemp extract (CBD), organic MCT oil (coconut-derived), natural bacon flavor',
      dosageInstructions:
        'Start with 0.2mg CBD per kg of body weight, twice daily. Adjust as needed. Use dropper to add to food or administer directly.',
      imageUrls: ['/products/cbd-oil-500.jpg'],
      batchNumber: 'BATCH-001-2025',
      variants: {
        create: [
          {
            name: '30mL Bottle',
            sku: 'OIL-DOG-500-30',
            size: '30mL',
            retailPrice: 4999,
            wholesalePrice: 2999,
            stockQuantity: 150,
          },
        ],
      },
    },
  })

  const oilDog1000 = await prisma.product.create({
    data: {
      name: 'CBD Oil for Dogs - 1000mg',
      slug: 'cbd-oil-dogs-1000mg',
      description:
        'High-potency THC-free CBD oil for larger dogs or dogs with more severe conditions. Double the strength for maximum therapeutic benefits.',
      category: 'OIL',
      petType: 'DOG',
      retailPrice: 7999,
      wholesalePrice: 4799,
      isActive: true,
      featuredProduct: true,
      cbdMgPerServing: 33,
      servingsPerUnit: 30,
      ingredients:
        'Organic hemp extract (CBD), organic MCT oil (coconut-derived), natural bacon flavor',
      dosageInstructions:
        'For dogs over 50 lbs or with chronic conditions. Start with 0.2mg CBD per kg of body weight, twice daily.',
      imageUrls: ['/products/cbd-oil-1000.jpg'],
      batchNumber: 'BATCH-002-2025',
      variants: {
        create: [
          {
            name: '30mL Bottle',
            sku: 'OIL-DOG-1000-30',
            size: '30mL',
            retailPrice: 7999,
            wholesalePrice: 4799,
            stockQuantity: 120,
          },
        ],
      },
    },
  })

  const oilCat250 = await prisma.product.create({
    data: {
      name: 'CBD Oil for Cats - 250mg',
      slug: 'cbd-oil-cats-250mg',
      description:
        'Specially formulated THC-free CBD oil for cats. Lower concentration perfect for feline metabolism. Helps with anxiety, inflammation, and overall wellness.',
      category: 'OIL',
      petType: 'CAT',
      retailPrice: 3999,
      wholesalePrice: 2399,
      isActive: true,
      featuredProduct: false,
      cbdMgPerServing: 8,
      servingsPerUnit: 30,
      ingredients:
        'Organic hemp extract (CBD), organic MCT oil (coconut-derived), natural salmon flavor',
      dosageInstructions:
        'Start with 0.2mg CBD per kg of body weight, once or twice daily. Cats are more sensitive than dogs - start low.',
      imageUrls: ['/products/cbd-oil-cat-250.jpg'],
      batchNumber: 'BATCH-003-2025',
      variants: {
        create: [
          {
            name: '15mL Bottle',
            sku: 'OIL-CAT-250-15',
            size: '15mL',
            retailPrice: 3999,
            wholesalePrice: 2399,
            stockQuantity: 80,
          },
        ],
      },
    },
  })

  const chewsDog = await prisma.product.create({
    data: {
      name: 'CBD Chews for Dogs',
      slug: 'cbd-chews-dogs',
      description:
        'Delicious THC-free CBD chews dogs love! Made with all-natural ingredients and 10mg CBD per chew. Perfect for dogs who won\'t take oils.',
      category: 'CHEW',
      petType: 'DOG',
      retailPrice: 3999,
      wholesalePrice: 2399,
      isActive: true,
      featuredProduct: true,
      cbdMgPerServing: 10,
      servingsPerUnit: 30,
      ingredients:
        'Organic hemp extract (CBD), peanut butter, oat flour, coconut oil, natural flavors',
      dosageInstructions: 'Give 1 chew per 25 lbs of body weight, once or twice daily.',
      imageUrls: ['/products/cbd-chews-dog.jpg'],
      batchNumber: 'BATCH-004-2025',
      variants: {
        create: [
          {
            name: '30 Count Jar - Peanut Butter',
            sku: 'CHEW-DOG-PB-30',
            size: '30 count',
            retailPrice: 3999,
            wholesalePrice: 2399,
            stockQuantity: 200,
          },
          {
            name: '30 Count Jar - Bacon',
            sku: 'CHEW-DOG-BACON-30',
            size: '30 count',
            retailPrice: 3999,
            wholesalePrice: 2399,
            stockQuantity: 180,
          },
        ],
      },
    },
  })

  const topicalDog = await prisma.product.create({
    data: {
      name: 'CBD Topical Balm for Dogs',
      slug: 'cbd-topical-balm-dogs',
      description:
        'Soothing THC-free CBD balm for localized relief. Perfect for hot spots, dry paws, and skin irritations. Fast-absorbing and non-greasy.',
      category: 'TOPICAL',
      petType: 'DOG',
      retailPrice: 2999,
      wholesalePrice: 1799,
      isActive: true,
      featuredProduct: false,
      cbdMgPerServing: 0, // Topical
      servingsPerUnit: 0,
      ingredients:
        'Organic hemp extract (CBD), coconut oil, beeswax, shea butter, vitamin E, lavender essential oil',
      dosageInstructions: 'Apply small amount to affected area 2-3 times daily. For external use only.',
      imageUrls: ['/products/cbd-balm-dog.jpg'],
      batchNumber: 'BATCH-005-2025',
      variants: {
        create: [
          {
            name: '2oz Tin',
            sku: 'TOPICAL-DOG-2OZ',
            size: '2oz',
            retailPrice: 2999,
            wholesalePrice: 1799,
            stockQuantity: 100,
          },
        ],
      },
    },
  })

  const sprayDog = await prisma.product.create({
    data: {
      name: 'CBD Calming Spray for Dogs',
      slug: 'cbd-calming-spray-dogs',
      description:
        'Fast-acting THC-free CBD spray for immediate anxiety relief. Perfect for vet visits, thunderstorms, and stressful situations.',
      category: 'SPRAY',
      petType: 'DOG',
      retailPrice: 3499,
      wholesalePrice: 2099,
      isActive: true,
      featuredProduct: false,
      cbdMgPerServing: 5,
      servingsPerUnit: 60,
      ingredients:
        'Organic hemp extract (CBD), distilled water, vegetable glycerin, chamomile extract, valerian root extract',
      dosageInstructions: 'Spray 2-4 times into mouth or on treats before stressful events.',
      imageUrls: ['/products/cbd-spray-dog.jpg'],
      batchNumber: 'BATCH-006-2025',
      variants: {
        create: [
          {
            name: '2oz Spray Bottle',
            sku: 'SPRAY-DOG-2OZ',
            size: '2oz',
            retailPrice: 3499,
            wholesalePrice: 2099,
            stockQuantity: 90,
          },
        ],
      },
    },
  })

  // Create COAs
  console.log('Creating Certificates of Analysis...')

  await prisma.cOA.create({
    data: {
      batchNumber: 'BATCH-001-2025',
      productId: oilDog500.id,
      testDate: new Date('2025-01-15'),
      labName: 'ProVerde Laboratories',
      labLocation: 'Milford, MA',
      cbdContent: 500,
      thcContent: 0,
      heavyMetals: true,
      pesticides: true,
      microbials: true,
      pdfUrl: '/coa/BATCH-001-2025.pdf',
      qrCodeUrl: '/qr/BATCH-001-2025.png',
    },
  })

  await prisma.cOA.create({
    data: {
      batchNumber: 'BATCH-002-2025',
      productId: oilDog1000.id,
      testDate: new Date('2025-01-15'),
      labName: 'ProVerde Laboratories',
      labLocation: 'Milford, MA',
      cbdContent: 1000,
      thcContent: 0,
      heavyMetals: true,
      pesticides: true,
      microbials: true,
      pdfUrl: '/coa/BATCH-002-2025.pdf',
      qrCodeUrl: '/qr/BATCH-002-2025.png',
    },
  })

  await prisma.cOA.create({
    data: {
      batchNumber: 'BATCH-003-2025',
      productId: oilCat250.id,
      testDate: new Date('2025-01-20'),
      labName: 'ProVerde Laboratories',
      labLocation: 'Milford, MA',
      cbdContent: 250,
      thcContent: 0,
      heavyMetals: true,
      pesticides: true,
      microbials: true,
      pdfUrl: '/coa/BATCH-003-2025.pdf',
      qrCodeUrl: '/qr/BATCH-003-2025.png',
    },
  })

  await prisma.cOA.create({
    data: {
      batchNumber: 'BATCH-004-2025',
      productId: chewsDog.id,
      testDate: new Date('2025-01-22'),
      labName: 'ProVerde Laboratories',
      labLocation: 'Milford, MA',
      cbdContent: 300,
      thcContent: 0,
      heavyMetals: true,
      pesticides: true,
      microbials: true,
      pdfUrl: '/coa/BATCH-004-2025.pdf',
      qrCodeUrl: '/qr/BATCH-004-2025.png',
    },
  })

  // Create Retail Partners for homepage ticker
  console.log('Creating retail partners...')

  const partners = [
    'Pawsome Pet Supply',
    'Happy Tails Boutique',
    'Austin Veterinary Clinic',
    'Bark & Meow Emporium',
    'Texas Pet Wellness',
    'Furry Friends Shop',
    'Hill Country Pets',
    'Dallas Pet Store',
    'Houston Animal Hospital',
    'San Antonio Pet Care',
  ]

  for (const partnerName of partners) {
    await prisma.retailPartner.create({
      data: {
        businessName: partnerName,
        city: 'Austin',
        state: 'TX',
        logo: '',
        isActive: true,
      },
    })
  }

  console.log('Database seed completed successfully!')
  console.log('Created:')
  console.log('- 6 products with variants')
  console.log('- 4 Certificates of Analysis')
  console.log('- 10 retail partners')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
