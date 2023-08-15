import ThemeHero from "../components/Theme Components/ThemeHero"

import { BiSearchAlt } from "react-icons/bi"
import { AiFillStar } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import getJobs from "../api/getJobs";
import JobTile from "../components/jobtile";


import GoogleReviewNumber from "../components/googlereviewnumber"

interface Job {
    id: string;
    title: string;
    category: string; // Assuming you have a single category
    description: string;
    town: string;
    state: string;
    salarymin: number;
    date: string[]; // Assuming an array of date strings
    url: string; // Assuming the URL to the job details
  }

export default async function Jobs() {

    const jobs = await getJobs();

    return(
        <>
        <ThemeHero title={"Jobs"} subtitle={"Find the job that's most suitable for you"} className={"bg-gradient-to-br from-white to-[#00afa917] h-96 pb-10"}/>
        <div className="flex w-11/12 lg:w-8/12 m-auto gap-8 py-20">
            <div id="jobfilter" className="flex flex-col gap-4 w-1/4 border-r border-neutral-300 mr-4">
                <h3 className="text-2xl font-black uppercase">Job filter</h3>

                <div id="region" className="grid grid-rows-10 gap-2 border-t border-neutral-300 py-4 pr-4">
                    <h4 className="text-sm lg:text-md uppercase font-medium tracking-widest mb-4">Region Try Try</h4>

                    <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">City of Bristol
                    <input type="radio" name="radio"/>
                    <span className="checkmark"></span>
                    </label>
                    
                    <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Leicestershire
                    <input type="radio" name="radio"/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Warwickshire
                    <input type="radio" name="radio"/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Gloucestershire
                    <input type="radio" name="radio"/>
                    <span className="checkmark"></span>
                    </label>
                    <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Staffordshire
                    <input type="radio" name="radio"/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Lanarkshire
                    <input type="radio" name="radio"/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Essex
                    <input type="radio" name="radio"/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Herefordshire
                    <input type="radio" name="radio"/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Glamorgan
                    <input type="radio"  name="radio"/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">London
                    <input type="radio"  name="radio"/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Wiltshire
                    <input type="radio"  name="radio"/>
                    <span className="checkmark"></span>
                    </label>
                </div>

                <div id="category" className="grid grid-rows-10 gap-2 border-t border-neutral-300 py-4 pr-4">
                    <h4 className="text-sm lg:text-md uppercase font-medium tracking-widest mb-4">Category</h4>

                    <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Industrial
                    <input type="radio"  name="radio"/>
                    <span className="checkmark"></span>
                    </label>
                    
                    <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Logistics & Trapnsportation
                    <input type="radio"  name="radio"/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Automotive
                    <input type="radio"  name="radio"/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Engineering
                    <input type="radio"  name="radio"/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Manufacturing & Production
                    <input type="radio"  name="radio"/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Business
                    <input type="radio"  name="radio"/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Administration & Secretarial
                    <input type="radio"  name="radio"/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Recruitment & HR
                    <input type="radio"  name="radio"/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Sales
                    <input type="radio"  name="radio"/>
                    <span className="checkmark"></span>
                    </label>

                    <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Security & Safety
                    <input type="radio"  name="radio"/>
                    <span className="checkmark"></span>
                    </label>
                </div>

                <div id="type" className="grid grid-rows-10 gap-2 border-t border-neutral-300 py-4 pr-4">
                    <h4 className="text-sm lg:text-md uppercase font-medium tracking-widest mb-4">Type</h4>

                    <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Full Time
                    <input type="radio"  name="radio"/>
                    <span className="checkmark"></span>
                    </label>
                    
                    <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Part Time
                    <input type="radio"  name="radio"/>
                    <span className="checkmark"></span>
                    </label>                    
                </div>

                <div id="contract-type" className="grid grid-rows-10 gap-2 border-t border-neutral-300 py-4 pr-4">
                    <h4 className="text-sm lg:text-md uppercase font-medium tracking-widest mb-4">Contract type</h4>

                    <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Temporary
                    <input type="radio"  name="radio"/>
                    <span className="checkmark"></span>
                    </label>
                    
                    <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Temporary (going to be permanent)
                    <input type="radio"  name="radio"/>
                    <span className="checkmark"></span>
                    </label>    

                    <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Permanent
                    <input type="radio"  name="radio"/>
                    <span className="checkmark"></span>
                    </label>                
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8 w-max">
                {jobs.map((job: Job) => (
                    <JobTile key={job.id[0]} jobData={job} />
                ))}
            </div>

        </div>
        </>
    )
}

