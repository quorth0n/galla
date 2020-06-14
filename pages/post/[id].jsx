import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Error from 'next/error';
import { API, graphqlOperation } from 'aws-amplify';

import Head from '../../components/Head';
import Dropdown from '../../components/Dropdown';
import Vote from '../../components/Vote';
import useCognitoUser from '../../helpers/hooks/useCognitoUser';
import { viewPost, viewTag } from '../../src/graphql/mutations';

const Post = ({ post }) => {
  const router = useRouter();
  const { id } = router.query; // image ID for db retrieval
  const canvasRef = React.useRef(null);
  const [resolutions, setResolutions] = React.useState([]);
  const user = useCognitoUser();

  const tagNames = post?.tags?.items
    ? post.tags.items.map((tag) => tag.tagName)
    : [];

  // scale canvas and load image
  React.useEffect(() => {
    console.log(id, post, tagNames);
    if (post) {
      const fetchData = async () => {
        // get resolutions
        const fetchedResolutions = await API.graphql({
          query: /* GraphQL */ `
            query GetPost($id: ID!) {
              getPost(id: $id) {
                resolutions {
                  resMode
                  image {
                    bucket
                    region
                    key
                  }
                  thumb
                }
              }
            }
          `,
          variables: { id },
          authMode: 'API_KEY',
        });
        for (const name of tagNames) {
          await API.graphql({
            ...graphqlOperation(viewTag, { name }),
            authMode: 'API_KEY',
          });
        }
        await API.graphql({
          ...graphqlOperation(viewPost, { id }),
          authMode: 'API_KEY',
        });
        setResolutions(fetchedResolutions.data.getPost.resolutions);
      };
      fetchData();

      const canvas = canvasRef.current;
      if (canvas.offsetWidth !== 300) {
        const image = new Image();
        image.onload = () => {
          // TODO find better ways to resample on low res
          canvas.width = image.width;
          canvas.height = image.height;

          const ctx = canvas.getContext('2d');
          ctx.drawImage(image, 0, 0, image.width, image.height);
        };
        image.src = `/thumbs/${post.thumb}`;
      }
    }
  }, []);

  const dropdownRes = resolutions.map((res) => ({
    key: res.resMode,
    value: res.resMode,
    disabled: !!user,
  }));

  if (!post) return <Error statusCode={404} />;

  return (
    <div className="m-auto inline-flex flex-col justify-center text-left p-4 md:px-8">
      <Head title={post.title} description={post.description} />
      <div className="flex flex-row justify-between">
        <Link href="/">
          <a className="opacity-75 hover:opacity-50 back">
            <i className="fas fa-arrow-left"></i> Back
          </a>
        </Link>
        <Dropdown
          size="sm"
          options={
            dropdownRes.length
              ? dropdownRes
              : [
                  { key: '360p', value: '360p' },
                  { key: '1080p', value: '1080p' },
                ]
          }
          handleChange={(change) => console.log(change)}
        />
      </div>
      <div className="relative mt-4 text-center align-middle navigation">
        {/* TODO: Add swiping support for mobile https://codesandbox.io/s/qq7759m3lq?module=/src/Carousel.js&file=/src/Carousel.js */}
        <Link href="#">
          <a
            className="block float-left absolute arrow"
            style={{ top: '50%', bottom: '50%' }}
          >
            <i className="fas fa-chevron-left text-4xl"></i>
          </a>
        </Link>
        <canvas
          ref={canvasRef}
          className="inline img shadow-2xl"
          onContextMenu={(e) => e.preventDefault()}
        />
        <Link href="#">
          <a
            className="block float-right absolute right-0 arrow"
            style={{ top: '50%', bottom: '50%' }}
          >
            <i className="fas fa-chevron-right float-right text-4xl"></i>
          </a>
        </Link>
        <style jsx>{`
          .navigation .arrow {
            opacity: 0;
          }
          .navigation:hover .arrow {
            opacity: 1;
          }

          .arrow:hover {
            opacity: 0.75 !important;
          }

          .back {
            top: -1.5em;
          }

          /* .img cannot be resized through tailwind because dep CSS loads too slow for useEffect */
          .img {
            width: 100%;
          }

          @media (min-width: 1024px) {
            .back {
              top: 0;
            }

            .img {
              width: 75%;
            }
          }
        `}</style>
      </div>
      <div className="pt-8 justify-between flex flex-row">
        <div className="flex-col">
          <Vote id={id} initialScore={post.totalScore} />
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="flex-col">
            <h1 className="text-2xl italic font-semibold">
              {post && post.title}
            </h1>
            <span className="opacity-75">by </span>
            <Link href="/profile/[uid]" as={`/profile/${post.userID}`}>
              <a className="opacity-100">{post && post.userID}</a>
            </Link>
          </div>
          <div
            className="flex-col select-none opacity-75 text-right"
            style={{ transition: 'all 0.15s ease' }}
          >
            <div className="md:inline background-transparent font-semibold px-3 py-1 text-sm">
              <i className="far fa-heart"></i> 34
            </div>
            <div
              className="cursor-help md:inline background-transparent font-semibold px-3 py-1 text-sm ml-1"
              title="Coming soon!"
            >
              <i className="far fa-comments"></i> 0
            </div>
            <div className="md:inline background-transparent font-semibold px-3 py-1 text-sm ml-1">
              <i className="far fa-eye"></i> {post.totalViews}
            </div>
            <div className="cursor-help background-transparent px-3 py-1 text-lg text-center w-full">
              <i className="fab fa-creative-commons-pd"></i> Public Domain
            </div>
          </div>
        </div>
      </div>
      <p className="opacity-75 mt-4">{post && post.description}</p>
      <nav className="mt-4">
        <strong>Tags: </strong>
        {tagNames.length
          ? tagNames.map((tag) => (
              <a
                href="#"
                key={tag}
                className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-accent uppercase last:mr-0 mr-1"
              >
                #{tag}
              </a>
            ))
          : '(none)'}
      </nav>
      <div className="mt-4 px-3 py-1 text-center text-xs w-full flex flex-row justify-around">
        <button>
          <i className="fas fa-share mr-1"></i> Share
        </button>
        <button>
          <i className="fas fa-plus mr-1"></i> Add to Curation
        </button>
        {user && user.username === post.userID && (
          <Link href="/post/edit/[id]" as={`/post/edit/${id}`}>
            <a>
              <i className="fas fa-edit mr-1"></i> Edit
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ query: { id }, res }) => {
  const fetchData = await API.graphql({
    query: /* GraphQL */ `
      query GetPost($id: ID!) {
        getPost(id: $id) {
          title
          description
          createdAt
          userID
          thumb
          totalViews
          totalScore
          tags {
            items {
              tagName
            }
          }
        }
      }
    `,
    variables: { id },
    authMode: 'API_KEY',
  });
  const post = fetchData.data.getPost;
  if (!post) {
    res.statusCode = 404;
  }
  return {
    props: {
      post,
    },
  };
};

export default Post;
