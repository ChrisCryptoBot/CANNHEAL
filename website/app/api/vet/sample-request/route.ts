import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { vetSampleRequestSchema } from '@/lib/validations'
import { logger } from '@/lib/logger'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validationResult = vetSampleRequestSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid request data', details: validationResult.error.errors },
        { status: 400 }
      )
    }

    const data = validationResult.data

    // Create sample request in database
    const sampleRequest = await db.vetSampleRequest.create({
      data: {
        name: data.name,
        email: data.email,
        clinicName: data.clinicName,
        licenseNumber: data.licenseNumber,
        licenseState: data.licenseState,
        phone: data.phone,
        shippingAddress: data.shippingAddress,
        status: 'PENDING',
      },
    })

    logger.info('Vet sample request created', {
      requestId: sampleRequest.id,
      clinicName: data.clinicName,
      licenseState: data.licenseState,
    })

    // TODO: Verify veterinary license via state database API
    // TODO: Generate shipping label
    // TODO: Send confirmation email
    // TODO: Notify fulfillment team

    return NextResponse.json({
      success: true,
      message: 'Sample request submitted successfully. We will verify your license and ship within 3-5 business days.',
      requestId: sampleRequest.id,
    })
  } catch (error) {
    logger.error('Vet sample request error', error)
    return NextResponse.json(
      { error: 'Failed to process sample request' },
      { status: 500 }
    )
  }
}
