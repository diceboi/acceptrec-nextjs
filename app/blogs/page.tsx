"use client";

import Blogtile from "../components/Theme Components/BlogTile";
import { useSuspenseQuery } from "@apollo/client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import { gql } from "@apollo/client";
import { useApolloClient } from "@apollo/client";
import MainHero from "../components/Theme Components/MainHero";

const query1 = gql`
  query getPosts(
    $first: Int = 17
    $after: String = ""
    $categoryName: String = ""
  ) {
    posts(
      first: $first
      after: $after
      where: { categoryName: $categoryName }
    ) {
      edges {
        node {
          date
          title
          slug
          id
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
              id
            }
          }
          blocks {
            saveContent
            order
          }
          excerpt
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

const query2 = gql`
  query getCategories {
    categories(where: { exclude: 1 }) {
      nodes {
        categoryId
        name
      }
    }
  }
`;

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
`;

interface Category {
  categoryId: string;
  name: string;
}

interface Category {
  categoryId: string;
  name: string;
}

interface Post {
  excerpt: string;
  slug: string;
  id: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  title: string;
  author: {
    node: {
      avatar: {
        url: string;
      };
      name: string;
    };
  };
  date: string;
  categories: {
    nodes: Array<{ name: string }>;
  };
  blocks: Array<{
    saveContent: string;
    order: number;
  }>;
}

interface QueryResponse {
  posts: {
    pageInfo: {
      endCursor: string | null;
      hasNextPage: boolean;
    };
    edges: Array<{ node: Post }>;
  };
  categories: {
    nodes: Category[];
  };
}

export default function BlogArchive() {
  const { data: blogpagedata }: any = useSuspenseQuery(query3);

  const blogpage = blogpagedata.page.blogs;

  return (
    <>
      <Suspense>
        <MainHero
          MainTitle={blogpage.heroTitle}
          SmallTitle={blogpage.heroSubtitle}
          Text={""}
          BackgroundImage={blogpage.heroImage?.sourceUrl}
          BackgroundImageAltText={blogpage.heroImage?.altText}
        />
      </Suspense>
      <Suspense>
        <ContentSection />
      </Suspense>
    </>
  );
}

function ContentSection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const client = useApolloClient();

  const categoryFromQuery = searchParams.get("category") || "";
  const [posts, setPosts] = useState<Post[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);

  // Fetch posts with pagination and category filter
  const { data: postsData } = useSuspenseQuery<QueryResponse>(query1, {
    variables: {
      first: 17,
      categoryName: categoryFromQuery,
    },
  });

  // Fetch categories
  const { data: categoriesdata } = useSuspenseQuery<QueryResponse>(query2);

  // Clear posts when category changes
  useEffect(() => {
    setPosts([]);
    setCursor(null);
    setHasNextPage(true);
  }, [categoryFromQuery]);

  useEffect(() => {
    if (postsData) {
      const newPosts = postsData.posts.edges.map((edge) => edge.node);
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setHasNextPage(postsData.posts.pageInfo.hasNextPage);
      setCursor(postsData.posts.pageInfo.endCursor);
    }
  }, [postsData]);

  // Function to load more posts when scrolling down
  const loadMorePosts = async () => {
    if (!loadingMore && hasNextPage) {
      setLoadingMore(true);
      const { data: morePostsData } = await client.query<QueryResponse>({
        query: query1,
        variables: {
          first: 12,
          after: cursor,
          categoryName: categoryFromQuery,
        },
        fetchPolicy: "network-only",
      });
      const morePosts = morePostsData.posts.edges.map((edge) => edge.node);
      setPosts((prevPosts) => [...prevPosts, ...morePosts]);
      setHasNextPage(morePostsData.posts.pageInfo.hasNextPage);
      setCursor(morePostsData.posts.pageInfo.endCursor);
      setLoadingMore(false);
    }
  };

  const formatDate = (inputDate: string) => {
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is 0-indexed
    const year = date.getFullYear();

    return `${day < 10 ? "0" : ""}${day}.${
      month < 10 ? "0" : ""
    }${month}.${year}`;
  };

  return (
    <section className="w-full">
      {/* Category Filters */}
      <div className="flex flex-col w-11/12 lg:w-8/12 m-auto">
        <div className="flex flex-wrap justify-center py-4 items-center gap-2 w-full -mt-9">
          <h3 className="font-bold mr-4">Categories:</h3>
          <button
            className="font-bold w-auto p-2 px-3 border bg-white border-neutral-300 hover:shadow-special hover:bg-neutral-200 hover:border-neutral-200 focus:bg-[#312252] focus:text-white focus:border-[#312252] active:bg-[#312252] active:border-[#312252] active:text-white ease-in-out duration-200 rounded-full"
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
                router.push(
                  `/blogs?category=${encodeURIComponent(category.name)}`
                );
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Blog Posts */}
        <div className="flex flex-col w-full py-20 items-start ">
          <div className="flex flex-col min-h-[100vh]">
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8 w-full h-auto">
              {posts.map((post, index) => (
                <Blogtile
                  classname={`group relative flex flex-col w-full bg-white border border-neutral-300 gap-4 p-4 rounded-3xl hover:shadow-special hover:border-transparent transition-all ${
                    index === 0
                      ? "lg:col-span-2 lg:flex-row after:content-['Recent'] after:p-2 after:w-auto after:h-auto after:bg-white after:absolute after:top-4 after:left-4 after:text-sm after:uppercase after:tracking-widest after:font-bold"
                      : "flex-col"
                  }`}
                  href={`/blogs/${post.slug}`}
                  key={index}
                  featuredimage={post.featuredImage?.node.sourceUrl}
                  title={post.title}
                  authorimage={post.author.node.avatar.url}
                  authorname={post.author.node.name}
                  postdate={formatDate(post.date)}
                  category={post.categories.nodes[0].name}
                  content={post.excerpt}
                />
              ))}
            </div>
            {hasNextPage && (
              <button
                onClick={loadMorePosts}
                className="mt-8 px-4 py-2 text-white bg-[#00afaa] hover:bg-[#24938f] rounded-full w-fit self-center"
                disabled={loadingMore}
              >
                {loadingMore ? "Loading..." : "Load More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

