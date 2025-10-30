"use client";

import JobTile from "../jobtile";
import { useSuspenseQuery, gql } from "@apollo/client";
import { useSearchParams } from 'next/navigation';

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
        date
      }
    }
  }
}`;

interface Job {
  id: string;
  title: string;
  category: string;
  description: string;
  town: string;
  state: string;
  salarymin: number;
  salarymax: number;
  salaryfix: number;
  date: string[];
  url: string;
  type: string;
  contracttype: string;
}

function calculateDaysAgo(dateString: string): string {
  const postedDate = new Date(dateString);
  const currentDate = new Date();
  const timeDiff = currentDate.getTime() - postedDate.getTime();
  let daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

  // Ha 5 napnál régebbi, újra "0 days ago"-ként jelenik meg
  if (daysDiff > 5) {
    daysDiff = Math.floor(Math.random() * 3); // 0–2 nap között
  }

  return `${daysDiff} days ago`;
}

export default function JobList({regionQuery, categoryQuery, typeQuery, contracttypeQuery}: any) {
  const { data: joblistdata }: any = useSuspenseQuery(query2);

  const jobsData: Job[] = joblistdata.joblists.edges.map((edge: any) => {
    const job = edge.node.joblists;
    return {
      id: edge.node.id,
      title: edge.node.title,
      category: job.category.join(", "),
      description: job.shortDescription,
      town: "", // No town information in the new data
      state: job.location,
      salarymin: job.salary.from,
      salarymax: job.salary.to,
      salaryfix: job.salary.fix,
      date: calculateDaysAgo(edge.node.date), // No date information in the new data
      url: `/jobs/${edge.node.databaseId}`, // No URL information in the new data
      type: job.jobType.replace(" ", "").toLowerCase(),
      contracttype: job.contractType.toLowerCase()
    };
  });

  // Filter jobs based on URL parameters
  const filteredJobs = jobsData.filter(job => {
    return (!regionQuery || job.state.toLowerCase().includes(regionQuery.toLowerCase())) &&
           (!categoryQuery || job.category.toLowerCase().includes(categoryQuery.toLowerCase())) &&
           (!typeQuery || job.type.toLowerCase() === typeQuery.toLowerCase()) &&
           (!contracttypeQuery || job.contracttype.toLowerCase() === contracttypeQuery.toLowerCase());
  });

  return(
    <div className="flex flex-col w-11/12 lg:w-8/12 m-auto gap-8 py-8 lg:py-20">
      {filteredJobs.length === 0 ? (
        <p>No jobs matching the selected criteria. Try some other filters.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
          {filteredJobs.map((job: Job) => (
            <JobTile key={job.id} jobData={job} />
          ))}
        </div>
      )}
    </div>
  );
}
