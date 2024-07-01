"use client";

import Jobfilter from "../components/jobsfilter/jobFilter";
import JobList from "../components/jobsfilter/jobList";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from "react";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/client";
import JobsHero from "../components/Theme Components/JobsHero";

const query1 = gql`
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

const query2 = gql`
query getJoblist {
  joblists(first: 1000, where: {orderby: {field: MENU_ORDER, order: ASC}}) {
    edges {
      node {
        id
        joblists {
          shortDescription
          longDescription
          requiredSkills
          dailyDuties
          benefits
          shift
          location
          category
          jobType
          contractType
          salary {
            fix
            from
            to
          }
        }
        title
        slug
        seo {
          metaDesc
          title
        }
        databaseId
      }
    }
  }
}`

export default function Jobs() {
  const { data: jobspagedata }: any = useSuspenseQuery(query1);
  const { data: joblistdata }: any = useSuspenseQuery(query2);
  const jobs = jobspagedata?.page?.jobs || {};

  // Transform the joblistdata to match the expected format
  const transformedJobsData = joblistdata.joblists.edges.map((edge: any) => {
    const job = edge.node.joblists;
    return {
      category: job.category.join(", "),
      contracttype: job.contractType.toLowerCase(),
      date: "", // No date information in the new data
      description: job.longDescription,
      jobtype: job.jobType.replace(" ", "").toLowerCase(),
      salarymax: job.salary.to ? job.salary.to.toString() : null,
      salarymin: job.salary.from ? job.salary.from.toString() : null,
      salaryfix: job.salary.fix ? job.salary.fix.toString() : null,
      state: job.location,
      title: edge.node.title,
      town: "", // No town information in the new data
      url: "", // No URL information in the new data
    };
  });

  const uniqueCategories = [
    ...new Set(
      transformedJobsData
        .flatMap((job: { category: any }) => job.category.split(',').map((category: string) => category.trim()))
        .filter(Boolean)
    ),
  ];
  const states = [...new Set(transformedJobsData.flatMap((job: { state: any }) => job.state).filter(Boolean))];
  const jobTypes = [...new Set(transformedJobsData.flatMap((job: { jobtype: any }) => job.jobtype).filter(Boolean))];
  const contractTypes = [...new Set(transformedJobsData.flatMap((job: { contracttype: any }) => job.contracttype).filter(Boolean))];

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
          jobsData={transformedJobsData}
        />
      </Suspense>
    </>
  );
}

function JobContentSection({ uniqueCategories, states, jobTypes, contractTypes, jobsData }: any) {
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
