import { FiArrowRight } from "react-icons/fi";

interface OfficeTileProps {
    image: string;
    name: string;
  }

  const OfficeTile: React.FC<OfficeTileProps> = ({ name, image}) => {
    return(
        <>
        <div style={{backgroundImage: `url("${image}"`}} className="group relative flex justify-center items-center w-full rounded-3xl p-4 hover:border-4 hover:border-white transition-all h-96 bg-cover bg-center bg-no-repeat">
            <div className=" absolute w-full h-full bg-[#312252] bg-opacity-50 rounded-3xl z-0"></div>
            <div className="relative flex gap-2 z-10">
                <h2 className="text-3xl text-center text-white font-black tracking-tighter ">{name}</h2>
                <FiArrowRight className='absolute -translate-x-1/2  left-1/3 -bottom-10 recruitment-icon text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:left-1/2 ease-out duration-200'/>
            </div>         
        </div>
        </>
    )
}

export default OfficeTile;