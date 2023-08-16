import React from 'react';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

interface BlogHeroProps {
  title: string;
  subtitle: string;
  authorimage: string;
  authorname: string;
  postdate: string;
  category: string;
}

const BlogHero: React.FC<BlogHeroProps> = ({ title, subtitle, authorimage, authorname, postdate, category}) => {
  return (
    <>
    <div className="flex h-[60vh] mt-6">
      <div className="relative flex flex-col justify-end gap-4 w-11/12 lg:w-8/12 m-auto h-full p-8 bg-[url('/truck-driver.avif')] bg-cover bg-center rounded-t-3xl">
        <p className="text-sm lg:text-lg font-medium text-white tracking-widest uppercase z-10">{subtitle}</p>
        <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tighter z-10">{title}</h1>
        
        <div className='flex items-center gap-4 w-full z-10 text-white pt-8'>
          <Image src={authorimage} height={50} width={50} alt='author' className='rounded-full'/>
          <div className='flex items-center gap-4 h-full'>
            <div className='flex flex-col items-center gap-2 border-r border-neutral-300 pr-4'>
              <h4 className='text-sm font-mediumtracking-widest uppercase'>Author</h4>
              <p>{authorname}</p>
            </div>
            <div className='flex flex-col items-center gap-2 border-r border-neutral-300 pr-4'>
              <h4 className='text-sm font-mediumtracking-widest uppercase'>Posted</h4>
              <p>{postdate}</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <h4 className='text-sm font-mediumtracking-widest uppercase'>Category</h4>
              <p className='rounded-full border border-white px-2 cursor-pointer hover:bg-white hover:text-black ease duration-200'>{category}</p>
            </div>
          </div>
        </div>

        <div className='absolute w-full h-full top-0 right-0 bg-gradient-to-t from-[#312252] to-[#31225200]'></div>

      </div>
    </div>
    <div className='flex lg:flex-row flex-col lg:gap-20 w-full lg:w-8/12 m-auto'>
      <article className='flex flex-col gap-20 w-full lg:w-2/3 px-8 lg:px-4 py-20'>
        <h3 className='leading-8 text-bold text-2xl'>
        Employee strengths are a topic discussed in almost every job interview. If we don't prepare ourselves properly, we can become unconvincing in the eyes of the recruiter, and improvising, in this case, may turn out to be a bad idea. Due to the fact that one of the most frequently asked questions during the recruitment process is: What are your strengths? It is worth considering, how to find your strengths and present them on your job interview. 
        </h3>
        <div>
          <p className='leading-8 text-xl'>
          How to find your strengths?
Quite often, especially when our self-confidence is not where we would like it to be, we believe that we actually don't have strengths to talk about and responding to the interviewer with such attitude could disqualify us immediately. Everyone has positive traits that allow us to be recognised amongst other candidates. Let's analyse them in a bit more details.

Perhaps you hear a question "How can I help myself?" at the back of your head. Good. There are a few things you can do to boost your confidence. For example, browsing job advertisements in the profession of interest. Having read two or three adverts, you will be able to see what employers expect from potential candidates. Perhaps, this might be the way you realise that the desired strengths of the employee mentioned in the advertisement are in fact your strengths. Let's also think about what you are good at, what distinguishes you and what you are proud of.

How to present your strengths?
If we are asked to present our strengths, speaking confidently will increase our credibility. We certainly should let go of learning a short speech and reciting. The recruiter must feel that the mentioned strengths of the employee translate into reality. By the same token, lying or shooting is also not an option - besides, it's really easy to verify.

Remember not to go to extremes. Let's choose 2, top 3 strengths and focus only on them. Of course, it's best if we match them to the offer as much as possible. An hour-long story about our 30 strengths is certainly not going to be well received, but on the other hand, a 2-minute memory of one strength isn't the best idea either. To lend credence to your merits, try to add an example to each one that shows that everything you say happened. Do not belittle your achievements, but also do not exalt yourself. A golden mean must be found by listing the strengths of the employee.

Employee strengths - examples
If the employee's strengths are still remote for each topic and you have no idea what you can talk about during an interview, we present a list of examples of advantages.
          </p>
        </div>
      </article>
      <div className='flex lg:w-1/3 w-11/12 m-auto flex-col gap-8 pt-20'>
        <h3 className='text-sm lg:text-lg font-mediumtracking-widest uppercase border-b border-black'>
          Recent posts
        </h3>
        <div className='group flex flex-col gap-2 w-full min-h-48 border-b border-neutral-300 hover:cursor-pointer'>
          <div className='w-full h-48 rounded-3xl bg-[url("/truck-driver.avif")] bg-cover bg-center'/>
          <div className='relative'>
            <h4 className='leading-8 text-bold text-xl p-2 w-2/3'>Recent blog post title svsdv sv s sd sddssvsdv</h4>
            <FiArrowRight className='absolute right-8 bottom-3 recruitment-icon w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
          </div>
        </div>

        <div className='group flex flex-col gap-2 w-full min-h-48 border-b border-neutral-300 hover:cursor-pointer'>
          <div className='w-full h-48 rounded-3xl bg-[url("/truck-driver.avif")] bg-cover bg-center'/>
          <div className='relative'>
            <h4 className='leading-8 text-bold text-xl p-2 w-2/3'>Recent blog post title svsdv sv s sd sddssvsdv</h4>
            <FiArrowRight className='absolute right-8 bottom-3 recruitment-icon w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
          </div>
        </div>
        <div className='group flex flex-col gap-2 w-full min-h-48 border-b border-neutral-300 hover:cursor-pointer'>
          <div className='w-full h-48 rounded-3xl bg-[url("/truck-driver.avif")] bg-cover bg-center'/>
          <div className='relative'>
            <h4 className='leading-8 text-bold text-xl p-2 w-2/3'>Recent blog post title svsdv sv s sd sddssvsdv</h4>
            <FiArrowRight className='absolute right-8 bottom-3 recruitment-icon w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
          </div>
        </div>
        <div className='group flex flex-col gap-2 w-full min-h-48 border-b border-neutral-300 hover:cursor-pointer'>
          <div className='w-full h-48 rounded-3xl bg-[url("/truck-driver.avif")] bg-cover bg-center'/>
          <div className='relative'>
            <h4 className='leading-8 text-bold text-xl p-2 w-2/3'>Recent blog post title svsdv sv s sd sddssvsdv</h4>
            <FiArrowRight className='absolute right-8 bottom-3 recruitment-icon w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default BlogHero;
