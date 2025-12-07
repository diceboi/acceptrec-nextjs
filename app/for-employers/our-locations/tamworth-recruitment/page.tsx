import { gql } from "@apollo/client";
import { getClient } from "@/app/lib/client";
import MainHero from "@/app/components/Theme Components/MainHero";
import { AiFillStar } from "react-icons/ai";
import GoogleReviewNumber from "@/app/components/googlereviewnumber";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi";
import { TbPhone } from "react-icons/tb";
import { IoArrowRedo } from "react-icons/io5";
import Industries from "@/app/components/industries";
import AboutCoventry from "@/app/components/AboutCoventry";
import LeftRightCollumnReadMore from "@/app/components/Theme Components/LeftRightCollumnReadMore";
import Office from "@/app/components/Theme Components/Office";
import LeftRightCollumn from "@/app/components/Theme Components/LeftRightCollumn";
import Team from "@/app/components/Theme Components/Team";

const query = gql`
  query getOfficesPage {
    page(id: "306", idType: DATABASE_ID) {
      seo {
        metaDesc
        title
      }
      officespage {
        heroTitle
        heroSubtitle
        heroImage {
          altText
          sourceUrl
        }
        officesTitle
        officesSubtitle
      }
    }
  }
`;

export const revalidate = 5;

export async function generateMetadata() {
  return {
    title: "Tamworth - Offices - Accept Recruitment",
    description:
      "Looking for the best recruitment agency in Tamworth? Our experts connect top talent with leading employers for tailored job placements.",
    alternates: {
      canonical: `/for-employers/our-locations/tamworth`
    }
  };
}

export default async function TamworthOfficePage() {
  const { data: officespagedata } = await getClient().query({ query });

  const officespage = officespagedata?.page?.officespage;

  return (
    <>
      <section className="py-20 w-full bg-[#312252] min-h-[80vh]">
        <div className="flex lg:flex-row flex-col items-center lg:w-8/12 w-11/12 gap-20 px-2 m-auto">
          <div className="flex flex-col gap-8 lg:w-1/2 w-full relative">
            <h1 className="lg:text-6xl text-4xl text-white font-black">
              Best rated Recruitment Agency in Tamworth
            </h1>
            <div className="flex lg:flex-nowrap flex-nowrap gap-1 text-white lg:text-lg text-sm border border-white rounded-full py-2 px-4 w-fit">
              <span className="flex gap-1 items-center">
                <AiFillStar className=" text-amber-400" />
                <b>4.8</b> stars by
              </span>
              <b>
                <GoogleReviewNumber />
              </b>
              <span className="flex gap-1 items-center">
                {" "}
                +<FcGoogle /> Google reviews
              </span>
            </div>
            <p className="text-white lg:text-lg text-sm">
              Where we accept every challenge but remain dedicated to providing
              outstanding service. We are proud to be the best-rated recruitment
              agency in the UK, serving the vibrant community of Tamworth.
            </p>
            <h3 className="text-white text-start lg:text-3xl text-xl font-black drop-shadow-2xl">
              Contact Ryan for Staffing needs at <span className="text-[#00afaa]">07441369469</span> or <span className="text-[#00afaa]">ryan.gledhill@acceptrec.co.uk</span>
            </h3>
            <Image src="/arrow-down.webp" width={100} height={100} className="absolute lg:-right-10 right-0 lg:bottom-[5%] bottom-[-10%] lg:-rotate-12 rotate-[220deg] lg:scale-x-[1] scale-x-[-1]" alt={"arrow-down"} />
          </div>

          <div className="flex flex-col items-center justify-center lg:w-1/2 w-full">
            <Image
              src="/ryan-phone.webp"
              alt="aga coventry"
              width={400}
              height={400}
              className="w-auto"
            />
            <div className="flex flex-nowrap gap-4 -mt-[20%]">
              <Link href="mailto:ryan.gledhill@acceptrec.co.uk" className="w-fit">
                <button className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white hover:shadow-[#00afa93b] hover:w-fit p-3 rounded-full transition-all duration-200 gap-2">
                  Email
                  <BiEnvelope className="right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200" />
                </button>
              </Link>
              <Link href="tel:07441369469" className="w-fit">
                <button className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white hover:shadow-[#00afa93b] hover:w-fit p-3 rounded-full transition-all duration-200 gap-2">
                  Call
                  <TbPhone className="right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <LeftRightCollumnReadMore title={"A warm welcome from us"} subtitle={"Recruitment in Tamworth"} introduction={""} text={"Welcome to our recruitment agency in Tamworth, where we accept every challenge but remain dedicated to providing outstanding service. We are proud to be the best-rated recruitment agency in the UK, serving the vibrant community of Tamworth.<br><br>This friendly approach helps candidates to relax and open up about their experiences and the types of roles they seek. Many individuals transition to our clients' payrolls, demonstrating our dedication to matching the right person with the right job. We specialise in supplying warehouse, industrial, and food production staff to some of Tamworth's largest and most renowned companies.<br><br>We have a large range of day shift and night shift opportunities, full time and part time industrial jobs available in Nuneaton, Warwick, Daventry and Crick, postcodes CV2, CV10, CV11, CV35, NN6 and more.<br><br>Take a look at current vacancies in Leicester: Warehouse Jobs in Leicester, Food Production Jobs in Leicester, Industrial Jobs in Leicester, Technical Jobs in Leicester, Commercial Jobs in Leicester.<br><br>At Accept Recruitment, we accept challenges but remain strong in our commitment to providing exceptional service and finding the perfect fit for every role."} image={"/tamworthoffice.webp"} imagealt={"Award-Winning Recruitment Agency in Tamworth"} imageposition={"right"} link={""} buttontitle={""} bgcolor={"bg-neutral-100"} />
      <Industries industriesMainTitle={"Industries"} industriesSmallIntroduction={"Specialising within niche industries, we use our expertise and systems to source the staff you need. We provide both temporary staffing and permanent solutions."} industriesSmallTitle={"What we cover"} />
      <Office phonenumber={"01827438334"} about={""} living={""} jobs={""} coordinates={"52.634399938905744,-1.7008615349342602"} />
    </>
  );
}
