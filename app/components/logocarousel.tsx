import Image from "next/image";

export default function Logocarousel() {
  return (
    <>
      <div className="logos flex w-[100%] relative h-32 overflow-hidden py-8 border-t border-neutral-300">
        <div className="absolute flex w-[200%]">
          <div className="logos-slide inline-flex justify-between w-full">
            <div className="flex justify-center items-center w-1/5">
              <Image src="/Disability_Confident_BW.webp" width={200} height={150} alt="" className="w-auto h-14"/>
            </div>
            <div className="flex justify-center items-center w-1/5">
              <Image src="/gangmasters-labour.abuse-authority.webp"width={200} height={150} alt="" className="w-auto h-14"/>
            </div>
            <div className="flex justify-center items-center w-1/5">
              <Image src="/NTWD-accrediation.webp" width={200} height={150} alt="" className="w-auto h-14"/>
            </div>
            <div className="flex justify-center items-center w-1/5">
              <Image src="/REC_Logo_BW_.webp" width={200} height={150} alt="" className="w-auto h-14"/>
            </div>
            <div className="flex justify-center items-center w-1/5">
              <Image src="/sronger-together-logo_BW.webp" width={200} height={150} alt="" className="w-auto h-14"/>
            </div>
          </div>

          <div className="logos-slide inline-flex justify-between w-full">
            <div className="flex justify-center items-center w-1/5">
              <Image src="/Disability_Confident_BW.webp" width={200} height={150} alt="" className="w-auto h-14"/>
            </div>
            <div className="flex justify-center items-center w-1/5">
              <Image src="/gangmasters-labour.abuse-authority.webp"width={200} height={150} alt="" className="w-auto h-14"/>
            </div>
            <div className="flex justify-center items-center w-1/5">
              <Image src="/NTWD-accrediation.webp" width={200} height={150} alt="" className="w-auto h-14"/>
            </div>
            <div className="flex justify-center items-center w-1/5">
              <Image src="/REC_Logo_BW_.webp" width={200} height={150} alt="" className="w-auto h-14"/>
            </div>
            <div className="flex justify-center items-center w-1/5">
              <Image src="/sronger-together-logo_BW.webp" width={200} height={150} alt="" className="w-auto h-14"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
    

