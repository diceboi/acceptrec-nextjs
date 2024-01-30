"use client"

import Blogtile from "../components/Theme Components/BlogTile";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useRouter, useSearchParams } from "next/navigation";
import he from "he";
import { gql } from "@apollo/client";
import MainHero from "../components/Theme Components/MainHero";

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

const query2 = gql`
query getCategories {
  categories(where: {exclude: 1}) {
    nodes {
      categoryId
      name
    }
  }
}`

const query3 = gql`
query getBlogPage {
  page(id: "1592", idType: DATABASE_ID) {
    blogs {
      heroTitle
      heroSubtitle
      heroImage {
        altText
        sourceUrl
      }
    }
    seo {
      metaDesc
      title
    }
  }
}
`

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
    categories: {
      nodes: Category[]; // Use the Category interface here
    };
  }

  

export default function BlogArchive() {

  const router = useRouter();
  const searchParams = useSearchParams();

  const { data: postsdata } = useSuspenseQuery<QueryResponse>(query1);
  const { data: categoriesdata } = useSuspenseQuery<QueryResponse>(query2);
  const { data: blogpagedata }:any = useSuspenseQuery(query3);

  const blogpage = blogpagedata.page.blogs;

  const categoryFromQuery = searchParams.get("category"); // Retrieve the category from the query parameter

  const filteredPosts = categoryFromQuery
    ? postsdata?.posts.edges.filter(
        (post) => post.node.categories.nodes[0].name === categoryFromQuery
      )
    : postsdata?.posts.edges;

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

    return(
        <>
            <MainHero 
                MainTitle={blogpage.heroTitle} 
                SmallTitle={blogpage.heroSubtitle} 
                Text={''} 
                BackgroundImage={blogpage.heroImage?.sourceUrl} 
                BackgroundImageAltText={blogpage.heroImage?.altText}
            />
            <section className="w-full">
                <div className="flex flex-col w-11/12 lg:w-8/12 m-auto">

                    <div className="flex flex-wrap justify-center py-4 items-center gap-2 w-full -mt-9">
                        <h3 className="font-bold mr-4">Categories:</h3>
                        <button className="font-bold w-auto p-2 px-3 border bg-white border-neutral-300 hover:shadow-special hover:bg-neutral-200 hover:border-neutral-200 focus:bg-[#312252] focus:text-white focus:border-[#312252] active:bg-[#312252] active:border-[#312252] active:text-white ease-in-out duration-200 rounded-full" 
                          onClick={() => {
                            router.push("/blogs");
                          }}
                        >
                          All
                        </button>
                        {categoriesdata?.categories.nodes.map((category: Category) => (
                        <button
                          key={category.categoryId}
                          className="font-bold w-auto p-2 px-3 border text-[#312252] bg-white border-neutral-300 hover:shadow-special hover:bg-neutral-200 hover:border-neutral-200 focus:bg-[#312252] focus:text-white focus:border-[#312252] active:bg-[#312252] active:border-[#312252] active:text-white ease-in-out duration-200 rounded-full"
                          onClick={() => {
                            router.push(`/blogs?category=${encodeURIComponent(category.name)}`);
                            // Reload the page to show only the blog tiles with the chosen category
                          }}
                          >
                          {category.name}
                        </button>
                        ))}
                        
                    </div>

                    <div className="flex flex-col w-full py-20 items-start">
                        <div className="flex flex-col">
                            <div className="grid lg:grid-cols-3 gap-8 w-full h-auto">
                            {filteredPosts?.map((post, index) => (
                              
                              <Blogtile
                                classname={`group relative flex flex-col w-full bg-white border border-neutral-300 gap-4 h-[500px] p-4 rounded-3xl hover:shadow-special hover:border-transparent transition-all ${index === 0 ? "lg:col-span-2 lg:flex-row after:content-['Recent'] after:p-2 after:w-auto after:h-auto after:bg-white after:absolute after:top-4 after:left-4 after:text-sm after:uppercase after:tracking-widest after:font-bold" : "flex-col" }`}
                                href={`/blogs/${post.node.slug}`}
                                key={post.node.slug}
                                featuredimage={post.node.featuredImage?.node.sourceUrl}
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
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}