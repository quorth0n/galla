import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { API, graphqlOperation } from 'aws-amplify';
import InfiniteScroll from 'react-infinite-scroller';
import { debounce } from 'lodash';

import PostThumb from '../../components/PostThumb';
import { searchPosts } from '../../src/graphql/queries';

const fetchResults = async (type, query, nextToken = undefined) => {
  let response = {};
  switch (type) {
    case 'posts': {
      const fetchedResults = await API.graphql({
        ...graphqlOperation(searchPosts, {
          filter: {
            title: {
              match: query,
            },
          },
          limit: 4,
          nextToken,
        }),
        authMode: 'API_KEY',
      });
      console.log(fetchedResults);
      console.log(fetchedResults.data.searchPosts.items.length);
      response = {
        items: fetchedResults.data.searchPosts.items,
        nextToken: fetchedResults.data.searchPosts.nextToken,
        total: fetchedResults.data.searchPosts.total,
      };
      break;
    }
    case 'users': {
      const fetchedResults = await API.graphql({
        ...graphqlOperation(searchPosts, {
          filter: {
            title: {
              match: query,
            },
          },
          limit: 8,
        }),
        authMode: 'API_KEY',
      });
      response = {
        items: fetchedResults.data.searchPosts.items,
        nextToken: fetchedResults.data.nextToken,
        total: fetchedResults.data.total,
      };
      break;
    }
  }
  return response;
};

const Search = ({ initialPosts, initialNextToken, total }) => {
  const router = useRouter();
  const { query, type } = router.query;

  const [posts, setPosts] = React.useState(initialPosts);
  const [nextToken, setNextToken] = React.useState(initialNextToken);

  const loadMore = async (page) => {
    const morePosts = await fetchResults(type, query, 4 * page);
    setPosts(posts.concat(morePosts.items));
    console.log(4 * page);
    //setNextToken(morePosts.nextToken);
  };

  return (
    <div className="p-4 px-8">
      <Head title={query} />
      <div className="mt-4 flex flex-wrap items-center justify-around leading-relaxed select-none">
        {posts.length === 0 ? (
          <h2 className="text-lg">No results found for &quot;{query}&quot;</h2>
        ) : (
          <InfiniteScroll
            loadMore={debounce(loadMore, 500)}
            loader={
              <div className="loader" key={0}>
                Loading...
              </div>
            }
            hasMore={posts.length !== total}
          >
            {posts.map((post) => (
              <div key={post.id} onClick={() => console.log(posts)}>
                <PostThumb post={post} />
              </div>
            ))}
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const initialPosts = await fetchResults(query.type, query.query);
  return {
    props: {
      initialPosts: initialPosts.items,
      initialNextToken: initialPosts.nextToken,
      total: initialPosts.total,
    },
  };
};

export default Search;
