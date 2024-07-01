import { Resend } from "resend";

import JoblistUser from "@/emails/JoblistUser"
import JoblistCompany from "@/emails/JoblistCompany"
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { firstname, lastname, tel, email, zip, file, path, policy  } = await request.json();

  try {

  const userMail = await resend.emails.send({
    from: 'Zen from Acceptrec <hello@acceptrec.co.uk>',
    to: email,
    subject: `Successfull job application`,
    react: JoblistUser({
      firstname,
      lastname,
      tel,
      email,
      zip,
    })
  });

  const companyMail = await resend.emails.send({
    from: 'Acceptrec.co.uk <hello@acceptrec.co.uk>',
    to: 'admin@acceptrec.co.uk',
    subject: 'New job application from the website',
    react: JoblistCompany({
      firstname,
      lastname,
      tel,
      email,
      zip,
      file,
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