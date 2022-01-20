import React from "react";
import Post from "./Post";
// import MinorHeroPost from "./MinorHeroPost";

function PostList({ blok }) {
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold pb-4">{blok.title}</h1>
      <div className="grid grid-cols-1 md:gap-4 md:grid-cols-3 w-full">
        {blok.posts.map((post) => (
          <Post
            key={post.content._uid}
            title={post.content.title}
            intro={post.content.intro}
            long_text={post.content.long_text}
            postImage={post.content.postImage?.filename}
            slug={post.full_slug}
          />
        ))}
      </div>
    </div>
  );
}

export default PostList;
