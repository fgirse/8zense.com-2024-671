import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { v4 as uuid } from 'uuid';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'info@8zense.com',
      to: [email], // Ensure 'to' is an array of strings
      subject: subject || 'New Contact Form Submission',
      replyTo: email,
      headers: {
        'X-Entity-Ref-ID': uuid(),
      },
      react: (
        <div>
          <h1>New Contact Form Submission</h1>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Message: {message}</p>
        </div>
      ),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data, message: 'success' }, { status: 200 });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}