import { NextResponse, NextRequest } from 'next/server';
import { parseStringPromise } from 'xml2js';

async function fetchJobs() {

        const response = await fetch('https://post.talentvine.co.uk/feed?aggregator=client&clientID=2436', { next: { revalidate: 360 } });
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
  
        const xmlData = await response.text();
        const jsonData = await parseStringPromise(xmlData);
  
        // Convert the parsed JSON data to a JavaScript object
        const jobsData = jsonData.source.job.map((job: any) => ({
            title: job.title[0],
            category: job.category[0],
            url: job.url[0],
            description: job.description[0],
            salarymin: job.salarymin[0],
            salarymax: job.salarymax[0],
            date: job.date[0],
            town: job.town[0],
            state: job.state[0],
            jobtype: job.jobtype[0],
            contracttype: job.contracttype[0]
          }));

          return jobsData;
    } 

    export async function GET(request: Request) {

      const jobsData = await fetchJobs();
      const url = new URL(request.url)
      const region = url.searchParams.get('region')
      const category = url.searchParams.get('category')
      const type = url.searchParams.get('type')
      const contracttype = url.searchParams.get('contracttype')

      const filteredJobsData = jobsData.filter((job: any) => {
        return (
          (!region || job.state === region) &&
          (!category || job.category.includes(category)) &&
          (!type || job.jobtype === type) &&
          (!contracttype || job.contracttype === contracttype)
        );
      });

      return NextResponse.json(filteredJobsData);

    }