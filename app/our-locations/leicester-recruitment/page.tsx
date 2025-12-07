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
    title: "Leicester Recruitment Agency - Offices - Accept Recruitment",
    description:
      "Looking for the best recruitment agency in Leicester? Our experts connect top talent with leading employers for tailored job placements.",
    alternates: {
      canonical: `/our-locations/leicester-recruitment`
    }
  };
}

export default async function LeicesterOfficePage() {
  const { data: officespagedata } = await getClient().query({ query });

  const officespage = officespagedata?.page?.officespage;

  // LocalBusiness schema for Leicester office
  const leicesterSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://acceptrec.co.uk/our-locations/leicester-recruitment",
    "name": "Accept Recruitment - Leicester Office",
    "image": "https://acceptrec.co.uk/leicesterhqofficehero.webp",
    "url": "https://acceptrec.co.uk/our-locations/leicester-recruitment",
    "telephone": "+44-116-218-2133",
    "priceRange": "££",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit 4, Oswin Rd, Forest Business Park",
      "addressLocality": "Leicester",
      "addressRegion": "Leicestershire",
      "postalCode": "LE3 1HR",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.63162232019635,
      "longitude": -1.1825477558256041
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "950",
      "bestRating": "5"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.google.com/search?q=accept+recruitment+leicester"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Leicester"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(leicesterSchema) }}
      />
      <section className="relative flex flex-col items-center py-20 px-4 w-full bg-[#312252] min-h-[80vh]">
        <Image src="/leicesterhqofficehero.webp" fill style={{ objectFit: 'cover', objectPosition: 'center' }} alt="leicester background image" className=" opacity-10" />
        <div className="flex flex-col items-center justify-center gap-8 lg:w-full w-full relative pt-20">
          <h1 className="lg:text-6xl text-4xl text-white font-black text-center lg:w-1/2">
            Best rated Recruitment Agency in Leicester
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
            agency in the UK, serving the vibrant community of Leicester.
          </p>
          <h3 className="text-white text-start lg:text-3xl text-xl font-black drop-shadow-2xl">
            Give us a Call: <a href="tel:01162182133" className="text-[#00afaa]">01162182133</a>
          </h3>
          <Link href="#contactus" className="w-fit">
            <button className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white hover:shadow-[#00afa93b] hover:w-fit p-3 rounded-full transition-all duration-200 gap-2">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
      <LeftRightCollumnReadMore title={"A warm welcome from us"} subtitle={"Recruitment in Leicester"} introduction={""} text={"Welcome to our recruitment agency in Leicester, where we accept every challenge but remain dedicated to providing outstanding service. We are proud to be the best-rated recruitment agency in the UK, serving the vibrant community of Leicester.<br><br>This friendly approach helps candidates to relax and open up about their experiences and the types of roles they seek. Many individuals transition to our clients' payrolls, demonstrating our dedication to matching the right person with the right job. We specialise in supplying warehouse, industrial, and food production staff to some of Leicester's largest and most renowned companies.<br><br>We have a large range of day shift and night shift opportunities, full time and part time industrial jobs available in Nuneaton, Warwick, Daventry and Crick, postcodes CV2, CV10, CV11, CV35, NN6 and more.<br><br>Take a look at current vacancies in Leicester: Warehouse Jobs in Leicester, Food Production Jobs in Leicester, Industrial Jobs in Leicester, Technical Jobs in Leicester, Commercial Jobs in Leicester.<br><br>At Accept Recruitment, we accept challenges but remain strong in our commitment to providing exceptional service and finding the perfect fit for every role."} image={"/leicesterhqofficehero.webp"} imagealt={"Award-Winning Recruitment Agency in Leicester"} imageposition={"right"} link={""} buttontitle={""} bgcolor={"bg-neutral-100"} />
      <LeftRightCollumn title={"Award-Winning Recruitment Agency"} subtitle={"Leicester"} introduction={""} text={"We are incredibly proud to be recognised as the Best Recruitment Agency of the Year for Temporary Jobs in Leicester. This prestigious award highlights the hard work and dedication of our team in providing top-notch recruitment services."} image={"/best-recruitment-agency-of-the-year-award.webp"} imagealt={"Award-Winning Recruitment Agency in Leicester"} imageposition={"left"} link={"/contact-us"} buttontitle={"Get in touch"} />
      <Industries industriesMainTitle={"Industries"} industriesSmallIntroduction={"Specialising within niche industries, we use our expertise and systems to source the staff you need. We provide both temporary staffing and permanent solutions."} industriesSmallTitle={"What we cover"} />
      <Office phonenumber={"01162182133"} about={""} living={""} jobs={""} coordinates={"52.63162232019635,-1.1825477558256041"} />
    </>
  );
}
