import { parseStringPromise } from "xml2js";
import JobTile from "../jobtile";

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

  const getJobs = async () => {
    try {
      const res = await fetch('https://post.talentvine.co.uk/feed?aggregator=client&clientID=2436', {
        next: {revalidate: 360},
      });
  
      if (!res.ok) {
        throw new Error('Failed to fetch jobs');
      }
  
      const xmlData = await res.text();
      const jsonData = await parseStringPromise(xmlData);
  
      // Convert properties to strings before returning
      const jobsData = jsonData.source.job.map((job: { title: any[]; category: any[]; url: any[]; description: any[]; salarymin: any[]; salarymax: any[]; }) => {
        return {
          ...job,
          title: job.title[0],
          category: job.category[0],
          url: job.url[0],
          description: job.description[0],
          salarymin: job.salarymin[0],
          salarymax: job.salarymax[0],
        };
      });
  
      return jobsData;
    } catch (error: unknown) {
      throw new Error(`Failed to fetch jobs: ${(error as Error).message}`);
    }
  }

const JobList = async () => {

    const jobData = await getJobs();

    return(
        <>
        <div className="flex flex-col w-11/12 lg:w-8/12 m-auto gap-8 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
                {
                    jobData.map((job: Job) => (
                        <JobTile key={job.id[0]} jobData={job} />                       
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default JobList;

