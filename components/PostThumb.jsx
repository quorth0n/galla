import React from 'react';
import Link from 'next/link';

const PostThumb = ({ post }) => (
  <Link href="/post/[id]" as={`/post/${post.id}`} key={post.id}>
    <a>
      <div className="relative w-auto h-auto text-center mb-8 cursor-pointer shadow hover:shadow-xl">
        <div className="absolute inset-0 w-full h-full block p-1 bg-black opacity-0 hover:opacity-75 transition duration-500 ease pl-0">
          <em className="relative top-0 text-lg font-semibold">{post.title}</em>
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
        <img src={post.thumb} alt={post.title} className="m-auto" />
      </div>
    </a>
  </Link>
);
export default React.memo(PostThumb);
