"use client";

import GoogleReviewNumber from "./googlereviewnumber";
import { useSuspenseQuery, gql } from "@apollo/client";
import HomeBanner from "./HomeBanner";
import { BiSearchAlt } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";
import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

const GET_JOBLISTS = gql`
  query getJoblist {
    joblists(first: 1000, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      edges {
        node {
          id
          joblists {
            shortDescription
            longDescription
            requiredSkills
            dailyDuties
            benefits
            shift
            location
            category
            jobType
            contractType
            salary {
              fix
              from
              to
            }
          }
          title
          slug
          seo {
            metaDesc
            title
          }
          databaseId
          date
        }
      }
    }
  }
`;

export default function Hero() {
  const router = useRouter();
  const { data, error } = useSuspenseQuery<{ joblists: { edges: { node: any }[] } }>(GET_JOBLISTS);

  // Állapotkezelés (state-eket mindig a komponens elején definiáljuk)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  if (error) {
    console.error("GraphQL error:", error);
    return <p>Hiba történt az állások betöltése közben.</p>;
  }

  const jobsData = data?.joblists?.edges.map(({ node }: any) => ({
    id: node.id,
    title: node.title,
    category: node.joblists.category || [],
    town: node.joblists.location || "",
    state: node.joblists.location || "",
  })) || [];

  const allStates = [...new Set(jobsData.map((job: any) => job.state).filter(Boolean))];

  const allCategories = [
    ...new Set(jobsData.flatMap((job: { category: string[] }) => job.category).filter(Boolean)),
  ];

  const filteredStates = selectedCategory
    ? [...new Set(jobsData.filter((job: any) => job.category.includes(selectedCategory)).map((job: any) => job.state))]
    : allStates;

  const filteredCategories = selectedState
    ? [...new Set(jobsData.filter((job: any) => job.state === selectedState).flatMap((job: any) => job.category))]
    : allCategories;

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (selectedState || selectedCategory) {
      const queryParams = `?${selectedState ? `region=${selectedState}&` : ""}${selectedCategory ? `category=${selectedCategory}` : ""}`;
      router.push(`/jobs${queryParams}`);
    }
  };

  return (
    <section className="relative flex flex-col justify-center w-full overflow-hidden bg-gradient-to-br from-white to-neutral-200 lg:min-h-[70vh] nav-gap pb-16">
      <div id="jobsearch" className="flex flex-col justify-center w-10/12 lg:w-8/12 mx-auto p-4 lg:p-2 z-10">


        {/* GOOGLE REVIEW - Moved to layout.tsx after navigation */}
        {/* The component now follows the menu naturally */}


        <div id="hero-title" className="flex flex-col gap-4 w-full justify-center items-center">
          <h1 className="hero-title text-6xl lg:text-8xl font-black tracking-tighter text-center p-2">
            Looking for work?
          </h1>
        </div>

        <div id="job-filter" className="flex gap-4 py-4 w-full justify-center items-center">
          <form className="flex flex-col items-center max-w-5xl gap-8 mb-8" onSubmit={handleFormSubmit}>
            <div className="flex flex-col justify-between lg:flex-row items-center lg:items-end gap-2">

              {/* Régió (hely) kiválasztása */}
              <div className="grid w-full">
                <label className="text-sm text-center lg:text-left lg:text-md uppercase font-medium tracking-widest py-2">
                  Region
                </label>
                <select
                  id="job-region"
                  className="p-4 shadow-special rounded-full hover:bg-neutral-50 cursor-pointer"
                  value={selectedState || ""}
                  onChange={(e) => setSelectedState(e.target.value || null)}
                >
                  <option value="">All regions</option>
                  {filteredStates.map((state: any) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              {/* Kategória kiválasztása */}
              <div className="grid w-full">
                <label htmlFor="job-category" className="text-sm text-center lg:text-left lg:text-md uppercase font-medium tracking-widest py-2">
                  Category
                </label>
                <select
                  id="job-category"
                  className="p-4 shadow-special rounded-full hover:bg-neutral-50 cursor-pointer"
                  value={selectedCategory || ""}
                  onChange={(e) => setSelectedCategory(e.target.value || null)}
                >
                  <option value="">All categories</option>
                  {filteredCategories.map((category: any) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Keresés gomb */}
              <button
                type="submit"
                className="flex justify-between items-center button-85 w-full bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl shadow-lg text-white hover:shadow-[#00afa93b] lg:w-96 p-4 rounded-full transition-all"
              >
                Find jobs
              </button>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
}