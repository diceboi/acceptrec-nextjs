"use client";

import Jobfilter from "../components/jobsfilter/jobFilter";
import JobList from "../components/jobsfilter/jobList";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from "react";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/client";
import JobsHero from "../components/Theme Components/JobsHero";

const query = gql`
  query getHomePage {
    page(id: "1389", idType: DATABASE_ID) {
      title
      seo {
        metaDesc
        focuskw
        title
      }
      jobs {
        jobsSmallTitle
        jobsMainTitle
        jobsBackgroundImage {
          sourceUrl
          altText
        }
      }
    }
  }
`;

export default function Jobs() {
  const { data: jobspagedata }: any = useSuspenseQuery(query);
  const jobs = jobspagedata?.page?.jobs || {};

  const [jobsData, setJobsData] = useState([]);

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
    };
    getJobs();
  }, []);

  const uniqueCategories = [
    ...new Set(
      jobsData
        .flatMap((job: { category: any }) => job.category.split(',').map((category: string) => category.trim()))
        .filter(Boolean)
    ),
  ];
  const states = [...new Set(jobsData.flatMap((job: { state: any }) => job.state).filter(Boolean))];
  const jobTypes = [...new Set(jobsData.flatMap((job: { jobtype: any }) => job.jobtype).filter(Boolean))];
  const contractTypes = [...new Set(jobsData.flatMap((job: { contracttype: any }) => job.contracttype).filter(Boolean))];

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <JobsHero
          MainTitle={jobs.jobsMainTitle}
          SmallTitle={jobs.jobsSmallTitle}
          BackgroundImage={jobs.jobsBackgroundImage?.sourceUrl}
          BackgroundImageAltText={jobs.jobsBackgroundImage?.altText}
        />
        <JobContentSection
          uniqueCategories={uniqueCategories}
          states={states}
          jobTypes={jobTypes}
          contractTypes={contractTypes}
          jobsData={jobsData}
        />
      </Suspense>
    </>
  );
}

function JobContentSection({ uniqueCategories, states, jobTypes, contractTypes, jobsData }:any) {
  const searchParams = useSearchParams();

  const regionQuery = searchParams.get('region');
  const categoryQuery = searchParams.get('category');
  const typeQuery = searchParams.get('type');
  const contracttypeQuery = searchParams.get('contracttype');

  return (
    <>
      <Jobfilter
        uniqueCategories={uniqueCategories}
        states={states}
        jobTypes={jobTypes}
        contractTypes={contractTypes}
        jobsData={jobsData}
      />
      <JobList
        regionQuery={regionQuery}
        categoryQuery={categoryQuery}
        typeQuery={typeQuery}
        contracttypeQuery={contracttypeQuery}
      />
    </>
  );
}