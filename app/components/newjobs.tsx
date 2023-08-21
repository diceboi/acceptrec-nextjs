import React, { useEffect, useState } from "react";
import { FaFire } from "react-icons/fa";
import { HiArrowSmRight } from "react-icons/hi";
import Link from "next/link";
import JobTile from "./jobtile";
import getJobs from "../api/getJobs"; 

interface Job {
  id: string;
  title: string;
  category: string;
  description: string;
  town: string;
  state: string;
  salarymin: number;
  date: string[];
  url: string;
}

export default async function NewJobs() {
  try {
    const jobs = await getJobs();
    const latestJobs = jobs.slice(0, 6); // Get the latest 6 jobs

    return (
      <>
        <section className="flex flex-col justify-center items-center w-full">
          <div className="relative w-10/12 lg:w-8/12 h-fit -mt-[200px] z-40 bg-white rounded-3xl overflow-hidden px-8">
            <div className="flex justify-between items-center gap-2 py-4 my-2">
              <div className="flex items-center gap-2">
                <FaFire className="text-[#ff914d] w-6 h-6" />
                <h2 className="text-sm lg:text-lg font-medium tracking-widest uppercase">Latest Jobs</h2>
              </div>
              <Link href="/jobs"><button className="relative flex justify-between items-center w-full lg:w-auto py-2 px-4 font-bold rounded-full gap-4 hover:underline group transition-all z-20">More jobs<HiArrowSmRight className="absolute -right-2 group-hover:-right-4 transition-all" /></button></Link>
            </div>
            <div className="absolute h-[380px] w-[200px] top-0 right-8 bg-gradient-to-r from-[#ffffff00] to-[#fff] z-10"></div>
            <div className="overflow-x-scroll">
              <div className="flex flex-nowrap gap-8 w-max h-fit pb-8">
                {latestJobs.map((job: Job) => (
                  <JobTile key={job.id} jobData={job} /> // Use job.id as the key
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return (
      <>
        <h1>Error</h1>
      </>
    );
  }
}
