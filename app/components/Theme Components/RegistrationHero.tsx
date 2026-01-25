"use client"

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

interface RegistrationProps {
  title: string;
  subtitle: string;
  classname: string;
}

const RegistrationHero: React.FC<RegistrationProps> = ({ title, subtitle, classname }) => {
  return (
    <>
      <div className="overflow-hidden flex flex-col justify-center relative min-h-[100vh] pb-10 bg-[url('/for-candidates.webp')] bg-center bg-cover bg-no-repeat bg-opacity-20 nav-gap">
        <div className='absolute top-0 right-0 w-full h-full bg-gradient-to-r from-[#28a19d] to-[#00afa936] nav-gap'></div>
        <div className="relative flex flex-col gap-4 w-11/12 lg:w-8/12 m-auto ">
          <div className="flex flex-col justify-center items-center gap-4 w-full h-full text-white">
            <h2 className="text-sm lg:text-md font-bold tracking-widest uppercase">Registration</h2>
            <h1 className="text-6xl lg:text-8xl font-black tracking-tighter">Register or Sign in</h1>

            {/* Video Section */}
            <div className="w-full max-w-4xl mx-auto my-6">
              <video
                className="w-full rounded-lg shadow-2xl"
                controls
                preload="metadata"
                playsInline
                poster="/register-video-poster.jpg"
              >
                <source src="/register-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <p className="text-center">Please watch this short video before registering. It covers important information and answers common questions, saving you time later</p>
            <div className="flex flex-nowrap gap-4">
              <Link href="https://accept.iqxanywhere.net/" className='w-fit'>
                <button
                  className="group flex justify-between items-center w-fit bg-[#fff] hover:bg-[#e5e5e5] hover:shadow-xl hover:gap-4 shadow-lg text-black hover:shadow-[#00afa93b] hover:w-fit p-3 rounded-full transition-all duration-200 gap-2"
                >
                  Sign in
                  <FiArrowUpRight className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                  />
                </button>
              </Link>
              <Link href="https://accept.iqxanywhere.net/xregister" className='w-fit'>
                <button
                  className="group flex justify-between items-center w-fit bg-[#fff] hover:bg-[#e5e5e5] hover:shadow-xl hover:gap-4 shadow-lg text-black hover:shadow-[#00afa93b] hover:w-fit p-3 rounded-full transition-all duration-200 gap-2"
                >
                  Register
                  <FiArrowUpRight className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                  />
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default RegistrationHero;