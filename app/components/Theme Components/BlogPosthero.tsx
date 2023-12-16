import React from 'react';
import Image from 'next/image';
import { FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';

interface BlogPostHeroProps {
  title: string;
  authorimage: string;
  authorname: string;
  postdate: string;
  category: string;
  featuredimage: string;
  slug: string;
}

const BlogPostHero: React.FC<BlogPostHeroProps> = ({ title, authorimage, authorname, postdate, category, featuredimage, slug}) => {
  return (
    <>
    <div className="flex justify-center items-end pt-16 lg:pt-0">
      <div style={{backgroundImage:`url("${featuredimage}")`}} className="relative flex flex-col justify-end gap-4 w-11/12 lg:w-8/12 min-h-[50vh] lg:min-h-[50vh] m-auto p-4 mt-4 bg-auto lg:bg-cover bg-center bg-no-repeat rounded-t-3xl">
               
        <div className='flex items-center gap-4 w-full z-10 text-white pt-8'>
          <Image src={authorimage} height={50} width={50} alt='author' className='rounded-full'/>
          <div className='flex items-center gap-1 lg:gap-4 h-full'>
            <div className='flex flex-col items-center gap-2 border-r border-neutral-300 pr-4'>
              <h4 className='text-xs lg:text-sm font-medium uppercase'>Author</h4>
              <p className='text-xs lg:text-sm'>{authorname}</p>
            </div>
            <div className='flex flex-col items-center gap-2 border-r border-neutral-300 pr-4'>
              <h4 className='text-xs lg:text-sm font-medium uppercase'>Posted</h4>
              <p  className='text-xs lg:text-sm'>{postdate}</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <h4 className='text-xs lg:text-sm font-medium uppercase'>Category</h4>
              <p className='text-xs lg:-text-sm rounded-full border border-white px-2 cursor-pointer hover:bg-white hover:text-black ease duration-200'><Link href={`/blogs?category=${category}`}>{category}</Link></p>
            </div>
          </div>
          
        </div> 

        <ul className="flex flex-wrap gap-2 w-full text-white z-10 uppercase text-xs underline pt-4">
          <li><Link href={`/`}>Home page</Link></li>
          <FiChevronRight className='text-[#00afaa]' />
          <li><Link href={`/blogs`}>Blog</Link></li>
          <FiChevronRight className='text-[#00afaa]' />
          <li>{title}</li>
        </ul>

        <div className='absolute w-full h-3/4 lg:h-1/2 bottom-0 right-0 bg-gradient-to-t from-[#312252] to-[#31225200]'></div>
        

      </div>
    </div>
    
    </>
  );
};

export default BlogPostHero;
