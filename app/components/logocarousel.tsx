import Image from "next/image";

export default function Logocarousel() {
  return (
    <>
      <div className="logos flex w-11/12 lg:w-8/12 relative h-64 overflow-hidden py-16 m-auto">
        <div className="absolute flex w-[900%] lg:w-[300%]">

          <div className="logos-slide inline-flex justify-between w-[150%] gap-8">
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/armed-forces-covenant.webp" width={150} height={100} alt="" className=""/>
            </div>
            <div className="flex justify-center items-center  w-1/3 lg:w-1/5">
              <Image src="/logocarousel/businessclub.webp"width={150} height={100} alt="" className=""/>
            </div>
            <div className="flex justify-center items-center  w-1/3 lg:w-1/5">
              <Image src="/logocarousel/disability-confident.webp" width={150} height={100} alt="" className=""/>
            </div>
            <div className="flex justify-center items-center  w-1/3 lg:w-1/5">
              <Image src="/logocarousel/glaa.webp" width={150} height={100} alt="" className=""/>
            </div>
            <div className="flex justify-center items-center  w-1/3 lg:w-1/5">
              <Image src="/logocarousel/google-review.webp" width={150} height={100} alt="" className=""/>
            </div>
            <div className="flex justify-center items-center  w-1/3 lg:w-1/5">
              <Image src="/logocarousel/iso.webp" width={150} height={100} alt="" className=""/>
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/ntwd.webp" width={150} height={100} alt="" className=""/>
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/rainbows.webp" width={150} height={100} alt="" className=""/>
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/stronger-together.webp" width={150} height={100} alt="" className=""/>
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/three-best-rated.webp" width={150} height={100} alt="" className=""/>
            </div>
          </div>

          <div className="logos-slide inline-flex justify-between w-[150%] gap-8">
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/armed-forces-covenant.webp" width={150} height={100} alt="" className=""/>
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/businessclub.webp"width={150} height={100} alt="" className=""/>
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/disability-confident.webp" width={150} height={100} alt="" className=""/>
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/gangmasters.webp" width={150} height={100} alt="" className=""/>
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/google-review.webp" width={150} height={100} alt="" className=""/>
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/iso.webp" width={150} height={100} alt="" className=""/>
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/national-temporary-worker-day.webp" width={150} height={100} alt="" className=""/>
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/rainbows.webp" width={150} height={100} alt="" className=""/>
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/stronger-together.webp" width={150} height={100} alt="" className=""/>
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/three-best-rated.webp" width={150} height={100} alt="" className=""/>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
    

