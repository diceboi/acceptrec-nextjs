interface ShortlistedCandidateTileProps {
    name: string;
    description: string;
    location: string;
    achievements: string;
    skills: string;
    salary: string;
  }

const ShortlistedCandidateTile: React.FC<ShortlistedCandidateTileProps> = ({ name, description, location, achievements, skills, salary}) => {
  return (
    <>
        <div className='flex flex-col justify-between gap-4 p-4 lg:min-h-[50vh] rounded-3xl shadow-special bg-white'>
            <div className='relative flex flex-col p-4 gap-8 border-b pb-8 border-blackborder-opacity-10 h-1/2'>
                <h2 className='text-6xl lg:text-8xl font-black tracking-tighter text-[#00afaa]'>{name}</h2>
                <p className='lg:text-xl font-bold'>{description}</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-4 p-4 h-fit'>
                <div className='p-2'>
                    <h4 className='lg:text-lg font-bold'>Location:</h4>
                    <p className='text-sm'>{location}</p>
                </div>
                <div className='p-2'>
                    <h4 className='lg:text-lg font-bold'>Achievements:</h4>
                    <p className='text-sm'>{achievements}</p>
                </div>
                <div className='p-2'>
                    <h4 className='lg:text-lg font-bold'>Skills:</h4>
                    <p className='text-sm'>{skills}</p>
                </div>
                <div className='p-2'>
                    <h4 className='lg:text-lg font-bold'>Salary expectation:</h4>
                    <p className='text-sm'>{salary}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ShortlistedCandidateTile;
