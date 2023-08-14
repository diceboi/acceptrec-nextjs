import { parseStringPromise } from "xml2js";

export default async function getJobs() {
  try {
    const response = await fetch('https://post.talentvine.co.uk/feed?aggregator=client&clientID=2436');

    if (!response.ok) {
      throw new Error('Failed to fetch jobs');
    }

    const xmlData = await response.text();
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

    return jobsData; // Return the array of job objects
  } catch (error: unknown) { // Specify the type of the error
    throw new Error(`Failed to fetch jobs: ${(error as Error).message}`);
  }
}
