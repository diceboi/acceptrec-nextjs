"use client";

import { gql, useApolloClient } from "@apollo/client";
import { useEffect, useState } from "react";
import Blogtile from "../components/Theme Components/BlogTile";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const queryRecent = gql`
  query getRecentPosts {
    posts(first: 3) {
      edges {
        node {
          date
          title
          slug
          excerpt
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
          categories(where: { exclude: 1 }) {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;

interface Post {
  date: string;
  title: string;
  slug: string;
  excerpt: string;
  author: {
    node: {
      avatar: { url: string };
      name: string;
    };
  };
  featuredImage: { node: { sourceUrl: string } };
  categories: { nodes: Array<{ name: string }> };
}

export default function RecentBlogs() {
  const client = useApolloClient();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data } = await client.query({ query: queryRecent });
        const fetchedPosts = data?.posts?.edges?.map((edge: any) => edge.node) || [];
        setPosts(fetchedPosts);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, [client]);

  const formatDate = (inputDate: string) => {
    const date = new Date(inputDate);
    return `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}.${date.getFullYear()}`;
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-neutral-100">
      <div className="flex flex-col gap-4 w-11/12 lg:w-8/12 justify-start m-auto pb-16">
        <h3 className="text-sm lg:text-lg font-medium tracking-widest uppercase">
          Interesting articles
        </h3>
        <h2 className="text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]">
          Recent Blogs
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 w-11/12 lg:w-8/12 m-auto">
        {loading ? (
          <p className="text-center w-full text-neutral-500">Loading...</p>
        ) : (
          posts.map((post, index) => (
            <Blogtile
              key={index}
              classname="group relative flex flex-col w-full bg-white border border-neutral-300 gap-4 p-4 rounded-3xl hover:shadow-special hover:border-transparent transition-all"
              href={`/blogs/${post.slug}`}
              featuredimage={post.featuredImage?.node.sourceUrl}
              title={post.title}
              authorimage={post.author.node.avatar.url}
              authorname={post.author.node.name}
              postdate={formatDate(post.date)}
              category={post.categories.nodes[0]?.name || "Uncategorized"}
              content={post.excerpt}
            />
          ))
        )}
      </div>

      <Link href="/blogs" className="flex justify-center w-fit m-auto py-16">
          <button  
                  className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white hover:shadow-[#00afa93b] hover:w-fit p-3 rounded-full transition-all duration-200 gap-2"
                  >
                  More blogs
                  <FiArrowUpRight className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                  />
          </button>
      </Link>
    </section>
  );
}
