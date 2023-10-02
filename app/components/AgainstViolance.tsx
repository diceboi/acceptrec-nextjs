import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

export default function AgainstViolance() {
  return (
    <>
        <section className="flex justify-center items-center w-full">
            <div className="flex flex-col-reverse lg:flex-row w-11/12 lg:w-8/12 gap-16 lg:py-8 py-20">
                <div className="w-11/12 lg:w-1/2 flex justify-center flex-col gap-8">
                    <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                        Modern Slavery Statment
                    </h3>
                    <h1 className="text-4xl font-black tracking-tighter ">We are strongly against workplace violence</h1>
                    <p className="text-lg">
                    We have a zero-tolerance policy for compulsory labour, and we can ensure you that modern slavery does not exist in any area of our or our clients&apos; businesses.
                    </p>
                    <Link href="/modern-slavery-statement" className='w-fit'>
                        <button 
                            type="submit" 
                            className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white text-xl hover:shadow-[#00afa93b] hover:w-fit p-4 rounded-full transition-all duration-200 gap-2"
                            >
                            Read more
                            <FiArrowUpRight className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                            />
                        </button>
                    </Link>
                </div>
                <div className="w-11/12 lg:w-1/2 lg:h-[60vh] min-h-[40vh] bg-[url('/against-violance.webp')] bg-contain bg-center bg-no-repeat"></div>
            </div>
        </section>
    </>
  )
}
