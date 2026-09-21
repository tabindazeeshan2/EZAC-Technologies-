import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, company, service, details, budget } = body

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'RESEND_API_KEY is not defined in environment variables.' },
        { status: 500 }
      )
    }

    await resend.emails.send({
      from: 'EZAC Contact Form <onboarding@resend.dev>',
      to: ['ezactechnologies@gmail.com'],
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Service Needed:</strong> ${service || 'N/A'}</p>
        <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
        <br/>
        <p><strong>Project Details:</strong></p>
        <p>${details}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('API Route Error:', error)
    return NextResponse.json(
      { error: error?.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}