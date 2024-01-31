import { gql } from "@apollo/client"
import { getClient } from "../../lib/client"
import Link from "next/link"
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi"
import TeamMemberTile from "../TeamMemberTile"

const query = gql`
query getTeams  {
  teams(first:100, where: {orderby: {field: MENU_ORDER, order: ASC}}) {
    edges {
      node {
        team {
          emailAdress
          introduction
          nickname
          position
          profilepicture {
            sourceUrl
          }
        }
        slug
        title
      }
    }
  }
}
`

export default async function Team({teamSmallTitle, teamMainTitle, teamCtaButtonText, teamText}:any) {

    const { data: teamData }:any = await getClient().query({query})

    const teamMembers = teamData?.teams?.edges;
    
    return(
        <>
        <section className="w-full py-20">
            <div className='flex flex-col gap-8 w-11/12 lg:w-8/12 m-auto'>
                <div className='flex flex-col gap-4 w-11/12 lg:w-8/12 justify-start py-16'>
                    <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                        {teamSmallTitle}
                    </h3>
                    <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]'>
                        {teamMainTitle}
                    </h2>
                    <p className="text-lg">
                        {teamText}  
                    </p>                   
                </div>                
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-3 lg:grid-rows-2 grid-cols-2 w-11/12 lg:w-8/12 m-auto rounded-3xl overflow-hidden'>

            {teamMembers.map(({ node }: any, index: number) => (
                <TeamMemberTile
                    key={index}
                    slug={node.slug}
                    profilepicture={node.team.profilepicture?.sourceUrl}
                    name={node.title}
                    position={node.team.position}
                />
            ))}

                <Link href="/join-our-team" className="recruitment-tile lg:h-[450px] h-[250px] group flex flex-col cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/join-our-team.webp')] bg-cover bg-center bg-opacity-40 h-full  p-4 ease-out duration-200">
                    </div>                    
                </Link>
                
            </div>
            <Link href="/about-us/team" className={`${teamCtaButtonText === null ? 'hidden' : 'flex'} justify-center w-fit m-auto py-16`}>
                <button  
                        className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white hover:shadow-[#00afa93b] hover:w-fit p-3 rounded-full transition-all duration-200 gap-2"
                        >
                        {teamCtaButtonText}
                        <FiArrowUpRight className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                        />
                </button>
            </Link>
        </section>
        </>
    )
}