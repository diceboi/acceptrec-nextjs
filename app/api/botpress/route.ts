import { Resend } from "resend";

import BotpressNotification from "@/emails/BotpressNotification";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, tel, email, summary, transcript } = await request.json();

  try {

  const companyMail = await resend.sendEmail({
    from: 'Acceptrec.co.uk <hello@acceptrec.co.uk>',
    to: 'szasz.szabolcs1995@gmail.com',
    subject: `[Chat] ${name} is waiting for a human in Messenger`,
    react: BotpressNotification({
        name,
        tel,
        email,
        summary,
        transcript,
    })
  });
  return NextResponse.json({
    status: 'Ok'
  }, {
    status: 200
  })
  } catch(e: unknown) {
    if (e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`);
    }
    return NextResponse.json({
      error: 'Internal server error.'
    }, {
      status: 500
    })
  }
}