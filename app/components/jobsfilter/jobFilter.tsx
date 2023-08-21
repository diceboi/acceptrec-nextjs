"use client";

import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import searchDebounce from "./searchDebounce";

const Jobfilter = () => {
  const router = useRouter();
  const [filter, setFilter] = useState("");

  const debouncedSearch = searchDebounce({value: filter});

  useEffect(() => {
    if (debouncedSearch) {
      router.push(`/jobs?region=${debouncedSearch}`);
    } else {
      router.push("/jobs");
    }
  }, [debouncedSearch]);

  return (
    <>  
      <div id="jobfilter" className="flex flex-col gap-4 w-1/4 border-r border-neutral-300 mr-4">
          <h3 className="text-2xl font-black uppercase">Job filter</h3>

          <div id="region" className="grid grid-rows-10 gap-2 border-t border-neutral-300 py-4 pr-4">
              <h4 className="text-sm lg:text-md uppercase font-medium tracking-widest mb-4">Region Try Try</h4>

              <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">City of Bristol
              <input type="radio" name="radio" value="Bristol" onChange={(event) => setFilter(event.target.value)}/>
              <span className="checkmark"></span>
              </label>
              
              <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Leicestershire
              <input type="radio" name="radio" value="Leicestershire" onChange={(event) => setFilter(event.target.value)}/>
              <span className="checkmark"></span>
              </label>

              <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Warwickshire
              <input type="radio" name="radio" value="Warwickshire" onChange={(event) => setFilter(event.target.value)}/>
              <span className="checkmark"></span>
              </label>

              <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Gloucestershire
              <input type="radio" name="radio" value="Gloucestershire" onChange={(event) => setFilter(event.target.value)}/>
              <span className="checkmark"></span>
              </label>
              <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Staffordshire
              <input type="radio" name="radio" value="Staffordshire" onChange={(event) => setFilter(event.target.value)}/>
              <span className="checkmark"></span>
              </label>

              <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Lanarkshire
              <input type="radio" name="radio" value="Lanarkshire" onChange={(event) => setFilter(event.target.value)}/>
              <span className="checkmark"></span>
              </label>

              <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Essex
              <input type="radio" name="radio" value="Essex" onChange={(event) => setFilter(event.target.value)}/>
              <span className="checkmark"></span>
              </label>

              <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Herefordshire
              <input type="radio" name="radio" value="Herefordshire" onChange={(event) => setFilter(event.target.value)}/>
              <span className="checkmark"></span>
              </label>

              <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Glamorgan
              <input type="radio"  name="radio" value="Glamorgan" onChange={(event) => setFilter(event.target.value)}/>
              <span className="checkmark"></span>
              </label>

              <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">London
              <input type="radio"  name="radio" value="London" onChange={(event) => setFilter(event.target.value)}/>
              <span className="checkmark"></span>
              </label>

              <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Wiltshire
              <input type="radio"  name="radio" value="Wiltshire" onChange={(event) => setFilter(event.target.value)}/>
              <span className="checkmark"></span>
              </label>
          </div>

          <div id="category" className="grid grid-rows-10 gap-2 border-t border-neutral-300 py-4 pr-4">
              <h4 className="text-sm lg:text-md uppercase font-medium tracking-widest mb-4">Category</h4>

              <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Industrial
              <input type="radio"  name="radio" value="Industrial"/>
              <span className="checkmark"></span>
              </label>
              
              <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Logistics & Trapnsportation
              <input type="radio"  name="radio" value="Logistics-Trapnsportation"/>
              <span className="checkmark"></span>
              </label>

              <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Automotive
              <input type="radio"  name="radio" value="Automotive"/>
              <span className="checkmark"></span>
              </label>

              <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Engineering
              <input type="radio"  name="radio" value="Engineering"/>
              <span className="checkmark"></span>
              </label>

              <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Manufacturing & Production
              <input type="radio"  name="radio" value="Manufacturing-Production"/>
              <span className="checkmark"></span>
              </label>

              <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Business
              <input type="radio"  name="radio" value="Business"/>
              <span className="checkmark"></span>
              </label>

              <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Administration & Secretarial
              <input type="radio"  name="radio" value="Administration-Secretarial"/>
              <span className="checkmark"></span>
              </label>

              <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Recruitment & HR
              <input type="radio"  name="radio" value="Recruitment-HR"/>
              <span className="checkmark"></span>
              </label>

              <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Sales
              <input type="radio"  name="radio" value="Sales"/>
              <span className="checkmark"></span>
              </label>

              <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Security & Safety
              <input type="radio"  name="radio" value="Security-Safety"/>
              <span className="checkmark"></span>
              </label>
          </div>

          <div id="type" className="grid grid-rows-10 gap-2 border-t border-neutral-300 py-4 pr-4">
              <h4 className="text-sm lg:text-md uppercase font-medium tracking-widest mb-4">Type</h4>

              <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Full Time
              <input type="radio"  name="radio" value="Full-time"/>
              <span className="checkmark"></span>
              </label>
              
              <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Part Time
              <input type="radio"  name="radio" value="Part-time"/>
              <span className="checkmark"></span>
              </label>                    
          </div>

          <div id="contract-type" className="grid grid-rows-10 gap-2 border-t border-neutral-300 py-4 pr-4">
              <h4 className="text-sm lg:text-md uppercase font-medium tracking-widest mb-4">Contract type</h4>

              <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Temporary
              <input type="radio"  name="radio" value="Temporary"/>
              <span className="checkmark"></span>
              </label>
              
              <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Temporary (going to be permanent)
              <input type="radio"  name="radio" value="Temporary-to-Permanent"/>
              <span className="checkmark"></span>
              </label>    

              <label className="jobfiltercheckmark bg-neutral-50 hover:bg-[#312252] hover:text-white font-medium py-2 px-3 rounded-lg hover:shadow-special cursor-pointer">Permanent
              <input type="radio"  name="radio" value="Permanent"/>
              <span className="checkmark"></span>
              </label>                
          </div>
      </div>
    </>
  );
};

export default Jobfilter;