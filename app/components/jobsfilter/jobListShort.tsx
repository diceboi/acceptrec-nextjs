"use client";

import JobTile from "../jobtile";
import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Job {
  id: string;
  title: string;
  category: string;
  description: string;
  town: string;
  state: string;
  salarymin: number;
  date: string[];
  url: string;
  type: string;
  contracttype: string;
}

export default function JobListShort({
  regionQuery,
  categoryQuery,
  typeQuery,
  contracttypeQuery,
}: any) {

  const [jobData, setJobData] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Construct the API query based on the received URL parameters
        let apiQuery = `/api/filteredjobfetch`;

        // Append URL parameters to the query as needed
        if (regionQuery) {
          apiQuery += `?region=${regionQuery}`;
        }

        if (categoryQuery) {
          apiQuery += `${
            apiQuery.includes("?") ? "&" : "?"
          }category=${categoryQuery}`;
        }

        if (typeQuery) {
          apiQuery += `${apiQuery.includes("?") ? "&" : "?"}type=${typeQuery}`;
        }

        if (contracttypeQuery) {
          apiQuery += `${
            apiQuery.includes("?") ? "&" : "?"
          }contracttype=${contracttypeQuery}`;
        }

        const response = await fetch(apiQuery);
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        setJobData(data);
      } catch (error) {
        console.error("Failed to fetch jobs");
      } finally {
        setLoading(false); // Set loading to false after the fetch (whether it's successful or not)
      }
    }

    fetchData();
  }, [regionQuery, categoryQuery, typeQuery, contracttypeQuery]);

  return (
    <>
    <div className="hidden xl:flex ">
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            >
            {jobData.map((job: Job) => (
                <SwiperSlide key={job.id} className="px-[1px]">
                    <JobTile key={job.id} jobData={job} />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
    <div className="xl:hidden flex ">
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1.5}
            >
            {jobData.map((job: Job) => (
                <SwiperSlide key={job.id} className="px-[1px]">
                    <JobTile key={job.id} jobData={job} />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
    </>
  );
}
