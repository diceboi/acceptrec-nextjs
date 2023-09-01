import { NextResponse } from "next/server";
import { parseStringPromise } from "xml2js";

interface JobData {
  state: string;
  category?: string;
  jobtype: string;
  contracttype: string;
  id: string;
}

export async function GET() {
        try {
        const res = await fetch('https://post.talentvine.co.uk/feed?aggregator=client&clientID=2436', {
          next: {revalidate: 360},
        });
    
        if (!res.ok) {
          throw new Error('Failed to fetch jobs');
        }
    
        const xmlData = await res.text();
        const jsonData = await parseStringPromise(xmlData);
    
        const jobFilterData: JobData[] = jsonData.source.job.map((job: JobData) => {
          const state = job.state || "";
          const categoryString = job.category || "";
          const categories = categoryString.split(',');
          const jobtype = job.jobtype || "";
          const contracttype = job.contracttype || "";
          const id = job.id || "";
        
          return {
            state,
            categories,
            jobtype,
            contracttype,
            id,
          };
        });
    
        const allCategories = jobFilterData
          .flatMap((job: JobData) => job.category)
          .filter(Boolean); // Remove empty categories
        const uniqueCategories = [...new Set(allCategories)];
        const states = [...new Set(jobFilterData.map(job => job.state))];
        const jobTypes = [...new Set(jobFilterData.map(job => job.jobtype))];
        const contractTypes = [...new Set(jobFilterData.map(job => job.contracttype))];
        const ids = jobFilterData.map((job: { id: any; }) => job.id);

    
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
    }