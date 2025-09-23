import nodemailer from 'nodemailer'

// Ensure Node.js runtime (Nodemailer is not supported on Edge)
export const runtime = 'nodejs'

type ContactPayload = {
  name: string
  email: string
  subject: string
  message: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = (await request.json()) as Partial<ContactPayload>

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 })
    }
    if (!isValidEmail(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400 })
    }

    const host = process.env.ZOHO_SMTP_HOST || 'smtp.zoho.com'
    const port = Number(process.env.ZOHO_SMTP_PORT || 465)
    const secure = port === 465
    const user = process.env.ZOHO_USER
    const pass = process.env.ZOHO_PASS
    const to = process.env.CONTACT_TO || user

    if (!user || !pass) {
      return new Response(
        JSON.stringify({ error: 'Email not configured. Set ZOHO_USER and ZOHO_PASS.' }),
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    })

    try {
      await transporter.verify()
    } catch (verifyError) {
      console.error('SMTP_VERIFY_ERROR', verifyError)
      const msg = verifyError instanceof Error ? verifyError.message : 'SMTP verify failed'
      return new Response(
        JSON.stringify({ error: `SMTP connection failed: ${msg}`, hint: `Check ZOHO_* envs, host=${host}, port=${port}, secure=${secure}` }),
        { status: 500 }
      )
    }

    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif;font-size:16px;color:#111">
        <h2 style="margin:0 0 12px">Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>
        <p style="white-space:pre-line">${message}</p>
      </div>
    `

    await transporter.sendMail({
      from: { name: name as string, address: user },
      replyTo: email,
      to,
      subject: `[Contato] ${subject}`,
      html,
    })

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (error) {
    console.error('CONTACT_API_ERROR', error)
    const message =
      (typeof error === 'object' && error && (error as any).code) ? `Failed to send message: ${(error as any).code}` :
      (error instanceof Error && error.message) ? `Failed to send message: ${error.message}` :
      'Failed to send message'
    return new Response(JSON.stringify({ error: message }), { status: 500 })
  }
}


