import Link from "next/link";

export default function RegistrationInner() {
  return (
    <section className="w-full py-20">
        <div className='flex flex-col gap-20 w-11/12 lg:w-8/12 m-auto pt-10'>
            <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase text-center'>
                Important informations
            </h3>
            <div className='w-full grid lg:grid-cols-2 gap-8 '>
                <ul className='flex flex-col gap-2 p-4 list-disc'>                       
                    <li>We will never charge you for our services.</li>
                    <li>You must have your own bank account to reduce the risk of exploitation.</li>
                    <li>If you have any issues or concerns regarding modern-slavery please seek help. </li>
                    <li>Contact Accept - 0116 218 2133.</li>
                    <li>Modern Slavery Help Line - 08000 121 700. This is open 24 hours a day, 365 days a year</li>
                    <li>If you&apos;re deaf or hard of hearing, use our textphone service on 18001 101.</li>
                    <li>Should you wish to remain anonymous you can contact Crimestoppers on 0800 555 111.</li>
                    <li>You can also report it to the Police online or call them on 101 at any time.</li>
                    <li>Always call 999 if there is a crime in action or an immediate threat to life. If you&apos;re deaf or hard of hearing, use textphone service 18000 or text us on 999 if you&apos;ve pre-registered with the emergencySMS service.</li>
                    <li>Gangmasters Labour Abuse Authority - Call their helpline on 0800 432 0804.</li>
                </ul>
                <ul className='flex flex-col gap-4 p-4 list-disc'>                       
                    <li><Link href="https://www.modernslaveryhelpline.org/" target="_blank" className="text-[#00afaa] underline">Modern Slavery Helpline</Link> Information and advice on modern slavery.</li>
                    <li><Link href="https://www.salvationarmy.org.uk/human-trafficking" target="_blank" className="text-[#00afaa] underline">The Salvation Army</Link> Immediate and intensive support to ensure victims of trafficking are given the best possible chance of recovery.</li>
                    <li><Link href="https://www.migranthelpuk.org/" target="_blank" className="text-[#00afaa] underline">Migrant Help</Link> Support services for adult victims of human trafficking.</li>
                    <li><Link href="http://www.kalayaan.org.uk/" target="_blank" className="text-[#00afaa] underline">Kalayaan</Link> Advice, advocacy and support services for migrant domestic workers.</li>,
                    <li><Link href="https://www.medaille-trust.org.uk/" target="_blank" className="text-[#00afaa] underline">Medaille Trust</Link> Helps women, young men and children who have been freed from human trafficking.</li>
                    <li>To read our Anti-Slavery policy please click <Link href="/modern-slavery-statement" className="text-[#00afaa] underline">here</Link></li>
                </ul>
            </div>
        </div>
    </section>
  )
}
