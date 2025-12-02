import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendTo = process.env.MY_EMAIL;


export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    
    const { data, error } = await resend.emails.send({
      from: 'Contact form submitted <onboarding@resend.dev>',
      to: [sendTo as string],
       subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    if (error) {
        console.log(error);
        
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}