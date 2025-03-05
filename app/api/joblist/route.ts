import { Resend } from "resend";

import JoblistUser from "@/emails/JoblistUser"
import JoblistCompany from "@/emails/JoblistCompany"
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { firstname, lastname, tel, email, zip, file, path, policy, workname, uniquetitle, responsible } = await request.json();

  try {

  const companyMail = await resend.emails.send({
    from: 'Acceptrec.co.uk <hello@acceptrec.co.uk>',
    to: responsible,
    subject: 'New job application from the website',
    react: JoblistCompany({
      firstname,
      lastname,
      tel,
      email,
      zip,
      file,
      path,
      policy,
      workname,
      uniquetitle
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