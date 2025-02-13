{/*import { NextResponse, NextRequest } from 'next/server';
import { parseStringPromise } from 'xml2js';

export async function GET(request: Request) {

        const res = await fetch('https://post.talentvine.co.uk/feed?aggregator=client&clientID=2436');
        if (!res.ok) {
          throw new Error('Failed to fetch jobs');
        }
  
        const xmlData = await res.text();
        const jsonData = await parseStringPromise(xmlData);
  
        // Convert the parsed JSON data to a JavaScript object
        const jobsData = jsonData.source.job.map((job: any) => ({
            title: job.title[0],
            category: job.category[0].slice(","),
            url: job.url[0],
            description: job.description[0],
            salarymin: job.salarymin[0],
            salarymax: job.salarymax[0],
            date: job.date[0],
            town: job.town[0],
            state: job.state[0],
            jobtype: job.jobtype[0],
            contracttype: job.contracttype[0],
          }));
  
        return NextResponse.json({jobsData})
    }*/}