import Image from "next/image";
import Link from "next/link";
import { describe } from "node:test";
import { FiArrowDown } from "react-icons/fi";

interface CareerJobProps {
    name: string;
    description: string;
    key: string;
  }

  const CareerJob: React.FC<CareerJobProps> = ({ name, description, key }) => {
    return(
        <>
        <div className="flex flex-col gap-4 justify-start items-center w-full rounded-3xl p-8 shadow-special">
            <div className="text-3xl text-center font-black tracking-tighter">
                <h2>Open position</h2>
            </div>
            <div className="text-3xl text-center text-[#00afaa] font-black tracking-tighter">
                <h2>{name}</h2>
            </div>
            <div className="flex flex-col gap-2">
                {description}
            </div>
            <Link href="#applyform" className='flex justify-center w-fit m-auto py-8'>
                <button  
                        className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white hover:shadow-[#00afa93b] hover:w-fit p-3 rounded-full transition-all duration-200 gap-2"
                        >
                        Accept now
                        <FiArrowDown className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                        />
                </button>
            </Link>           
        </div>
        </>
    )
}

export default CareerJob;