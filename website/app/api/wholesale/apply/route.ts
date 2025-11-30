import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { wholesaleApplicationSchema } from '@/lib/validations'
import { logger } from '@/lib/logger'
import { hash } from 'bcryptjs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validationResult = wholesaleApplicationSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid application data', details: validationResult.error.errors },
        { status: 400 }
      )
    }

    const data = validationResult.data

    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { email: data.email },
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'An account with this email already exists' },
        { status: 409 }
      )
    }

    // TODO: Verify EIN via TaxJar/Middesk API
    // const einVerification = await verifyEIN(data.taxId)

    // Create user account with temporary password
    const tempPassword = Math.random().toString(36).slice(-12)
    const passwordHash = await hash(tempPassword, 12)

    const user = await db.user.create({
      data: {
        email: data.email,
        name: data.contactName,
        passwordHash,
        role: 'CUSTOMER', // Will be upgraded to WHOLESALE upon approval
      },
    })

    // Create wholesale account record
    const wholesaleAccount = await db.wholesaleAccount.create({
      data: {
        userId: user.id,
        businessName: data.businessName,
        taxId: data.taxId,
        businessType: data.businessType,
        phone: data.phone,
        status: 'PENDING',
        pricingTier: 'STANDARD',
      },
    })

    logger.info('Wholesale application submitted', {
      userId: user.id,
      accountId: wholesaleAccount.id,
      businessName: data.businessName,
      businessType: data.businessType,
    })

    // TODO: Send confirmation email to applicant
    // TODO: Send notification email to admin team

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully. You will receive an email once approved.',
      applicationId: wholesaleAccount.id,
    })
  } catch (error) {
    logger.error('Wholesale application error', error)
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    )
  }
}
