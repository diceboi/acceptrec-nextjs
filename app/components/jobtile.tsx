export const dynamic = "force-dynamic";

import {PiMapPinLineBold} from "react-icons/pi"
import {PiPenNibBold} from "react-icons/pi"
import {RiMoneyPoundCircleLine} from "react-icons/ri"
import { FiArrowRight } from "react-icons/fi"

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
        <div className="group flex flex-col justify-between bg-white shadow-special border border-neutral-200 p-4 rounded-3xl hover:shadow-special hover:bg-neutral-50 cursor-pointer transition-all max-w-[500px]">
            <div className="relative flex justify-between">
              <h3 className="text-xl font-black pb-2">{jobData.title}</h3>
              <FiArrowRight className='absolute right-4 recruitment-icon w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-0 ease-out duration-200'/>
            </div>
            <div className="flex gap-2 py-2">

              {jobData.jobs.category.map((category, index) => (

              <h4 key={index} className="p-2 bg-[#00afaa] text-white rounded-full hover:underline">{category}</h4>

              ))}

            </div>
            <p className="py-2 font-medium">
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

