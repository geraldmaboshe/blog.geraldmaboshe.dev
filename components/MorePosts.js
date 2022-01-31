import React from "react";
import Post from "./Post";

function MorePosts({ blok }) {
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold pb-4">{blok.title}</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-4 lg:grid-cols-3">
        {blok.posts.map((post) => (
          <Post
            key={post.content._uid}
            title={post.content.title}
            coverImage={post.content.coverImage?.filename}
            slug={post.full_slug}
          />
        ))}
      </div>
    </div>
  );
}

export default MorePosts;
