"use client"

interface TeamHeroProps {
    title: string;
    subtitle: string;
    classname: string;
  }

  const TeamHero: React.FC<TeamHeroProps> = ({ title, subtitle, classname}) => {
    return(
        <>
        
        <div className={classname}>
            <div className="relative flex flex-col justify-end gap-4 w-11/12 lg:w-8/12 min-h-[30vh] m-auto bg-[url('/teamheader.webp')] bg-contain bg-bottom bg-no-repeat">
              <div className="flex flex-col gap-4 justify-center items-center min-h-[30vh] w-full">
                <h1 className="text-6xl lg:text-8xl font-black tracking-tighter  text-[#312252]">{title}</h1>
                <h2 className="text-sm lg:text-md font-bold tracking-widest text-center uppercase">{subtitle}</h2>
              </div>
            </div>             
        </div>
        </>
    )
}

export default TeamHero;