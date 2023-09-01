"use client"

interface BlogArchiveHero {
    title: string;
    subtitle: string;
    className: string;
  }

  const BlogArchiveHero: React.FC<BlogArchiveHero> = ({ title, subtitle, className}) => {
    return(
        <>
        
        <div className={className}>
            <div className="relative flex flex-col gap-4 w-11/12 lg:w-8/12 min-h-[30vh] m-auto ">
              <div className="flex flex-col justify-center items-center w-full gap-4 h-[30vh]">
                <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-center">{title}</h1>
                <h2 className="text-sm lg:text-md font-bold tracking-widest text-center uppercase">{subtitle}</h2>                
              </div>              
            </div>             
        </div>
        </>
    )
}

export default BlogArchiveHero;