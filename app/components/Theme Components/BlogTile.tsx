"use client"

import { useSuspenseQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

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
            sourceUrl
          }
        }
        categories {
          nodes {
            name
            id
          }
        }
        blocks {
          originalContent
          order
        }
      }
    }
  }
}`

const query2 = gql`
query getCategories {
  categories {
    nodes {
      categoryId
      name
    }
  }
}`

interface Category {
  categoryId: string;
  name: string;
}

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
          sourceUrl: string;
        };
      };
      categories: {
        nodes: Array<{ name: string }>;
        id: string;
      };
      blocks: {
        originalContent: string;
        order: string;
      };
    };
  }
  
  interface QueryResponse {
    posts: {
      edges: Array<Post>;
    };
    categories: {
      nodes: Category[]; // Use the Category interface here
    };
  }

  interface BlogtileProps {
    title: string;
    authorimage: string;
    authorname: string;
    postdate: string;
    category: string;
    featuredimage: string;
    classname: string;
    content: string;
    href: string;
  }

  const Blogtile: React.FC<BlogtileProps> = ({ featuredimage, postdate, title, authorimage, authorname, category, classname, content, href }) => {
    return(
        <>
            <Link href={href} className={classname}>
                <div style={{backgroundImage:`url("${featuredimage}")`}} className="w-full min-h-[150px] bg-cover bg-center bg-no-repeat rounded-2xl">
                </div>
                <div className="flex flex-col justify-between gap-4 w-full h-full">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-wrap items-center gap-2">
                            <Image src={authorimage} height={30} width={30} alt='author' className='rounded-full'/>
                            <p className="text-sm ">{authorname}</p>
                            <p className="text-sm ">{postdate}</p>
                            <p className="text-sm border border-neutral-300 rounded-full px-2">{category}</p>
                        </div>                    
                        <h2 className="text-xl font-black tracking-tight text-[#312252]">{title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: content }} className="text-sm" />
                    </div>
                    <div className="relative h-8">
                        <FiArrowRight className='absolute right-4 bottom-0 recruitment-icon w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-0 ease-out duration-200'/>
                    </div>
                </div>
            </Link>
        </>
    )
  }

  export default Blogtile;