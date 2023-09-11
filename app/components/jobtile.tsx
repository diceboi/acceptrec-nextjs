"use client"

export const dynamic = "force-dynamic";

import Link from "next/link";

import {PiMapPinLineBold} from "react-icons/pi"
import {PiPenNibBold} from "react-icons/pi"
import {RiMoneyPoundCircleLine} from "react-icons/ri"
import { FiArrowRight } from "react-icons/fi"

interface JobData {
  title: string;
  category: string; // Assuming you have a single category
  description: string;
  town: string;
  state: string;
  salarymin: number;
  date: string[]; // Assuming an array of date strings
  url: string; // Assuming the URL to the job details
}

export default function JobTile({ jobData }: { jobData: JobData }) {

    const formatDateDifference = (dateString: string | number | Date) => {
      const postDate = new Date(dateString);

      // Ensure proper parsing of the date string format
      const dateParts = postDate.toString().split(' ');
      const formattedDateString = `${dateParts[1]} ${dateParts[2]}, ${dateParts[3]}`;
      const parsedDate = new Date(formattedDateString);

      const currentDate = new Date();
      const timeDifference = currentDate.getTime() - parsedDate.getTime();
      const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

      return `${daysDifference} days ago`;
    };

    const extractFirstSentence = (description: string) => {
      if (description.length <= 150) {
          return description; // Return full description if it's 177 characters or less
      }

      // Truncate the description to the first 177 characters and add ellipsis
      const truncatedDescription = description.substring(0, 177) + '...';
      return truncatedDescription;
    };

    return(
        <>
        <Link href={jobData.url}>
        <div className="group flex flex-col justify-between bg-white shadow-special border border-neutral-200 p-4 rounded-3xl hover:shadow-special hover:bg-neutral-50 cursor-pointer transition-all">
            <div className="relative flex justify-between">
              <h3 className="text-xl font-black pb-2 w-3/4 text-[#312252]">{jobData.title}</h3>
              <FiArrowRight className='absolute right-4 recruitment-icon w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-0 ease-out duration-200'/>
            </div>
            <div className="flex flex-wrap gap-2 py-2">
            {jobData.category.includes(',') ? (
              jobData.category.split(',').map((category, index) => (
                <h4 key={index} className="p-2 bg-[#00afaa] text-white rounded-full hover:underline">{category.trim()}</h4>
              ))
            ) : (
              <h4 className="p-2 bg-[#00afaa] text-white rounded-full hover:underline">{jobData.category}</h4>
            )}

            </div>
            <p className="py-2 font-medium">{extractFirstSentence(jobData.description)}</p>
            <div className="flex flex-wrap items-center gap-2 border-t border-neutral-300 pt-3 mt-2 text-sm">
                <div className="flex items-center gap-1">
                    <PiMapPinLineBold className="text-[#312252] w-6 h-6"/>
                    <h5 className="font-bold text-[#312252]">{jobData.town}, {jobData.state}</h5>
                </div>
                <div className="flex items-center gap-1">
                    <RiMoneyPoundCircleLine className="text-[#312252] w-6 h-6"/>
                    <h5 className="font-bold text-[#312252]">£ {jobData.salarymin}</h5>
                </div>
                <div className="flex items-center gap-1">
                    <p>Posted: </p>
                    <h5 className="font-bold text-[#312252]">{formatDateDifference(new Date(jobData.date[0]))}</h5>
                </div>                 
            </div>
        </div>
        </Link>
        </>
    )
}

