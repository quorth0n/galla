import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { API, graphqlOperation } from 'aws-amplify';

import { listPosts } from '../src/graphql/queries';
import Dropdown from '../components/Dropdown';

export default function Home() {
  const [posts, setPosts] = React.useState([]);

  const fetchPosts = async () => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 7);
    const topPosts = await API.graphql(
      graphqlOperation(listPosts, {
        filter: {
          createdAt: {
            between: [yesterday.toISOString(), today.toISOString()],
          },
        },
        sort: {
          field: 'totalScore',
          direction: 'desc',
        },
        limit: 10,
      })
    );
    setPosts(topPosts.data.listPosts.items);
    console.log(topPosts);
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  const pushCollection = (collection) => {
    console.log(collection);
  };

  return (
    <div className="p-4 px-8">
      <Dropdown
        options={[
          'Popular: 24 hr',
          'Popular: 1 week',
          'Popular: 1 month',
          'Popular: All Time',
          'Newest',
        ].map((option) => ({
          key: option.toLowerCase(),
          value: option,
        }))}
        handleChange={(change) => console.log(change)}
      />
      <div className="mt-4 flex flex-wrap items-center justify-around leading-relaxed select-none">
        {posts.map((post) => (
          <Link href="/post/[id]" as={`/post/${post.title}`} key={post.title}>
            <div
              className="relative w-auto h-auto text-center mb-8 cursor-pointer shadow hover:shadow-xl"
              onClick={() => pushCollection(posts)}
            >
              <div className="absolute inset-0 w-full h-full block p-1 bg-black opacity-0 hover:opacity-75 transition duration-500 ease pl-0">
                <em className="relative top-0 text-lg font-semibold">
                  Sample Title
                </em>
                <p
                  className="absolute bottom-0 w-full whitespace-normal opacity-75 overflow-hidden"
                  style={{
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    display: '-webkit-box',
                  }}
                >
                  Esse ea Lorem elit labore nulla cupidatat commodo. Est commodo
                  incididunt occaecat duis deserunt magna proident adipisicing
                  est. Id incididunt amet sit pariatur.
                </p>
              </div>
              <img src={post.thumb} alt={post.title} />
            </div>
          </Link>
        ))}
      </div>
      <div className="pt-4 border-primary border-t">
        <h2 className="text-lg lg:text-left">
          Suggested category: <strong>Photography</strong>
        </h2>
        <div className="mt-6 flex flex-wrap items-center justify-around leading-relaxed select-none">
          {posts.slice(0, 3).map((post) => (
            <Link href="/post/[id]" as={`/post/${post.id}`} key={post.id}>
              <div
                className="relative w-auto h-auto text-center mb-8 cursor-pointer shadow hover:shadow-xl"
                onClick={() => pushCollection(posts)}
              >
                <div className="absolute inset-0 w-full h-full block p-1 bg-black opacity-0 hover:opacity-75 transition duration-500 ease pl-0">
                  <em className="relative top-0 text-lg font-semibold">
                    {post.title}
                  </em>
                  <p
                    className="absolute bottom-0 w-full whitespace-normal opacity-75 overflow-hidden"
                    style={{
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      display: '-webkit-box',
                    }}
                  >
                    {post.description}
                  </p>
                </div>
                <img
                  style={{
                    maxWidth: '20em',
                    maxHeight: '20em',
                  }}
                  src={`/thumbs/${post.thumb}`}
                  alt={post.title}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="pt-4 border-primary border-t">
        <h2 className="text-lg lg:text-left">
          Suggested tag: <strong>#modernism</strong>
        </h2>
        <div className="mt-6 flex flex-wrap items-center justify-around leading-relaxed select-none">
          {posts.slice(0, 3).map((post) => (
            <Link href="/post/[id]" as={`/post/${post.title}`} key={post.title}>
              <div
                className="relative w-auto h-auto text-center mb-8 cursor-pointer shadow hover:shadow-xl"
                onClick={() => pushCollection(posts)}
              >
                <div className="absolute inset-0 w-full h-full block p-1 bg-black opacity-0 hover:opacity-75 transition duration-500 ease pl-0">
                  <em className="relative top-0 text-lg font-semibold">
                    Sample Title
                  </em>
                  <p
                    className="absolute bottom-0 w-full whitespace-normal opacity-75 overflow-hidden"
                    style={{
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      display: '-webkit-box',
                    }}
                  >
                    Esse ea Lorem elit labore nulla cupidatat commodo. Est
                    commodo incididunt occaecat duis deserunt magna proident
                    adipisicing est. Id incididunt amet sit pariatur.
                  </p>
                </div>
                <img src={post.thumb} alt={post.title} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
