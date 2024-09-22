import BlogPostHero from "@/app/components/Theme Components/BlogPosthero";
import { gql } from "@apollo/client";
import { getClient } from "@/app/lib/client"; // Assuming you have a similar client setup as in your example
import Blogtile from "@/app/components/Theme Components/BlogTile";
import Head from "next/head";

const query = gql`
query getPosts {
  posts(first: 1000) {
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
        seo {
          metaDesc
          title
        }
        excerpt
      }
    }
  }
}`;

export const revalidate = 5;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { data } = await getClient().query({ query });
  const post = data.posts.edges.find((post: any) => post.node.slug === params.slug);
  
  return {
    title: post.node.seo.title,
    description: post.node.seo.metaDesc,
    alternates: {
      canonical: `https://acceptrec.co.uk/blogs/${post.node.slug}`,
    },
  };
}


export default async function Blog({ params }: { params: { slug: string } }) {
  const { data } = await getClient().query({ query });

  // Find the post with the matching slug
  const post = data?.posts.edges.find((post: any) => post.node.slug === params.slug);
  const recentposts = data?.posts.edges;
  const otherRecentPosts = recentposts?.filter((recentPost: any) => recentPost.node.slug !== params.slug);

  const formatDate = (inputDate: string) => {
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is 0-indexed
    const year = date.getFullYear();

    return `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year}`;
  };

  if (!post) {
    return <p>Loading...</p>; // Or handle this with a custom 404 or error component
  }

  const formattedDate = post.node.date ? formatDate(post.node.date) : '';

  return (
    <>
      <BlogPostHero
        featuredimage={post.node.featuredImage.node.sourceUrl}
        title={post.node.title}
        authorimage={post.node.author.node.avatar.url}
        authorname={post.node.author.node.name}
        postdate={formattedDate}
        category={post.node.categories.nodes[0].name}
        slug={""}
      />
      <div className='flex lg:flex-row flex-col lg:gap-20 w-full lg:w-8/12 m-auto'>
        <article className='flex text-lg flex-col gap-8 w-full lg:w-2/3 px-4 lg:px-0 py-8 lg:py-20'>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tighter z-10">{post.node.title}</h1>
          {post.node.blocks.map((block: any, index: number) => (
            <div
              key={index}
              className="flex flex-col gap-2"
              dangerouslySetInnerHTML={{ __html: block.saveContent }}
            />
          ))}
        </article>
        <div className='flex flex-col justify-start mx-auto lg:w-1/3 w-11/12 gap-8 pt-20'>
          <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase border-b border-black'>
            Recent posts
          </h3>
          {otherRecentPosts?.slice(0, 4).map((posts: any) => (
            <Blogtile
              classname={"group relative flex flex-col w-full bg-white border border-neutral-300 gap-4 p-4 rounded-3xl hover:shadow-special hover:border-transparent transition-all"}
              href={`/blogs/${posts.node.slug}`}
              key={posts.node.slug}
              featuredimage={posts.node.featuredImage?.node.sourceUrl}
              title={posts.node.title}
              authorimage={posts.node.author.node.avatar.url}
              authorname={posts.node.author.node.name}
              postdate={formatDate(posts.node.date)}
              category={posts.node.categories.nodes[0].name}
              content={posts.node.excerpt}
            />
          ))}
        </div>
      </div>
    </>
  );
}
