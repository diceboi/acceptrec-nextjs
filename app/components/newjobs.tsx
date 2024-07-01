"use client"

import { FaFire } from "react-icons/fa";
import { HiArrowSmRight } from "react-icons/hi";
import Link from "next/link";
import JobTile from "./jobtile";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from "swiper/element/bundle";

register();

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/grid'

interface Job {
  id: string;
  title: string;
  category: string;
  description: string;
  town: string;
  state: string;
  salarymin: number;
  salarymax: number;
  salaryfix: number;
  date: string[];
  url: string;
}


interface NewJobsProps {
  jobs: Job[];
}

export default function NewJobs({ jobs }: NewJobsProps) {

  try {
    const latestJobs = jobs.slice(0, 6); // Get the latest 6 jobs

    return (
      <>
        <section className="flex flex-col justify-center items-center w-full">
          <div className="relative w-11/12 lg:w-8/12 h-fit -mt-[200px] z-40 bg-white rounded-3xl overflow-hidden px-8">
            <div className="flex justify-between items-center gap-2 py-4 my-2">
              <div className="flex items-center gap-2">
                <FaFire className="text-[#ff914d] w-6 h-6" />
                <h2 className="text-sm lg:text-lg font-medium tracking-widest uppercase">Latest Jobs</h2>
              </div>
              <Link href="/jobs"><button className="relative flex justify-between items-center w-full lg:w-auto py-2 px-4 font-bold rounded-full gap-4 hover:underline group transition-all z-20">More jobs<HiArrowSmRight className="absolute -right-2 group-hover:-right-4 transition-all" /></button></Link>
            </div>
            
              <Swiper 
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={40}
                breakpoints={{
                    768: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                    1280: {
                      slidesPerView: 3,
                  },
                    }}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')} 
                className='flex flex-nowrap gap-8 h-[450px] pb-20 mx-20'>
                {latestJobs.map((job: Job) => (
                  <SwiperSlide key={job.id}>
                  <JobTile jobData={job} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
        </section>
      </>
    );
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return (
      <>
        <h1>Error</h1>
      </>
    );
  }
}
