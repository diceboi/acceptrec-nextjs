import { Resend } from "resend";

import BotpressNotification from "@/emails/BotpressNotification";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, tel, email, summary } = await request.json();

  try {

  const companyMail = await resend.emails.send({
    from: 'Acceptrec.co.uk <hello@acceptrec.co.uk>',
    to: 'admin@acceptrec.co.uk',
    subject: `[Chat] a User is waiting for a human in Messenger`,
    bcc: "peter@acceptrec.co.uk",
    react: BotpressNotification({
        name,
        tel,
        email,
        summary,
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