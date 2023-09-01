import JobsHero from "../components/Theme Components/JobsHero";
import Jobfilter from "../components/jobsfilter/jobFilter";
import JobList from "../components/jobsfilter/jobList";

import { parseStringPromise } from "xml2js";

interface Job {
  state?: string[];
  category?: string[];
  jobtype?: string[];
  contracttype?: string[];
  id?: string[];
}

const getJobs = async () => {
  try {
    const res = await fetch('https://post.talentvine.co.uk/feed?aggregator=client&clientID=2436', {
      next: { revalidate: 360 },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch jobs');
    }

    const xmlData = await res.text();
    const jsonData = await parseStringPromise(xmlData);

    const jobFilterData = jsonData.source.job.map((job: Job) => {
      const state = job.state ? job.state[0] : "";
      const categoryString = job.category ? job.category[0] : "";
      const categories = categoryString.split(',');
      const jobtype = job.jobtype ? job.jobtype[0] : "";
      const contracttype = job.contracttype ? job.contracttype[0] : "";
      const id = job.id ? job.id[0] : "";

      return {
        state,
        categories,
        jobtype,
        contracttype,
        id,
      };
    });

    const allCategories = jobFilterData
      .flatMap((job: { categories: unknown }) =>
        Array.isArray(job.categories) ? job.categories : []
      )
      .filter((category: any) => typeof category === "string") as string[];
    const uniqueCategories = [...new Set(allCategories)];
    const states = jobFilterData
      .map((job: { state: unknown }) => job.state)
      .filter((state: any) => typeof state === "string") as string[];
    const jobTypes = jobFilterData
      .map((job: { jobtype: unknown }) => job.jobtype)
      .filter((jobtype: any) => typeof jobtype === "string") as string[];
    const contractTypes = jobFilterData
      .map((job: { contracttype: unknown }) => job.contracttype)
      .filter((contracttype: any) => typeof contracttype === "string") as string[];
    const ids = jobFilterData
      .map((job: { id: unknown }) => job.id)
      .filter((id: any) => typeof id === "string") as string[];

    return {
      jobFilterData,
      uniqueCategories,
      states,
      jobTypes,
      contractTypes,
      ids,
    };
  } catch (error: unknown) {
    throw new Error(`Failed to fetch jobs: ${(error as Error).message}`);
  }
};

export default async function Jobs() {

    const {
      uniqueCategories,
      states,
      jobTypes,
      contractTypes,
      ids,
    } = await getJobs();

    return(
        <>
        <JobsHero title={"Jobs"} subtitle={"Find the job that's most suitable for you"} classname={"bg-gradient-to-br from-white to-[#00afa917] pb-10"}/>
        <Jobfilter
          uniqueCategories={uniqueCategories}
          states={states}
          jobTypes={jobTypes}
          contractTypes={contractTypes}
        />
        <JobList />
        </>
    )
};

