import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { logger } from '@/lib/logger'

export async function GET(
  request: NextRequest,
  { params }: { params: { batchNumber: string } }
) {
  try {
    const coa = await db.cOA.findUnique({
      where: { batchNumber: params.batchNumber },
    })

    if (!coa) {
      return NextResponse.json(
        { error: 'Certificate of Analysis not found for this batch number' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      coa,
    })
  } catch (error) {
    logger.error('Failed to fetch COA', error, { batchNumber: params.batchNumber })
    return NextResponse.json(
      { error: 'Failed to fetch Certificate of Analysis' },
      { status: 500 }
    )
  }
}
