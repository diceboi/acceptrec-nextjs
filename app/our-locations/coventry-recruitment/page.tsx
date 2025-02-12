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
    title: "Coventry Recruitment Agency - Offices - Accept Recruitment",
    description:
      "Looking for the best recruitment agency in Coventry? Our experts connect top talent with leading employers for tailored job placements.",
    alternates: {
      canonical: `https://www.acceptrec.co.uk/our-locations/coventry-recruitment`
    }
  };
}

export default async function OfficesPage() {
  const { data: officespagedata } = await getClient().query({ query });

  const officespage = officespagedata?.page?.officespage;

  return (
    <>
      <section className="relative flex flex-col items-center py-20 px-4 w-full bg-[#312252] min-h-[80vh]">
        <Image src="/coventryofficehero.webp" fill style={{ objectFit: 'cover', objectPosition: 'center' }} alt="leicester background image" className=" opacity-10" />
          <div className="flex flex-col items-center justify-center gap-8 lg:w-full w-full relative pt-20">
            <h1 className="lg:text-6xl text-4xl text-white font-black text-center lg:w-1/2">
              Best rated Recruitment Agency in Coventry
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
            <p className="text-white lg:text-lg text-sm text-center lg:w-1/2">
              Where we accept every challenge but remain dedicated to providing
              outstanding service. We are proud to be the best-rated recruitment
              agency in the UK, serving the vibrant community of Coventry.
            </p>
            <h3 className="text-white text-start lg:text-3xl text-xl font-black drop-shadow-2xl">
              Give us a Call: <a href="tel:02477180356" className="text-[#00afaa]">02477180356</a>
            </h3>
            <Link href="#contactus" className="w-fit">
              <button className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white hover:shadow-[#00afa93b] hover:w-fit p-3 rounded-full transition-all duration-200 gap-2">
                Contact Us
              </button>
            </Link>
          </div>
      </section>
      <LeftRightCollumnReadMore title={"A warm welcome from us"} subtitle={"Recruitment in Coventry"} introduction={""} text={"Welcome to our recruitment agency in Coventry, where we accept every challenge but remain dedicated to providing outstanding service. We are proud to be the best-rated recruitment agency in the UK, serving the vibrant community of Coventry.<br><br>This friendly approach helps candidates to relax and open up about their experiences and the types of roles they seek. Many individuals transition to our clients' payrolls, demonstrating our dedication to matching the right person with the right job. We specialise in supplying warehouse, industrial, and food production staff to some of Coventry's largest and most renowned companies.<br><br>We have a large range of day shift and night shift opportunities, full time and part time industrial jobs available in Nuneaton, Warwick, Daventry and Crick, postcodes CV2, CV10, CV11, CV35, NN6 and more.<br><br>Take a look at current vacancies in Coventry: Warehouse Jobs in Coventry, Food Production Jobs in Coventry, Industrial Jobs in Coventry, Technical Jobs in Coventry, Commercial Jobs in Coventry.<br><br>At Accept Recruitment, we accept challenges but remain strong in our commitment to providing exceptional service and finding the perfect fit for every role."} image={"/coventryofficehero.webp"} imagealt={"Award-Winning Recruitment Agency in Coventry"} imageposition={"right"} link={""} buttontitle={""} bgcolor={"bg-neutral-100"}/>
      <LeftRightCollumn title={"Award-Winning Recruitment Agency"} subtitle={"Coventry and the West Midlands"} introduction={""} text={"We are incredibly proud to be recognised as the Best Recruitment Agency of the Year for Temporary Jobs in Coventry and the West Midlands. This prestigious award highlights the hard work and dedication of our team in providing top-notch recruitment services."} image={"/leicestershire-awards-2024.webp"} imagealt={"Award-Winning Recruitment Agency in Coventry"} imageposition={"left"} link={"/contact-us"} buttontitle={"Get in touch"}/>
      <Industries industriesMainTitle={"Industries"} industriesSmallIntroduction={"Specialising within niche industries, we use our expertise and systems to source the staff you need. We provide both temporary staffing and permanent solutions."} industriesSmallTitle={"What we cover"}/>
      <Office phonenumber={"02477180356"} about={""} living={""} jobs={""} coordinates={"52.40780950750115,-1.4972240772632108"}/>
    </>
  );
}
