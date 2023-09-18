import Image from "next/image";

interface CandidateProps {
    image: string;
    alt: string;
    name: string;
    date: string;
    description: string;
    classname: string;
  }

  const Candidate: React.FC<CandidateProps> = ({ image, alt, name, date, description, classname}) => {
    return(
        <>
        <div className="flex flex-col gap-4 justify-start items-start w-full rounded-3xl p-4 shadow-special">
            <Image src={image} height={500} width={500} alt={alt} className="w-full h-auto rounded-2xl" />
            <div className="text-3xl text-center font-black tracking-tighter">
                <h2>{name}</h2>
            </div>
            <div>
                <h3 className="text-lg text-center font-bold tracking-tighter">{date}</h3>
            </div>
            <div>
                <p>{description}</p>
            </div>           
        </div>
        </>
    )
}

export default Candidate;