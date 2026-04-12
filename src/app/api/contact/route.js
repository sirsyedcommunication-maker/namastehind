import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, phone, destination, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'Namaste Hind <info@namastehind.com>',
      to: ['info@namastehind.com'], // Inquiry aapko yahan milegi
      subject: `New Inquiry: ${destination} - ${name}`,
      html: `
        <div style="font-family: sans-serif; border: 1px solid #eee; padding: 20px; border-radius: 15px;">
          <h2 style="color: #dc2626;">New Travel Inquiry ✈️</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Destination:</strong> ${destination}</p>
          <p><strong>Message:</strong> ${message || "Interested in this tour."}</p>
          <hr />
          <p style="font-size: 12px; color: #888;">Sent from Namaste Hind Website</p>
        </div>
      `,
    });

    if (error) return NextResponse.json({ error }, { status: 500 });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}