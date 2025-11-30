import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { wholesaleApplicationSchema } from '@/lib/validations'

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

    // In production, this would:
    // 1. Verify EIN via TaxJar/Middesk API
    // 2. Create user account
    // 3. Create wholesale account record
    // 4. Send confirmation email
    // 5. Notify admin team

    // For now, just create a placeholder response
    console.log('Wholesale application received:', {
      businessName: data.businessName,
      taxId: data.taxId,
      email: data.email,
    })

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      applicationId: `WA-${Date.now()}`,
    })
  } catch (error) {
    console.error('Wholesale application error:', error)
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    )
  }
}
