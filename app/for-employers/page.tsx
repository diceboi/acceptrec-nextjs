"use client"

import React from 'react'
import EmployersHero from '../components/Theme Components/EmployersHero'
import EmployerBenefits from '../components/EmployerBenefits'
import ManagedServices from '../components/ManagedServices'
import Onboarding from '../components/Onboarding'
import Industries from '../components/industries'
import ShortlistedCandidates from '../components/ShortlistedCandidates'
import Team from '../components/team'
import { gql, useSuspenseQuery } from '@apollo/client'
import Blogtile from '../components/Theme Components/BlogTile'
import he from 'he'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import Standards from '../components/standards'

const query1 = gql`
query getPosts {
  posts {
    edges {
      node {
        date
        title
        slug
        author {
          node {
            avatar {
              url
            }
            name
          }
        }
        featuredImage {
          node {
            link
          }
        }
        categories(where: {exclude: 1}) {
          nodes {
            name
            id
          }
        }
        blocks {
          saveContent
          order
        }
      }
    }
  }
}`

interface Post {
    node: {
      date: string;
      title: string;
      slug: string;
      author: {
        node: {
          avatar: {
            url: string;
          };
          name: string;
        };
      };
      featuredImage: {
        node: {
          link: string;
        };
      };
      categories: {
        nodes: Array<{ name: string }>;
        id: string;
      };
      blocks: Block[];
    };
  }

  interface Block {
    saveContent: string;
    order: number;
  }
  
  interface QueryResponse {
    posts: {
      edges: Array<Post>;
    };
  }

export default function ForEmployers() {
  
    const { data: postsdata } = useSuspenseQuery<QueryResponse>(query1);

    const categoryFromQuery = "Employers";
  
    const filteredPosts = categoryFromQuery
    ? postsdata?.posts.edges.filter(
        (post) => post.node.categories.nodes[0].name === categoryFromQuery
      )
    : postsdata?.posts.edges;

    const latest3Posts = filteredPosts.slice(0, 3);
  
    const formatDate = (inputDate: string) => {
      const date = new Date(inputDate);
      const day = date.getDate();
      const month = date.getMonth() + 1; // Month is 0-indexed
      const year = date.getFullYear();
  
      return `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year}`;
    };
  
    function stripHtmlTags(html: string): string {
      return html.replace(/(<([^>]+)>)/gi, "");
    }

  return (
    <>
        <EmployersHero />
        <ManagedServices />
        <Onboarding />
        <Industries />
        <Standards />
        <Team />
        <div className='w-full m-auto py-20 border-y border-neutral-300'>
            <div className='flex flex-col gap-8 w-11/12 lg:w-full m-auto'>
                <div className='flex flex-col gap-4 w-11/12 lg:w-8/12 justify-start pb-20 m-auto'>
                    <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                        Recent blogs
                    </h3>
                    <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]'>
                        Read more
                    </h2>                    
                </div>                
            </div>
            <div className="grid lg:grid-cols-3 gap-8 w-11/12 lg:w-8/12 h-auto m-auto">
                {latest3Posts?.map((post, index) => (
                    
                    <Blogtile
                    classname={`group relative flex flex-col w-full bg-white border border-neutral-300 gap-4 h-[450px] p-4 rounded-3xl hover:shadow-special hover:border-transparent transition-all ${index === 0 ? " after:content-['Recent'] after:p-2 after:w-auto after:h-auto after:bg-white after:absolute after:top-4 after:left-4 after:text-sm after:uppercase after:tracking-widest after:font-bold" : "flex-col" }`}
                    href={`/blogs/${post.node.slug}`}
                    key={post.node.slug}
                    featuredimage={post.node.featuredImage?.node.link}
                    title={post.node.title}
                    authorimage={post.node.author.node.avatar.url}
                    authorname={post.node.author.node.name}
                    postdate={formatDate(post.node.date)}
                    category={post.node.categories.nodes[0].name}
                    content={
                        // Strip HTML tags, decode HTML entities, and then truncate the content
                        he.decode(stripHtmlTags(post.node.blocks[0].saveContent)).slice(0, 200) +
                        (he.decode(stripHtmlTags(post.node.blocks[0].saveContent)).length > 200
                        ? "..."
                        : "")
                    }
                    />                          
                ))}
            </div>
            <div className='flex justify-center w-full py-16'> 
            <Link href="/blogs?category=Employers" className='w-fit '>
                <button  
                        className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white hover:shadow-[#00afa93b] hover:w-fit p-3 rounded-full transition-all duration-200 gap-2"
                        >
                        More posts
                        <FiArrowUpRight className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                        />
                </button>
            </Link>
            </div> 
        </div>
    </>
  )
}
