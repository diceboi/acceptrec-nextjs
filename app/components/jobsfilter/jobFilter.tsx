"use client";

import React, {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";

interface JobFilterProps {
  uniqueCategories: string[];
  states: string[];
  jobTypes: string[];
  contractTypes: string[];
}

interface JobTypeMapping {
  [key: string]: string;
}

interface ContractTypeMapping {
  [key: string]: string;
}

const Jobfilter: React.FC<JobFilterProps> = ({ uniqueCategories, states, jobTypes, contractTypes }) => {

  const jobTypeMapping: JobTypeMapping = {
    fulltime: "Full Time",
    parttime: "Part Time",
  };
  
  const contractTypeMapping: ContractTypeMapping = {
    temp: "Temporary",
    temp2perm: "Temporary (going to be permanent)",
    perm: "Permanent",
  };

  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category
  const [selectedJobType, setSelectedJobType] = useState(""); // State for selected job type
  const [selectedContractType, setSelectedContractType] = useState(""); // State for selected contract type

  const jobTypesDisplay = jobTypes.map(type => jobTypeMapping[type] || type);
  const contractTypesDisplay = contractTypes.map(contracttype => contractTypeMapping[contracttype] || contracttype);

  const router = useRouter();
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const queryParams = [];

    if (filter) {
      queryParams.push(`region=${filter}`);
    }

    // Modify the following sections to include selected values in queryParams
    if (selectedCategory) {
      queryParams.push(`category=${selectedCategory}`);
    }

    if (selectedJobType) {
      queryParams.push(`type=${selectedJobType}`);
    }

    if (selectedContractType) {
      queryParams.push(`contracttype=${selectedContractType}`);
    }

    // Combine queryParams to form the final URL
    const query = queryParams.join("&");
    const url = query ? `/jobs?${query}` : "/jobs";

    router.push(url);
  }, [filter, selectedCategory, selectedJobType, selectedContractType]);

  return (
    <>  
      <div id="jobfilter" className="flex gap-4 w-8/12 m-auto -mt-16">
          <div className="grid w-full">
              <label className="text-sm lg:text-md uppercase font-medium tracking-widest py-2">Region</label>
              <select onChange={(event) => setFilter(event.target.value)} id="job-region" className="p-4 shadow-special rounded-full hover:bg-neutral-50 cursor-pointer ">
                {
                  states.map((state) => (
                    <option key={state} value={state}>{state}</option>                       
                  ))
                }
                
              </select>
          </div>

          <div className="grid w-full">
              <label htmlFor="job-category" className="text-sm lg:text-md uppercase font-medium tracking-widest py-2">Category</label>
              <select onChange={(event) => setSelectedCategory(event.target.value)} value={selectedCategory} id="job-category" className="p-4 shadow-special rounded-full  hover:bg-neutral-50 cursor-pointer">
                {
                  uniqueCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>                       
                  ))
                }                            
              </select>
          </div>

          <div className="grid w-full">
              <label className="text-sm lg:text-md uppercase font-medium tracking-widest py-2">Type</label>
              <select onChange={(event) => setSelectedJobType(event.target.value)} value={selectedJobType} id="job-region" className="p-4 shadow-special rounded-full hover:bg-neutral-50 cursor-pointer ">
                {jobTypes.map((jobtype, index) => (
                <option key={jobtype} value={jobtype}>
                  {jobTypesDisplay[index]}
                </option>
                ))}                 
              </select>
          </div>

          <div className="grid w-full">
              <label className="text-sm lg:text-md uppercase font-medium tracking-widest py-2">Contract type</label>
              <select onChange={(event) => setSelectedContractType(event.target.value)} value={selectedContractType} id="job-region" className="p-4 shadow-special rounded-full hover:bg-neutral-50 cursor-pointer ">
                {contractTypes.map((contracttype, index) => (
                <option key={contracttype} value={contracttype}>
                  {contractTypesDisplay[index]}
                </option>
                ))} 
              </select>
          </div>          
      </div>
    </>
  );
};

export default Jobfilter;