"use client";

import React, {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import { IoIosClose } from 'react-icons/io'
import { TbZoomReset } from "react-icons/tb";

interface JobFilterProps {
  uniqueCategories: any;
  states: any;
  jobTypes: any;
  contractTypes: any;
  jobsData: any;
}

interface JobTypeMapping {
  key: any;
  fulltime: string;
  parttime: string;
  [key: string]: string;
}

interface ContractTypeMapping {
  key: any;
  temp: string;
  temp2perm: string;
  perm: string;
  [key: string]: string;
}

const Jobfilter: React.FC<JobFilterProps> = ({ uniqueCategories, states, jobTypes, contractTypes, jobsData }) => {

  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string }>({});

  const jobTypeMapping: JobTypeMapping = {
    fulltime: "Full Time",
    parttime: "Part Time",
    key: "",
  };
  
  const contractTypeMapping: ContractTypeMapping = {
    temp: "Temporary",
    temp2perm: "Temporary (going to be permanent)",
    perm: "Permanent",
    key: "",
  };

  const initialRegion = searchParams.get('region') || '';
  const initialCategory = searchParams.get('category') || '';
  const initialJobType = searchParams.get('type') || '';
  const initialContractType = searchParams.get('contracttype') || '';

  const [selectedRegion, setSelectedRegion] = useState(initialRegion);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedJobType, setSelectedJobType] = useState(initialJobType);
  const [selectedContractType, setSelectedContractType] = useState(initialContractType);

  const jobTypesDisplay = jobTypes.map((type: string | number) => jobTypeMapping[type] || type);
  const contractTypesDisplay = contractTypes.map((contracttype: string | number) => contractTypeMapping[contracttype] || contracttype);

  useEffect(() => {
    const regionQuery = searchParams.get('region');
    const categoryQuery = searchParams.get('category');
    const typeQuery = searchParams.get('type');
    const contracttypeQuery = searchParams.get('contracttype');

    // Update the state with the URL parameters
    setSelectedRegion(regionQuery || '');
    setSelectedCategory(categoryQuery || '');
    setSelectedJobType(typeQuery || '');
    setSelectedContractType(contracttypeQuery || '');
  }, [searchParams])

  const handleRegionChange = (event: { target: { value: any; }; }) => {
    const regionValue = event.target.value;
    setSelectedRegion(regionValue);
    updateUrlParams({ region: regionValue });
    setSelectedFilters({ ...selectedFilters, region: regionValue });
  };

  const handleCategoryChange = (event: { target: { value: any; }; }) => {
    const categoryValue = event.target.value;
    setSelectedCategory(categoryValue);
    updateUrlParams({ category: categoryValue });
    setSelectedFilters({ ...selectedFilters, category: categoryValue });

  };

  const handleJobTypeChange = (event: { target: { value: any; }; }) => {
    const jobTypeValue = event.target.value;
    setSelectedJobType(jobTypeValue);
    updateUrlParams({ type: jobTypeValue });
    setSelectedFilters({ ...selectedFilters, type: jobTypeValue });
  };

  const handleContractTypeChange = (event: { target: { value: any; }; }) => {
    const contractTypeValue = event.target.value;
    setSelectedContractType(contractTypeValue);
    updateUrlParams({ contracttype: contractTypeValue });
    setSelectedFilters({ ...selectedFilters, contracttype: contractTypeValue });
  };

  const handleFilterRemove = (filterName: string) => {
    // Remove the filter from selectedFilters
    const { [filterName]: removedFilter, ...restFilters } = selectedFilters;
    setSelectedFilters(restFilters);
  
    // Update the URL and remove the filter from the query parameter
    updateUrlParams({ [filterName]: null });
  };

  const resetAllFilters = () => {
    setSelectedRegion(""); // Clear selected region
    setSelectedCategory(""); // Clear selected category
    setSelectedJobType(""); // Clear selected job type
    setSelectedContractType(""); // Clear selected contract type
    setSelectedFilters({}); // Clear selected filters object

    // Clear URL query parameters for all filters
    updateUrlParams({
      region: null,
      category: null,
      type: null,
      contracttype: null,
    });

    // Redirect to /jobs
    router.push("/jobs");
  };

  

  const updateUrlParams = (newParams: { [x: string]: any; region?: any; category?: any; type?: any; contracttype?: any; }) => {
    const currentParams = new URLSearchParams(window.location.search);
  
    for (const key in newParams) {
      if (newParams[key]) {
        currentParams.set(key, newParams[key]);
      } else {
        currentParams.delete(key);
      }
    }
  
    const newSearch = currentParams.toString();
    const newUrl = `${window.location.pathname}${newSearch ? `?${newSearch}` : ''}`;
  
    router.push(newUrl);
  };

  return (
    <>  
      <div id="jobfilter" className="flex flex-wrap lg:flex-nowrap gap-4 w-11/12 lg:w-8/12 m-auto mt-16 lg:-mt-16 ">
        
          <div className="grid grid-cols-2 lg:grid-cols-1 items-center w-full">
              <label className="text-sm lg:text-md uppercase font-medium tracking-widest py-2">Region</label>
              <select onChange={handleRegionChange} value={selectedRegion} id="job-region" className="p-4 shadow-special rounded-full hover:bg-neutral-50 cursor-pointer font-bold">
                <option className="font-bold">Select a region</option>
                {
                  states.map((state: any) => (
                    <option key={state} value={state} className="font-bold">{state}</option>                       
                  ))
                }
                
              </select>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 items-center w-full">
              <label htmlFor="job-category" className="text-sm lg:text-md uppercase font-medium tracking-widest py-2">Category</label>
              <select onChange={handleCategoryChange} value={selectedCategory} id="job-category" className="p-4 shadow-special rounded-full  hover:bg-neutral-50 cursor-pointer font-bold">
              <option className="font-bold">Select a category</option>
                {
                  uniqueCategories.map((category: any) => (
                    <option key={category} value={category} className="font-bold">{category}</option>                       
                  ))
                }                            
              </select>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 items-center w-full">
              <label className="text-sm lg:text-md uppercase font-medium tracking-widest py-2">Type</label>
              <select onChange={handleJobTypeChange} value={selectedJobType} id="job-region" className="p-4 shadow-special rounded-full hover:bg-neutral-50 cursor-pointer font-bold">
              <option className="font-bold">Select a job type</option>
                {jobTypes.map((jobtype: any, index: string | number) => (
                <option key={jobtype} value={jobtype} className="font-bold">
                  {jobTypesDisplay[index]}
                </option>
                ))}                 
              </select>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 items-center w-full">
              <label className="text-sm lg:text-md uppercase font-medium tracking-widest py-2">Contract type</label>
              <select onChange={handleContractTypeChange} value={selectedContractType} id="job-region" className="p-4 shadow-special rounded-full hover:bg-neutral-50 cursor-pointer font-bold">
              <option className="font-bold">Select a contract type</option>
                {contractTypes.map((contracttype: any, index: string | number) => (
                <option key={contracttype} value={contracttype} className="font-bold">
                  {contractTypesDisplay[index]}
                </option>
                ))} 
              </select>
          </div>        
      </div>
        {Object.keys(selectedFilters).length > 0 && (
          <div className="flex flex-wrap gap-4 w-11/12 lg:w-8/12 m-auto mt-4">
              <button
                className="flex flex-nowrap items-center gap-4 px-2 py-1 bg-[#00afaa] text-white rounded-full max-h-min"
                onClick={resetAllFilters}
              >
                <p>Reset fiters</p><TbZoomReset />
              </button>
              {Object.entries(selectedFilters).map(([filterName, filterValue]) => (
                <div className="flex flex-nowrap gap-4 px-2 py-1 bg-[#312252] text-white rounded-full max-h-min" key={filterName}>
                  {filterValue}
                  <button
                    className="filter-remove"
                    onClick={() => handleFilterRemove(filterName)}
                  >
                    <IoIosClose />
                  </button>
                </div>
              ))}
            </div> 
        )}
    </>
  );
};

export default Jobfilter;