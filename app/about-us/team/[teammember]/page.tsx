import ContactTeam from "@/app/components/ContactTeam"
import TeamInside from "@/app/components/TeamInside"
import Team from "@/app/components/Theme Components/Team"
import { gql } from "@apollo/client"
import  { getClient } from "@/app/lib/client"
import Image from "next/image"

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

export default async function Teammember({params}:any) {

    const { teammember } = params;

    const { data: teammemberData }:any = await getClient().query({query})

    const members = teammemberData?.teams?.edges || {};

    const foundTeamMember = members.find((member: { node: { slug: string | string[] } }) => member.node.slug === teammember);

    const emailAddress = foundTeamMember.node.team.emailAdress;
    const inttroduction = foundTeamMember.node.team.introduction;

    console.log (emailAddress.split('@')[0])
    
    return(
        <>
        <section className="w-full lg:pt-16 pb-20">
            <div className="flex flex-col lg:flex-row w-11/12 lg:w-8/12 pt-16 m-auto">
                <div className='flex flex-col gap-4 w-11/12 lg:w-1/2'>
                    <div className='flex flex-col gap-4 w-11/12 lg:w-8/12 justify-start '>
                        <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]'>
                            {foundTeamMember.node.title}
                        </h2>
                        <p>
                            {foundTeamMember.node.team.position}
                        </p>
                    </div>
                    <Image src={foundTeamMember.node.team.profilepicture.sourceUrl} width={1000} height={800} alt={foundTeamMember.node.team.profilepicture.altText} className="w-full h-auto"/>
                        <div
                            className="flex flex-col gap-2 py-16"
                            dangerouslySetInnerHTML={{ __html: inttroduction  }}
                        />         
                </div>
                <div className="flex flex-col w-11/12 lg:w-1/2 lg:p-16 gap-8 pt-28">
                    <h2 className="text-4xl font-black tracking-tighter text-[#312252]">Contact {foundTeamMember.node.team.nickname} directly</h2>
                    <ContactTeam contactname={emailAddress.split('@')[0]} />
                </div>
            </div>
            <Team teamSmallTitle={''} teamMainTitle={'Awesome team members'} teamCtaButtonText={null} teamText={''}/>
        </section>
        </>
    )
}