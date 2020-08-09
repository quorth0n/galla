import React from 'react';
import Link from 'next/link';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { API, graphqlOperation } from 'aws-amplify';

import Head from '../../components/Head';
import Dropdown from '../../components/Dropdown';
import AddToCuration from '../../components/post/AddToCuration';
import Tags from '../../components/Tags';
import Vote from '../../components/post/Vote';
import DeletePost from '../../components/post/DeletePost';
import useCognitoUser from '../../helpers/hooks/useCognitoUser';
import { viewPost } from '../../src/graphql/mutations';
import TagsContext from '../../context/TagsContext';
import { licenses } from '../../helpers/constants';

const Post = ({ post }) => {
  const canvasRef = React.useRef();
  const [resolutions, setResolutions] = React.useState([]);
  const [imageSrc, setImageSrc] = React.useState(post?.thumb);
  const { back } = useRouter();
  const [user] = useCognitoUser();

  // scale canvas and load image
  React.useEffect(() => {
    if (post) {
      const fetchData = async () => {
        // get resolutions
        const fetchedResolutions = await API.graphql({
          query: /* GraphQL */ `
            query GetPost($id: ID!) {
              getPost(id: $id) {
                resolutions {
                  resMode
                  urls
                }
              }
            }
          `,
          variables: { id: post.id },
          authMode: 'API_KEY',
        });
        const res = fetchedResolutions.data.getPost.resolutions;
        setImageSrc(res[res.length - 1].urls[0]);
        setResolutions(res);

        API.graphql({
          ...graphqlOperation(viewPost, { id: post.id }),
          authMode: 'API_KEY',
        });
      };
      fetchData();
    }
  }, [post]);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && canvas.offsetWidth !== 300) {
      const image = new Image();
      image.onload = () => {
        // TODO: find better ways to resample on low res
        canvas.width = image.width;
        canvas.height = image.height;

        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0, image.width, image.height);
      };
      image.src = imageSrc;
    }
  }, [imageSrc]);

  if (!post) return <Error statusCode={404} />;

  const { id } = post;
  const dropdownRes = resolutions.map((res, i) => ({
    key: res.urls[0],
    value: res.resMode,
    selected: i === resolutions.length - 1,
  }));

  return (
    <div className="inline-flex flex-col justify-center text-left px-4 md:px-8 w-full">
      <Head title={post.title} description={post.description} />
      <div className="flex flex-row justify-between">
        <button className="back" onClick={back}>
          <i className="fas fa-arrow-left"></i> Back
        </button>
        {resolutions.length && (
          <Dropdown
            size="sm"
            options={dropdownRes}
            handleChange={(url) => setImageSrc(url)}
          />
        )}
      </div>
      <div className="relative mt-4 text-center text-xl align-middle flex flex-row items-center md:space-x-4 md:text-3xl navigation">
        {/* TODO: Add swiping support for mobile https://codesandbox.io/s/qq7759m3lq?module=/src/Carousel.js&file=/src/Carousel.js */}
        <div className="w-full">
          <canvas
            ref={canvasRef}
            className="img shadow-2xl w-full"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
        <style jsx>{`
          .navigation .arrow {
            opacity: 0.75;
          }

          .arrow:hover {
            opacity: 0.75 !important;
          }

          .back {
            top: -1.5em;
          }

          @media (min-width: 1024px) {
            .back {
              top: 0;
            }

            .navigation .arrow {
              opacity: 0;
            }
            .navigation:hover .arrow {
              opacity: 1;
            }
          }
        `}</style>
      </div>
      <div className="mt-4 px-3 py-1 text-center text-xs w-full flex flex-row justify-around">
        <AddToCuration postID={id} />
        {user?.username === post.userID && (
          <Link href="/post/edit/[id]" as={`/post/edit/${id}`}>
            <a className="link-off">
              <i className="fas fa-edit mr-1" /> Edit
            </a>
          </Link>
        )}
        <DeletePost id={id} resolutions={resolutions} owner={post.userID} />
      </div>
      <div className="pt-8 justify-between flex flex-row">
        <div>
          <Vote id={id} initialScore={post.totalScore} />
        </div>
        <div className="flex flex-row justify-between w-full">
          <div>
            <h1 className="text-2xl italic font-semibold">{post.title}</h1>
            <span className="opacity-75">by </span>
            <Link href="/profile/[uid]" as={`/profile/${post.userID}`}>
              <a>{post.userID}</a>
            </Link>
          </div>
          <div className="flex-col select-none text-right md:text-center w-48 md:w-auto">
            <div
              className="opacity-75 cursor-help md:inline font-semibold px-3 py-1 text-sm"
              title="Coming soon!"
            >
              <i className="far fa-heart"></i> 0
            </div>
            <div
              className="opacity-75 cursor-help md:inline font-semibold px-3 py-1 text-sm ml-1"
              title="Coming soon!"
            >
              <i className="far fa-comments"></i> 0
            </div>
            <div className="opacity-75 md:inline font-semibold px-3 py-1 text-sm ml-1">
              <i className="far fa-eye"></i> {post.totalViews}
            </div>
            <div className="opacity-75 px-3 py-1 text-lg text-center w-full hidden md:block">
              <a
                href={
                  post.license !== 'copyright'
                    ? licenses[post.license].link ??
                      `https://creativecommons.org/licenses/${post.license.replace(
                        '_',
                        '-'
                      )}/4.0/`
                    : undefined
                }
                className={
                  post.license === 'copyright' &&
                  'cursor-text hover:opacity-100 hover:shadow-none'
                }
                style={{
                  borderBottom: post.license === 'copyright' ? 0 : undefined,
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={licenses[post.license].icon} />{' '}
                {licenses[post.license].name}
              </a>
            </div>
            <div className="px-3 py-1 text-lg text-center w-full hidden md:block">
              {parseInt(post.quantity) > -1 && (
                <div className="flex justify-center items-center space-x-4">
                  <span className="text-xl">${post.price}</span>
                  <button
                    className="btn-primary"
                    disabled={post.quantity === 0}
                    onClick={() => alert('Purchase link in description!')}
                  >
                    {post.quantity === 0 ? 'Sold out' : 'Buy now'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <p className="opacity-75 mt-4">{post.description}</p>
      <div className="mt-4">
        {parseInt(post.quantity) > -1 ? (
          <div className="flex justify-center items-center space-x-4 md:hidden">
            <span className="text-xl">${post.price}</span>
            <button
              disabled={post.quantity === 0}
              className="btn-primary w-1/3"
              onClick={() => alert('Purchase link in description!')}
            >
              {post.quantity === 0 ? 'Sold out' : 'Buy now'}
            </button>
          </div>
        ) : (
          <p className="opacity-75 text-sm">Not for sale</p>
        )}
      </div>
      <nav className="mt-4">
        {/* TODO: implement inline editing */}
        <TagsContext.Provider value={{ tags: post.tags }}>
          <Tags />
        </TagsContext.Provider>
      </nav>
      <div className="cursor-help  mt-4 opacity-75 md:hidden">
        <a
          href={
            post.license !== 'copyright' &&
            (licenses[post.license].link ??
              `https://creativecommons.org/licenses/${post.license.replace(
                '_',
                '-'
              )}/4.0/`)
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={licenses[post.license].icon} />{' '}
          {licenses[post.license].name}
        </a>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ query: { id }, res }) => {
  const fetchData = await API.graphql({
    query: /* GraphQL */ `
      query GetPost($id: ID!) {
        getPost(id: $id) {
          id
          title
          description
          license
          createdAt
          userID
          thumb
          quantity
          price
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
