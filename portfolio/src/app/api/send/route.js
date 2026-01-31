import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    const { email, message } = await request.json();
    const { error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'sales@fabiansgeneralcorner.com',
        replyTo: email,
        subject: 'New message',
        html: `<p>${message}</p>`
    });
    if (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true });
}


