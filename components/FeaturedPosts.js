import React from "react";
import HeroPost from "./HeroPost";
import MinorHeroPost from "./MinorHeroPost";

function FeaturedPosts({ blok }) {
  let [heroPost, ...posts] = blok.posts;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{blok.title}</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <HeroPost
            key={heroPost.id}
            title={heroPost.content.title}
            intro={heroPost.content.intro}
            long_text={heroPost.content.long_text}
            slug={heroPost.full_slug}
            coverImage={heroPost.content.coverImage}
            blur_hash={heroPost.content.blur_hash}
          />
        </div>
        <div>
          {posts.map((post) => (
            <MinorHeroPost
              key={post.id}
              title={post.content.title}
              intro={post.content.intro}
              long_text={post.content.long_text}
              slug={post.full_slug}
              coverImage={post?.content.coverImage}
              blur_hash={post.content.blur_hash}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedPosts;
