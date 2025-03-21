import { Resend } from "resend";

import ContactUsUser from "@/emails/ContactUsUser";
import ConstactUsCompany from "@/emails/ContactUsCompany";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, tel, email, location, message, path, policy  } = await request.json();

  try {

  const companyMail = await resend.emails.send({
    from: 'Acceptrec.co.uk <hello@acceptrec.co.uk>',
    to: 'john.shipley@acceptrec.co.uk',
    subject: 'New contact from the National Insurance Changes page',
    react: ConstactUsCompany({
      name,
      tel,
      email,
      location,
      message,
      path,
      policy
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