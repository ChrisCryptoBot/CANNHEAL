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
      tagline: 'Calming support for anxious pets',
      description:
        'Premium THC-free CBD oil formulated specifically for dogs. Perfect for managing anxiety, joint pain, and promoting overall wellness. CO2-extracted from organic US-grown hemp.',
      category: 'OIL',
      petType: 'DOG',
      retailPrice: 4999,
      wholesalePrice: 2999,
      cbdMgPerServing: 16,
      servingsPerUnit: 30,
      sku: 'OIL-DOG-500',
      inStock: true,
      images: ['/products/cbd-oil-500.jpg'],
      variants: {
        create: [
          {
            name: '30mL Bottle',
            sku: 'OIL-DOG-500-30',
            retailPrice: 4999,
            wholesalePrice: 2999,
            inStock: true,
          },
        ],
      },
    },
  })

  const oilDog1000 = await prisma.product.create({
    data: {
      name: 'CBD Oil for Dogs - 1000mg',
      slug: 'cbd-oil-dogs-1000mg',
      tagline: 'High-potency formula for larger dogs',
      description:
        'High-potency THC-free CBD oil for larger dogs or dogs with more severe conditions. Double the strength for maximum therapeutic benefits.',
      category: 'OIL',
      petType: 'DOG',
      retailPrice: 7999,
      wholesalePrice: 4799,
      cbdMgPerServing: 33,
      servingsPerUnit: 30,
      sku: 'OIL-DOG-1000',
      inStock: true,
      images: ['/products/cbd-oil-1000.jpg'],
      variants: {
        create: [
          {
            name: '30mL Bottle',
            sku: 'OIL-DOG-1000-30',
            retailPrice: 7999,
            wholesalePrice: 4799,
            inStock: true,
          },
        ],
      },
    },
  })

  const oilCat250 = await prisma.product.create({
    data: {
      name: 'CBD Oil for Cats - 250mg',
      slug: 'cbd-oil-cats-250mg',
      tagline: 'Gentle calming formula',
      description:
        'Specially formulated THC-free CBD oil for cats. Lower concentration perfect for feline metabolism. Helps with anxiety, inflammation, and overall wellness.',
      category: 'OIL',
      petType: 'CAT',
      retailPrice: 3999,
      wholesalePrice: 2399,
      cbdMgPerServing: 8,
      servingsPerUnit: 30,
      sku: 'OIL-CAT-250',
      inStock: true,
      images: ['/products/cbd-oil-cat-250.jpg'],
      variants: {
        create: [
          {
            name: '15mL Bottle',
            sku: 'OIL-CAT-250-15',
            retailPrice: 3999,
            wholesalePrice: 2399,
            inStock: true,
          },
        ],
      },
    },
  })

  const chewsDog = await prisma.product.create({
    data: {
      name: 'CBD Chews for Dogs',
      slug: 'cbd-chews-dogs-300mg',
      tagline: 'Joint mobility support',
      description:
        'Delicious THC-free CBD chews dogs love! Made with all-natural ingredients and 10mg CBD per chew. Perfect for dogs who won\'t take oils.',
      category: 'CHEW',
      petType: 'DOG',
      retailPrice: 3999,
      wholesalePrice: 2399,
      cbdMgPerServing: 10,
      servingsPerUnit: 30,
      sku: 'CHEW-DOG-300',
      inStock: true,
      images: ['/products/cbd-chews-dog.jpg'],
      variants: {
        create: [
          {
            name: '30 Count Jar - Peanut Butter',
            sku: 'CHEW-DOG-PB-30',
            retailPrice: 3999,
            wholesalePrice: 2399,
            inStock: true,
          },
          {
            name: '30 Count Jar - Bacon',
            sku: 'CHEW-DOG-BACON-30',
            retailPrice: 3999,
            wholesalePrice: 2399,
            inStock: true,
          },
        ],
      },
    },
  })

  const topicalDog = await prisma.product.create({
    data: {
      name: 'CBD Topical Balm for Dogs',
      slug: 'cbd-topical-balm-dogs',
      tagline: 'Soothing localized relief',
      description:
        'Soothing THC-free CBD balm for localized relief. Perfect for hot spots, dry paws, and skin irritations. Fast-absorbing and non-greasy.',
      category: 'TOPICAL',
      petType: 'DOG',
      retailPrice: 2999,
      wholesalePrice: 1799,
      cbdMgPerServing: 0, // Topical
      servingsPerUnit: 1,
      sku: 'TOPICAL-DOG',
      inStock: true,
      images: ['/products/cbd-balm-dog.jpg'],
      variants: {
        create: [
          {
            name: '2oz Tin',
            sku: 'TOPICAL-DOG-2OZ',
            retailPrice: 2999,
            wholesalePrice: 1799,
            inStock: true,
          },
        ],
      },
    },
  })

  const sprayDog = await prisma.product.create({
    data: {
      name: 'CBD Calming Spray for Dogs',
      slug: 'cbd-calming-spray-dogs',
      tagline: 'Fast-acting anxiety relief',
      description:
        'Fast-acting THC-free CBD spray for immediate anxiety relief. Perfect for vet visits, thunderstorms, and stressful situations.',
      category: 'SPRAY',
      petType: 'DOG',
      retailPrice: 3499,
      wholesalePrice: 2099,
      cbdMgPerServing: 5,
      servingsPerUnit: 60,
      sku: 'SPRAY-DOG',
      inStock: true,
      images: ['/products/cbd-spray-dog.jpg'],
      variants: {
        create: [
          {
            name: '2oz Spray Bottle',
            sku: 'SPRAY-DOG-2OZ',
            retailPrice: 3499,
            wholesalePrice: 2099,
            inStock: true,
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
      cbdContent: 16.67, // Percentage (500mg / 30mL * 100 / 100)
      thcContent: 0.0,
      passStatus: true,
      heavyMetals: true,
      pesticides: true,
      microbials: true,
      residualSolvents: true,
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
      cbdContent: 33.33, // Percentage
      thcContent: 0.0,
      passStatus: true,
      heavyMetals: true,
      pesticides: true,
      microbials: true,
      residualSolvents: true,
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
      cbdContent: 16.67, // Percentage
      thcContent: 0.0,
      passStatus: true,
      heavyMetals: true,
      pesticides: true,
      microbials: true,
      residualSolvents: true,
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
      cbdContent: 10.0, // Percentage per serving
      thcContent: 0.0,
      passStatus: true,
      heavyMetals: true,
      pesticides: true,
      microbials: true,
      residualSolvents: true,
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
        name: partnerName,
        logoUrl: '',
        websiteUrl: null,
        isActive: true,
        sortOrder: 0,
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
