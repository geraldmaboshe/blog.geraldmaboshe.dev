import React from "react";
import HeroPost from "./HeroPost";
import MinorHeroPost from "./MinorHeroPost";

function FeaturedPosts({ blok }) {
  let [heroPost, ...posts] = blok.posts;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{blok.title}</h1>
      <div className="flex flex-col md:flex-row md:gap-x-8">
        <div className="md:w-2/3">
          <HeroPost
            key={heroPost.id}
            title={heroPost.content.title}
            intro={heroPost.content.intro}
            long_text={heroPost.content.long_text}
            slug={heroPost.full_slug}
            postImage={heroPost.content.postImage}
            blur_hash={heroPost.content.blur_hash}
          />
        </div>
        <div className="flex flex-col md:w-1/3">
          {posts.map((post) => (
            <MinorHeroPost
              key={post.id}
              title={post.content.title}
              intro={post.content.intro}
              long_text={post.content.long_text}
              slug={post.full_slug}
              postImage={post?.content.postImage}
              blur_hash={post.content.blur_hash}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedPosts;
