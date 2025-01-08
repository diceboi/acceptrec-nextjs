import Image from "next/image"
import Link from "next/link"
import { BsFacebook, BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaTwitterSquare } from 'react-icons/fa'
import { TbRosetteNumber1, TbFriends, TbQuestionMark, TbPower, TbListSearch, TbWeight, TbUsers, TbMessages, TbPencil, TbMoodPlus, TbCheckupList, TbBuildingFactory2, TbBookmarks, TbAlertCircle, TbMap2, TbBrandTiktok, TbPhone } from 'react-icons/tb'

export default function Footer() {
  return (
    <footer className="flex w-full bg-slate-900">
        <div className="flex flex-col lg:flex-row justify-between gap-20 xl:w-8/12 w-11/12 m-auto py-10 ">            

            <div className="flex flex-col gap-8 ">
                <div className="flex flex-nowrap gap-2">
                <TbBookmarks className="w-8 h-8 text-[#00afaa]"/>
                <h3 className="text-[#00afaa] text-xl font-bold">Quick access</h3>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="text-[#00afaa] text-lg">For candidates</h4>
                    <ul className="grid xl:grid-cols-2 lg:grid-cols-1 gap-2 text-white text-xs">
                        <Link href="/refer-a-friend" className="group flex flex-nowrap justify-start items-center gap-2 border border-slate-500 hover:border-[#00afaa] rounded-xl py-1 px-2 transition-all"><TbFriends className="w-6 h-6 text-white group-hover:text-[#00afaa] transition-all"/><p className="group-hover:text-[#00afaa] transition-all">Refer a friend</p></Link>
                        <Link href="/blogs/first-job-in-the-uk" className="group flex flex-nowrap justify-start items-center gap-2 border border-slate-500 hover:border-[#00afaa] rounded-xl py-1 px-2 transition-all"><TbQuestionMark className="w-6 h-6 text-white group-hover:text-[#00afaa] transition-all"/><p className="group-hover:text-[#00afaa] transition-all ">First Job in the UK</p></Link>
                        <Link href="/registration" className="group flex flex-nowrap justify-start items-center gap-2 border border-slate-500 hover:border-[#00afaa] rounded-xl py-1 px-2 transition-all"><TbPower className="w-6 h-6 text-white group-hover:text-[#00afaa] transition-all"/><p className="group-hover:text-[#00afaa] transition-all ">Sign-in / Registration</p></Link>
                        <Link href="/jobs" className="group flex flex-nowrap justify-start items-center gap-2 border border-slate-500 hover:border-[#00afaa] rounded-xl py-1 px-2 transition-all"><TbListSearch className="w-5 h-5 text-white group-hover:text-[#00afaa] transition-all"/><p className="group-hover:text-[#00afaa] transition-all ">Jobs</p></Link>
                        <Link href="/manual-handling" className="group flex flex-nowrap justify-start items-center gap-2 border border-slate-500 hover:border-[#00afaa] rounded-xl py-1 px-2 transition-all"><TbWeight className="w-5 h-5 text-white group-hover:text-[#00afaa] transition-all"/><p className="group-hover:text-[#00afaa] transition-all ">Manual handling</p></Link>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="text-[#00afaa] text-lg">For clients</h4>
                    <ul className="grid xl:grid-cols-2 lg:grid-cols-1 gap-2 text-white text-xs">
                        <Link href="/for-employers/shortlisted-candidates" className="group flex flex-nowrap justify-start items-center gap-2 border border-slate-500 hover:border-[#00afaa] rounded-xl py-1 px-2 transition-all"><TbUsers className="w-6 h-6 text-white group-hover:text-[#00afaa] transition-all"/><p className="group-hover:text-[#00afaa] transition-all ">Shortlisted candidates</p></Link>
                        <Link href="/blogs/how-to-write-a-successful-job-description" className="group flex flex-nowrap justify-start items-center gap-2 border border-slate-500 hover:border-[#00afaa] rounded-xl py-1 px-2 transition-all"><TbPencil className="w-6 h-6 text-white group-hover:text-[#00afaa] transition-all"/><p className="group-hover:text-[#00afaa] transition-all ">Writing a good job description</p></Link>
                        <Link href="/blogs/interview-techniques" className="group flex flex-nowrap justify-start items-center gap-2 border border-slate-500 hover:border-[#00afaa] rounded-xl py-1 px-2 transition-all"><TbMoodPlus className="w-6 h-6 text-white group-hover:text-[#00afaa] transition-all"/><p className="group-hover:text-[#00afaa] transition-all ">Interview Techniques</p></Link>
                        <Link href="/onboarding-process" className="group flex flex-nowrap justify-start items-center gap-2 border border-slate-500 hover:border-[#00afaa] rounded-xl py-1 px-2 transition-all"><TbCheckupList className="w-5 h-5 text-white group-hover:text-[#00afaa] transition-all"/><p className="group-hover:text-[#00afaa] transition-all ">Onboarding process</p></Link>
                        <Link href="/industries" className="group flex flex-nowrap justify-start items-center gap-2 border border-slate-500 hover:border-[#00afaa] rounded-xl py-1 px-2 transition-all"><TbBuildingFactory2 className="w-5 h-5 text-white group-hover:text-[#00afaa] transition-all"/><p className="group-hover:text-[#00afaa] transition-all ">Industries</p></Link>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col gap-8 ">
                <div className="flex flex-nowrap gap-2">
                <TbAlertCircle className="w-8 h-8 text-[#00afaa]"/>
                <h3 className="text-[#00afaa] text-xl font-bold">Important links</h3>
                </div>
                <ul className="flex flex-col text-white text-sm gap-2">
                    <Link href="/privacy-policy"><li className="hover:text-[#00afaa] transition-all">Privacy Policy</li></Link>
                    <Link href="/gdpr"><li className="hover:text-[#00afaa] transition-all">GDPR</li></Link>
                    <Link href="/covid-19"><li className="hover:text-[#00afaa] transition-all">COVID-19</li></Link>
                    <Link href="/modern-slavery-statement"><li className="hover:text-[#00afaa] transition-all">Modern Slavery Statement</li></Link>
                    <Link href="/hidden-labour-exploitation"><li className="hover:text-[#00afaa] transition-all">Hidden Labour Exploitation</li></Link>
                    <Link href="https://workdrive.zohoexternal.com/external/9hHGLB2uZhU-MRmoZ" target="_blank"><li className="hover:text-[#00afaa] transition-all">New Immigration Law</li></Link>
                    <Link href="/pay-query"><li className="hover:text-[#00afaa] transition-all">Pay query</li></Link>
                    <Link href="/join-our-team"><li className="hover:text-[#00afaa] transition-all">Work for us</li></Link>
                    <Link href="/complaints-policy"><li className="hover:text-[#00afaa] transition-all">Complaints Policy</li></Link>
                </ul>
            </div>            

            <div className="flex flex-col gap-8 ">
                <div className="flex flex-nowrap gap-2">
                <TbMap2 className="w-8 h-8 text-[#00afaa]"/>
                <h3 className="text-[#00afaa] text-xl font-bold">Offices</h3>
                </div>
                <ul className="flex flex-col text-white text-sm gap-2">
                    <Link href="/our-locations/leicester-recruitment"><li className="hover:text-[#00afaa] transition-all">Leicester</li></Link>
                    <Link href="/our-locations/coventry-recruitment"><li className="hover:text-[#00afaa] transition-all">Coventry</li></Link>
                    <Link href="/our-locations/tamworth-recruitment"><li className="hover:text-[#00afaa] transition-all">Tamworth</li></Link>
                </ul>
            </div>

            <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-2 pb-8">
                <Image src="/acceptrec-white-logo.webp" width={200} height={200} alt="white-logo"/>
                    <div className="flex flex-col gap-1">
                        <TbPhone className="w-6 h-6 text-[#00afaa]"/>
                        <Link href='tel:01162182133'><p className="text-white">0116 218 2133</p></Link>
                        <Link href='tel:08453533237'><p className="text-white">0845 353 3237</p></Link>
                        <Link href='tel:02477180356'><p className="text-white">0247 718 0356</p></Link>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    
                    <div className="flex flex-nowrap gap-8">
                        <Link href="https://www.facebook.com/acceptrec/" target="_blank"><BsFacebook className="w-6 h-6 text-white hover:text-slate-500 transition-all"/></Link>
                        <Link href="https://www.linkedin.com/company/accept-recruitment/" target="_blank"><BsLinkedin className="w-6 h-6 text-white hover:text-slate-500 transition-all"/></Link>
                        <Link href="https://www.tiktok.com/@acceptrec?lang=en" target="_blank"><TbBrandTiktok className="w-7 h-7 text-white hover:text-slate-500 transition-all"/></Link>
                        <Link href="https://www.instagram.com/acceptrecruitment/" target="_blank"><BsInstagram className="w-6 h-6 text-white hover:text-slate-500 transition-all"/></Link>
                    </div>
                    <p className="text-slate-500 text-sm">© Accept Recruitment. All Rights Reserved</p>                    
                </div>

            </div>

        </div>
    </footer>
  )
}
