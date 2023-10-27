import { Resend } from "resend";

import ContactUsUser from "@/emails/ContactUsUser";
import ConstactUsCompany from "@/emails/ContactUsCompany";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, tel, email, location, message, path } = await request.json();

  try {

  const userMail = await resend.sendEmail({
    from: 'Aggie from Acceptrec <aggie@acceptrec.co.uk>',
    to: email,
    subject: `Hello ${name}`,
    react: ContactUsUser({
      name,
      tel,
      email,
      location,
      message
    })
  });

  const companyMail = await resend.sendEmail({
    from: 'Acceptrec.co.uk <hello@acceptrec.co.uk>',
    to: 'aggie@acceptrec.co.uk',
    subject: 'New contact from the website',
    react: ConstactUsCompany({
      name,
      tel,
      email,
      location,
      message,
      path
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