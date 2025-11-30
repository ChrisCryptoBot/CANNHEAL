import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations'
import { logger } from '@/lib/logger'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validationResult = contactFormSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: validationResult.error.errors },
        { status: 400 }
      )
    }

    const data = validationResult.data

    logger.info('Contact form submission', {
      name: data.name,
      email: data.email,
      subject: data.subject,
    })

    // TODO: Send email via Resend
    // const emailResult = await resend.emails.send({
    //   from: process.env.EMAIL_FROM,
    //   to: 'support@cannheal.com',
    //   subject: `Contact Form: ${data.subject}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${data.name}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Subject:</strong> ${data.subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${data.message}</p>
    //   `,
    // })

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully. We will respond within 24 hours.',
    })
  } catch (error) {
    logger.error('Contact form error', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
