import React from 'react';
import Link from 'next/link';

const CurationThumb = ({ curation }) => (
  <Link href="/curation/[id]" as={`/curation/${curation.id}`} key={curation.id}>
    <a className="link-off">
      <div className="relative w-48 h-48 text-center cursor-pointer shadow hover:shadow-xl">
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
        <div className="flex flex-wrap">
          {curation.posts.items
            .map((curatedPost) => curatedPost.post)
            .map(
              (post) =>
                post && (
                  <img
                    key={post.thumb}
                    src={post.thumb}
                    className="w-1/2 object-cover h-24"
                  />
                )
            )}
        </div>
      </div>
    </a>
  </Link>
);
export default React.memo(CurationThumb);
