"use client";

export const dynamic = "force-dynamic";

import {PiMapPinLineBold} from "react-icons/pi"
import {PiPenNibBold} from "react-icons/pi"
import {RiMoneyPoundCircleLine} from "react-icons/ri"

interface JobData {
  title: string;
  jobs: {
    category: string[];
    contractType: string;
    fieldGroupName: string;
    longDescription: string;
    region: string;
    salary: number;
    salary2?: number | null;
    shortDescription: string;
    type: string;
  };
  date: string;
}

export default function JobTile({ jobData }: { jobData: JobData }) {

    const formatDateDifference = (dateString: string | number | Date) => {
      const postDate = new Date(dateString);
      const currentDate = new Date();
      const timeDifference = currentDate.getTime() - postDate.getTime();
      const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

      return `${daysDifference} days ago`;
    };

    const formatSalary = () => {
      if (typeof jobData.jobs.salary2 === "number") {
        return `£${jobData.jobs.salary.toFixed(2)} - £${jobData.jobs.salary2.toFixed(2)}`;
      } else {
        return `£${jobData.jobs.salary.toFixed(2)}`;
      }
    };

    return(
        <>
        <div className="flex flex-col  bg-white border border-neutral-300 p-4 rounded-xl hover:shadow-sm hover:bg-neutral-100 cursor-pointer transition-all">
            <h3 className="text-xl font-black pb-2">{jobData.title}</h3>
            <div className="flex gap-2 py-2">

              {jobData.jobs.category.map((category, index) => (

              <h4 key={index} className="p-2 bg-[#00afaa] text-white rounded-full hover:underline">{category}</h4>

              ))}

            </div>
            <p className="py-2 font-normal">
            {jobData.jobs.shortDescription}
            </p>
            <div className="flex items-center gap-4 border-t border-neutral-300 pt-3 mt-2 text-sm">
                <div className="flex items-center gap-1">
                    <PiMapPinLineBold className="text-[#312252] w-6 h-6"/>
                    <h5 className="font-bold text-[#312252]">{jobData.jobs.region}</h5>
                </div>
                <div className="flex items-center gap-1">
                    <RiMoneyPoundCircleLine className="text-[#312252] w-6 h-6"/>
                    <h5 className="font-bold text-[#312252]">{`${formatSalary()} /hour`}</h5>
                </div>
                <div className="flex items-center gap-1">
                    <PiPenNibBold className="text-[#312252] w-6 h-6"/>
                    <h5 className="font-bold text-[#312252]">{formatDateDifference(jobData.date)}</h5>
                </div>                 
            </div>
        </div>
        </>
    )
}

