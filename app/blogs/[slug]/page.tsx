"use client"

import BlogPostHero from "@/app/components/Theme Components/BlogPosthero"
import { useSuspenseQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { Suspense } from "react";
import { gql } from "@apollo/client";
import he from "he";
import Blogtile from "@/app/components/Theme Components/BlogTile";

const query = gql`
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
          sourceUrl: string;
        };
      };
      categories: {
        nodes: Array<{ name: string }>;
      };
      blocks: Block[];
    };
  }

  interface Block {
    saveContent: string;
  }
  
  interface QueryResponse {
    posts: {
      edges: Array<Post>;
    };
  }

export default function Blog() {

  const { data } = useSuspenseQuery<QueryResponse>(query);

  // Get the slug from the router query
  const { slug } = useParams();

  // Find the post with the matching slug
  const post = data?.posts.edges.find(post => post.node.slug === slug);
  const recentposts = data?.posts.edges;
  const otherRecentPosts = recentposts?.filter(recentPost => recentPost.node.slug !== slug);

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

  const formattedDate = post?.node.date ? formatDate(post.node.date) : '';

  // If the post is not found, you might want to show a loading or error message
  if (!post) {
    
      return <p>Loading...</p>;
  }
    return(
        <>
        <Suspense>
        <BlogPostHero featuredimage={post.node.featuredImage.node.sourceUrl} title={post.node.title} authorimage={post.node.author.node.avatar.url} authorname={post.node.author.node.name} postdate={formattedDate} category={post.node.categories.nodes[0].name} slug={""}/>
        <div className='flex lg:flex-row flex-col lg:gap-20 w-full lg:w-8/12 m-auto'>
          <article className='flex text-lg flex-col gap-8 w-full lg:w-2/3 px-4 lg:px-0 py-8 lg:py-20'>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tighter z-10">{post.node.title}</h1>
          {post.node.blocks.map((block, index) => (
            <div
              key={index}
              className="flex flex-col gap-2"
              dangerouslySetInnerHTML={{ __html: block.saveContent }}
            />
          ))}
          </article>
          <div className='flex flex-col justify-start mx-auto lg:w-1/3 w-11/12 gap-8 pt-20'>
            <h3 className='text-sm lg:text-lg font-mediumtracking-widest uppercase border-b border-black'>
              Recent posts
            </h3>
            {otherRecentPosts?.slice(0, 4).map((posts) => (
            <Blogtile
              classname={"group relative flex flex-col w-full bg-white border border-neutral-300 gap-4 h-[430px] p-4 rounded-3xl hover:shadow-special hover:border-transparent transition-all"}
              href={`/blogs/${posts.node.slug}`}
              key={posts.node.slug}
              featuredimage={posts.node.featuredImage?.node.sourceUrl} 
              title={posts.node.title}
              authorimage={posts.node.author.node.avatar.url}
              authorname={posts.node.author.node.name}
              postdate={formatDate(posts.node.date)}
              category={posts.node.categories.nodes[0].name}
              content={
                // Strip HTML tags, decode HTML entities, and then truncate the content
                he.decode(stripHtmlTags(posts.node.blocks[0].saveContent)).slice(0, 100) +
                (he.decode(stripHtmlTags(posts.node.blocks[0].saveContent)).length > 100
                  ? "..."
                  : "")
              }
            />
            ))}
          </div>
      </div>
      </Suspense>
        </>
    )
}