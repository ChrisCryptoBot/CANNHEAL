import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { logger } from '@/lib/logger'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const petType = searchParams.get('petType')
    const limit = parseInt(searchParams.get('limit') || '20')

    const where = {
      ...(category && { category }),
      ...(petType && { petType }),
      inStock: true,
    }

    const products = await db.product.findMany({
      where,
      include: {
        variants: {
          where: { inStock: true },
        },
      },
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json({
      success: true,
      products,
      count: products.length,
    })
  } catch (error) {
    logger.error('Failed to fetch products', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}
