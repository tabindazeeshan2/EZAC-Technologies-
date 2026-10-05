
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      console.error('RESEND_API_KEY is missing')
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 500 }
      )
    }

    const body = await req.json()

    const {
      name,
      email,
      company,
      service,
      details,
      budget,
    } = body

    if (!name || !email || !details) {
      return NextResponse.json(
        { error: 'Name, email and project details are required.' },
        { status: 400 }
      )
    }

    const resend = new Resend(apiKey)

    const { error } = await resend.emails.send({
      from: 'EZAC Contact Form <onboarding@resend.dev>',
      to: ['info@ezactechnologies.com'],
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Inquiry</h2>

        <p>
          <strong>Name:</strong>
          ${escapeHtml(name)}
        </p>

        <p>
          <strong>Email:</strong>
          ${escapeHtml(email)}
        </p>

        <p>
          <strong>Company:</strong>
          ${escapeHtml(company || 'N/A')}
        </p>

        <p>
          <strong>Service Needed:</strong>
          ${escapeHtml(service || 'N/A')}
        </p>

        <p>
          <strong>Budget:</strong>
          ${escapeHtml(budget || 'N/A')}
        </p>

        <br />

        <p>
          <strong>Project Details:</strong>
        </p>

        <p>
          ${escapeHtml(details).replace(/\n/g, '<br />')}
        </p>
      `,
    })

    if (error) {
      console.error('Resend Error:', error)

      return NextResponse.json(
        { error: error.message || 'Unable to send email.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry sent successfully.',
    })
  } catch (error) {
    console.error('API Route Error:', error)

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'Internal Server Error',
      },
      { status: 500 }
    )
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

