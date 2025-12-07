import Image from "next/image";

export default function Logocarousel() {
  return (
    <>
      <div className="logos flex w-11/12 lg:w-8/12 relative h-64 overflow-hidden py-16 m-auto">
        <div className="absolute flex w-[900%] lg:w-[300%]">

          <div className="logos-slide inline-flex justify-between w-[150%] gap-8">
            <div className="flex justify-center items-center w-1/3 lg:w-1/5 ml-8">
              <Image src="/logocarousel/leicestershire-awards.webp" width={150} height={100} alt="Leicestershire Promotions Awards Winner - Accept Recruitment" className="" />
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/armed-forces-covenant.webp" width={150} height={100} alt="Armed Forces Covenant Signatory - Supporting Veterans Employment" className="" />
            </div>
            <div className="flex justify-center items-center  w-1/3 lg:w-1/5">
              <Image src="/logocarousel/businessclub.webp" width={150} height={100} alt="Leicester Tigers Business Club Member" className="" />
            </div>
            <div className="flex justify-center items-center  w-1/3 lg:w-1/5">
              <Image src="/logocarousel/disability-confident.webp" width={150} height={100} alt="Disability Confident Employer - Committed Level" className="" />
            </div>
            <div className="flex justify-center items-center  w-1/3 lg:w-1/5">
              <Image src="/logocarousel/glaa.webp" width={150} height={100} alt="GLAA Licensed - Gangmasters and Labour Abuse Authority" className="" />
            </div>
            <div className="flex justify-center items-center  w-1/3 lg:w-1/5">
              <Image src="/logocarousel/google-review.webp" width={150} height={100} alt="Google Reviews 4.8 Stars - Highest Rated Recruitment Agency" className="" />
            </div>
            <div className="flex justify-center items-center  w-1/3 lg:w-1/5">
              <Image src="/logocarousel/iso.webp" width={150} height={100} alt="ISO 9001 Certified - Quality Management Standards" className="" />
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/ntwd.webp" width={150} height={100} alt="National Temporary Workers Day Supporter" className="" />
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/rainbows.webp" width={150} height={100} alt="Rainbows Hospice Charity Partner - Supporting Children's Care" className="" />
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/stronger-together.webp" width={150} height={100} alt="Stronger Together - Tackling Modern Slavery in Recruitment" className="" />
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/three-best-rated.webp" width={150} height={100} alt="Three Best Rated - Top Recruitment Agency in Leicester" className="" />
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/rec.webp" width={150} height={100} alt="REC Member - Recruitment and Employment Confederation" className="" />
            </div>
          </div>

          <div className="logos-slide inline-flex justify-between w-[150%] gap-8">
            <div className="flex justify-center items-center w-1/3 lg:w-1/5 ml-8">
              <Image src="/logocarousel/leicestershire-awards.webp" width={150} height={100} alt="Leicestershire Promotions Awards Winner - Accept Recruitment" className="" />
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/armed-forces-covenant.webp" width={150} height={100} alt="Armed Forces Covenant Signatory - Supporting Veterans Employment" className="" />
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/businessclub.webp" width={150} height={100} alt="Leicester Tigers Business Club Member" className="" />
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/disability-confident.webp" width={150} height={100} alt="Disability Confident Employer - Committed Level" className="" />
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/gangmasters.webp" width={150} height={100} alt="GLAA Licensed - Gangmasters and Labour Abuse Authority" className="" />
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/google-review.webp" width={150} height={100} alt="Google Reviews 4.8 Stars - Highest Rated Recruitment Agency" className="" />
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/iso.webp" width={150} height={100} alt="ISO 9001 Certified - Quality Management Standards" className="" />
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/national-temporary-worker-day.webp" width={150} height={100} alt="National Temporary Workers Day Supporter" className="" />
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/rainbows.webp" width={150} height={100} alt="Rainbows Hospice Charity Partner - Supporting Children's Care" className="" />
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/stronger-together.webp" width={150} height={100} alt="Stronger Together - Tackling Modern Slavery in Recruitment" className="" />
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/three-best-rated.webp" width={150} height={100} alt="Three Best Rated - Top Recruitment Agency in Leicester" className="" />
            </div>
            <div className="flex justify-center items-center w-1/3 lg:w-1/5">
              <Image src="/logocarousel/rec.webp" width={150} height={100} alt="REC Member - Recruitment and Employment Confederation" className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



