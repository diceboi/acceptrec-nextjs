"use client"

interface OfficeHeroProps {
    title: string;
    subtitle: string;
    bgimage: string,
  }

  const OfficeHero: React.FC<OfficeHeroProps> = ({ title, subtitle, bgimage }) => {
    return(
        <>
            <section style={{backgroundImage: `url("${bgimage}"`}} className="relative pb-10 bg-cover bg-center bg-no-repeat pt-16 lg:pt-0">
                <div className='absolute top-0 right-0 w-full h-full bg-[#312252] opacity-75'></div>
                <div className="relative flex flex-col justify-between gap-4 w-11/12 lg:w-8/12 h-[30vh] m-auto ">
                    <div className="flex flex-col gap-4 justify-center w-full h-full text-white">
                    <h2 className="text-sm lg:text-lg font-medium tracking-widest uppercase text-center">{subtitle}</h2>
                    <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-center">{title}</h1>
                    </div>
                </div>             
            </section>
        </>
    )
}

export default OfficeHero;