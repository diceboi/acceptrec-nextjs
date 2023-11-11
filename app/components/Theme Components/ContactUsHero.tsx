"use client"

interface ContactUsHero {
    title: string;
    subtitle: string;
    classname: string;
  }

  const ContactUsHero: React.FC<ContactUsHero> = ({ title, subtitle, classname}) => {
    return(
        <>
        
        <div className={classname}>
            <div className="relative flex flex-col justify-end gap-4 w-11/12 lg:w-8/12 min-h-[30vh] m-auto bg-[url('/contactheader.webp')] bg-contain bg-bottom bg-no-repeat">
              <div className="flex flex-col gap-4 justify-center items-center min-h-[30vh] w-full">
                <h1 className="text-6xl lg:text-8xl font-black text-[#312252] tracking-tighter">{title}</h1>
                <h2 className="text-sm lg:text-md lg:w-1/2 font-bold tracking-widest text-center uppercase">{subtitle}</h2>
              </div>
            </div>             
        </div>
        </>
    )
}

export default ContactUsHero;