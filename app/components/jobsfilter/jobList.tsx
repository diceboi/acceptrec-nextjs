"use client"

import JobTile from "../jobtile";
import { useEffect, useState } from 'react'

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
    type: string;
    contracttype: string;
  }

export default function JobList({regionQuery, categoryQuery, typeQuery, contracttypeQuery}: any) {

    const [jobData, setJobData] = useState<Job[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      async function fetchData() {
        try {
          // Construct the API query based on the received URL parameters
          let apiQuery = `/api/filteredjobfetch`;
  
          // Append URL parameters to the query as needed
          if (regionQuery) {
            apiQuery += `?region=${regionQuery}`;
          }
  
          if (categoryQuery) {
            apiQuery += `${apiQuery.includes('?') ? '&' : '?'}category=${categoryQuery}`;
          }
  
          if (typeQuery) {
            apiQuery += `${apiQuery.includes('?') ? '&' : '?'}type=${typeQuery}`;
          }
  
          if (contracttypeQuery) {
            apiQuery += `${apiQuery.includes('?') ? '&' : '?'}contracttype=${contracttypeQuery}`;
          }
  
          const response = await fetch(apiQuery);
          if (!response.ok) {
            throw new Error('Failed to fetch jobs');
          }
          const data = await response.json();
          setJobData(data);
        } catch (error) {
          console.error('Failed to fetch jobs');
        } finally {
          setLoading(false); // Set loading to false after the fetch (whether it's successful or not)
        }
      }
  
      fetchData();
    }, [regionQuery, categoryQuery, typeQuery, contracttypeQuery]);

    return(
        <>
        <div className="flex flex-col w-11/12 lg:w-8/12 m-auto gap-8 py-20">
          {loading ? (
            <p>Loading...</p>
          ) : jobData.length === 0 ? (
            <p>No jobs matching the selected criteria. Try some other filters.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
              {jobData.map((job: Job) => (
                <JobTile key={job.id} jobData={job} />
              ))}
            </div>
          )}
        </div>
        </>
    )
}

