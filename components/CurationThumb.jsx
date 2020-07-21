import React from 'react';
import Link from 'next/link';

const CurationThumb = ({ curation }) => {
  if (!curation.posts.items.length) {
    return null;
  }

  return (
    <Link
      href="/curation/[id]"
      as={`/curation/${curation.id}`}
      key={curation.id}
    >
      <a
        className="link-off w-full h-full relative text-center cursor-pointer shadow hover:shadow-xl block"
        style={{ maxHeight: '360px', maxWidth: '360px' }}
      >
        <div className="absolute inset-0 w-full h-full block p-1 bg-black opacity-0 hover:opacity-75 transition duration-300 ease pl-0">
          <em className="relative top-0 text-lg font-semibold">
            {curation.title}
          </em>
          <p
            className="absolute bottom-0 w-full whitespace-normal opacity-75 overflow-hidden"
            style={{
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              display: '-webkit-box',
            }}
          >
            {curation.description}
          </p>
        </div>
        <div
          className={`w-full h-full grid grid-cols-${
            curation.posts.items.length > 1 ? 2 : 1
          } grid-rows-${curation.posts.items.length > 2 ? 2 : 1}`}
        >
          {curation.posts.items
            .map((curatedPost) => curatedPost.post)
            .map(
              (post) =>
                post && (
                  <img
                    key={post.thumb}
                    src={post.thumb}
                    className="object-cover w-full h-full"
                  />
                )
            )}
        </div>
      </a>
    </Link>
  );
};
export default CurationThumb;
