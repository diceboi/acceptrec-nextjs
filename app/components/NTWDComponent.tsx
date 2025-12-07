import Image from "next/image"
import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi"

export default function NTWDComponent() {
    return (
        <section className='w-full py-20'>
            <div className='flex flex-col w-11/12 lg:w-6/12 gap-8 m-auto'>
                <Image src="/NTWD-new.webp" width={1280} height={853} alt="National Temporary Workers Day Campaign - Accept Recruitment Supporting Temporary Workers" />
                <article className="flex flex-col gap-4">
                    <p>There are currently around 1.6 million temporary workers in the UK according to latest statistics. As a society we need to celebrate and thank temporary employees that work alongside both the biggest and smallest companies along the width and breadth of the country. The contribution they provide to the companies they work for, the flexibility they gladly give and the positive impact on the economy cannot be understated.</p>
                    <p>There are many types of workers who currently work on a temporary basis. These include Teachers, Lorry Drivers, Fruit Pickers, Warehouse Workers, Nurses, Admin Staff, Receptionists amongst so many more. Without these people working on a daily basis, our loved ones would not be cared for properly, shelves in supermarkets would be empty and industry in general would grind to a halt.</p>
                    <p>We recognise that the world in which we live has changed significantly over the last 18 months. Many temporary workers during the pandemic have been classed as Key Workers and they have continued to provide their services during this very difficult time. These are people that we need to congratulate and give recognition of a job very well done.</p>
                    <p>A National Temporary Workers Day has never been dedicated before. We want to change that so we are asking companies who utilise the services of flexible workers to get on-board and join with us celebrating their hard work and contribution on the 4th of November.</p>
                </article>
                <Link href="https://europe-west2-acceptrec-223310.cloudfunctions.net/ntwdc" target="_blank" className='w-fit m-auto'>
                    <button
                        type="submit"
                        className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white text-xl hover:shadow-[#00afa93b] hover:w-fit p-4 rounded-full transition-all duration-200 gap-2"
                    >
                        Sign the charter
                        <FiArrowUpRight className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                        />
                    </button>
                </Link>
            </div>

        </section>
    )
}
