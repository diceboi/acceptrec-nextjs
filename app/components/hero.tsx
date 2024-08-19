"use client"

import GoogleReviewNumber from "./googlereviewnumber"

import HomeBanner from "./HomeBanner"
import {BiSearchAlt} from 'react-icons/bi'
import { FcGoogle } from 'react-icons/fc'
import { AiFillStar } from 'react-icons/ai'

import { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"

export default function Hero() {

    const [jobsData, setJobsData] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const getJobs = async () => {
        try {
            const response = await fetch('/api/jobfetch');
            if (!response.ok) {
            throw new Error('Failed to fetch jobs');
            }
            const { jobsData } = await response.json();
            setJobsData(jobsData);
        } catch (error) {
            console.error("Failed to fetch jobs");
        }
        }  
        getJobs();
    }, []);

    const handleFormSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Get the selected region and category values from the form elements
        const regionSelect = document.getElementById('job-region') as HTMLInputElement;
        const categorySelect = document.getElementById('job-category') as HTMLInputElement;

        // Check if the elements exist and have a value property
        if (regionSelect && categorySelect && regionSelect.value && categorySelect.value) {
            const selectedRegion = regionSelect.value;
            const selectedCategory = categorySelect.value;

            // Construct the query parameters for the URL
            const queryParams = `?region=${selectedRegion}&category=${selectedCategory}`;

            // Use the Next.js router to navigate to the new URL
            router.push(`/jobs${queryParams}`);
        }
    };

    const states = [...new Set(jobsData.flatMap((job: { state: any; }) => job.state).filter(Boolean))];
    const jobTypes = [...new Set(jobsData.flatMap((job: { jobtype: any; }) => job.jobtype).filter(Boolean))];
    const contractTypes = [...new Set(jobsData.flatMap((job: { contracttype: any; }) => job.contracttype).filter(Boolean))];
    const ids = jobsData.flatMap((job: { id: any; }) => job.id).filter(Boolean)

  const uniqueCategories = [
    ...new Set(
      jobsData
        .flatMap((job: { category: any; }) => job.category.split(',').map((category: string) => category.trim()))
        .filter(Boolean)
    )
  ];

    return(
        <>
            <section className="relative flex flex-col justify-center w-full overflow-hidden bg-gradient-to-br from-white to-neutral-200 lg:h-[60vh] lg:pt-0 pt-16">
                <HomeBanner className="w-11/12 lg:8/12" />
                <div id="jobsearch" className="flex flex-col justify-center w-10/12 lg:w-8/12 mx-auto p-4 lg:p-2 z-10">
                    <div id="hero-title" className="flex flex-col gap-4 lg:pt-32 w-full justify-center items-center ">
                    <div className="flex items-center justify-center gap-1 text-sm"><span className="flex gap-1 items-center"><AiFillStar className=" text-amber-400"/><b>4.8</b> stars by</span><b><GoogleReviewNumber/></b><span className="flex gap-1 items-center"> +<FcGoogle /> Google reviews</span></div>
                        <h1 className="hero-title text-6xl lg:text-8xl font-black tracking-tighter text-center p-2">Looking for work?</h1>
                        <div className="flex flex-col gap-2 justify-between items-center pb-8">
                            <p className="text-sm lg:text-lg font-medium tracking-widest uppercase text-center">find the best in your region</p>
                            {/*<GoogleReviewsWidget apiKey="AIzaSyDKNg9kVl8dYp43BWI7CE5VOGGl4ZhhBYs" placeId="ChIJFdvKHaJgd0gR6jNAd4xRYJk" />*/}
                            
                        </div>
                        
                    </div>
                    <div id="job-filter" className="flex gap-4 py-4 w-full justify-center items-center">
                        <form className="flex flex-col items-center max-w-5xl gap-8 mb-28" onSubmit={handleFormSubmit}>
                            <div className="flex flex-col justify-between lg:flex-row items-center lg:items-end gap-2">
                                <div className="grid w-full">
                                    <label className="text-sm text-center lg:text-left lg:text-md uppercase font-medium tracking-widest py-2">Region</label>
                                    <select id="job-region" className="p-4 shadow-special rounded-full hover:bg-neutral-50 cursor-pointer ">
                                        {
                                            states.map((state: any) => (
                                                <option key={state} value={state} className="font-bold">{state}</option>                       
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="grid w-full">
                                    <label htmlFor="job-category" className="text-sm text-center lg:text-left lg:text-md uppercase font-medium tracking-widest py-2">Category</label>
                                    <select id="job-category" className="p-4 shadow-special rounded-full  hover:bg-neutral-50 cursor-pointer">
                                        {
                                            uniqueCategories.map((category: any) => (
                                                <option key={category} value={category} className="font-bold">{category}</option>                       
                                            ))
                                        }                            
                                    </select>
                                </div>
                                <button type="submit" className="flex justify-between items-center button-85 w-full bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl shadow-lg text-white hover:shadow-[#00afa93b] lg:w-96 p-4 rounded-full transition-all">Find jobs<BiSearchAlt className="text-xl"/></button>                                
                            </div>
                                                      
                        </form>
                    </div>
                </div>
                
            </section>
            </>
    )
}