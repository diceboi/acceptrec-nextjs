import { Resend } from "resend";

import ReferAFriendUser from "@/emails/ReferAFriendUser";
import ReferAFriendCompany from "@/emails/ReferAFriendCompany";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, email, refername, refercontact, location, message  } = await request.json();

  try {

  const userMail = await resend.sendEmail({
    from: 'Zen from Acceptrec <hello@acceptrec.co.uk>',
    to: email,
    subject: `Hello ${name}`,
    react: ReferAFriendUser({
      name,
      email,
      refername,
      refercontact,
      location,
      message
    })
  });

  const companyMail = await resend.sendEmail({
    from: 'Acceptrec.co.uk <hello@acceptrec.co.uk>',
    to: 'admin@acceptrec.co.uk',
    subject: 'New contact from the website',
    react: ReferAFriendCompany({
        name,
        email,
        refername,
        refercontact,
        location,
        message
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