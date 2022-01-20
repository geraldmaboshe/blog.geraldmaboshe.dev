import React from "react";
import HeroPost from "./HeroPost";
import MinorHeroPost from "./MinorHeroPost";
import Post from "./Post";

function FeaturedPosts({ blok, devtoArticles }) {
  let [heroPost, ...posts] = blok.posts;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{blok.title}</h1>
      <div className="flex flex-col md:flex-row md:gap-x-8">
        <div className="md:w-2/3">
          <HeroPost
            key={heroPost.content._uid}
            title={heroPost.content.title}
            intro={heroPost.content.intro}
            long_text={heroPost.content.long_text}
            slug={heroPost.full_slug}
            postImage={heroPost.content.postImage}
          />
        </div>
        <div className="flex flex-col md:w-1/3">
          {posts.map((post) => (
            <MinorHeroPost
              key={post.id}
              title={post.title}
              intro={post.description}
              long_text={post.body_markdown}
              slug={post.slug}
              postImage={post.cover_image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedPosts;
