import Link from 'next/link'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'

export default function CTAHero({title, subtitle, text, link, bgimage, bgimagealt, buttontext, slidingtexts}:any) {

    const slidingtext = slidingtexts.split(',')

  return (
    <>        
        <div className="overflow-hidden flex flex-col justify-center relative min-h-[100vh] pb-10 bg-opacity-20 pt-16 lg:pt-0">
            <Image 
                src={bgimage}
                alt={bgimagealt}
                fill={true}
                style={{objectFit: "cover", objectPosition: "center"}}
            />
            <div className='absolute top-0 right-0 w-full h-full bg-gradient-to-r from-[#312252] to-[#31225283]'></div>
            <div className="relative flex flex-col gap-4 w-11/12 lg:w-8/12 m-auto ">
              <div className="flex flex-col justify-center gap-4 lg:w-2/3 h-full text-white">
                <h2 className="text-sm lg:text-md font-bold tracking-widest uppercase">{subtitle}</h2>
                <h1 className="text-6xl lg:text-7xl font-black tracking-tighter">{title}</h1>
                
                {/* Video Section */}
                <div className="w-full max-w-4xl my-6">
                  <video 
                    className="w-full rounded-lg shadow-2xl"
                    controls
                    preload="metadata"
                    playsInline
                    poster="/for-employers-hero-video-image.webp"
                  >
                    <source src="/for-employers-hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                <p>{text}</p>
                <Link href={link} className='w-fit'>
                <button  
                        className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white hover:shadow-[#00afa93b] hover:w-fit p-3 rounded-full transition-all duration-200 gap-2"
                        >
                        {buttontext}
                        <FiArrowUpRight className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                        />
                </button>
                </Link>              
              </div>
            </div>
            <div className='employers-slide hidden lg:flex flex-nowrap w-[200vw] z-10'>
                <div className='flex justify-evenly gap-16 h-full w-[100vw]  text-[#ffffff80]'>
                    
                    {slidingtext.map((text: any, index: number) => (
                    <div key={index} className='flex flex-col justify-center items-center'>                
                        <h3 className='font-bold'>{text}</h3>                
                    </div>
                    ))}

                </div>
                <div className='flex justify-evenly gap-16 h-full w-[100vw] text-[#ffffff80]'>

                    {slidingtext.map((text: any, index: number) => (
                    <div key={index} className='flex flex-col justify-center items-center'>                
                        <h3 className='font-bold'>{text}</h3>                
                    </div>
                    ))}

                </div>
            </div>             
        </div>
    </>
  )
}
