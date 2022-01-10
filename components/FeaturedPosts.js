import React from "react";
import Post from "./Post";

function FeaturedPosts({ blok }) {
  console.log("CONTENT", blok);
  return (
    <div className="mt-16">
      <h1 className="text-4xl font-bold">{blok.title}</h1>
      {blok.post.map((post) => (
        <Post
          key={post.content._uid}
          title={post.content.title}
          intro={post.content.intro}
          postImage={post.content.image}
          longText={post.content.long_text}
          slug={post.full_slug}
        />
      ))}
    </div>
  );
}

export default FeaturedPosts;
