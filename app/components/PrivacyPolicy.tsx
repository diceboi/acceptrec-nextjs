"use client";

export default function PrivacyPolicy() {
  return (
    <section className="w-full py-20 bg-white text-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
        {/* Header Section */}
        <header className="border-b border-neutral-200 pb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#312252]">
            Privacy Notice
          </h1>
          <p className="text-xl text-neutral-600">
            How Accept Recruitment uses your personal data
          </p>
          <div className="mt-6 flex flex-col gap-1">
            <p className="font-semibold text-[#312252]">
              Accept Recruitment Limited
            </p>
            <p className="text-sm text-neutral-500 italic">
              Version 5.0 — April 2026
            </p>
          </div>
        </header>

        {/* About this notice */}
        <div className="prose prose-neutral max-w-none text-black">
          <h2 id="about" className="text-2xl font-bold mb-4 text-[#312252]">
            About this notice
          </h2>
          <p>
            Accept Recruitment Limited (&quot;Accept&quot;, &quot;we&quot;,
            &quot;us&quot;, &quot;our&quot;) respects your privacy and is
            committed to protecting your personal data. This notice explains how
            we collect, use, share and protect personal data in connection with
            our recruitment services and our workforce management platform,
            AcceptPulse.
          </p>
          <p className="font-semibold text-black">This notice applies to:</p>
          <ul className="list-disc pl-6 space-y-2 text-black">
            <li>
              Workers and candidates registered with Accept (whether for
              permanent or temporary roles);
            </li>
            <li>
              Visitors to our website at{" "}
              <a
                href="https://www.acceptrec.co.uk"
                className="text-primary hover:underline"
              >
                www.acceptrec.co.uk
              </a>
              ;
            </li>
            <li>Client and supplier contacts.</li>
          </ul>
          <p className="text-black">
            We are the controller of the personal data described in this notice.
            Our contact details are at the end of this document.
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100">
          <h2 className="text-xl font-bold mb-6 text-[#312252]">Contents</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {[
              "1. The personal data we collect about you",
              "2. How we collect personal data",
              "3. How we use your personal data",
              "4. AcceptPulse — workforce management platform",
              "5. Facial recognition for identity verification",
              "6. AI-supported decisions about candidates and workers",
              "7. Special category data",
              "8. The lawful bases on which we rely",
              "9. Sharing your data with third parties",
              "10. International transfers",
              "11. How long we keep your data",
              "12. Data security",
              "13. Your rights",
              "14. Marketing communications",
              "15. Cookies and website analytics",
              "16. Automated decisions",
              "17. Changes to this notice",
              "18. How to contact us",
            ].map((item, index) => (
              <li
                key={index}
                className="hover:text-[#312252] transition-colors cursor-pointer text-black"
              >
                <a href={`#section-${index + 1}`}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content Sections */}
        <div className="flex flex-col gap-16 prose prose-neutral max-w-none text-black">
          <section id="section-1">
            <h2 className="text-2xl font-bold border-l-4 border-[#312252] pl-4 text-[#312252]">
              1. The personal data we collect about you
            </h2>
            <p className="text-black">
              Depending on your relationship with Accept, we may collect and
              process the following categories of personal data:
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3 text-[#312252]">
              If you are a worker or candidate
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>
                <strong>Identity and contact data:</strong> your name, address,
                email address, mobile number, date of birth, national insurance
                number, photograph.
              </li>
              <li>
                <strong>
                  Right-to-work and identity verification documents:
                </strong>{" "}
                passport, driving licence, biometric residence permit (BRP),
                share code, and equivalents.
              </li>
              <li>
                <strong>Employment and qualification data:</strong> information
                from your CV, references, qualifications, certifications (e.g.
                CSCS, sector-specific tickets), training records and DBS check
                results where applicable.
              </li>
              <li>
                <strong>Financial data:</strong> bank details for payroll, tax
                codes, pension details.
              </li>
              <li>
                <strong>Public profile data:</strong> links to LinkedIn or
                similar professional profiles where you have made these public.
              </li>
              <li>
                <strong>Workforce data:</strong> shift assignments, attendance
                records, hours worked, ratings and feedback (provided by you and
                by client supervisors), job role, site and department
                information.
              </li>
              <li>
                <strong>Biometric data:</strong> a facial photograph captured at
                registration and used for identity verification at point of work
                (where you use the facial recognition system — see Section 5).
              </li>
              <li>
                <strong>Communications data:</strong> messages exchanged with
                you via WhatsApp, email, SMS or other channels, including
                operational notifications about shifts.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-8 mb-3 text-[#312252]">
              If you are a website visitor
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>
                <strong>Technical data:</strong> IP address, browser type,
                operating system, device information, pages viewed, session
                duration.
              </li>
              <li>
                <strong>Information you submit through contact forms:</strong>{" "}
                name, email, message content.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-8 mb-3 text-[#312252]">
              If you are a client or supplier contact
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>
                <strong>Business contact data:</strong> name, job title,
                business email, business phone, employer.
              </li>
              <li>
                <strong>Communications data:</strong> messages and meetings
                exchanged in connection with the working relationship.
              </li>
            </ul>
          </section>

          <section id="section-2">
            <h2 className="text-2xl font-bold border-l-4 border-[#312252] pl-4 text-[#312252]">
              2. How we collect personal data
            </h2>
            <p className="text-black">
              We collect personal data in the following ways:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>
                <strong>Directly from you</strong>, when you register with
                Accept, send us your CV, complete forms on our website, attend
                an induction, communicate with us, or use AcceptPulse.
              </li>
              <li>
                <strong>Automatically</strong>, when you visit our website
                (cookies and similar technologies — see Section 15).
              </li>
              <li>
                <strong>From third parties</strong>, including job boards,
                professional networks (such as LinkedIn), referees you nominate,
                previous employers, screening providers (DBS, credit reference,
                qualification verification), and clients.
              </li>
              <li>
                <strong>Through automated systems</strong>, including
                AcceptPulse capturing attendance and identity verification data,
                and the WhatsApp Business API logging operational messages.
              </li>
            </ul>
            <p className="mt-4 italic text-black">
              Where we collect personal data about you from third parties, we
              will tell you about it within a reasonable period and in any event
              within one month.
            </p>
          </section>

          <section id="section-3">
            <h2 className="text-2xl font-bold border-l-4 border-[#312252] pl-4 text-[#312252]">
              3. How we use your personal data
            </h2>
            <p className="text-black">
              We use personal data for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>
                <strong>Recruitment services:</strong> matching you with
                suitable assignments, presenting your details to clients,
                conducting pre-engagement checks, managing the engagement
                process.
              </li>
              <li>
                <strong>Workforce management:</strong> scheduling shifts,
                recording attendance, verifying identity at point of work,
                processing payroll, generating timesheets and client billing.
              </li>
              <li>
                <strong>Right-to-work and statutory checks:</strong> verifying
                your right to work in the UK and complying with related
                statutory obligations.
              </li>
              <li>
                <strong>Health and safety:</strong> ensuring that workers
                performing work have completed inductions and training and are
                competent for the role.
              </li>
              <li>
                <strong>Operational communications:</strong> sending shift
                reminders, clock-in confirmations, schedule changes and other
                work-related notifications by WhatsApp, email or SMS.
              </li>
              <li>
                <strong>Identity and fraud prevention:</strong> verifying that
                the worker who registered is the worker performing work (see
                Section 5).
              </li>
              <li>
                <strong>Customer relationship management:</strong> managing
                client and supplier relationships.
              </li>
              <li>
                <strong>Marketing communications:</strong> where you have opted
                in, sending information about Accept services, events, and
                similar opportunities.
              </li>
              <li>
                <strong>Service improvement:</strong> analysing how our website
                and AcceptPulse are used to improve them.
              </li>
              <li>
                <strong>Legal and regulatory compliance:</strong> complying with
                our obligations under tax, employment, immigration, health and
                safety, modern slavery, data protection, and other applicable
                laws.
              </li>
              <li>
                <strong>Investigations and disputes:</strong> investigating
                incidents, complaints, and disputes; cooperating with regulators
                and law enforcement; and establishing, exercising or defending
                legal claims.
              </li>
            </ul>
          </section>

          <section id="section-4">
            <h2 className="text-2xl font-bold border-l-4 border-[#312252] pl-4 text-[#312252]">
              4. AcceptPulse — workforce management platform
            </h2>
            <p className="text-black">
              AcceptPulse is Accept&apos;s workforce management platform. It is
              used to manage shift scheduling, attendance recording, operational
              communications and related workforce activities. This section sets
              out the data we collect through AcceptPulse, other than facial
              recognition data which is covered in Section 5.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2 text-[#312252]">
              Geolocation data
            </h3>
            <p className="text-black">
              When you clock in or clock out using AcceptPulse, the platform
              requests access to your device&apos;s GPS location. This is used
              solely to confirm that you are at or near the assigned work site.
              Location data is captured at the points of clock-in and clock-out
              only — AcceptPulse does not continuously track your location. You
              may decline location access on your device, although this may
              affect your ability to use the clock-in service and may require
              you to use an alternative method to record your attendance.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2 text-[#312252]">
              Attendance and shift data
            </h3>
            <p className="text-black">
              AcceptPulse records clock-in times, clock-out times, break times,
              shift assignments, job roles and site locations. This information
              is used for attendance, payroll, billing and operational purposes.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2 text-[#312252]">
              WhatsApp communications
            </h3>
            <p className="text-black">
              AcceptPulse uses the WhatsApp Business API (provided by Meta
              Platforms, Inc.) to send operational messages including shift
              reminders, clock-in confirmations, schedule changes, identity
              verification rollout information and other work-related
              notifications. Your mobile number is used for this purpose.
              Message send, delivery and read status are logged for operational
              and audit purposes. We do not send marketing messages through this
              channel unless you have separately opted in.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2 text-[#312252]">
              Ratings and feedback
            </h3>
            <p className="text-black">
              AcceptPulse includes a ratings feature where client supervisors
              may rate the work performed and you may rate the work site.
              Ratings are used internally to improve service quality and to
              match workers to suitable assignments. Individual ratings are not
              published or shared publicly.
            </p>
          </section>

          <section id="section-5">
            <h2 className="text-2xl font-bold border-l-4 border-[#312252] pl-4 text-[#312252]">
              5. Facial recognition for identity verification
            </h2>
            <p className="text-black">
              This section explains how facial recognition is used, why we use
              it, the lawful bases on which we rely, and the alternative process
              available if you would prefer not to use facial recognition.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2 text-[#312252]">
              Why we use facial recognition
            </h3>
            <p className="text-black">
              In our industry it sometimes happens that one individual registers
              with the agency and a different individual attends the work. This
              is known as identity substitution. It can hurt you, and it creates
              serious legal problems.
            </p>
            <p className="font-medium mt-4 text-black">It hurts you because:</p>
            <ul className="list-disc pl-6 space-y-1 text-black">
              <li>
                Someone else could use your name and your right-to-work checks
                to obtain work.
              </li>
              <li>
                If anything goes wrong on site, it could land against your
                record rather than the person who actually did the work.
              </li>
              <li>
                Your hours, pay, tax and National Insurance contributions could
                end up wrong.
              </li>
            </ul>
            <p className="mt-4 text-black">
              It creates legal problems because both Accept and our clients have
              statutory duties to ensure that the person performing work is the
              person who has passed right-to-work, induction and other
              applicable checks. These duties arise under the Immigration,
              Asylum and Nationality Act 2006, the Health and Safety at Work
              etc. Act 1974, tax legislation, and the Modern Slavery Act 2015
              framework.
            </p>
            <p className="mt-4 text-black">
              Facial recognition is the control we use to address this. It is
              the only practical method that verifies, at the point of work,
              that the worker performing the work is the same individual who
              registered with Accept and passed Accept&apos;s checks.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-2 text-[#312252]">
              How facial recognition works in practice
            </h3>
            <p className="text-black">
              <strong>At registration:</strong> we take a photograph of you,
              with your knowledge. The photograph is enrolled in our facial
              recognition service. The service is hosted in the United Kingdom
              only.
            </p>
            <p className="text-black">
              <strong>At each shift:</strong> when you clock in or out at a
              check-in device, the device captures a live image of your face.
              The facial recognition service compares that live image against
              your enrolled photograph and returns a match or no-match result,
              which records the time of attendance. Live clock-in images are
              kept for 14 days and are then automatically deleted.
            </p>
            <p className="text-black">
              <strong>If you have not worked a shift for 90 days:</strong> your
              enrolment in the facial recognition service is automatically
              deleted. The photograph is not retained anywhere else on
              Accept&apos;s systems. If you return to work after that period,
              you would be re-enrolled with a fresh photograph.
            </p>
            <p className="text-black">
              Right-to-work documents (passport, biometric residence permit,
              share code evidence) are separate from the facial recognition
              system and are retained as part of your personnel records — see
              Section 11.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-2 text-[#312252]">
              If the system flags a mismatch
            </h3>
            <p className="text-black">
              If the system returns a no-match result, it does not result in any
              decision affecting your pay or your engagement without human
              review. A supervisor or authorised Accept consultant reviews the
              mismatch, may speak with you to understand the cause, and may use
              the alternative process described below to verify your identity
              manually. The result of that review is recorded.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-2 text-[#312252]">
              Lawful bases for facial recognition processing
            </h3>
            <p className="text-black">We rely on:</p>
            <ul className="list-disc pl-6 space-y-1 text-black">
              <li>
                <strong>Article 6(1)(f) UK GDPR</strong> — legitimate interests,
                including the prevention of identity-related fraud, the
                discharge of our and our clients&apos; statutory duties, and the
                accurate administration of payroll.
              </li>
              <li>
                <strong>Article 9(2)(g) UK GDPR</strong> — substantial public
                interest, read with paragraph 10 of Schedule 1 Part 2 of the
                Data Protection Act 2018 (preventing or detecting unlawful
                acts), in respect of the biometric data.
              </li>
            </ul>
            <p className="text-black">
              We do not rely on consent. Consent is not the appropriate lawful
              basis in an employment context where there is an imbalance of
              power between us and you, and the Information Commissioner&apos;s
              Office has issued specific guidance on this point.
            </p>
            <p className="text-black">
              We maintain an Appropriate Policy Document covering this
              processing, in accordance with Schedule 1 Part 4 of the Data
              Protection Act 2018. A copy is available on request.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-2 text-[#312252]">
              The alternative process — your right not to use facial recognition
            </h3>
            <p className="text-black">
              You are not required to use facial recognition. You can use a
              non-biometric alternative process at any time. The alternative is:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-black">
              <li>
                You bring valid photo identity documentation (passport, driving
                licence, BRP or equivalent) to every shift.
              </li>
              <li>
                On arrival, the on-site supervisor verifies your photo ID
                against your appearance.
              </li>
              <li>
                You enter a Personal Identification Number (PIN) at the check-in
                device for the time record.
              </li>
              <li>
                The supervisor confirms the check-in/check-out manually in the
                system.
              </li>
            </ul>
            <p className="text-black">
              Choosing the alternative process will not affect your shift
              allocation, pay, treatment, or any other aspect of your working
              relationship with Accept. Supervisors at all relevant sites are
              briefed on this. You can switch between facial recognition and the
              alternative at any time by speaking to your consultant or by
              emailing the data protection contact in Section 18.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-2 text-[#312252]">
              Your rights in respect of facial recognition processing
            </h3>
            <p className="text-black">
              In addition to the general rights set out in Section 13, you have
              the right to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-black">
              <li>
                Object to facial recognition processing under Article 21 UK GDPR
                — in which case your enrolment will be deleted from the facial
                recognition service and the alternative process will apply.
              </li>
              <li>
                Request information about the data held about you by our facial
                recognition service provider in connection with your enrolment.
              </li>
              <li>
                Request deletion of your enrolment at any time, in which case
                the alternative process will apply.
              </li>
            </ul>
          </section>

          <section id="section-6">
            <h2 className="text-2xl font-bold border-l-4 border-[#312252] pl-4 text-[#312252]">
              6. AI-supported decisions about candidates and workers
            </h2>
            <p className="text-black">
              Accept uses AI-based tools to support our consultants in tasks
              including candidate screening, scoring and recommendation. These
              tools help our consultants make better-informed decisions, but the
              decision-making authority remains with the human consultant.
              Accept does not use AI to make solely automated decisions that
              produce legal effects concerning you or that similarly
              significantly affect you.
            </p>
            <p className="font-medium mt-4 text-black">
              In practice this means:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-black">
              <li>
                AI tools may produce suitability scores or rankings to help a
                consultant prioritise their attention.
              </li>
              <li>
                A named human consultant reviews candidate information and makes
                the actual decision.
              </li>
              <li>
                Consultants have the authority and the information to override
                the AI&apos;s recommendation, and do so where they consider the
                AI is wrong.
              </li>
            </ul>
            <p className="mt-4 text-black">
              We rely on the legitimate interests basis (Article 6(1)(f) UK
              GDPR) for this processing. We have assessed that this is necessary
              for our recruitment services and is not overridden by your rights,
              given the safeguards in place.
            </p>
            <p className="font-medium mt-4 text-[#312252]">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-black">
              <li>
                Request information about how AI tools are used in connection
                with decisions affecting you.
              </li>
              <li>
                Express your point of view on any decision in which AI was used.
              </li>
              <li>
                Contest a decision and request review by a different consultant.
              </li>
            </ul>
            <p className="text-black">
              Requests can be sent to the data protection contact in Section 18.
            </p>
          </section>

          <section id="section-7">
            <h2 className="text-2xl font-bold border-l-4 border-[#312252] pl-4 text-[#312252]">
              7. Special category data
            </h2>
            <h3 className="text-lg font-semibold mt-6 mb-2 text-[#312252]">
              Biometric data
            </h3>
            <p className="text-black">
              As described in Section 5, we process biometric data (a facial
              template used for identity verification) where you use the facial
              recognition system. The lawful basis is Article 9(2)(g) UK GDPR —
              substantial public interest. The non-biometric alternative is
              available.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2 text-[#312252]">
              Diversity and equal opportunities monitoring
            </h3>
            <p className="text-black">
              Where a client requires equal opportunities monitoring, or where
              we conduct our own monitoring, we may ask for information about
              your ethnic background, gender, disability, age, sexual
              orientation, religion or other characteristics. This is sensitive
              personal data and we ask for your explicit consent before
              collecting it. Providing this information is voluntary and your
              decision will not affect your working relationship with us. Where
              information is shared with clients it is anonymised.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2 text-[#312252]">
              Criminal records
            </h3>
            <p className="text-black">
              Where a client&apos;s pre-engagement screening requires a criminal
              record check, we will explain the process to you and obtain your
              explicit consent before proceeding. The check is carried out by an
              authorised provider.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2 text-[#312252]">
              Health and disability
            </h3>
            <p className="text-black">
              We may process health and disability information where this is
              relevant to your safety, fitness for work, or where we are
              required to make reasonable adjustments. We rely on Article
              9(2)(b) UK GDPR (employment law) and Article 9(2)(h) (occupational
              health) where applicable.
            </p>
          </section>

          <section id="section-8">
            <h2 className="text-2xl font-bold border-l-4 border-[#312252] pl-4 text-[#312252]">
              8. The lawful bases on which we rely
            </h2>
            <p className="text-black">
              UK data protection law requires us to identify a lawful basis for
              each category of processing. We rely on the following bases:
            </p>
            <div className="overflow-x-auto my-8">
              <table className="min-w-full divide-y divide-neutral-200 text-sm">
                <thead>
                  <tr className="bg-neutral-50">
                    <th className="px-4 py-3 text-left font-bold uppercase text-[#312252]">
                      Lawful basis
                    </th>
                    <th className="px-4 py-3 text-left font-bold uppercase text-[#312252]">
                      Where we use it
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-black">
                      Article 6(1)(b) — performance of a contract
                    </td>
                    <td className="px-4 py-3 text-black">
                      Processing necessary to perform our contract with you
                      (e.g. allocating shifts, processing pay).
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-black">
                      Article 6(1)(c) — legal obligation
                    </td>
                    <td className="px-4 py-3 text-black">
                      Processing necessary to comply with our legal obligations
                      (right-to-work checks, tax reporting, statutory
                      record-keeping).
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-black">
                      Article 6(1)(f) — legitimate interests
                    </td>
                    <td className="px-4 py-3 text-black">
                      Processing necessary for our (or others&apos;) legitimate
                      interests, including running our business, providing
                      services, preventing fraud and substitution, and
                      supporting AI-assisted consultant decisions. We have
                      assessed these interests against your rights and concluded
                      they are not overridden, with safeguards in place.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-black">
                      Article 6(1)(a) — consent
                    </td>
                    <td className="px-4 py-3 text-black">
                      Where you have specifically opted in (e.g. marketing
                      communications, sensitive equal opportunities data,
                      criminal record checks).
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-black">
                      Article 9(2)(b) — employment law
                    </td>
                    <td className="px-4 py-3 text-black">
                      Where we process special category data necessary for the
                      rights and obligations of employment law (e.g. health
                      information for adjustments).
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-black">
                      Article 9(2)(g) — substantial public interest
                    </td>
                    <td className="px-4 py-3 text-black">
                      Where we process biometric data for the prevention or
                      detection of unlawful acts (facial recognition for
                      identity verification — see Section 5). Read with Schedule
                      1 Part 2 paragraph 10 DPA 2018.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-black">
                      Article 9(2)(a) — explicit consent
                    </td>
                    <td className="px-4 py-3 text-black">
                      Where we process special category data on the basis of
                      your specific opt-in (e.g. equal opportunities monitoring,
                      criminal record checks).
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="section-9">
            <h2 className="text-2xl font-bold border-l-4 border-[#312252] pl-4 text-[#312252]">
              9. Sharing your data with third parties
            </h2>
            <p className="text-black">
              We share personal data with the following categories of recipient:
            </p>
            <h3 className="text-lg font-semibold mt-6 mb-2 text-[#312252]">
              Clients
            </h3>
            <p className="text-black">
              We share with the client at whose site you are working: your name,
              role, attendance records, identity-verified clock-in/out times,
              and other information necessary to manage the assignment, billing
              and the client&apos;s own statutory duties (such as right-to-work
              and health and safety).
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2 text-[#312252]">
              Authorities and regulators
            </h3>
            <p className="text-black">
              We share data with HMRC, the Department for Work and Pensions, the
              Home Office, the Health and Safety Executive, and other regulators
              where required by law or for the purposes set out in this notice.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-2 text-[#312252]">
              Our processors and sub-processors
            </h3>
            <p className="text-black">
              We engage third parties to process personal data on our behalf. As
              at the date of this notice these include:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full divide-y divide-neutral-200 text-sm">
                <thead>
                  <tr className="bg-neutral-50">
                    <th className="px-4 py-3 text-left font-bold uppercase text-[#312252]">
                      Category of recipient
                    </th>
                    <th className="px-4 py-3 text-left font-bold uppercase text-[#312252]">
                      Purpose
                    </th>
                    <th className="px-4 py-3 text-left font-bold uppercase text-[#312252]">
                      Location of processing
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-black">
                      Cloud hosting and infrastructure providers
                    </td>
                    <td className="px-4 py-3 text-black">
                      Hosting of AcceptPulse and other Accept systems, including
                      database, storage and edge infrastructure
                    </td>
                    <td className="px-4 py-3 text-black">
                      United Kingdom and European Union
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-black">
                      Facial recognition service provider
                    </td>
                    <td className="px-4 py-3 text-black">
                      Identity verification at point of attendance — storage of
                      enrolled worker photographs and processing of live
                      clock-in images
                    </td>
                    <td className="px-4 py-3 text-black">
                      United Kingdom only
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-black">
                      AI service providers
                    </td>
                    <td className="px-4 py-3 text-black">
                      AI tools used to support consultant decision-making (see
                      Section 6)
                    </td>
                    <td className="px-4 py-3 text-black">
                      United Kingdom and United States (with appropriate
                      safeguards)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-black">
                      Meta Platforms, Inc. (WhatsApp Business API)
                    </td>
                    <td className="px-4 py-3 text-black">
                      Operational messaging to workers via WhatsApp
                    </td>
                    <td className="px-4 py-3 text-black">
                      United States (with appropriate safeguards)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-black">
                      Microsoft Corporation
                    </td>
                    <td className="px-4 py-3 text-black">
                      Microsoft 365 services (email, file storage, internal
                      communications)
                    </td>
                    <td className="px-4 py-3 text-black">
                      United Kingdom and European Union
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-black">
                      Payroll services provider
                    </td>
                    <td className="px-4 py-3 text-black">Payroll processing</td>
                    <td className="px-4 py-3 text-black">United Kingdom</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-black">
                      Pre-engagement screening providers
                    </td>
                    <td className="px-4 py-3 text-black">
                      Right-to-work checks, DBS checks, references and
                      qualification verification (where applicable)
                    </td>
                    <td className="px-4 py-3 text-black">United Kingdom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-black">
              Each processor is bound by a written contract requiring them to
              process your data only on Accept&apos;s instructions, to apply
              appropriate security, and to comply with UK data protection law.
            </p>
            <p className="text-black">
              <strong>Professional advisors and insurers:</strong> We may share
              data with our legal, accounting, audit and insurance advisors
              where necessary.
            </p>
            <p className="text-black">
              <strong>Business transfers:</strong> If Accept sells, transfers or
              merges parts of its business or assets, your data may be
              transferred to a third party as part of that transaction. The
              receiving party will be required to use your data in line with
              this notice.
            </p>
          </section>

          <section id="section-10">
            <h2 className="text-2xl font-bold border-l-4 border-[#312252] pl-4 text-[#312252]">
              10. International transfers
            </h2>
            <p className="text-black">
              Most of your personal data is stored and processed in the United
              Kingdom. In particular, all facial recognition data (enrolled
              photographs and live clock-in images) is stored and processed in
              the United Kingdom only.
            </p>
            <p className="text-black">
              Some processors may transfer data outside the United Kingdom, for
              example for support or backup purposes. Where this happens, we
              ensure that an appropriate transfer mechanism applies, such as:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-black">
              <li>
                A UK adequacy decision in respect of the destination country;
              </li>
              <li>
                The International Data Transfer Agreement (IDTA) or the UK
                Addendum to the EU Standard Contractual Clauses;
              </li>
              <li>
                Other appropriate safeguards as permitted by UK data protection
                law.
              </li>
            </ul>
            <p className="text-black">
              You can request further information about transfer mechanisms
              applying to a specific processor by contacting our data protection
              contact (see Section 18).
            </p>
          </section>

          <section id="section-11">
            <h2 className="text-2xl font-bold border-l-4 border-[#312252] pl-4 text-[#312252]">
              11. How long we keep your data
            </h2>
            <p className="text-black">
              We retain personal data for the periods set out below. After the
              retention period, data is deleted or anonymised.
            </p>
            <div className="overflow-x-auto my-8">
              <table className="min-w-full divide-y divide-neutral-200 text-sm">
                <thead>
                  <tr className="bg-neutral-50">
                    <th className="px-4 py-3 text-left font-bold uppercase text-[#312252]">
                      Category
                    </th>
                    <th className="px-4 py-3 text-left font-bold uppercase text-[#312252]">
                      Retention period
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-black">
                      Candidate data (CV, contact details) where you do not take
                      an assignment
                    </td>
                    <td className="px-4 py-3 text-black">
                      Two years from last meaningful contact
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-black">
                      Worker data where you have performed an assignment
                      (engagement records, payroll, attendance logs)
                    </td>
                    <td className="px-4 py-3 text-black">
                      Six years from the end of the tax year in which the last
                      assignment ended (HMRC requirement)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-black">
                      Right-to-work documents (passport copy, BRP, share code)
                      held on the ATS
                    </td>
                    <td className="px-4 py-3 text-black">
                      Six years from end of last assignment, alongside other
                      right-to-work and employment records. These are separate
                      from the facial recognition system.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-black">
                      Enrolment in the facial recognition service (the
                      photograph used for matching)
                    </td>
                    <td className="px-4 py-3 text-black">
                      Automatically deleted 90 days after the worker&apos;s last
                      shift. Deleted earlier on objection or switch to
                      alternative process. Not retained anywhere else on
                      Accept&apos;s systems.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-black">
                      Live clock-in images (captured at point of attendance)
                    </td>
                    <td className="px-4 py-3 text-black">
                      14 days from capture, then automatic deletion
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-black">
                      Attendance logs (date, time, site, match outcome — without
                      facial image)
                    </td>
                    <td className="px-4 py-3 text-black">
                      Six years from end of tax year (with payroll records)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-black">
                      WhatsApp message logs
                    </td>
                    <td className="px-4 py-3 text-black">
                      Two years from sending
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-black">
                      Marketing data (where you have opted in)
                    </td>
                    <td className="px-4 py-3 text-black">
                      Until you opt out, plus a short reasonable period for
                      processing your opt-out
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-black">
                      Website and analytics data
                    </td>
                    <td className="px-4 py-3 text-black">Up to 24 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-black">
              Where law requires longer retention (for example to defend a legal
              claim or comply with regulatory enquiries), we will retain data
              for that longer period. After retention expires, data is deleted
              or fully anonymised.
            </p>
          </section>

          <section id="section-12">
            <h2 className="text-2xl font-bold border-l-4 border-[#312252] pl-4 text-[#312252]">
              12. Data security
            </h2>
            <p className="text-black">
              We use technical and organisational measures to protect your
              personal data:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-black">
              <li>
                Encryption of personal data in transit (HTTPS/TLS) and at rest
                where technically feasible.
              </li>
              <li>
                Role-based access controls limiting access to those with a need
                to know.
              </li>
              <li>
                Multi-factor authentication for administrative access to
                systems.
              </li>
              <li>
                Logging and audit of administrative access to sensitive data.
              </li>
              <li>Secure disposal and deletion processes.</li>
              <li>
                Confidentiality obligations on all Accept staff and processors.
              </li>
              <li>
                A documented data breach response plan including the 72-hour ICO
                notification process.
              </li>
              <li>Periodic review of supplier security.</li>
            </ul>
            <p className="text-black">
              No system is perfectly secure, and the transmission of information
              over the internet involves risk. We cannot guarantee the security
              of data transmitted to us, and any transmission is at your own
              risk. However, we use strict procedures and security features to
              prevent unauthorised access.
            </p>
          </section>

          <section id="section-13">
            <h2 className="text-2xl font-bold border-l-4 border-[#312252] pl-4 text-[#312252]">
              13. Your rights
            </h2>
            <p className="text-black">
              Under UK data protection law you have the following rights in
              respect of your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-black">
              <li>
                <strong>Right of access</strong> — to request a copy of the
                personal data we hold about you (a Subject Access Request).
              </li>
              <li>
                <strong>Right to rectification</strong> — to ask us to correct
                inaccurate or incomplete data.
              </li>
              <li>
                <strong>Right to erasure</strong> — to ask us to delete data,
                where there is no overriding reason for us to keep it.
              </li>
              <li>
                <strong>Right to restrict processing</strong> — to ask us to
                suspend processing in certain circumstances.
              </li>
              <li>
                <strong>Right to data portability</strong> — to receive certain
                data in a portable format.
              </li>
              <li>
                <strong>Right to object</strong> — to object to processing
                carried out on the basis of legitimate interests, including
                direct marketing and (specifically) facial recognition
                processing.
              </li>
              <li>
                <strong>Rights in relation to AI-supported decisions</strong> —
                to be informed about, express your view on, and contest
                decisions where AI tools have been used.
              </li>
              <li>
                <strong>Right to withdraw consent</strong> — where we have
                relied on your consent, you may withdraw it at any time without
                affecting processing carried out before the withdrawal.
              </li>
              <li>
                <strong>
                  Right to complain to the Information Commissioner&apos;s
                  Office (ICO)
                </strong>{" "}
                — see{" "}
                <a
                  href="https://ico.org.uk"
                  className="text-primary hover:underline"
                >
                  ico.org.uk
                </a>
                .
              </li>
            </ul>
            <p className="text-black">
              Exercising your rights does not affect your pay, shift allocation,
              treatment or any other aspect of your working relationship with
              Accept.
            </p>
            <p className="text-black">
              To exercise any of these rights, please contact us using the
              details in Section 18.
            </p>
          </section>

          <section id="section-14">
            <h2 className="text-2xl font-bold border-l-4 border-[#312252] pl-4 text-[#312252]">
              14. Marketing communications
            </h2>
            <p className="text-black">
              We send marketing communications only where you have opted in. You
              can opt out at any time by:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-black">
              <li>Clicking the unsubscribe link in any marketing email;</li>
              <li>Replying STOP to any marketing SMS;</li>
              <li>
                Emailing us at{" "}
                <a
                  href="mailto:admin@acceptrec.co.uk"
                  className="text-primary hover:underline"
                >
                  admin@acceptrec.co.uk
                </a>
                .
              </li>
            </ul>
            <p className="text-black">
              Operational messages (such as shift reminders) are not marketing
              and you cannot opt out of these while you are engaged with Accept,
              except by ending the engagement or by using a different
              communication channel where available.
            </p>
          </section>

          <section id="section-15">
            <h2 className="text-2xl font-bold border-l-4 border-[#312252] pl-4 text-[#312252]">
              15. Cookies and website analytics
            </h2>
            <p className="text-black">
              Our website uses cookies for site administration, performance
              analytics and to remember your preferences. You can manage cookie
              preferences through your browser settings. Refusing certain
              cookies may affect functionality.
            </p>
          </section>

          <section id="section-16">
            <h2 className="text-2xl font-bold border-l-4 border-[#312252] pl-4 text-[#312252]">
              16. Automated decisions
            </h2>
            <p className="text-black">
              Some processing carried out by Accept is automated:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>
                AcceptPulse automatically compares your GPS location at
                clock-in/out against the assigned site, and may flag attempts
                outside the permitted radius for supervisor review.
              </li>
              <li>
                AcceptPulse automatically sends shift reminders and missing
                clock-in alerts based on your shift schedule.
              </li>
              <li>
                Facial recognition automatically returns a match or no-match
                result at the point of clock-in/out (see Section 5).
              </li>
              <li>
                AI tools may produce suitability scores or rankings to support
                consultants (see Section 6).
              </li>
            </ul>
            <p className="text-black">
              None of these are solely automated decisions producing legal
              effects or similarly significant effects on you. Mismatches and
              flags trigger human review before any consequence affects your pay
              or engagement. Consultants make decisions about candidates with
              the AI as input, not as decision-maker.
            </p>
          </section>

          <section id="section-17">
            <h2 className="text-2xl font-bold border-l-4 border-[#312252] pl-4 text-[#312252]">
              17. Changes to this notice
            </h2>
            <p className="text-black">
              We may update this notice from time to time. Where changes are
              material, we will draw them to your attention by appropriate means
              (for example, by WhatsApp message, email, or notification at your
              next sign-in to AcceptPulse). The latest version is always
              available at{" "}
              <a
                href="https://www.acceptrec.co.uk/privacy"
                className="text-primary hover:underline"
              >
                www.acceptrec.co.uk/privacy
              </a>
              .
            </p>
          </section>

          <section id="section-18">
            <h2 className="text-2xl font-bold border-l-4 border-[#312252] pl-4 text-[#312252]">
              18. How to contact us
            </h2>
            <p className="text-black">
              If you have any questions about this notice or about how we handle
              your personal data, or if you wish to exercise any of your rights,
              please contact us:
            </p>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100 flex flex-col gap-2 not-prose text-black">
              <p className="font-bold text-lg text-[#312252]">
                Accept Recruitment Limited
              </p>
              <p className="text-black">
                Email:{" "}
                <a
                  href="mailto:admin@acceptrec.co.uk"
                  className="text-primary hover:underline"
                >
                  admin@acceptrec.co.uk
                </a>
              </p>
              <p className="text-black">
                Postal address: Unit 4, Forest Business Park, Oswin Road,
                Leicester, LE3 1HR
              </p>
              <p className="text-black">
                Website:{" "}
                <a
                  href="https://www.acceptrec.co.uk"
                  className="text-primary hover:underline"
                >
                  www.acceptrec.co.uk
                </a>
              </p>
            </div>

            <p className="mt-8 text-black">
              You also have the right to complain to the Information
              Commissioner&apos;s Office:
            </p>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100 flex flex-col gap-2 not-prose text-black">
              <p className="font-bold text-lg text-[#312252]">
                Information Commissioner&apos;s Office
              </p>
              <p className="text-black">
                Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF
              </p>
              <p className="text-black">Helpline: 0303 123 1113</p>
              <p className="text-black">
                Website:{" "}
                <a
                  href="https://ico.org.uk"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ico.org.uk
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
