"use client"

interface ShortlistedProps {
    title: string;
    subtitle: string;
    classname: string;
  }

  const ShortlistedHero: React.FC<ShortlistedProps> = ({ title, subtitle, classname}) => {
    return(
        <>
        
        <div className={classname}>
            <div className="relative flex flex-col justify-end gap-4 w-11/12 lg:w-8/12 min-h-[30vh] py-10 m-auto bg-[url('/shortlistedhero.webp')] bg-contain bg-bottom bg-no-repeat">
              <div className="flex flex-col gap-4 justify-center items-center min-h-[30vh] w-full">
                <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-center text-[#312252]">{title}</h1>
                <h2 className="lg:text-md text-center font-bold lg:w-1/2">{subtitle}</h2>
              </div>
            </div>             
        </div>
        </>
    )
}

export default ShortlistedHero;