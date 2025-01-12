import { Resend } from 'resend';
import EmailTemplate from '@/src/components/emails/welcome';
import { render } from '@react-email/render';

const resend = new Resend(process.env.RESEND_API_KEY);














































































































































































































































export async function POST(request) {
  const { firstName, lastName, email, message , phoneNumber } = await request.json();

  try {
    // Render the email HTML
    const emailHtml = render(
      <EmailTemplate firstName={firstName} lastName={lastName} email={email} message={message} phoneNumber={phoneNumber} />
    );

    // Send the email
    const data = await resend.emails.send({
      from: 'Webdevelopment.lk <developer@webdevelopment.lk>',
      to: 'youremail.com',
      subject: 'New Contact Form Submission',
      html: emailHtml,
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}