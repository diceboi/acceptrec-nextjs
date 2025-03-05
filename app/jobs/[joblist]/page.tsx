import JoblistForm from "@/app/components/JoblistForm";
import { getClient } from "@/app/lib/client"
import { gql } from "@apollo/client"

const query = gql`
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
          uniqueJobTitle
          responsible
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

export const revalidate = 5;

export default async function Joblist({ params }:any) {

  const { joblist } = params

  const { data: joblistdata }:any = await getClient().query({query});

  const jobs = joblistdata?.joblists?.edges || {};

  const jobId = Number(joblist); // Convert joblist param to a number
  const foundJobs = jobs.find((job: { node: { databaseId: number } }) => job.node.databaseId === jobId);

  return (
    <section className="w-full py-20 lg:px-0 px-2">
      <div className="lg:w-6/12 mx-auto px-8 py-10 shadow-special rounded-3xl">
        <div className=" border-b pb-10 border-neutral-300">
          <h1 className=" font-black text-5xl text-[#312252]">{foundJobs.node.title}</h1>
        </div>
        <div className="flex flex-col gap-4 border-b py-10 border-neutral-300">
          <div className="flex flex-wrap gap-2 py-2 w-full">
            {foundJobs.node.joblists.category.map((category:any, index:any) => (
              <h4 key={index} className="flex-none px-2 py-1 text-sm lg:text-md bg-[#00afaa] text-white rounded-3xl">
                {category}
              </h4>
            ))}
          </div>
          <div className="flex flex-row gap-4">
          <p>Location: </p>
          <p className=" font-black text-md text-[#312252]">{foundJobs.node.joblists.location}</p>
          </div>
          <div className="flex flex-row gap-4">
          <p>Job type: </p>
          <p className=" font-black text-md text-[#312252]">{foundJobs.node.joblists.jobType}</p>
          </div>
          <div className="flex flex-row gap-4">
          <p>Contract type: </p>
          <p className=" font-black text-md text-[#312252]">{foundJobs.node.joblists.contractType}</p>
          </div>  
        </div>
        <div className="py-4">
          <p className="text-lg font-bold">{foundJobs.node.joblists.shortDescription}</p>
        </div>
        {foundJobs.node.joblists.requiredSkills && (
        <div className="py-4 ">
          <h2 className="font-black text-2xl">Required:</h2>
          <div className="py-4 text-lg font-medium joblist marker:text-[#00afaa]" dangerouslySetInnerHTML={{ __html:foundJobs.node.joblists.requiredSkills }}></div>
        </div>
        )}
        {foundJobs.node.joblists.dailyDuties && (
        <div className="py-4 ">
          <h2 className="font-black text-2xl">Daily duties:</h2>
          <div className="py-4 text-lg font-medium joblist marker:text-[#00afaa]" dangerouslySetInnerHTML={{ __html:foundJobs.node.joblists.dailyDuties }}></div>
        </div>
        )}
        {foundJobs.node.joblists.benefits && (
        <div className="py-4 ">
          <h2 className="font-black text-2xl">Benefits:</h2>
          <div className="py-4 text-lg font-medium joblist marker:text-[#00afaa]" dangerouslySetInnerHTML={{ __html:foundJobs.node.joblists.benefits }}></div>
        </div>
        )}
        {foundJobs.node.joblists.shift && (
        <div className="py-4 ">
          <h2 className="font-black text-2xl">Shift:</h2>
          <div className="py-4 text-lg font-medium joblist marker:text-[#00afaa]" dangerouslySetInnerHTML={{ __html:foundJobs.node.joblists.shift }}></div>
        </div>
        )}
        {foundJobs.node.joblists.salary && (
        <div className="py-4 ">
          <h2 className="font-black text-2xl">Salary:</h2>
          <div className="flex flex-nowrap items-center gap-2 py-4">
            {foundJobs.node.joblists.salary.from && (
              <>
              <p className="text-lg font-light">Approx.</p>
              {foundJobs.node.joblists.salary.from &&(
              <p className="text-lg font-bold">£ {foundJobs.node.joblists.salary.from} {foundJobs.node.joblists.contractType === 'Permanent'? '/annum':'/hour'}</p>
              )}
              {foundJobs.node.joblists.salary.to && (
              <>
              <p className="text-lg font-bold"> - </p>
              <p className="text-lg font-bold">£ {foundJobs.node.joblists.salary.to} {foundJobs.node.joblists.contractType === 'Permanent'? '/annum':'/hour'}</p>
              </>
              )}
              </>
            )}
            {foundJobs.node.joblists.salary.fix && (
              <>
              <p className="text-lg font-light">Fixed</p>
              <p className="text-lg font-bold">£ {foundJobs.node.joblists.salary.fix} {foundJobs.node.joblists.contractType === 'Permanent' ? '/annum':'/hour'}</p>
              </>
            )}

          </div>
          
        </div>
        )}
        <div className="py-4 text-lg" dangerouslySetInnerHTML={{ __html:foundJobs.node.joblists.longDescription }}></div>
        <div className="flex flex-col gap-8 py-4">
          <h2 className="font-black text-4xl text-center">Apply for this work</h2>
          <JoblistForm workname={foundJobs.node.title} uniquetitle={foundJobs.node.joblists.uniqueJobTitle} responsible={foundJobs.node.joblists.responsible}/>
        </div>
        
      </div>
      

    </section>
  )
}
